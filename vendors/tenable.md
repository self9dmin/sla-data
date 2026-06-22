---
title: Tenable
slug: tenable
vendor_name: Tenable
legal_entity: Tenable
category: Security & Identity
website: https://www.tenable.com
scope: global
sla_url: https://static.tenable.com/prod_docs/Service_Level_Commitment.pdf
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.95
max_credit_percent: 20
claim_deadline_days: 10
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 20
  credit_tiers:
    - uptime_below: 99.95
      credit_percent: 10
    - uptime_below: 95
      credit_percent: 15
    - uptime_below: 90
      credit_percent: 20
claim_process:
  deadlines:
    - type: submission
      days: 10
      business_days: false
      anchor_point: end_of_month
      description: Submit within 10 days of the end of the applicable month
  submission_method: Email
  submission_url: mailto:credits@tenable.com
  required_evidence: []
  review_timeline: Not specified
  credit_application: Non-refundable; may only be applied to future upgrades or renewals of the affected Hosted Services
global_exclusions:
  - Regular Maintenance
  - Scheduled Maintenance
  - Force Majeure Events
  - Customer breach of the SLA or Agreement
  - Customer environment, internal networks, computer systems, firewalls or inability to connect to the internet
  - Failures of upstream service providers (e.g. AWS)
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
  - id: asm
    name: Tenable Attack Surface Management
    category: ASM
    description: External attack surface discovery
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://static.tenable.com/prod_docs/Service_Level_Commitment.pdf
  - id: cs
    name: Tenable Cloud Security
    category: CSPM
    description: Cloud security posture management
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://static.tenable.com/prod_docs/Service_Level_Commitment.pdf
  - id: ad
    name: Tenable Identity Exposure
    category: Identity Security
    description: Active Directory security
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://static.tenable.com/prod_docs/Service_Level_Commitment.pdf
  - id: lumin
    name: Tenable Lumin
    category: Risk Analytics
    description: Cyber exposure analytics
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://static.tenable.com/prod_docs/Service_Level_Commitment.pdf
  - id: io
    name: Tenable Vulnerability Management
    category: Vulnerability Management
    description: Cloud-based vulnerability scanning
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://static.tenable.com/prod_docs/Service_Level_Commitment.pdf
support:
  tiers:
    - "Standard"
    - "Advanced"
    - "Premier"
    - "Elite"
    - "Dedicated Elite"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.tenable.com/support/plans"
  note: "Five tiers; 24/7 from Advanced up; TAM add-on; Dedicated Elite assigns a named engineer."
---

Tenable is a Security & Identity provider. See the official SLA at [https://static.tenable.com/prod_docs/Service_Level_Commitment.pdf](https://static.tenable.com/prod_docs/Service_Level_Commitment.pdf).

<!-- Add human-readable notes about Tenable's SLA nuances here. -->
