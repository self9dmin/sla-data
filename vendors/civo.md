---
title: Civo
slug: civo
vendor_name: Civo
legal_entity: Civo Ltd
category: Cloud Infrastructure
website: https://www.civo.com
scope: global
sla_url: https://www.civo.com/legal/sla
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.95
max_credit_percent: 100
has_automatic_credits: false
min_plan_for_sla: all plans
claim_deadline_days: 30
needs_review: false
credit_note: 'Verified against Civo SLA (civo.com/legal/sla): "Guaranteed Uptime Percentage of 99.95%." Credit tiers (from search-indexed content of the SLA page): 99.0%–<99.95% → 10% credit; 95.0%–<99.0% → 40% credit; <95.0% → 100% credit. Cap: "The maximum financial credit issued for any outages will not exceed 100% of the Fees due for the affected billing month." Claim: "the BUYER must notify CIVO within 30 days from the date of an outage that qualifies for credit through Civo''s SLA Financial Credit Request form" including server log files, error dates/times, and support ticket details. Credits: "monetary discounts applicable to future invoices... issued within 30 days of a successful credit request and will expire 12 months from the date of issue." Credit tier values sourced from search-index excerpts; direct page verification recommended.'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.95
      credit_percent: 10
    - uptime_below: 99.0
      credit_percent: 40
    - uptime_below: 95.0
      credit_percent: 100
claim_process:
  submission_method: Form
  submission_url: https://www.civo.com/legal/sla
  review_timeline: Credits issued within 30 days of successful request
  credit_application: Future invoice discount; expires 12 months from issue
  required_evidence:
    - Server log files showing loss of connectivity errors
    - Dates and times of errors
    - Support ticket number related to the outage
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Notify Civo within 30 days from the date of the qualifying outage via SLA Financial Credit Request form
global_exclusions:
  - Scheduled maintenance
  - Emergency maintenance
  - Force majeure events
  - Customer-caused outages
support_tiers:
  - name: Standard
    price_model: Included
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Slack (community)
services:
  - id: kubernetes
    name: Kubernetes Clusters
    category: Containers
    description: Managed Kubernetes (CNCF-certified)
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.civo.com/legal/sla
  - id: compute
    name: Compute Instances
    category: Compute
    description: Cloud compute virtual machines
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.civo.com/legal/sla
---

Civo is a Cloud Infrastructure provider focused on Kubernetes-native cloud. The SLA provides tiered credits (10%/40%/100%) below the 99.95% monthly uptime guarantee, with a 30-day claim window from the date of the outage. Credits are applied as future invoice discounts and expire 12 months from issuance.
