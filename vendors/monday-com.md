---
title: Monday.com
slug: monday-com
vendor_name: Monday.com
legal_entity: Monday.com
category: Productivity
website: https://monday.com
scope: global
sla_url: https://monday.com/l/legal/monday-com-service-level-agreement-for-enterprise-plan/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 30
claim_deadline_days: 90
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 30
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 5
    - uptime_below: 98
      credit_percent: 10
    - uptime_below: 95
      credit_percent: 15
    - uptime_below: 90
      credit_percent: 20
    - uptime_below: 85
      credit_percent: 30
claim_process:
  deadlines:
    - type: submission
      days: 90
      business_days: false
      anchor_point: incident_date
      description: Submit detailed Credit request within 90 days following the Service Unavailability incident
  submission_method: Email
  submission_url: mailto:support@monday.com
  required_evidence:
    - Detailed Credit request
  review_timeline: Not specified
  credit_application: Applied against future payment obligations (non-refundable)
global_exclusions:
  - Planned maintenance (with 3+ days notice)
  - Acts beyond monday.com's reasonable control
  - Customer or third-party issues
  - Denial of service (DDoS) attacks
  - Read-Only Mode under 45 minutes
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
  - id: monday-enterprise
    name: Monday.com Work OS (Enterprise)
    category: Project Management
    description: Enterprise plans only - 90-day claim window
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://monday.com/l/legal/monday-com-service-level-agreement-for-enterprise-plan/
  - id: monday-standard-pro
    name: Monday.com Work OS (Standard/Pro)
    category: Project Management
    description: No financial SLA for Standard/Pro tiers
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://monday.com/l/legal/monday-com-service-level-agreement-for-enterprise-plan/
  - id: monday-workdocs
    name: Monday.com WorkDocs (Enterprise)
    category: Collaboration
    description: Document collaboration - Enterprise only
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://monday.com/l/legal/monday-com-service-level-agreement-for-enterprise-plan/
support:
  tiers:
    - "Standard Support"
    - "Premium Support"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://monday.com/w/enterprise-pro-services"
  note: "Premium Support advertises fastest SLAs; no published response time or credit remedy."
---

Monday.com is a Productivity & Collaboration provider. See the official SLA at [https://monday.com/l/legal/monday-com-service-level-agreement-for-enterprise-plan/](https://monday.com/l/legal/monday-com-service-level-agreement-for-enterprise-plan/). The financial SLA (99.9% uptime, tiered service credits) applies to Enterprise Plan customers only; lower tiers (Standard/Pro) have no financial SLA.

<!-- Add human-readable notes about Monday.com's SLA nuances here. -->
