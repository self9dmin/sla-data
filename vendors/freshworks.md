---
title: Freshworks
slug: freshworks
vendor_name: Freshworks
legal_entity: Freshworks
category: CRM & Marketing
website: https://www.freshworks.com
scope: global
sla_url: https://www.freshworks.com/terms/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  No public, binding Service Level Agreement found on freshworks.com as of
  2026-06-19. The legal index (https://www.freshworks.com/legal/) lists the
  Terms of Service, Supplemental Terms, DPA, and Professional Services Agreement
  but no uptime/availability commitment, service-credit policy, or SLA document.
  The /terms/sla/ path (previously used as services source_url) returns HTTP 404.
  The freshworks.com/sla/, /helpdesk/sla/, and /itsm/sla/ pages are educational
  marketing content about building SLAs for one's own customers, not Freshworks'
  platform commitment. Uptime (99.9), max_credit_percent (25), credit_tiers,
  and claim_deadline_days could NOT be verified on the vendor domain and are left
  unchanged pending review (possibly only available in contract/Enterprise terms).

  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
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
    - "Standard"
    - "Premium 24x5"
    - "Premium 24x7"
    - "Enterprise"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: flat
  source_url: "https://www.freshworks.com/assets/resources/Premium-Support-Collateral-V2.pdf"
  note: "Severity-based response targets stated in support collateral; not credit-backed."
---

Freshworks is a CRM & Sales provider. See the official SLA at [https://www.freshworks.com/terms/](https://www.freshworks.com/terms/).

<!-- Add human-readable notes about Freshworks's SLA nuances here. -->
