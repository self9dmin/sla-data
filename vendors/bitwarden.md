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
support:
  tiers:
    - "Free"
    - "Priority (Premium/Teams/Enterprise)"
    - "Enterprise Services"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: flat
  source_url: "https://bitwarden.com/products/business-support/"
  note: "24/7/365 priority support; published as a target, not a credit-backed SLA."
---

Bitwarden is a Security & Identity provider. See the official SLA at [https://bitwarden.com/terms/](https://bitwarden.com/terms/).

<!-- Add human-readable notes about Bitwarden's SLA nuances here. -->
