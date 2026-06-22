---
title: QuickBooks
slug: quickbooks
vendor_name: QuickBooks
legal_entity: QuickBooks
category: Finance & Payments
website: https://www.quickbooks.com
scope: global
sla_url: https://www.intuit.com/legal/terms/en-us/quickbooks/online/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: no_credit
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://quickbooks.intuit.com/learn-support/
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
  - id: api
    name: QuickBooks API
    category: APIs
    description: Developer API
    sla_eligible: true
    source_url: https://quickbooks.intuit.com/global/terms-of-service/
  - id: online
    name: QuickBooks Online
    category: Accounting
    description: Cloud accounting
    sla_eligible: true
    source_url: https://quickbooks.intuit.com/global/terms-of-service/
  - id: payments
    name: QuickBooks Payments
    category: Payments
    description: Payment processing
    sla_eligible: true
    source_url: https://quickbooks.intuit.com/global/terms-of-service/
  - id: payroll
    name: QuickBooks Payroll
    category: Payroll
    description: Payroll processing
    sla_eligible: true
    source_url: https://quickbooks.intuit.com/global/terms-of-service/
support:
  tiers:
    - "Standard"
    - "Priority Circle"
  has_24x7: true
  response_is_sla: false
  designated_contact: team
  architecture_review: false
  professional_services: false
  success_program: true
  training: true
  pricing: included
  source_url: "https://quickbooks.intuit.com/priority-circle/"
  note: "Priority Circle included with Enterprise and Online Advanced; premium care specialists plus a training library."
---

QuickBooks is a Finance & Payments provider. Intuit does not publish a public uptime SLA with service credits for QuickBooks Online; the Terms of Service provide the Platform "as-is" and disclaim availability. See the official terms at [https://www.intuit.com/legal/terms/en-us/quickbooks/online/](https://www.intuit.com/legal/terms/en-us/quickbooks/online/).

<!-- Add human-readable notes about QuickBooks's SLA nuances here. -->
