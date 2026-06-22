---
title: SentinelOne
slug: sentinelone
vendor_name: SentinelOne
legal_entity: SentinelOne
category: Security & Identity
website: https://www.sentinelone.com
scope: global
sla_url: https://www.sentinelone.com/legal/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  No public uptime SLA or service-credit policy is published on sentinelone.com
  (legal docs cover only support response times), so all numeric SLA fields here
  are unverified.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: no_sla
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support Portal
  submission_url: https://www.sentinelone.com/support/
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
  - id: cloud
    name: Singularity Cloud
    category: Cloud Security
    description: Cloud workload protection
    sla_eligible: true
    source_url: https://www.sentinelone.com/legal/terms-of-service/
  - id: endpoint
    name: Singularity Endpoint
    category: EDR
    description: Endpoint detection and response
    sla_eligible: true
    source_url: https://www.sentinelone.com/legal/terms-of-service/
  - id: identity
    name: Singularity Identity
    category: Identity Security
    description: Identity threat detection
    sla_eligible: true
    source_url: https://www.sentinelone.com/legal/terms-of-service/
  - id: xdr
    name: Singularity XDR
    category: XDR
    description: Extended detection and response
    sla_eligible: true
    source_url: https://www.sentinelone.com/legal/terms-of-service/
support:
  tiers:
    - "Standard"
    - "Premium Support"
    - "Technical Account Management"
  has_24x7: true
  fastest_response: "2 hours"
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: flat
  source_url: "https://www.sentinelone.com/global-services/services-overview/"
  note: "Premium adds 24/7 and a published response target; TAM sold separately."
---

SentinelOne is a Security & Identity provider. See the official SLA at [https://www.sentinelone.com/legal/](https://www.sentinelone.com/legal/).

<!-- Add human-readable notes about SentinelOne's SLA nuances here. -->
