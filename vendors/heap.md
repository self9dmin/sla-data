---
title: Heap
slug: heap
vendor_name: Heap
legal_entity: Heap
category: Analytics & BI
website: https://www.heap.com
scope: global
sla_url: https://contentsquare.com/legal/support-package-slc/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Heap's governing SLA is now the Contentsquare Support Package SLA (parent
  company), which states 99.5% availability with a day-extension remedy rather
  than the 99.9% uptime and percentage credits recorded here. Numbers left
  unchanged pending a decision to remodel to the day-extension structure.
uptime_commitment: 99.9
max_credit_percent: 25
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://help.heap.io
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
    name: Heap Analytics
    category: Analytics
    description: Auto-capture analytics
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://contentsquare.com/legal/support-package-slc/
  - id: data-warehouse
    name: Heap Connect
    category: Data Integration
    description: Data warehouse sync
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://contentsquare.com/legal/support-package-slc/
  - id: session-replay
    name: Session Replay
    category: Analytics
    description: Session recording
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://contentsquare.com/legal/support-package-slc/
support:
  tiers:
    - "Basic"
    - "Standard"
    - "Premium"
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://help.heap.io/hc/en-us/articles/37271906133521-Heap-support-offerings"
  note: "CSM included from Pro plan; severity response table not publicly accessible."
---

Heap is a Monitoring & Observability provider. Heap (Product Analytics) is now a Contentsquare company; its governing SLA is the Contentsquare Support Package & SLA at [https://contentsquare.com/legal/support-package-slc/](https://contentsquare.com/legal/support-package-slc/) (referenced from Heap's Master Services Agreement). The former heap.io SLA page is no longer published.

<!-- Add human-readable notes about Heap's SLA nuances here. -->
