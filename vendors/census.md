---
title: Census
slug: census
vendor_name: Census
legal_entity: Sutro Labs, Inc.
category: Data & Analytics
website: https://www.getcensus.com
scope: global
sla_url: https://www.getcensus.com/legal/sla
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: true
credit_note: 'Verified against Census Service Level Agreement (getcensus.com/legal/sla; page returns HTTP 403 to direct fetch, text indexed by search engines). Note: Census was acquired by Fivetran (announced May 1, 2025). Uptime verbatim: "Census commits that each of the Core Services and Data Delivery Services will experience Uptime of 99.9% of the minutes in a given calendar month." Credit mechanism verbatim: "If Census does not achieve and maintain the Service Levels for each Service as described in the SLA in a given calendar month, then Customer may be eligible for a credit of a portion of its monthly service fees to be applied to future purchases of Census services." Credit form verbatim: "Service Credits may only be redeemed for future purchases of Census services or applied to future invoices for Census services." Maximum credit cap verbatim: "in no event shall a Service Credit exceed fifty percent (50%) of the total monthly fees for that Service in the calendar month that the incident giving rise to the eligibility of a Service Credit occurs." Claim deadline verbatim: "Within thirty (30) days of the end of the calendar month giving rise to the potential Service Credit, Customer must submit a claim for the Service Credit to Census customer support (support@getcensus.com) along with all information reasonably necessary for Census to validate each claim." Claim evidence required verbatim: "(i) a detailed description of the incident; (ii) information regarding the time and duration of the Downtime; (iii) the impacted services; (iv) the number and location(s) of affected users (if applicable); and (v) descriptions of Customer''s attempts to resolve the incident." Credit processing verbatim: "Census will use commercially reasonable efforts to process claims within forty-five (45) days of receipt." Sole remedy verbatim: "Service Credits are Customer''s exclusive remedy and Census'' sole liability for performance or availability issues for any Service under the Agreement and this SLA." Maintenance exclusion verbatim: "Downtime expressly excludes unavailability due to scheduled maintenance or unscheduled emergency maintenance, either by Census or by third-party providers." Maintenance notice verbatim: "Census will provide seven (7) days advance notice in writing or by e-mail of any scheduled maintenance, not to exceed twenty-four (24) hours per month." Tier requirement verbatim: "Customers are only entitled to a Service Credit if they purchased a pricing plan that explicitly specifies inclusion of an Uptime Commitment." SLA modification verbatim: "Census will provide at least ninety (90) days prior notice in the event of any material adverse modifications to this SLA." needs_review: true — graduated credit tier table (% per uptime band) not publicly indexed; only maximum cap confirmed. Legal entity: Sutro Labs, Inc. (Delaware, incorporated February 6, 2018), dba Census, 545 Sutter Street Suite 405, San Francisco, CA 94102.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  max_credit_percent: 50
claim_process:
  submission_method: Email
  submission_url: mailto:support@getcensus.com
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: month_end
      description: Submit claim to support@getcensus.com within 30 days of end of affected calendar month
global_exclusions:
  - Credits redeemable against future purchases/invoices only, not cash
  - Scheduled and unscheduled emergency maintenance excluded from Downtime
  - Maintenance requested by Customer excluded
  - SLA applies only to pricing plans that explicitly specify Uptime Commitment
  - Credit tier table (% per uptime band) not publicly confirmed
support_tiers:
  - name: Standard
    price_model: Subscription
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
services:
  - id: census-reverse-etl
    name: Census Reverse ETL
    category: Data & Analytics
    description: Reverse ETL and data activation platform syncing warehouse data to CRM, marketing, and business tools
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.getcensus.com/legal/sla
---

Census (Sutro Labs, Inc. dba Census, Delaware; San Francisco, CA; acquired by Fivetran May 2025) is a reverse ETL data activation platform. The SLA commits to 99.9% monthly uptime for Core Services and Data Delivery Services. Credits are capped at 50% of monthly fees for the affected service and must be claimed via email within 30 days of month-end. Credits apply to future invoices only — no cash payments. Graduated credit tiers (% per uptime band) are not publicly indexed; the 50% cap is the only confirmed figure.
