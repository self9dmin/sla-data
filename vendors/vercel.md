---
title: Vercel
slug: vercel
vendor_name: Vercel
legal_entity: Vercel
category: Cloud Infrastructure
website: https://www.vercel.com
scope: global
sla_url: https://vercel.com/legal/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.99
max_credit_percent: 50
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 95
      credit_percent: 50
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: credit_eligibility_date
      description: Notify Vercel in writing within 30 days from the time you become eligible to receive a Credit
  submission_method: Written notice to Vercel
  submission_url: null
  required_evidence:
    - Log files showing Unscheduled Downtime and the date and time it occurred
  review_timeline: Applied within 60 days after the Credit was requested
  credit_application: Monetary credit applied to future use of the Services
global_exclusions:
  - Scheduled maintenance
  - Failure of any third-party vendor
  - The Internet in general
  - Factors outside Vercel's reasonable control
  - Your software or hardware, or third party software or hardware
  - Force majeure events
  - Components that do not serve customer content (e.g. APIs or CLI)
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
  - id: platform
    name: Vercel Platform
    category: Hosting
    description: The platform as a service that serves customer content to websites and/or applications. Per the SLA, components that do not serve customer content (e.g. APIs or CLI) are excluded.
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://vercel.com/legal/sla
support:
  tiers:
    - "Community"
    - "Standard"
    - "Premium"
    - "Enterprise"
  has_24x7: true
  fastest_response: "2 hours"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: false
  pricing: custom
  source_url: "https://vercel.com/legal/support-terms"
  note: "Enterprise tiers (Standard/Premium) publish severity-based response targets; pro services available."
---

Vercel is a Cloud Infrastructure provider. See the official SLA at [https://vercel.com/legal/sla](https://vercel.com/legal/sla).

<!-- Add human-readable notes about Vercel's SLA nuances here. -->
