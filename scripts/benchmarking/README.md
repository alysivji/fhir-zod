# Benchmarking Harness

This directory contains internal validation benchmark tooling for `fhir-zod`.

It is a repo concern, not part of the public package interface:

- benchmark scripts live under `scripts/benchmarking/`
- generated benchmark payloads go in `.local/benchmark-data/`
- benchmark result JSON goes in `.local/benchmark-results/`
- large generated payloads should not be committed

## Scenarios

Checked-in scenarios are small manifests embedded in [scenarios.ts](./scenarios.ts):

- `synthea-large-patient`
- `synthea-bundle`
- `synthea-deeply-contained`
- `synthetic-pathological-nesting`

The `synthea-*` scenarios are optional and require either:

- the repo-local wrapper at `.local/bin/synthea`, or
- `--synthea-command "<your command>"`

The command must write JSON output somewhere under its working directory. The generator runs the command inside a temporary workspace and then selects the relevant resources from the exported JSON.

## Install Synthea Locally

This repo does not commit Synthea itself. Install it into `.local/`:

1. Install Java 17 or newer.

```bash
brew install openjdk@17
```

2. Download the official standalone jar into the repo-local tools directory.

```bash
mkdir -p .local/tools/synthea .local/bin
curl -fL https://github.com/synthetichealth/synthea/releases/download/v4.0.0/synthea-with-dependencies.jar \
  -o .local/tools/synthea/synthea-with-dependencies.jar
```

3. Create a small wrapper at `.local/bin/synthea` that points at the Homebrew Java install and the downloaded jar.

```bash
cat > .local/bin/synthea <<'EOF'
#!/usr/bin/env bash
set -euo pipefail

JAVA_HOME_CANDIDATE="$(brew --prefix openjdk@17 2>/dev/null || true)"
if [[ -n "${JAVA_HOME_CANDIDATE}" ]]; then
  export JAVA_HOME="${JAVA_HOME_CANDIDATE}/libexec/openjdk.jdk/Contents/Home"
  export PATH="${JAVA_HOME}/bin:${PATH}"
fi

JAR_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/../tools/synthea" && pwd)/synthea-with-dependencies.jar"
OUTPUT_DIR="${FHIR_ZOD_BENCH_OUTPUT_DIR:-output}"

exec java -jar "${JAR_PATH}" \
  --exporter.fhir.export=true \
  --exporter.baseDirectory="${OUTPUT_DIR}" \
  "$@"
EOF
chmod +x .local/bin/synthea
```

4. Smoke-test the wrapper.

```bash
.local/bin/synthea -p 1 Massachusetts
```

The benchmark generator defaults to this wrapper path, so no extra flag is needed once it exists.

## Commands

Generate a scenario into `.local/benchmark-data/`:

```bash
npm run bench:generate -- --scenario synthetic-pathological-nesting
npm run bench:generate -- --scenario synthea-bundle
npm run bench:generate -- --scenario synthea-bundle --synthea-command 'docker run ...'
```

Run benchmarks against one or more files or directories:

```bash
npm run bench:run -- tests/fixtures/r4/Claim/claim-example-institutional-rich.json
npm run bench:run -- .local/benchmark-data
npm run bench:run -- .local/benchmark-data/synthea-large-patient.json --iterations 2000
```

Run the default validation benchmark suite:

```bash
npm run bench:validation
```

The default suite always includes a couple of checked-in R4 fixtures and the synthetic pathological nesting scenario. It also includes any generated `synthea-*` inputs already present under `.local/benchmark-data/`.
