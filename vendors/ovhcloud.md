---
title: OVHcloud
slug: ovhcloud
vendor_name: OVHcloud
legal_entity: OVH US LLC
category: Cloud Infrastructure
website: https://www.ovhcloud.com
scope: global
sla_url: https://www.ovhcloud.com/en/support/sla/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.99
max_credit_percent: 50
has_automatic_credits: false
min_plan_for_sla: all plans
claim_deadline_days: 60
needs_review: false
credit_note: 'Verified against OVHcloud Public Cloud SLA (us.ovhcloud.com/legal/sla/public-cloud/): General Purpose, Memory-Optimized, Compute-Optimized, and GPU instances commit to 99.99% monthly availability; Sandbox instances commit to 99.95%. Credit structure is linear: "In the event of our Support Team experiencing a loss of connectivity (excluding scheduled maintenance), 0.5% per minute of downtime will be reimbursed up to 50% of your instance-related consumption for the month concerned." Downtime beyond 3 consecutive minutes triggers the credit calculation. Exclusive remedy: "The Service Credits are Customer''s sole and exclusive remedy for any incident occurring during the Service Term." Claim: "a Customer must file a support request within sixty (60) calendar days of the suspected incident via the OVHcloud Control Panel." Credits are non-refundable account credits. Note: Managed Databases and AI services cap at 30% of monthly fees; Object Storage caps at 100%. Claim deadline of 60 days needs direct page verification (source: OVHcloud Public Cloud SLA page).'
credit_policy:
  calculation_type: pro_rated
  remedy_type: credit
  max_credit_percent: 50
claim_process:
  submission_method: Ticket
  submission_url: https://www.ovhcloud.com/en/support/
  review_timeline: Not specified
  credit_application: Non-refundable account credits
  required_evidence:
    - Affected instance details
    - Description of the loss of connectivity
    - Support ticket filed via OVHcloud Control Panel
  deadlines:
    - type: submission
      days: 60
      business_days: false
      anchor_point: incident_date
      description: File support request within 60 calendar days of the incident via OVHcloud Control Panel
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused failures or security responsibility failures
  - Accounts with delinquent payments or ToS violations
support_tiers:
  - name: Standard
    price_model: Included
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
  - name: Business
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
services:
  - id: public-cloud-instances
    name: Public Cloud Instances
    category: Compute
    description: General Purpose, Memory-Optimized, Compute-Optimized, GPU instances
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://us.ovhcloud.com/legal/sla/public-cloud/
  - id: sandbox-instances
    name: Sandbox Instances
    category: Compute
    description: Discovery and Sandbox tier instances
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://us.ovhcloud.com/legal/sla/public-cloud/
  - id: object-storage
    name: Object Storage
    category: Storage
    description: S3-compatible object storage
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://us.ovhcloud.com/legal/sla/public-cloud/
---

OVHcloud is a European Cloud Infrastructure provider. The SLA uses a linear credit model: 0.5% of monthly instance fees per minute of downtime (after the first 3 consecutive minutes), capped at 50% of monthly instance fees. Object Storage credits are capped at 100%; Managed Databases and AI services cap at 30%. The 60-day claim window is among the most generous in the industry.
