---
title: Cohere
slug: cohere
vendor_name: Cohere
legal_entity: Cohere
category: AI & Machine Learning
website: https://www.cohere.com
scope: global
sla_url: https://cohere.com/slo
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.5
max_credit_percent: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: service_credit
  max_credit_percent: 30
  credit_tiers:
    - uptime_below: 99.5
      credit_percent: 10
    - uptime_below: 98
      credit_percent: 20
    - uptime_below: 95
      credit_percent: 30
claim_process:
  submission_method: Email
  submission_url: mailto:support@cohere.com
  claim_deadline_days: 30
  required_evidence:
    - Date and time the SLO failure occurred
    - Any additional information requested by Cohere
  review_timeline: Cohere's sole discretion
  credit_application: Applied to next monthly invoice
global_exclusions:
  - Acts or omissions of Customer or its Permitted Users
  - Customer failure to adhere to Cohere's recommendations or minimum system requirements
  - Acts or omissions of Cohere acting under Customer's direction
  - Spikes in demand not previously agreed in writing
  - Scheduled or emergency maintenance
  - Downtime of third party service providers
  - Force Majeure
  - Suspension permitted under the Agreement
  - Features marked Alpha or Beta
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
  - id: api-cohere-ai
    name: api.cohere.ai
    category: AI
    description: Cohere API SaaS Services endpoint
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://cohere.com/slo
  - id: os-cohere-ai
    name: os.cohere.ai
    category: AI
    description: Cohere API SaaS Services endpoint
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://cohere.com/slo
---

Cohere is a AI & Machine Learning provider. See the official Service Level Objective (SLO) at [https://cohere.com/slo](https://cohere.com/slo).

<!-- Add human-readable notes about Cohere's SLA nuances here. -->
Cohere publishes a public Service Level Objective (SLO) with service credits. Covered Services are os.cohere.ai and api.cohere.ai, each with a >= 99.5% Monthly Uptime Percentage objective. Service Level Credits are tiered: 10% of the monthly invoice for 98% to < 99.5%, 20% for 95% to 97.99%, and 30% for < 94.99%. Credits are the sole and exclusive remedy and are not automatic: Customer must notify support@cohere.com within 30 days, and Cohere determines eligibility in its sole discretion. Credits apply to future invoices only and are forfeited on termination; no refunds.
