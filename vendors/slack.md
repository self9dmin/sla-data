---
title: Slack
slug: slack
vendor_name: Slack
legal_entity: Slack
category: Communication & Collaboration
website: https://www.slack.com
scope: global
sla_url: https://slack.com/terms/service-level-agreement
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  On 2026-06-19 the official Slack SLA at
  https://slack.com/terms/service-level-agreement (Effective: July 11, 2024) was
  found to contain only a Salesforce-style availability clause ("Salesforce uses
  commercially reasonable efforts to make the online Slack Services available 24
  hours a day, 7 days a week...") with NO numeric uptime commitment, NO service
  credit tiers/percentages, NO maximum credit cap, NO claim process, and NO
  plan-tier eligibility. The existing 99.99% uptime, 30% max credit,
  99.99/99.9/99 credit tiers, automatic credits, and standard min plan are from
  a superseded pre-Salesforce SLA and could NOT be verified on slack.com; they
  were left unchanged pending manual review. Only the dead sla_url and dead
  services[].source_url values were corrected to the confirmed-live canonical
  URL.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: automatic
  remedy_type: automatic
claim_process:
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
    name: Slack Canvas
    category: Collaboration
    description: Collaborative documents
    sla_eligible: true
    source_url: https://slack.com/terms/service-level-agreement
  - id: connect
    name: Slack Connect
    category: Collaboration
    description: External collaboration channels
    sla_eligible: true
    source_url: https://slack.com/terms/service-level-agreement
  - id: huddles
    name: Slack Huddles
    category: Video
    description: Audio and video calls
    sla_eligible: true
    source_url: https://slack.com/terms/service-level-agreement
  - id: messaging
    name: Slack Messaging
    category: Communications
    description: Real-time messaging platform
    sla_eligible: true
    source_url: https://slack.com/terms/service-level-agreement
  - id: workflow
    name: Workflow Builder
    category: Automation
    description: No-code automation builder
    sla_eligible: true
    source_url: https://slack.com/terms/service-level-agreement
---

Slack is a Communication & Collaboration provider. See the official SLA at [https://slack.com/terms/service-level-agreement](https://slack.com/terms/service-level-agreement).

<!-- Add human-readable notes about Slack's SLA nuances here. -->
