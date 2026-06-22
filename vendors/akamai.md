---
title: Akamai
slug: akamai
vendor_name: Akamai
legal_entity: Akamai
category: CDN & Edge
website: https://www.akamai.com
scope: global
sla_url: https://www.akamai.com/legal/sla-compute
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Only the Compute (Linode) SLA is verifiable on akamai.com (99.99% monthly,
  pro-rata credit); the CDN/delivery/security SLAs backing the 100% uptime and
  tiered credits here are gated behind Control Center login and remain
  unverified.
uptime_commitment: 100
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 100
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
  submission_method: Control Center
  submission_url: https://control.akamai.com
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
  - id: waf
    name: Akamai App & API Protector
    category: Security
    description: WAF and API security
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.akamai.com/legal/sla-compute
  - id: bot
    name: Akamai Bot Manager
    category: Security
    description: Bot detection and management
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.akamai.com/legal/sla-compute
  - id: cdn
    name: Akamai CDN
    category: CDN
    description: Content delivery network
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.akamai.com/legal/sla-compute
  - id: compute
    name: Akamai Connected Cloud (Linode)
    category: Cloud Infrastructure
    description: Cloud compute (formerly Linode)
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.akamai.com/legal/sla-compute
  - id: edge-dns
    name: Akamai Edge DNS
    category: DNS
    description: Authoritative DNS
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.akamai.com/legal/sla-compute
  - id: image
    name: Akamai Image & Video Manager
    category: Media
    description: Media optimization
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.akamai.com/legal/sla-compute
  - id: ddos
    name: Akamai Prolexic
    category: Security
    description: DDoS mitigation
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.akamai.com/legal/sla-compute
support:
  tiers:
    - "Standard Support"
    - "Advanced Service and Support"
    - "Premium Service and Support 3.0"
  has_24x7: true
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.akamai.com/global-services/services/standard-support"
  note: "Premium 3.0 adds a TAM and proactive guidance; Standard is 24/7 pooled support."
---

Akamai is a CDN & Edge provider. See the official SLA at [https://www.akamai.com/legal/sla-compute](https://www.akamai.com/legal/sla-compute).

Note: Akamai publishes per-product SLAs. The Compute (Linode) SLA above is the only one publicly accessible on akamai.com; the CDN, delivery, and security product SLAs are available only through Akamai Control Center.

<!-- Add human-readable notes about Akamai's SLA nuances here. -->
