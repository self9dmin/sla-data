---
title: Sanity
slug: sanity
vendor_name: Sanity
legal_entity: Sanity
category: Content & Media
website: https://www.sanity.com
scope: global
sla_url: https://www.sanity.io/legal/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 10
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 10
  credit_tiers:
    - uptime_below: 99.95
      credit_percent: 10
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://www.sanity.io/contact
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: Not specified
  credit_application: Applied against fees for a Renewal Term or extends the current Subscription term; not exchangeable for monetary amounts
global_exclusions:
  - Scheduled maintenance and upgrades
  - Third-party system interruptions
  - Beta or trial services
  - Acts or omissions of Subscriber or third parties
  - Subscriber or third-party hardware or software
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
      critical: < 2 hours
      high: < 12 hours
services:
  - id: cdn
    name: Asset CDN
    category: Media
    description: Image and file CDN
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.sanity.io/legal/sla
  - id: content-lake
    name: Content Lake
    category: CMS
    description: Real-time content database
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.sanity.io/legal/sla
  - id: api
    name: Sanity API
    category: CMS
    description: GROQ and GraphQL APIs
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.sanity.io/legal/sla
  - id: studio
    name: Sanity Studio
    category: CMS
    description: Content editing studio
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.sanity.io/legal/sla
support:
  tiers:
    - "Free"
    - "Growth"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.sanity.io/enterprise"
  note: "Enterprise includes a dedicated Slack channel with engineers; response times are targets."
---

Sanity is a Content & Media provider. See the official SLA at [https://www.sanity.io/legal/sla](https://www.sanity.io/legal/sla).

Sanity's uptime SLA is Enterprise-only (Enterprise E1: 99.9%; Enterprise E2: 99.95%). The single service credit is 10% of (Annual Service Fee / 12) when monthly availability falls between 99.9% and 99.95%; there are no further tiers and no 100% credit cap. Credits must be claimed within 30 days, are applied against Renewal Term fees (or extend the subscription), and are not exchangeable for cash. Standard plan has no SLA.

<!-- Add human-readable notes about Sanity's SLA nuances here. -->
