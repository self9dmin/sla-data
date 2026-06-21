---
title: Square
slug: square
vendor_name: Square
legal_entity: Square
category: Finance & Payments
website: https://www.square.com
scope: global
sla_url: https://squareup.com/us/en/legal/general/ua
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Square publishes no public uptime SLA or service-credit policy. The General
  Terms of Service (https://squareup.com/us/en/legal/general/ua, effective
  2026-06-01) and the Developer Terms
  (https://squareup.com/us/en/legal/general/developers) both explicitly disclaim
  availability: "SQUARE DOES NOT WARRANT...THAT THE SERVICES WILL BE AVAILABLE AT
  ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED, ERROR-FREE, WITHOUT DEFECT OR
  SECURE." The uptime_commitment of 99.9 (on the vendor and all services) is not
  substantiated by any squareup.com legal page and is contradicted by these
  disclaimers; left unchanged pending sourcing or removal. max_credit_percent: 0
  and credit_policy.calculation_type: none are consistent with the finding that
  no credit SLA exists.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://squareup.com/help/us/en/contact
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
  - id: banking
    name: Square Banking
    category: Banking
    description: Business banking services
    sla_eligible: true
    source_url: https://squareup.com/us/en/legal/general/ua
  - id: invoices
    name: Square Invoices
    category: Invoicing
    description: Invoice management
    sla_eligible: true
    source_url: https://squareup.com/us/en/legal/general/ua
  - id: online
    name: Square Online
    category: E-commerce
    description: Online store platform
    sla_eligible: true
    source_url: https://squareup.com/us/en/legal/general/ua
  - id: payments
    name: Square Payments
    category: Payment Processing
    description: Payment processing
    sla_eligible: true
    source_url: https://squareup.com/us/en/legal/general/ua
  - id: pos
    name: Square Point of Sale
    category: POS
    description: Point of sale system
    sla_eligible: true
    source_url: https://squareup.com/us/en/legal/general/ua
---

Square is a Finance & Payments provider. See the official SLA at [https://squareup.com/us/en/legal/general/ua](https://squareup.com/us/en/legal/general/ua).

<!-- Add human-readable notes about Square's SLA nuances here. -->
