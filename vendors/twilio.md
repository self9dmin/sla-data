---
title: Twilio
slug: twilio
vendor_name: Twilio
legal_entity: Twilio
category: Communication & Collaboration
website: https://www.twilio.com
scope: global
sla_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.95
max_credit_percent: 10
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: flat
  remedy_type: credit
  max_credit_percent: 10
  credit_tiers:
    - uptime_below: 99.95
      credit_percent: 10
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_calendar_month
      description: Submit within 30 days from the last day of the calendar month in which the failure is claimed (calendar days)
  submission_method: Customer Support request
  submission_url: https://help.twilio.com
  required_evidence:
    - '"SLA Claim" as the support ticket subject'
    - Dates and times of each instance of unavailable monthly API time
    - Documentation of the unavailable API time
  review_timeline: Not specified in SLA
  credit_application: Applied to future amounts payable (not a refund)
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
  - id: conversations
    name: Twilio Conversations
    category: Messaging
    description: Multi-channel messaging
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
  - id: flex
    name: Twilio Flex
    category: Contact Center
    description: Cloud contact center
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
  - id: segment
    name: Twilio Segment
    category: CDP
    description: Customer data platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
  - id: sms
    name: Twilio SMS
    category: Messaging
    description: SMS messaging API
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
  - id: verify
    name: Twilio Verify
    category: Identity
    description: Phone verification
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
  - id: video
    name: Twilio Video
    category: Video
    description: Video calling platform
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
  - id: voice
    name: Twilio Voice
    category: Voice
    description: Programmable voice calls
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
  - id: whatsapp
    name: Twilio WhatsApp
    category: Messaging
    description: WhatsApp Business API
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
sla_tiers:
  - name: 'Enterprise Edition'
    requirement: 'Twilio Enterprise Edition'
    uptime_commitment: 99.99
    max_credit_percent: 10
    source_url: 'https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis'
---

Twilio is a Communication & Collaboration provider. See the official SLA at [https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis](https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis).

<!-- Add human-readable notes about Twilio's SLA nuances here. -->
