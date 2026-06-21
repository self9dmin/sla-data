---
title: Kong
slug: kong
vendor_name: Kong
legal_entity: Kong
category: Developer Tools
website: https://www.kong.com
scope: global
sla_url: https://konghq.com/legal/service-level-agreement
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Verified against the canonical Kong SLA, but headline per-service uptime
  numbers and the credit-tier table are published only as images and could not
  be extracted as text; 99.99% applies only to Dedicated Cloud Gateways
  multi-region, not all services.
uptime_commitment: 99.99
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 10
    - uptime_below: 99.9
      credit_percent: 25
    - uptime_below: 99
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://support.konghq.com
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
  - id: gateway
    name: Kong Gateway
    category: API Gateway
    description: API gateway
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://konghq.com/legal/service-level-agreement
  - id: insomnia
    name: Kong Insomnia
    category: API Development
    description: API design and testing
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://konghq.com/legal/service-level-agreement
  - id: konnect
    name: Kong Konnect
    category: API Management
    description: Cloud API management
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://konghq.com/legal/service-level-agreement
  - id: mesh
    name: Kong Mesh
    category: Service Mesh
    description: Service mesh
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://konghq.com/legal/service-level-agreement
---

Kong is a Integration & Automation provider. See the official SLA at [https://konghq.com/legal/service-level-agreement](https://konghq.com/legal/service-level-agreement).

<!-- Add human-readable notes about Kong's SLA nuances here. -->
