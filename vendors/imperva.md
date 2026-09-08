---
title: Imperva
slug: imperva
vendor_name: Imperva
legal_entity: Imperva, Inc.
category: CDN & Edge
website: https://www.imperva.com
scope: global
sla_url: https://www.imperva.com/legal/service-level-agreement/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.999
has_automatic_credits: false
min_plan_for_sla: standard
claim_deadline_days: 7
needs_review: true
credit_note: 'Verified against Imperva SLA documentation (Incapsula/Imperva). Uptime commitment verbatim: Network Infrastructure (NI) services: "99.999% annually"; Protected Infrastructure (PI) services: "99.95% annually." IMPORTANT: Uptime is measured ANNUALLY, not monthly. Credit eligibility thresholds verbatim: "In the event of a NI Outage longer than five minutes or a PI Outage longer than four hours, Client will be eligible to receive Credits." Claim deadline verbatim: "Service credits must be requested within 7 days of the occurrence of the event that entitles Customer to such service credits." This is an unusually short 7-day window measured from the incident, not from billing cycle end. Credit tier percentages (amounts per threshold) not captured verbatim — needs_review: true. Legal entity: Imperva, Inc. (subsidiary of Thales Group, acquired January 2024; SLA documents migrating to cpl.thalesgroup.com).'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Support ticket
  submission_url: https://www.imperva.com/
  required_evidence:
    - Incident dates and times (within 7 days of occurrence)
    - Affected service details
    - Account information
  deadlines:
    - type: submission
      days: 7
      business_days: false
      anchor_point: incident_date
      description: Service credit requests must be submitted within 7 days of the incident occurrence
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Internet routing issues outside Imperva network
  - DDoS attacks exceeding contracted mitigation capacity
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Phone
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
      - Dedicated support
services:
  - id: imperva-network-infrastructure
    name: Imperva Network Infrastructure (NI)
    category: CDN & Edge
    description: DDoS protection and CDN for network-layer threats
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.imperva.com/legal/service-level-agreement/
  - id: imperva-protected-infrastructure
    name: Imperva Protected Infrastructure (PI)
    category: CDN & Edge
    description: Web application firewall and bot management services
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.imperva.com/legal/service-level-agreement/
---

Imperva (a Thales Group subsidiary) provides DDoS protection and application security services. SLA uptime is measured ANNUALLY — 99.999% for Network Infrastructure and 99.95% for Protected Infrastructure. The claim window is critically short: credits must be requested within **7 days of the incident**, not from billing cycle end. Credit amounts require direct review of the SLA document.
