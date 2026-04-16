---
name: fhir-zod-issue-workflow
description: Use when a GitHub issue URL or issue number is provided for fhir-zod, including deciding what work remains, starting implementation from an issue, summarizing issue state, or commenting on an issue.
---

# fhir-zod Issue Workflow

Use this skill inside the `fhir-zod` repo when the user provides a GitHub issue URL/number or asks what remains for an issue.

## Gather Context First

Before deciding what needs to be done:

1. Read the issue title, body, labels, state, assignees, comments, and linked PRs:

```bash
gh issue view <issue-number> --json title,body,labels,state,assignees,comments,linkedPullRequests,url
```

2. For every linked PR or clearly related PR mentioned in the issue/comments, read its title, body, state, files, and comments:

```bash
gh pr view <pr-number> --json title,body,state,files,comments,url
```

3. If related PRs are not explicitly linked but the issue refers to prior work, search PRs before making assumptions:

```bash
gh pr list --state all --search "<issue-number> OR #<issue-number>" --json number,title,state,url
```

4. Check local branch context before editing:

```bash
git status --short
git log --oneline main..HEAD
```

## Decide What Remains

- Separate completed work from remaining work.
- Treat merged PRs as context, not proof that the issue is fully complete.
- Compare issue acceptance criteria against current code/tests/docs.
- If the issue is broad, identify the next smallest reviewable PR instead of trying to close everything at once.
- If current work should not close the issue, use `Refs #<issue-number>` rather than `Closes #<issue-number>` in PR notes.

## Issue Comments

- When creating or editing issue comments as the user, include the attribution footer `_Created with Codex._` unless the user explicitly asks not to.
- Keep comments concise: what changed, what remains, and the recommended next step.
- If mentioning coverage or test results, include exact commands or metrics only when recently verified.

## Handoff To PR Workflow

When preparing PR notes or creating a PR from issue work, also use `fhir-zod-pr-workflow`.
