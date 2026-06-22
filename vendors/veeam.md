---
title: Veeam
slug: veeam
vendor_name: Veeam
legal_entity: Veeam
category: Cloud Infrastructure
website: https://www.veeam.com
scope: global
sla_url: https://www.veeam.com/legal/veeam-data-cloud-service-agreement.html
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99.0
      credit_percent: 25
    - uptime_below: 95.0
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://www.veeam.com/support.html
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
  - id: backup
    name: Veeam Backup & Replication
    category: Backup
    description: Enterprise backup solution
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.veeam.com/legal/veeam-data-cloud-service-agreement.html
  - id: m365
    name: Veeam Backup for Microsoft 365
    category: Backup
    description: Microsoft 365 backup
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.veeam.com/legal/veeam-data-cloud-service-agreement.html
  - id: cloud
    name: Veeam Cloud Connect
    category: Cloud Backup
    description: Cloud backup service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.veeam.com/legal/veeam-data-cloud-service-agreement.html
  - id: one
    name: Veeam ONE
    category: Monitoring
    description: Backup monitoring and analytics
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.veeam.com/legal/veeam-data-cloud-service-agreement.html
  - id: recovery
    name: Veeam Recovery Orchestrator
    category: DR
    description: Disaster recovery orchestration
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.veeam.com/legal/veeam-data-cloud-service-agreement.html
support:
  tiers:
    - "Basic"
    - "Production"
    - "Premier"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.veeam.com/legal/support-policy.html"
  note: "Production is 24/7; Premier adds a Support Account Manager and proactive services."
---

Veeam is a Storage & Backup provider. See the official SLA at [https://www.veeam.com/legal/veeam-data-cloud-service-agreement.html](https://www.veeam.com/legal/veeam-data-cloud-service-agreement.html).

<!-- Add human-readable notes about Veeam's SLA nuances here. -->
