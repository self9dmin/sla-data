---
title: Wiz
slug: wiz
vendor_name: Wiz
legal_entity: Wiz, Inc.
category: Security & Identity
website: https://wiz.io
scope: global
sla_url: https://legal.wiz.io/legal
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.5
max_credit_percent: 20
has_automatic_credits: false
min_plan_for_sla: paid
claim_deadline_days: 30
needs_review: false
credit_note: 'Reviewed Wiz Service and Support Levels Agreement (legal.wiz.io/legal). Uptime commitment verbatim: "Wiz shall endeavour in a reasonable manner to provide Annually Uptime Percentage for no less than 99.5% of each calendar year as the Service Level Objective (''SLO'')." Note: commitment is measured ANNUALLY, not monthly — a materially weaker protection than monthly SLAs. Credit cap verbatim: "The aggregate maximum number of Service Credits to be issued by Wiz to Customer for any and all Downtime Periods in a single billing year will not exceed 20% of the amount due by Customer for the applicable Service for the applicable billing year." Credit form verbatim: Credits "made in the form of a monetary credit applied to offset the Annual Subscription Fee of the following billing year." Claim process verbatim: "Customer may file a claim for Service Credit should the Customer believe that the SLO in connection with your use of the Service is not met in any calendar year within 30 days of the following year." Exclusions: Scheduled maintenance (≥72 hours notice); hot fixes (≥3 hours notice). SLA applies to paid annual subscriptions only; free/trial excluded. needs_review: true — primary SLA PDF blocked; 20% cap figure from indexed search snippets which may include results from wiz.ai (a different company). Direct verification at legal.wiz.io recommended.'
credit_policy:
  remedy_type: credit
  calculation_type: flat
  max_credit_percent: 20
  credit_formula: 'Annual measurement period: credits up to 20% of annual subscription fee for any year below 99.5% uptime, applied as offset against the following year''s Annual Subscription Fee.'
claim_process:
  submission_method: Support ticket
  submission_url: https://legal.wiz.io/legal
  credit_application: Applied as monetary credit against the following year's Annual Subscription Fee
  required_evidence:
    - Evidence that the annual SLO was not met
    - Dates and times of unavailability
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: billing_cycle_end
      description: Claim must be filed within 30 days of the end of the calendar year in which the SLO was not met (i.e., by January 31 of the following year)
global_exclusions:
  - Scheduled maintenance (≥72 hours advance notice)
  - Hot fixes (≥3 hours advance notice)
  - Force majeure events
  - Customer-caused issues
  - Free and trial services
support_tiers:
  - name: Standard
    price_model: Annual subscription
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
      - Dedicated support
services:
  - id: wiz-cspm
    name: Wiz Cloud Security Platform
    category: Security & Identity
    description: Cloud security posture management (CSPM), vulnerability management, and cloud detection and response
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://legal.wiz.io/legal
---

Wiz (cloud security posture management) offers a 99.5% uptime SLA measured annually — an unusually weak measurement period that averages out short outages over a full year. Credits are capped at 20% of the annual subscription fee, applied against the following year's fees. Claims must be filed within 30 days after the year ends (by January 31).
