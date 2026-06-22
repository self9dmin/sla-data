---
title: Supabase
slug: supabase
vendor_name: Supabase
legal_entity: Supabase
category: Databases & Data Infrastructure
website: https://www.supabase.com
scope: global
sla_url: https://supabase.com/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 20
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 20
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 15
    - uptime_below: 98
      credit_percent: 20
    - uptime_below: 96
      credit_percent: 30
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_month
      description: >-
        Customer must email support within 30 days of the end of the month in
        which the Uptime Commitment was not met
  submission_method: Email
  submission_url: mailto:support@supabase.io
  required_evidence:
    - Affected organization, service(s), region(s), and project(s)
    - Specific dates and times (in 5-minute intervals) of unavailability
    - Supporting logs or monitoring data
  review_timeline: 30 days
  credit_application: Applied to future billing charges (non-refundable)
global_exclusions:
  - Third-party vendors (AWS, Cloudflare, GCP, Azure, GitHub)
  - Integration partner failures
  - Force majeure / ISP outages
  - Customer actions or misconfigurations
  - Insufficient resource provisioning
  - Unsupported extensions or versions
  - Customer-initiated schema changes
  - Account suspension per terms
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
  - id: auth
    name: Supabase Auth
    category: Authentication
    description: User authentication
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://supabase.com/sla
  - id: database
    name: Supabase Database (Postgres)
    category: Database
    description: Managed PostgreSQL
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://supabase.com/sla
  - id: edge-functions
    name: Supabase Edge Functions
    category: Serverless
    description: Edge compute
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://supabase.com/sla
  - id: realtime
    name: Supabase Realtime
    category: Database
    description: Real-time subscriptions
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://supabase.com/sla
  - id: storage
    name: Supabase Storage
    category: Storage
    description: Object storage
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://supabase.com/sla
  - id: vector
    name: Supabase Vector
    category: AI
    description: Vector embeddings (pgvector)
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://supabase.com/sla
support:
  tiers:
    - "Free"
    - "Pro"
    - "Team"
    - "Enterprise"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: false
  pricing: flat
  source_url: "https://supabase.com/support-policy"
  note: "Team and Enterprise list response targets; Priority Plus add-on available."
---

Supabase is a Database & Data Infrastructure provider. See the official SLA at [https://supabase.com/sla](https://supabase.com/sla).

<!-- Add human-readable notes about Supabase's SLA nuances here. -->
