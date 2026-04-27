[private]
default:
    @just --list

# Show available commands
help:
    @just --list

# Install project dependencies
install:
    npm install

# Build the library
build:
    npm run build

# Build the docs site
docs-build:
    npm run docs:build

# Regenerate docs-derived resource inventory
docs-prepare:
    npm run docs:prepare

# Run the docs site locally
docs-dev:
    npm run docs:dev

# Run the test suite
test:
    npm test

# Run tests with coverage
coverage:
    npm run coverage

# Run Biome linter
lint:
    npm run lint

# Format files with Biome
format:
    npm run format

# Run Biome checks
check:
    npm run check

# Download pinned FHIR spec inputs into .local
fetch-spec:
    npm run fetch-spec

# Run the generator entrypoint
generate:
    npm run generate

# List concrete STU3 resources and final generation targets
list-stu3-targets:
    npm run list:stu3-targets

# List concrete R4 resources and final generation targets
list-r4-targets:
    npm run list:r4-targets

# List concrete R4B resources and final generation targets
list-r4b-targets:
    npm run list:r4b-targets

# List concrete R5 resources and final generation targets
list-r5-targets:
    npm run list:r5-targets
