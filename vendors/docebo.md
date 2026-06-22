---
title: Docebo
slug: docebo
vendor_name: Docebo
legal_entity: Docebo
category: HR & People Operations
website: https://www.docebo.com
scope: global
sla_url: https://www.docebo.com/company/service-level-agreement/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 30
has_automatic_credits: true
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 30
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99.0
      credit_percent: 30
claim_process:
  submission_method: Automatic
  submission_url: https://www.docebo.com/company/service-level-agreement/
  required_evidence: []
  credit_application: Applied to customer account; refund within 60 days if no further fees owing
  notes: Credits are applied by Docebo automatically; no customer claim or deadline. Triggered when availability is below the Availability Percentage for two (2) calendar months in any six (6) month period.
global_exclusions:
  - Planned downtime during maintenance windows
  - Emergency downtime (with ~24 hours advance notice)
  - Force majeure events
  - Customer misconfiguration (failure to configure per Documentation/instructions)
  - Customer internet connectivity issues
  - Unavailability of specific features while other key features remain available
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
  - id: connect
    name: Docebo Connect
    category: Integration
    description: Integration platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.docebo.com/company/service-level-agreement/
  - id: content
    name: Docebo Content
    category: Content
    description: Learning content marketplace
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.docebo.com/company/service-level-agreement/
  - id: learn
    name: Docebo Learn
    category: LMS
    description: Learning management system
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.docebo.com/company/service-level-agreement/
  - id: shape
    name: Docebo Shape
    category: Content Authoring
    description: AI-powered content creation
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.docebo.com/company/service-level-agreement/
support:
  tiers:
    - "Standard"
    - "Essential"
    - "Advantage"
    - "Premier"
    - "Elite"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.docebo.com/company/service-level-agreement/"
  note: "Premier publishes a 30-min urgent target; Elite advertises a 15-min target. Treated as targets without verified credit schedules."
---

Docebo is a Other SaaS provider. See the official SLA at [https://www.docebo.com/company/service-level-agreement/](https://www.docebo.com/company/service-level-agreement/).

<!-- Add human-readable notes about Docebo's SLA nuances here. -->
