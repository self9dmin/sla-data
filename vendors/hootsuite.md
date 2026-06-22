---
title: Hootsuite
slug: hootsuite
vendor_name: Hootsuite
legal_entity: Hootsuite
category: CRM & Marketing
website: https://www.hootsuite.com
scope: global
sla_url: https://www.hootsuite.com/legal/enterprise-service-level-agreement
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_days: 15
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: service_extension
  max_credit_days: 15
  credit_unit: days_added_to_term
  credit_tiers:
    - uptime_below: 99.9
      credit_days: 3
    - uptime_below: 99.0
      credit_days: 7
    - uptime_below: 95.0
      credit_days: 15
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: eligibility_date
      description: Customer must notify Hootsuite within 30 days from the day Customer becomes eligible to receive a Service Credit, or the right is forfeited
  submission_method: Notify Hootsuite
  submission_url: https://www.hootsuite.com/legal/enterprise-service-level-agreement
  credit_application: Days of Enterprise Services added to the end of Customer's Term at no charge
global_exclusions:
  - Scheduled system maintenance
  - API Interruptions from independent partners (e.g., X/Twitter, Facebook, LinkedIn, YouTube)
  - Circumstances beyond Hootsuite's control
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
  - id: advertising
    name: Social Advertising
    category: Advertising
    description: Ad management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.hootsuite.com/legal/enterprise-service-level-agreement
  - id: analytics
    name: Social Analytics
    category: Analytics
    description: Social media analytics
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.hootsuite.com/legal/enterprise-service-level-agreement
  - id: inbox
    name: Social Inbox
    category: Engagement
    description: Social engagement management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.hootsuite.com/legal/enterprise-service-level-agreement
  - id: listening
    name: Social Listening
    category: Monitoring
    description: Brand monitoring
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.hootsuite.com/legal/enterprise-service-level-agreement
  - id: publishing
    name: Social Publishing
    category: Social Media
    description: Content publishing and scheduling
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.hootsuite.com/legal/enterprise-service-level-agreement
support:
  tiers:
    - "Standard Services"
    - "Premier Services"
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.hootsuite.com/services"
  note: "Premier adds a designated account manager and phone support; no published response-time SLA."
---

Hootsuite is a Marketing & Analytics provider. See the official SLA at [https://www.hootsuite.com/legal/enterprise-service-level-agreement](https://www.hootsuite.com/legal/enterprise-service-level-agreement).

<!-- Add human-readable notes about Hootsuite's SLA nuances here. -->
Hootsuite's SLA applies only to Enterprise Services purchased under an Authorization Form; self-serve/standard plans have no public uptime SLA (the self-serve terms disclaim continuous availability). The 99.9% Service Availability commitment is for the Platform overall, no per-service uptime tiers are published. Remedy is a service extension (days added to the end of Term), not a percentage invoice credit and not automatic: tiers are 3 days (<99.9% to >=99.0%), 7 days (<99.0% to >=95.0%), 15 days (<95.0%), capped at 15 days per calendar month. Customer must notify Hootsuite within 30 days of becoming eligible or forfeit the credit.
