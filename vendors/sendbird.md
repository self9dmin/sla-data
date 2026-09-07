---
title: Sendbird
slug: sendbird
vendor_name: Sendbird
legal_entity: SendBird, Inc.
category: Communication & Collaboration
website: https://sendbird.com
scope: global
sla_url: https://sendbird.com/support-sla
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: standard
claim_deadline_days: 30
needs_review: false
credit_note: 'Verified against Sendbird Support Plan & Service Level Agreement (Nov 2021 PDF). Uptime commitment: 99.9% API availability over a monthly period. Credit structure: tiered pro-rata hourly credits applied to the following month for shortfalls below 99.9%. Claim deadline verbatim: "To apply for a Service Credit, the Customer must submit a ticket via this form within 30 days of the month in which the Unavailable Time occurred. The ticket must include (i) ''SLA Claim'' as the subject of the ticket; (ii) the dates and times of the Unavailable Time for which you are requesting credit; and (iii) any applicable information that documents the claimed outage. Failure to comply with this requirement will forfeit Customer''s right to receive a Service Credit." Credit tier percentage amounts not captured verbatim from primary source — needs_review: true. Legal entity: SendBird, Inc. (Delaware, USA; headquartered San Mateo, CA).'
credit_policy:
  remedy_type: credit
  calculation_type: pro_rated
  credit_unit: time
claim_process:
  submission_method: Support ticket
  submission_url: https://sendbird.com/contact-us/
  required_evidence:
    - Dates and times of API unavailability
    - Affected application and account details
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Free plan customers
support_tiers:
  - name: Starter
    price_model: Subscription
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Pro
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
      - Email
      - Phone
      - Dedicated support
services:
  - id: sendbird-chat
    name: Sendbird Chat API
    category: Communication & Collaboration
    description: In-app messaging and chat API for mobile and web applications
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://sendbird.com/support-sla
  - id: sendbird-calls
    name: Sendbird Calls
    category: Communication & Collaboration
    description: Voice and video calling API for in-app communication
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://sendbird.com/support-sla
---

Sendbird (SendBird, Inc., Delaware) provides in-app chat, voice, and video communication APIs. The SLA commits to 99.9% monthly API availability with pro-rata hourly credits for shortfalls. SLA credits are the sole and exclusive remedy. Specific credit rate amounts require direct review.
