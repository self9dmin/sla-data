---
title: Writer
slug: writer
vendor_name: Writer
legal_entity: Writer, Inc.
category: AI & Machine Learning
website: https://writer.com
scope: global
sla_url: https://writer.com/legal/sla/
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.9
max_credit_percent: 20
claim_deadline_days: 5
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_note: Writer's Service Level & Support Agreement commits to 99.9% monthly availability on the enterprise plan, with service credits of 5% (<99.9%), 10% (<99%), 20% (<98%) as the sole and exclusive remedy. Credits are requested in writing within 5 business days of the affected month end.
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 20
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 5
    - uptime_below: 99
      credit_percent: 10
    - uptime_below: 98
      credit_percent: 20
claim_process:
  deadlines:
    - type: submission
      days: 5
      business_days: true
      anchor_point: incident_date
      description: Submit a written request within 5 business days after the affected month
  submission_method: Email
  submission_url: https://writer.com/contact/
  required_evidence:
    - Account/Project ID
    - Affected service
    - Incident timestamps
    - Impact evidence
  review_timeline: 30 days
  credit_application: Applied to future invoice
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Beta / preview features
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
  - id: palmyra
    name: Palmyra LLMs
    category: AI
    description: Enterprise LLM family (Palmyra X5)
    sla_eligible: true
    source_url: https://writer.com
  - id: ai-studio
    name: AI Studio
    category: AI
    description: Developer platform / API
    sla_eligible: true
    source_url: https://dev.writer.com
  - id: ai-hq
    name: AI HQ / Agents
    category: AI
    description: Agent building and workflows
    sla_eligible: true
    source_url: https://writer.com
support:
  channels:
    - portal
    - email
  designated_contact: csm
  professional_services: true
  has_24x7: false
  note: Self-serve Help Center + Enterprise "dedicated support" (no published channel list, phone, or response SLA). Optional solution packs/services, custom model training, integration/onboarding (sales-quoted). Self-serve Help Center + Enterprise "dedicated support" (no published channel list, phone, or response SLA). Optional solution packs/services, custom model training, integration/onboarding (sales-quoted).
  source_url: https://writer.com/plans/
---

Writer is an AI & Machine Learning provider. See the SLA/terms at [https://writer.com/legal/sla/](https://writer.com/legal/sla/).
