---
title: Help Scout
slug: help-scout
vendor_name: Help Scout
legal_entity: Help Scout
category: Communication & Collaboration
website: https://www.helpscout.com
scope: global
sla_url: https://www.helpscout.com/company/legal/terms-of-service/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Help Scout publishes no public uptime SLA with service credits. The Terms of
  Service (https://www.helpscout.com/company/legal/terms-of-service/) explicitly
  disclaim uptime: "Help Scout does not warrant that the Help Scout Service will
  be uninterrupted, uncorrupted, timely, or error-free." The status page
  (https://status.helpscout.com/) reports historical uptime (~99.99%) but states
  these are not contractual commitments. No max_credit, claim deadline, or
  credit tiers are published on helpscout.com. The 99.9 uptime_commitment and
  per-service uptime values are unverifiable as a contractual SLA and were left
  unchanged pending a verifiable source (e.g. an Enterprise SLA addendum).

  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: no_credit
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://www.helpscout.com/contact/
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
  - id: helpscout-beacon
    name: Help Scout Beacon
    category: Chat
    description: Embeddable chat widget
    sla_eligible: true
    source_url: https://www.helpscout.com/company/legal/terms-of-service/
  - id: helpscout-docs
    name: Help Scout Docs
    category: Knowledge Base
    description: Knowledge base
    sla_eligible: true
    source_url: https://www.helpscout.com/company/legal/terms-of-service/
  - id: helpscout-mailbox
    name: Help Scout Mailbox
    category: Help Desk
    description: Shared mailbox
    sla_eligible: true
    source_url: https://www.helpscout.com/company/legal/terms-of-service/
  - id: helpscout-messages
    name: Help Scout Messages
    category: In-App Messaging
    description: In-app messaging
    sla_eligible: true
    source_url: https://www.helpscout.com/company/legal/terms-of-service/
---

Help Scout is a Other SaaS provider. See the official SLA at [https://www.helpscout.com/company/legal/terms-of-service/](https://www.helpscout.com/company/legal/terms-of-service/).

<!-- Add human-readable notes about Help Scout's SLA nuances here. -->
