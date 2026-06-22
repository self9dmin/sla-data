---
title: Klaviyo
slug: klaviyo
vendor_name: Klaviyo
legal_entity: Klaviyo
category: CRM & Marketing
website: https://www.klaviyo.com
scope: global
sla_url: https://www.klaviyo.com/legal
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Prior sla_url (klaviyo.com/legal/sla) returns HTTP 404. Klaviyo publishes no
  public uptime SLA or service-credit policy on its own domain. The Terms of
  Service (klaviyo.com/legal/terms-of-service) explicitly disclaims availability:
  S9.4 "KLAVIYO DOES NOT WARRANT THAT THE SERVICES WILL ... (B) OPERATE WITHOUT
  INTERRUPTION OR DOWNTIME", and S3.3 acknowledges possible scheduled/unscheduled
  downtime. The premium-support page publishes support response-time targets only
  (no uptime % or credits). Therefore the uptime_commitment (99.9), max_credit_percent
  (25), credit_tiers, claim_process, and per-service uptimes are NOT verifiable on
  klaviyo.com and were left unchanged pending review. sla_url repointed to the live
  legal index (no canonical SLA page exists). Verified 2026-06-19.

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
  submission_url: https://help.klaviyo.com
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
  - id: cdp
    name: Klaviyo CDP
    category: CDP
    description: Customer data platform
    sla_eligible: true
    source_url: https://www.klaviyo.com/legal/terms-of-service
  - id: email
    name: Klaviyo Email
    category: Email Marketing
    description: Email marketing
    sla_eligible: true
    source_url: https://www.klaviyo.com/legal/terms-of-service
  - id: flows
    name: Klaviyo Flows
    category: Marketing Automation
    description: Automated flows
    sla_eligible: true
    source_url: https://www.klaviyo.com/legal/terms-of-service
  - id: reviews
    name: Klaviyo Reviews
    category: Reviews
    description: Product reviews
    sla_eligible: true
    source_url: https://www.klaviyo.com/legal/terms-of-service
  - id: sms
    name: Klaviyo SMS
    category: SMS Marketing
    description: SMS marketing
    sla_eligible: true
    source_url: https://www.klaviyo.com/legal/terms-of-service
support:
  tiers:
    - "Standard"
    - "Professional"
    - "Enterprise"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: team
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.klaviyo.com/success/premium-support"
  note: "Standard included on paid plans; Professional/Enterprise require minimum spend and a custom quote."
---

Klaviyo is a Marketing & Analytics provider. Klaviyo does not publish a public uptime SLA or service-credit policy; its [Terms of Service](https://www.klaviyo.com/legal/terms-of-service) disclaims any availability guarantee. See Klaviyo's legal documents at [https://www.klaviyo.com/legal](https://www.klaviyo.com/legal).

<!-- Add human-readable notes about Klaviyo's SLA nuances here. -->
