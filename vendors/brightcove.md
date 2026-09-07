---
title: Brightcove
slug: brightcove
vendor_name: Brightcove
legal_entity: Brightcove Inc.
category: Content & Media
website: https://www.brightcove.com
scope: global
sla_url: https://www.brightcove.com/en/legal/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: standard
claim_deadline_days: 30
needs_review: false
credit_note: 'Verified against Brightcove Master Service Agreement and SLA documentation. Uptime commitments: "99.9% for player features (Player Uptime) and 99.5% for U/I features (U/I Uptime)." Credit formula verbatim: "total cumulative minutes of Player Downtime less than the Player Uptime commitment plus total cumulative minutes of U/I Downtime less than the U/I Uptime commitment, multiplied by the effective per minute rate of the platform fee." Claim deadline verbatim: "customers must contact Brightcove at http://support.brightcove.com/en/contact within 30 days after the end of the month in which the SLA Credit was earned." Remedy clause: "The provision by Brightcove of the SLA Credit is the customer''s sole and exclusive remedy for Downtime." Credit cap and maximum percentage not confirmed verbatim — needs_review: true. Legal entity: Brightcove Inc. (Delaware, USA).'
credit_policy:
  remedy_type: credit
  calculation_type: pro_rated
  credit_unit: time
claim_process:
  submission_method: Support ticket
  submission_url: https://support.brightcove.com/en/contact
  required_evidence:
    - Dates and times of downtime
    - Affected player or UI features
    - Account details
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: billing_cycle_end
      description: Must contact Brightcove support within 30 days after the end of the month in which the SLA Credit was earned
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Third-party CDN outages outside Brightcove control
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
      - Email
      - Dedicated support
services:
  - id: brightcove-video-cloud
    name: Brightcove Video Cloud
    category: Content & Media
    description: Enterprise video hosting, live streaming, and video player platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.brightcove.com/en/legal/
---

Brightcove (Brightcove Inc., Delaware) is an enterprise video platform. The SLA distinguishes between Player features (99.9%) and U/I features (99.5%) with a per-minute pro-rata credit formula. Claims must be submitted within 30 days of month-end. SLA credits are the sole and exclusive remedy for downtime.
