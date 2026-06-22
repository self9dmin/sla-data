---
title: PayPal
slug: paypal
vendor_name: PayPal
legal_entity: PayPal
category: Finance & Payments
website: https://www.paypal.com
scope: global
sla_url: https://www.paypal.com/us/legalhub/braintree/home
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  braintreepayments.com/legal now 301-redirects to the canonical PayPal legal
  hub (paypal.com/us/legalhub/braintree/home); sla_url updated accordingly. The
  official US Braintree Payment Services Agreement
  (paypalobjects.com/marketing/ua/pdf/US/en/payment-services-agreement-bt-022625.pdf)
  publishes NO uptime SLA and NO service credits. Sec 8.03 states the service is
  provided "AS IS WITHOUT ANY WARRANTY WHATSOEVER" and "PayPal does not
  guarantee continuous or uninterrupted access to the Braintree Payment
  Services." The existing uptime_commitment (99.99) and per-service uptime
  figures are NOT supported by any official PayPal/Braintree document and could
  not be verified; left unchanged pending review/removal. max_credit_percent: 0
  and has_automatic_credits: false are consistent with the no-credit finding.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note;
  no public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: no_credit
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: No SLA credits available - termination only
  submission_method: Support
  submission_url: https://www.paypal.com/us/smarthelp/contact-us
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
  - id: braintree
    name: Braintree
    category: Payments
    description: Full-stack payment platform
    sla_eligible: true
    source_url: https://www.paypal.com/us/legalhub/braintree/home
  - id: checkout
    name: PayPal Checkout
    category: Payments
    description: Payment checkout
    sla_eligible: true
    source_url: https://www.paypal.com/us/legalhub/braintree/home
  - id: payouts
    name: PayPal Payouts
    category: Payments
    description: Mass payouts
    sla_eligible: true
    source_url: https://www.paypal.com/us/legalhub/braintree/home
  - id: rest-api
    name: PayPal REST API
    category: API
    description: Payment API
    sla_eligible: true
    source_url: https://www.paypal.com/us/legalhub/braintree/home
  - id: venmo
    name: Venmo for Business
    category: Payments
    description: Venmo payment acceptance
    sla_eligible: true
    source_url: https://www.paypal.com/us/legalhub/braintree/home
support:
  has_24x7: false
  response_is_sla: false
  designated_contact: none
  architecture_review: false
  professional_services: false
  success_program: false
  training: false
  pricing: custom
  source_url: "https://www.paypal.com/us/cshelp/business"
  note: "No public support tiers; PayPal support is general customer service, not a tiered enterprise plan."
---

PayPal is a Finance & Payments provider. See the official Braintree legal hub at [https://www.paypal.com/us/legalhub/braintree/home](https://www.paypal.com/us/legalhub/braintree/home). Note: the Braintree Payment Services Agreement does not publish a public uptime SLA or service credits; the service is provided "as is" with no guarantee of uninterrupted access.

<!-- Add human-readable notes about PayPal's SLA nuances here. -->
