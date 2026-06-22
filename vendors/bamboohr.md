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
