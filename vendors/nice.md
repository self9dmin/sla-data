---
title: NICE
slug: nice
vendor_name: NICE
legal_entity: NICE
category: Communication & Collaboration
website: https://www.nice.com
scope: global
sla_url: https://www.nice.com/company/sla-guarantee
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.99
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 3.33
    - uptime_below: 99.95
      credit_percent: 6.67
    - uptime_below: 99.0
      credit_percent: 14.29
    - uptime_below: 97
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: billing_month
      description: Customer can request credit within 30 days following the month in which the Availability fell below the applicable Service Levels
  submission_method: Request via CXone Customer Community support portal
  submission_url: https://www.nice.com/company/sla-guarantee
  required_evidence:
    - Account information
    - Affected services
    - Period of unavailability
  review_timeline: Not specified
  credit_application: Service credit (MRC credit)
global_exclusions:
  - Planned maintenance of which the customer is given advanced notice
  - Outages or disruptions caused by the customer or any third party acting on the customer's behalf
  - Outages caused by software, infrastructure, databases, human errors or hardware not provided and controlled by NiCE
  - Configuration changes not made by NiCE
  - Telecommunications services or internet access not controlled by NiCE
  - SLA Credits waived if Customer's financial account with NiCE is not in good standing
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
  - id: cxone-acd
    name: CXone ACD
    category: Voice
    description: Automatic call distribution
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.nice.com/company/sla-guarantee
  - id: cxone-analytics
    name: CXone Analytics
    category: Analytics
    description: Interaction analytics
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.nice.com/company/sla-guarantee
  - id: cxone-autopilot
    name: CXone Autopilot
    category: AI
    description: AI-powered virtual agents
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.nice.com/company/sla-guarantee
  - id: cxone-digital
    name: CXone Digital
    category: Digital
    description: Digital channel routing
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.nice.com/company/sla-guarantee
  - id: cxone-qm
    name: CXone Quality Management
    category: QM
    description: Quality monitoring and coaching
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.nice.com/company/sla-guarantee
  - id: cxone-wfm
    name: CXone Workforce Management
    category: WFM
    description: Forecasting and scheduling
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.nice.com/company/sla-guarantee
support:
  tiers:
    - "CXsuccess Care"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: "https://www.nice.com/services/customer-support"
  note: "CXsuccess Care is included; higher tiers exist but details are not publicly disclosed."
---

NICE is a Other SaaS provider. See the official SLA at [https://www.nice.com/company/sla-guarantee](https://www.nice.com/company/sla-guarantee).

NICE CXone publishes a financially-backed 99.99% monthly availability SLA. Service credits are tiered against the average Actual Availability for the one-month billing cycle: Below 99.99% = 1/30th of MRC; Below 99.95% = 1/15th of MRC; Below 99.0% = 1/7th of MRC; Below 97% = a free month (100% of MRC). The maximum credit in any monthly billing period will not exceed 100% of the MRC billed that month. Credits are not automatic - the customer must request the credit within 30 days following the month in which availability fell below the applicable Service Levels. NICE also publishes a separate MOS (voice quality) SLA with a minimum MOS score of 3.9. Note: tier credit_percent values (3.33 / 6.67 / 14.29) are decimal conversions of the published fractions 1/30, 1/15, and 1/7.

<!-- Add human-readable notes about NICE's SLA nuances here. -->
