---
title: Bitwarden
slug: bitwarden
vendor_name: Bitwarden
legal_entity: Bitwarden
category: Security & Identity
website: https://www.bitwarden.com
scope: global
sla_url: https://bitwarden.com/terms/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Bitwarden publishes no public credit-bearing SLA. The sla_url
  (https://bitwarden.com/terms/) is live but is a Terms of Service that
  explicitly disclaims availability: "we do not warrant that...the Service will
  be uninterrupted, timely, secure, or error-free; that...the Service will be
  available at any particular time or location." No uptime percentage, service
  credits, or claim process are published on bitwarden.com (compliance and
  status pages confirm uptime is delegated to Microsoft Azure infrastructure).
  The uptime_commitment 99.9 values and credit/claim fields below are NOT
  supported by any Bitwarden official source and could not be verified
  (2026-06-19); left unchanged pending review/removal. 2026-06-20 cleanup: removed
  unverified numeric SLA values per the above note; no public credit-bearing SLA
  confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://bitwarden.com/contact/
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
    name: Bitwarden API
    category: APIs
    description: Public API
    sla_eligible: true
    source_url: https://bitwarden.com/terms/
  - id: directory
    name: Bitwarden Directory Connector
    category: Identity Management
    description: Directory sync
    sla_eligible: true
    source_url: https://bitwarden.com/terms/
  - id: send
    name: Bitwarden Send
    category: Security
    description: Secure sharing
    sla_eligible: true
    source_url: https://bitwarden.com/terms/
  - id: vault
    name: Bitwarden Vault
    category: Security
    description: Password vault
    sla_eligible: true
    source_url: https://bitwarden.com/terms/
---

Bitwarden is a Security & Identity provider. See the official SLA at [https://bitwarden.com/terms/](https://bitwarden.com/terms/).

<!-- Add human-readable notes about Bitwarden's SLA nuances here. -->
