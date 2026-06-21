---
title: Miro
slug: miro
vendor_name: Miro
legal_entity: Miro
category: Productivity
website: https://www.miro.com
scope: global
sla_url: https://miro.com/legal/documents/Miro-Service-Level-Agreement.pdf
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.5
max_credit_percent: 30
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 30
  credit_tiers:
    - uptime_below: 99.5
      credit_percent: 5
    - uptime_below: 99
      credit_percent: 10
    - uptime_below: 98.5
      credit_percent: 15
    - uptime_below: 98
      credit_percent: 20
    - uptime_below: 97.5
      credit_percent: 30
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: month_end
      description: Request service credits within 30 days after the end of the affected month
  submission_method: Request to Miro under the Master Cloud Agreement
  required_evidence: []
  credit_application: Applied to next invoice (account must be fully paid up)
global_exclusions:
  - General internet problems or outages caused by power supply carriers
  - Malfunction of equipment, systems software, network connections or other infrastructure not owned or operated by Miro
  - Force majeure events or other factors outside the reasonable control of Miro
  - Scheduled service or maintenance or reasonable emergency maintenance
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: false
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
  - id: ai
    name: Miro AI
    category: AI
    description: AI-powered features
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://miro.com/legal/documents/Miro-Service-Level-Agreement.pdf
  - id: boards
    name: Miro Boards
    category: Collaboration
    description: Infinite canvas boards
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://miro.com/legal/documents/Miro-Service-Level-Agreement.pdf
  - id: integrations
    name: Miro Integrations
    category: Integrations
    description: Third-party integrations
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://miro.com/legal/documents/Miro-Service-Level-Agreement.pdf
  - id: templates
    name: Miro Templates
    category: Templates
    description: Pre-built templates
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://miro.com/legal/documents/Miro-Service-Level-Agreement.pdf
---

Miro is a Communication & Collaboration provider. See the official SLA at [https://miro.com/legal/documents/Miro-Service-Level-Agreement.pdf](https://miro.com/legal/documents/Miro-Service-Level-Agreement.pdf).

<!-- Add human-readable notes about Miro's SLA nuances here. -->
