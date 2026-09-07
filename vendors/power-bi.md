---
title: Microsoft Power BI
slug: power-bi
vendor_name: Microsoft Power BI
legal_entity: Microsoft Corporation
category: Analytics & BI
website: https://powerbi.microsoft.com
scope: global
sla_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.9
max_credit_percent: 100
has_automatic_credits: false
min_plan_for_sla: pro
needs_review: false
credit_note: 'Verified against Volume Licensing Service Level Agreement for Microsoft Online Services (June 1, 2026, microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services). Uptime formula verbatim: "The Uptime Percentage is calculated using the following formula: (Maximum Available Minutes − Downtime Minutes) / Maximum Available Minutes × 100." Power BI Pro credit tiers verbatim: "< 99.9%: 25%; < 99%: 50%; < 95%: 100%." Power BI Premium credit tiers verbatim: "< 99.9%: 10%; < 99%: 25%." Power BI Embedded credit tiers verbatim: "< 99.9%: 10%; < 99%: 25%." Claim deadline verbatim: "For claims related to all other Services, we must receive the claim by the end of the Applicable Period following the month in which the Incident occurred. For example, if the Incident occurred on February 15th, we must receive the claim and all required information by March 31st." Sole remedy verbatim: "Service Credits are your sole and exclusive remedy for any performance or availability issues for any Service under the Agreement and this SLA." Monthly cap verbatim: "The Service Credits awarded in any billing month for a particular Service or Service Resource will not, under any circumstance, exceed your monthly service fees for that Service or Service Resource, as applicable, in the Applicable Period." Note: Power BI Pro has the most generous credit structure (25/50/100%); Power BI Premium and Embedded use a two-tier table (10/25%).'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 25
    - uptime_below: 99
      credit_percent: 50
    - uptime_below: 95
      credit_percent: 100
claim_process:
  submission_method: Support ticket
  submission_url: https://support.microsoft.com
  credit_application: Applied to future charges as account credit; non-refundable
  required_evidence:
    - Detailed description of the incident
    - Time and duration of downtime
    - Affected resource names
    - Number and location of affected users
    - Description of errors during the incident
  deadlines:
    - type: submission
      anchor_point: billing_cycle_end
      description: Claim must be received by the end of the calendar month following the month in which the incident occurred (e.g., incident in February → deadline is March 31)
global_exclusions:
  - Scheduled downtime (5+ days advance notice provided)
  - Factors outside Microsoft's reasonable control
  - Customer or third-party hardware or software
  - Customer actions or inactions
  - Beta or trial services
support_tiers:
  - name: Microsoft 365 Business
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Phone
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
      - Dedicated support
services:
  - id: power-bi-pro
    name: Power BI Pro
    category: Analytics & BI
    description: Per-user BI and collaboration service (Microsoft Online Service)
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: power-bi-premium
    name: Power BI Premium
    category: Analytics & BI
    description: Dedicated capacity for large-scale BI and reporting (Microsoft Online Service)
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: power-bi-embedded
    name: Power BI Embedded
    category: Analytics & BI
    description: Embedded analytics capacity provisioned as an Azure resource
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://azure.microsoft.com/en-us/support/legal/sla/power-bi-embedded/v1_1/
---

Microsoft Power BI offers a 99.9% monthly uptime SLA under the Microsoft Volume Licensing Service Level Agreement for Online Services (June 2026). Power BI Pro carries the most generous credit structure at 25/50/100%; Power BI Premium and Embedded use a two-tier table (10/25%). Claims must be filed by the end of the calendar month following the incident month via Microsoft Support.
