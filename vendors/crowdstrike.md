---
title: CrowdStrike
slug: crowdstrike
vendor_name: CrowdStrike
legal_entity: CrowdStrike
category: Security & Identity
website: https://www.crowdstrike.com
scope: global
sla_url: https://www.crowdstrike.com/en-us/legal/terms-conditions/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: 'CrowdStrike publishes no public credit SLA. Only crowdstrike.com-verifiable figure is the "99.99% guaranteed uptime" marketing claim on Falcon pricing pages (e.g. /en-us/pricing/falcon-enterprise/); the Terms & Conditions contain no availability percentage, service credits, credit tiers, max credit, or claim process (Section 8.6 disclaims uninterrupted operation). max_credit_percent (25), claim_deadline_days (30), credit_tiers, claim_process, and per-service uptime/source_url figures could NOT be verified on crowdstrike.com and are left unchanged pending review. sla_url updated to canonical /en-us/legal/ path; dead /legal/ service source_urls repointed to live terms page. 2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no public credit-bearing SLA confirmed.'
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
  submission_method: Support Portal
  submission_url: https://supportportal.crowdstrike.com
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
  - id: discover
    name: Falcon Discover
    category: Asset Management
    description: IT hygiene
    sla_eligible: true
    source_url: https://www.crowdstrike.com/en-us/legal/terms-conditions/
  - id: identity
    name: Falcon Identity
    category: Identity Security
    description: Identity threat protection
    sla_eligible: true
    source_url: https://www.crowdstrike.com/en-us/legal/terms-conditions/
  - id: insight
    name: Falcon Insight
    category: EDR
    description: Endpoint detection and response
    sla_eligible: true
    source_url: https://www.crowdstrike.com/en-us/legal/terms-conditions/
  - id: overwatch
    name: Falcon OverWatch
    category: MDR
    description: Managed threat hunting
    sla_eligible: true
    source_url: https://www.crowdstrike.com/en-us/legal/terms-conditions/
  - id: prevent
    name: Falcon Prevent
    category: Endpoint Security
    description: Next-gen antivirus
    sla_eligible: true
    source_url: https://www.crowdstrike.com/en-us/legal/terms-conditions/
  - id: spotlight
    name: Falcon Spotlight
    category: Vulnerability
    description: Vulnerability management
    sla_eligible: true
    source_url: https://www.crowdstrike.com/en-us/legal/terms-conditions/
---

CrowdStrike is a Security & Identity provider. See the official terms at [https://www.crowdstrike.com/en-us/legal/terms-conditions/](https://www.crowdstrike.com/en-us/legal/terms-conditions/). Note: CrowdStrike does not publish a public uptime/credit SLA; the only public availability figure is the "99.99% guaranteed uptime" marketing claim on Falcon pricing pages.

<!-- Add human-readable notes about CrowdStrike's SLA nuances here. -->
