# Add Lukulu HQ to Codex Cloud

The source repository is already on GitHub: https://github.com/DjNastor/Lukulu-office. **This GitHub commit does not create or publish a Codex Cloud environment.** That account-level setup must be done by the account holder in Codex on desktop or web.

## Recommended environment
- Name: `Lukulu HQ — Label Office`.
- Repository: `DjNastor/Lukulu-office`.
- Starting development ref: `upgrade/v41-operations-control-20261029` (V41); keep `main` unchanged.
- Working directory: repository root.
- Runtime: Python 3 and Node.js (HTML + JS; no required framework build).
- Preview command for static files: `python3 -m http.server 3000`.
- Credentials: **none needed** for the local UI. Keep any future tokens in protected environment secrets, never in files.
- Start task: `Read AGENTS.md and OPERATIONS-V41.md. Run tests, audit V41 UI on desktop and mobile, report blockers, then fix issues on a development branch without deploying to production.`

## Setup in your Codex account
1. On desktop or web sign in to your ChatGPT/Codex account and select Codex Cloud.
2. Open Environments and create a new environment; connect GitHub when asked.
3. Authorise access to the **DjNastor/Lukulu-office** repository using the correct GitHub account. Merely installing the GitHub connector in ChatGPT may not grant the separate Codex Cloud environment access.
4. Select or add the repository to the environment. Include the `upgrade/v41-operations-control-20261029` branch for V41 development.
5. Configure the project setup (no mandatory installs for the standalone HTML). Test the environment and **publish** the environment.
6. Start a cloud task with the prompt above. The published environment can then be used from mobile.
7. Review PRs and tests before merging and changing a Vercel deployment.

If no environments or repository picker appears, verify your account/workspace Cloud availability and connected GitHub permissions. See:
- https://help.openai.com/en/articles/20001545-using-codex-cloud
- https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan

## Product status
V41 is review-only until approved; the live Vercel project was not verified due to 403 access, and direct distributor/social/rights submissions have not been implemented. The Android test APK is a debug preview, not a production app.
