---
title: ActiveCampaign
slug: activecampaign
vendor_name: ActiveCampaign
legal_entity: ActiveCampaign
category: CRM & Marketing
website: https://www.activecampaign.com
scope: global
sla_url: https://www.activecampaign.com/legal/service-level-agreement
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.5
max_credit_percent: 10
claim_deadline_days: 10
has_automatic_credits: false
min_plan_for_sla: enterprise
needs_review: false
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 10
  credit_tiers:
    - uptime_below: 99.5
      credit_percent: 5
    - uptime_below: 98
      credit_percent: 10
claim_process:
  deadlines:
    - type: submission
      days: 10
      business_days: true
      anchor_point: reporting_period_end
      description: >-
        Client must request a credit within ten business days after the end of
        the relevant Reporting Period
  submission_method: Written request to ActiveCampaign (method not specified in SLA)
  submission_url: null
  required_evidence:
    - All credit requests verified against ActiveCampaign's system records
  review_timeline: Not specified
  credit_application: >-
    Applied to reduce, on a dollar-for-dollar basis, the amount payable for the
    following Reporting Period
global_exclusions:
  - Maintenance Time (scheduled and emergency unscheduled maintenance)
  - Force majeure events
  - Client modifications to API or use of Services
  - Third-party technology or services issues
  - Unauthorized use, client negligence or errors
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: false
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
  - id: email
    name: Email Marketing
    category: Email Marketing
    description: Email marketing campaigns
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.activecampaign.com/legal/service-level-agreement
  - id: automation
    name: Marketing Automation
    category: Marketing Automation
    description: Automated workflows
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.activecampaign.com/legal/service-level-agreement
  - id: crm
    name: Sales CRM
    category: CRM
    description: Sales CRM
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.activecampaign.com/legal/service-level-agreement
  - id: messaging
    name: Site Messaging
    category: Chat
    description: Website messaging
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.activecampaign.com/legal/service-level-agreement
support:
  tiers:
    - "Basic (Starter/Plus)"
    - "Priority (Pro/Enterprise)"
  has_24x7: false
  response_is_sla: false
  designated_contact: team
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: "https://www.activecampaign.com/pricing"
  note: "Enterprise plans get a dedicated account team and priority support; no published response-time SLA."
---

ActiveCampaign is a Marketing & Analytics provider. See the official SLA at [https://www.activecampaign.com/legal/service-level-agreement](https://www.activecampaign.com/legal/service-level-agreement).

<!-- Add human-readable notes about ActiveCampaign's SLA nuances here. -->
