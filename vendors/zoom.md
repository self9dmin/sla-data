---
title: Zoom
slug: zoom
vendor_name: Zoom
legal_entity: Zoom
category: Communication & Collaboration
website: https://www.zoom.com
scope: global
sla_url: https://www.zoom.com/en/trust/terms/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Former sla_url (zoom.us/docs/en-us/sla.html) now 301-redirects to a 404. No
  canonical public Zoom-hosted general availability SLA page could be located:
  the Zoom API SLA disclaims any uptime guarantee, the Services Description has
  no SLA terms, and the Premier Support SLA covers support response (not
  availability). The on-file 99.999% appears to be Zoom Phone marketing
  ("five-nines"), NOT a general-service commitment. Zoom's current general
  "Zoom Availability SLA Supplemental Terms" (dated 12 Aug 2025) — found only as
  a reseller-hosted (Mitel) copy, not an official zoom.com URL — indicates
  99.9% target with 20%/50% credit tiers and a claim that must be filed DURING
  the outage (not a 30-day window). Per policy these third-party-sourced numbers
  were NOT written in; on-file values (uptime 99.999, max_credit 25,
  claim_deadline 30) are UNVERIFIED and retained. sla_url repointed to Zoom's
  master Terms of Service (live). last_verified not bumped.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
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
  submission_method: Zoom Support
  submission_url: https://support.zoom.com/hc/en/contact
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
  - id: meetings
    name: Zoom Meetings
    category: Video
    description: Video conferencing
    sla_eligible: true
    source_url: https://www.zoom.com/en/trust/premier-support-terms/
  - id: phone
    name: Zoom Phone
    category: UCaaS
    description: Cloud phone system
    sla_eligible: true
    source_url: https://www.zoom.com/en/trust/premier-support-terms/
  - id: rooms
    name: Zoom Rooms
    category: Hardware
    description: Conference room solution
    sla_eligible: true
    source_url: https://www.zoom.com/en/trust/premier-support-terms/
  - id: chat
    name: Zoom Team Chat
    category: Messaging
    description: Team messaging
    sla_eligible: true
    source_url: https://www.zoom.com/en/trust/premier-support-terms/
  - id: webinars
    name: Zoom Webinars
    category: Events
    description: Large-scale events
    sla_eligible: true
    source_url: https://www.zoom.com/en/trust/premier-support-terms/
---

Zoom is a Communication & Collaboration provider. See the official SLA at [https://www.zoom.com/en/trust/terms/](https://www.zoom.com/en/trust/terms/).

<!-- Add human-readable notes about Zoom's SLA nuances here. -->
