---
title: RingCentral
slug: ringcentral
vendor_name: RingCentral
legal_entity: RingCentral
category: Communication & Collaboration
website: https://www.ringcentral.com
scope: global
sla_url: https://www.ringcentral.com/legal/ringex-service-attachment.html
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  2026-06-19: Prior sla_url https://www.ringcentral.com/legal/last-version-sla.html
  returns HTTP 404. No public, canonical RingEX/MVP Service Level Agreement
  document could be located on ringcentral.com, the legal hub, Trust Center,
  RingEX Service Attachment, Online Terms of Service, and Master Services
  Agreement PDF contain no public uptime/service-credit SLA terms (RingCentral's
  RingEX SLA appears to be provided contractually per Order Form, not published).
  Only product-specific SLAs are public (RingCentral Events, MiCloud/Sky, PCI
  Pal). Therefore uptime_commitment, credit_policy, credit_tiers, claim_process,
  max_credit_percent, claim_deadline_days, has_automatic_credits, and
  min_plan_for_sla are UNVERIFIED and left unchanged; last_verified left
  unchanged. sla_url and dead services[].source_url updated to the live official
  RingEX Service Attachment page as the closest canonical RingEX legal terms.
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
  submission_url: https://support.ringcentral.com
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
  - id: contact-center
    name: RingCentral Contact Center
    category: CCaaS
    description: Contact center solution
    sla_eligible: true
    source_url: https://www.ringcentral.com/legal/ringex-service-attachment.html
  - id: engage
    name: RingCentral Engage
    category: Digital Engagement
    description: Digital customer engagement
    sla_eligible: true
    source_url: https://www.ringcentral.com/legal/ringex-service-attachment.html
  - id: mvp
    name: RingCentral MVP
    category: UCaaS
    description: Message, video, phone platform
    sla_eligible: true
    source_url: https://www.ringcentral.com/legal/ringex-service-attachment.html
  - id: video
    name: RingCentral Video
    category: Video
    description: Video conferencing
    sla_eligible: true
    source_url: https://www.ringcentral.com/legal/ringex-service-attachment.html
---

RingCentral is a Communication & Collaboration provider. See the official RingEX Service Attachment at [https://www.ringcentral.com/legal/ringex-service-attachment.html](https://www.ringcentral.com/legal/ringex-service-attachment.html). Note: as of 2026-06-19 RingCentral does not appear to publish a standalone public RingEX/MVP SLA document; the prior SLA URL (last-version-sla.html) returns 404, and SLA uptime/credit terms are provided contractually per Order Form. SLA figures below are unverified pending a confirmed source.

<!-- Add human-readable notes about RingCentral's SLA nuances here. -->
