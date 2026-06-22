---
title: Ping Identity
slug: ping-identity
vendor_name: Ping Identity
legal_entity: Ping Identity
category: Security & Identity
website: https://www.pingidentity.com
scope: global
sla_url: https://www.pingidentity.com/en/legal/support-policy.html
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Uptime of 99.99% confirmed in the official Support Policy, but the service
  credit tiers, cap, claim deadline, and submission process are not published on
  any public page and remain unverified.
uptime_commitment: 99.99
max_credit_percent: 25
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 10
    - uptime_below: 99.9
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://support.pingidentity.com
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
  - id: pingaccess
    name: PingAccess
    category: Access Management
    description: API security gateway
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.pingidentity.com/en/legal/support-policy.html
  - id: pingdirectory
    name: PingDirectory
    category: Directory
    description: Enterprise directory
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.pingidentity.com/en/legal/support-policy.html
  - id: pingfederate
    name: PingFederate
    category: Federation
    description: Enterprise federation
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.pingidentity.com/en/legal/support-policy.html
  - id: pingone-mfa
    name: PingOne MFA
    category: MFA
    description: Cloud MFA
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.pingidentity.com/en/legal/support-policy.html
  - id: pingone-sso
    name: PingOne SSO
    category: SSO
    description: Cloud single sign-on
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.pingidentity.com/en/legal/support-policy.html
support:
  tiers:
    - "Base"
    - "Select"
    - "Premium"
    - "Elite"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.pingidentity.com/en/legal/support-policy.html"
  note: "Elite includes a TAM up to 20 hrs/month; CSR at Select and above. Targets, not credit-backed."
---

Ping Identity is a Security & Identity provider. The 99.99% uptime commitment is published in the official [Support Policy](https://www.pingidentity.com/en/legal/support-policy.html) ("maintain Uptime Availability for the Service of 99.99%", Section 1.1(c)). The previous SLA page (legal/sla.html) now returns HTTP 404. The service-credit tier table, maximum credit, claim deadline, and submission process are not published on any public pingidentity.com page (they are referenced as a "Customer's entitlement to service credits" but the terms live in contractual/login-gated documents), so those fields are unverified and flagged for review.

<!-- Add human-readable notes about Ping Identity's SLA nuances here. -->
