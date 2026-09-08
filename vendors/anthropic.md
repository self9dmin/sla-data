---
title: Anthropic
slug: anthropic
vendor_name: Anthropic
legal_entity: Anthropic
category: AI & Machine Learning
website: https://www.anthropic.com
scope: global
sla_url: https://www.anthropic.com/legal/commercial-terms
last_verified: '2026-06-23'
last_updated: '2026-06-23'
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: Standard (default) API is best-effort — the Commercial Terms provide the Services "as is" / "as available" and disclaim any uptime warranty, with no service credits. The paid Priority Tier published a 99.5% uptime TARGET but is no longer available for new purchases (existing commitments honored through contract end). It was a capacity commitment, not a credit-backed SLA. A higher availability SLA may be offered to Enterprise customers under separately negotiated terms.
credit_policy:
  calculation_type: none
  remedy_type: no_sla
sla_tiers:
  - name: Priority Tier (Deprecated)
    requirement: No longer available for new purchases; existing commitments honored through contract end
    uptime_commitment: 99.5
    source_url: https://platform.claude.com/docs/en/api/service-tiers
claim_process:
  submission_method: N/A - Standard API has no SLA credits
  submission_url: https://support.anthropic.com
  review_timeline: N/A
  credit_application: N/A - Use via hyperscaler (Bedrock/Vertex) for SLA coverage
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Free tier services
  - Beta features
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: true
    claim_assistance: false
    availability: Business hours
    channels:
      - Email
    response_times:
      general: < 24 hours
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
  - id: api
    name: Claude API
    category: AI
    description: Claude AI model API
    sla_eligible: true
    source_url: https://www.anthropic.com/legal/commercial-terms
  - id: claude-web
    name: Claude.ai
    category: AI
    description: Claude web interface
    sla_eligible: true
    source_url: https://www.anthropic.com/legal/commercial-terms
  - id: workbench
    name: Workbench
    category: AI
    description: API testing and development
    sla_eligible: true
    source_url: https://www.anthropic.com/legal/commercial-terms
support:
  channels:
    - email
    - portal
  designated_contact: team
  professional_services: false
  has_24x7: false
  note: Email/portal (support.claude.com, Console); no published response-time SLA, phone, or named CSM. Enterprise onboarding via sales. ("Priority Tier" is API throughput, not support.) Email/portal (support.claude.com, Console); no published response-time SLA, phone, or named CSM. Enterprise onboarding via sales. ("Priority Tier" is API throughput, not support.)
  source_url: https://claude.com/solutions/enterprise
---

Anthropic is an AI & Machine Learning provider. Anthropic does not publish a credit-backed SLA. The Standard API tier is best-effort with no uptime guarantee. The Priority Tier targeted 99.5% uptime but is no longer available for new purchases — existing commitments are honored through their contract end date. Enterprise customers may negotiate separate availability terms. For credit-backed SLA coverage, use Claude via a hyperscaler (AWS Bedrock, Google Vertex AI) where the cloud provider's SLA applies.

<!-- Add human-readable notes about Anthropic's SLA nuances here. -->
