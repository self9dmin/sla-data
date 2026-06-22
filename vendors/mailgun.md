---
title: Mailgun
slug: mailgun
vendor_name: Mailgun
legal_entity: Mailgun
category: Communication & Collaboration
website: https://www.mailgun.com
scope: global
sla_url: https://www.mailgun.com/legal/sla/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.99
max_credit_percent: 50
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: null
credit_policy:
  calculation_type: per_incident
  remedy_type: credit
  max_credit_percent: 50
  credit_formula: 5% of monthly fee for the Service for each 30 minutes of unavailability, after the first 0.01%, capped at 50% of monthly fees
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_downtime
      description: Submit by creating a support ticket in the Control Panel within 30 days following the end of the downtime
  submission_method: Support ticket in Control Panel
  submission_url: null
  required_evidence:
    - Customer must show that its use of the Services was adversely affected
  review_timeline: null
  credit_application: Credit applied to account
global_exclusions:
  - Maintenance
  - Denial of service attacks
  - Virus activity
  - Hacking attempts
  - Any other circumstances not within Mailgun's control
  - Breaches of Terms of Service or Acceptable Use Policy
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
    name: Mailgun API
    category: Email
    description: API service listed on the status page
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.mailgun.com/legal/sla/
  - id: smtp
    name: Mailgun SMTP
    category: Email
    description: SMTP service listed on the status page
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.mailgun.com/legal/sla/
  - id: outbound
    name: Mailgun Outbound Delivery
    category: Email
    description: Outbound Delivery service listed on the status page
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.mailgun.com/legal/sla/
support:
  tiers:
    - "Free"
    - "Basic"
    - "Foundation"
    - "Scale"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: false
  training: false
  pricing: included
  source_url: "https://www.mailgun.com/pricing/"
  note: "Scale adds phone/chat; Enterprise adds a TAM and managed deliverability consulting."
---

Mailgun is a Communication & Collaboration provider. See the official SLA at [https://www.mailgun.com/legal/sla/](https://www.mailgun.com/legal/sla/).

<!-- Add human-readable notes about Mailgun's SLA nuances here. -->
