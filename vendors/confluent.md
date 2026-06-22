---
title: Confluent
slug: confluent
vendor_name: Confluent
legal_entity: Confluent
category: Databases & Data Infrastructure
website: https://www.confluent.io
scope: global
sla_url: https://assets.confluent.io/m/7cc915b8d26e73a7/original/Confluent-Cloud-Unified-SLA-July-2025-Legal.pdf
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: true
uptime_commitment: 99.95
max_credit_percent: 100
claim_deadline_days: 5
has_automatic_credits: false
min_plan_for_sla: basic
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 95
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 5
      business_days: false
      anchor_point: month_end
      description: >-
        Request must be received within 5 calendar days after the last day of
        the month in which the Service Level was not met
  submission_method: Support ticket (community-supported customers email cloud-support@confluent.io)
  submission_url: https://support.confluent.io/hc
  required_evidence:
    - '"SLA Credit Request" in the subject line'
    - Description of applicable client(s), versions, and configurations
    - Description of the events resulting in Downtime, including time and duration
    - Logs documenting the failed write attempts
  review_timeline: Issued within one billing cycle following the month the request is confirmed
  credit_application: Applied against next billing charge; expires 12 months from issuance
global_exclusions:
  - Scheduled maintenance on 5 days' email notice, ad hoc maintenance, and updates
  - Factors outside Confluent's reasonable control (force majeure, network intrusions, DoS, systemic internet issues)
  - Third-party services/hardware/software not within Confluent's primary control, including cloud platform failures
  - Customer misuse, AUP violations, unauthorized actions, or late-payment suspensions
  - Customer's failure to use supported Kafka clients with acceptable configuration values
  - Customer-controlled actions, environment, negligence, or willful misconduct
  - Deployment on any Jio region, except as noted in Service Specific Terms
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
  - id: connect
    name: Confluent Connect
    category: Data Integration
    description: Pre-built connectors
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://assets.confluent.io/m/7cc915b8d26e73a7/original/Confluent-Cloud-Unified-SLA-July-2025-Legal.pdf
  - id: flink
    name: Confluent Flink
    category: Stream Processing
    description: Apache Flink service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://assets.confluent.io/m/7cc915b8d26e73a7/original/Confluent-Cloud-Unified-SLA-July-2025-Legal.pdf
  - id: kafka
    name: Confluent Kafka
    category: Streaming
    description: Managed Apache Kafka
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://assets.confluent.io/m/7cc915b8d26e73a7/original/Confluent-Cloud-Unified-SLA-July-2025-Legal.pdf
  - id: ksqldb
    name: ksqlDB
    category: Stream Processing
    description: SQL for stream processing
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://assets.confluent.io/m/7cc915b8d26e73a7/original/Confluent-Cloud-Unified-SLA-July-2025-Legal.pdf
  - id: schema-registry
    name: Schema Registry
    category: Data Governance
    description: Schema management
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://assets.confluent.io/m/7cc915b8d26e73a7/original/Confluent-Cloud-Unified-SLA-July-2025-Legal.pdf
sla_tiers:
  - name: 'Dedicated Multi-Zone cluster'
    requirement: 'Multi-zone Dedicated cluster (min 2 CKU across 3 AZs)'
    uptime_commitment: 99.99
    max_credit_percent: 100
    source_url: 'https://www.confluent.io/confluent-cloud-uptime-sla/'
support:
  tiers:
    - "Free"
    - "Developer"
    - "Business"
    - "Premier"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://www.confluent.io/confluent-cloud/support/"
  note: "Premier 30-min critical-response is a published target; CSTA assigned at Premier."
---

Confluent is a Database & Data Infrastructure provider. See the official Confluent Cloud Service Level Agreement (effective July 25, 2025) at [Confluent Cloud Unified SLA (July 2025)](https://assets.confluent.io/m/7cc915b8d26e73a7/original/Confluent-Cloud-Unified-SLA-July-2025-Legal.pdf), linked from [confluent.io/legal/archive](https://www.confluent.io/legal/archive/confluent-cloud-service-level-agreement/).

<!-- Add human-readable notes about Confluent's SLA nuances here. -->
