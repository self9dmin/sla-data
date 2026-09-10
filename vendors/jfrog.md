---
title: JFrog
slug: jfrog
vendor_name: JFrog
legal_entity: JFrog Ltd
category: Developer Tools
website: https://jfrog.com
scope: global
sla_url: https://jfrog.com/platform/sla/
last_verified: '2026-09-09'
last_updated: '2026-09-09'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: standard
claim_deadline_days: 30
needs_review: false
credit_note: 'Verified against JFrog Platform SLA (jfrog.com/platform/sla/). Uptime commitment: Standard plan 99.9%; Premium High Availability add-on 99.99%. Credits are measured in DAYS OF SERVICE EXTENSION, not percentage of fees. Verbatim: "Customer must notify JFrog in writing to service@jfrog.com within thirty (30) days following the end of the calendar month during which JFrog did not meet the Uptime Guarantee. Failure to comply with this requirement shall forfeit Customer''s right to receive a Service Credit." Credit cap verbatim: "thirty days of Services added to the end of Your term." Legal entities: JFrog Ltd (global, Israel), JFrog Inc. (Americas), JFrog SAS (select EMEA).'
credit_policy:
  remedy_type: credit
  calculation_type: pro_rated
  max_credit_days: 30
  credit_unit: time
claim_process:
  submission_method: Email
  submission_url: mailto:service@jfrog.com
  required_evidence:
    - Written notification to service@jfrog.com
    - Incident dates and times
    - Affected JFrog services and account details
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: billing_cycle_end
      description: Written notification to service@jfrog.com required within 30 days after the end of the calendar month in which the Uptime Guarantee was not met
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Free or trial plan services
  - Beta or preview features
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Enterprise
    price_model: Subscription
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
      - Email
  - name: Enterprise+
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
      - Email
      - Dedicated support
services:
  - id: jfrog-platform-standard
    name: JFrog Platform (Standard)
    category: Developer Tools
    description: Artifact management, DevSecOps, and software supply chain security platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://jfrog.com/platform/sla/
  - id: jfrog-platform-premium-ha
    name: JFrog Platform (Premium High Availability)
    category: Developer Tools
    description: High-availability JFrog Platform with Premium HA add-on
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://jfrog.com/platform/sla/
---

JFrog (JFrog Ltd, Israel) provides artifact management and DevSecOps platform services. The SLA commits to 99.9% uptime for Standard plans and 99.99% with the Premium HA add-on. Credits are issued as **service term extensions** (days added to subscription), not percentage refunds — capped at 30 days total. Claims must be submitted in writing to service@jfrog.com within 30 days of the month-end in which the breach occurred.
