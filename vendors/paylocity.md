---
title: Paylocity
slug: paylocity
vendor_name: Paylocity
legal_entity: Paylocity
category: HR & People Operations
website: https://www.paylocity.com
scope: global
sla_url: https://www.paylocity.com/terms-and-conditions/
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
  submission_method: Support
  submission_url: https://www.paylocity.com/contact/
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
    name: Benefits Administration
    category: Benefits
    description: Benefits management
    sla_eligible: true
    source_url: https://www.paylocity.com/terms-and-conditions/
  - id: hr
    name: Paylocity HR
    category: HRIS
    description: HR management
    sla_eligible: true
    source_url: https://www.paylocity.com/terms-and-conditions/
  - id: payroll
    name: Paylocity Payroll
    category: Payroll
    description: Payroll processing
    sla_eligible: true
    source_url: https://www.paylocity.com/terms-and-conditions/
  - id: talent
    name: Talent Management
    category: Talent Management
    description: Recruiting and performance
    sla_eligible: true
    source_url: https://www.paylocity.com/terms-and-conditions/
  - id: workforce
    name: Workforce Management
    category: Workforce Management
    description: Time and scheduling
    sla_eligible: true
    source_url: https://www.paylocity.com/terms-and-conditions/
support:
  tiers:
    - "Standard"
  has_24x7: false
  response_is_sla: false
  designated_contact: team
  architecture_review: false
  professional_services: true
  success_program: false
  training: true
  pricing: included
  source_url: "https://www.paylocity.com/contact/client-support/"
  note: "No tier structure; dedicated Account Manager plus a service team, business hours only."
---

Paylocity is a HR & People Operations provider. Paylocity publishes no public uptime SLA; see its legal terms at [https://www.paylocity.com/terms-and-conditions/](https://www.paylocity.com/terms-and-conditions/).

<!-- Add human-readable notes about Paylocity's SLA nuances here. -->
