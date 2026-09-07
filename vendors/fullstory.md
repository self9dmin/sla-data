---
title: FullStory
slug: fullstory
vendor_name: FullStory
legal_entity: Fullstory, Inc.
category: Marketing & Analytics
website: https://www.fullstory.com
scope: global
sla_url: https://help.fullstory.com/hc/en-us/articles/19483159822359-Fullstory-Support-Policy-and-Service-Level-Agreements
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.5
has_automatic_credits: false
min_plan_for_sla: enterprise
needs_review: false
credit_note: 'Verified against Fullstory Support Policy and Service Level Agreements (help.fullstory.com). Uptime verbatim: "Fullstory''s failure to make the SaaS Services Available at least 99.5% of the time in any given month during the Subscription Term, excluding the Excused Events, shall be deemed a service level default (''Service Level Default'') and Customer may obtain the exclusive remedies set forth below." Credit structure verbatim: "From 99% up to 99.5% and for each full percentage point below 99%, Fullstory will provide one (1) additional twenty-four hour day (''Day'') to the end of the then-current Subscription Term in the applicable Order Form." Credit example verbatim: "if Service Availability is 97.2% for a given month, Customer would be entitled to two (2) additional Days of access to the SaaS Services." Credits are subscription term extensions ONLY, not monetary or invoice credits. Termination right verbatim: "In the event the SaaS Services Availability falls below 90% during any given month of the Term, Customer may terminate the Agreement without penalty upon written notice to Fullstory within thirty (30) days after the end of such month and receive a pro-rata refund of any prepaid but unused Fees." Claim deadline verbatim: "Within thirty (30) days after the end of each month in which Customer believes that it is due a Service Level Credit, Customer will send an email to support@fullstory.com." Forfeiture verbatim: "If a customer does not request a Service Level Credit within such thirty-day period, they may not request a Service Level Credit for that month." Exclusive remedy verbatim: "Customer may obtain the exclusive remedies set forth below" — sole remedy clause. Plan tier verbatim: "Premium SLA" is an Enterprise-tier feature. Scheduled maintenance exclusion: 7 days advance notice required. Legal entity: Fullstory, Inc. (Delaware corporation), principal place of business: 1745 Peachtree Street NE, Suite N, Atlanta, Georgia 30309 (confirmed via Hasson v. Fullstory Inc., 3d Cir. 2024).'
credit_policy:
  remedy_type: service_extension
  calculation_type: days_extension
  max_credit_days: 1
claim_process:
  submission_method: Email
  submission_url: mailto:support@fullstory.com
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: month_end
      description: Email support@fullstory.com within 30 days after end of the affected month
global_exclusions:
  - Credits are subscription term extensions only, not cash or invoice credits
  - Uptime below 90% triggers termination right with pro-rata refund (not credits)
  - Excused Events: force majeure, customer fault, scheduled maintenance (7-day notice)
  - Third-party failures outside FullStory control
  - Testing/development periods scheduled in advance
  - Standard plan not eligible (Enterprise/Premium SLA only)
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: false
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
      - Dedicated support
services:
  - id: fullstory-digital-experience
    name: FullStory Digital Experience Analytics
    category: Marketing & Analytics
    description: Session replay, heatmaps, and digital experience analytics platform for product and UX teams
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://help.fullstory.com/hc/en-us/articles/19483159822359-Fullstory-Support-Policy-and-Service-Level-Agreements
---

FullStory (Fullstory, Inc., Delaware; HQ: Atlanta, GA) is a digital experience analytics platform offering session replay, heatmaps, and product analytics. The Enterprise SLA commits to 99.5% monthly availability with a term-extension remedy: 1 additional day per 99–99.5% breach band, plus 1 day per each full percentage point below 99%. This is a subscription day extension — not a cash or invoice credit. Claims must be submitted by email within 30 days of month-end; below 90% availability triggers a termination right with pro-rata refund.
