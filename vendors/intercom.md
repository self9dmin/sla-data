---
title: Intercom
slug: intercom
vendor_name: Intercom
legal_entity: Intercom
category: Communication & Collaboration
website: https://www.intercom.com
scope: global
sla_url: https://www.intercom.com/legal/service-level-agreement
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Verified against official SLA (2025-07-11); remedy is termination-and-refund
  after two consecutive months below 99.8%, not service credits.
uptime_commitment: 99.8
max_credit_percent: 0
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_refund
  max_credit_percent: 0
  credit_tiers: []
claim_process:
  deadlines:
    - type: termination_notice
      days: 30
      business_days: false
      anchor_point: end_of_second_consecutive_failed_month
      description: >-
        Customer may terminate the impacted Service by sending written notice of
        termination within thirty (30) days after the end of the second
        consecutive month in which the Target Availability was not met.
  submission_method: Written notice of termination
  submission_url: https://www.intercom.com/legal/service-level-agreement
  required_evidence:
    - Two consecutive months below Target Availability
  review_timeline: Not specified
  credit_application: Pro-rated refund of prepaid fees for the terminated Service
global_exclusions:
  - Use of the services in a manner not authorized in the Agreement
  - General Internet problems, force majeure events, or other factors outside Intercom's reasonable control
  - Customer's equipment, software, network connections, or other infrastructure
  - Third party systems, acts, or omissions
  - Scheduled Maintenance or reasonable emergency maintenance
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
  - id: ai-agent
    name: AI Agent (Fin)
    category: Automation
    description: >-
      Uptime is achieved when Intercom's AI Agent, Fin, can generate text
      responses to customer inquiries.
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.intercom.com/legal/service-level-agreement
  - id: core-platform
    name: Core Platform
    category: Chat
    description: >-
      Uptime is achieved when users can successfully engage in key actions such
      as replying within the Inbox or Messenger platforms.
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.intercom.com/legal/service-level-agreement
---

Intercom is a Communication & Collaboration provider. See the official SLA at [https://www.intercom.com/legal/service-level-agreement](https://www.intercom.com/legal/service-level-agreement).

Note: Intercom's SLA (Effective Date 2025-07-11) targets 99.8% monthly uptime and provides a termination-and-refund remedy rather than service credits. The remedy applies only after two consecutive months below target; Customer must give written termination notice within 30 days after the end of the second such month. This is the Customer's sole and exclusive remedy.

<!-- Add human-readable notes about Intercom's SLA nuances here. -->
