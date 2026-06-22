---
title: Greenhouse
slug: greenhouse
vendor_name: Greenhouse
legal_entity: Greenhouse
category: HR & People Operations
website: https://www.greenhouse.com
scope: global
sla_url: https://www.greenhouse.com/service-level-agreement
last_verified: '2025-12-20'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 10
credit_unit: days
credit_note: "Service credits are awarded in one-day increments of fees (5 credits below 99.5%, 10 below 99.0%; Job Boards 5 below 99.9%, 10 below 99.5%), not a percentage."
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: false
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 10
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99.5
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://support.greenhouse.io
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
    name: Greenhouse API
    category: API
    description: Integration API
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.greenhouse.com/service-level-agreement
  - id: onboarding
    name: Greenhouse Onboarding
    category: Onboarding
    description: New hire onboarding
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.greenhouse.com/service-level-agreement
  - id: recruiting
    name: Greenhouse Recruiting
    category: ATS
    description: Applicant tracking system
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.greenhouse.com/service-level-agreement
  - id: sourcing
    name: Greenhouse Sourcing
    category: Sourcing
    description: Candidate sourcing
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.greenhouse.com/service-level-agreement
support:
  tiers:
    - "Standard"
    - "Premium"
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.greenhouse.com/customers/services"
  note: "Premium Support and CSM tiers referenced; response times not publicly disclosed."
---

Greenhouse is a HR & People Operations provider. See the official SLA at [https://www.greenhouse.com/service-level-agreement](https://www.greenhouse.com/service-level-agreement).

<!-- Add human-readable notes about Greenhouse's SLA nuances here. -->
