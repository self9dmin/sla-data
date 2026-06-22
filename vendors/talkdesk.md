---
title: Talkdesk
slug: talkdesk
vendor_name: Talkdesk
legal_entity: Talkdesk
category: Communication & Collaboration
website: https://www.talkdesk.com
scope: global
sla_url: https://www.talkdesk.com/legal/service-level-agreement/essentials-elevate
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 100
max_credit_percent: 10
claim_deadline_days: 7
has_automatic_credits: false
min_plan_for_sla: essentials
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 10
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 5
    - uptime_below: 99.7
      credit_percent: 10
claim_process:
  deadlines:
    - type: submission
      days: 7
      business_days: false
      anchor_point: end_of_month
      description: Customer must request a service credit no later than 7 days after the end of the month during which the Talkdesk Service was not available
  submission_method: Support portal request
  submission_url: https://support.talkdesk.com/hc/en-us/requests/new
  required_evidence:
    - Detailed description of the time and circumstances during which the Talkdesk Service was not available
  review_timeline: Talkdesk shall promptly review the Service Credit Request
  credit_application: Applied to customer's account against fees to be paid
global_exclusions:
  - Customer network issues
  - Third-party service faults
  - Customer acts or omissions
  - General internet outages
  - DDoS attacks
  - Force majeure
  - Scheduled maintenance
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
  - id: ai
    name: Talkdesk AI
    category: AI
    description: Virtual agents and AI assist
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.talkdesk.com/legal/service-level-agreement/essentials-elevate
  - id: digital
    name: Talkdesk Digital Engagement
    category: Digital
    description: Chat, email, SMS
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.talkdesk.com/legal/service-level-agreement/essentials-elevate
  - id: analytics
    name: Talkdesk Explore
    category: Analytics
    description: Reporting and analytics
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.talkdesk.com/legal/service-level-agreement/essentials-elevate
  - id: voice
    name: Talkdesk Voice
    category: Voice
    description: Inbound/outbound voice
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.talkdesk.com/legal/service-level-agreement/essentials-elevate
  - id: wfm
    name: Talkdesk Workforce Management
    category: WFM
    description: Scheduling and forecasting
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.talkdesk.com/legal/service-level-agreement/essentials-elevate
support:
  tiers:
    - "Standard"
    - "Premium Care"
    - "Premium Care Plus"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.talkdesk.com/cx-services/customer-care/"
  note: "Premium Care Plus adds quarterly technical reviews and business continuity."
---

Talkdesk is a Communication & Collaboration provider. See the official SLA at [https://www.talkdesk.com/legal/service-level-agreement/essentials-elevate](https://www.talkdesk.com/legal/service-level-agreement/essentials-elevate).

Talkdesk advertises a "100% of the time" availability commitment but on a "commercially reasonable efforts" basis, with service credits capped at 10% of monthly License Fees. Credits are not automatic and must be requested within 7 days after the end of the affected month. The SLA has two editions: Essentials & Elevate (credit starts below 99.99% availability) and Elite & Industry Clouds (credit starts below 99.999%). This file reflects the Essentials & Elevate tier. The SLA does not publish distinct per-service uptime commitments; the 100% commitment applies to the Talkdesk Service generally.

<!-- Add human-readable notes about Talkdesk's SLA nuances here. -->
