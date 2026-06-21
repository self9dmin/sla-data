---
title: Elastic
slug: elastic
vendor_name: Elastic
legal_entity: Elastic
category: Monitoring & Observability
website: https://www.elastic.com
scope: global
sla_url: https://www.elastic.co/agreements/sla-elastic-cloud-hosted
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.95
max_credit_percent: 100
claim_deadline_days: 10
has_automatic_credits: false
min_plan_for_sla: platinum
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.95
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 30
    - uptime_below: 95
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 10
      business_days: false
      anchor_point: incident_date
      description: Submit a Support ticket no later than 10 days following the Error
  submission_method: Support ticket
  submission_url: https://support.elastic.co
  required_evidence:
    - Affected account and ECH deployment
    - Dates and times of each Error claimed
    - Customer request logs documenting the Error
  review_timeline: Elastic investigates root cause after request
  credit_application: Applied against future ECH consumption; not redeemable for cash or refund
global_exclusions:
  - Customer failure to perform its responsibilities under the Subscription Agreement
  - Suspension or termination of access per the Subscription Agreement
  - Factors outside Elastic's reasonable control, including force majeure or Internet access problems
  - Acts/omissions of Customer or third parties, including improper scaling, configuration or misconfiguration
  - Third-party equipment, software or technology not under Elastic's control (including AWS, GCP, Azure)
  - Customer misconfiguring security groups, VPC, credentials, IP allow-lists, or exceeding connection limits
  - Use of unsupported or deprecated Elasticsearch/ECH features, versions or releases
  - Use of preview, pre-release, beta, or trial features
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
  - name: Platinum
    slug: platinum
    price_model: Custom
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
    response_times:
      critical: < 1 hour
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
  - id: apm
    name: Elastic APM
    category: APM
    description: Application performance monitoring
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.elastic.co/agreements/sla-elastic-cloud-hosted
  - id: observability
    name: Elastic Observability
    category: Observability
    description: Logs, metrics, traces
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.elastic.co/agreements/sla-elastic-cloud-hosted
  - id: siem
    name: Elastic Security
    category: SIEM
    description: Security information and events
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.elastic.co/agreements/sla-elastic-cloud-hosted
  - id: search
    name: Elasticsearch
    category: Search
    description: Distributed search engine
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.elastic.co/agreements/sla-elastic-cloud-hosted
  - id: kibana
    name: Kibana
    category: Visualization
    description: Data visualization
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.elastic.co/agreements/sla-elastic-cloud-hosted
---

Elastic is a Monitoring & Observability provider. See the official SLA at [https://www.elastic.co/agreements/sla-elastic-cloud-hosted](https://www.elastic.co/agreements/sla-elastic-cloud-hosted).

This SLA applies to the Elastic Cloud Hosted (ECH) Service for Platinum or Enterprise subscriptions in a High Availability configuration (at least 2 availability zones). The Standard subscription level is not SLA-eligible. The middle credit tier is 30% (not 25%), and Service Credit Requests must be submitted via a Support ticket no later than 10 days following the Error. Credits are applied against future ECH consumption and are not redeemable for cash or refund.

<!-- Add human-readable notes about Elastic's SLA nuances here. -->
