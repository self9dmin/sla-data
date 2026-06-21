---
title: Mux
slug: mux
vendor_name: Mux
legal_entity: Mux
category: Content & Media
website: https://www.mux.com
scope: global
sla_url: https://www.mux.com/terms
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Mux does not publish a public uptime SLA with service credits. The live Terms
  of Service (https://www.mux.com/terms) states only that an SLA is a
  separately-negotiated document: "the Services will perform in material
  conformance with our Documentation and any Service Level Agreement agreed to
  between the parties." No uptime percentage, credit tiers, max credit, or claim
  deadline is published on mux.com, so the existing numeric fields could not be
  verified and were left unchanged pending review. The /sla and
  /legal/terms-of-service pages return 404; canonical legal page is /terms.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note;
  no public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://www.mux.com/contact
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 15 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Free tier services
  - Beta features
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: true
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
  - id: data
    name: Mux Data
    category: Analytics
    description: Video analytics
    sla_eligible: true
    source_url: https://www.mux.com/terms
  - id: live
    name: Mux Live
    category: Streaming
    description: Live streaming
    sla_eligible: true
    source_url: https://www.mux.com/terms
  - id: player
    name: Mux Player
    category: Video
    description: Video player SDK
    sla_eligible: true
    source_url: https://www.mux.com/terms
  - id: video
    name: Mux Video
    category: Video
    description: Video encoding and delivery
    sla_eligible: true
    source_url: https://www.mux.com/terms
---

Mux is a Content & Media provider. See the official SLA at [https://www.mux.com/terms](https://www.mux.com/terms).

<!-- Add human-readable notes about Mux's SLA nuances here. -->
