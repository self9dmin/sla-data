---
title: Grafana Labs
slug: grafana-labs
vendor_name: Grafana Labs
legal_entity: Grafana Labs
category: Monitoring & Observability
website: https://grafana.com
scope: global
sla_url: https://grafana.com/legal/grafana-cloud-sla/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.5
max_credit_percent: 100
claim_deadline_days: 10
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.5
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 20
    - uptime_below: 98
      credit_percent: 50
    - uptime_below: 97
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 10
      business_days: false
      anchor_point: incident_date
      description: Submit within 10 calendar days of incident
  submission_method: Grafana Support
  submission_url: https://grafana.com/orgs/cloud/tickets
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 15 business days
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
  - id: grafana-alerting
    name: Grafana Alerting
    category: Observability
    description: Unified alerting platform
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://grafana.com/legal/grafana-cloud-sla/
  - id: grafana-cloud-logs
    name: Grafana Cloud Logs
    category: Observability
    description: Managed Loki logs
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://grafana.com/legal/grafana-cloud-sla/
  - id: grafana-cloud-metrics
    name: Grafana Cloud Metrics
    category: Observability
    description: Managed Prometheus metrics
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://grafana.com/legal/grafana-cloud-sla/
  - id: grafana-cloud-traces
    name: Grafana Cloud Traces
    category: Observability
    description: Managed Tempo traces
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://grafana.com/legal/grafana-cloud-sla/
---

Grafana Labs is a Monitoring & Observability provider. See the official SLA at [https://grafana.com/legal/grafana-cloud-sla/](https://grafana.com/legal/grafana-cloud-sla/).

<!-- Add human-readable notes about Grafana Labs's SLA nuances here. -->
