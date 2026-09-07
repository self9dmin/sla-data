---
title: Heap
slug: heap
vendor_name: Heap
legal_entity: Heap
category: Analytics & BI
website: https://www.heap.com
scope: global
sla_url: https://contentsquare.com/legal/support-package-slc/
last_verified: '2026-06-23'
last_updated: '2026-06-24'
uptime_commitment: 99.5
credit_unit: days
max_credit_days: 10
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: 'Heap is now Contentsquare. Verified SLA: 99.5% availability; credit is a service-term extension of one day for each 1% of availability below 99.5%, capped at 10 days per license year (claim within 30 days). Applies to Experience/Product Analytics and Voice of Customer Pro/Enterprise. (Corrected: prior record had a fabricated 99.9% / 10-25% percent schedule.)'
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
    - Basic
    - Standard
    - Premium
  has_24x7: false
  response_is_sla: false
  designated_contact: team
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: https://help.heap.io/hc/en-us/articles/37271906133521-Heap-support-offerings
  note: CSM included from Pro plan; severity response table not publicly accessible. Email all tiers; phone is Premium-only and escalation-only. Premium is 5x16 (no 24x7). Senior Backline Engineers at Premium; onboarding + managed services.
  channels:
    - email
    - phone
  fastest_response: 2 business hours (P0, Premium)
---

Heap is a Monitoring & Observability provider. Heap (Product Analytics) is now a Contentsquare company; its governing SLA is the Contentsquare Support Package & SLA at [https://contentsquare.com/legal/support-package-slc/](https://contentsquare.com/legal/support-package-slc/) (referenced from Heap's Master Services Agreement). The former heap.io SLA page is no longer published.

<!-- Add human-readable notes about Heap's SLA nuances here. -->
