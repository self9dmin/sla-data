---
title: LaunchDarkly
slug: launchdarkly
vendor_name: LaunchDarkly
legal_entity: LaunchDarkly
category: Developer Tools
website: https://www.launchdarkly.com
scope: global
sla_url: https://launchdarkly.com/policies/service-level-agreement/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 50
claim_deadline_days: 5
has_automatic_credits: false
min_plan_for_sla: premium
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 10
    - uptime_below: 98
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 5
      business_days: false
      anchor_point: incident_date
      description: Request must be received within 5 days of the date the SLA incident incurred
  submission_method: Email or support request portal
  submission_url: mailto:support@launchdarkly.com
  required_evidence:
    - SLA credit request in subject line
    - Incident description
    - Dates and times of unavailability
    - Status Page reference or monitoring logs and supporting evidence
  review_timeline: Not specified
  credit_application: Applied to next invoice
global_exclusions:
  - Planned or emergency maintenance
  - Factors beyond LaunchDarkly's reasonable control (force majeure)
  - Customer's computing devices or local area networks
  - Acts or omissions of Customer
  - Use outside the scope of the agreement
  - Third-party hardware or software issues
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
  - id: api
    name: LaunchDarkly API
    category: APIs
    description: Management API
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://launchdarkly.com/policies/service-level-agreement/
  - id: data-export
    name: LaunchDarkly Data Export
    category: Analytics
    description: Flag analytics export
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://launchdarkly.com/policies/service-level-agreement/
  - id: experimentation
    name: LaunchDarkly Experimentation
    category: Analytics
    description: A/B testing and experiments
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://launchdarkly.com/policies/service-level-agreement/
  - id: flags
    name: LaunchDarkly Feature Flags
    category: DevOps
    description: Feature flag delivery
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://launchdarkly.com/policies/service-level-agreement/
sla_tiers:
  - name: 'Premium Support'
    requirement: 'Premium Support subscription'
    uptime_commitment: 99.99
    source_url: 'https://launchdarkly.com/policies/service-level-agreement/'
---

LaunchDarkly is a DevOps & Development provider. See the official SLA at [https://launchdarkly.com/policies/service-level-agreement/](https://launchdarkly.com/policies/service-level-agreement/).

<!-- Add human-readable notes about LaunchDarkly's SLA nuances here. -->
