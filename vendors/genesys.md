---
title: Genesys
slug: genesys
vendor_name: Genesys
legal_entity: Genesys
category: Communication & Collaboration
website: https://www.genesys.com
scope: global
sla_url: https://help.genesys.cloud/articles/service-level-agreements/
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 100
max_credit_percent: 100
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: Genesys Cloud targets 100% uptime with tiered credits of 10% (<99.99%), 30% (<99%) and 100% (<97%) of monthly committed subscription fees; claim within 30 days. Credits apply to Annual Prepay or Annual Month-to-Month contracts.
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 30
    - uptime_below: 97
      credit_percent: 100
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
support:
  channels:
    - phone
    - portal
  professional_services: true
  has_24x7: true
  fastest_response: 10 min (Sev1, phone)
  note: Sev1 via phone (24x7); other severities via portal at 2 hours. Professional Services sold separately. Sev1 via phone (24x7); other severities via portal at 2 hours. Professional Services sold separately.
  source_url: https://help.genesys.cloud/articles/service-level-agreements/
---

Genesys is a Communication & Collaboration provider. The SLA is incorporated into the [Genesys Master Subscription Agreement, Cloud Services](https://www.genesys.com/company/legal-docs/genesys-master-subscription-agreement-for-cloud-services), which defers the specific availability metrics and service credits to the customer-specific Supplemental Terms identified in each Services Order.

<!-- Add human-readable notes about Genesys's SLA nuances here. -->
