---
title: ADP
slug: adp
vendor_name: ADP
legal_entity: ADP
category: HR & People Operations
website: https://www.adp.com
scope: global
sla_url: https://www.adp.com/legal.aspx
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  ADP publishes no public uptime SLA with service credits on adp.com; the
  /legal.aspx Terms and Conditions provide services "as is without warranty of
  any kind" and SLA terms are set in individually negotiated Master Services
  Agreements. The uptime_commitment (99.9), credit tiers, max_credit_percent
  (15), claim_deadline_days (60) and related values are unverified against the
  vendor's own domain and left unchanged pending a verifiable source. 2026-06-20
  cleanup: removed unverified numeric SLA values per the above note; no public
  credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  deadlines:
    - type: submission
      days: 60
      business_days: false
      anchor_point: incident_date
      description: Submit within 60 days of incident
  submission_method: Account Manager
  submission_url: https://www.adp.com/contact-us.aspx
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
  - id: benefits
    name: ADP Benefits Administration
    category: HR
    description: Benefits management
    sla_eligible: true
    source_url: https://www.adp.com/legal.aspx
  - id: payroll
    name: ADP Payroll
    category: Payroll
    description: Payroll processing
    sla_eligible: true
    source_url: https://www.adp.com/legal.aspx
  - id: talent
    name: ADP Talent Management
    category: HR
    description: Recruiting and performance
    sla_eligible: true
    source_url: https://www.adp.com/legal.aspx
  - id: time
    name: ADP Time & Attendance
    category: Time Tracking
    description: Time tracking
    sla_eligible: true
    source_url: https://www.adp.com/legal.aspx
  - id: workforce-now
    name: ADP Workforce Now
    category: HR
    description: HCM platform
    sla_eligible: true
    source_url: https://www.adp.com/legal.aspx
support:
  tiers:
    - "Standard"
  has_24x7: true
  response_is_sla: false
  designated_contact: team
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.adp.com/contact-us/customer-service.aspx"
  note: "24/7 phone support is included; professional services and client success are available, but no published support tiers."
---

ADP is a HR & People Operations provider. ADP does not publish a public uptime SLA with service credits; its [Terms and Conditions](https://www.adp.com/legal.aspx) provide services "as is" and service-level terms are governed by individually negotiated Master Services Agreements.

<!-- Add human-readable notes about ADP's SLA nuances here. -->
