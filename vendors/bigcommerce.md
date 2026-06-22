---
title: BigCommerce
slug: bigcommerce
vendor_name: BigCommerce
legal_entity: BigCommerce
category: E-commerce
website: https://www.bigcommerce.com
scope: global
sla_url: https://www.commerce.com/terms/
last_verified: '2026-06-20'
last_updated: '2026-06-19'
needs_review: true
review_note: '2026-06-20 browser check: BigCommerce''s SLA URL is dead and the terms contain no public credit-bearing SLA; unverified numeric values removed.'
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://support.bigcommerce.com
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
    name: BigCommerce APIs
    category: API
    description: E-commerce APIs
    sla_eligible: true
    source_url: https://www.commerce.com/terms/
  - id: b2b
    name: BigCommerce B2B Edition
    category: B2B E-commerce
    description: B2B e-commerce features
    sla_eligible: true
    source_url: https://www.commerce.com/terms/
  - id: checkout
    name: BigCommerce Checkout
    category: Checkout
    description: Checkout experience
    sla_eligible: true
    source_url: https://www.commerce.com/terms/
  - id: storefront
    name: BigCommerce Storefront
    category: E-commerce
    description: Online storefront
    sla_eligible: true
    source_url: https://www.commerce.com/terms/
support:
  tiers:
    - "Standard"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.bigcommerce.com/blog/professional-services-technical-support/"
  note: "24/7 chat/phone on all plans; Enterprise adds a CSM and Solutions Architect."
---

BigCommerce is a E-commerce provider. The former SLA URL (https://www.bigcommerce.com/terms/sla/) now returns 404, and bigcommerce.com/terms/ redirects to commerce.com following the rebrand to "Commerce". See the official Master Services Agreement at [https://www.commerce.com/terms/](https://www.commerce.com/terms/). No public uptime/SLA or service-credit terms were found in the official legal documents; SLA details appear to be gated to support.bigcommerce.com help-center articles that could not be programmatically verified.

<!-- Add human-readable notes about BigCommerce's SLA nuances here. -->
