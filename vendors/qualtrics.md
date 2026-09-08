---
title: Qualtrics
slug: qualtrics
vendor_name: Qualtrics
legal_entity: Qualtrics
category: Analytics & BI
website: https://www.qualtrics.com
scope: global
sla_url: https://www.qualtrics.com/legal/customers/service-level-agreement-2026/
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.93
max_credit_percent: 10
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: 'Verified: 99.93% availability. Credits are downtime-duration based — 5% (31-120 min), 7.5% (121-240 min), 10% (241+ min) of 1/12 of annual fees per month; max 10%. Tiers below map those bands to uptime %.'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 10
  credit_tiers:
    - uptime_below: 99.93
      credit_percent: 5
    - uptime_below: 99.72
      credit_percent: 7.5
    - uptime_below: 99.44
      credit_percent: 10
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://www.qualtrics.com/support/
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
  - id: bx
    name: BrandXM
    category: Brand
    description: Brand experience management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.qualtrics.com/legal/customers/service-level-agreement-2026/
  - id: cx
    name: CustomerXM
    category: CX
    description: Customer experience management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.qualtrics.com/legal/customers/service-level-agreement-2026/
  - id: ex
    name: EmployeeXM
    category: EX
    description: Employee experience management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.qualtrics.com/legal/customers/service-level-agreement-2026/
  - id: px
    name: ProductXM
    category: Product
    description: Product experience management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.qualtrics.com/legal/customers/service-level-agreement-2026/
  - id: research
    name: Research Core
    category: Research
    description: Survey and research platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.qualtrics.com/legal/customers/service-level-agreement-2026/
support:
  tiers:
    - Standard
    - Enterprise Support
    - Advanced XM Success
    - ManagedXM
  has_24x7: true
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: https://www.qualtrics.com/support/getting-started-qualtrics/support-portal/program-strategy-enablement/
  note: Success Packages include a Technical Success Manager, XM Scientist office hours, coaching, and audits. Standard email/phone is 24x7 (Enterprise email/phone is Sun 5pm-Fri 5pm MT; chat weekday-only). No published severity response SLA. TSM for Enterprise/Success Package customers; onboarding/training/implementation.
  channels:
    - email
    - phone
    - chat
---

Qualtrics is a Enterprise Software provider. See the official SLA at [https://www.qualtrics.com/legal/customers/service-level-agreement/](https://www.qualtrics.com/legal/customers/service-level-agreement/).

<!-- Add human-readable notes about Qualtrics's SLA nuances here. -->
