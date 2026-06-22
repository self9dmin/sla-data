---
title: Snowflake
slug: snowflake
vendor_name: Snowflake
legal_entity: Snowflake
category: Databases & Data Infrastructure
website: https://www.snowflake.com
scope: global
sla_url: https://www.snowflake.com/en/legal/addenda/support-policy-and-service-level-agreement/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: false
review_note: "Verified against the Snowflake SLA (updated 2026-02-24); base availability 99.9%, credits are multipliers of daily Snowflake Credits, represented via credit_unit: multiplier."
uptime_commitment: 99.9
max_credit_percent: 7
credit_unit: multiplier
credit_note: "Service Level Credits are multiples of Average Daily Snowflake Credits (1x below 99.9%, 3x below 99.0%, 7x below 95.0%), not a percentage of fees and with no percent cap."
claim_deadline_days: 21
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 7
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
      days: 21
      business_days: false
      anchor_point: end_of_calendar_month_of_failure
      description: Request Service Level Credits within 21 days of the calendar month in which the Service Level Failure occurred
  submission_method: Support Case
  submission_url: https://www.snowflake.com/en/support/
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 10 business days
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
  - id: business-critical
    name: Snowflake (Business Critical)
    category: Data Platform
    description: Includes failover and cross-region DR
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.snowflake.com/en/legal/addenda/support-policy-and-service-level-agreement/
  - id: enterprise
    name: Snowflake (Enterprise)
    category: Data Platform
    description: 10% credit cap on monthly consumption
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.snowflake.com/en/legal/addenda/support-policy-and-service-level-agreement/
  - id: standard
    name: Snowflake (Standard)
    category: Data Platform
    description: No formal SLA for Standard Edition
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.snowflake.com/en/legal/addenda/support-policy-and-service-level-agreement/
  - id: vps
    name: Snowflake Virtual Private (VPS)
    category: Data Platform
    description: Dedicated virtual private deployment
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.snowflake.com/en/legal/addenda/support-policy-and-service-level-agreement/
support:
  tiers:
    - "Premier"
    - "Priority"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: true
  success_program: false
  training: true
  pricing: custom
  source_url: "https://www.snowflake.com/legal-files/Snowflake-Support-Policy-And-Service-Level-Agreement.pdf"
  note: "Priority Support adds 24x7 for Sev1-2, a Support Account Manager, and a 15-min Sev1 target. It explicitly excludes customer success programs and professional services (sold separately). Uptime (99.9%) is the credit-backed SLA; response times are targets."
---

Snowflake is a Database & Data Infrastructure provider. See the official SLA at [https://www.snowflake.com/en/legal/addenda/support-policy-and-service-level-agreement/](https://www.snowflake.com/en/legal/addenda/support-policy-and-service-level-agreement/).

<!-- Add human-readable notes about Snowflake's SLA nuances here. -->
