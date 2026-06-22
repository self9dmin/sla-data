---
title: Datadog
slug: datadog
vendor_name: Datadog
legal_entity: Datadog, Inc.
category: Monitoring & Observability
website: https://www.datadoghq.com
scope: global
sla_url: https://www.datadoghq.com/legal/msa/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.8
max_credit_percent: 0
has_automatic_credits: false
min_plan_for_sla: pro
credit_policy:
  calculation_type: none
  remedy_type: termination_only
  max_credit_percent: 0
claim_process:
  submission_method: N/A - No SLA credits; availability info via Support request
  submission_url: https://www.datadoghq.com/support/
  review_timeline: N/A
  credit_application: No credits. Sole remedy is the right to terminate the affected Order if Availability is below the standard in two consecutive months, with a pro-rated refund
global_exclusions:
  - Customer breach of the Agreement, Order or AUP
  - Customer failure to configure/use the Services per the Documentation
  - Failures of or issues with the Customer Environment
  - Force majeure events
  - Datadog suspension of Authorized Users under the Agreement
  - Maintenance during a window for which Datadog provides notice
support_tiers:
  - name: Free
    slug: free
    price_model: Free
    sla_eligible: false
    claim_assistance: false
    availability: None
    channels:
      - Community
  - name: Pro
    slug: pro
    price_model: Per-host pricing
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
      - Slack
    response_times:
      critical: < 1 hour
      high: < 4 hours
    features:
      tam: Available
services:
  - id: infrastructure
    name: Infrastructure Monitoring
    category: Monitoring
    description: Host and container monitoring
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.datadoghq.com/legal/msa/
  - id: apm
    name: APM
    category: APM
    description: Application performance monitoring
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.datadoghq.com/legal/msa/
  - id: logs
    name: Log Management
    category: Logging
    description: Centralized log management
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.datadoghq.com/legal/msa/
  - id: synthetics
    name: Synthetic Monitoring
    category: Synthetics
    description: Proactive monitoring
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.datadoghq.com/legal/msa/
  - id: rum
    name: Real User Monitoring
    category: RUM
    description: Frontend performance monitoring
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.datadoghq.com/legal/msa/
support:
  tiers:
    - "Standard"
    - "Premier"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: true
  success_program: false
  training: true
  pricing: custom
  source_url: "https://www.datadoghq.com/support-services/plans/"
  note: "Premier adds phone/video, a designated team of support engineers, and priority escalation. A TAM and professional services are separate paid offerings. Response times are targets (the only stated remedy is re-performance of support, not credits)."
---

Datadog is a Monitoring & Observability provider. The SLA is contained in the Master Subscription Agreement at [https://www.datadoghq.com/legal/msa/](https://www.datadoghq.com/legal/msa/). Datadog commits to 99.8% availability; the sole remedy for missing it is a termination right plus pro-rated refund (no service credits).

<!-- Add human-readable notes about Datadog's SLA nuances here. -->
