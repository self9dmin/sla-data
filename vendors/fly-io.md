---
title: Fly.io
slug: fly-io
vendor_name: Fly.io
legal_entity: Fly.io, Inc.
category: Cloud Infrastructure
website: https://fly.io
scope: global
sla_url: https://fly.io/legal/sla-uptime/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: enterprise
claim_deadline_days: 30
needs_review: false
credit_note: 'Verified against Fly.io Service Level Agreement (fly.io/legal/sla-uptime/): "Fly.io will provide Actual Availability for at least ninety-nine and nine tenths percent (99.9%) of the total time in each calendar month during the Subscription Term." SLA applies to Enterprise plan customers only. Credit formula: "The amount of any Service Credit due hereunder shall be calculated as follows: X * Y, where X = the total fees due from Customer to Fly.io for the affected Services for the relevant calendar month (regardless of when billed or payable), and Y = the Credit Percentage corresponding with the Actual Availability provided (as a percentage of total time) for the relevant calendar month, as set forth in the table below." The specific Credit Percentage tier table was referenced but not captured verbatim — direct verification required. Sole remedy: "the Service Credits shall be Customer''s sole and exclusive remedy, and Fly.io''s sole and exclusive liability, for any failure by Fly.io to meet the Uptime Commitment." Claim: email support@fly.io "within thirty (30) days of the end of the month in which the Uptime Commitment was not met" including org name/email and dates/times of unavailability. Credits: "not refunds, cannot be exchanged into a cash amount, and may only be used against future billing charges."'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  submission_method: Email
  submission_url: mailto:support@fly.io
  review_timeline: Credits issued within 30 days if eligible
  credit_application: Applied against future billing charges only — not refundable
  required_evidence:
    - Organization name or registered support email
    - Previously reported dates and times of service unavailability
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: billing_cycle_end
      description: Email support@fly.io within 30 days of the end of the month in which the SLA was not met
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Non-Enterprise plan customers
support_tiers:
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Email
      - Dedicated support
services:
  - id: apps
    name: Fly Apps
    category: PaaS
    description: Application hosting on Fly.io global infrastructure
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://fly.io/legal/sla-uptime/
---

Fly.io is a developer-focused cloud platform that runs applications globally close to users. The SLA (99.9% monthly uptime) applies only to Enterprise plan customers. The specific credit percentage tiers per availability level are documented in the SLA but were not captured during research — direct page verification is recommended. Credits are non-refundable and applied to future billing only.
