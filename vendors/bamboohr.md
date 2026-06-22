---
title: BambooHR
slug: bamboohr
vendor_name: BambooHR
legal_entity: BambooHR
category: HR & People Operations
website: https://www.bamboohr.com
scope: global
sla_url: https://www.bamboohr.com/legal/terms-of-service
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Official Terms of Service (https://www.bamboohr.com/legal/terms-of-service,
  Section 4.3) commits only to use "commercially reasonable efforts to make the
  Service available 24 hours a day, 7 days a week", there is NO published
  numeric uptime percentage. The stored uptime_commitment of 99.9 is not
  verifiable on bamboohr.com and was left unchanged pending review (do not
  guess). No public service-credit SLA exists: Section 5.1 states "There will be
  no refunds or credits for partial months of service," and the sole remedy for
  BambooHR's failure to provide the Service (after a 30-day cure period) is
  termination plus a refund of prepaid, unused fees. Hence max_credit_percent=0,
  has_automatic_credits=false, and remedy_type=termination_only are confirmed
  accurate. Verified 2026-06-19 via curl (WebFetch blocked by bot protection).
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
max_credit_percent: 0
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
  max_credit_percent: 0
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://www.bamboohr.com/contact/
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
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
  - id: core
    name: BambooHR Core
    category: HRIS
    description: Core HR management
    sla_eligible: true
    source_url: https://www.bamboohr.com/legal/terms-of-service
  - id: hiring
    name: BambooHR Hiring
    category: ATS
    description: Applicant tracking
    sla_eligible: true
    source_url: https://www.bamboohr.com/legal/terms-of-service
  - id: payroll
    name: BambooHR Payroll
    category: Payroll
    description: Payroll processing
    sla_eligible: true
    source_url: https://www.bamboohr.com/legal/terms-of-service
  - id: performance
    name: BambooHR Performance
    category: Performance Management
    description: Performance reviews
    sla_eligible: true
    source_url: https://www.bamboohr.com/legal/terms-of-service
  - id: time-tracking
    name: Time Tracking
    category: Time & Attendance
    description: Time tracking and PTO
    sla_eligible: true
    source_url: https://www.bamboohr.com/legal/terms-of-service
support:
  tiers:
    - "Standard Support"
    - "Premium Services"
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.bamboohr.com/why-bamboohr/services"
  note: "Business-hours live support plus 24/7 AI chat; Premium Services adds training and guidance."
---

BambooHR is a HR & People Operations provider. See the official SLA at [https://www.bamboohr.com/legal/terms-of-service](https://www.bamboohr.com/legal/terms-of-service).

<!-- Add human-readable notes about BambooHR's SLA nuances here. -->
