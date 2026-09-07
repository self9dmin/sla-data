---
title: Cohesity
slug: cohesity
vendor_name: Cohesity
legal_entity: Cohesity, Inc.
category: Storage & Backup
website: https://www.cohesity.com
scope: global
sla_url: https://www.cohesity.com/content/dam/cohesity/agreements-docs/saas-sla.pdf
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: true
credit_note: 'Verified against Cohesity SaaS SLA (cohesity.com/content/dam/cohesity/agreements-docs/saas-sla.pdf, Last Updated August 1, 2025; returns HTTP 403, text indexed by search engines). Legal entity: Cohesity, Inc. (Delaware corporation, incorporated June 24, 2013; 300 Park Avenue, Suite 1700, San Jose, California 95110; NYSE: COHE). Uptime verbatim: 99.9% Monthly Uptime Percentage is the Service Commitment. Availability definition verbatim: "''Available'' and ''Availability'' means that Customer can log in to the SaaS Services through https://helios.cohesity.com, as measured by Cohesity via testing agents that report the current state and availability of the SaaS Services every sixty (60) seconds." NOTE: Availability is defined narrowly as Helios portal login access only. Credit form verbatim: "Service Credits are calculated as a specified percentage of an additional equivalent capacity month for the applicable SaaS Service(s) affected (rounded to the nearest number of whole calendar months)." No-refund verbatim: "Service Credits will not entitle Customer to any refund or other payment from Cohesity." Credit example verbatim: "For example, if the Monthly Uptime Percentage fell to 98.9% in any two (2) particular calendar months during a one (1) year subscription, then the aggregate Service Credit would be calculated as 50% which would be rounded up to one (1) Extension Month of equivalent service and capacity added to the end of the subscription period." — confirming 98.9% uptime → 25% credit per affected month (two months × 25% = 50% aggregate = 1 Extension Month rounded up). Maximum credit cap verbatim: "The aggregate maximum number of Service Credits to be issued to Customer in a single annual subscription period will not exceed three (3) Extension Months." Sole remedy verbatim: "Customer''s sole and exclusive remedy for any failure related to service commitments" is Service Credits. Claim deadline verbatim: "Customer must submit a claim by opening a case with Cohesity technical support within thirty (30) days after the end of the calendar month during which the Service Commitment was not met," with: (i) "SLA Credit Request" in subject; (ii) dates/times of claimed non-Availability; (iii) logs or evidence. Exclusions: Free Trials, customer unauthorized action, force majeure, failure of cloud provider, use of software not from Rubrik. Plan tier: all paid SaaS subscribers. needs_review: true — full credit tier table (all uptime bands and % per month) not publicly confirmed; only 98.9% → 25%/month example is confirmed.'
credit_policy:
  remedy_type: service_extension
  calculation_type: tiered
  max_credit_multiplier: 3
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 25
claim_process:
  submission_method: Support ticket
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: month_end
      description: Open a case with Cohesity technical support with SLA Credit Request subject within 30 days after end of the affected calendar month
global_exclusions:
  - Credits are Extension Months at end of subscription — no cash or invoice credits
  - Availability measured only for Helios portal login, not end-to-end backup/restore functionality
  - Free Trials excluded
  - Customer unauthorized action or inaction excluded
  - Force majeure and cloud service provider failures excluded
  - Use of software not provided by Cohesity excluded
  - Full credit tier table (all bands) not publicly confirmed; only 98.9% → 25%/month confirmed
support_tiers:
  - name: Standard
    price_model: Subscription
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
  - id: cohesity-dataprotect
    name: Cohesity DataProtect SaaS
    category: Storage & Backup
    description: SaaS data protection and ransomware recovery platform with AI-powered threat detection
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.cohesity.com/content/dam/cohesity/agreements-docs/saas-sla.pdf
---

Cohesity (Cohesity, Inc., Delaware; San Jose, CA) is a SaaS data protection and ransomware recovery platform. The SLA guarantees 99.9% monthly availability, measured narrowly as login access to the Helios portal — not end-to-end backup or restore functionality. Credits are Extension Months (additional subscription time) appended at the contract end, capped at 3 Extension Months per annual subscription. At 98.9% uptime, the credit is 25% per affected month. Claims must be filed via support case within 30 days of month-end. No cash refunds are issued under any circumstances.
