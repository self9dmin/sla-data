---
title: Lever
slug: lever
vendor_name: Lever
legal_entity: Lever
category: HR & People Operations
website: https://www.lever.co
scope: global
sla_url: https://www.lever.co/agreements/sla/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
has_automatic_credits: true
credit_unit: multiplier
credit_note: "Automatic credit equal to 10x the fees attributable to the downtime period (impact must exceed $10), capped at 30 days of paid service; not a percentage tier."
min_plan_for_sla: all
needs_review: false
credit_policy:
  calculation_type: multiplier
  remedy_type: automatic
  credit_formula: 10x amount paid attributable to downtime period; impact must exceed $10
  credit_cap: 30 days of paid service
claim_process:
  credit_application: Automatically applied to the customer account; no claim required
global_exclusions:
  - Scheduled Downtime for maintenance
  - Slowness or other performance issues with individual features
  - Issues caused by external apps or third parties
  - Pilot, alpha, or beta products
  - External network or equipment problems outside of Lever's reasonable control
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
  - id: analytics
    name: Lever Analytics
    category: Analytics
    description: Recruiting analytics
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.lever.co/agreements/sla/
  - id: api
    name: Lever API
    category: API
    description: Integration API
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.lever.co/agreements/sla/
  - id: nurture
    name: Lever Nurture
    category: CRM
    description: Candidate relationship management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.lever.co/agreements/sla/
  - id: hire
    name: LeverTRM for Hire
    category: ATS
    description: Talent acquisition platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.lever.co/agreements/sla/
support:
  tiers:
    - "Lever Care"
    - "Lever Preferred"
    - "Lever Premium"
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: flat
  source_url: "https://www.lever.co/customer-success-agreement/"
  note: "Preferred/Premium add a CSM and elevated service levels for an additional fee."
---

Lever is a HR & People Operations provider. See the official SLA at [https://www.lever.co/agreements/sla/](https://www.lever.co/agreements/sla/).

<!-- Add human-readable notes about Lever's SLA nuances here. -->
