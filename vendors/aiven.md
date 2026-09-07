---
title: Aiven
slug: aiven
vendor_name: Aiven
legal_entity: Aiven Oy
category: Databases & Data Infrastructure
website: https://aiven.io
scope: global
sla_url: https://aiven.io/sla
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.99
max_credit_multiplier: 30
has_automatic_credits: false
min_plan_for_sla: startup
needs_review: false
credit_note: 'Verified against Aiven SLA (aiven.io/sla). Uptime verbatim: "Aiven will provide the Cloud Services with a Monthly Uptime Percentage of at least 99.99% during a calendar month (''Service Level Objective'' or ''SLO'')." Also: "All Aiven services, regardless of the support plan, receive the service uptime SLA of 99.99%." Credit formula verbatim: "If the Downtime is caused by a failure in Aiven''s software or operations, the Cloud Services of Startup, Business and Premium levels are provided with the Service Credits covering thirty (30) times the amount of the Downtime Period that exceeds the amount of the Downtime Period allowed by the SLO." Cap verbatim: "The amount of the Service Credits provided to the Customer for Downtime Periods having taken place during a calendar month may not exceed in aggregate the value of the fees charged from the Customer for the same Cloud Services during the three (3) preceding calendar months." Credit expiry verbatim: "Service Credits will be applied to future use of the Cloud Services and will be applied to the use of the Cloud Services taking place within ninety (90) days of the provision of the Service Credit, after which period any unused Service Credits shall expire without any further compensation." Note: credits are time-based (30× excess downtime duration), capped at 3 months of preceding fees. Credits expire 90 days after issuance.'
credit_policy:
  remedy_type: credit
  calculation_type: pro_rated
  credit_formula: 'Credits = 30× the excess downtime duration (time beyond the SLO allowance), capped at 3 months of preceding Cloud Services fees. Applied as time credits for future Cloud Services use.'
claim_process:
  submission_method: Support ticket
  submission_url: https://aiven.io/support
  credit_application: Applied as service credits for future Cloud Services use, expiring 90 days from issuance
  required_evidence:
    - Dates and times of downtime
    - Affected Cloud Service details
  deadlines:
    - type: submission
      description: Claim deadline not explicitly stated; contact Aiven support after the affected month. Credits expire 90 days after issuance.
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Downtime not caused by Aiven software or operations
  - Free tier services (Startup, Business, Premium plans only)
support_tiers:
  - name: Startup
    price_model: Usage-based
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Business
    price_model: Usage-based
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Premium
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Dedicated support
services:
  - id: aiven-cloud-services
    name: Aiven Managed Cloud Services
    category: Databases & Data Infrastructure
    description: Managed open-source databases and data infrastructure (PostgreSQL, MySQL, Kafka, Redis, OpenSearch, etc.)
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://aiven.io/sla
---

Aiven offers a 99.99% monthly uptime SLA across all its managed open-source services (PostgreSQL, MySQL, Kafka, Redis, OpenSearch, and more) for Startup, Business, and Premium plan customers. The credit structure is unusual: credits equal 30× the excess downtime duration (in time units), capped at 3 months of preceding fees. Unused credits expire after 90 days.
