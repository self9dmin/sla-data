---
title: Xero
slug: xero
vendor_name: Xero
legal_entity: Xero
category: Finance & Payments
website: https://www.xero.com
scope: global
sla_url: https://www.xero.com/legal/terms/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Xero does NOT publish a formal public SLA with a committed uptime percentage,
  fixed service-credit tiers, or a maximum credit percent. Its Terms of Use
  (https://www.xero.com/legal/terms/, US variant
  https://www.xero.com/us/legal/terms/) only provide DISCRETIONARY downtime
  compensation. Verbatim: "If you ask us, we may in our discretion provide
  compensation in the event of any system-wide downtime of our services which is
  greater than four consecutive hours. Any compensation may be provided on a
  pro-rata basis and may be in the form of a refund or a credit for a future
  subscription period (at our option)." Compensation requests "must be provided
  in writing to Xero, within 21 days of the downtime occurring." There is NO
  99.9% uptime commitment, NO 25% max credit, NO tiered credits, and NO 30-day
  deadline on the vendor's own domain. The existing uptime_commitment (99.9),
  max_credit_percent (25), credit_tiers, and claim_deadline_days (30) fields are
  unverified/likely fabricated and are LEFT UNCHANGED pending a human decision on
  how to represent a discretionary, no-committed-uptime policy. Note the actual
  written-request window is 21 days (not 30) and the downtime threshold is 4
  consecutive hours. WebFetch returned 503 (bot protection) so quotes were
  confirmed via xero.com-scoped search of the official Terms of Use.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
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
---

Xero is a Finance & Payments provider. See the official SLA at [https://www.xero.com/legal/terms/](https://www.xero.com/legal/terms/).

<!-- Add human-readable notes about Xero's SLA nuances here. -->
