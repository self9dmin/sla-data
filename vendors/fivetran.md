---
title: Fivetran
slug: fivetran
vendor_name: Fivetran
legal_entity: Fivetran
category: Databases & Data Infrastructure
website: https://www.fivetran.com
scope: global
sla_url: https://www.fivetran.com/legal/sla
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.9
max_credit_percent: 25
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_note: 'Verified against Fivetran''s SLA (Enterprise & Business Critical plans): Platform and Data Delivery commit 99.9%, Reverse ETL (Activation) 99.5%. Credits accrue incrementally (~1% of fees per band below the target, claimed per connection) and are capped at 25% of the applicable monthly service fees; sole and exclusive remedy. (Corrected: prior record had a 100% max with a fabricated 10/25/100 ladder.)'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
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
support:
  tiers:
    - Standard
    - Enterprise
    - Business Critical
  has_24x7: true
  fastest_response: 30 min (Sev1, Business Critical)
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: https://support.fivetran.com/hc/en-us/articles/5893119459223-Fivetran-Support-Policy
  note: Published response targets per severity; not described as credit-backed SLAs. Portal/email only (no phone). 24/7 with tier-gated speed; Business Critical adds a dedicated TAM + custom SLAs. Resident Solution Architect + training. Portal/email only (no phone). 24/7 with tier-gated speed; Business Critical adds a dedicated TAM + custom SLAs. Resident Solution Architect + training.
  channels:
    - portal
    - email
---

Fivetran is a Database & Data Infrastructure provider. See the official SLA at [https://www.fivetran.com/legal/sla](https://www.fivetran.com/legal/sla).

<!-- Add human-readable notes about Fivetran's SLA nuances here. -->
