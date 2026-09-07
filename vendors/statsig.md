---
title: Statsig
slug: statsig
vendor_name: Statsig
legal_entity: Statsig, Inc.
category: Developer Tools
website: https://www.statsig.com
scope: global
sla_url: https://www.statsig.com/enterprise-terms
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.95
has_automatic_credits: false
min_plan_for_sla: enterprise
needs_review: true
credit_note: 'Verified against Statsig Enterprise Terms (statsig.com/enterprise-terms; page returns HTTP 403 to direct fetch, text indexed by search engines). Uptime verbatim: "Statsig will use commercially reasonable efforts to maintain 99.95% availability of the Service user interface (Console) in each applicable calendar month." Note: the "commercially reasonable efforts" qualifier and Console-only scope (not all service components) are significant limitations. Credit structure verbatim: "If Service Availability is less than 99.95% for a given month, Customer may be eligible to receive a service credit… calculated as a percentage of the total charges paid by Customer for the Services during the applicable month." No-refund verbatim: "Statsig will not pay any Service Credit as a refund." Credits apply to next billing cycle only. Sole remedy verbatim: "THE SERVICE CREDITS DESCRIBED IN THIS SECTION ARE CUSTOMER''S SOLE AND EXCLUSIVE REMEDY FOR THE FAILURE TO MEET THE SERVICE AVAILABILITY." Claim deadline verbatim: "Customer must deliver a reasonably detailed, written request (''SLA Request'') to support@statsig.com no later than 30 calendar days after the day on which Service Availability first drops below 99.95%." Required claim evidence verbatim: "(a) ''SLA Credit Request'' in the subject line; (b) dates/times of unavailability; (c) description of the events; (d) monitoring logs with confidential info removed." Scheduled maintenance exclusion verbatim: excluded if Statsig provides at least 5 business days'' notice and maintenance does not exceed 4 hours/month between 10pm–4am Pacific Time. Plan tier: Enterprise only — "SLAs" listed as Enterprise-tier benefit on pricing page. Legal entity: Statsig, Inc.; Washington State dispute resolution venue: King County, Washington; state of incorporation not confirmed verbatim. needs_review: true — specific credit percentage tiers (% per uptime band below 99.95%) not publicly indexed; only structure confirmed.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Email
  submission_url: mailto:support@statsig.com
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit SLA Request to support@statsig.com within 30 days of the breach first occurring
global_exclusions:
  - Credits apply to future billing cycle only — not cash or refunds
  - Availability measured for Console UI only, not all service components
  - Commercially reasonable efforts qualifier limits enforceability
  - Scheduled maintenance excluded (5 business days notice, max 4 hours/month 10pm–4am Pacific)
  - Enterprise plan required
  - Credit tier percentages (% per uptime band) not publicly confirmed
support_tiers:
  - name: Growth
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
services:
  - id: statsig-feature-platform
    name: Statsig Feature Management & Experimentation
    category: Developer Tools
    description: Feature flags, A/B experimentation, and product analytics platform with warehouse-native architecture
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.statsig.com/enterprise-terms
---

Statsig (Statsig, Inc.; King County, WA dispute venue) is a feature flag, experimentation, and product analytics platform. The Enterprise SLA commits to 99.95% monthly availability for the Console UI — not all service components — with a "commercially reasonable efforts" qualifier. Credits are calculated as a percentage of monthly charges and apply to the next billing cycle only; no cash refunds. Claims must be submitted to support@statsig.com within 30 days of the breach. The specific credit tier percentages are not publicly indexed.
