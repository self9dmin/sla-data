---
title: Pipedrive
slug: pipedrive
vendor_name: Pipedrive
legal_entity: Pipedrive
category: CRM & Marketing
website: https://www.pipedrive.com
scope: global
sla_url: https://www.pipedrive.com/en/terms-of-service
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  As of 2026-06-19, Pipedrive publishes no public uptime SLA with service
  credits. The Terms of Service (https://www.pipedrive.com/en/terms-of-service,
  Section 5.1) only commits to "use commercially reasonable efforts to make the
  Pipedrive Services available 24 hours a day, 7 days a week" with no uptime
  percentage, no credits, and no claim process. No SLA/uptime document is listed
  on the Legal Hub (https://www.pipedrive.com/en/legal) or in the Supplemental
  Terms, and the status page (https://status.pipedrive.com) states no
  commitment. The uptime_commitment of 99.9 (overall and per-service) is NOT
  supported by any official Pipedrive page and could not be verified; left
  unchanged pending a definitive source. 2026-06-20 cleanup: removed unverified
  numeric SLA values per the above note; no public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: no_credit
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://support.pipedrive.com
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
  - id: campaigns
    name: Pipedrive Campaigns
    category: Email Marketing
    description: Email campaigns
    sla_eligible: true
    source_url: https://www.pipedrive.com/en/terms-of-service
  - id: crm
    name: Pipedrive CRM
    category: CRM
    description: Sales CRM platform
    sla_eligible: true
    source_url: https://www.pipedrive.com/en/terms-of-service
  - id: leads
    name: Pipedrive LeadBooster
    category: Lead Generation
    description: Lead generation tools
    sla_eligible: true
    source_url: https://www.pipedrive.com/en/terms-of-service
  - id: projects
    name: Pipedrive Projects
    category: Project Management
    description: Sales project management
    sla_eligible: true
    source_url: https://www.pipedrive.com/en/terms-of-service
support:
  tiers:
    - "Essential"
    - "Advanced"
    - "Professional"
    - "Power"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: none
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: "https://www.pipedrive.com/en/pricing"
  note: "24/7 chat/phone on Power and Enterprise; personalized onboarding above a spend threshold."
---

Pipedrive is a CRM & Sales provider. See the official SLA at [https://www.pipedrive.com/en/terms-of-service](https://www.pipedrive.com/en/terms-of-service).

<!-- Add human-readable notes about Pipedrive's SLA nuances here. -->
