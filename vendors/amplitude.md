---
title: Amplitude
slug: amplitude
vendor_name: Amplitude
legal_entity: Amplitude
category: Analytics & BI
website: https://www.amplitude.com
scope: global
sla_url: https://amplitude.com/terms
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  As of 2026-06-19, no public Service Level Agreement (uptime commitment, service
  credits, or claim process) could be found on amplitude.com. The Terms of Service
  (https://amplitude.com/terms) and Master Service Agreement (https://www.amplitude.com/msa)
  both explicitly disclaim availability: "AMPLITUDE ... DOES NOT WARRANT THAT THE
  SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE." The status page
  (https://status.amplitude.com) reports historical uptime only, not a commitment.
  Any SLA appears to be Enterprise-tier/contractual and not publicly published, so
  the uptime_commitment (99.9), max_credit_percent (30), credit_tiers, and claim_process
  fields below are UNVERIFIED against the vendor's own domain and were left unchanged.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
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
  submission_method: Support
  submission_url: https://help.amplitude.com
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
  - id: analytics
    name: Amplitude Analytics
    category: Analytics
    description: Product analytics platform
    sla_eligible: true
    source_url: https://amplitude.com/terms
  - id: cdp
    name: Amplitude CDP
    category: Customer Data
    description: Customer data platform
    sla_eligible: true
    source_url: https://amplitude.com/terms
  - id: experiment
    name: Amplitude Experiment
    category: A/B Testing
    description: Feature flagging and experimentation
    sla_eligible: true
    source_url: https://amplitude.com/terms
  - id: session-replay
    name: Session Replay
    category: Analytics
    description: Session recording and replay
    sla_eligible: true
    source_url: https://amplitude.com/terms
---

Amplitude is a Monitoring & Observability provider. See the official SLA at [https://amplitude.com/terms](https://amplitude.com/terms).

<!-- Add human-readable notes about Amplitude's SLA nuances here. -->
