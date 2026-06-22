---
title: Amplitude
slug: amplitude
vendor_name: Amplitude
legal_entity: Amplitude
category: Analytics & BI
website: https://www.amplitude.com
scope: global
sla_url: https://amplitude.com/terms
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
  submission_url: https://help.amplitude.com
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
  - id: analytics
    name: Amplitude Analytics
    category: Analytics
    description: Product analytics platform
    sla_eligible: true
    source_url: https://amplitude.com/terms
  - id: cdp
    name: Amplitude CDP
    category: Customer Data
    description: Customer data platform
    sla_eligible: true
    source_url: https://amplitude.com/terms
  - id: experiment
    name: Amplitude Experiment
    category: A/B Testing
    description: Feature flagging and experimentation
    sla_eligible: true
    source_url: https://amplitude.com/terms
  - id: session-replay
    name: Session Replay
    category: Analytics
    description: Session recording and replay
    sla_eligible: true
    source_url: https://amplitude.com/terms
support:
  tiers:
    - "Standard"
    - "Premium Success Basic"
    - "Premium Success Advanced"
    - "Premium Success Signature"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://gethelp.amplitude.com/hc/en-us/articles/13513083850267-Amplitude-Technical-Support-offerings"
  note: "Premium Success tiers list response targets, not credit-backed SLAs."
---

Amplitude is a Monitoring & Observability provider. See the official SLA at [https://amplitude.com/terms](https://amplitude.com/terms).

<!-- Add human-readable notes about Amplitude's SLA nuances here. -->
