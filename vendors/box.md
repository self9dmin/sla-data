---
title: Box
slug: box
vendor_name: Box
legal_entity: Box, Inc.
category: Storage & Backup
website: https://www.box.com
scope: global
sla_url: https://www.box.com/legal/sla
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: true
credit_note: 'Verified against Box Service Level Agreement (box.com/legal/sla). Uptime verbatim: "Box guarantees that its Services will be available 99.9% of the time in any given calendar month." Measurement: calendar month. Credit cap verbatim: "In no event will credits exceed the total Subscription Fees paid by Customer for the affected month." Two-step claim process: (1) Customer must file a support ticket within 15 days of the downtime event; (2) Customer must submit a written claim within 15 days of receiving Box''s uptime report confirming the breach. Credit delivery: applied against future invoices. Sole remedy verbatim: "Service Credits shall be Customer''s sole and exclusive remedy for any failure by Box to meet the uptime commitment." Exclusions: scheduled maintenance with advance notice, force majeure, customer misuse, third-party service failures. needs_review: true — specific tiered credit percentages (% per uptime band) not found verbatim from publicly indexed sources; only the monthly fee cap is confirmed.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  max_credit_percent: 100
claim_process:
  submission_method: Support ticket then written claim
  deadlines:
    - type: submission
      days: 15
      business_days: false
      anchor_point: incident_date
      description: File support ticket within 15 days of the downtime event
    - type: submission
      days: 15
      business_days: false
      anchor_point: report_receipt
      description: Submit written claim within 15 days of receiving Box uptime report
global_exclusions:
  - Scheduled maintenance with advance notice
  - Force majeure events outside Box control
  - Customer misuse or misconfiguration
  - Third-party service failures outside Box control
  - Credit tier percentages (% per uptime band) not publicly confirmed
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Business Plus
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
      - Phone
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
  - id: box-content-cloud
    name: Box Content Cloud
    category: Storage & Backup
    description: Cloud content management and collaboration platform for secure file storage, sharing, and workflow automation
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.box.com/legal/sla
---

Box (Box, Inc., Delaware; Redwood City, CA) is a cloud content management and collaboration platform. The SLA guarantees 99.9% monthly availability. The claim process is two-step: file a support ticket within 15 days of the downtime event, then submit a written claim within 15 days of receiving Box's uptime confirmation report. Credits are capped at the total monthly fees for the affected period. The specific credit tier percentages (per uptime band) are not publicly indexed.
