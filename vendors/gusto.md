---
title: Gusto
slug: gusto
vendor_name: Gusto
legal_entity: Gusto
category: HR & People Operations
website: https://www.gusto.com
scope: global
sla_url: https://gusto.com/legal/terms
last_verified: '2026-06-20'
last_updated: '2026-06-19'
needs_review: true
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://gusto.com/support
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
  - id: benefits
    name: Gusto Benefits
    category: Benefits
    description: Benefits administration
    sla_eligible: true
    source_url: https://gusto.com/legal/terms
  - id: hiring
    name: Gusto Hiring & Onboarding
    category: Onboarding
    description: Hiring and onboarding
    sla_eligible: true
    source_url: https://gusto.com/legal/terms
  - id: hr
    name: Gusto HR
    category: HRIS
    description: HR management tools
    sla_eligible: true
    source_url: https://gusto.com/legal/terms
  - id: payroll
    name: Gusto Payroll
    category: Payroll
    description: Full-service payroll
    sla_eligible: true
    source_url: https://gusto.com/legal/terms
  - id: time
    name: Gusto Time Tools
    category: Time & Attendance
    description: Time tracking
    sla_eligible: true
    source_url: https://gusto.com/legal/terms
support:
  tiers:
    - "Simple"
    - "Plus"
    - "Premium"
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: false
  success_program: true
  training: false
  pricing: included
  source_url: "https://gusto.com/product/pricing"
  note: "Premium adds a CSM and priority support; no published response-time SLA."
---

Gusto is a HR & People Operations provider. See the official terms at [https://gusto.com/legal/terms](https://gusto.com/legal/terms). Gusto does not publish a public uptime SLA with service credits.

<!-- Add human-readable notes about Gusto's SLA nuances here. -->
