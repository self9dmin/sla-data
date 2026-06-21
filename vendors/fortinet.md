---
title: Fortinet
slug: fortinet
vendor_name: Fortinet
legal_entity: Fortinet
category: Security & Identity
website: https://www.fortinet.com
scope: global
sla_url: https://www.fortinet.com/support/support-services
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Could not verify a public uptime SLA or service-credit policy for
  FortiCloud / FortiGate Cloud on fortinet.com (checked 2026-06-19). The
  listed sla_url (https://www.fortinet.com/support/support-services) is live
  but is a FortiCare support-services marketing page with no quantified
  uptime commitment, service credits, or claim deadline. Fortinet's legal
  index (https://www.fortinet.com/corporate/about-us/legal) publishes SLAs
  only for specific products (FortiCNAPP, Opaq) - not FortiCloud/FortiGate
  Cloud. The Opaq SLA (99.999% availability, credits capped at 100% MRC) is a
  different/legacy product and does not cover these services. Existing
  numbers (uptime 99.99, max_credit 25, tiered credits, 30-day claim) are
  unverifiable on the vendor domain and were left unchanged - they may be
  fabricated or contract-only. Fortinet cloud SLAs appear to be contractual
  (per-order), not publicly published.

  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no public credit-bearing SLA confirmed.
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
  submission_method: FortiCare
  submission_url: https://support.fortinet.com
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
  - id: fortianalyzer-cloud
    name: FortiAnalyzer Cloud
    category: SIEM
    description: Security analytics and logging
    sla_eligible: true
    source_url: https://www.fortinet.com/support/support-services
  - id: forticloud-management
    name: FortiCloud Management
    category: Cloud Management
    description: Centralized device management
    sla_eligible: true
    source_url: https://www.fortinet.com/support/support-services
  - id: fortiedr
    name: FortiEDR
    category: Endpoint Security
    description: Endpoint detection and response
    sla_eligible: true
    source_url: https://www.fortinet.com/support/support-services
  - id: fortigate-cloud
    name: FortiGate Cloud
    category: Firewall
    description: Cloud-based firewall management
    sla_eligible: true
    source_url: https://www.fortinet.com/support/support-services
  - id: fortisase
    name: FortiSASE
    category: SASE
    description: Secure access service edge
    sla_eligible: true
    source_url: https://www.fortinet.com/support/support-services
---

Fortinet is a Security & Identity provider. See the official SLA at [https://www.fortinet.com/support/support-services](https://www.fortinet.com/support/support-services).

<!-- Add human-readable notes about Fortinet's SLA nuances here. -->
