---
title: Microsoft Dynamics 365
slug: microsoft-dynamics-365
vendor_name: Microsoft Dynamics 365
legal_entity: Microsoft Dynamics 365
category: Enterprise & Operations
website: https://dynamics.microsoft.com
scope: global
sla_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 25
    - uptime_below: 99
      credit_percent: 50
    - uptime_below: 95
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      anchor_point: end_of_month_following_incident
      description: >-
        Claim must be received by the end of the Applicable Period (calendar
        month) following the month in which the Incident occurred (e.g. an
        Incident on February 15th must be claimed by March 31st).
  submission_method: Microsoft customer support
  required_evidence:
    - Detailed description of the Incident
    - Time and duration of downtime
    - Affected resource names
    - Number and location(s) of affected users
    - Description of errors that occurred during the Incident
  review_timeline: Typically within 45 days of receipt of the claim
  credit_application: Applied to Applicable Service Fees following claim approval
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Free tier services
  - Beta features
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
  - id: dynamics-commerce
    name: Dynamics 365 Commerce
    category: E-commerce
    description: Unified commerce
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: dynamics-customer-service
    name: Dynamics 365 Customer Service
    category: Customer Service
    description: Customer service platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: dynamics-finance
    name: Dynamics 365 Finance
    category: ERP
    description: Financial management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: dynamics-marketing
    name: Dynamics 365 Marketing
    category: Marketing
    description: Marketing automation
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: dynamics-sales
    name: Dynamics 365 Sales
    category: CRM
    description: Sales automation
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: dynamics-supply-chain
    name: Dynamics 365 Supply Chain
    category: ERP
    description: Supply chain management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
---

Microsoft Dynamics 365 is a Enterprise Software provider. See the official SLA at [https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services](https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services).

<!-- Add human-readable notes about Microsoft Dynamics 365's SLA nuances here. -->
