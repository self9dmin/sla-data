---
title: JumpCloud
slug: jumpcloud
vendor_name: JumpCloud
legal_entity: JumpCloud
category: Security & Identity
website: https://www.jumpcloud.com
scope: global
sla_url: https://jumpcloud.com/policies
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 50
claim_deadline_days: 10
has_automatic_credits: false
min_plan_for_sla: premium
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 95
      credit_percent: 50
claim_process:
  deadlines:
    - type: submission
      days: 10
      business_days: false
      anchor_point: calendar_month_end
      description: Written Credit Request within 10 days from the end of the applicable Calendar Month
  submission_method: Written request (Credit Request)
  submission_url: https://support.jumpcloud.com
  required_evidence:
    - Credit Requests are subject to verification against JumpCloud's system records
  review_timeline: Not specified; subject to verification against JumpCloud's system records
  credit_application: Credit or refund at Customer's option
global_exclusions:
  - Customer configuration errors
  - Customer preventing required maintenance
  - Customer unsupported equipment or software
  - Circumstances beyond JumpCloud's reasonable control (floods, war, acts of god)
  - Use of beta or trial versions of the Service
  - Scheduled Maintenance communicated in advance
  - Use of other than the latest version of the JumpCloud Agent
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: false
    claim_assistance: false
    availability: 9 AM to 5 PM local time, business days
    channels:
      - Email
    response_times:
      severity_1: 4 hours
      severity_2_3: 8 hours
  - name: Premium
    slug: premium
    price_model: Custom
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
    response_times:
      severity_1: 1 hour
      severity_2: 2 hours
      severity_3: 4 hours
      severity_4: 1 business day
services:
  - id: radius
    name: Cloud RADIUS
    category: Network Auth
    description: Cloud RADIUS service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://jumpcloud.com/policies
  - id: device-mgmt
    name: Device Management
    category: MDM
    description: Device management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://jumpcloud.com/policies
  - id: directory
    name: JumpCloud Directory
    category: Directory
    description: Cloud directory service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://jumpcloud.com/policies
  - id: mfa
    name: JumpCloud MFA
    category: MFA
    description: Multi-factor authentication
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://jumpcloud.com/policies
  - id: sso
    name: JumpCloud SSO
    category: SSO
    description: Single sign-on
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://jumpcloud.com/policies
support:
  tiers:
    - "Standard"
    - "Premium"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: none
  architecture_review: false
  professional_services: true
  success_program: false
  training: true
  pricing: flat
  source_url: "https://jumpcloud.com/premium-support"
  note: "Premium add-on lists a 1-hour Sev1 target with 24/7/365 coverage; treated as a target."
---

JumpCloud is a Security & Identity provider. The uptime/service-credit SLA is published in the Premium Support Description, linked from JumpCloud's support policies page at [https://jumpcloud.com/policies](https://jumpcloud.com/policies) and incorporated into the DAASA customer agreement ([https://jumpcloud.com/legal/daasa](https://jumpcloud.com/legal/daasa)).

<!-- SLA notes:
- The 99.9% uptime commitment with downtime credits appears only in the Premium Support Description (Last Updated: December 5, 2023), not the Standard Support Description. The uptime SLA therefore requires the Premium support tier.
- Credit tiers (Premium Support Description §3.e): "<99.9% 10%", "<99% 25%", "<95% 50%".
- Credits are not automatic: issued "upon Customer's written request ... made within ten (10) days from the end of the applicable Calendar Month" (a "Credit Request"), at Customer's option as a credit or refund.
- Downtime credits are JumpCloud's sole and exclusive remedy for failing to meet the Uptime.
- There is no standalone /legal/sla page (404); the prior URL is dead.
-->

