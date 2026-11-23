# Contributing to Awesome Agent Harness

Thanks for helping keep this list sharp and strictly scoped! Please review the scope test and keep/remove criteria before submitting a pull request.

## Scope Test (Strict)

**Does the project own and execute the agent loop?**

- **Keep:** Runnable agent harnesses (CLI, IDE, autonomous/sandbox-first, personal/browser), meta-harnesses that orchestrate or experiment over host harnesses, and harness SDKs that ship a complete execution runtime.
- **Out of scope:** Standalone sandboxes, memory databases, observability/tracing platforms, benchmarks, MCP servers, prompt/skill packs (those belong in an agent skills catalog), and general LLM app/workflow frameworks that do not ship a harness runtime.

## Keep / Remove Rubric

Entries that pass the scope test are evaluated on four signals (0–2 each; **keep at >= 6/8** unless historically foundational):

1. **Architectural Distinctiveness (0–2)** — Introduces a meaningful design trade-off rather than being a thin wrapper or unmaintained clone.
2. **Proof of Use (0–2)** — Clear documentation, reproducible install, and real-world usage.
3. **Maintenance & Freshness (0–2)** — Actively maintained (recent commits/releases) or a stable, widely referenced baseline.
4. **Openness / Inspectability (0–2)** — Open source and model-agnostic preferred; closed/source-available harnesses are included only if widely studied as reference implementations.

### Auto-Remove Triggers

- Unmaintained or archived for >12 months without lasting historical significance.
- Near-duplicate fork that does not diverge meaningfully from its upstream harness.
- Broken repository links or missing documentation.

## Formatting Rules

- Use the exact entry format:

  ```markdown
  - [Project Name](https://link-to-project) - Concise, neutral one-sentence description ending with a period.
  ```

- Keep entries **alphabetically sorted** within each section.
- Write neutral, factual descriptions without marketing superlatives.
- Use canonical repository URLs without tracking parameters.
- Submit **one entry per pull request** unless adding a cohesive new category.

## Pull Request Checklist

- [ ] Project passes the strict "owns the agent loop" scope test.
- [ ] Entry is placed in the right category and sorted alphabetically.
- [ ] Description is concise, accurate, and ends with a period.
- [ ] URL resolves cleanly and is not duplicated elsewhere in `README.md`.
