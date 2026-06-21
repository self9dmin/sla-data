---
title: Anthropic
slug: anthropic
vendor_name: Anthropic
legal_entity: Anthropic
category: AI & Machine Learning
website: https://www.anthropic.com
scope: global
sla_url: https://docs.anthropic.com/en/api/service-tiers
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: 'Old sla_url https://www.anthropic.com/legal/sla returns HTTP 404. Anthropic publishes no public SLA with a numeric uptime commitment and service credits: the Commercial Terms and Service-Specific Terms contain no SLA/credit language. The only official public availability figure is the Priority Tier "Target 99.5% uptime" stated on the Service Tiers docs page (https://docs.anthropic.com/en/api/service-tiers), which is a contractual/sales-provisioned target with no service credits and no claim process. The file''s uptime_commitment=99.9 is not supported by any official anthropic.com source and was left unchanged pending review; the only supportable official figure is 99.5% (Priority Tier target, no credits). 2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no public credit-bearing SLA confirmed.'
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: N/A - No SLA credits available
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
---

Anthropic is a AI & Machine Learning provider. Anthropic does not publish a public SLA with a numeric uptime commitment and service credits; the only official public availability figure is the Priority Tier target of 99.5% uptime documented at [https://docs.anthropic.com/en/api/service-tiers](https://docs.anthropic.com/en/api/service-tiers).

<!-- Add human-readable notes about Anthropic's SLA nuances here. -->
