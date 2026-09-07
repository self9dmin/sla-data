---
title: DataStax Astra DB
slug: datastax
vendor_name: DataStax
legal_entity: DataStax, Inc.
category: Databases & Data Infrastructure
website: https://www.datastax.com
scope: global
sla_url: https://www.datastax.com/legal/datastax-astra-sla
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.99
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: false
credit_note: 'Reviewed DataStax Astra DB SLA (datastax.com/legal/datastax-astra-sla; separate Managed Cloud SLA at datastax.com/legal/datastax-managed-cloud-service-level-agreement). Uptime tiers: Standard plan: 99.9%; Enterprise plan: 99.99%. Explicit exclusion verbatim: "Non-production Astra Nodes are explicitly excluded from the Service Level Agreement." Replication: each Astra DB database uses replication across three availability zones within the launched region. A credit schedule exists in the SLA document but exact credit percentages per tier and claim deadline were not confirmed verbatim — needs_review: true; direct document review at datastax.com/legal/datastax-astra-sla recommended. Note: DataStax was acquired by IBM in May 2025; the DataStax brand and datastax.com domain continue to operate under IBM ownership. Legal entity remains DataStax, Inc.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Support ticket
  submission_url: https://support.datastax.com
  required_evidence:
    - Affected Astra DB node/database details
    - Dates and times of unavailability
global_exclusions:
  - Non-production Astra Nodes (explicitly excluded)
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
support_tiers:
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
  - id: astra-db
    name: DataStax Astra DB
    category: Database
    description: Managed Cassandra serverless database-as-a-service with multi-AZ replication
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.datastax.com/legal/datastax-astra-sla
  - id: datastax-managed-cloud
    name: DataStax Managed Cloud
    category: Database
    description: Fully managed Cassandra on dedicated infrastructure
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.datastax.com/legal/datastax-managed-cloud-service-level-agreement
---

DataStax Astra DB (now part of IBM since May 2025) offers tiered uptime SLAs: 99.9% for Standard and 99.99% for Enterprise plans. Production databases use 3-AZ replication; non-production nodes are explicitly excluded. Credit tier details and claim deadline require direct review of the SLA document.
