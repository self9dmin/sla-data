---
title: Qlik
slug: qlik
vendor_name: Qlik
legal_entity: Qlik
category: Analytics & BI
website: https://www.qlik.com
scope: global
sla_url: https://assets.qlik.com/image/upload/v1712595250/qlik/docs/Legal/terms-and-conditions/service-level-agreement_hzecsf.pdf
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 100
claim_deadline_days: 15
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99.0
      credit_percent: 30
    - uptime_below: 95.0
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 15
      business_days: false
      anchor_point: non_availability_period
      description: Submit a Service Credit request via the Support Portal within 15 days after the suspected period of non-Availability
  submission_method: Support Portal (open a Support Case designated as a Service Credit request)
  submission_url: https://community.qlik.com/t5/Support/ct-p/qlikSupport
  required_evidence:
    - Dates, times and duration of each incident of non-Availability
    - Detailed description of events and corroborating documentation
    - Number and location(s) of affected users
    - Description of customer attempts to resolve at time of occurrence
  review_timeline: Not specified in SLA
  credit_application: Applied to customer's next annual invoice following final determination
global_exclusions:
  - Scheduled maintenance not exceeding 2 hours per calendar month
  - Force majeure (natural disaster, war, acts of terror, acts of government, civil unrest)
  - Customer-controlled hardware, equipment, software, or network issues
  - Customer Internet or ISP issues, VPN issues, email/DNS availability
  - Authentication issues due to changes in customer's authentication mechanism
  - Deactivation/suspension of a Customer Managed Key
  - Suspension of customer's Services User Account access
  - Qlik-permitted suspension/termination or customer breach of agreement
  - Customer's failure to purchase adequate capacity
  - Intentional misuse of Qlik Cloud by customer
  - Beta, limited availability, and Early Access Program (EAP) products and features
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
  - id: application-automation
    name: Qlik Application Automation
    category: Automation
    description: No-code automation workflows
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://assets.qlik.com/image/upload/v1712595250/qlik/docs/Legal/terms-and-conditions/service-level-agreement_hzecsf.pdf
  - id: automl
    name: Qlik AutoML
    category: Machine Learning
    description: Automated machine learning
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://assets.qlik.com/image/upload/v1712595250/qlik/docs/Legal/terms-and-conditions/service-level-agreement_hzecsf.pdf
  - id: data-integration
    name: Qlik Data Integration
    category: Data Integration
    description: Data pipeline and transformation
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://assets.qlik.com/image/upload/v1712595250/qlik/docs/Legal/terms-and-conditions/service-level-agreement_hzecsf.pdf
  - id: sense
    name: Qlik Sense
    category: Business Intelligence
    description: Data analytics and visualization
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://assets.qlik.com/image/upload/v1712595250/qlik/docs/Legal/terms-and-conditions/service-level-agreement_hzecsf.pdf
---

Qlik is a Business Intelligence provider. See the official SLA at [https://assets.qlik.com/image/upload/v1712595250/qlik/docs/Legal/terms-and-conditions/service-level-agreement_hzecsf.pdf](https://assets.qlik.com/image/upload/v1712595250/qlik/docs/Legal/terms-and-conditions/service-level-agreement_hzecsf.pdf).

Qlik Cloud commits to a 99.9% monthly Uptime Percentage. Service Credits are tiered: 10% of monthly charges for uptime below 99.9% (>=99.0%), 30% below 99.0% (>=95.0%), and 100% below 95.0%. Credits are not automatic — customers must open a Support Case designated as a Service Credit request via the Support Portal within 15 days of the suspected non-Availability period, and credits are applied to the next annual invoice. Per the SLA (v.2025.03.13).

<!-- Add human-readable notes about Qlik's SLA nuances here. -->
