---
title: Slack
slug: slack
vendor_name: Slack
legal_entity: Slack
category: Communication & Collaboration
website: https://www.slack.com
scope: global
sla_url: https://slack.com/terms/service-level-agreement
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: automatic
  remedy_type: automatic
claim_process:
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
  - id: canvas
    name: Slack Canvas
    category: Collaboration
    description: Collaborative documents
    sla_eligible: true
    source_url: https://slack.com/terms/service-level-agreement
  - id: connect
    name: Slack Connect
    category: Collaboration
    description: External collaboration channels
    sla_eligible: true
    source_url: https://slack.com/terms/service-level-agreement
  - id: huddles
    name: Slack Huddles
    category: Video
    description: Audio and video calls
    sla_eligible: true
    source_url: https://slack.com/terms/service-level-agreement
  - id: messaging
    name: Slack Messaging
    category: Communications
    description: Real-time messaging platform
    sla_eligible: true
    source_url: https://slack.com/terms/service-level-agreement
  - id: workflow
    name: Workflow Builder
    category: Automation
    description: No-code automation builder
    sla_eligible: true
    source_url: https://slack.com/terms/service-level-agreement
support:
  tiers:
    - "Free"
    - "Pro"
    - "Business+"
    - "Enterprise Grid"
  has_24x7: true
  fastest_response: "4 hours"
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: "https://slack.com/help"
  note: "Business+ and Grid get a 4-hour first-response target; Grid adds an account manager."
---

Slack is a Communication & Collaboration provider. See the official SLA at [https://slack.com/terms/service-level-agreement](https://slack.com/terms/service-level-agreement).

<!-- Add human-readable notes about Slack's SLA nuances here. -->
