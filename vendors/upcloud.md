---
title: UpCloud
slug: upcloud
vendor_name: UpCloud
legal_entity: UpCloud Ltd
category: Cloud Infrastructure
website: https://upcloud.com
scope: global
sla_url: https://upcloud.com/terms-of-service/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.999
max_credit_days: 30
has_automatic_credits: false
min_plan_for_sla: all plans
claim_deadline_days: 15
credit_note: 'Verified against UpCloud Terms of Service (upcloud.com/terms-of-service/): "Hetzner will use commercially reasonable efforts to ensure a monthly availability of 99.999%" (Premium plan, effective May 2025; prior plans commit 99.99%). Credit formula: "The amount of the SLA-compensation will be 50 (fifty) times UpCloud''s service fees charged for the interrupted Service-item allocated for the period of time when the use of that Service-item was interrupted." Trigger threshold: unscheduled downtime exceeding 5 minutes. Cap: "The maximum SLA-compensation for an individual interruption shall be limited to an amount equal to the service fees charged by UpCloud for the interrupted Service-item during 30 (thirty) calendar days immediately preceding the interruption." Claim: "you must claim it within 15 (fifteen) days after the failure has been corrected by contacting their Support Team." Sole remedy stated twice: "The SLA-compensation set out above will be your sole remedy and compensation for any interruptions in the Service." Credits: "SLA-compensations will be paid in the form of service credits and may not be exchanged for cash." Exclusions: scheduled maintenance, force majeure, customer-caused failures, free trials, UpCloud website, APIs, and Control Panel.'
credit_policy:
  calculation_type: pro_rated
  remedy_type: credit
claim_process:
  submission_method: Email
  submission_url: mailto:support@upcloud.com
  review_timeline: Not specified
  credit_application: Service credits only — not exchangeable for cash
  required_evidence:
    - Affected service item details
    - Dates and duration of interruption
  deadlines:
    - type: submission
      days: 15
      business_days: false
      anchor_point: incident_resolution
      description: Claim within 15 days after the failure has been corrected
global_exclusions:
  - Scheduled interruptions and security updates/patches
  - Force majeure events
  - Customer actions contrary to user instructions
  - Customer operating systems or application software
  - Free Trials
  - UpCloud website, APIs, and Control Panel
support_tiers:
  - name: Standard
    price_model: Included
    sla_eligible: true
    availability: 24/7
    channels:
      - Email
      - Ticket
services:
  - id: cloud-servers
    name: Cloud Servers
    category: Compute
    description: UpCloud virtual machines (General Purpose, CPU-Optimized, Memory-Optimized, Developer)
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://upcloud.com/terms-of-service/
---

UpCloud is a Cloud Infrastructure provider headquartered in Finland. The SLA uses a 50× multiplier model: credits equal 50 times the pro-rata fees for the actual downtime period, capped at 30 days of that service item's fees per incident. The 99.999% commitment applies to Premium plans (effective May 2025); Developer-tier plans commit to 99.99%.
