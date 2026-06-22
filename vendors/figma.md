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
support:
  tiers:
    - "Professional"
    - "Organization"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: "https://www.figma.com/enterprise/plan/"
  note: "Enterprise advertises priority response targets and a CSM; not credit-backed."
---

Figma is a Productivity & Collaboration provider. Figma does not publish a public service-level agreement with uptime commitments or service credits; its Software Services Agreement governs Organization and Enterprise plans. See [https://www.figma.com/ssa/](https://www.figma.com/ssa/).

<!-- Add human-readable notes about Figma's SLA nuances here. -->
