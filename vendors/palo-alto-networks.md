---
title: Palo Alto Networks
slug: palo-alto-networks
vendor_name: Palo Alto Networks
legal_entity: Palo Alto Networks
category: Security & Identity
website: https://www.paloaltonetworks.com
scope: global
sla_url: https://www.paloaltonetworks.com/services/support/support-policies
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.999
max_credit_percent: 100
claim_deadline_days: 1
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.999
      credit_percent: 5
    - uptime_below: 99.99
      credit_percent: 10
    - uptime_below: 99.9
      credit_percent: 15
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 98
      credit_percent: 100
claim_process:
  deadlines:
    - type: notification
      days: 1
      business_days: false
      anchor_point: incident_date
      description: 'Open a case on the Customer Support Portal within 24 hours of the outage/incident.'
    - type: submission
      days: 5
      business_days: true
      anchor_point: incident_date
      description: 'Prisma Access and Cloud NGFW also require submitting a claim on the Claim Dashboard within 5 business days of the outage.'
  submission_method: Support Portal
  submission_url: https://support.paloaltonetworks.com
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Scheduled and unplanned maintenance windows
  - High Availability and scaling events
  - Force majeure / third-party events
  - Customer / ISP / third-party equipment, networks or software
  - Customer misconfigurations and inadequate licensing
  - Beta, Test, Preview features (not generally available)
  - Trials and evaluations provided at no cost
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
  - id: pan-cortex-xdr
    name: Cortex XDR
    category: XDR
    description: Extended detection and response
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/support/cortex-service-level-agreement.pdf
  - id: pan-cortex-xsoar
    name: Cortex XSOAR
    category: SOAR
    description: Security orchestration
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/support/cortex-service-level-agreement.pdf
  - id: pan-ngfw
    name: Cloud NGFW for AWS
    category: Firewall
    description: Cloud-delivered next-generation firewall
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/support/cloud-ngfw-for-aws-service-level-agreement.pdf
  - id: pan-prisma-access
    name: Prisma Access
    category: SASE
    description: Secure access service edge
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/support/prisma-access-service-sla.pdf
  - id: pan-prisma-cloud
    name: Prisma Cloud
    category: Cloud Security
    description: Cloud-native security platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/prisma/prisma-cloud-service-level-agreement.pdf
support:
  tiers:
    - "Standard"
    - "Premium"
    - "Platinum"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://www.paloaltonetworks.com/services/support"
  note: "TAM via Focused Services add-on; support priced as a percentage of product list. Targets, not credit-backed."
---

Palo Alto Networks is a Security & Identity provider. Each cloud-delivered service has its own published SLA; see the SLA list at [paloaltonetworks.com/services/support/support-policies](https://www.paloaltonetworks.com/services/support/support-policies).

<!-- SLA nuances:
- There is no single umbrella SLA; commitments and credit models vary by product.
- Prisma Access (SLA Nov 11, 2024): 99.999% uptime, tiered credits 5/10/15/25/100%, max 100% of monthly fee. Open a case within 24h AND submit a claim on the Claim Dashboard within 5 business days.
- Cloud NGFW for AWS (SLA 7 Apr 2022): 99.99% uptime, tiered credits 10/25/100%, max 100% of monthly fee. Report within 24h + claim within 5 business days.
- Strata Logging Service (SLA Nov 2023): 99.9% uptime tier, tiered credits 5/15/25/100%, max 100% of monthly fee. Case within 24h.
- Cortex products / Prisma Cloud (Apr 2025 / Apr 2024): 99.9% uptime, FLAT 2% credit per qualifying 60-min event (not tiered); max credit is only ONE WEEK of monthly fee (not 100%). Case within 24h.
- Credits are never automatic: customer must open a support case within 24 hours of the outage. Eligibility generally requires 60 days of onboarding and good payment standing; trials/evals/beta excluded.
- The credit_tiers / max_credit_percent / uptime_commitment fields above reflect the flagship Prisma Access SLA; Cortex and Prisma Cloud differ (see above).
-->

