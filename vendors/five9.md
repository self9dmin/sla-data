---
title: Five9
slug: five9
vendor_name: Five9
legal_entity: Five9
category: Communication & Collaboration
website: https://www.five9.com
scope: global
sla_url: https://www.five9.com/legal/sla-service-level
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.999
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 5
    - uptime_below: 99
      credit_percent: 15
    - uptime_below: 97
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Written request to Five9 (e.g., via email)
  submission_url: https://www.five9.com/legal/sla-service-level
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 15 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Unavailability caused by Customer's or end-customer's network, equipment, or internet connection
  - Scheduled Maintenance
  - Service interruptions caused by service providers of voice connectivity, natural language, or speech synthesis
  - Force majeure events
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
    name: Five9 Analytics
    category: Analytics
    description: Reporting and dashboards
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.five9.com/legal/sla-service-level
  - id: digital
    name: Five9 Digital Engagement
    category: Digital
    description: Chat, email, SMS, social
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.five9.com/legal/sla-service-level
  - id: iva
    name: Five9 IVA
    category: AI
    description: Intelligent virtual agent
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.five9.com/legal/sla-service-level
  - id: voice
    name: Five9 Voice
    category: Voice
    description: Inbound/outbound voice
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.five9.com/legal/sla-service-level
  - id: wfm
    name: Five9 WFM
    category: Workforce
    description: Workforce optimization
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.five9.com/legal/sla-service-level
support:
  tiers:
    - "Standard"
    - "Premium"
  has_24x7: true
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.five9.com/supportservices"
  note: "Premium adds a TAM and faster targets; specific response times not publicly documented."
---

Five9 is a Communication & Collaboration provider. See the official SLA at [https://www.five9.com/legal/sla-service-level](https://www.five9.com/legal/sla-service-level).

<!-- Add human-readable notes about Five9's SLA nuances here. -->
