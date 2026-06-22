---
title: Notion
slug: notion
vendor_name: Notion
legal_entity: Notion
category: Productivity
website: https://www.notion.com
scope: global
sla_url: https://www.notion.so/notion/Service-Level-Terms-6f805fa1d4ca4463b805e2832ae8ff0d
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 5
claim_deadline_days: 3
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: per_incident
  remedy_type: credit
  max_credit_percent: 5
  # "a 5% credit of the Subscription Fees for each period of 30 or more consecutive
  # minutes of Downtime provided that (1) the Downtime lasts longer than one hour,
  # and (2) no more than one such credit will accrue per day." Cumulative credits may
  # not exceed one week of Subscription Fees in any given month.
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 5
claim_process:
  deadlines:
    - type: submission
      days: 3
      business_days: false
      anchor_point: time_of_downtime
      description: >-
        "Customer must notify Notion in writing within 72 hours from the time of
        Downtime, and failure to provide such notice will forfeit the right to
        receive credit."
  submission_method: Written notice to Notion
  submission_url: https://www.notion.so/notion/Service-Level-Terms-6f805fa1d4ca4463b805e2832ae8ff0d
  required_evidence: []
  credit_application: Applied to the month in which the incident occurred
global_exclusions:
  - Holidays
  - Weekends
  - Scheduled maintenance
  - Force Majeure events
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: false
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
  - id: workspace
    name: Notion (the Services)
    category: Productivity
    description: >-
      Notion's SLA commits a single 99.9% monthly Availability for "the
      Services" as a whole; no per-service uptime tiers are published.
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.notion.so/notion/Service-Level-Terms-6f805fa1d4ca4463b805e2832ae8ff0d
support:
  tiers:
    - "Free"
    - "Plus"
    - "Business"
    - "Enterprise"
    - "Premium Support add-on"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.notion.com/pricing"
  note: "Enterprise includes a CSM; Premium Support add-on adds 24/7 and a dedicated engineer."
---

Notion is a Productivity & Collaboration provider. See the official Service Level Terms at [https://www.notion.so/notion/Service-Level-Terms-6f805fa1d4ca4463b805e2832ae8ff0d](https://www.notion.so/notion/Service-Level-Terms-6f805fa1d4ca4463b805e2832ae8ff0d).

<!--
Verified 2026-06-19 against Notion's official Service Level Terms (notion.so):
- 99.9% monthly Availability, excluding holidays, weekends, scheduled maintenance, and Force Majeure.
- Remedy is a flat 5% Subscription Fee credit per 30+ consecutive minutes of Downtime,
  only if Downtime lasts longer than one hour; max one credit/day; cumulative credits
  capped at one week of Subscription Fees per month. NOT a tiered model.
- Credit must be requested in writing within 72 hours of the Downtime or it is forfeited.
- Credits are not automatic and may not be redeemed for cash.
- The prior www.notion.so/Enterprise-SLA URL returns HTTP 401 and was not usable; the
  Service Level Terms page above is the live, public, official source.
- The SLA is an Enterprise/custom commitment; the previous tiered credit_tiers (10/20/30),
  per-service uptime numbers, 30-day review timeline, and AI feature exclusion quote were
  not found on Notion's own domain and have been removed/corrected.
-->

