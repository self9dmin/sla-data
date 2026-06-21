---
title: Fivetran
slug: fivetran
vendor_name: Fivetran
legal_entity: Fivetran
category: Databases & Data Infrastructure
website: https://www.fivetran.com
scope: global
sla_url: https://www.fivetran.com/legal/sla
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  SLA pages are JS-rendered and could not be read verbatim, so credit tiers,
  claim deadline, and uptime figures were not re-verified; search snippets
  suggest a per-service credit model (core 1%, data delivery 0.25%) that does
  not match the tiered model recorded here. Manual verification required.
uptime_commitment: 99.9
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 95
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://support.fivetran.com
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 15 business days
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
  - id: connectors
    name: Fivetran Connectors
    category: Data Integration
    description: 500+ pre-built connectors
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.fivetran.com/legal/sla
  - id: functions
    name: Fivetran Functions
    category: Data Integration
    description: Custom connector functions
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.fivetran.com/legal/sla
  - id: transformations
    name: Fivetran Transformations
    category: Data Transformation
    description: dbt Core integration
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.fivetran.com/legal/sla
  - id: hva
    name: High Volume Agent
    category: Data Integration
    description: Database replication
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.fivetran.com/legal/sla
---

Fivetran is a Database & Data Infrastructure provider. See the official SLA at [https://www.fivetran.com/legal/sla](https://www.fivetran.com/legal/sla).

<!-- Add human-readable notes about Fivetran's SLA nuances here. -->
