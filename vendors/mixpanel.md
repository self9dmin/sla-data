---
title: Mixpanel
slug: mixpanel
vendor_name: Mixpanel
legal_entity: Mixpanel
category: Analytics & BI
website: https://www.mixpanel.com
scope: global
sla_url: https://mixpanel.com/legal/terms-of-use/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
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
  submission_url: https://mixpanel.com/get-support/
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
  - id: data-pipelines
    name: Data Pipelines
    category: Data Integration
    description: Data export and warehousing
    sla_eligible: true
    source_url: https://mixpanel.com/legal/terms-of-use/
  - id: analytics
    name: Mixpanel Analytics
    category: Analytics
    description: Product analytics and insights
    sla_eligible: true
    source_url: https://mixpanel.com/legal/terms-of-use/
  - id: reports
    name: Mixpanel Reports
    category: Analytics
    description: Custom reports and dashboards
    sla_eligible: true
    source_url: https://mixpanel.com/legal/terms-of-use/
support:
  tiers:
    - "Standard"
    - "Premium"
    - "Enterprise"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://mixpanel.com/pricing/services/"
  note: "Tiered support with response targets; CSM and services on higher plans."
---

Mixpanel is a Monitoring & Observability provider. As of 2026-06-19 Mixpanel publishes no public Service Level Agreement; the prior SLA URL (https://mixpanel.com/legal/sla/) returns a 404 and the legal index lists no SLA document. See the official legal terms at [https://mixpanel.com/legal/terms-of-use/](https://mixpanel.com/legal/terms-of-use/), which disclaim any availability commitment.

<!-- Add human-readable notes about Mixpanel's SLA nuances here. -->
