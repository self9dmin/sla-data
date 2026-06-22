---
title: Braintree
slug: braintree
vendor_name: Braintree
legal_entity: Braintree
category: Finance & Payments
website: https://www.braintree.com
scope: global
sla_url: https://www.paypal.com/us/legalhub/braintree/home
last_verified: '2025-12-20'
last_updated: '2026-06-19'
max_credit_percent: 0
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: true
credit_policy:
  calculation_type: none
  remedy_type: no_credit
  max_credit_percent: 0
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://developer.paypal.com/braintree/help
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
  - id: gateway
    name: Braintree Gateway
    category: Payment Processing
    description: Payment gateway
    sla_eligible: true
    source_url: https://www.paypal.com/us/legalhub/braintree/payment-services-agreement
  - id: vault
    name: Braintree Vault
    category: Card Vaulting
    description: Secure card storage
    sla_eligible: true
    source_url: https://www.paypal.com/us/legalhub/braintree/payment-services-agreement
  - id: paypal
    name: PayPal Integration
    category: Wallet
    description: PayPal checkout
    sla_eligible: true
    source_url: https://www.paypal.com/us/legalhub/braintree/payment-services-agreement
  - id: venmo
    name: Venmo Integration
    category: Wallet
    description: Venmo checkout
    sla_eligible: true
    source_url: https://www.paypal.com/us/legalhub/braintree/payment-services-agreement
---

Braintree is a Finance & Payments provider. See the official legal agreements at [https://www.paypal.com/us/legalhub/braintree/home](https://www.paypal.com/us/legalhub/braintree/home). Braintree (a PayPal service) does not publish a public uptime SLA with service credits; the Braintree Payment Services Agreement provides the service "AS IS" without any warranty (Section 8.03).

<!-- Add human-readable notes about Braintree's SLA nuances here. -->
