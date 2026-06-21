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
review_note: >-
  Mailchimp (Intuit) publishes no public SLA with an uptime commitment or
  service credits. The Standard Terms of Use (https://mailchimp.com/legal/terms/),
  Additional Terms, and the legal index (https://mailchimp.com/legal/) contain no
  uptime percentage, service-credit, or availability-guarantee language; the terms
  state the Service is provided "as is" with no availability warranty. The "99.9"
  uptime_commitment, 25% max_credit_percent, credit_tiers, and claim_process in
  this file are NOT verifiable on mailchimp.com and are likely fabricated — left
  unchanged pending removal/confirmation. The only uptime figures Mailchimp cites
  are marketing claims (e.g. "99.99% uptime" on the Transactional features page,
  https://mailchimp.com/features/transactional-email/), which are not contractual
  SLAs. sla_url confirmed live but is the general Terms of Use, not an SLA.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note;
  no public credit-bearing SLA confirmed.
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
---

Mailchimp is a Communication & Collaboration provider. See the official SLA at [https://mailchimp.com/legal/terms/](https://mailchimp.com/legal/terms/).

<!-- Add human-readable notes about Mailchimp's SLA nuances here. -->
