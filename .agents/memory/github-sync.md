---
name: GitHub workspace sync
description: Distinguishes GitHub API access from Replit's native Git-pane and Git CLI authentication.
---

**Rule:** A GitHub connector authorization is not equivalent to Git CLI or Replit Git-pane authentication. In this environment, authenticated GitHub REST reads worked, but `git push` lacked credentials and REST writes through the connector were blocked by a Cloudflare challenge.

**Why:** While setting up automatic repository sync, the GitHub API connection could read repository state but could not publish commits from the Repl. The native auto-sync control is available through Replit's Git pane.

**How to apply:** For ongoing repository sync, connect GitHub through Replit's Connected Services, link the repository in the Git pane, and enable Auto-Sync. If CLI push fails, do not search for or handle raw tokens; use the native Git pane flow.