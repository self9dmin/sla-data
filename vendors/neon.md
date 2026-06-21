---
title: Neon
slug: neon
vendor_name: Neon
legal_entity: Neon
category: Databases & Data Infrastructure
website: https://www.neon.com
scope: global
sla_url: https://neon.com/neon-business-sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.95
max_credit_percent: 80
claim_deadline_days: 1
has_automatic_credits: false
min_plan_for_sla: business
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 80
  credit_tiers:
    - uptime_below: 99.95
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 15
    - uptime_below: 98
      credit_percent: 20
    - uptime_below: 96
      credit_percent: 80
claim_process:
  deadlines:
    - type: notification
      days: 1
      business_days: false
      anchor_point: awareness_date
      description: Log a support ticket within 24 hours of first becoming aware of an event that impacts service availability
    - type: submission
      days: null
      business_days: false
      anchor_point: end_of_following_month
      description: Submit your claim and all required information by the end of the month immediately following the month in which the Downtime occurred
  submission_method: Support ticket
  submission_url: https://neon.com/neon-business-sla
  required_evidence:
    - Affected Compute Endpoints
    - Incident timestamps
    - Impact description
  review_timeline: 45 days
  credit_application: Applied as a service credit to monthly fees
global_exclusions:
  - Factors outside Neon's reasonable control (natural disaster, war, acts of terrorism, riots, government action)
  - Third-party services, hardware, or software (such as the cloud platform services on which Neon runs)
  - Voluntary customer actions or inactions not in accordance with the Documentation (deleting databases, insufficient compute resources, exceeding storage limits)
  - Underlying database engine software causing repeated crashes or an inoperable database instance
  - Long recovery time due to insufficient IO capacity for the customer's workload
  - Customer equipment, software, or other technology and/or third-party equipment
  - Suspension or termination of the right to use Neon under the Agreement
  - Maintenance as provided for pursuant to the Agreement
  - Services being in Technical Preview
support_tiers:
  - name: Scale (Business support)
    slug: business
    price_model: Add-on
    sla_eligible: true
    claim_assistance: true
    availability: Business hours
    channels:
      - Support ticket
    response_times:
      severity1: 4 hours
      severity2: 1 business day
  - name: Scale (Production support)
    slug: production
    price_model: Add-on
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Support ticket
    response_times:
      severity1: 1 hour
      severity2: 4 hours
  - name: Enterprise
    slug: enterprise
    price_model: Custom
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Support ticket
    response_times:
      severity1: 1 hour
      severity2: 4 hours
services:
  - id: compute
    name: Neon Compute Endpoints
    category: Database
    description: Availability of Compute Endpoints (Serverless Postgres compute) - the only component covered by the SLA
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://neon.com/neon-business-sla
  - id: database
    name: Neon Serverless Postgres
    category: Database
    description: Serverless PostgreSQL
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://neon.com/neon-business-sla
  - id: api
    name: Neon API
    category: APIs
    description: Management API - not covered by the SLA (SLA applies only to Compute Endpoints)
    sla_eligible: false
    source_url: https://neon.com/neon-business-sla
  - id: autoscaling
    name: Neon Autoscaling
    category: Database
    description: Auto-scaling compute - not separately covered by the SLA
    sla_eligible: false
    source_url: https://neon.com/neon-business-sla
  - id: branching
    name: Neon Branching
    category: Database
    description: Instant database branching - not covered by the SLA
    sla_eligible: false
    source_url: https://neon.com/neon-business-sla
---

Neon is a Database & Data Infrastructure provider. See the official SLA at [https://neon.com/neon-business-sla](https://neon.com/neon-business-sla).

The SLA applies exclusively to customers on the Neon Business or Scale plan and covers only the availability of Compute Endpoints. To claim a service credit, log a support ticket within 24 hours of becoming aware of an impacting event and submit the full claim by the end of the month following the month in which the downtime occurred; Neon processes claims within 45 days of receipt.

<!-- Add human-readable notes about Neon's SLA nuances here. -->
