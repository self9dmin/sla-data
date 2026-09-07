---
title: ClickHouse Cloud
slug: clickhouse
vendor_name: ClickHouse Cloud
legal_entity: ClickHouse, Inc.
category: Databases & Data Infrastructure
website: https://clickhouse.com
scope: global
sla_url: https://clickhouse.com/legal/agreements/service-level-agreement
last_verified: '2026-06-24'
last_updated: '2026-06-24'
has_automatic_credits: false
min_plan_for_sla: enterprise
sla_help_wanted: true
needs_review: false
credit_note: 'Reviewed ClickHouse Cloud Service Level Agreement (clickhouse.com/legal/agreements/service-level-agreement). Availability target verbatim: "ClickHouse will use commercially reasonable efforts to make each Service available with a Monthly Uptime Percentage set forth below during any calendar month (the ''Availability Target'')." Commitment gating verbatim: "ClickHouse offers Service Level Agreements for select committed spend contracts." The exact Availability Target percentages are not publicly disclosed — customers must contact sales@clickhouse.com to learn more. Credit structure verbatim: "Each Service Credit is issued in ClickHouse Cloud Credits, which are each valued at $1 USD at list price." Minimum credit: "Service Credits are applicable and issued only if the credit amount for the applicable calendar month is greater than one dollar ($1 USD)." Uptime calculation verbatim: "Monthly Uptime Percentage for a given Service is calculated by subtracting from 100% the percentage of one-minute intervals during the calendar month in which the Service was Unavailable." HA restriction verbatim: "The SLA applies separately to each service that is configured with High Availability under your ClickHouse Cloud Account." Sole remedy verbatim: "Your sole and exclusive remedy for any failure of ClickHouse to meet the Availability Target is the receipt of a Service Credit (if eligible) in accordance with the terms of this SLA." Claim deadline not stated verbatim. SLA applies only to HA-configured services under committed spend contracts; standard services are excluded.'
credit_policy:
  remedy_type: no_sla
  calculation_type: none
claim_process:
  submission_method: Contact sales
  submission_url: mailto:sales@clickhouse.com
global_exclusions:
  - Non-HA-configured services (SLA applies only to High Availability services)
  - Non-committed-spend customers
  - Credits below $1 USD minimum threshold
support_tiers:
  - name: Development
    price_model: Usage-based
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Documentation
  - name: Production
    price_model: Usage-based
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Committed Spend
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Dedicated support
services:
  - id: clickhouse-cloud
    name: ClickHouse Cloud
    category: Database
    description: Managed ClickHouse analytics database (High Availability configuration required for SLA)
    sla_eligible: false
    source_url: https://clickhouse.com/legal/agreements/service-level-agreement
---

ClickHouse Cloud offers an analytics database with a public SLA document, but the actual uptime target percentages are not disclosed — they apply only to "select committed spend contracts" for High Availability-configured services. Contact ClickHouse sales for committed-spend SLA terms.
