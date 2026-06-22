---
title: Microsoft
slug: microsoft
vendor_name: Microsoft
legal_entity: Microsoft
category: Enterprise & Operations
website: https://www.microsoft.com
scope: global
sla_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: true
uptime_commitment: 99.9
max_credit_percent: 100
claim_deadline_days: 60
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
      days: 60
      business_days: false
      anchor_point: incident_date
      description: For Microsoft Azure, claim must be received within 60 days of the Incident
    - type: submission
      business_days: false
      anchor_point: end_of_applicable_period
      description: For all other Services, claim must be received by the end of the Applicable Period following the month in which the Incident occurred
  submission_method: Microsoft Support
  submission_url: https://support.microsoft.com
  required_evidence:
    - Detailed description of the Incident
    - Time and duration of downtime
    - Affected resource names
    - Number and location(s) of affected users
    - Description of errors that occurred during the incident
  review_timeline: Typically within 45 days of receipt of the claim
  credit_application: Applied to next invoice
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Online Services or service tiers provided free of charge
  - Previews
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
  - id: powerbi-embedded
    name: Power BI Embedded
    category: Analytics
    description: Embedded analytics for applications
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: powerbi-report-server
    name: Power BI Report Server
    category: Analytics
    description: On-premises report server (no cloud SLA)
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: powerbi-service
    name: Power BI Service
    category: Analytics
    description: Cloud-based BI service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
support:
  tiers:
    - "Unified Core"
    - "Unified Advanced"
    - "Unified Performance"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://www.microsoft.com/en-us/microsoft-unified/plan-details"
  note: "Azure Sev1 15-min response under Unified; CSAM and proactive hours scale by tier. Targets, not credit-backed."
---

Microsoft is a Other SaaS provider. See the official SLA at [https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services](https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services).

<!-- Add human-readable notes about Microsoft's SLA nuances here. -->
