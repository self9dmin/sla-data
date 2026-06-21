---
title: Figma
slug: figma
vendor_name: Figma
legal_entity: Figma
category: Productivity
website: https://www.figma.com
scope: global
sla_url: https://www.figma.com/ssa/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Prior sla_url (figma.com/legal/enterprise-terms/) returns HTTP 404. Figma's
  public legal index (figma.com/legal/) lists no SLA, service-level,
  availability, uptime, or service-credit document. The live Software Services
  Agreement (figma.com/ssa/, governing Organization/Enterprise plans) contains
  no uptime commitment or service credits, and the Master Subscription Agreement
  (figma.com/legal/msa/) expressly disclaims that "operation of the Figma
  Platform will be secure or uninterrupted." No public credit SLA exists; any
  SLA terms are negotiated privately in Enterprise/Organization Service Orders.
  All uptime/credit/claim numbers below are UNVERIFIED on figma.com and were
  left unchanged pending a verifiable source. sla_url repointed to the live SSA;
  dead services source_urls (figma.com/legal/terms-of-service/, 404) repointed
  to the live ToS (figma.com/legal/tos/). Verified 2026-06-19.

  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support Request
  submission_url: https://help.figma.com
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
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
  - id: figjam
    name: FigJam
    category: Design
    description: Whiteboarding tool
    sla_eligible: true
    source_url: https://www.figma.com/legal/tos/
  - id: api
    name: Figma API
    category: APIs
    description: REST API
    sla_eligible: true
    source_url: https://www.figma.com/legal/tos/
  - id: design
    name: Figma Design
    category: Design
    description: Design editor
    sla_eligible: true
    source_url: https://www.figma.com/legal/tos/
  - id: devmode
    name: Figma Dev Mode
    category: Development
    description: Developer handoff
    sla_eligible: true
    source_url: https://www.figma.com/legal/tos/
  - id: collaboration
    name: Figma Real-time Collaboration
    category: Design
    description: Multi-user editing
    sla_eligible: true
    source_url: https://www.figma.com/legal/tos/
---

Figma is a Productivity & Collaboration provider. Figma does not publish a public service-level agreement with uptime commitments or service credits; its Software Services Agreement governs Organization and Enterprise plans. See [https://www.figma.com/ssa/](https://www.figma.com/ssa/).

<!-- Add human-readable notes about Figma's SLA nuances here. -->
