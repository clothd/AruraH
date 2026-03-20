---
task: Connect landing page forms to database
slug: 20260320-000001_connect-forms-to-database
effort: standard
phase: execute
progress: 16/16
mode: interactive
started: 2026-03-20T00:00:01Z
updated: 2026-03-20T00:01:00Z
---

## Context

Three forms on the aruraz-landing Next.js site need to persist submissions to a real database. The user prefers whichever requires less setup work — Supabase wins (hosted, free tier, JS client, already appears in the project's integrations icons).

Forms:
1. `/contact` — name, email, contributorType, message — server action exists but only logs to file
2. `/get-involved` — name, email, role, linkedin, objective — no server action, uses setTimeout simulation
3. Newsletter input component — email only — setTimeout simulation

Approach: install @supabase/supabase-js, create a server-side Supabase client, create server actions for all three forms, provide SQL schema for user to run in Supabase dashboard.

### Risks

- User hasn't created a Supabase project yet — we can't run migrations for them
- If SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are missing at runtime, the action will throw — needs graceful error
- Newsletter component is client-only and has no server action infrastructure yet

## Criteria

- [x] ISC-1: @supabase/supabase-js is added to package.json dependencies
- [x] ISC-2: lib/supabase.ts exports a server-side Supabase client using env vars
- [x] ISC-3: .env.local.example file created with SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY placeholders
- [x] ISC-4: Contact action saves name field to Supabase contact_submissions table
- [x] ISC-5: Contact action saves email field to Supabase contact_submissions table
- [x] ISC-6: Contact action saves contributor_type field to Supabase contact_submissions table
- [x] ISC-7: Contact action saves message field to Supabase contact_submissions table
- [x] ISC-8: Contact action removes file-system logging (fs.appendFileSync)
- [x] ISC-9: Contact action removes artificial 800ms delay
- [x] ISC-10: app/get-involved/actions.ts created with submitGetInvolved server action
- [x] ISC-11: Get-involved action saves name, email, role, linkedin, objective to Supabase
- [x] ISC-12: Get-involved page uses server action instead of setTimeout simulation
- [x] ISC-13: app/newsletter/actions.ts created with subscribeNewsletter server action
- [x] ISC-14: Newsletter action saves email to Supabase newsletter_subscriptions table
- [x] ISC-15: Newsletter component calls server action instead of setTimeout simulation
- [x] ISC-16: SQL schema comment block provided in lib/supabase.ts for all three tables

## Decisions

## Verification
