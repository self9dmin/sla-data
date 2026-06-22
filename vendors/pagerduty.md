---
title: PagerDuty
slug: pagerduty
vendor_name: PagerDuty
legal_entity: PagerDuty
category: Monitoring & Observability
website: https://www.pagerduty.com
scope: global
sla_url: https://www.pagerduty.com/standard-service-level-agreement/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 30
claim_deadline_days: 15
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: flat
  remedy_type: credit
  max_credit_percent: 30
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
claim_process:
  deadlines:
    - type: submission
      days: 15
      business_days: false
      anchor_point: end_of_calendar_month
      description: Submit within 15 days of the end of the calendar month in which the alleged SLA breach occurred
  submission_method: Email
  submission_url: mailto:servicecreditrequest@pagerduty.com
  required_evidence:
    - Reasonable evidence that the customer was affected by the alleged SLA breach
  review_timeline: Not specified
  credit_application: Not specified
global_exclusions:
  - Customer's own telecommunications, Delivery Service or internet service providers, email domain server availability or mobile push notification providers
  - Force Majeure Event
  - Intentional or accidental filtering of network traffic by national governments, carriers or regulatory bodies
  - Issues arising from PagerDuty's suspension or termination of Customer's right to use the Service
  - Services provided at no charge (Free Trial, Free Plan or Pre-Release Technology)
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
  - id: incidents
    name: Incident Response
    category: Operations
    description: Incident management platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.pagerduty.com/standard-service-level-agreement/
  - id: oncall
    name: On-Call Management
    category: Operations
    description: On-call scheduling
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.pagerduty.com/standard-service-level-agreement/
  - id: analytics
    name: Operations Analytics
    category: Analytics
    description: Operational insights
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.pagerduty.com/standard-service-level-agreement/
  - id: automation
    name: Runbook Automation
    category: Automation
    description: Incident automation
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.pagerduty.com/standard-service-level-agreement/
support:
  tiers:
    - "Tech Touch"
    - "Standard Success"
    - "Premium Support"
    - "Silver Services"
    - "Gold Services"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.pagerduty.com/support-policy/"
  note: "CSM at Standard Success; Silver/Gold add QBRs and instructor-led training."
---

PagerDuty is a Monitoring & Observability provider. See the official SLA at [https://www.pagerduty.com/standard-service-level-agreement/](https://www.pagerduty.com/standard-service-level-agreement/).

<!-- Add human-readable notes about PagerDuty's SLA nuances here. -->
