---
title: Google Gemini
slug: gemini
vendor_name: Google Gemini
legal_entity: Google LLC
category: AI & Machine Learning
website: https://ai.google.dev
scope: global
sla_url: https://cloud.google.com/vertex-ai/generative-ai/sla
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.5
max_credit_percent: 50
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: 'Gemini via Vertex AI ("Gemini Enterprise Agent Platform Online Inference", generateContent / streamGenerateContent) carries a published 99.5% Monthly Uptime SLO with service credits as the sole & exclusive remedy: 10% (99.0– <99.5%), 25% (95.0–<99.0%), 50% (<95.0%). Downtime = >5% error rate. Provisioned Throughput adds a 99% latency-attainment SLO. The free Google AI Studio tier is best-effort (no SLA).'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
  credit_tiers:
    - uptime_below: 99.5
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 95
      credit_percent: 50
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Request credits within 30 days of the incident (Google Cloud SLA)
  submission_method: Support Ticket
  submission_url: https://console.cloud.google.com/support
  required_evidence:
    - Project ID
    - Affected covered service
    - Incident timestamps
    - Error-rate / impact evidence
  review_timeline: 30 business days
  credit_application: Applied to future monthly bills
global_exclusions:
  - Scheduled maintenance
  - Pre-GA / preview features
  - Errors from factors outside Google's reasonable control
  - Customer hardware/software or misconfiguration
  - Quota or rate-limit violations
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: false
    claim_assistance: false
    availability: Business hours
    channels:
      - Documentation
  - name: Enterprise
    slug: enterprise
    price_model: Custom
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
    response_times:
      critical: < 1 hour
      high: < 4 hours
services:
  - id: gemini-api
    name: Gemini API (Vertex AI)
    category: AI
    description: generateContent / streamGenerateContent online inference
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://cloud.google.com/vertex-ai/generative-ai/sla
  - id: provisioned-throughput
    name: Provisioned Throughput
    category: AI
    description: Reserved-capacity inference with a latency-attainment SLO
    sla_eligible: true
    source_url: https://cloud.google.com/vertex-ai/generative-ai/sla
  - id: ai-studio
    name: Google AI Studio
    category: AI
    description: Free developer tier (best-effort, no SLA)
    sla_eligible: false
    source_url: https://ai.google.dev
support:
  channels:
    - portal
    - chat
    - phone
    - email
  designated_contact: tam
  professional_services: true
  has_24x7: true
  fastest_response: 15 min (P1, Google Cloud Premium SLO)
  note: Free dev API is community-only; paid support is via Google Cloud Customer Care (Enhanced 1-hr P1, Premium 15-min P1 + TAM, 24x7). Google Cloud Consulting. Free dev API is community-only; paid support is via Google Cloud Customer Care (Enhanced 1-hr P1, Premium 15-min P1 + TAM, 24x7). Google Cloud Consulting.
  source_url: https://docs.cloud.google.com/support/docs/premium
---

Google Gemini is an AI & Machine Learning provider. See the official SLA at [https://cloud.google.com/vertex-ai/generative-ai/sla](https://cloud.google.com/vertex-ai/generative-ai/sla).
