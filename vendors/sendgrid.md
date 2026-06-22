---
title: SendGrid
slug: sendgrid
vendor_name: SendGrid
legal_entity: SendGrid
category: Communication & Collaboration
website: https://www.sendgrid.com
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
      description: Submit within 30 days from the last day of the calendar month in which the failure occurred
  submission_method: Support Ticket
  submission_url: https://support.sendgrid.com
  required_evidence:
    - SLA Claim as the support ticket subject
    - Dates and times of Unavailable Monthly API Time per status.sendgrid.com
    - Documentation of the Unavailable Monthly API Time
  review_timeline: Not specified
  credit_application: Applied to future amounts payable by Customer
global_exclusions:
  - Circumstances beyond Twilio's reasonable control (e.g. telecom/internet beyond Twilio's network access point)
  - Customer or third-party acts or omissions (excluding Twilio agents/subcontractors)
  - Customer equipment, software, or third-party technology outside Twilio's control
  - Scheduled maintenance (24+ hours notice) and emergency maintenance
  - Alpha, beta, or limited release APIs
  - Periods of unavailability lasting less than 5 continuous minutes
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
  - id: email-api
    name: SendGrid Email API
    category: Email
    description: Transactional email API
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
  - id: marketing
    name: SendGrid Marketing Campaigns
    category: Email
    description: Email marketing platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
  - id: smtp
    name: SendGrid SMTP Relay
    category: Email
    description: SMTP relay service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis
sla_tiers:
  - name: 'Premium email package'
    requirement: 'Qualifying SendGrid premium email package'
    uptime_commitment: 99.99
    max_credit_percent: 10
    source_url: 'https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis'
---

SendGrid (Twilio SendGrid) is a Communication & Collaboration provider. Its SLA is now governed by the Twilio APIs Service Level Agreement, which covers the "SendGrid Services API" (the Mail Send API). See the official SLA at [https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis](https://www.twilio.com/en-us/legal/service-level-agreement/twilio-apis).

<!-- Add human-readable notes about SendGrid's SLA nuances here. -->
