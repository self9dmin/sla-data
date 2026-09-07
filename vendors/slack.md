---
title: Slack
slug: slack
vendor_name: Slack
legal_entity: Slack
category: Communication & Collaboration
website: https://www.slack.com
scope: global
sla_url: https://slack.com/policy-archives/service-level-agreement/2015-01-07
last_verified: '2026-06-23'
last_updated: '2026-06-23'
has_automatic_credits: true
min_plan_for_sla: business
uptime_commitment: 99.99
max_credit_percent: 100
credit_note: Slack guarantees 99.99% monthly uptime on the Plus/Business+ plan and above — a deliberate "fourth nine." If missed, Service Credits equal 100x the fees paid for the period Slack was down, credited to your account balance and drawn before future charges, capped at a maximum of 30 days of paid service. Scheduled maintenance is capped at 10 hours/year with 48 hours' notice. Source is Slack's published SLA (archived 2015-01-07 version); current Business+ / Enterprise Grid contract terms should be confirmed against the MSA.
credit_policy:
  calculation_type: multiplier
  remedy_type: credit
  max_credit_percent: 100
claim_process:
  submission_method: Automatic
  credit_application: Credited to account balance, drawn before future charges
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
    - Free
    - Pro
    - Business+
    - Enterprise Grid
  has_24x7: true
  fastest_response: 4 hours (Business+/Enterprise Grid)
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: https://slack.com/help
  note: Business+ and Grid get a 4-hour first-response target; Grid adds an account manager. Priority support (4-hour response, 24/7) is gated to Business+ and Enterprise Grid; no phone. Customer Success teams at Grid. Priority support (4-hour response, 24/7) is gated to Business+ and Enterprise Grid; no phone. Customer Success teams at Grid.
  channels:
    - email
    - portal
---

Slack is a Communication & Collaboration provider. See the official SLA at [https://slack.com/policy-archives/service-level-agreement/2015-01-07](https://slack.com/policy-archives/service-level-agreement/2015-01-07).

<!-- Add human-readable notes about Slack's SLA nuances here. -->
