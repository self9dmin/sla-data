---
title: Vonage
slug: vonage
vendor_name: Vonage
legal_entity: Vonage
category: Communication & Collaboration
website: https://www.vonage.com
scope: global
sla_url: https://www.vonage.com/legal/
last_verified: '2026-06-20'
last_updated: '2026-06-19'
needs_review: true
review_note: '2026-06-20 browser check: vonage.com/legal/sla returns HTTP 404 and no public SLA page was found; unverified numeric values removed.'
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
  submission_url: https://developer.vonage.com/support
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
  - id: business-communications
    name: Vonage Business Communications
    category: UCaaS
    description: Unified communications
    sla_eligible: true
    source_url: https://www.vonage.com/legal/
  - id: contact-center
    name: Vonage Contact Center
    category: CCaaS
    description: Contact center platform
    sla_eligible: true
    source_url: https://www.vonage.com/legal/
  - id: api-sms
    name: Vonage SMS API
    category: CPaaS
    description: SMS messaging APIs
    sla_eligible: true
    source_url: https://www.vonage.com/legal/
  - id: api-video
    name: Vonage Video API
    category: CPaaS
    description: Video APIs
    sla_eligible: true
    source_url: https://www.vonage.com/legal/
  - id: api-voice
    name: Vonage Voice API
    category: CPaaS
    description: Voice APIs
    sla_eligible: true
    source_url: https://www.vonage.com/legal/
support:
  tiers:
    - "Essentials"
    - "Premium"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: true
  success_program: true
  training: false
  pricing: custom
  source_url: "https://www.vonage.com/communications-apis/services/support/"
  note: "Premium adds 24/7 and a designated support engineer; Enterprise adds an account manager."
---

Vonage is a Communication & Collaboration provider. See the official SLA at [https://www.vonage.com/legal/sla/](https://www.vonage.com/legal/sla/).

<!-- Add human-readable notes about Vonage's SLA nuances here. -->
