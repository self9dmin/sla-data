---
title: Looker
slug: looker
vendor_name: Looker
legal_entity: Looker
category: Analytics & BI
website: https://www.looker.com
scope: global
sla_url: https://cloud.google.com/terms/looker-core/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.5
max_credit_percent: 25
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99.5
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: credit_eligibility
      description: Customer must notify Looker (Google Cloud core) support within 30 days from the time Customer becomes eligible to receive the Financial Credit
  submission_method: Looker (Google Cloud core) support contact form
  submission_url: https://cloud.google.com/support
  required_evidence:
    - Log files showing Downtime and the date and time they occurred
  review_timeline: Not specified
  credit_application: Monetary credit applied to future use of the Covered Service
global_exclusions:
  - Features or services designated pre-general availability
  - Features or services excluded from the SLA in the Documentation
  - Resources or Services for development, staging or other non-production usage
  - Use of the Covered Services that does not conform with the Documentation
  - Errors caused by factors outside of Google's reasonable control
  - Errors resulting from Customer or third-party software or hardware
  - Errors resulting from abuses or behaviors that violate the Agreement
  - Errors resulting from quotas applied by the system or listed in the Documentation
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
  - id: standard
    name: Looker (Google Cloud core) Standard Edition
    category: BI
    description: Looker (Google Cloud core) Standard Edition
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://cloud.google.com/terms/looker-core/sla
  - id: enterprise
    name: Looker (Google Cloud core) Enterprise Edition
    category: BI
    description: Looker (Google Cloud core) Enterprise Edition
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://cloud.google.com/terms/looker-core/sla
  - id: embed
    name: Looker (Google Cloud core) Embed Product
    category: BI
    description: Looker (Google Cloud core) Embed Product
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://cloud.google.com/terms/looker-core/sla
---

Looker is a Business Intelligence provider. See the official SLA at [https://cloud.google.com/terms/looker-core/sla](https://cloud.google.com/terms/looker-core/sla).

Looker (Google Cloud core) SLOs vary by edition: Standard Edition 99.5%, Enterprise Edition and Embed Product 99.9%. Credits are tiered (10% for the band above 99.0%, 25% for uptime below 99.0%) and capped at 25% of the monthly bill. Credits are not automatic, the customer must notify Looker support within 30 days of becoming eligible and provide log files showing the Downtime.

<!-- Add human-readable notes about Looker's SLA nuances here. -->
