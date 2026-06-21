---
title: Zapier
slug: zapier
vendor_name: Zapier
legal_entity: Zapier
category: Developer Tools
website: https://www.zapier.com
scope: global
sla_url: https://zapier.com/legal
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Previous sla_url https://zapier.com/legal/service-level-agreement returns HTTP
  404 (confirmed 2026-06-19). Zapier does not publish a public standalone SLA
  page with uptime/credit terms; the uptime SLA is Enterprise-tier and provided
  under the non-public Enterprise Agreement. sla_url repointed to the live legal
  index (https://zapier.com/legal, HTTP 200). All SLA numbers
  (uptime_commitment, credit tiers, max_credit_percent, claim_deadline_days,
  has_automatic_credits, min_plan_for_sla) are UNVERIFIED against any official
  zapier.com page and left unchanged pending access to the Enterprise Agreement.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
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
  submission_url: https://zapier.com/help
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
  - id: interfaces
    name: Zapier Interfaces
    category: App Builder
    description: No-code app builder
    sla_eligible: true
    source_url: https://zapier.com/legal/terms-of-service
  - id: tables
    name: Zapier Tables
    category: Database
    description: No-code database
    sla_eligible: true
    source_url: https://zapier.com/legal/terms-of-service
  - id: transfer
    name: Zapier Transfer
    category: Data Migration
    description: Bulk data transfer
    sla_eligible: true
    source_url: https://zapier.com/legal/terms-of-service
  - id: zaps
    name: Zapier Zaps
    category: Automation
    description: Workflow automations
    sla_eligible: true
    source_url: https://zapier.com/legal/terms-of-service
---

Zapier is a Integration & Automation provider. See Zapier's legal documents at [https://zapier.com/legal](https://zapier.com/legal). Note: Zapier does not publish a public standalone SLA; its uptime SLA is Enterprise-tier and provided under the Enterprise Agreement.

<!-- Add human-readable notes about Zapier's SLA nuances here. -->
