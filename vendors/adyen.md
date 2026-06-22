---
title: Adyen
slug: adyen
vendor_name: Adyen
legal_entity: Adyen
category: Finance & Payments
website: https://www.adyen.com
scope: global
sla_url: https://www.adyen.com/legal/terms-and-conditions
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 0
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
  max_credit_percent: 0
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://www.adyen.com/contact
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 15 business days
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
  - id: acquiring
    name: Adyen Acquiring
    category: Acquiring
    description: Global acquiring services
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adyen.com/legal/terms-and-conditions
  - id: checkout
    name: Adyen Checkout
    category: Checkout
    description: Unified checkout experience
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adyen.com/legal/terms-and-conditions
  - id: issuing
    name: Adyen Issuing
    category: Issuing
    description: Card issuing platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adyen.com/legal/terms-and-conditions
  - id: payments
    name: Adyen Payments
    category: Payment Processing
    description: Global payment processing
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adyen.com/legal/terms-and-conditions
  - id: revenue-protect
    name: Revenue Protect
    category: Fraud Prevention
    description: Fraud protection
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adyen.com/legal/terms-and-conditions
support:
  tiers:
    - "Standard (included)"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: false
  pricing: included
  source_url: "https://www.adyen.com/en_GB/customer-success/your-journey-with-us"
  note: "24/7 technical support and a CSM are included; no tiered support plans."
---

Adyen is a Finance & Payments provider. See the official SLA at [https://www.adyen.com/legal/terms-and-conditions](https://www.adyen.com/legal/terms-and-conditions).

Adyen commits to "an average minimum uptime of 99.9% (measured on a quarterly basis) of the Payment Interface" (Terms and Conditions, clause 6). There is no public service-credit remedy: the only stated remedy is a termination right if "Service availability in any given calendar month is less than 90%" or if SLA commitments are not met for two consecutive quarters (clause 10.2).

<!-- Add human-readable notes about Adyen's SLA nuances here. -->
