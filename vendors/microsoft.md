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
review_note: 'Umbrella Microsoft Online Services entry; values are representative across many services per the consolidated SLA (June 2026). Claim deadline differs by service: Azure within 60 days of the Incident; all other Services by end of the Applicable Period following the month of the Incident.'
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
---

Microsoft is a Other SaaS provider. See the official SLA at [https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services](https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services).

<!-- Add human-readable notes about Microsoft's SLA nuances here. -->
