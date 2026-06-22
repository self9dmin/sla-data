---
title: dbt Labs
slug: dbt-labs
vendor_name: dbt Labs
legal_entity: dbt Labs
category: Databases & Data Infrastructure
website: https://www.getdbt.com
scope: global
sla_url: https://docs.getdbt.com/docs/dbt-support
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
  submission_method: Support
  submission_url: https://docs.getdbt.com/docs/dbt-support
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
  - id: dbt-cloud-ide
    name: dbt Cloud IDE
    category: Development
    description: Browser-based development
    sla_eligible: true
    source_url: https://docs.getdbt.com/docs/dbt-support
  - id: dbt-cloud-jobs
    name: dbt Cloud Jobs
    category: Orchestration
    description: Job scheduling and execution
    sla_eligible: true
    source_url: https://docs.getdbt.com/docs/dbt-support
  - id: dbt-cloud-docs
    name: dbt Docs
    category: Documentation
    description: Auto-generated documentation
    sla_eligible: true
    source_url: https://docs.getdbt.com/docs/dbt-support
  - id: dbt-explorer
    name: dbt Explorer
    category: Discovery
    description: Data discovery and lineage
    sla_eligible: true
    source_url: https://docs.getdbt.com/docs/dbt-support
  - id: dbt-semantic-layer
    name: dbt Semantic Layer
    category: Metrics
    description: Centralized metrics definitions
    sla_eligible: true
    source_url: https://docs.getdbt.com/docs/dbt-support
support:
  tiers:
    - "Developer/Starter"
    - "Enterprise"
    - "Premier"
  has_24x7: true
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://docs.getdbt.com/docs/dbt-support"
  note: "Premier tier adds support response targets and a Resident Architect; pro packages available."
---

dbt Labs is a Other SaaS provider. dbt Cloud does not publish a public uptime SLA with service credits; Enterprise/Enterprise+ SLA terms are governed by the individual Enterprise contract. See the official support and SLA scope page at [https://docs.getdbt.com/docs/dbt-support](https://docs.getdbt.com/docs/dbt-support).

<!-- Add human-readable notes about dbt Labs's SLA nuances here. -->
