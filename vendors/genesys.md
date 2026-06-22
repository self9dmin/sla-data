---
title: Genesys
slug: genesys
vendor_name: Genesys
legal_entity: Genesys
category: Communication & Collaboration
website: https://www.genesys.com
scope: global
sla_url: https://www.genesys.com/company/legal-docs/genesys-master-subscription-agreement-for-cloud-services
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
  submission_method: My Support Portal
  submission_url: https://help.genesys.com
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
  - id: ai
    name: Genesys AI
    category: AI
    description: Bots and predictive engagement
    sla_eligible: true
    source_url: https://www.genesys.com/company/legal-docs/genesys-master-subscription-agreement-for-cloud-services
  - id: analytics
    name: Genesys Analytics
    category: Analytics
    description: Reporting and insights
    sla_eligible: true
    source_url: https://www.genesys.com/company/legal-docs/genesys-master-subscription-agreement-for-cloud-services
  - id: voice
    name: Genesys Cloud Voice
    category: Voice
    description: Inbound/outbound voice
    sla_eligible: true
    source_url: https://www.genesys.com/company/legal-docs/genesys-master-subscription-agreement-for-cloud-services
  - id: digital
    name: Genesys Digital Channels
    category: Digital
    description: Chat, email, messaging
    sla_eligible: true
    source_url: https://www.genesys.com/company/legal-docs/genesys-master-subscription-agreement-for-cloud-services
  - id: wfm
    name: Workforce Management
    category: WFM
    description: Scheduling and forecasting
    sla_eligible: true
    source_url: https://www.genesys.com/company/legal-docs/genesys-master-subscription-agreement-for-cloud-services
---

Genesys is a Communication & Collaboration provider. The SLA is incorporated into the [Genesys Master Subscription Agreement, Cloud Services](https://www.genesys.com/company/legal-docs/genesys-master-subscription-agreement-for-cloud-services), which defers the specific availability metrics and service credits to the customer-specific Supplemental Terms identified in each Services Order.

<!-- Add human-readable notes about Genesys's SLA nuances here. -->
