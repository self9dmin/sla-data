---
title: Typeform
slug: typeform
vendor_name: Typeform
legal_entity: Typeform
category: Productivity
website: https://www.typeform.com
scope: global
sla_url: https://www.typeform.com/terms-service/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Typeform publishes no public uptime SLA with service credits. Its Master
  Enterprise Agreement (https://www.typeform.com/mea) provides the Services on an
  "as is" / "as available" basis and states "TYPEFORM cannot accept any
  responsibility for slow loading, latency, or failure to view or access forms";
  the usage policy disclaims liability for suspension. The no-credit fields
  (max_credit_percent 0, has_automatic_credits false, calculation_type none) are
  consistent with this. However, the 99.9 uptime_commitment values (top-level and
  per service) could NOT be verified on any typeform.com page and appear
  contradicted by the disclaimers, so they were left unchanged pending review.
  sla_url (terms-service) is live (301 -> legal chooser form). The previous
  services source_url (admin.typeform.com/to/terms-of-service) was a dead/invalid
  link redirecting to a marketing "incorrectURL" page; replaced with the MEA.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
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
    - "Standard"
    - "Enterprise"
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.typeform.com/enterprise/"
  note: "Enterprise includes a dedicated CSM and VIP priority support; no published response SLA."
---

Typeform is a Enterprise Software provider. See the official SLA at [https://www.typeform.com/terms-service/](https://www.typeform.com/terms-service/).

<!-- Add human-readable notes about Typeform's SLA nuances here. -->
