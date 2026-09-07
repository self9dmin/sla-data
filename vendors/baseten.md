---
title: Baseten
slug: baseten
vendor_name: Baseten
legal_entity: Baseten, Inc.
category: AI & Machine Learning
website: https://www.baseten.co
scope: global
sla_url: https://www.baseten.co/service-level-agreement/
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.9
max_credit_percent: 40
claim_deadline_days: 1
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: 'Baseten publishes a full SLA for Dedicated Inference (where Baseten is the hosting party): 99.9% monthly System Availability with service credits — 10% (<99.9%), 15% (<99.5%), 30% (<99.0%), capped at 40% of the monthly bill. Credits must be requested within 24 hours of the downtime.'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 40
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99.5
      credit_percent: 15
    - uptime_below: 99
      credit_percent: 30
claim_process:
  deadlines:
    - type: submission
      days: 1
      business_days: false
      anchor_point: incident_date
      description: Request credits by email within 24 hours of the downtime
  submission_method: Email
  submission_url: mailto:billing@baseten.co
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
  - id: dedicated
    name: Dedicated Inference
    category: AI
    description: Dedicated model deployments (SLA-covered)
    sla_eligible: true
    source_url: https://www.baseten.co/service-level-agreement/
  - id: model-apis
    name: Model APIs
    category: AI
    description: Hosted open-model inference
    sla_eligible: false
    source_url: https://www.baseten.co
  - id: training
    name: Training
    category: AI
    description: Model fine-tuning / training
    sla_eligible: false
    source_url: https://www.baseten.co
support:
  channels:
    - email
    - portal
  designated_contact: team
  professional_services: true
  has_24x7: false
  note: Email/portal; Pro/Enterprise get dedicated engineers (no public phone/Slack). Published SLA covers 99.9% availability + credits; response negotiated. Performance engineering / managed observability. Email/portal; Pro/Enterprise get dedicated engineers (no public phone/Slack). Published SLA covers 99.9% availability + credits; response negotiated. Performance engineering / managed observability.
  source_url: https://www.baseten.co/service-level-agreement/
---

Baseten is an AI & Machine Learning provider. See the SLA/terms at [https://www.baseten.co/service-level-agreement/](https://www.baseten.co/service-level-agreement/).
