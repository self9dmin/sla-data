---
title: Contentful
slug: contentful
vendor_name: Contentful
legal_entity: Contentful
category: Content & Media
website: https://www.contentful.com
scope: global
sla_url: https://www.contentful.com/legal/service-level-agreement/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
has_automatic_credits: false
min_plan_for_sla: success
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: impacted_month
      description: >-
        Open a Support Ticket within thirty (30) days following an Impacted
        Month
  submission_method: Support Ticket
  submission_url: https://support.contentful.com/
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Scheduled Maintenance (announced 3+ business days ahead, max 4 hours/month)
  - Force Majeure Events and factors outside Contentful's reasonable control
  - Customer applications, equipment, and third-party issues
  - Beta services and non-generally-available features
  - Customer suspension or termination scenarios
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
  - id: delivery
    name: Content Delivery API
    category: CMS
    description: >-
      Content delivery endpoints (cdn.contentful.com,
      graphql.contentful.com)
    sla_eligible: true
    source_url: https://www.contentful.com/legal/service-level-agreement/
  - id: asset-cdn
    name: Content Asset CDN
    category: Media
    description: >-
      Asset and image delivery (assets.contentful.com,
      images.contentful.com, videos.contentful.com, downloads.contentful.com)
    sla_eligible: true
    source_url: https://www.contentful.com/legal/service-level-agreement/
  - id: management
    name: Content Management
    category: CMS
    description: >-
      Management and authoring endpoints (api.contentful.com,
      preview.contentful.com, app.contentful.com, compose.contentful.com,
      launch.contentful.com)
    sla_eligible: true
    source_url: https://www.contentful.com/legal/service-level-agreement/
  - id: personalization
    name: Contentful Personalization Experience API
    category: CMS
    description: >-
      Personalization experience endpoints (experience.eu.ninetailed.co,
      experience.ninetailed.co)
    sla_eligible: true
    source_url: https://www.contentful.com/legal/service-level-agreement/
support:
  tiers:
    - "Standard"
    - "Silver"
    - "Gold"
    - "Platinum"
    - "Titanium"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.contentful.com/services/customer-support/"
  note: "Premium tiers (Silver-Titanium) assign a support engineer and TAM guidance; response times are targets."
---

Contentful is a Content & Media provider. See the official SLA at [https://www.contentful.com/legal/service-level-agreement/](https://www.contentful.com/legal/service-level-agreement/).

<!-- Add human-readable notes about Contentful's SLA nuances here. -->
