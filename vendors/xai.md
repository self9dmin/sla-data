---
title: xAI
slug: xai
vendor_name: xAI
legal_entity: X.AI LLC
category: AI & Machine Learning
website: https://x.ai
scope: global
sla_url: https://x.ai/legal/terms-of-service-enterprise
last_verified: '2026-06-23'
last_updated: '2026-06-23'
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: xAI's Grok API (incl. Enterprise terms) is provided "as is" / "as available" with no uptime commitment or service credits. Provisioned Throughput sells dedicated capacity for predictable latency — a performance product, not an availability SLA.
credit_policy:
  calculation_type: none
  remedy_type: no_sla
claim_process:
  submission_method: N/A - No public SLA credits
  submission_url: https://x.ai/api
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
    sla_eligible: false
    claim_assistance: false
    availability: 24/7
    channels:
      - Email
      - Phone
    response_times:
      critical: < 1 hour
      high: < 4 hours
services:
  - id: grok-api
    name: Grok API
    category: AI
    description: Chat/reasoning completions (Grok 4 family)
    sla_eligible: false
    source_url: https://docs.x.ai
  - id: grok-fast
    name: Grok Mini / Fast
    category: AI
    description: Lower-cost / faster models
    sla_eligible: false
    source_url: https://docs.x.ai
  - id: live-search
    name: Live Search API
    category: AI
    description: Real-time search-grounded responses
    sla_eligible: false
    source_url: https://docs.x.ai
support:
  channels:
    - email
  designated_contact: none
  professional_services: false
  has_24x7: false
  note: Email (sales@x.ai) + enterprise contact form + docs; no published support portal/phone/Slack, response SLA, or professional-services offering. (Latency "67ms" figures are model, not support.) Email (sales@x.ai) + enterprise contact form + docs; no published support portal/phone/Slack, response SLA, or professional-services offering. (Latency "67ms" figures are model, not support.)
  source_url: https://x.ai/api
---

xAI is an AI & Machine Learning provider. See the SLA/terms at [https://x.ai/legal/terms-of-service-enterprise](https://x.ai/legal/terms-of-service-enterprise).
