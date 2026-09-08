---
title: Okta
slug: okta
vendor_name: Okta
legal_entity: Okta
category: Security & Identity
website: https://www.okta.com
scope: global
sla_url: https://www.okta.com/legal/
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.99
max_credit_percent: 50
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: 'Okta commits 99.99% uptime to all paid customers. Per Okta''s Service Level Agreement (Auth0 Platform SLA, parsed): tiered credits of 5% (<99.99%), 10% (<99.9%), 20% (<99%) and 50% (<95%) of the monthly subscription fee, capped at 50% per month; credits are the sole remedy.'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 5
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 20
    - uptime_below: 95
      credit_percent: 50
claim_process:
  deadlines:
    - type: submission
      days: 5
      business_days: true
      anchor_point: incident_date
      description: Submit within 5 business days of incident - VERY SHORT
  submission_method: Support Ticket
  submission_url: https://support.okta.com/help/s/?language=en_US
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
    name: API Access Management
    category: Security
    description: API authorization
    sla_eligible: true
    source_url: https://www.okta.com/legal/
  - id: lifecycle
    name: Lifecycle Management
    category: Identity
    description: User provisioning
    sla_eligible: true
    source_url: https://www.okta.com/legal/
  - id: mfa
    name: Okta MFA
    category: Security
    description: Multi-factor authentication
    sla_eligible: true
    source_url: https://www.okta.com/legal/
  - id: sso
    name: Okta Single Sign-On
    category: Identity
    description: SSO for applications
    sla_eligible: true
    source_url: https://www.okta.com/legal/
  - id: directory
    name: Universal Directory
    category: Identity
    description: Identity management
    sla_eligible: true
    source_url: https://www.okta.com/legal/
support:
  tiers:
    - Basic
    - Silver
    - Gold
  has_24x7: true
  fastest_response: 30 min (P1, Gold)
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: https://www.okta.com/services/success-and-support/
  note: Premier Success Plans; response times are targets, not credit-backed SLAs. Premier Success plans; Gold 24x7 with TAM team.
  channels:
    - portal
    - phone
    - email
---

Okta is a Security & Identity provider. See the official SLA at [https://www.okta.com/agreements/](https://www.okta.com/agreements/).

<!-- Add human-readable notes about Okta's SLA nuances here. -->
