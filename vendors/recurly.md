---
title: Recurly
slug: recurly
vendor_name: Recurly
legal_entity: Recurly, Inc.
category: Finance & Payments
website: https://recurly.com
scope: global
sla_url: https://recurly.com/legal/sla/
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.5
has_automatic_credits: false
min_plan_for_sla: enterprise
max_credit_percent: 100
needs_review: false
credit_note: 'Verified against Recurly Service Level Agreement (recurly.com/legal/sla/). Uptime verbatim: "Recurly will provide 99.5% System Availability over one-month periods, excluding any System Maintenance, Payment Gateway Outages or Force Majeure Events." Credit structure verbatim: "If Recurly fails to meet the Service Level for an affected Service, then for each full hour in a month that the affected Service is unavailable beyond the System Availability metric, Recurly will credit Merchant with an account credit equal to 10% of the portion of Fees applicable to the affected Service in the relevant month." Note: credits are per FULL HOUR of excess downtime only — partial hours are not credited. Credit cap verbatim: "the aggregate amount of credits not exceeding 100% of the Fees payable for the affected Services in that month." Claim deadline verbatim: "In order to receive SLA Credits, Merchant must notify Recurly in writing (email is sufficient) within five (5) business days from the time of Downtime, and failure to provide such notice will forfeit the right to receive the SLA Credit with respect to such Downtime." Non-cash verbatim: "Such credits may not be redeemed for cash." SLA applicability verbatim: "This Service Level Agreement will only apply to the extent merchants have executed a separate agreement with Recurly that specifically references this SLA." Payment Gateway outages explicitly excluded. Legal entity: Recurly, Inc.'
credit_policy:
  remedy_type: credit
  calculation_type: per_hour
  credit_percent: 10
  max_credit_percent: 100
claim_process:
  submission_method: Email
  required_evidence:
    - Written notice of downtime
    - Time and duration of downtime
  deadlines:
    - type: submission
      days: 5
      business_days: true
      anchor_point: incident_date
      description: Must notify Recurly in writing within five (5) business days from the time of Downtime
global_exclusions:
  - System Maintenance windows
  - Payment Gateway Outages
  - Force Majeure Events
  - Partial hours of downtime (only full hours credited)
  - Merchants without a separate agreement referencing this SLA
support_tiers:
  - name: Core
    price_model: Usage-based
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Professional
    price_model: Usage-based
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Elite
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Phone
      - Dedicated support
services:
  - id: recurly-subscription-management
    name: Recurly Subscription Management
    category: Finance & Payments
    description: Subscription billing, revenue recovery, and dunning management platform
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://recurly.com/legal/sla/
---

Recurly (Recurly, Inc.) is a subscription management and recurring billing platform. The SLA commits to 99.5% monthly availability with a per-hour credit structure: 10% of affected service fees per full hour of excess downtime, capped at 100% of monthly fees. The 5-business-day claim window is measured from the time of downtime. Credits are non-redeemable for cash and the SLA only applies to merchants with a separate MSA that explicitly references it.
