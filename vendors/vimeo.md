---
title: Vimeo
slug: vimeo
vendor_name: Vimeo
legal_entity: Vimeo
category: Content & Media
website: https://www.vimeo.com
scope: global
sla_url: https://vimeo.com/legal/enterprise-terms/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 25
claim_deadline_days: 60
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99.0
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 60
      business_days: false
      anchor_point: end_of_month
      description: Request a Credit in writing within sixty (60) days after the end of the applicable month
  submission_method: Account manager
  submission_url: https://vimeo.com/legal/enterprise-terms/sla
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Scheduled Maintenance up to two (2) hours per calendar month
  - Emergency Maintenance up to one (1) hour per calendar month
  - Force majeure events
  - Outages affecting more than 50% of U.S. Internet traffic
  - Unavailability of Amazon or Google cloud-based services
  - Blocking or throttling by an Internet service provider or transit provider
  - Customer intentional acts, errors, or omissions
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: false
    claim_assistance: false
    availability: Business hours
    channels:
      - Email
    response_times:
      general: < 24 hours
  - name: Enterprise
    slug: enterprise
    price_model: Custom
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
    response_times:
      critical: < 1 hour
      high: < 4 hours
services:
  - id: hosting
    name: Video Hosting
    category: Video
    description: Video hosting and storage
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://vimeo.com/legal/enterprise-terms/sla
  - id: live
    name: Vimeo Live
    category: Streaming
    description: Live streaming
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://vimeo.com/legal/enterprise-terms/sla
  - id: ott
    name: Vimeo OTT
    category: Streaming
    description: OTT streaming service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://vimeo.com/legal/enterprise-terms/sla
  - id: player
    name: Vimeo Player
    category: Video
    description: Embeddable video player
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://vimeo.com/legal/enterprise-terms/sla
  - id: record
    name: Vimeo Record
    category: Video
    description: Screen recording
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://vimeo.com/legal/enterprise-terms/sla
support:
  tiers:
    - "Standard"
    - "Advanced"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://help.vimeo.com/hc/en-us/articles/12425669477137-About-contacting-Vimeo-Support-and-response-times"
  note: "Enterprise lists a first-response target and a dedicated account manager."
---

Vimeo is a Content & Media provider. See the official SLA at [https://vimeo.com/legal/enterprise-terms/sla](https://vimeo.com/legal/enterprise-terms/sla).

Vimeo's SLA is not public/universal: it only applies to Vimeo Enterprise, Vimeo OTT, and Livestream platforms, and only "if specifically referenced on your Order Form or to Livestream subscription services purchased prior to April 16, 2020." Standard consumer plans are not covered.

<!-- Add human-readable notes about Vimeo's SLA nuances here. -->
