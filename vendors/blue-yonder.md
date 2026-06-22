---
title: Blue Yonder
slug: blue-yonder
vendor_name: Blue Yonder
legal_entity: Blue Yonder
category: Enterprise & Operations
website: https://blueyonder.com
scope: global
sla_url: https://blueyonder.com/legal
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
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
  submission_method: Customer Success Manager
  submission_url: https://success.blueyonder.com/s/support-information?language=en_US
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
  - id: by-demand-planning
    name: Demand Planning
    category: Demand Planning
    description: AI-driven demand forecasting
    sla_eligible: true
    source_url: https://blueyonder.com/legal
  - id: by-luminate-commerce
    name: Luminate Commerce
    category: Commerce
    description: Omnichannel fulfillment
    sla_eligible: true
    source_url: https://blueyonder.com/legal
  - id: by-luminate-logistics
    name: Luminate Logistics
    category: Logistics
    description: Transportation and warehouse management
    sla_eligible: true
    source_url: https://blueyonder.com/legal
  - id: by-luminate-planning
    name: Luminate Planning
    category: Supply Chain Planning
    description: End-to-end supply chain planning
    sla_eligible: true
    source_url: https://blueyonder.com/legal
  - id: by-warehouse-management
    name: Warehouse Management
    category: WMS
    description: Warehouse management system
    sla_eligible: true
    source_url: https://blueyonder.com/legal
---

Blue Yonder is a Enterprise Software provider. See the official SLA at [https://blueyonder.com/legal](https://blueyonder.com/legal).

<!-- Add human-readable notes about Blue Yonder's SLA nuances here. -->
