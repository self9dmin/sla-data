---
title: Zoom
slug: zoom
vendor_name: Zoom
legal_entity: Zoom
category: Communication & Collaboration
website: https://www.zoom.com
scope: global
sla_url: https://www.zoom.com/en/trust/terms/
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.9
max_credit_percent: 50
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: Zoom's Availability SLA commits to 99.9% Monthly Availability per service, with tiered service credits up to 50% of the affected Service SKU fee (20% for 98–99.9%, 50% below 98%). A support ticket must be opened during the downtime; credits are applied within 90 days. Zoom Phone separately markets 99.999%.
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
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
support:
  tiers:
    - Standard
    - Premier
    - Premier+
  has_24x7: true
  fastest_response: 1 hour (P1, Premier; 30 min at Premier Elite)
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: true
  training: false
  pricing: custom
  source_url: https://www.zoom.com/en/support-plans/
  note: Premier+ adds an assigned TAM and prioritized tickets; response times are objectives. Premier support tiers; assigned TAM at Premier+. Professional/onboarding services exist (prior prof_services=false was wrong). Premier support tiers; assigned TAM at Premier+. Professional/onboarding services exist (prior prof_services=false was wrong).
  channels:
    - portal
    - chat
    - phone
---

Zoom is a Communication & Collaboration provider. See the official SLA at [https://www.zoom.com/en/trust/terms/](https://www.zoom.com/en/trust/terms/).

<!-- Add human-readable notes about Zoom's SLA nuances here. -->
