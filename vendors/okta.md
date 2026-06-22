---
title: Okta
slug: okta
vendor_name: Okta
legal_entity: Okta
category: Security & Identity
website: https://www.okta.com
scope: global
sla_url: https://www.okta.com/agreements/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
uptime_commitment: 99.99
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  deadlines:
    - type: submission
      days: 5
      business_days: true
      anchor_point: incident_date
      description: Submit within 5 business days of incident - VERY SHORT
  submission_method: Support Ticket
  submission_url: https://support.okta.com
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
    source_url: https://www.okta.com/agreements/
  - id: lifecycle
    name: Lifecycle Management
    category: Identity
    description: User provisioning
    sla_eligible: true
    source_url: https://www.okta.com/agreements/
  - id: mfa
    name: Okta MFA
    category: Security
    description: Multi-factor authentication
    sla_eligible: true
    source_url: https://www.okta.com/agreements/
  - id: sso
    name: Okta Single Sign-On
    category: Identity
    description: SSO for applications
    sla_eligible: true
    source_url: https://www.okta.com/agreements/
  - id: directory
    name: Universal Directory
    category: Identity
    description: Identity management
    sla_eligible: true
    source_url: https://www.okta.com/agreements/
support:
  tiers:
    - "Basic"
    - "Silver"
    - "Gold"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.okta.com/services/success-and-support/"
  note: "Premier Success Plans; response times are targets, not credit-backed SLAs."
---

Okta is a Security & Identity provider. See the official SLA at [https://www.okta.com/agreements/](https://www.okta.com/agreements/).

<!-- Add human-readable notes about Okta's SLA nuances here. -->
