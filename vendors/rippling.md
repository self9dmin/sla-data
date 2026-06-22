---
title: Rippling
slug: rippling
vendor_name: Rippling
legal_entity: Rippling
category: HR & People Operations
website: https://www.rippling.com
scope: global
sla_url: https://static-assets.ripplingcdn.com/legal/en-US/customer_terms_of_service.html
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Rippling does not publish a public uptime SLA or service-credit commitment.
  Its Customer Terms of Service explicitly disclaims any service level: "RIPPLING
  DOES NOT WARRANT THAT THE RIPPLING SERVICES, WILL BE ERROR-FREE OR THAT THEY
  WILL MEET ANY SPECIFIED SERVICE LEVEL, OR WILL OPERATE WITHOUT INTERRUPTIONS OR
  DOWNTIME"
  (https://static-assets.ripplingcdn.com/legal/en-US/customer_terms_of_service.html).
  The 99.9 uptime_commitment values in this file are NOT verifiable on
  rippling.com and are contradicted by the official terms; left unchanged pending
  review. Old sla_url https://www.rippling.com/terms returned HTTP 404. Any
  contractual SLA, if it exists, is negotiated per Order Form and not public.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://www.rippling.com/support
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
    name: Rippling Benefits
    category: HR
    description: Benefits administration
    sla_eligible: true
    source_url: https://static-assets.ripplingcdn.com/legal/en-US/customer_terms_of_service.html
  - id: finance
    name: Rippling Finance Cloud
    category: Finance
    description: Expense and corporate cards
    sla_eligible: true
    source_url: https://static-assets.ripplingcdn.com/legal/en-US/customer_terms_of_service.html
  - id: hr
    name: Rippling HR Cloud
    category: HR
    description: HR management
    sla_eligible: true
    source_url: https://static-assets.ripplingcdn.com/legal/en-US/customer_terms_of_service.html
  - id: it
    name: Rippling IT Cloud
    category: IT
    description: Device and app management
    sla_eligible: true
    source_url: https://static-assets.ripplingcdn.com/legal/en-US/customer_terms_of_service.html
  - id: payroll
    name: Rippling Payroll
    category: Payroll
    description: Payroll processing
    sla_eligible: true
    source_url: https://static-assets.ripplingcdn.com/legal/en-US/customer_terms_of_service.html
support:
  tiers:
    - "Standard"
    - "Premium"
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.rippling.com/support-status"
  note: "Premium tier adds a dedicated account manager; published metrics are not SLA-backed."
---

Rippling is a HR & People Operations provider. Rippling does not publish a public uptime SLA or service-credit commitment; its Customer Terms of Service explicitly disclaims any specified service level. See the official terms at [https://static-assets.ripplingcdn.com/legal/en-US/customer_terms_of_service.html](https://static-assets.ripplingcdn.com/legal/en-US/customer_terms_of_service.html).

<!-- Add human-readable notes about Rippling's SLA nuances here. -->
