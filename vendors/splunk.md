---
title: Splunk
slug: splunk
vendor_name: Splunk
legal_entity: Splunk
category: Monitoring & Observability
website: https://www.splunk.com
scope: global
sla_url: https://www.splunk.com/en_us/legal/splunk-cloud-service-level-schedule.html
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: false
review_note: "Verified against the Splunk Cloud Service Level Schedule; 100% quarterly availability target, time-based credits, represented via credit_unit: time."
uptime_commitment: 100
claim_deadline_days: 5
has_automatic_credits: false
credit_unit: time
credit_note: "Credits are time-based amounts of subscription fees by tier (2h / 4h / 8h / 1 day / 1 month), capped at one month's fees per calendar quarter; not a percentage."
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 95
      credit_percent: 50
claim_process:
  deadlines:
    - type: submission
      days: 5
      business_days: false
      anchor_point: end_of_calendar_quarter
      description: File a claim within 5 days following the end of the calendar quarter in which the SLA was missed (calendar days)
  submission_method: Email to splunk-cloud-billing@cisco.com
  submission_url: https://www.splunk.com/en_us/support.html
  required_evidence:
    - Complete description of the downtime
    - How the Customer was adversely affected
    - For how long (duration)
  review_timeline: Not specified in SLA
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
  - id: cloud
    name: Splunk Cloud
    category: SIEM
    description: Cloud-hosted SIEM
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.splunk.com/en_us/legal/splunk-cloud-service-level-schedule.html
  - id: enterprise
    name: Splunk Enterprise
    category: SIEM
    description: On-premise data platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.splunk.com/en_us/legal/splunk-cloud-service-level-schedule.html
  - id: observability
    name: Splunk Observability Cloud
    category: Monitoring
    description: Full-stack observability
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.splunk.com/en_us/legal/splunk-cloud-service-level-schedule.html
  - id: soar
    name: Splunk SOAR
    category: Security
    description: Security orchestration
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.splunk.com/en_us/legal/splunk-cloud-service-level-schedule.html
support:
  tiers:
    - "Standard"
    - "Premium"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: none
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.splunk.com/en_us/support-and-services/support-programs.html"
  note: "Premium publishes a 30-min P1 target; not stated as a credit-backed SLA."
---

Splunk is a Monitoring & Observability provider. See the official SLA at [https://www.splunk.com/en_us/legal/splunk-cloud-service-level-schedule.html](https://www.splunk.com/en_us/legal/splunk-cloud-service-level-schedule.html).

<!-- Add human-readable notes about Splunk's SLA nuances here. -->
