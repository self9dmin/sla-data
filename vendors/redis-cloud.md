---
title: Redis Cloud
slug: redis-cloud
vendor_name: Redis Cloud
legal_entity: Redis Cloud
category: Databases & Data Infrastructure
website: https://redis.io
scope: global
sla_url: https://redis.io/legal/redis-cloud-service-level-agreement/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 25
claim_deadline_days: 1
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99.999
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
claim_process:
  deadlines:
    - type: notification
      days: 1
      business_days: false
      anchor_point: awareness_of_downtime
      description: >-
        Log a support ticket within 24 hours of first becoming aware of the
        Downtime event
    - type: submission
      anchor_point: end_of_second_billing_cycle
      description: >-
        Submit a written SLA Credit Request by the end of the second billing
        cycle after the incident
  submission_method: Support ticket / written request
  submission_url: https://redis.io/legal/redis-cloud-service-level-agreement/
  required_evidence:
    - '"SLA Credit Request" in the subject line'
    - Dates and times of each Downtime incident
    - Affected Database name(s), cloud name(s), Workspace location(s), and region(s)
    - Logs documenting the errors (with confidential information redacted)
    - Description of Customer's attempts to resolve the Downtime
  review_timeline: Within one billing cycle following receipt of the request
  credit_application: Service Credit issued toward future Cloud Services
global_exclusions:
  - Suspension/termination or Preview/Evaluation Services
  - Customer or third-party actions, misconfigurations, or unauthorized access
  - Force Majeure events, network failures, or third-party service failures
  - Customer exceeding Provisioned Workload after notification
  - Maintenance or use of outdated versions
  - Exceeding quotas or suspected abusive behavior
  - Single-instance deployments without replication enabled
  - Unsupported platforms, configurations, or third-party modifications
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
  - id: database
    name: Redis Cloud Database
    category: Database
    description: Managed Redis database
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://redis.io/legal/redis-cloud-service-level-agreement/
  - id: graph
    name: Redis Graph
    category: Database
    description: Graph database
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://redis.io/legal/redis-cloud-service-level-agreement/
  - id: json
    name: Redis JSON
    category: Database
    description: Native JSON support
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://redis.io/legal/redis-cloud-service-level-agreement/
  - id: search
    name: Redis Search
    category: Search
    description: Full-text search on Redis
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://redis.io/legal/redis-cloud-service-level-agreement/
  - id: timeseries
    name: Redis Time Series
    category: Database
    description: Time series data
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://redis.io/legal/redis-cloud-service-level-agreement/
sla_tiers:
  - name: 'Multi-AZ'
    requirement: 'Multi-AZ deployment with replication'
    uptime_commitment: 99.99
    source_url: 'https://redis.io/legal/redis-cloud-service-level-agreement/'
  - name: 'Active-Active'
    requirement: 'Active-Active geo-replicated deployment'
    uptime_commitment: 99.999
    source_url: 'https://redis.io/legal/redis-cloud-service-level-agreement/'
---

Redis Cloud is a Database & Data Infrastructure provider. See the official SLA at [https://redis.io/legal/redis-cloud-service-level-agreement/](https://redis.io/legal/redis-cloud-service-level-agreement/).

<!-- Add human-readable notes about Redis Cloud's SLA nuances here. -->
