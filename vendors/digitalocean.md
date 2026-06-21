---
title: DigitalOcean
slug: digitalocean
vendor_name: DigitalOcean
legal_entity: DigitalOcean, LLC
category: Cloud Infrastructure
website: https://www.digitalocean.com
scope: regional
regions:
  - code: nyc1
    name: New York 1
    continent: americas
    popular: true
  - code: nyc2
    name: New York 2
    continent: americas
  - code: nyc3
    name: New York 3
    continent: americas
    popular: true
  - code: sfo1
    name: San Francisco 1
    continent: americas
  - code: sfo2
    name: San Francisco 2
    continent: americas
    popular: true
  - code: sfo3
    name: San Francisco 3
    continent: americas
  - code: ams2
    name: Amsterdam 2
    continent: europe
  - code: ams3
    name: Amsterdam 3
    continent: europe
    popular: true
  - code: sgp1
    name: Singapore 1
    continent: asia-pacific
    popular: true
  - code: lon1
    name: London 1
    continent: europe
    popular: true
  - code: fra1
    name: Frankfurt 1
    continent: europe
    popular: true
  - code: tor1
    name: Toronto 1
    continent: americas
  - code: blr1
    name: Bangalore 1
    continent: asia-pacific
  - code: syd1
    name: Sydney 1
    continent: asia-pacific
region_pattern: \b(nyc1|nyc2|nyc3|sfo1|sfo2|sfo3|ams2|ams3|sgp1|lon1|fra1|tor1|blr1|syd1)\b
sla_url: https://www.digitalocean.com/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  DigitalOcean has no single global uptime number; top-level fields model the
  flagship Droplets SLA (99.99%) while credit_tiers reflect a representative
  tiered product. Per-product values are in services[] with individual sources.
uptime_commitment: 99.99
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: basic
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 95
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: billing_cycle_end
      description: >-
        Deadline varies by product. Spaces: within 30 days of end of billing
        cycle. Droplets/App Platform/Databases/Load Balancers: by end of second
        billing cycle (~60 days). DOKS: within 3 months of end of billing cycle.
  submission_method: Email
  submission_url: mailto:success@digitalocean.com
  required_evidence:
    - Account email
    - Affected resource details/IDs
    - Outage dates and times
  review_timeline: Credits issued within one billing cycle after verification
  credit_application: Applied to future charges; non-refundable
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer actions
  - Beta features
  - Account suspension
support_tiers:
  - name: Basic
    slug: basic
    price_model: Free
    sla_eligible: true
    claim_assistance: false
    availability: Business hours
    channels:
      - Ticket
    response_times:
      general: < 24 hours
  - name: Developer
    slug: developer
    price_model: $25/month
    sla_eligible: true
    claim_assistance: false
    availability: Business hours
    channels:
      - Ticket
    response_times:
      general: < 12 hours
  - name: Business
    slug: business
    price_model: $500/month
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
    response_times:
      critical: < 1 hour
      general: < 4 hours
services:
  - id: droplets
    name: CPU Droplets
    category: Compute
    description: Virtual private servers
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.digitalocean.com/sla/cpu-droplets
  - id: spaces
    name: Spaces
    category: Storage
    description: S3-compatible object storage
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.digitalocean.com/sla/spaces
  - id: kubernetes
    name: Managed Kubernetes
    category: Containers
    description: Managed Kubernetes clusters (control plane, HA enabled)
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.digitalocean.com/sla/doks
  - id: databases
    name: Managed Databases
    category: Database
    description: Managed PostgreSQL, MySQL, Redis, MongoDB (with standby nodes)
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.digitalocean.com/sla/databases
  - id: app-platform
    name: App Platform
    category: PaaS
    description: Fully managed PaaS
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.digitalocean.com/sla/app-platform
  - id: load-balancers
    name: Regional Load Balancers
    category: Networking
    description: Managed regional load balancers
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.digitalocean.com/sla/regional-load-balancers
---

DigitalOcean is a Cloud Infrastructure provider. DigitalOcean publishes per-product SLAs; see the official SLA hub at [https://www.digitalocean.com/sla](https://www.digitalocean.com/sla).

<!-- Add human-readable notes about DigitalOcean's SLA nuances here. -->
