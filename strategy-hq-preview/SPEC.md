# Strategy HQ — Scope and production integration

## User journeys
Quick Strategy: choose a label business goal → apply a strategy template → activate a local checklist → inspect verified outcome metrics.
Strategy Studio: describe an ambitious goal → receive an editable rule-based strategy → get manual tool suggestions → save a tracked work plan.

## Public demo boundaries
No user catalogs, contracts, contact lists, tokens, Airtable identifiers, source metadata exports or financial records are included in public source. The demo uses localStorage and does not connect to live platforms, send emails, perform submissions, publish content or spend money.

## Production integrations
Reuse an existing operational Airtable base (recordings, release tasks, radio campaigns, royalties, approval queue and workflow presets), with server-side API access only.
Drive remains source storage and document provenance. Artist Growth needs a verified authorized roster and profile before schedule sync. VSI AI Automation needs a verified service connection.

## Suggested MCP backend tools
- list_strategy_presets (read-only)
- draft_strategy_from_goal (read-only AI suggestion)
- create_draft_work_item (internal-only write)
- get_workflow_progress (read-only)
- get_verified_analytics (read-only)
- request_exact_external_action_approval (no execution)
- execute_approved_action (separate high-trust service; gated, audited and idempotent)

## Acceptance criteria
A goal works with both modes. Workflow actions are local until a secure backend is approved. No fake analytics. Sensitive sources never enter a public GitHub file. Any production execution requires an exact payload, named approver, authorization, timestamp and receipt.
