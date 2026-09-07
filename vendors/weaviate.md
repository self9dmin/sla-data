---
title: Weaviate
slug: weaviate
vendor_name: Weaviate
legal_entity: Weaviate B.V.
category: AI & Machine Learning
website: https://weaviate.io
scope: global
sla_url: https://weaviate.io/sla
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.5
max_credit_percent: 30
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: 'Weaviate Cloud publishes a tiered SLA (measured per calendar quarter): Flex/Plus 99.5–99.9%, Premium Dedicated 99.95%. Service credits escalate 5% / 10% / 20% / 30% as availability falls, claimed by email within 30 days. The free tier is best-effort with no SLA. Headline shows the first paid (Flex) tier at 99.5%.'
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
      credit_percent: 20
    - uptime_below: 98
      credit_percent: 30
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Notify Weaviate by email within 30 days of the event
  submission_method: Email
  submission_url: mailto:support@weaviate.io
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
  - id: cloud
    name: Weaviate Cloud
    category: AI
    description: Managed vector database
    sla_eligible: true
    source_url: https://weaviate.io
  - id: embeddings
    name: Weaviate Embeddings
    category: AI
    description: Hosted embedding models
    sla_eligible: false
    source_url: https://weaviate.io
  - id: query-agent
    name: Query Agent
    category: AI
    description: Agentic query layer
    sla_eligible: false
    source_url: https://weaviate.io
support:
  channels:
    - email
    - phone
  designated_contact: team
  professional_services: true
  has_24x7: true
  fastest_response: 1 business day (Sev1, Flex); faster on Plus/Premium
  note: Email (Flex business hours; Plus 24/7 priority); Premium adds a telephone hotline and a Technical Account Team. Public Slack community is not official support. Premium training/experts. Email (Flex business hours; Plus 24/7 priority); Premium adds a telephone hotline and a Technical Account Team. Public Slack community is not official support. Premium training/experts.
  source_url: https://weaviate.io/support-plans
---

Weaviate is an AI & Machine Learning provider. See the SLA/terms at [https://weaviate.io/sla](https://weaviate.io/sla).
