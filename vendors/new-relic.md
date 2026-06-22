---
title: New Relic
slug: new-relic
vendor_name: New Relic
legal_entity: New Relic
category: Monitoring & Observability
website: https://newrelic.com
scope: global
sla_url: https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/service-level-availability-commitment/
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
  submission_method: File a support ticket on the New Relic support site to request the Service Availability attainment for the previous month
  submission_url: https://support.newrelic.com
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: Not specified
  credit_application: N/A - remedy is termination without penalty, not service credits
global_exclusions:
  - Planned maintenance periods
  - Emergency maintenance necessary to prevent imminent harm to the Service
  - Force majeure events
  - Third-Party Services, Customer application, equipment, software or other technology
  - Use of the Service in violation of the Agreement or not in accordance with the Documentation
  - Suspension, limitation, and/or termination of access in accordance with the Agreement
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
  - id: newrelic-alerts
    name: New Relic Alerts
    category: Alerting
    description: Alerting and incident management
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/service-level-availability-commitment/
  - id: newrelic-apm
    name: New Relic APM
    category: APM
    description: Application performance monitoring
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/service-level-availability-commitment/
  - id: newrelic-browser
    name: New Relic Browser
    category: RUM
    description: Real user monitoring
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/service-level-availability-commitment/
  - id: newrelic-infrastructure
    name: New Relic Infrastructure
    category: Monitoring
    description: Infrastructure monitoring
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/service-level-availability-commitment/
  - id: newrelic-logs
    name: New Relic Logs
    category: Logging
    description: Log management
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/service-level-availability-commitment/
  - id: newrelic-mobile
    name: New Relic Mobile
    category: Mobile
    description: Mobile app monitoring
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/service-level-availability-commitment/
  - id: newrelic-synthetics
    name: New Relic Synthetics
    category: Monitoring
    description: Synthetic monitoring
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/service-level-availability-commitment/
support:
  tiers:
    - "Standard"
    - "Pro"
    - "Enterprise"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: false
  training: true
  pricing: custom
  source_url: "https://docs.newrelic.com/docs/licenses/license-information/general-usage-licenses/global-technical-support-offerings/"
  note: "Enterprise edition adds a TAM, phone/Slack, and a 1-hour P1 target (explicitly an estimate, not guaranteed). Health checks and migrations are paid professional services."
---

New Relic is a Monitoring & Observability provider. See the official SLA at [https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/service-level-availability-commitment/](https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/service-level-availability-commitment/).

New Relic's Service Level Availability Commitment is a 99.8% monthly availability target. The remedy is termination without penalty (no service credits) if availability drops below 98.5% for two consecutive months or below 96.5% in any single month. Only Pro or Enterprise editions with Full Users / Full Platform Users on usage-based pricing (or product-based plans that reference the commitment) are covered.

<!-- Add human-readable notes about New Relic's SLA nuances here. -->
