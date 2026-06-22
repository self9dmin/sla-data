---
title: Tableau
slug: tableau
vendor_name: Tableau
legal_entity: Tableau
category: Analytics & BI
website: https://www.tableau.com
scope: global
sla_url: https://www.tableau.com/legal
last_verified: '2026-06-20'
last_updated: '2026-06-19'
needs_review: true
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Salesforce Support
  submission_url: https://www.tableau.com/support
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
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
  - id: cloud
    name: Tableau Cloud
    category: BI
    description: Cloud-hosted analytics platform
    sla_eligible: true
    source_url: https://www.tableau.com/legal/tosa
  - id: data-management
    name: Tableau Data Management
    category: Data Governance
    description: Data cataloging and governance
    sla_eligible: true
    source_url: https://www.tableau.com/legal/tosa
  - id: prep
    name: Tableau Prep
    category: Data Preparation
    description: Data preparation and cleaning
    sla_eligible: true
    source_url: https://www.tableau.com/legal/tosa
  - id: server
    name: Tableau Server
    category: BI
    description: Self-hosted analytics server
    sla_eligible: true
    source_url: https://www.tableau.com/legal/tosa
support:
  tiers:
    - "Standard"
    - "Premier"
    - "Signature"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://www.salesforce.com/services/success-plans/signature/"
  note: "Tableau uses Salesforce Success Plans; Signature priced as % of net spend. Targets, not credit-backed."
---

Tableau is a Business Intelligence provider. See the official SLA at [https://www.tableau.com/legal](https://www.tableau.com/legal).

<!-- Add human-readable notes about Tableau's SLA nuances here. -->
