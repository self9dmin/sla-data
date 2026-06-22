---
title: Sprout Social
slug: sprout-social
vendor_name: Sprout Social
legal_entity: Sprout Social
category: CRM & Marketing
website: https://sproutsocial.com
scope: global
sla_url: https://sproutsocial.com/legal/terms/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
uptime_commitment: 99.9
max_credit_percent: 25
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99.5
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://support.sproutsocial.com
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
  - id: sprout-analytics
    name: Analytics
    category: Analytics
    description: Reporting and analytics
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://sproutsocial.com/legal/terms/
  - id: sprout-advocacy
    name: Employee Advocacy
    category: Advocacy
    description: Employee advocacy platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://sproutsocial.com/legal/terms/
  - id: sprout-engagement
    name: Engagement
    category: Engagement
    description: Social inbox and engagement
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://sproutsocial.com/legal/terms/
  - id: sprout-listening
    name: Listening
    category: Monitoring
    description: Social listening and monitoring
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://sproutsocial.com/legal/terms/
  - id: sprout-publishing
    name: Publishing
    category: Social Media
    description: Content scheduling and publishing
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://sproutsocial.com/legal/terms/
---

Sprout Social is a Marketing & Analytics provider. See the official Terms of Service at [https://sproutsocial.com/legal/terms/](https://sproutsocial.com/legal/terms/). Sprout Social does not publish a public, credit-bearing SLA; availability is addressed only as a non-binding internal KPI ("strives to maintain 99.9% uptime").

<!-- Add human-readable notes about Sprout Social's SLA nuances here. -->
