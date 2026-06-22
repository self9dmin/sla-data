---
title: Kinaxis
slug: kinaxis
vendor_name: Kinaxis
legal_entity: Kinaxis
category: Enterprise & Operations
website: https://www.kinaxis.com
scope: global
sla_url: https://www.kinaxis.com/en/trust-center
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Old sla_url (https://www.kinaxis.com/legal) and services source_url
  (https://www.kinaxis.com/en/legal/service-level-agreement) both return HTTP
  404. Kinaxis does not publish a public availability SLA: per the Trust Center
  (https://www.kinaxis.com/en/trust-center, HTTP 200), "The SaaS Agreement is
  supported by an Order Form and includes our Support Guide, Security Guide,
  availability SLA, and Data Processing Agreement." The availability SLA is
  contractual (signed SaaS Agreement / Order Form) and not publicly disclosed,
  so uptime_commitment, credit_policy, credit_tiers, max_credit_percent,
  claim_deadline_days, has_automatic_credits, min_plan_for_sla, support_tiers,
  and per-service uptime numbers below are UNVERIFIED against the vendor domain
  and left unchanged pending access to the contractual SLA document. URLs
  updated to the confirmed-live Trust Center.

  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no public credit-bearing SLA confirmed.
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
  submission_method: Support
  submission_url: https://www.kinaxis.com/en/trust-center
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
  - id: rapidresponse-control-tower
    name: Control Tower
    category: Supply Chain Visibility
    description: End-to-end supply chain visibility
    sla_eligible: true
    source_url: https://www.kinaxis.com/en/trust-center
  - id: rapidresponse-demand
    name: Demand Planning
    category: Demand Planning
    description: AI-powered demand forecasting
    sla_eligible: true
    source_url: https://www.kinaxis.com/en/trust-center
  - id: rapidresponse-inventory
    name: Inventory Planning
    category: Inventory Management
    description: Multi-echelon inventory optimization
    sla_eligible: true
    source_url: https://www.kinaxis.com/en/trust-center
  - id: rapidresponse-planning
    name: RapidResponse Planning
    category: Supply Chain Planning
    description: Supply chain planning and S&OP
    sla_eligible: true
    source_url: https://www.kinaxis.com/en/trust-center
support:
  tiers:
    - "Standard"
    - "Premier"
  has_24x7: true
  response_is_sla: false
  designated_contact: team
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.kinaxis.com/en/support-services"
  note: "Premier adds 1-on-1 guidance and proactive monitoring; specifics not publicly published."
---

Kinaxis is a Other SaaS provider. Kinaxis does not publish a public availability SLA; per its [Trust Center](https://www.kinaxis.com/en/trust-center), the availability SLA is part of the contractual SaaS Agreement (Order Form, Support Guide, Security Guide, availability SLA, and Data Processing Agreement) and is not publicly disclosed.

<!-- Add human-readable notes about Kinaxis's SLA nuances here. -->
