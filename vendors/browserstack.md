---
title: BrowserStack
slug: browserstack
vendor_name: BrowserStack
legal_entity: BrowserStack
category: Developer Tools
website: https://www.browserstack.com
scope: global
sla_url: https://www.browserstack.com/terms
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
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
  submission_method: Support
  submission_url: https://www.browserstack.com/contact
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
  - id: app-automate
    name: App Automate
    category: Testing
    description: Automated mobile app testing
    sla_eligible: true
    source_url: https://www.browserstack.com/terms
  - id: app-live
    name: App Live
    category: Testing
    description: Manual mobile app testing
    sla_eligible: true
    source_url: https://www.browserstack.com/terms
  - id: automate
    name: BrowserStack Automate
    category: Testing
    description: Automated browser testing
    sla_eligible: true
    source_url: https://www.browserstack.com/terms
  - id: live
    name: BrowserStack Live
    category: Testing
    description: Manual cross-browser testing
    sla_eligible: true
    source_url: https://www.browserstack.com/terms
  - id: percy
    name: Percy Visual Testing
    category: Testing
    description: Visual regression testing
    sla_eligible: true
    source_url: https://www.browserstack.com/terms
support:
  tiers:
    - "Standard"
    - "Premium"
    - "Ultimate"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: true
  training: false
  pricing: custom
  source_url: "https://www.browserstack.com/enterprise-support"
  note: "Published initial-response targets across tiers; not explicitly contractual."
---

BrowserStack is a DevOps & Development provider. See the official SLA at [https://www.browserstack.com/terms](https://www.browserstack.com/terms).

<!-- Add human-readable notes about BrowserStack's SLA nuances here. -->
