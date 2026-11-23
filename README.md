# Awesome Agent Harness [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of AI agent harnesses—the execution runtimes wrapped around LLMs that own the agent loop, context management, tool calling, permissions, and workspace isolation.

```text
Agent = Model + Harness
```

Every project listed here **owns and executes the agent loop**. Adjacent infrastructure (standalone sandboxes, memory databases, observability platforms, prompt/skill packs, and general workflow frameworks) is intentionally excluded.

## Contents

- [At a Glance](#at-a-glance)
- [CLI & Terminal Harnesses](#cli--terminal-harnesses)
- [IDE & Editor Harnesses](#ide--editor-harnesses)
- [Agent Multiplexers & Control Planes](#agent-multiplexers--control-planes)
- [Autonomous & Sandbox-First Harnesses](#autonomous--sandbox-first-harnesses)
- [Personal & Browser Harnesses](#personal--browser-harnesses)
- [Harness SDKs](#harness-sdks)

---

## At a Glance

Live GitHub snapshot (`2026-11-23`), generated from [`data/harnesses.json`](data/harnesses.json).

### Coding Harnesses

| Harness                           | Mobile       | Browser      | Parallel  | Models |
| --------------------------------- | ------------ | ------------ | --------- | ------ |
| **OpenCode** *(229k★ · MIT)*      | Self-hosted  | Plugin       | Worktrees | Any    |
| **Claude Code** *(157k★)*         | Official app | User browser | Worktrees | Claude |
| **Codex** *(136k★ · Apache)*      | Official app | User browser | Worktrees | OpenAI |
| **Pi** *(124k★ · MIT)*            | Community    | Plugin       | Plugin    | Any    |
| **Gemini CLI** *(109k★ · Apache)* | —            | Plugin       | —         | Gemini |
| **Cline** *(72k★ · Apache)*       | —            | User browser | —         | Any    |
| **Goose** *(57k★ · Apache)*       | —            | Plugin       | —         | Any    |
| **Aider** *(50k★ · stale)*        | —            | —            | —         | Any    |
| **Crush** *(29k★ · FSL-1.1)*      | —            | Plugin       | —         | Any    |
| **Kilo Code** *(28k★ · MIT)*      | —            | User browser | —         | Any    |
| **Roo Code** *(24k★ · stale)*     | —            | User browser | —         | Any    |

### Agent Multiplexers & Control Planes

| Harness                          | Mobile       | Browser  | Parallel      | Models    |
| -------------------------------- | ------------ | -------- | ------------- | --------- |
| **T3 Code** *(74k★ · MIT)*       | Official app | Via host | Worktrees     | Host CLIs |
| **oh-my-openagent** *(71k★)*     | Via host     | Via host | Subagents     | Any       |
| **Trellis** *(15k★ · AGPL-3.0)*  | —            | Via host | Subagents     | Host CLIs |
| **better-harness** *(2k★ · MIT)* | —            | Via host | Batch         | Host CLIs |
| **OpenHarness** *(2k★ · MIT)*    | Web UI       | Via host | Multi-session | Host CLIs |

### Always-On, Autonomous & Browser Harnesses

| Harness                          | Mobile    | Browser      | Parallel  | Models |
| -------------------------------- | --------- | ------------ | --------- | ------ |
| **OpenClaw** *(395k★ · MIT)*     | Messaging | User browser | Daemon    | Any    |
| **Hermes Agent** *(266k★ · MIT)* | Messaging | Headless     | Daemon    | Any    |
| **Browser Use** *(122k★ · MIT)*  | —         | User browser | Multi-tab | Any    |
| **OpenHands** *(94k★ · MIT)*     | Web UI    | Headless     | Cloud     | Any    |
| **SWE-agent** *(21k★ · MIT)*     | —         | —            | Batch     | Any    |

---

## CLI & Terminal Harnesses

Terminal-native agent harnesses that run directly alongside local repositories, shells, and Git workflows.

- [Aider](https://github.com/Aider-AI/aider) - Git-native Python terminal pair programmer with repository mapping, clean multi-file diffs, and automatic commits *(last active 2026-05)*.
- [Claude Code](https://github.com/anthropics/claude-code) - Anthropic's terminal coding harness with worktrees, lifecycle hooks, Chrome extension, and official mobile Remote Control.
- [Codex](https://github.com/openai/codex) - OpenAI's Rust CLI, desktop, cloud, and mobile-paired remote harness with OS-level sandboxing and scheduled automations.
- [Crush](https://github.com/charmbracelet/crush) - Multi-model Go terminal coding harness by Charmbracelet with LSP-aware edits and MCP support.
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) - Google's open-source terminal agent harness with OS/Docker sandboxing and extensible MCP tooling.
- [Goose](https://github.com/aaif-goose/goose) - Single-binary Rust agent harness with native MCP extensions, named sessions, and repeatable headless recipes.
- [OpenCode](https://github.com/anomalyco/opencode) - Open-source terminal, desktop, and self-hosted web/mobile coding harness supporting 75+ model providers and LSP.
- [Pi](https://github.com/earendil-works/pi) - Minimalist TypeScript terminal harness built around four core tools (`read`, `write`, `edit`, `bash`) and 25+ lifecycle hooks.
- [Plandex](https://github.com/plandex-ai/plandex) - Terminal coding harness designed for large multi-file tasks using structured planning and reviewable diff sandboxes *(last active 2025-10)*.

## IDE & Editor Harnesses

Harnesses embedded directly inside code editors with visual diff review, checkpoints, and step-gated approvals.

- [Cline](https://github.com/cline/cline) - Open-source VS Code agent harness with Plan/Act modes, shadow-git checkpoints, built-in browser control, and MCP.
- [Continue](https://github.com/continuedev/continue) - Open-source IDE coding assistant and agent extension for VS Code and JetBrains supporting bring-your-own models.
- [Kilo Code](https://github.com/Kilo-Org/kilocode) - Open-source, model-agnostic coding agent spanning VS Code, JetBrains, CLI, and cloud surfaces.
- [Roo Code](https://github.com/RooCodeInc/Roo-Code) - Extensible IDE agent harness derived from Cline featuring customizable agent modes, browser control, and terminal execution *(last active 2026-05)*.

## Agent Multiplexers & Control Planes

Control planes, multiplexers, and overlays that coordinate multiple coding agent sessions or host harnesses in parallel.

- [better-harness](https://github.com/QoderAI/better-harness) - Open-source harness engineering toolkit for defining harnesses as code, running controlled experiments, and comparing outcomes.
- [Harness²](https://github.com/google-research/harness2) - Google Research framework exploring recursive agent harnessing via propose-probe-compose loops in open-world tasks.
- [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) - Multi-agent orchestration overlay for OpenCode adding parallel subagents, background tasks, and persistent execution modes.
- [OpenHarness](https://github.com/autonomous-ai/openharness) - Open-source command center and multiplexer for running parallel coding agent sessions with persistent contexts and messaging.
- [T3 Code](https://github.com/pingdotgg/t3code) - Unified desktop, web, and mobile multiplexer for controlling local Claude Code, Codex, and OpenCode sessions over worktrees.
- [Trellis](https://github.com/mindfold-ai/Trellis) - Structured agent harness overlay emphasizing versioned specs, skill recording, and coherent multi-platform workspaces.

## Autonomous & Sandbox-First Harnesses

End-to-end engineering runtimes built around containerized execution and long-horizon autonomous loops.

- [OpenHands](https://github.com/OpenHands/OpenHands) - Open-source autonomous software engineering platform (formerly OpenDevin) with containerized sandboxes, LiteLLM routing, and ACP.
- [SWE-agent](https://github.com/SWE-agent/SWE-agent) - Research-to-production autonomous harness introducing purpose-built Agent-Computer Interfaces for resolving GitHub issues.
- [TrueForge](https://github.com/truefoundry/trueforge) - Open-source agent harness managing model loops, MCP tools, skills, sandboxed execution, and approvals via UI, API, and SDK.

## Personal & Browser Harnesses

Always-on local runtimes and browser-execution harnesses connecting models to messaging channels, operating systems, or live web pages.

- [Browser Use](https://github.com/browser-use/browser-use) - Open-source web automation harness enabling LLM agents to navigate, click, fill forms, and drive local or headless browsers.
- [Hermes Agent](https://github.com/NousResearch/hermes-agent) - Python autonomous agent daemon by Nous Research featuring cross-session memory, messaging channels, and self-authored skills.
- [OpenClaw](https://github.com/openclaw/openclaw) - Self-hosted, pluggable TypeScript personal agent gateway connecting local automations and browser control to 20+ messaging apps.

## Harness SDKs

Code-first SDKs exposing a complete agent harness runtime (execution loop, tools, sandboxing, and session management).

- [Claude Agent SDK (Python)](https://github.com/anthropics/claude-agent-sdk-python) - Official Python SDK exposing Claude Code's agent loop, local tooling, permissions, and in-process MCP integration.
- [Claude Agent SDK (TypeScript)](https://github.com/anthropics/claude-agent-sdk-typescript) - Official TypeScript SDK for programmatically embedding and customizing Claude's agent harness.
- [Deep Agents](https://github.com/langchain-ai/deepagents) - Batteries-included open-source Python agent harness and CLI from LangChain with task planning, filesystem memory, and subagents.
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) - Lightweight Python SDK for agent loops, multi-agent handoffs, guardrails, sessions, and execution tracing.
- [Strands Agents Harness SDK](https://github.com/strands-agents/harness-sdk) - Open-source Python/TypeScript harness SDK providing policy-enforced sandboxing, built-in tools, and evaluation hooks.

---

## Contributing

Contributions are welcome! Edit [`data/harnesses.json`](data/harnesses.json) and run `node scripts/build.mjs`—see [CONTRIBUTING.md](CONTRIBUTING.md) for the scope test and guidelines.
