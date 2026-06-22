---
title: Sauce Labs
slug: sauce-labs
vendor_name: Sauce Labs
legal_entity: Sauce Labs
category: Developer Tools
website: https://saucelabs.com
scope: global
sla_url: https://saucelabs.com/doc/service-specific-terms
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: no_sla
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://saucelabs.com/contact
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
  - id: saucelabs-api
    name: API Testing
    category: Testing
    description: API testing platform
    sla_eligible: true
    source_url: https://saucelabs.com/doc/terms-of-service
  - id: saucelabs-mobile
    name: Mobile Testing
    category: Testing
    description: Mobile app testing
    sla_eligible: true
    source_url: https://saucelabs.com/doc/terms-of-service
  - id: saucelabs-visual
    name: Visual Testing
    category: Testing
    description: Visual regression testing
    sla_eligible: true
    source_url: https://saucelabs.com/doc/terms-of-service
  - id: saucelabs-web
    name: Web Testing
    category: Testing
    description: Cross-browser web testing
    sla_eligible: true
    source_url: https://saucelabs.com/doc/terms-of-service
support:
  tiers:
    - "Essential"
    - "Professional"
    - "Premium"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://saucelabs.com/enterprise-support"
  note: "Premium adds a private Slack channel and a designated TAM queue. Targets, not credit-backed."
---

Sauce Labs is a DevOps & Development provider. As of 2026-06-19, Sauce Labs does not appear to publish a public uptime SLA with service credits; its current official terms ([Service-Specific Terms](https://saucelabs.com/doc/service-specific-terms), [Terms of Service](https://saucelabs.com/doc/terms-of-service), and [Support Policy](https://saucelabs.com/doc/support-policy)) define only support response-time tiers. The numeric SLA fields in this record are unverified and flagged for review.

<!-- Add human-readable notes about Sauce Labs's SLA nuances here. -->
