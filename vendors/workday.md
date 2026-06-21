---
title: Workday
slug: workday
vendor_name: Workday
legal_entity: Workday
category: HR & People Operations
website: https://www.workday.com
scope: global
sla_url: https://www.workday.com/content/dam/web/en-us/documents/legal/usla.pdf
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: manual
  remedy_type: request
  max_credit_percent: 30
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 30
claim_process:
  claim_window_days: 60
  credit_application: Deducted from next invoice for Subscription Fees, or refunded if no subsequent invoice
  notes: >-
    Credits are not automatic; Customer must request remedies within 60 days of
    a Failure (per product SLAs) / six months under the End User Subscription
    Agreement. Remedies escalate by number of Failures in a rolling six-month
    period: corrective-action meeting (1st), 10% credit (2nd), 20% credit (3rd),
    30% credit (4th). Percentage is of the affected Service's monthly Subscription Fee.
global_exclusions:
  - Customer acts or omissions (incl. use inconsistent with Documentation)
  - Events outside Workday's reasonable control (force majeure)
  - Customer or third-party software, hardware, or services
  - Applications developed under the Workday Developer Program
  - Scheduled maintenance windows
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
  - id: planning
    name: Workday Adaptive Planning
    category: Finance
    description: Financial planning and analysis
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.workday.com/content/dam/web/en-us/documents/legal/usla.pdf
  - id: financials
    name: Workday Financial Management
    category: Finance
    description: Enterprise financials and accounting
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.workday.com/content/dam/web/en-us/documents/legal/usla.pdf
  - id: hcm
    name: Workday HCM
    category: HCM
    description: Human Capital Management - core HR
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.workday.com/content/dam/web/en-us/documents/legal/usla.pdf
  - id: learning
    name: Workday Learning
    category: HCM
    description: Learning management system
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.workday.com/content/dam/web/en-us/documents/legal/usla.pdf
  - id: payroll
    name: Workday Payroll
    category: HCM
    description: Payroll processing - critical timing
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.workday.com/content/dam/web/en-us/documents/legal/usla.pdf
---

Workday is a HR & People Operations provider. See the official SLA at [Universal Service Level Availability and Support Policy](https://www.workday.com/content/dam/web/en-us/documents/legal/usla.pdf) (last updated June 4, 2026). Workday commits to 99.9% monthly uptime for all Workday Service product lines (HiredScore is 99.5%). Service credits are not automatic: a customer must request remedies, which escalate by the number of Failures in a rolling six-month period (corrective-action meeting for the 1st, then 10%/20%/30% of the affected Service's monthly Subscription Fee for the 2nd/3rd/4th).

<!-- Add human-readable notes about Workday's SLA nuances here. -->
