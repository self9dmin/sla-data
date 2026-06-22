---
title: Webex
slug: webex
vendor_name: Webex
legal_entity: Webex
category: Communication & Collaboration
website: https://www.webex.com
scope: global
sla_url: https://www.cisco.com/c/en/us/about/legal/cloud-and-software/software-terms.html
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Old sla_url (cloud-terms.html) now redirects to Cisco's Offer Descriptions
  index (software-terms.html), updated here. Cisco does NOT publish a public
  uptime SLA with service credits for core Webex. The official Webex Offer
  Description (EDCS-12881749 Ver 10.0, 2025-09-10,
  https://www.cisco.com/c/dam/en_us/about/doing_business/legal/OfferDescriptions/webex.pdf)
  contains only support response objectives (Sev 1/2 within 1 hour; Sev 3/4
  next business day) - no availability percentage, no service credits, no
  credit tiers, no claim deadline, and no automatic-credits language. The
  99.99/99.999% figures are marketing/blog claims, and the credit terms (e.g.
  5% MRC cap, 30 business days) come from a Verizon reseller SLA, not
  cisco.com. Existing uptime_commitment, credit_policy, claim_deadline_days,
  and services[].uptime_commitment values are therefore UNVERIFIED against any
  Cisco-domain document and were left unchanged pending review.
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
  submission_method: Cisco TAC
  submission_url: https://help.webex.com
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
  - id: calling
    name: Webex Calling
    category: Voice
    description: Cloud calling
    sla_eligible: true
    source_url: https://www.cisco.com/c/dam/en_us/about/doing_business/legal/OfferDescriptions/webex.pdf
  - id: contact-center
    name: Webex Contact Center
    category: CCaaS
    description: Contact center platform
    sla_eligible: true
    source_url: https://www.cisco.com/c/en/us/about/legal/cloud-and-software/software-terms.html
  - id: events
    name: Webex Events
    category: Events
    description: Virtual events platform
    sla_eligible: true
    source_url: https://www.cisco.com/c/en/us/about/legal/cloud-and-software/software-terms.html
  - id: meetings
    name: Webex Meetings
    category: Video
    description: Video conferencing
    sla_eligible: true
    source_url: https://www.cisco.com/c/dam/en_us/about/doing_business/legal/OfferDescriptions/webex.pdf
  - id: messaging
    name: Webex Messaging
    category: Chat
    description: Team messaging
    sla_eligible: true
    source_url: https://www.cisco.com/c/dam/en_us/about/doing_business/legal/OfferDescriptions/webex.pdf
support:
  tiers:
    - "Basic"
    - "Enhanced"
    - "Premium"
  has_24x7: true
  fastest_response: "60 min"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: flat
  source_url: "https://www.cisco.com/c/dam/en/us/products/collateral/conferencing/webex-meeting-center/cisco-software-support-data-sheet.pdf"
  note: "Basic included; Enhanced/Premium are paid add-ons; Premium has a designated service manager."
---

Webex is a Communication & Collaboration provider. Cisco's official terms are published at [https://www.cisco.com/c/en/us/about/legal/cloud-and-software/software-terms.html](https://www.cisco.com/c/en/us/about/legal/cloud-and-software/software-terms.html). Cisco does not publish a public uptime SLA with service credits for Webex; the [Webex Offer Description](https://www.cisco.com/c/dam/en_us/about/doing_business/legal/OfferDescriptions/webex.pdf) defines support response objectives only.

<!-- Add human-readable notes about Webex's SLA nuances here. -->
