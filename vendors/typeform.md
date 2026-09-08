---
title: Typeform
slug: typeform
vendor_name: Typeform
legal_entity: Typeform
category: Productivity
website: https://www.typeform.com
scope: global
sla_url: https://www.typeform.com/legal
last_verified: '2026-06-23'
last_updated: '2026-06-23'
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: Typeform's Master Enterprise Agreement disclaims uninterrupted/error-free service — no committed uptime % and no service credits. The only remedy is the generic right to terminate for an uncured material breach (15-day cure), which is a contract right, not an SLA remedy. No public SLA.
credit_policy:
  calculation_type: none
  remedy_type: no_sla
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://www.typeform.com/help/
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
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
  - id: api
    name: Typeform API
    category: API
    description: Form and responses API
    sla_eligible: true
    source_url: https://www.typeform.com/mea
  - id: forms
    name: Typeform Forms
    category: Forms
    description: Interactive forms
    sla_eligible: true
    source_url: https://www.typeform.com/mea
  - id: surveys
    name: Typeform Surveys
    category: Survey
    description: Survey creation
    sla_eligible: true
    source_url: https://www.typeform.com/mea
  - id: videoask
    name: VideoAsk
    category: Video
    description: Video-based interactions
    sla_eligible: true
    source_url: https://www.typeform.com/mea
support:
  tiers:
    - Standard
    - Enterprise
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: https://www.typeform.com/enterprise
  note: Enterprise includes a dedicated CSM and VIP priority support; no published response SLA. Enterprise VIP support + dedicated CSM and a Technical Implementation Specialist; email/help-center (no confirmed phone), no published 24x7.
  channels:
    - email
---

Typeform is a Enterprise Software provider. See the official SLA at [https://www.typeform.com/terms-service/](https://www.typeform.com/terms-service/).

<!-- Add human-readable notes about Typeform's SLA nuances here. -->
