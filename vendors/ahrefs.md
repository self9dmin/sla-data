---
title: Ahrefs
slug: ahrefs
vendor_name: Ahrefs
legal_entity: Ahrefs
category: CRM & Marketing
website: https://www.ahrefs.com
scope: global
sla_url: https://ahrefs.com/legal/terms
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Ahrefs publishes no public uptime SLA with service credits. The Terms of
  Service (https://ahrefs.com/legal/terms) provide the service "as is" and "as
  available" with no availability guarantee or credit remedy. The only
  availability statement is on the Security Measures page
  (https://ahrefs.com/legal/security-measures): "The infrastructure providers
  use commercially reasonable efforts to ensure a minimum of 99.8% uptime" -
  this is a best-effort infrastructure note, not a binding per-service SLA, and
  cites 99.8% (not the 99.9% in this file). Existing uptime/credit numbers are
  unverified and left unchanged pending a real SLA source. 2026-06-20 cleanup:
  removed unverified numeric SLA values per the above note; no public
  credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://help.ahrefs.com
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
  - id: content-explorer
    name: Content Explorer
    category: Content
    description: Content research tool
    sla_eligible: true
    source_url: https://ahrefs.com/legal/terms
  - id: keywords
    name: Keywords Explorer
    category: SEO
    description: Keyword research tool
    sla_eligible: true
    source_url: https://ahrefs.com/legal/terms
  - id: rank-tracker
    name: Rank Tracker
    category: SEO
    description: Keyword rank tracking
    sla_eligible: true
    source_url: https://ahrefs.com/legal/terms
  - id: audit
    name: Site Audit
    category: SEO
    description: Technical SEO audit
    sla_eligible: true
    source_url: https://ahrefs.com/legal/terms
  - id: site-explorer
    name: Site Explorer
    category: SEO
    description: Backlink and organic traffic analysis
    sla_eligible: true
    source_url: https://ahrefs.com/legal/terms
support:
  tiers:
    - "Standard (all paid plans)"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: false
  success_program: true
  training: true
  pricing: custom
  source_url: "https://ahrefs.com/enterprise"
  note: "Enterprise adds a dedicated account manager, tailored onboarding, and 24/7 multilingual chat."
---

Ahrefs is a Marketing & Analytics provider. Ahrefs does not publish a public uptime SLA with service credits; the [Terms of Service](https://ahrefs.com/legal/terms) provide the service "as is" / "as available" with no availability guarantee. The only availability statement is in the [Security Measures](https://ahrefs.com/legal/security-measures) page (99.8% best-effort infrastructure uptime, not a binding SLA).

<!-- Add human-readable notes about Ahrefs's SLA nuances here. -->
