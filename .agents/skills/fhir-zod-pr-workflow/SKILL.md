---
name: fhir-zod-pr-workflow
description: Use when preparing pull request notes, creating a pull request, naming work from a GitHub issue or non-GitHub task, or summarizing completed fhir-zod changes for review.
---

# fhir-zod PR Workflow

Use this skill inside the `fhir-zod` repo when work is ready for review or when the user asks for PR notes.

## Naming

- For GitHub issue work, use `<issue-number>/<short-slug>`, for example `16/codecov-metrics`.
- For non-GitHub work, use `<short-slug>`, for example `primitive-arrays`.
- Keep slugs lowercase, concrete, and short. Prefer the problem or feature over abstract words.
- If a higher-priority instruction already set the branch name, do not rename it just to match this convention. Mention the mismatch in the PR notes only if it matters.

## Before Writing Notes

1. Read `.github/pull_request_template.md`.
2. Check `git status --short` and `git diff --stat`.
3. If the work came from a GitHub issue, read the issue title/body/comments with `gh issue view`.
4. Confirm whether docs, generated output, dependency lockfiles, or workflow files changed.
5. List the exact verification commands that passed, failed, or were skipped.

## Fill The Template

Create PR notes that follow the repo template exactly:

- **Summary**: 1-3 sentences describing the problem and the fix. Include `Closes #<number>` for GitHub issue work when the PR should close it.
- **Changes**: concise bullets for implementation details reviewers need to understand. Call out generated files, CI changes, dependency updates, or risky areas.
- **API Or Breaking Changes**: check exactly one box and explain only if public API changed.
- **Testing**: include commands in a fenced `bash` block. Add brief results after the block when useful.
- **Docs**: check exactly one box. Treat workflow/config-only notes as docs only when user-facing docs changed.

## Extra Review Notes

- Mention skipped tests with the reason, especially spec-cache skips.
- Mention follow-up work only when it is real and not part of the current PR.
- Do not paste huge command output; summarize the meaningful result.
- Prefer writing PR notes to `.context/pr-notes.md` when the user asks for notes but does not ask to open a PR.
- When creating a PR with `gh pr create`, pass the completed notes with `--body-file` and use the target branch `main` unless the user says otherwise.
