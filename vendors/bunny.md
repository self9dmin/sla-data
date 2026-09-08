---
title: Bunny.net
slug: bunny
vendor_name: Bunny.net
legal_entity: BunnyWay d.o.o.
category: CDN & Edge
website: https://bunny.net
scope: global
sla_url: https://bunny.net/tos/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.995
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: false
credit_note: 'Verified against Bunny.net Terms of Service and SLA documentation. Uptime commitment verbatim: "BunnyWay guarantees a monthly uptime of 99.995% for CDN services and 99.99% for BunnyStorage (Bunny Storage)." Credit tiers and specific credit percentage amounts are not confirmed verbatim — the SLA page references a credit structure but the page was inaccessible for verbatim review. Credit claim process requires submitting a ticket. needs_review: true — credit tier percentages require direct review of the full SLA document.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Support ticket
  submission_url: https://bunny.net/contact/
  required_evidence:
    - Dates and times of service unavailability
    - Affected CDN zone or storage zone details
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - DDoS attacks targeting customer origin
support_tiers:
  - name: Standard
    price_model: Usage-based
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
      - Dedicated support
services:
  - id: bunny-cdn
    name: Bunny CDN
    category: CDN & Edge
    description: Global content delivery network with edge caching and optimization
    uptime_commitment: 99.995
    sla_eligible: true
    source_url: https://bunny.net/tos/
  - id: bunny-storage
    name: BunnyStorage
    category: CDN & Edge
    description: Distributed edge storage for static assets and files
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://bunny.net/tos/
---

Bunny.net (operated by BunnyWay d.o.o., Ljubljana, Slovenia) is a CDN and edge storage provider. The SLA commits to 99.995% monthly uptime for CDN and 99.99% for BunnyStorage with credit remedies. Specific credit tier percentages require direct review of the full SLA document.
