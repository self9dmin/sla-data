---
title: Netlify
slug: netlify
vendor_name: Netlify
legal_entity: Netlify
category: Cloud Infrastructure
website: https://www.netlify.com
scope: global
sla_url: https://www.netlify.com/pricing/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
uptime_commitment: 99.99
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: true
review_note: >-
  2026-06-19: Configured sla_url
  (https://www.netlify.com/legal/service-level-agreement/) returns HTTP 404, no
  standalone public SLA document exists. Netlify's 99.99% uptime SLA is
  Enterprise-tier only and confirmed verbatim on the pricing page ("99.99% SLA"
  under Enterprise) and enterprise page ("99.99% uptime SLA and 24/7 support").
  The public Self-Serve Subscription Agreement explicitly states free/self-serve
  tiers have "no service level commitments." Full credit terms live in the
  non-public Enterprise Master Subscription Agreement. Therefore the following
  fields could NOT be verified on netlify.com and are left UNCHANGED pending
  access to the Enterprise agreement: min_plan_for_sla (likely should be
  "enterprise", not "standard", no "Standard" plan exists; public tiers are
  Free/Personal/Pro/Enterprise), credit_policy/credit_tiers, max_credit_percent,
  claim_deadline_days, claim_process, per-service uptime_commitments and their
  source_urls. has_automatic_credits and 99.99 uptime are plausible but
  credit/claim specifics are unverifiable from public sources. 2026-06-20
  cleanup: removed unverified numeric SLA values per the above note; no public
  credit-bearing SLA confirmed.
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
  submission_method: Support Ticket
  submission_url: https://www.netlify.com/support/
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 15 business days
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
  - id: builds
    name: Netlify Build
    category: CI/CD
    description: Build automation
    sla_eligible: true
    source_url: https://www.netlify.com/pricing/
  - id: edge-functions
    name: Netlify Edge Functions
    category: Serverless
    description: Edge compute functions
    sla_eligible: true
    source_url: https://www.netlify.com/pricing/
  - id: forms
    name: Netlify Forms
    category: Backend
    description: Form handling
    sla_eligible: true
    source_url: https://www.netlify.com/pricing/
  - id: functions
    name: Netlify Functions
    category: Serverless
    description: Serverless functions (AWS Lambda)
    sla_eligible: true
    source_url: https://www.netlify.com/pricing/
  - id: hosting
    name: Netlify Hosting
    category: Hosting
    description: Static site hosting with CDN
    sla_eligible: true
    source_url: https://www.netlify.com/pricing/
  - id: identity
    name: Netlify Identity
    category: Identity
    description: User authentication
    sla_eligible: true
    source_url: https://www.netlify.com/pricing/
---

Netlify is a Cloud Infrastructure provider. Netlify's 99.99% uptime SLA is an Enterprise-tier commitment; see the [Netlify pricing page](https://www.netlify.com/pricing/) and [Netlify for enterprises](https://www.netlify.com/enterprise/). There is no public standalone SLA document, detailed service-credit terms are contained in the non-public Enterprise Master Subscription Agreement.

<!-- Add human-readable notes about Netlify's SLA nuances here. -->
