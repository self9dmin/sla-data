---
title: Xero
slug: xero
vendor_name: Xero
legal_entity: Xero
category: Finance & Payments
website: https://www.xero.com
scope: global
sla_url: https://www.xero.com/legal/terms/
last_verified: '2026-06-23'
last_updated: '2026-06-23'
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: Xero's Terms set no committed uptime %; they disclaim warranties ("as is") and offer only DISCRETIONARY compensation ("we may in our discretion") for system-wide downtime over 4 consecutive hours, requested in writing within 21 days. Not an enforceable SLA. (Previously recorded as credit without support.)
credit_policy:
  calculation_type: none
  remedy_type: no_sla
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Xero Central
  submission_url: https://central.xero.com
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
  - id: accounting
    name: Xero Accounting
    category: Accounting
    description: Cloud accounting
    sla_eligible: true
    source_url: https://www.xero.com/legal/terms/
  - id: api
    name: Xero API
    category: APIs
    description: Developer API
    sla_eligible: true
    source_url: https://www.xero.com/legal/terms/
  - id: expenses
    name: Xero Expenses
    category: Expense
    description: Expense management
    sla_eligible: true
    source_url: https://www.xero.com/legal/terms/
  - id: payroll
    name: Xero Payroll
    category: Payroll
    description: Payroll processing
    sla_eligible: true
    source_url: https://www.xero.com/legal/terms/
  - id: projects
    name: Xero Projects
    category: Project Management
    description: Project tracking
    sla_eligible: true
    source_url: https://www.xero.com/legal/terms/
support:
  tiers:
    - Standard (uniform)
  has_24x7: true
  response_is_sla: false
  designated_contact: none
  architecture_review: false
  professional_services: false
  success_program: false
  training: true
  pricing: included
  source_url: https://www.xero.com/us/support/contact-support/
  note: Free unlimited 24/7 online support; email/callback only, no tiered offering, no SLA. Free unlimited 24/7 online support via Xero Central -> AI chat -> case (+ callback; no inbound phone line). No paid support tiers or first-party professional services (implementation via the advisor/partner ecosystem).
  channels:
    - portal
    - chat
    - email
---

Xero is a Finance & Payments provider. See the official SLA at [https://www.xero.com/legal/terms/](https://www.xero.com/legal/terms/).

<!-- Add human-readable notes about Xero's SLA nuances here. -->
