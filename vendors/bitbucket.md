---
title: Bitbucket
slug: bitbucket
vendor_name: Bitbucket
legal_entity: Bitbucket
category: Developer Tools
website: https://www.bitbucket.com
scope: global
sla_url: https://www.atlassian.com/legal/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 50
claim_deadline_days: 15
has_automatic_credits: false
min_plan_for_sla: premium
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99.0
      credit_percent: 25
    - uptime_below: 95.0
      credit_percent: 50
claim_process:
  deadlines:
    - type: submission
      days: 15
      business_days: false
      anchor_point: month_end
      description: Submit within 15 days after the end of the calendar month in which the failure occurred
  submission_method: Atlassian Support ticket
  submission_url: https://support.atlassian.com/
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
    sla_eligible: false
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
  - id: api
    name: Bitbucket API
    category: API
    description: REST and GraphQL APIs
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.atlassian.com/legal/sla
  - id: cloud
    name: Bitbucket Cloud
    category: DevOps
    description: Git repository hosting
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.atlassian.com/legal/sla
  - id: pipelines
    name: Bitbucket Pipelines
    category: CI/CD
    description: CI/CD pipelines
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.atlassian.com/legal/sla
---

Bitbucket is a DevOps & Development provider. See the official SLA at [https://www.atlassian.com/legal/sla](https://www.atlassian.com/legal/sla).

<!-- Add human-readable notes about Bitbucket's SLA nuances here. -->
