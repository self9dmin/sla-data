---
title: Squarespace
slug: squarespace
vendor_name: Squarespace
legal_entity: Squarespace
category: E-commerce
website: https://www.squarespace.com
scope: global
sla_url: https://www.squarespace.com/terms-of-service
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
  submission_url: https://support.squarespace.com
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
  - id: commerce
    name: Squarespace Commerce
    category: E-commerce
    description: E-commerce functionality
    sla_eligible: true
    source_url: https://www.squarespace.com/terms-of-service
  - id: domains
    name: Squarespace Domains
    category: Domains
    description: Domain registration
    sla_eligible: true
    source_url: https://www.squarespace.com/terms-of-service
  - id: email
    name: Squarespace Email Campaigns
    category: Email Marketing
    description: Email marketing
    sla_eligible: true
    source_url: https://www.squarespace.com/terms-of-service
  - id: scheduling
    name: Squarespace Scheduling
    category: Scheduling
    description: Appointment scheduling
    sla_eligible: true
    source_url: https://www.squarespace.com/terms-of-service
  - id: websites
    name: Squarespace Websites
    category: Website Builder
    description: Website hosting and builder
    sla_eligible: true
    source_url: https://www.squarespace.com/terms-of-service
support:
  tiers:
    - "Standard"
  has_24x7: true
  response_is_sla: false
  designated_contact: none
  architecture_review: false
  professional_services: false
  success_program: false
  training: true
  pricing: included
  source_url: "https://support.squarespace.com/hc/en-us/articles/206541167-Contacting-Customer-Support"
  note: "Flat 24/7 email and live chat included; no paid tiers."
---

Squarespace is a E-commerce provider. See the official SLA at [https://www.squarespace.com/terms-of-service](https://www.squarespace.com/terms-of-service).

<!-- Add human-readable notes about Squarespace's SLA nuances here. -->
