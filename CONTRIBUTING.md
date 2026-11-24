# Contributing to Awesome Agent Harness

Thanks for helping keep this list sharp! Please review the scope test and keep/remove criteria before submitting a pull request.

## Scope Test

**Does the project own and execute the agent loop?**

- **Keep:** Runnable agent harnesses (personal/always-on, coding, autonomous SWE) and agent multiplexers/control planes that coordinate host harnesses.
- **Out of scope:** Standalone sandboxes, memory databases, observability/tracing platforms, benchmarks, MCP servers, prompt/skill packs, agent SDKs, and general LLM workflow frameworks.

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

## How to Submit an Entry

`README.md` is generated from [`data/harnesses.json`](data/harnesses.json).

1. Add your entry to `data/harnesses.json`. Only populate comparison matrix fields (`env`, `channels`) when directly verified against product docs or testing (use `"unknown"` when not published).
2. Run `node scripts/build.mjs` to regenerate `README.md` with aligned tables and alphabetical ordering.
3. Verify no duplicate URLs or broken links remain.

## Pull Request Checklist

- [ ] Project passes the "owns the agent loop" scope test.
- [ ] Entry added to `data/harnesses.json` and `README.md` regenerated with `node scripts/build.mjs`.
- [ ] Description is concise, neutral, and ends with a period.
- [ ] URL resolves cleanly without redirects.
