---
title: Cloudflare
slug: cloudflare
vendor_name: Cloudflare
legal_entity: Cloudflare, Inc.
category: CDN & Edge
website: https://www.cloudflare.com
scope: global
sla_url: https://www.cloudflare.com/business-sla/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: false
review_note: >-
  Verified against the official Cloudflare Business SLA on 2026-06-19.
uptime_commitment: 100
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: business
credit_policy:
  calculation_type: flat
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 100
      credit_percent: 100
claim_process:
  deadlines:
    - type: notification
      days: 5
      business_days: true
      anchor_point: incident_date
      description: Notify Cloudflare Support of the incident within 5 business days
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_following_billing_month
      description: Submit the claim by the end of the billing month following the billing month in which the incident occurred
  submission_method: Support Ticket
  submission_url: https://dash.cloudflare.com/support
  required_evidence:
    - Detailed descriptions of the incident(s)
    - The duration of the incident
    - Network traceroutes
    - The URL(s) affected
    - Any attempts made by Customer to resolve the incident
  review_timeline: Not specified in SLA
  credit_application: Applied against monthly service fees
global_exclusions:
  - Factors outside Cloudflare's reasonable control
  - Customer or third-party hardware or software
  - Actions or inactions of Customer or third parties
  - Use of the Service after Cloudflare advised modification
  - Beta and trial Service
  - Acts or omissions of Customer's users/agents/contractors/vendors
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
    price_model: $20/month per domain
    sla_eligible: false
    claim_assistance: false
    availability: Email
    channels:
      - Email
    response_times:
      general: < 24 hours
  - name: Business
    slug: business
    price_model: $200/month per domain
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Chat
    response_times:
      critical: < 2 hours
      general: < 8 hours
  - name: Enterprise
    slug: enterprise
    price_model: Custom pricing
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
      - Chat
      - TAM
    response_times:
      critical: < 15 minutes
      high: < 2 hours
    features:
      tam: Dedicated
      customSLA: true
services:
  - id: cdn
    name: Cloudflare CDN
    category: CDN
    description: Global content delivery network
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.cloudflare.com/business-sla/
  - id: dns
    name: Cloudflare DNS
    category: DNS
    description: Managed DNS service
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.cloudflare.com/business-sla/
  - id: workers
    name: Cloudflare Workers
    category: Compute
    description: Serverless edge compute
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.cloudflare.com/business-sla/
  - id: r2
    name: Cloudflare R2
    category: Storage
    description: Zero egress object storage
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.cloudflare.com/business-sla/
  - id: pages
    name: Cloudflare Pages
    category: PaaS
    description: JAMstack platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.cloudflare.com/business-sla/
  - id: waf
    name: Cloudflare WAF
    category: Security
    description: Web application firewall
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.cloudflare.com/business-sla/
  - id: ddos
    name: DDoS Protection
    category: Security
    description: DDoS mitigation
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.cloudflare.com/business-sla/
  - id: cloudflare-workers-kv
    name: Cloudflare Workers KV
    uptime_commitment: 100
  - id: cloudflare-durable-objects
    name: Cloudflare Durable Objects
    uptime_commitment: 100
  - id: cloudflare-r2
    name: Cloudflare R2 Storage
    uptime_commitment: 100
  - id: cloudflare-stream
    name: Cloudflare Stream
    uptime_commitment: 100
  - id: cloudflare-images
    name: Cloudflare Images
    uptime_commitment: 100
  - id: cloudflare-load-balancing
    name: Cloudflare Load Balancing
    uptime_commitment: 100
  - id: cloudflare-argo
    name: Cloudflare Argo Smart Routing
    uptime_commitment: 100
  - id: cloudflare-ddos
    name: Cloudflare DDoS Protection
    uptime_commitment: 100
  - id: cloudflare-bot-management
    name: Cloudflare Bot Management
    uptime_commitment: 100
  - id: cloudflare-access
    name: Cloudflare Access
    uptime_commitment: 100
  - id: cloudflare-gateway
    name: Cloudflare Gateway
    uptime_commitment: 100
  - id: cloudflare-tunnel
    name: Cloudflare Tunnel
    uptime_commitment: 100
  - id: cloudflare-magic-transit
    name: Cloudflare Magic Transit
    uptime_commitment: 100
  - id: cloudflare-magic-wan
    name: Cloudflare Magic WAN
    uptime_commitment: 100
  - id: cloudflare-spectrum
    name: Cloudflare Spectrum
    uptime_commitment: 100
  - id: cloudflare-ssl-tls
    name: Cloudflare SSL/TLS
    uptime_commitment: 100
  - id: cloudflare-rate-limiting
    name: Cloudflare Rate Limiting
    uptime_commitment: 100
  - id: cloudflare-api-gateway
    name: Cloudflare API Gateway
    uptime_commitment: 100
  - id: cloudflare-waiting-room
    name: Cloudflare Waiting Room
    uptime_commitment: 100
  - id: cloudflare-turnstile
    name: Cloudflare Turnstile
    uptime_commitment: 100
  - id: cloudflare-warp
    name: Cloudflare WARP
    uptime_commitment: 100
  - id: cloudflare-browser-isolation
    name: Cloudflare Browser Isolation
    uptime_commitment: 100
  - id: cloudflare-casb
    name: Cloudflare CASB
    uptime_commitment: 100
  - id: cloudflare-email-security
    name: Cloudflare Email Security
    uptime_commitment: 100
  - id: cloudflare-1111
    name: 1.1.1.1 DNS Resolver
  - id: cloudflare-d1
    name: Cloudflare D1
  - id: cloudflare-email-routing
    name: Cloudflare Email Routing
  - id: cloudflare-registrar
    name: Cloudflare Registrar
  - id: cloudflare-always-online
    name: Cloudflare Always Online
  - id: cloudflare-time-services
    name: Cloudflare Time Services
---

Cloudflare is a CDN & Edge provider. See the official SLA at [https://www.cloudflare.com/business-sla/](https://www.cloudflare.com/business-sla/).

<!-- Add human-readable notes about Cloudflare's SLA nuances here. -->
