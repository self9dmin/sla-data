---
title: ClickUp
slug: clickup
vendor_name: ClickUp
legal_entity: ClickUp
category: Productivity
website: https://www.clickup.com
scope: global
sla_url: https://clickup.com/terms
last_verified: '2026-06-20'
last_updated: '2026-06-19'
needs_review: true
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://help.clickup.com
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
  - id: dashboards
    name: ClickUp Dashboards
    category: Reporting
    description: Custom dashboards
    sla_eligible: true
    source_url: https://clickup.com/terms
  - id: docs
    name: ClickUp Docs
    category: Documentation
    description: Document collaboration
    sla_eligible: true
    source_url: https://clickup.com/terms
  - id: goals
    name: ClickUp Goals
    category: OKRs
    description: Goal tracking
    sla_eligible: true
    source_url: https://clickup.com/terms
  - id: tasks
    name: ClickUp Tasks
    category: Task Management
    description: Task management
    sla_eligible: true
    source_url: https://clickup.com/terms
  - id: whiteboards
    name: ClickUp Whiteboards
    category: Collaboration
    description: Visual collaboration
    sla_eligible: true
    source_url: https://clickup.com/terms
support:
  tiers:
    - "Free"
    - "Unlimited"
    - "Business"
    - "Enterprise"
    - "Premium (add-on)"
  has_24x7: true
  fastest_response: "8 hours"
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://clickup.com/support-services"
  note: "Published first-response targets, not contractual SLAs."
---

ClickUp is a Productivity & Collaboration provider. See the official SLA at [https://clickup.com/terms](https://clickup.com/terms).

<!-- Add human-readable notes about ClickUp's SLA nuances here. -->
