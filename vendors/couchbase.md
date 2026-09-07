---
title: Couchbase Capella
slug: couchbase
vendor_name: Couchbase Capella
legal_entity: Couchbase, Inc.
category: Databases & Data Infrastructure
website: https://www.couchbase.com
scope: global
sla_url: https://www.couchbase.com/capellasla/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.99
has_automatic_credits: false
min_plan_for_sla: standard
claim_deadline_days: 30
needs_review: false
credit_note: 'Verified against Couchbase Capella SLA (couchbase.com/capellasla/). Uptime tiers: multi-node clusters range from 99.5% to 99.99% depending on plan tier. Credit formula verbatim: "Service Credits are calculated by multiplying the Monthly Applicable Fees by the percentage set forth in the Service Credit column for the applicable Uptime Tier level in the table." Credit nature verbatim: "Credits are granted in the form of Credits in the same service plan as the Cluster(s) impacted by Downtime, solely for future use by Customer in the Cloud Service." No-refund verbatim: "Service Credits do not entitle Customer to any refund or other payment from Couchbase." Claim process: submit a support ticket within 24 hours of first becoming aware of the failure; submit formal claim by end of the month immediately following the month in which Downtime occurred. Specific credit percentages per uptime tier are in the SLA document table but were not confirmed verbatim — needs_review: true; direct document review at couchbase.com/capellasla/ recommended.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Support ticket
  submission_url: https://support.couchbase.com
  credit_application: Applied as credits for future Cloud Service usage in same plan; non-refundable
  required_evidence:
    - Support ticket filed within 24 hours of first becoming aware of failure
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
  - Single-node clusters (SLA applies to multi-node only)
support_tiers:
  - name: Developer
    price_model: Free
    sla_eligible: false
    availability: Community
    channels:
      - Forum
      - Documentation
  - name: Standard
    price_model: Usage-based
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Phone
      - Dedicated support
services:
  - id: capella-cluster
    name: Couchbase Capella Cluster
    category: Database
    description: Fully managed NoSQL database-as-a-service (multi-node clusters)
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.couchbase.com/capellasla/
---

Couchbase Capella offers tiered uptime SLAs ranging from 99.5% to 99.99% depending on the plan, covering multi-node clusters only. Credits are applied as future service credits in the same plan, calculated as a percentage of monthly fees per the applicable tier table. Exact credit percentages were not captured verbatim — direct review of the SLA document recommended.
