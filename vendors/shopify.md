---
title: Shopify
slug: shopify
vendor_name: Shopify
legal_entity: Shopify
category: E-commerce
website: https://www.shopify.com
scope: global
sla_url: https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan
last_verified: '2026-06-20'
last_updated: '2026-06-19'
needs_review: true
review_note: '2026-06-20 browser check: shopify.com/legal/sla returns 404; the SLA is a Shopify Plus feature (99.99% uptime per the help center) but credit terms are not public — credit numbers removed, uptime retained.'
uptime_commitment: 99.99
has_automatic_credits: false
min_plan_for_sla: plus
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
  submission_url: https://help.shopify.com
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
  - id: admin
    name: Shopify Admin
    category: E-Commerce
    description: Merchant admin panel
    sla_eligible: true
    source_url: https://www.shopify.com/legal/terms
  - id: api
    name: Shopify API
    category: API
    description: REST and GraphQL APIs
    sla_eligible: true
    source_url: https://www.shopify.com/legal/terms
  - id: checkout
    name: Shopify Checkout
    category: E-Commerce
    description: Checkout processing - critical
    sla_eligible: true
    source_url: https://www.shopify.com/legal/terms
  - id: payments
    name: Shopify Payments
    category: Payments
    description: Native payment processing
    sla_eligible: true
    source_url: https://www.shopify.com/legal/terms
  - id: pos
    name: Shopify POS
    category: Retail
    description: Point of sale
    sla_eligible: true
    source_url: https://www.shopify.com/legal/terms
  - id: storefront
    name: Shopify Storefront
    category: E-Commerce
    description: Online store hosting
    sla_eligible: true
    source_url: https://www.shopify.com/legal/terms
---

Shopify is a E-commerce provider. See the official SLA at [https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan](https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan).

<!-- Add human-readable notes about Shopify's SLA nuances here. -->
