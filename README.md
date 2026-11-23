# Awesome Agent Harness [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of AI agent harnesses—the execution runtimes wrapped around LLMs that own the agent loop, context management, tool calling, permissions, and workspace isolation.

```text
Agent = Model + Harness
```

Every project listed here **owns and executes the agent loop**. Adjacent infrastructure (standalone sandboxes, memory databases, observability platforms, prompt/skill packs, and general LLM workflow frameworks) is intentionally excluded to keep the catalog sharp.

## Contents

- [CLI & Terminal Harnesses](#cli--terminal-harnesses)
- [IDE & Editor Harnesses](#ide--editor-harnesses)
- [Autonomous & Sandbox-First Harnesses](#autonomous--sandbox-first-harnesses)
- [Meta-Harnesses](#meta-harnesses)
- [Personal & Browser Harnesses](#personal--browser-harnesses)
- [Harness SDKs](#harness-sdks)
- [Quick Comparison Matrix](#quick-comparison-matrix)

---

## CLI & Terminal Harnesses

Terminal-native agent harnesses that run directly alongside local repositories, shells, and Git workflows.

- [Aider](https://github.com/Aider-AI/aider) - Git-native Python terminal pair programmer with repository mapping, clean multi-file diffs, and automatic commits.
- [Claude Code](https://github.com/anthropics/claude-code) - Anthropic's official terminal coding harness with subagents, lifecycle hooks, permission controls, and MCP support.
- [Crush](https://github.com/charmbracelet/crush) - Terminal-centric multi-model coding harness built by Charmbracelet with a rich Go TUI.
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) - Google's open-source (Apache 2.0) terminal agent harness for running Gemini models with extensible tools and MCP servers.
- [Goose](https://github.com/block/goose) - Extensible, local-first open-source agent harness by Block with native MCP support and named sessions.
- [OpenAI Codex CLI](https://github.com/openai/codex) - OpenAI's local terminal coding harness featuring OS-level sandboxing (Seatbelt/Landlock) and repository instructions.
- [OpenCode](https://github.com/anomalyco/opencode) - Open-source (MIT) terminal and desktop coding harness supporting 75+ cloud and local model providers, LSP integration, and `AGENTS.md`.
- [Pi](https://github.com/badlogic/pi-mono) - Aggressively minimalist, programmable TypeScript terminal harness built around four core tools (`read`, `write`, `edit`, `bash`) and in-process lifecycle hooks.
- [Plandex](https://github.com/plandex-ai/plandex) - Terminal coding harness designed for large multi-file tasks using structured planning and reviewable diff sandboxes.

## IDE & Editor Harnesses

Harnesses embedded directly inside code editors with visual diff review, checkpoints, and step-gated approvals.

- [Cline](https://github.com/cline/cline) - Open-source VS Code agent harness with Plan/Act modes, workspace checkpoints, granular approval prompts, and MCP tooling.
- [Continue](https://github.com/continuedev/continue) - Open-source IDE coding assistant and agent extension for VS Code and JetBrains supporting bring-your-own models.
- [Kilo Code](https://github.com/Kilo-Org/kilocode) - Open-source, model-agnostic coding agent ecosystem spanning VS Code, JetBrains, CLI, and cloud surfaces.
- [Roo Code](https://github.com/RooCodeInc/Roo-Code) - Extensible IDE agent harness derived from Cline featuring customizable agent modes, file editing, and terminal execution.

## Autonomous & Sandbox-First Harnesses

End-to-end engineering runtimes built around containerized execution and long-horizon autonomous loops.

- [OpenHands](https://github.com/OpenHands/OpenHands) - Open-source (MIT) autonomous software engineering platform (formerly OpenDevin) with containerized sandboxes, LiteLLM routing, and ACP support.
- [OpenHarness](https://github.com/autonomous-ai/openharness) - Open-source command center and harness for running parallel coding agent sessions with persistent contexts and inter-agent messaging.
- [SWE-agent](https://github.com/SWE-agent/SWE-agent) - Research-to-production autonomous harness introducing purpose-built Agent-Computer Interfaces (ACIs) for resolving real-world GitHub issues.
- [TrueForge](https://github.com/truefoundry/trueforge) - Open-source agent harness managing model loops, MCP tools, skills, sandboxed execution, and approvals via chat UI, HTTP API, and TypeScript SDK.

## Meta-Harnesses

Harnesses that wrap, orchestrate, or run structured experiments over underlying host agent harnesses.

- [better-harness](https://github.com/QoderAI/better-harness) - Open-source harness engineering platform for defining coding agent harnesses as code, running controlled experiments, and comparing outcomes.
- [Harness²](https://github.com/google-research/harness2) - Google Research framework exploring recursive agent harnessing via propose-probe-compose loops in open-world tasks.
- [oh-my-opencode](https://github.com/code-yeongyu/oh-my-opencode) - Multi-agent orchestration meta-harness for OpenCode adding parallel agents, background tasks, and persistent execution modes.
- [Trellis](https://github.com/mindfold-ai/Trellis) - Structured agent harness overlay emphasizing versioned specs, skill recording, and coherent multi-platform workspaces.

## Personal & Browser Harnesses

Always-on local runtimes and browser-execution harnesses that connect models directly to messaging channels, operating systems, or live web pages.

- [Browser Use](https://github.com/browser-use/browser-use) - Open-source web automation harness enabling LLM agents to navigate, click, fill forms, and complete multi-step browser workflows.
- [Hermes Agent](https://github.com/NousResearch/hermes-agent) - Python autonomous agent harness by Nous Research featuring multi-layer cross-session memory and self-authored skill loops.
- [OpenClaw](https://github.com/openclaw/openclaw) - Self-hosted, pluggable TypeScript personal agent gateway integrating local automations with 20+ messaging platforms.

## Harness SDKs

Code-first SDKs that expose a complete agent harness runtime (execution loop, built-in tools, sandboxing, and session management) for embedding in applications.

- [Claude Agent SDK (Python)](https://github.com/anthropics/claude-agent-sdk-python) - Official Python SDK exposing Claude Code's agent loop, local tooling, permissions, and in-process MCP integration.
- [Claude Agent SDK (TypeScript)](https://github.com/anthropics/claude-agent-sdk-typescript) - Official TypeScript SDK for programmatically embedding and customizing Claude's agent harness.
- [Deep Agents](https://github.com/langchain-ai/deepagents) - Batteries-included open-source agent harness and CLI from LangChain featuring built-in task planning, filesystem working memory, and subagent delegation.
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) - Lightweight Python SDK for agent loops, multi-agent handoffs, guardrails, sessions, and execution tracing.
- [Strands Agents Harness SDK](https://github.com/strands-agents/harness-sdk) - Open-source Python/TypeScript harness SDK providing policy-enforced sandboxing, built-in tools, and evaluation hooks.

---

## Quick Comparison Matrix

| Harness | Surface | Open Source | Model Support | Core Philosophy |
| --- | --- | --- | --- | --- |
| **Claude Code** | CLI / TUI | Source-available / Proprietary | Anthropic (+ Bedrock/Vertex) | Batteries-included terminal loop, hooks, subagents |
| **Codex CLI** | CLI / TUI | Yes | OpenAI (+ configurable) | OS-sandboxed local execution & `AGENTS.md` |
| **Gemini CLI** | CLI / TUI | Yes (Apache 2.0) | Gemini | Local terminal workflow with extensible tools & MCP |
| **OpenCode** | CLI / Desktop | Yes (MIT) | 75+ providers (Cloud & Local) | Configurable, multi-provider open terminal harness |
| **Pi (`pi-mono`)** | CLI / SDK | Yes (MIT) | Multi-provider | Minimal 4-tool core + typed TypeScript lifecycle hooks |
| **Aider** | CLI | Yes (Apache 2.0) | Bring Your Own Model | Git-native pair programming with repo maps & auto-commits |
| **Goose** | CLI / Desktop | Yes (Apache 2.0) | Multi-provider | Local-first extensible agent with native MCP |
| **Cline / Roo Code** | IDE (VS Code) | Yes | Bring Your Own Model | Human-in-the-loop Plan/Act approvals & checkpoints |
| **OpenHands** | Web / Docker / CLI | Yes (MIT) | 100+ via LiteLLM | Autonomous, sandbox-first SWE platform |
| **Deep Agents** | SDK / CLI | Yes (MIT) | Multi-provider | Batteries-included planning, memory & subagent harness |
| **OpenClaw** | Gateway / Daemon | Yes | Multi-provider | Always-on personal runtime across 20+ messaging channels |

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request or issue.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc0.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related or neighboring rights to this work. See [LICENSE](LICENSE).
