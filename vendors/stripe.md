---
title: Stripe
slug: stripe
vendor_name: Stripe
legal_entity: Stripe, Inc.
category: Finance & Payments
website: https://stripe.com
scope: global
sla_url: https://stripe.com/legal/ssa
last_verified: '2026-06-23'
last_updated: '2026-06-23'
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: The Stripe Services Agreement disclaims that the Services will be uninterrupted or error-free — no public uptime SLA or service credits. (Previously recorded as credit without support.)
credit_policy:
  calculation_type: none
  remedy_type: no_sla
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support Dashboard
  submission_url: https://support.stripe.com
  required_evidence:
    - Account ID
    - Affected API endpoints
    - Incident timestamps
    - Failed request IDs
    - Business impact description
  review_timeline: 30 business days
  credit_application: Applied to Stripe balance
global_exclusions:
  - Scheduled maintenance with 24h notice
  - Force majeure events
  - Customer integration issues
  - Rate limiting
  - Sandbox/test mode
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: true
    claim_assistance: false
    availability: Business hours
    channels:
      - Email
      - Chat
    response_times:
      general: < 24 hours
  - name: Premium
    slug: premium
    price_model: Custom
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Chat
      - Phone
    response_times:
      critical: < 1 hour
      high: < 4 hours
    features:
      dedicatedSupport: true
services:
  - id: payments
    name: Stripe Payments
    category: Payments
    description: Payment processing API
    sla_eligible: true
    source_url: https://stripe.com/legal/ssa
  - id: connect
    name: Stripe Connect
    category: Payments
    description: Marketplace payments platform
    sla_eligible: true
    source_url: https://stripe.com/legal/ssa
  - id: billing
    name: Stripe Billing
    category: Billing
    description: Subscription management
    sla_eligible: true
    source_url: https://stripe.com/legal/ssa
  - id: dashboard
    name: Stripe Dashboard
    category: Management
    description: Management dashboard
    sla_eligible: true
    source_url: https://stripe.com/legal/ssa
  - id: radar
    name: Stripe Radar
    category: Fraud
    description: Fraud prevention
    sla_eligible: true
    source_url: https://stripe.com/legal/ssa
support:
  tiers:
    - Standard
    - Growth
    - Premium
    - Enterprise
  has_24x7: true
  fastest_response: 15 min (critical-issue escalation)
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: https://stripe.com/support-plans
  note: Paid tiers add a TAM, health alerts, and an enterprise support pod. Response times are targets. 24x7 phone/email/chat for all users (+ Discord); paid tiers (Growth/Premium/Enterprise) add 24x7 critical teams, a 15-min critical SLA, and a direct-to-TAM Slack. Separate professional services with integration engineers.
  channels:
    - phone
    - email
    - chat
    - discord
---

Stripe is a Finance & Payments provider. See the official SLA at [https://stripe.com/legal/ssa](https://stripe.com/legal/ssa).

<!-- Add human-readable notes about Stripe's SLA nuances here. -->
