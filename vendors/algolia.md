---
title: Algolia
slug: algolia
vendor_name: Algolia
legal_entity: Algolia, Inc. / Algolia SAS
category: Developer Tools
website: https://www.algolia.com
scope: global
sla_url: https://www.algolia.com/policies/sla
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.99
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: true
credit_note: 'Verified against Algolia Current SLA (algolia.com/policies/sla). Credit formula verbatim: "Service Credit = (Subscription Price × Outage Period Minutes × Acceleration Ratio) ÷ minutes in the applicable Service month." Key defined terms verbatim: "Acceleration Ratio means the acceleration multiplier Algolia offers for each Algolia subscription plan covered by this SLA"; "Monthly Cap means the maximum aggregate number of invoice credits issued by Algolia to Subscriber for all Outages in a single billing month." Plan-level values verbatim: Enterprise plan — 99.99% Monthly Guaranteed Uptime, Acceleration Ratio 100, Monthly Cap = 100% of monthly service billing. Premium plan — 99.999% Monthly Guaranteed Uptime, Acceleration Ratio 1,000, Monthly Cap = 600% of annual monthly service billing. Free and Build plans: no uptime SLA. Credit delivery verbatim: "Service Credits will be made in the form of a monetary credit applied towards future use of the Service." Claim deadline: NOT FOUND verbatim — the 30-day notice period found in indexed content applies to SLA changes, not credit requests. needs_review: true — claim submission deadline not confirmed from primary source. Legal entity: Algolia, Inc. (Delaware, USA) for non-EU; Algolia SAS (France) for EU customers. SLA Version 8+, effective August 27, 2025.'
credit_policy:
  remedy_type: credit
  calculation_type: pro_rated
  max_credit_percent: 100
  credit_unit: multiplier
  max_credit_multiplier: 100
claim_process:
  submission_method: Support ticket
  submission_url: https://www.algolia.com/support/
  required_evidence:
    - Dates and times of service unavailability
    - Affected application and index details
    - Account information
global_exclusions:
  - Free and Build plan customers (no uptime SLA)
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Beta features
support_tiers:
  - name: Build
    price_model: Usage-based
    sla_eligible: false
    availability: Community
    channels:
      - Documentation
      - Community
  - name: Grow
    price_model: Usage-based
    sla_eligible: false
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
      - Dedicated support
  - name: Premium
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
      - Email
      - Dedicated support
services:
  - id: algolia-search
    name: Algolia AI Search
    category: Developer Tools
    description: AI-powered search and discovery API for websites and applications
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.algolia.com/policies/sla
  - id: algolia-recommend
    name: Algolia Recommend
    category: Developer Tools
    description: AI recommendation API for personalized content and product discovery
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.algolia.com/policies/sla
---

Algolia (Algolia, Inc., Delaware) is an AI-powered search and discovery API platform. The SLA uses an unusual **Acceleration Ratio multiplier** formula: credits = (subscription price × outage minutes × ratio) ÷ total month minutes. Enterprise plan: 99.99% uptime, 100× ratio, max 100% monthly credit. Premium plan: 99.999% uptime, 1,000× ratio, max 600% annually. Free and Build plans have no uptime SLA.
