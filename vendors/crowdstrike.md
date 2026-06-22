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
support:
  tiers:
    - "Standard"
    - "Express"
    - "Essential"
    - "Elite"
  has_24x7: true
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.crowdstrike.com/en-us/resources/data-sheets/crowdstrike-falcon-support-offerings/"
  note: "Essential/Elite include a TAM; specific response targets are not publicly published."
---

CrowdStrike is a Security & Identity provider. See the official terms at [https://www.crowdstrike.com/en-us/legal/terms-conditions/](https://www.crowdstrike.com/en-us/legal/terms-conditions/). Note: CrowdStrike does not publish a public uptime/credit SLA; the only public availability figure is the "99.99% guaranteed uptime" marketing claim on Falcon pricing pages.

<!-- Add human-readable notes about CrowdStrike's SLA nuances here. -->
