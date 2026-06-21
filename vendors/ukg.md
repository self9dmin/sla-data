---
title: UKG
slug: ukg
vendor_name: UKG
legal_entity: UKG
category: HR & People Operations
website: https://www.ukg.com
scope: global
sla_url: https://www.ukg.com/legal
last_verified: '2026-06-20'
last_updated: '2026-06-19'
needs_review: true
review_note: '2026-06-20 browser check: ukg.com/legal is an index exposing no public SLA numbers (customer terms gated); unverified numeric values removed.'
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
  submission_method: Support
  submission_url: https://www.ukg.com/support
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
  - id: dimensions
    name: UKG Dimensions
    category: Workforce Management
    description: Workforce management
    sla_eligible: true
    source_url: https://www.ukg.com/legal
  - id: payroll
    name: UKG Payroll
    category: Payroll
    description: Payroll processing
    sla_eligible: true
    source_url: https://www.ukg.com/legal
  - id: pro
    name: UKG Pro
    category: HCM
    description: Enterprise HCM suite
    sla_eligible: true
    source_url: https://www.ukg.com/legal
  - id: ready
    name: UKG Ready
    category: HCM
    description: Mid-market HCM
    sla_eligible: true
    source_url: https://www.ukg.com/legal
  - id: talk
    name: UKG Talk
    category: Employee Engagement
    description: Employee communications
    sla_eligible: true
    source_url: https://www.ukg.com/legal
---

UKG is a HR & People Operations provider. See the official SLA at [https://www.ukg.com/legal](https://www.ukg.com/legal).

<!-- Add human-readable notes about UKG's SLA nuances here. -->
