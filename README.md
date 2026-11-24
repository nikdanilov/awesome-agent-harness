# Awesome Agent Harness [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of AI agent harnesses—the execution runtimes wrapped around LLMs that own the agent loop, tools, channels, memory, and proactive triggers.

```text
Agent = Model + Harness

  01 Tools       Machine / terminal, browser, API, MCP, CLI
  02 Channels    Own app, terminal, texting, chat apps, voice, email
  03 Memory      Persistent state injected into context + memory tools
  04 Proactivity Cron schedules & webhooks that wake the loop without a human prompt
```

Every project listed here **owns and executes the agent loop**. Adjacent infrastructure (standalone sandboxes, memory databases, observability platforms, prompt/skill packs, and general workflow frameworks) is intentionally excluded.

## Contents

- [Comparison](#comparison)
- [Personal & Always-On Harnesses](#personal--always-on-harnesses)
- [Coding Harnesses](#coding-harnesses)
- [Agent Multiplexers & Control Planes](#agent-multiplexers--control-planes)
- [Autonomous SWE Harnesses](#autonomous-swe-harnesses)

---

## Comparison

`●` Default · `○` Available · `—` Not offered · `?` Not published

### Tools & Environment

| Harness                          | Own VM | Your Machine | Own Browser | Your Browser | Built-in Apps | MCP |
| -------------------------------- | :----: | :----------: | :---------: | :----------: | :-----------: | :-: |
| **OpenClaw** *(395k★ · MIT)*     |   ○    |      ●       |      ●      |      ○       |       ○       |  ○  |
| **Hermes Agent** *(266k★ · MIT)* |   ○    |      ●       |      ●      |      ○       |       ○       |  ○  |
| **OpenBot** *(13k★ · MIT)*       |   ●    |      ○       |      ●      |      —       |       ○       |  ●  |
| **TrustClaw** *(919★ · MIT)*     |   ●    |      —       |      —      |      —       |       ○       |  —  |
| **Poke**                         |   ●    |      —       |      ●      |      —       |       ○       |  ○  |
| **Grok Bot**                     |   ●    |      ○       |      ●      |      ?       |       ○       |  ○  |
| **Muse**                         |   ●    |      ○       |      ●      |      ○       |       ○       |  ○  |
| **Duet**                         |   ●    |      ○       |      ●      |      ○       |       ○       |  ○  |
| **Dots**                         |   ●    |      ○       |      ●      |      ○       |       ○       |  ○  |
| **Instinct**                     |   ●    |      ○       |      ●      |      ○       |       ○       |  —  |

### Channels

| Harness                          | Own App | Terminal | Texting | Chat Apps | Voice | Email |
| -------------------------------- | :-----: | :------: | :-----: | :-------: | :---: | :---: |
| **OpenClaw** *(395k★ · MIT)*     |    ●    |    ●     |    ○    |     ○     |   ○   |   —   |
| **Hermes Agent** *(266k★ · MIT)* |    ●    |    ●     |    ○    |     ○     |   ○   |   ○   |
| **OpenBot** *(13k★ · MIT)*       |    ●    |    —     |    ○    |     ○     |   ○   |   —   |
| **TrustClaw** *(919★ · MIT)*     |    ●    |    —     |    —    |     ○     |   —   |   —   |
| **Poke**                         |    —    |    —     |    ●    |     ○     |   ●   |   —   |
| **Grok Bot**                     |    ●    |    —     |    —    |     ○     |   ●   |   ○   |
| **Muse**                         |    ●    |    —     |    —    |     ○     |   ●   |   ○   |
| **Duet**                         |    ●    |    —     |    —    |     —     |   ●   |   —   |
| **Dots**                         |    ●    |    —     |    ○    |     ○     |   ●   |   —   |
| **Instinct**                     |    —    |    —     |    ●    |     ○     |   ●   |   ○   |

---

## Personal & Always-On Harnesses

Proactive personal, cloud-VM, messaging, and browser-execution harnesses that run continuously on their own machine or yours.

- [Browser Use](https://github.com/browser-use/browser-use) - Open-source web automation harness enabling LLM agents to navigate, click, fill forms, and drive local or headless browsers.
- [Dots](https://openai.com/index/introducing-dots/) - OpenAI's proactive cross-app personal agent running in a persistent cloud machine with optional local machine/browser access, chat/voice channels, and MCP.
- [Duet](https://claude.com/claude-duet) - Anthropic's Claude Duet always-on work agent with a managed cloud computer, optional local machine/browser control, voice, built-in apps, and MCP.
- [Grok Bot](https://grok.com) - xAI's autonomous teammate fleet giving each persistent agent its own cloud VM sandbox, terminal, browser/computer use, and multi-bot coordination.
- [Hermes Agent](https://github.com/NousResearch/hermes-agent) - Python autonomous agent daemon by Nous Research featuring persistent memory, messaging/email channels, scheduled tasks, and self-authored skills.
- [Instinct](https://www.instinct.com) - Autonomous personal concierge agent controlled natively over texting, voice calls, chat apps, and email using dedicated cloud desktops and browser automation.
- [Muse](https://ai.meta.com) - Meta's proactive personal agent across its own app, WhatsApp, voice, and email with a managed cloud machine, browser automation, and MCP.
- [OpenBot](https://github.com/CopilotKit/OpenBot) - Open, self-hostable workspace and multi-agent personal bot platform by CopilotKit plugging into any model, agent, and MCP server.
- [OpenClaw](https://github.com/openclaw/openclaw) - Self-hosted, pluggable TypeScript personal agent gateway connecting local automations, cron triggers, and browser control to 20+ messaging apps.
- [Poke](https://poke.com) - Messaging-native proactive personal assistant operating across iMessage, WhatsApp, Telegram, and voice with cloud browser execution and MCP.
- [TrustClaw](https://github.com/ComposioHQ/trustclaw) - Self-hostable personal AI agent by Composio emphasizing OAuth-sandboxed cloud execution, vector memory, Telegram, and 1,000+ app integrations.

## Coding Harnesses

Interactive coding agent harnesses spanning terminals, desktop apps, and IDE extensions.

- [Aider](https://github.com/Aider-AI/aider) - Git-native Python terminal pair programmer with repository mapping, clean multi-file diffs, and automatic commits *(last active 2026-05)*.
- [Antigravity](https://github.com/google-antigravity/antigravity-cli) - Google's agentic development harness across CLI (`agy`), desktop app, and IDE with a built-in browser agent, sandboxing, and parallel swarms.
- [Claude Code](https://github.com/anthropics/claude-code) - Anthropic's coding harness across terminal, IDE extensions, Chrome extension, and official mobile Remote Control with worktrees, hooks, and scheduled runs.
- [Cline](https://github.com/cline/cline) - Open-source VS Code agent harness with Plan/Act modes, shadow-git checkpoints, built-in browser control, and MCP.
- [Codex](https://github.com/openai/codex) - OpenAI's Rust coding harness across CLI, IDE extensions, desktop, cloud, and mobile-paired remote control with OS sandboxing and scheduled automations.
- [Continue](https://github.com/continuedev/continue) - Open-source IDE coding assistant and agent extension for VS Code and JetBrains supporting bring-your-own models.
- [Crush](https://github.com/charmbracelet/crush) - Multi-model Go terminal coding harness by Charmbracelet with LSP-aware edits and MCP support.
- [Goose](https://github.com/aaif-goose/goose) - Single-binary Rust agent harness with native MCP extensions, named sessions, and repeatable headless recipes.
- [Grok Build](https://github.com/xai-org/grok-build) - xAI's open-source Rust coding harness with mouse-interactive TUI, headless CI mode, ACP editor integration, worktree subagents, MCP, and LSP.
- [Kilo Code](https://github.com/Kilo-Org/kilocode) - Open-source, model-agnostic coding agent spanning VS Code, JetBrains, CLI, and cloud surfaces.
- [OpenCode](https://github.com/anomalyco/opencode) - Open-source terminal, desktop, and self-hosted web/mobile coding harness supporting 75+ model providers and LSP.
- [Pi](https://github.com/earendil-works/pi) - Minimalist TypeScript terminal harness built around four core tools (`read`, `write`, `edit`, `bash`) and 25+ lifecycle hooks.

## Agent Multiplexers & Control Planes

Control planes, multiplexers, and overlays that coordinate multiple coding agent sessions or host harnesses in parallel.

- [better-harness](https://github.com/QoderAI/better-harness) - Open-source harness engineering toolkit for defining harnesses as code, running controlled experiments, and comparing outcomes.
- [cmux](https://github.com/manaflow-ai/cmux) - Ghostty-based native terminal multiplexer for AI coding agents with agent-aware notifications, an in-app scriptable split browser, and a companion mobile app.
- [Herdr](https://github.com/herdrdev/herdr) - Rust terminal multiplexer and persistent daemon for coding agents with semantic state tracking (working/blocked/done), multi-machine SSH orchestration, and socket API.
- [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) - Multi-agent orchestration overlay for OpenCode adding parallel subagents, background tasks, and persistent execution modes.
- [OpenHarness](https://github.com/autonomous-ai/openharness) - Open-source command center and multiplexer for running parallel coding agent sessions with persistent contexts and messaging.
- [T3 Code](https://github.com/pingdotgg/t3code) - Unified desktop, web, and mobile multiplexer for controlling local Claude Code, Codex, and OpenCode sessions over worktrees.
- [Trellis](https://github.com/mindfold-ai/Trellis) - Structured agent harness overlay emphasizing versioned specs, skill recording, and coherent multi-platform workspaces.

## Autonomous SWE Harnesses

Containerized software engineering runtimes built for unattended issue resolution and long-horizon repo automation.

- [OpenHands](https://github.com/OpenHands/OpenHands) - Open-source autonomous software engineering platform (formerly OpenDevin) with containerized sandboxes, LiteLLM routing, and ACP.
- [SWE-agent](https://github.com/SWE-agent/SWE-agent) - Research-to-production autonomous harness introducing purpose-built Agent-Computer Interfaces for resolving GitHub issues.
- [TrueForge](https://github.com/truefoundry/trueforge) - Open-source agent harness managing model loops, MCP tools, skills, sandboxed execution, and approvals via UI, API, and SDK.

---

## Contributing

Contributions are welcome! Edit `data/harnesses.json` and run `node scripts/build.mjs`—see [CONTRIBUTING.md](CONTRIBUTING.md) for the scope test and guidelines.
