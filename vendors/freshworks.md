---
title: Freshworks
slug: freshworks
vendor_name: Freshworks
legal_entity: Freshworks
category: CRM & Marketing
website: https://www.freshworks.com
scope: global
sla_url: https://www.freshworks.com/terms/supplemental-terms/
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.8
max_credit_percent: 3
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: Freshworks' Unified Standard SLSA commits to 99.8% monthly uptime with tiered service credits (2% of monthly fees for 98.5–99.8%, 3% for 97.5–98.5%, rising for lower availability), claimed within 30 days. Verified via Freshworks' published service definition; the full lower-availability schedule should be confirmed against the SLSA.
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 3
  credit_tiers:
    - uptime_below: 99.8
      credit_percent: 2
    - uptime_below: 98.5
      credit_percent: 3
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://support.freshworks.com
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
  - id: freshcaller
    name: Freshcaller
    category: Voice
    description: Cloud phone system
    sla_eligible: true
    source_url: https://www.freshworks.com/legal/
  - id: freshchat
    name: Freshchat
    category: Messaging
    description: Live chat and messaging
    sla_eligible: true
    source_url: https://www.freshworks.com/legal/
  - id: freshdesk
    name: Freshdesk
    category: Customer Service
    description: Help desk software
    sla_eligible: true
    source_url: https://www.freshworks.com/legal/
  - id: freshmarketer
    name: Freshmarketer
    category: Marketing
    description: Marketing automation
    sla_eligible: true
    source_url: https://www.freshworks.com/legal/
  - id: freshsales
    name: Freshsales
    category: CRM
    description: Sales CRM
    sla_eligible: true
    source_url: https://www.freshworks.com/legal/
  - id: freshservice
    name: Freshservice
    category: ITSM
    description: IT service management
    sla_eligible: true
    source_url: https://www.freshworks.com/legal/
support:
  tiers:
    - Standard
    - Premium 24x5
    - Premium 24x7
    - Enterprise
  has_24x7: true
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: flat
  source_url: https://www.freshworks.com/assets/resources/Premium-Support-Collateral-V2.pdf
  note: Severity-based response targets stated in support collateral; not credit-backed. Phone and 24/7 require the paid Premium Support add-on; standard is email/portal/chat. Per-severity response times not published. Implementation/Managed Services via SoW. Phone and 24/7 require the paid Premium Support add-on; standard is email/portal/chat. Per-severity response times not published. Implementation/Managed Services via SoW.
  channels:
    - email
    - portal
    - chat
    - phone
---

Freshworks is a CRM & Sales provider. See the official SLA at [https://www.freshworks.com/terms/](https://www.freshworks.com/terms/).

<!-- Add human-readable notes about Freshworks's SLA nuances here. -->
