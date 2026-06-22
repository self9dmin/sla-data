---
title: Zscaler
slug: zscaler
vendor_name: Zscaler
legal_entity: Zscaler
category: Security & Identity
website: https://www.zscaler.com
scope: global
sla_url: https://www.zscaler.com/legal/sla-support
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.999
max_credit_percent: 30
credit_unit: days
credit_note: "Credits are calendar days of paid SaaS (ZIA tiers: 3 / 7 / 15 / 30 days), capped at 30 days; not a percentage of fees."
claim_deadline_days: 10
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: false
review_note: "Verified against the Zscaler SLA (zscaler.com/legal/sla-support); credits are calendar days of paid SaaS, represented via credit_unit: days."
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 30
  credit_tiers:
    - uptime_below: 99.999
      credit_percent: 10
    - uptime_below: 99.99
      credit_percent: 25
claim_process:
  deadlines:
    - type: report
      days: 1
      business_days: false
      anchor_point: incident_start
      description: >-
        Report the incident via a support ticket within 24 hours from the start
        of the incident (failure forfeits the credit)
    - type: submission
      days: 10
      business_days: false
      anchor_point: incident_date
      description: >-
        Request a Service Credit via a support ticket within 10 days from the
        date of the incident (failure forfeits the credit)
  submission_method: Support ticket
  submission_url: https://help.zscaler.com
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: >-
    Zscaler responds no later than 10 days after the end of the month in which
    the incident occurred
  credit_application: Applied against future Fees for the applicable SaaS
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
  - id: deception
    name: Zscaler Deception
    category: Deception
    description: Deception-based threat detection
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.zscaler.com/legal/sla-support
  - id: zdx
    name: Zscaler Digital Experience (ZDX)
    category: DEM
    description: Digital experience monitoring
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.zscaler.com/legal/sla-support
  - id: zia
    name: Zscaler Internet Access (ZIA)
    category: Secure Web Gateway
    description: Cloud-native secure web gateway
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.zscaler.com/legal/sla-support
  - id: zpa
    name: Zscaler Private Access (ZPA)
    category: ZTNA
    description: Zero trust network access
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.zscaler.com/legal/sla-support
support:
  tiers:
    - "Standard"
    - "Essentials"
    - "Support Plus"
    - "Premium Advanced"
    - "Premium Advanced Plus"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: false
  success_program: true
  training: true
  pricing: custom
  source_url: "https://help.zscaler.com/support-offerings"
  note: "Premium tiers add biannual architecture reviews and a focal support pod; response times are SLOs, not credit-backed SLAs."
---

Zscaler is a Security & Identity provider. See the official SLA at [https://www.zscaler.com/legal/sla-support](https://www.zscaler.com/legal/sla-support).

<!-- Add human-readable notes about Zscaler's SLA nuances here. -->
