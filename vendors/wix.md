---
title: Wix
slug: wix
vendor_name: Wix
legal_entity: Wix
category: E-commerce
website: https://www.wix.com
scope: global
sla_url: https://www.wix.com/about/terms-of-use/enterprise
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 10
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 10
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: eligibility_date
      description: Submit within 30 days from eligibility date
  submission_method: Support
  submission_url: https://support.wix.com
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
    sla_eligible: false
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
  - id: blog
    name: Wix Blog
    category: CMS
    description: Blogging platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.wix.com/about/terms-of-use/enterprise
  - id: bookings
    name: Wix Bookings
    category: Scheduling
    description: Booking and scheduling
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.wix.com/about/terms-of-use/enterprise
  - id: stores
    name: Wix Stores
    category: E-commerce
    description: E-commerce solution
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.wix.com/about/terms-of-use/enterprise
  - id: studio
    name: Wix Studio
    category: Design
    description: Advanced design tools
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.wix.com/about/terms-of-use/enterprise
  - id: websites
    name: Wix Websites
    category: Website Builder
    description: Website builder platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.wix.com/about/terms-of-use/enterprise
support:
  tiers:
    - "Standard Customer Care"
    - "Enterprise (Priority)"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.wix.com/enterprise/services"
  note: "Enterprise bundles 24/7 priority support, a 1-hour first-response commitment, and a dedicated CSM."
---

Wix is a E-commerce provider. The public credit-backed SLA ("Exhibit B - Wix Enterprise Plan SLA") applies only to the Wix Enterprise Plan: 99.9% Annual Uptime Percentage, 10% Service Credit, claims within 30 days, request-based (not automatic). See the official SLA at [https://www.wix.com/about/terms-of-use/enterprise](https://www.wix.com/about/terms-of-use/enterprise).

<!-- Add human-readable notes about Wix's SLA nuances here. -->
