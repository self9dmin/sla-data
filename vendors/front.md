---
title: Front
slug: front
vendor_name: Front
legal_entity: Front
category: Communication & Collaboration
website: https://www.front.com
scope: global
sla_url: https://front.com/legal/saas-services-agreement
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  2026-06-19: Previous sla_url https://front.com/legal/terms returns HTTP 404
  (dead). Front does not publish a public uptime SLA with service credits on its
  own domain. The front.com/legal index lists no Service Level Agreement, SLA,
  uptime, or availability document, and front.com/legal/sla is 404. The
  canonical live legal doc is the SaaS Services Agreement, which DISCLAIMS
  availability rather than committing to it: "FRONT SHALL NOT BE LIABLE FOR
  DELAYS, INTERRUPTIONS, SERVICE FAILURES OR OTHER PROBLEMS INHERENT IN USE OF
  THE INTERNET..." (https://front.com/legal/saas-services-agreement). The
  Supplemental Terms also contain no uptime/credit terms. Therefore the existing
  uptime_commitment (99.9), max_credit_percent (25), credit_tiers, claim_process,
  and min_plan_for_sla values could NOT be verified against any front.com source
  and are left unchanged pending review. sla_url repointed from the dead
  /legal/terms to the live SaaS Services Agreement.

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
  submission_url: https://help.front.com
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
  - id: analytics
    name: Front Analytics
    category: Analytics
    description: Team analytics
    sla_eligible: true
    source_url: https://front.com/legal/saas-services-agreement
  - id: chat
    name: Front Chat
    category: Chat
    description: Live chat
    sla_eligible: true
    source_url: https://front.com/legal/saas-services-agreement
  - id: inbox
    name: Front Inbox
    category: Email
    description: Shared inbox platform
    sla_eligible: true
    source_url: https://front.com/legal/saas-services-agreement
  - id: workflows
    name: Front Workflows
    category: Automation
    description: Workflow automation
    sla_eligible: true
    source_url: https://front.com/legal/saas-services-agreement
support:
  tiers:
    - "Starter"
    - "Growth"
    - "Scale"
    - "Premier"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: "https://front.com/pricing"
  note: "24/5 helpdesk; no published response-time SLA with credits."
---

Front is a Communication & Collaboration provider. Front does not publish a public uptime SLA with service credits on its own domain; the canonical legal terms are the [SaaS Services Agreement](https://front.com/legal/saas-services-agreement), which disclaims availability rather than committing to an uptime percentage. The uptime/credit values in this record are unverified and flagged for review.

<!-- Add human-readable notes about Front's SLA nuances here. -->
