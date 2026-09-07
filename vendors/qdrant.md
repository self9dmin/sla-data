---
title: Qdrant
slug: qdrant
vendor_name: Qdrant
legal_entity: Qdrant Solutions GmbH
category: AI & Machine Learning
website: https://qdrant.tech
scope: global
sla_url: https://cloud.qdrant.io/sla
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.5
max_credit_percent: 25
claim_deadline_days: 1
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: 'Qdrant Cloud publishes a tiered SLA (measured per quarter) for paying Managed Cloud customers: Standard 99.5%, Premium 99.9%. Service credits (sole & exclusive remedy, applied to future invoices) escalate to 25% as availability falls. Downtime must be reported via support ticket within 1 business day. Free tier excluded; Hybrid/Private Cloud have custom SLAs.'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99.5
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 15
    - uptime_below: 98.5
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 1
      business_days: true
      anchor_point: incident_date
      description: Report via support ticket within 1 business day
  submission_method: Support Ticket
  submission_url: https://qdrant.tech/contact-us/
  required_evidence:
    - Account/Project ID
    - Affected service
    - Incident timestamps
    - Impact evidence
  review_timeline: 30 days
  credit_application: Applied to future invoice
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Beta / preview features
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: false
    claim_assistance: false
    availability: Business hours
    channels:
      - Documentation
  - name: Enterprise
    slug: enterprise
    price_model: Custom
    sla_eligible: false
    claim_assistance: false
    availability: 24/7
    channels:
      - Email
      - Phone
    response_times:
      critical: < 1 hour
      high: < 4 hours
services:
  - id: oss
    name: Qdrant (OSS)
    category: AI
    description: Open-source vector search engine
    sla_eligible: false
    source_url: https://qdrant.tech
  - id: cloud
    name: Qdrant Cloud
    category: AI
    description: Managed SaaS vector database
    sla_eligible: true
    source_url: https://cloud.qdrant.io
  - id: hybrid
    name: Qdrant Hybrid Cloud
    category: AI
    description: Managed plane in your environment
    sla_eligible: false
    source_url: https://qdrant.tech
support:
  channels:
    - email
    - portal
    - slack
    - discord
  designated_contact: none
  professional_services: true
  has_24x7: true
  fastest_response: 1 hour (Sev1, Premium)
  note: Email + JSM ticket portal; Premium adds private Slack/Discord and is 24/7 (Standard business hours, no phone). Limited scaling-consultation services via sales. Email + JSM ticket portal; Premium adds private Slack/Discord and is 24/7 (Standard business hours, no phone). Limited scaling-consultation services via sales.
  source_url: https://cloud.qdrant.io/sla
---

Qdrant is an AI & Machine Learning provider. See the SLA/terms at [https://cloud.qdrant.io/sla](https://cloud.qdrant.io/sla).
