---
title: Fireworks AI
slug: fireworks-ai
vendor_name: Fireworks AI
legal_entity: Fireworks AI, Inc.
category: AI & Machine Learning
website: https://fireworks.ai
scope: global
sla_url: https://docs.fireworks.ai/faq/deployment/serverless/service-levels
last_verified: '2026-06-23'
last_updated: '2026-06-23'
sla_help_wanted: true
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_note: Fireworks' multi-tenant serverless offering explicitly has no SLA ("no latency or availability guarantees"). Enterprise references a 99.9% figure in marketing, but no binding public SLA document with a remedy was found — SLA help wanted.
credit_policy:
  calculation_type: none
  remedy_type: no_sla
claim_process:
  submission_method: N/A - No public SLA credits
  submission_url: https://fireworks.ai/enterprise
  required_evidence: []
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
  - id: serverless
    name: Serverless Inference
    category: AI
    description: Pay-per-token hosted open models
    sla_eligible: false
    source_url: https://fireworks.ai
  - id: dedicated
    name: Dedicated Deployments
    category: AI
    description: Reserved GPU deployments with autoscaling
    sla_eligible: false
    source_url: https://fireworks.ai
  - id: enterprise
    name: Enterprise (Virtual Cloud)
    category: AI
    description: Private/multi-cloud deployment
    sla_eligible: true
    source_url: https://fireworks.ai/enterprise
support:
  channels:
    - slack
  designated_contact: team
  professional_services: true
  has_24x7: false
  fastest_response: 1 hour (Urgent/P0, Enterprise)
  note: Dedicated support rep + shared Slack channel (no phone/portal). SLAs reference business hours (P1 4 bh, P2 8 bh, P3 2 bd). Engineers help build/customize/deploy models. Dedicated support rep + shared Slack channel (no phone/portal). SLAs reference business hours (P1 4 bh, P2 8 bh, P3 2 bd). Engineers help build/customize/deploy models.
  source_url: https://docs.fireworks.ai/faq/general/support/tiers-slas
---

Fireworks AI is an AI & Machine Learning provider. See the SLA/terms at [https://docs.fireworks.ai/faq/deployment/serverless/service-levels](https://docs.fireworks.ai/faq/deployment/serverless/service-levels).
