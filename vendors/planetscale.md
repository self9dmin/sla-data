---
title: PlanetScale
slug: planetscale
vendor_name: PlanetScale
legal_entity: PlanetScale
category: Databases & Data Infrastructure
website: https://www.planetscale.com
scope: global
sla_url: https://planetscale.com/legal/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.99
max_credit_percent: 50
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
  credit_tiers:
    - uptime_below: 99.999
      credit_percent: 10
    - uptime_below: 99.99
      credit_percent: 20
    - uptime_below: 99.9
      credit_percent: 40
    - uptime_below: 99
      credit_percent: 50
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Credit request must be received within 30 days after the incident occurred
  submission_method: PlanetScale Support case
  submission_url: https://planetscale.com/support
  required_evidence:
    - Subject line "SLA Credit Request"
    - Incident dates and times
    - DatabaseIDs
    - Request logs documenting the errors
  credit_application: Issued within one billing cycle following the month in which the request occurred
global_exclusions:
  - Scheduled maintenance
  - Factors outside PlanetScale's reasonable control
  - Customer actions (rebooting, scaling, misconfiguration)
  - Non-compliance with documentation
  - Third-party technology failures
  - Single-node clusters and development branches
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
  - id: multi-region
    name: Multi-Region Database Clusters
    category: Database
    description: Multi-region production database clusters
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://planetscale.com/legal/sla
  - id: single-region
    name: Single-Region Database Clusters
    category: Database
    description: Single-region production database clusters
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://planetscale.com/legal/sla
sla_tiers:
  - name: 'Multi-region'
    requirement: 'Multi-region database cluster'
    uptime_commitment: 99.999
    source_url: 'https://planetscale.com/legal/sla'
support:
  tiers:
    - "Standard"
    - "Business"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: false
  success_program: false
  training: false
  pricing: custom
  source_url: "https://planetscale.com/enterprise"
  note: "Enterprise support adds a Slack channel, bi-weekly architecture meetings, optional TAM, and phone escalation."
---

PlanetScale is a Database & Data Infrastructure provider. See the official SLA at [https://planetscale.com/legal/sla](https://planetscale.com/legal/sla).

<!-- Add human-readable notes about PlanetScale's SLA nuances here. -->
