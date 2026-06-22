---
title: Dynatrace
slug: dynatrace
vendor_name: Dynatrace
legal_entity: Dynatrace
category: Monitoring & Observability
website: https://www.dynatrace.com
scope: global
sla_url: https://www.dynatrace.com/company/trust-center/sla/saas/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.5
max_credit_percent: 10
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
sla_tiers:
  - name: Enterprise Success and Support
    requirement: Active Enterprise Success and Support subscription
    uptime_commitment: 99.95
    source_url: https://www.dynatrace.com/company/trust-center/sla/saas/
credit_policy:
  calculation_type: flat
  remedy_type: credit
  max_credit_percent: 10
  credit_formula: (monthly SaaS subscription fee) x (Service Commitment – Monthly Uptime Percentage)
  credit_tiers: []
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Claim must be received by Dynatrace within 30 days after Customer experiences the Unavailability
  submission_method: Dynatrace Support Ticket (subject line "SLA Credit Request")
  submission_url: https://www.dynatrace.com/company/trust-center/sla/saas/
  required_evidence:
    - Subject line "SLA Credit Request"
    - Dates and times the SaaS environment was Unavailable
    - URL of the affected Dynatrace SaaS environment
    - Other related information reasonably requested by Dynatrace
  review_timeline: Not specified
  credit_application: Applied toward a renewal or purchase of additional Dynatrace SaaS subscriptions; must be applied within one year of issuance or it expires
global_exclusions:
  - Planned down times announced at https://status.dynatrace.com/
  - Force majeure events outside Dynatrace's or its cloud providers' reasonable control
  - Customer-side issues (equipment, software, or misconfiguration not under Dynatrace's control)
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
  - id: apm
    name: Application Performance Management
    category: APM
    description: Full-stack APM
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.dynatrace.com/company/trust-center/sla/saas/
  - id: infra
    name: Infrastructure Monitoring
    category: Monitoring
    description: Infrastructure observability
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.dynatrace.com/company/trust-center/sla/saas/
  - id: logs
    name: Log Management
    category: Logging
    description: AI-powered log analytics
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.dynatrace.com/company/trust-center/sla/saas/
  - id: rum
    name: Real User Monitoring
    category: Analytics
    description: Digital experience monitoring
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.dynatrace.com/company/trust-center/sla/saas/
support:
  tiers:
    - "Standard Support"
    - "Enterprise Success and Support"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: false
  pricing: custom
  source_url: "https://www.dynatrace.com/company/trust-center/support-policy/"
  note: "Enterprise Success and Support adds 24x7, priority response targets, a success manager, and config/environment reviews. Deeper architecture work is separate professional services. Response times are targets, not credit-backed."
---

Dynatrace is a Monitoring & Observability provider. See the official SLA at [https://www.dynatrace.com/company/trust-center/sla/saas/](https://www.dynatrace.com/company/trust-center/sla/saas/).

<!-- Add human-readable notes about Dynatrace's SLA nuances here. -->
