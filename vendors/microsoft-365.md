---
title: Microsoft 365
slug: microsoft-365
vendor_name: Microsoft 365
legal_entity: Microsoft 365
category: Productivity
website: https://www.microsoft.com/microsoft-365
scope: global
sla_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 100
claim_deadline_days: 60
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: true
review_note: >-
  Verified against the Microsoft Online Services Consolidated SLA (June 2026);
  top-level values are representative across many per-product commitments
  (99.9% suite up to 99.999% Teams Calling). The Microsoft 365 Copilot entry is
  not covered by the consolidated SLA and its 99.9% is unconfirmed.
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
      days: null
      business_days: false
      anchor_point: end_of_month_following_incident
      description: >-
        Microsoft must receive the claim by the end of the Applicable Period
        (calendar month) following the month in which the Incident occurred.
        Example: an Incident on February 15th must be claimed by March 31st.
  submission_method: Microsoft customer support
  submission_url: https://admin.microsoft.com
  required_evidence:
    - Detailed description of the Incident
    - Time and duration of downtime
    - Affected resource names
    - Number and location(s) of affected users
    - Description of errors that occurred during the incident
  review_timeline: Typically within 45 days of receipt of the claim
  credit_application: Applied to Applicable Service Fees
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
  - id: m365-entra-premium
    name: Entra ID (Azure AD) Premium
    category: Identity
    description: User login and token emission
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: m365-exchange
    name: Exchange Online
    category: Productivity
    description: Email send/receive and Outlook Web App
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: m365-copilot
    name: Microsoft 365 Copilot
    category: AI Platform
    description: AI features subject to Service Capacity
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: m365-copilot-studio
    name: Microsoft Copilot Studio
    category: AI Platform
    description: Message requests - capped credits
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: m365-teams-core
    name: Microsoft Teams (Core)
    category: Collaboration
    description: Presence, chat, and meeting initiation
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: m365-onedrive
    name: OneDrive for Business
    category: Storage
    description: File view or edit capability
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: m365-sharepoint
    name: SharePoint Online
    category: Productivity
    description: Document read/write to site collections
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: m365-teams-calling
    name: Teams Calling Plans
    category: Communications
    description: PSTN calls - higher reliability target
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: m365-teams-voice-quality
    name: Teams Voice Quality
    category: Communications
    description: Poor Quality Call percentage metrics
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: m365-windows365
    name: Windows 365 (Cloud PC)
    category: DaaS
    description: Cloud PC connectivity
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
support:
  tiers:
    - "Unified Core"
    - "Unified Advanced"
    - "Unified Performance"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://www.microsoft.com/en-us/microsoft-unified/plan-details"
  note: "Covered under Microsoft Unified; CSAM and proactive services scale by tier. Targets, not credit-backed."
---

Microsoft 365 is a Enterprise Software provider. See the official SLA at [https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services](https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services).

<!-- Add human-readable notes about Microsoft 365's SLA nuances here. -->
