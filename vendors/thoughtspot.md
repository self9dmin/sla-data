---
title: ThoughtSpot
slug: thoughtspot
vendor_name: ThoughtSpot
legal_entity: ThoughtSpot, Inc.
category: Analytics & BI
website: https://www.thoughtspot.com
scope: global
sla_url: https://www.thoughtspot.com/legal/thoughtspot-cloud-subscription-agreement
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99
has_automatic_credits: false
min_plan_for_sla: pro
claim_deadline_days: 20
needs_review: false
credit_note: 'Verified against ThoughtSpot Cloud Subscription Agreement (updated October 25, 2024) incorporating the Subscription Service Program Guide (PDF, 2020-12-08). Uptime threshold and remedy verbatim: "For any calendar month in which a production instance of the ThoughtSpot Cloud falls below 99%, excluding Service Level Exclusions, as Customer''s sole and exclusive remedy for such downtime Customer may request to apply to the next invoice for subscription fees a number of credits equal to the monetary value of the number of minutes the ThoughtSpot Cloud was not Available in the month below the Service Level, determined at the per-minute rate that ThoughtSpot charged Customer for Customer''s use of the affected ThoughtSpot Cloud instance (''Service Level Credits'')." Availability calculation verbatim: "Availability is calculated as the minutes the ThoughtSpot Cloud is accessible to authorized users/total minutes in the month, where the calendar and clock utilized will be that used by the ThoughtSpot Cloud in its hosted location." Claim verbatim: "Customer must request all Service Level Credits in writing to ThoughtSpot at servicelevelcredits@thoughtspot.com within 20 days of the end of the month in which the Service Level was not met and identify the support requests relating to the period Customer''s instances of the ThoughtSpot Cloud were unavailable." Exclusion verbatim: "Service Level Exclusion means scheduled maintenance provided with at least 48 hours'' prior written notice to the administrator user(s), posted on the Support Portal, or displayed in a conspicuous on-screen message." Applies to Pro and Enterprise plan customers only. Credits are Customer''s sole and exclusive remedy.'
credit_policy:
  remedy_type: credit
  calculation_type: pro_rated
  credit_formula: 'Credits equal the monetary value of downtime minutes below 99% in the calendar month, calculated at the per-minute subscription rate for the affected instance, applied to the next invoice.'
claim_process:
  submission_method: Email
  submission_url: mailto:servicelevelcredits@thoughtspot.com
  credit_application: Applied to next invoice as a subscription fee credit
  required_evidence:
    - Written request identifying the affected production instance
    - Support request numbers relating to the period of unavailability
    - Dates and times when ThoughtSpot Cloud was not available
  deadlines:
    - type: submission
      days: 20
      business_days: false
      anchor_point: billing_cycle_end
      description: Written request to servicelevelcredits@thoughtspot.com within 20 days of the end of the month in which the SLA was not met
global_exclusions:
  - Scheduled maintenance (with at least 48 hours prior written notice to administrator)
  - Service Level Exclusions as defined in the agreement
  - Trial and evaluation plan customers
support_tiers:
  - name: Pro
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Email
      - Ticket
  - name: Enterprise
    price_model: Subscription
    sla_eligible: true
    availability: 24/7
    channels:
      - Email
      - Phone
      - Dedicated support
services:
  - id: thoughtspot-cloud
    name: ThoughtSpot Cloud
    category: Analytics & BI
    description: AI-powered analytics and search-driven BI platform (cloud-hosted production instances)
    uptime_commitment: 99
    sla_eligible: true
    source_url: https://www.thoughtspot.com/legal/thoughtspot-cloud-subscription-agreement
---

ThoughtSpot Cloud provides search-driven business intelligence for enterprises. The SLA applies to Pro and Enterprise plan production instances — the remedy is a per-minute credit equal to the monetary value of downtime below 99%, applied to the next invoice. Claims must be submitted in writing within 20 days of the end of the affected month.
