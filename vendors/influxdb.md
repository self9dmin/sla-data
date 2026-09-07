---
title: InfluxDB Cloud
slug: influxdb
vendor_name: InfluxDB Cloud
legal_entity: InfluxData, Inc.
category: Databases & Data Infrastructure
website: https://www.influxdata.com
scope: global
sla_url: https://www.influxdata.com/legal/influxdb-cloud-2-0-service-level-agreement/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.9
max_credit_percent: 50
has_automatic_credits: false
min_plan_for_sla: annual
claim_deadline_days: 5
needs_review: false
credit_note: 'Verified against InfluxDB Cloud 2.0 Service Level Agreement (influxdata.com/legal/influxdb-cloud-2-0-service-level-agreement/). Uptime verbatim: "InfluxData will provide and maintain a Monthly Availability Percentage of 99.9% with respect to the Service." Applicability verbatim: "This Service Level Commitment does not apply to pay-as-you-go Services subscription plans" — applies only to annual pre-pay subscriptions. Credit cap verbatim: "The Service Level Credit will be calculated as a percentage of the total fees and charges incurred by Customer based on Customer''s actual usage of the Services in the calendar month in which the Committed Service Level was not met, up to a maximum Service Level Credit per calendar month equal to 50% of the total fees and charges in the aggregate for all Claims." Credit application verbatim: "Service Level Credits are paid by InfluxData to Customer by way of a credit on the next invoice." Claim process verbatim: "Customer must file a claim for each such Service Level Credit by emailing InfluxData at [email protected], within five (5) calendar days following the end of the calendar month in which the Committed Service Level was not met." Evidence verbatim: "The Claim must indicate the dates and times the Service was Unavailable and include related logs documenting the Unavailability." Note: specific credit tier percentages per availability threshold exist in the SLA document but were not captured verbatim — needs_review: true.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  max_credit_percent: 50
claim_process:
  submission_method: Email
  submission_url: mailto:support@influxdata.com
  credit_application: Applied as credit on next invoice
  required_evidence:
    - Dates and times the Service was Unavailable
    - Related logs documenting the unavailability
  deadlines:
    - type: submission
      days: 5
      business_days: false
      anchor_point: billing_cycle_end
      description: Claim must be filed within five calendar days following the end of the calendar month in which the SLA was not met
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Pay-as-you-go subscription plans (SLA applies to annual pre-pay only)
support_tiers:
  - name: Pay-as-you-go
    price_model: Usage-based
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Documentation
  - name: Annual Pre-pay
    price_model: Annual subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
services:
  - id: influxdb-cloud
    name: InfluxDB Cloud
    category: Database
    description: Managed time-series database-as-a-service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.influxdata.com/legal/influxdb-cloud-2-0-service-level-agreement/
---

InfluxDB Cloud offers a 99.9% monthly availability SLA for annual pre-pay subscribers only — pay-as-you-go customers are explicitly excluded. The claim window is an unusually short five calendar days after month-end. Maximum credit is capped at 50% of monthly fees. Specific credit tier percentages were not captured verbatim; direct document review recommended.
