---
title: Auth0
slug: auth0
vendor_name: Auth0
legal_entity: Auth0
category: Security & Identity
website: https://www.auth0.com
scope: global
sla_url: https://www.okta.com/sites/default/files/2022-02/ServiceLevelAgreement-for-Auth0-Platform-02-7-22.pdf
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.99
max_credit_percent: 50
claim_deadline_days: 5
has_automatic_credits: false
min_plan_for_sla: standard
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
      description: Contact Okta in writing within 5 business days of the event giving rise to the credit - VERY SHORT
  submission_method: Contact Okta in writing (Technical Account Manager / Sales Representative)
  submission_url: https://www.okta.com/sites/default/files/2022-02/ServiceLevelAgreement-for-Auth0-Platform-02-7-22.pdf
  required_evidence: []
  review_timeline: ''
  credit_application: Credit applied to the next invoice; unutilized credits applied to other fees or refunded
global_exclusions:
  - Emergency maintenance
  - Force Majeure Events
  - Load or penetration testing by Customer
  - Alpha, beta, or other non-generally available features or services
  - Non-production Tenants or environments (e.g. staging and testing)
  - Failed Customer API Calls due to client-side application errors (custom database, third-party IdPs, Rules/Hooks/Actions, non-Core Service extensibility points)
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
  - id: actions
    name: Auth0 Actions
    category: Identity
    description: Custom logic in auth flows (excluded from Core Services SLA)
    uptime_commitment: 99.9
    sla_eligible: false
    source_url: https://www.okta.com/sites/default/files/2022-02/ServiceLevelAgreement-for-Auth0-Platform-02-7-22.pdf
  - id: authentication
    name: Auth0 Authentication
    category: Identity
    description: Universal Login and authentication
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.okta.com/sites/default/files/2022-02/ServiceLevelAgreement-for-Auth0-Platform-02-7-22.pdf
  - id: mfa
    name: Auth0 Multi-Factor Auth
    category: Identity
    description: MFA services
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.okta.com/sites/default/files/2022-02/ServiceLevelAgreement-for-Auth0-Platform-02-7-22.pdf
  - id: organizations
    name: Auth0 Organizations
    category: Identity
    description: B2B identity management
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.okta.com/sites/default/files/2022-02/ServiceLevelAgreement-for-Auth0-Platform-02-7-22.pdf
  - id: sso
    name: Auth0 SSO
    category: Identity
    description: Single Sign-On
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.okta.com/sites/default/files/2022-02/ServiceLevelAgreement-for-Auth0-Platform-02-7-22.pdf
---

Auth0 is a Security & Identity provider. See the official Auth0 Platform Service Level Agreement at [https://www.okta.com/sites/default/files/2022-02/ServiceLevelAgreement-for-Auth0-Platform-02-7-22.pdf](https://www.okta.com/sites/default/files/2022-02/ServiceLevelAgreement-for-Auth0-Platform-02-7-22.pdf).

<!-- Add human-readable notes about Auth0's SLA nuances here. -->
