---
title: Postman
slug: postman
vendor_name: Postman
legal_entity: Postman
category: Developer Tools
website: https://www.postman.com
scope: global
sla_url: https://www.postman.com/legal/enterprise-sla/
last_verified: '2026-06-20'
last_updated: '2026-06-19'
needs_review: false
review_note: 'Verified via browser 2026-06-20 against postman.com/legal/enterprise-sla: 99.9% monthly uptime commitment (Enterprise plan); sole remedy is termination with pro-rated refund after 3 consecutive (or 4 of 12) months'' breach — no service credits.'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: termination_with_refund
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://support.postman.com
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
  - id: mock-servers
    name: Mock Servers
    category: API Mocking
    description: API mock servers
    sla_eligible: true
    source_url: https://www.postman.com/legal/enterprise-sla/
  - id: api-client
    name: Postman API Client
    category: API Testing
    description: API testing and development
    sla_eligible: true
    source_url: https://www.postman.com/legal/enterprise-sla/
  - id: collections
    name: Postman Collections
    category: API Documentation
    description: API collections and docs
    sla_eligible: true
    source_url: https://www.postman.com/legal/enterprise-sla/
  - id: flows
    name: Postman Flows
    category: API Orchestration
    description: Visual API workflows
    sla_eligible: true
    source_url: https://www.postman.com/legal/enterprise-sla/
  - id: monitors
    name: Postman Monitors
    category: API Monitoring
    description: Scheduled API monitoring
    sla_eligible: true
    source_url: https://www.postman.com/legal/enterprise-sla/
---

Postman is a DevOps & Development provider. See the official SLA at [https://www.postman.com/legal/enterprise-sla/](https://www.postman.com/legal/enterprise-sla/).

<!-- Add human-readable notes about Postman's SLA nuances here. -->
