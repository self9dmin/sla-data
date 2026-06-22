---
title: HubSpot
slug: hubspot
vendor_name: HubSpot
legal_entity: HubSpot
category: CRM & Marketing
website: https://www.hubspot.com
scope: global
sla_url: https://legal.hubspot.com/product-specific-terms
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.95
claim_deadline_days: 20
has_automatic_credits: false
min_plan_for_sla: starter
credit_policy:
  calculation_type: pro_rated
  remedy_type: credit
  credit_tiers: []
  note: >-
    Credit only triggers if Service Uptime falls below 99.95% for two (2) or
    more consecutive calendar months; credit equals the pro-rated amount of
    fees applicable to the downtime. No fixed tiers or maximum credit cap are
    stated.
claim_process:
  deadlines:
    - type: submission
      days: 20
      business_days: false
      anchor_point: month_end
      description: >-
        Request credit within twenty (20) days of the end of the relevant
        calendar month in which uptime fell below 99.95%
  submission_method: Contact HubSpot
  submission_url: https://legal.hubspot.com/product-specific-terms
  required_evidence: []
  review_timeline: Not specified
  credit_application: Applied against an invoice or charge for the following renewal Subscription Term
global_exclusions:
  - Force majeure events
  - Customer-caused issues
  - Third-party internet/telecom failures
  - Misuse of the service
  - Maintenance windows
  - Data migrations
  - Free Services
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
  - id: cms
    name: CMS Hub
    category: CMS
    description: Content management system
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://legal.hubspot.com/product-specific-terms
  - id: crm
    name: HubSpot CRM
    category: CRM
    description: Customer relationship management
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://legal.hubspot.com/product-specific-terms
  - id: marketing
    name: Marketing Hub
    category: Marketing
    description: Marketing automation
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://legal.hubspot.com/product-specific-terms
  - id: sales
    name: Sales Hub
    category: Sales
    description: Sales CRM and tools
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://legal.hubspot.com/product-specific-terms
  - id: service
    name: Service Hub
    category: Support
    description: Customer service platform
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://legal.hubspot.com/product-specific-terms
support:
  tiers:
    - "Starter"
    - "Professional"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: "https://www.hubspot.com/customer-support"
  note: "24/7 chat/email on paid tiers; phone on Pro/Enterprise. CSM and Academy."
---

HubSpot is a CRM & Sales provider. The "Service Uptime Commitment" is published in HubSpot's [Product Specific Terms](https://legal.hubspot.com/product-specific-terms): a 99.95% monthly Service Uptime target for paid Subscription Services. A credit (pro-rated fees for the downtime) is available only if uptime falls below 99.95% for two (2) or more consecutive calendar months, and the customer must request it within twenty (20) days of the end of the relevant month. There is no tiered credit schedule or stated maximum credit cap, and credits are not automatic.

<!-- Add human-readable notes about HubSpot's SLA nuances here. -->
