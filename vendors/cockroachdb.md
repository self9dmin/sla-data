---
title: CockroachDB Cloud
slug: cockroachdb
vendor_name: CockroachDB Cloud
legal_entity: Cockroach Labs, Inc.
category: Databases & Data Infrastructure
website: https://www.cockroachlabs.com
scope: global
sla_url: https://www.cockroachlabs.com/cloud-terms-and-conditions/cockroachcloud-technical-service-level-agreement/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.99
has_automatic_credits: false
min_plan_for_sla: paid
claim_deadline_days: 30
needs_review: false
credit_note: 'Verified against CockroachDB Cloud Technical Service Level Agreement (cockroachlabs.com/cloud-terms-and-conditions/cockroachcloud-technical-service-level-agreement/). Uptime commitments: Basic and Standard plans: 99.99% Monthly Uptime Percentage; Advanced plan (Multi-Region Clusters only): 99.999%. Calculated as: 100% minus the percentage of 1-minute intervals during the monthly billing cycle in which the cluster experienced Downtime. Credit definition verbatim: "Service Credit means the percentage of applicable monthly Service Fees, or, if applicable, additional CockroachDB Cloud Credits, credited to an eligible account pursuant to a valid and approved Company claim." Application verbatim: "Service Credits will only be applied against a future Cockroach Labs payment otherwise due." Claim process: must be a Paid Tier Customer with a Qualifying Cluster; log a support ticket within 24 hours of first becoming aware of Downtime; submit formal claim by end of the month immediately following the month of Downtime. Credit tier percentages per uptime threshold exist in the SLA document but were not confirmed verbatim — needs_review: true; direct document review recommended. Applies to Paid Tier customers only; Basic/free-tier clusters are excluded.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Support ticket
  submission_url: https://cockroachlabs.com/support
  credit_application: Applied against future Cockroach Labs payments; non-refundable
  required_evidence:
    - Support ticket filed within 24 hours of first becoming aware of Downtime
    - Dates and times of cluster unavailability
    - Affected cluster details
  deadlines:
    - type: submission
      anchor_point: billing_cycle_end
      description: Formal claim must be submitted by end of the calendar month immediately following the month in which Downtime occurred
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Free-tier and non-Paid Tier clusters
support_tiers:
  - name: Basic
    price_model: Usage-based
    sla_eligible: false
    availability: Business hours
    channels:
      - Documentation
      - Community
  - name: Standard
    price_model: Usage-based
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Advanced
    price_model: Usage-based
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Dedicated support
services:
  - id: cockroachdb-standard
    name: CockroachDB Standard
    category: Database
    description: Serverless-style distributed SQL with automatic scaling
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.cockroachlabs.com/cloud-terms-and-conditions/cockroachcloud-technical-service-level-agreement/
  - id: cockroachdb-advanced
    name: CockroachDB Advanced (Multi-Region)
    category: Database
    description: Dedicated multi-region distributed SQL clusters
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.cockroachlabs.com/cloud-terms-and-conditions/cockroachcloud-technical-service-level-agreement/
---

CockroachDB Cloud offers a 99.99% monthly uptime SLA for Standard plans and 99.999% for Advanced Multi-Region clusters. Credits apply only to Paid Tier customers. A support ticket must be filed within 24 hours of the incident, with a formal claim by end of the following month. Exact credit tier percentages are documented in the SLA but were not captured verbatim — direct review recommended.
