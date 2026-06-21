---
title: Braze
slug: braze
vendor_name: Braze
legal_entity: Braze
category: CRM & Marketing
website: https://www.braze.com
scope: global
sla_url: https://www.braze.com/company/legal/terms
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  2026-06-19: Prior sla_url https://www.braze.com/company/legal/sla returns HTTP
  404. Braze publishes no standalone public SLA: the legal index
  (https://www.braze.com/company/legal) lists no SLA/Service Level/Availability
  document, and /legal/sla is also 404. The Main Subscription Agreement
  (https://www.braze.com/company/legal/terms) Section 2.3 only commits to "use
  commercially reasonable efforts to make the Services available 24 hours a day,
  seven days a week" with no uptime percentage, no credit tiers, and no claim
  process. sla_url repointed to the live MSA. All uptime/credit/deadline numbers
  below are UNVERIFIED against any current public Braze source and left unchanged
  pending a customer-contractual SLA. Numbers could not be confirmed on
  braze.com. 2026-06-20 cleanup: removed unverified numeric SLA values per the
  above note; no public credit-bearing SLA confirmed.
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
  submission_url: https://www.braze.com/docs/support_contact/
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
  - id: canvas
    name: Braze Canvas
    category: Journey Orchestration
    description: Customer journey builder
    sla_eligible: true
    source_url: https://www.braze.com/company/legal/terms
  - id: currents
    name: Braze Currents
    category: Data Export
    description: Real-time data streaming
    sla_eligible: true
    source_url: https://www.braze.com/company/legal/terms
  - id: messaging
    name: Braze Messaging
    category: Messaging
    description: Push, email, SMS, in-app
    sla_eligible: true
    source_url: https://www.braze.com/company/legal/terms
  - id: segmentation
    name: Braze Segmentation
    category: Segmentation
    description: Audience segmentation
    sla_eligible: true
    source_url: https://www.braze.com/company/legal/terms
  - id: content-cards
    name: Content Cards
    category: In-App
    description: Persistent in-app messages
    sla_eligible: true
    source_url: https://www.braze.com/company/legal/terms
---

Braze is a Marketing & Analytics provider. Braze does not publish a standalone public SLA; service-availability terms appear in the [Main Subscription Agreement](https://www.braze.com/company/legal/terms) (Section 2.3), which commits only to "commercially reasonable efforts" to keep the Services available, with no published uptime percentage or service-credit schedule.

<!-- Add human-readable notes about Braze's SLA nuances here. -->
