---
title: CircleCI
slug: circleci
vendor_name: CircleCI
legal_entity: CircleCI
category: Developer Tools
website: https://www.circleci.com
scope: global
sla_url: https://circleci.com/legal/terms-of-service/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: Support Ticket
  submission_url: https://support.circleci.com
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
  - id: cloud
    name: CircleCI Cloud
    category: CI/CD
    description: Hosted CI/CD platform
    sla_eligible: true
    source_url: https://circleci.com/legal/terms-of-service/
  - id: insights
    name: CircleCI Insights
    category: Analytics
    description: Pipeline analytics and metrics
    sla_eligible: true
    source_url: https://circleci.com/legal/terms-of-service/
  - id: runners
    name: CircleCI Self-Hosted Runners
    category: CI/CD
    description: Self-hosted build agents
    sla_eligible: true
    source_url: https://circleci.com/legal/terms-of-service/
support:
  tiers:
    - "Community"
    - "Starter"
    - "Elite"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://circleci.com/support/plans/"
  note: "Elite tier targets are not contractual SLAs."
---

CircleCI is a DevOps & Development provider. CircleCI publishes no public uptime SLA with service credits; the SaaS Agreement commits only to "commercially reasonable efforts" to keep the Services available, with termination as the sole remedy. See the official SaaS Agreement at [https://circleci.com/legal/terms-of-service/](https://circleci.com/legal/terms-of-service/).

<!-- Add human-readable notes about CircleCI's SLA nuances here. -->
