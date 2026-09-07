---
title: Vultr
slug: vultr
vendor_name: Vultr
legal_entity: The Constant Company, LLC
category: Cloud Infrastructure
website: https://www.vultr.com
scope: global
sla_url: https://www.vultr.com/legal/sla/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 100
max_credit_percent: 100
has_automatic_credits: false
min_plan_for_sla: all plans
claim_deadline_days: 3
credit_note: 'Verified against Vultr Service Level Agreement (vultr.com/legal/sla/): "100% uptime guarantee based on network and host node availability." Credit structure: "accounts will be eligible for SLA credits based on any affected instance''s hourly cost, up to the full monthly cost" — this is a pro-rata model (hours of downtime × hourly rate for that instance), not a tiered percentage table. Scope: "if You have fifty (50) servers with Us, and one (1) of those servers experiences downtime, any credit due to You under this uptime guarantee would be proportional to that one (1) server''s downtime and not Your entire account." Claim: "failure to follow the procedure within three (3) days of the triggering event will result in waiver of any right to receive credits." Must open a support ticket AND obtain a Vultr ticket number as proof. Credits expire one (1) year after issuance; non-refundable for cash.'
credit_policy:
  calculation_type: pro_rated
  remedy_type: credit
  max_credit_percent: 100
claim_process:
  submission_method: Ticket
  submission_url: https://my.vultr.com/support/
  credit_application: Non-refundable account credits; expire 1 year from issuance
  required_evidence:
    - Support ticket number related to the outage
    - Affected instance details
    - Request for credit applied to account
  deadlines:
    - type: submission
      days: 3
      business_days: false
      anchor_point: incident_date
      description: Submit support ticket and request credit within 3 days of the triggering event
global_exclusions:
  - Scheduled maintenance with at least 24 hours notice
  - Time-critical security patches (if outage does not exceed 10 minutes)
  - Force majeure events
  - Customer-caused issues
support_tiers:
  - name: Standard
    price_model: Included
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
services:
  - id: cloud-compute
    name: Cloud Compute
    category: Compute
    description: Regular cloud compute instances (shared vCPU)
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.vultr.com/legal/sla/
  - id: optimized-cloud-compute
    name: Optimized Cloud Compute
    category: Compute
    description: High-performance compute instances
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.vultr.com/legal/sla/
  - id: bare-metal
    name: Bare Metal
    category: Compute
    description: Dedicated bare metal servers
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.vultr.com/legal/sla/
---

Vultr is a Cloud Infrastructure provider operating globally. The SLA guarantees 100% host node and network uptime; credits are calculated pro-rata (hourly rate × hours of downtime per affected instance, up to 100% of that instance's monthly cost). The 3-day claim window is among the shortest in the industry — tickets must be opened and a Vultr ticket number obtained within 3 days of the triggering event.
