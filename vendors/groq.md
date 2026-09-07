---
title: Groq
slug: groq
vendor_name: Groq
legal_entity: Groq, Inc.
category: AI & Machine Learning
website: https://groq.com
scope: global
sla_url: https://console.groq.com/docs/legal/services-agreement
last_verified: '2026-06-23'
last_updated: '2026-06-23'
sla_help_wanted: true
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_note: GroqCloud's standard Services Agreement promises only "commercially reasonable efforts" availability (no committed %). A documented 99.9% availability SLA + 99% latency guarantee exists, but only on the enterprise Performance tier (see SLA tiers); the service-credit mechanics are governed by the private enterprise agreement — SLA help wanted.
credit_policy:
  calculation_type: none
  remedy_type: no_sla
sla_tiers:
  - name: Performance Tier
    requirement: Enterprise plan commitment (via Sales)
    uptime_commitment: 99.9
    source_url: https://console.groq.com/docs/performance-tier
claim_process:
  submission_method: N/A - No public SLA credits
  submission_url: https://groq.com/enterprise
  required_evidence: []
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
  - id: inference
    name: On-Demand Inference
    category: AI
    description: LPU-based low-latency LLM API
    sla_eligible: false
    source_url: https://console.groq.com
  - id: batch
    name: Batch API
    category: AI
    description: Async discounted bulk inference
    sla_eligible: false
    source_url: https://console.groq.com
  - id: performance
    name: Performance Tier
    category: AI
    description: Enterprise prioritized capacity with SLA
    sla_eligible: true
    source_url: https://console.groq.com/docs/performance-tier
support:
  channels:
    - email
  designated_contact: team
  professional_services: false
  has_24x7: false
  note: Enterprise via sales form ("dedicated support", no published structure). GroqCloud "service tiers" are latency/throughput, not support. No defined professional services. Enterprise via sales form ("dedicated support", no published structure). GroqCloud "service tiers" are latency/throughput, not support. No defined professional services.
  source_url: https://groq.com/enterprise-access
---

Groq is an AI & Machine Learning provider. See the SLA/terms at [https://console.groq.com/docs/legal/services-agreement](https://console.groq.com/docs/legal/services-agreement).
