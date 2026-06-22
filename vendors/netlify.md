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
support:
  tiers:
    - "Standard"
    - "Business Day Support"
    - "Premium Support"
  has_24x7: true
  response_is_sla: false
  designated_contact: none
  architecture_review: false
  professional_services: false
  success_program: false
  training: false
  pricing: custom
  source_url: "https://www.netlify.com/support-scope/"
  note: "Enterprise can purchase Business Day or Premium Support; response times not publicly published."
---

Netlify is a Cloud Infrastructure provider. Netlify's 99.99% uptime SLA is an Enterprise-tier commitment; see the [Netlify pricing page](https://www.netlify.com/pricing/) and [Netlify for enterprises](https://www.netlify.com/enterprise/). There is no public standalone SLA document, detailed service-credit terms are contained in the non-public Enterprise Master Subscription Agreement.

<!-- Add human-readable notes about Netlify's SLA nuances here. -->
