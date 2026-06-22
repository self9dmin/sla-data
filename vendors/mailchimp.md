---
title: Mailchimp
slug: mailchimp
vendor_name: Mailchimp
legal_entity: Mailchimp
category: CRM & Marketing
website: https://www.mailchimp.com
scope: global
sla_url: https://mailchimp.com/legal/terms/
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
  submission_url: https://mailchimp.com/contact/
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
  - id: audiences
    name: Mailchimp Audiences
    category: CRM
    description: Contact management
    sla_eligible: true
    source_url: https://mailchimp.com/legal/terms/
  - id: automations
    name: Mailchimp Automations
    category: Marketing Automation
    description: Automated email journeys
    sla_eligible: true
    source_url: https://mailchimp.com/legal/terms/
  - id: campaigns
    name: Mailchimp Email Campaigns
    category: Email Marketing
    description: Email campaign management
    sla_eligible: true
    source_url: https://mailchimp.com/legal/terms/
  - id: transactional
    name: Mailchimp Transactional
    category: Transactional Email
    description: Transactional email (Mandrill)
    sla_eligible: true
    source_url: https://mailchimp.com/legal/terms/
  - id: websites
    name: Mailchimp Websites
    category: Website Builder
    description: Website builder
    sla_eligible: true
    source_url: https://mailchimp.com/legal/terms/
support:
  tiers:
    - "Free"
    - "Essentials"
    - "Standard"
    - "Premium"
  has_24x7: true
  response_is_sla: false
  designated_contact: team
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: "https://mailchimp.com/help/about-mailchimp-support/"
  note: "Premium plan gets phone support and dedicated onboarding; no published response SLAs."
---

Mailchimp is a Communication & Collaboration provider. See the official SLA at [https://mailchimp.com/legal/terms/](https://mailchimp.com/legal/terms/).

<!-- Add human-readable notes about Mailchimp's SLA nuances here. -->
