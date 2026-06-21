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
review_note: >-
  Former sla_url (okta.com/agreements/service-level-agreement/) returns 404;
  Okta no longer publishes a standalone core-product SLA page. The core Okta MSA
  contains no numeric uptime SLA ("commercially reasonable efforts"); 99.99% is
  shown as an availability METRIC on trust.okta.com and historically in an Okta
  blog ("99.99% uptime for all"), so uptime_commitment is retained at 99.99 but
  is not a quotable contractual figure. The only live, fully-quotable official
  Okta SLA document is the Auth0 Platform SLA (PDF), which caps credits at 50%
  (tiers 5/10/20/50%) and requires a claim within 5 business days, so the
  on-file max_credit_percent 100 is UNVERIFIED/likely wrong, and credit_tiers
  are unverified for the core product. sla_url repointed to Okta's live legal
  agreements index. last_verified not bumped pending a definitive core-Okta SLA. 2026-06-20
  cleanup: removed unverified numeric SLA values per the above note; no public
  credit-bearing SLA confirmed.
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
---

Okta is a Security & Identity provider. See the official SLA at [https://www.okta.com/agreements/](https://www.okta.com/agreements/).

<!-- Add human-readable notes about Okta's SLA nuances here. -->
