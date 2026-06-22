---
title: LastPass
slug: lastpass
vendor_name: LastPass
legal_entity: LastPass
category: Security & Identity
website: https://www.lastpass.com
scope: global
sla_url: https://www.lastpass.com/legal-center/terms-of-service/business
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Official LastPass Business Terms of Service (Last Updated January 2024)
  publishes NO uptime commitment, NO availability percentage, and NO service
  credits. The warranty section explicitly disclaims uptime: "WE DO NOT
  REPRESENT OR WARRANT THAT: (i) THE USE OF OUR SERVICES WILL BE TIMELY,
  UNINTERRUPTED, SECURE, OR ERROR-FREE." The exclusive remedy is conforming
  services or a pro-rated refund, not service credits. The numeric fields in
  this file (uptime_commitment, max_credit_percent, credit_tiers,
  claim_deadline_days, claim_process) are NOT verifiable on lastpass.com and
  may be inaccurate/fabricated; left unchanged pending review. The prior
  sla_url (https://www.lastpass.com/legal) returns HTTP 404; updated to the
  confirmed-live Business Terms of Service. No public SLA document exists.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note;
  no public credit-bearing SLA confirmed.
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
  submission_url: https://www.lastpass.com/legal-center/terms-of-service/business
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
  - id: admin
    name: Admin Console
    category: Management
    description: Central administration
    sla_eligible: true
    source_url: https://www.lastpass.com/legal-center/terms-of-service/business
  - id: mfa
    name: LastPass MFA
    category: Authentication
    description: Multi-factor authentication
    sla_eligible: true
    source_url: https://www.lastpass.com/legal-center/terms-of-service/business
  - id: sso
    name: LastPass SSO
    category: Authentication
    description: Single sign-on
    sla_eligible: true
    source_url: https://www.lastpass.com/legal-center/terms-of-service/business
  - id: vault
    name: LastPass Vault
    category: Password Management
    description: Password vault storage
    sla_eligible: true
    source_url: https://www.lastpass.com/legal-center/terms-of-service/business
support:
  tiers:
    - "Basic"
    - "Personal"
    - "Business"
  has_24x7: false
  response_is_sla: false
  designated_contact: none
  architecture_review: false
  professional_services: false
  success_program: false
  training: true
  pricing: included
  source_url: "https://support.lastpass.com/help/what-levels-of-customer-support-does-lastpass-offer"
  note: "Tiers tied to product plan; Business adds phone/chat; no published response SLAs."
---

LastPass is a Security & Identity provider. LastPass does not publish a public uptime SLA with service credits; see the [LastPass Business Terms of Service](https://www.lastpass.com/legal-center/terms-of-service/business) (Last Updated January 2024), which disclaims any uptime/availability warranty.

<!-- Add human-readable notes about LastPass's SLA nuances here. -->
<!-- NEEDS REVIEW: No official SLA, uptime commitment, or service credits exist on lastpass.com. The numeric SLA fields in the front matter are unverifiable against the vendor's own pages and are retained unchanged pending review. -->
