---
title: Coupa
slug: coupa
vendor_name: Coupa
legal_entity: Coupa
category: Enterprise & Operations
website: https://www.coupa.com
scope: global
sla_url: https://www.coupa.com/master-subscription-agreement/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.8
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: flat
  remedy_type: credit
  max_credit_percent: 100
  credit_note: >-
    Sole remedy is a service credit equal to the greater of (a) 10% of the
    applicable monthly subscription fees, or (b) the actual unavailability rate
    for that calendar month. Total service credits for any month may not exceed
    the applicable monthly subscription fee.
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_month
      description: Request in writing within 30 days of the end of the month in which the Uptime SLA was not met
  submission_method: Support Portal (written request to Coupa)
  submission_url: https://compass.coupa.com/en-us/trust/system-up-time-and-metrics
  required_evidence:
    - Period the production instance was not available
  review_timeline: Applied during next billing cycle
  credit_application: Applied during next billing cycle
global_exclusions:
  - Planned maintenance windows
  - Emergency maintenance
  - Circumstances beyond Coupa's reasonable control
  - Customer or User acts or omissions
  - Force majeure events
  - ISP failures or delays
  - Failure of equipment not controlled by Coupa
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: true
    claim_assistance: false
    availability: Business hours
    channels:
      - Email
    response_times:
      general: < 24 hours
  - name: Enterprise
    slug: enterprise
    price_model: Custom
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
    response_times:
      critical: < 1 hour
      high: < 4 hours
services:
  - id: expenses
    name: Coupa Expenses
    category: Finance
    description: Expense management
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.coupa.com/master-subscription-agreement/
  - id: invoicing
    name: Coupa Invoicing
    category: Finance
    description: Invoice management
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.coupa.com/master-subscription-agreement/
  - id: procurement
    name: Coupa Procurement
    category: Procurement
    description: Procurement and purchasing
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.coupa.com/master-subscription-agreement/
  - id: sourcing
    name: Coupa Sourcing
    category: Procurement
    description: Strategic sourcing and contract management
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.coupa.com/master-subscription-agreement/
  - id: supplier-management
    name: Supplier Management
    category: Procurement
    description: Supplier information and risk management
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.coupa.com/master-subscription-agreement/
---

Coupa is a Finance & Payments provider. See the official SLA (Master Subscription Agreement, Exhibit A-2) at [https://www.coupa.com/master-subscription-agreement/](https://www.coupa.com/master-subscription-agreement/).

<!-- Add human-readable notes about Coupa's SLA nuances here. -->
