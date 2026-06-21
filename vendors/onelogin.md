---
title: OneLogin
slug: onelogin
vendor_name: OneLogin
legal_entity: OneLogin
category: Security & Identity
website: https://www.onelogin.com
scope: global
sla_url: https://resources.onelogin.com/professional-services/onelogin-ssa-us.pdf
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: per_incident
  remedy_type: credit
  max_credit_percent: 100
  credit_note: >-
    For every 15 minutes of downtime, Subscriber receives a credit equal to 5%
    of the annual fee for the affected OneLogin Services, divided by 12. Total
    credit in any calendar month cannot exceed 100% of the fees for the affected
    services attributable to that month.
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Request credit in writing within 30 days of the downtime
  submission_method: Email request with documented proof
  submission_url: https://resources.onelogin.com/professional-services/onelogin-ssa-us.pdf
  required_evidence:
    - Traceroute reports documenting the downtime
  review_timeline: Not specified
  credit_application: Credit against fees for affected services
global_exclusions:
  - Force Majeure events
  - Planned downtime with at least 48 hours prior notice
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
  - id: directory
    name: OneLogin Directory
    category: Directory
    description: Cloud directory
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://resources.onelogin.com/professional-services/onelogin-ssa-us.pdf
  - id: mfa
    name: OneLogin MFA
    category: MFA
    description: Multi-factor authentication
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://resources.onelogin.com/professional-services/onelogin-ssa-us.pdf
  - id: sso
    name: OneLogin SSO
    category: SSO
    description: Single sign-on
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://resources.onelogin.com/professional-services/onelogin-ssa-us.pdf
  - id: smartfactor
    name: SmartFactor Authentication
    category: Risk-Based Auth
    description: Risk-based authentication
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://resources.onelogin.com/professional-services/onelogin-ssa-us.pdf
---

OneLogin is a Security & Identity provider. The SLA is part of the OneLogin Service Subscription Agreement (Section 5.1): see the official agreement at [https://resources.onelogin.com/professional-services/onelogin-ssa-us.pdf](https://resources.onelogin.com/professional-services/onelogin-ssa-us.pdf).

<!--
SLA nuances (verified 2026-06-19 against the OneLogin Service Subscription Agreement (US), v08FEB22):
- 99.9% availability guarantee for the OneLogin Services, measured against OneLogin's published statistics.
- Remedy is NOT a tiered percentage of monthly fee. Instead: "for every 15 minutes of downtime, Subscriber will receive a credit equal to 5% of Subscriber's annual fee for the affected OneLogin Services, divided by 12." Total monthly credit capped at 100% of the affected fees attributable to that month — hence max_credit_percent: 100.
- Credits are not automatic: must be requested in writing via email with documented proof (traceroute reports) within 30 days of the downtime.
- Exclusions: Force Majeure and planned downtime with at least 48 hours prior notice.
- No published per-plan SLA eligibility distinction; SLA applies to the OneLogin Services generally.
- OneLogin is now part of One Identity; www.onelogin.com/legal/sla and /terms no longer host the SLA (the former 404s, the latter redirects to oneidentity.com). The SSA PDF on resources.onelogin.com is the canonical on-domain source.
-->

