---
title: Cloudflare
slug: cloudflare
vendor_name: Cloudflare
legal_entity: Cloudflare, Inc.
category: CDN & Edge
website: https://www.cloudflare.com
scope: global
sla_url: https://www.cloudflare.com/business-sla/
last_verified: '2026-06-23'
last_updated: '2026-06-23'
needs_review: false
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
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Workers KV
    uptime_commitment: 100
  - id: cloudflare-durable-objects
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Durable Objects
    uptime_commitment: 100
  - id: cloudflare-r2
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare R2 Storage
    uptime_commitment: 100
  - id: cloudflare-stream
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Stream
    uptime_commitment: 100
  - id: cloudflare-images
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Images
    uptime_commitment: 100
  - id: cloudflare-load-balancing
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Load Balancing
    uptime_commitment: 100
  - id: cloudflare-argo
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Argo Smart Routing
    uptime_commitment: 100
  - id: cloudflare-ddos
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare DDoS Protection
    uptime_commitment: 100
  - id: cloudflare-bot-management
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Bot Management
    uptime_commitment: 100
  - id: cloudflare-access
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Access
    uptime_commitment: 100
  - id: cloudflare-gateway
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Gateway
    uptime_commitment: 100
  - id: cloudflare-tunnel
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Tunnel
    uptime_commitment: 100
  - id: cloudflare-magic-transit
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Magic Transit
    uptime_commitment: 100
  - id: cloudflare-magic-wan
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Magic WAN
    uptime_commitment: 100
  - id: cloudflare-spectrum
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Spectrum
    uptime_commitment: 100
  - id: cloudflare-ssl-tls
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare SSL/TLS
    uptime_commitment: 100
  - id: cloudflare-rate-limiting
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Rate Limiting
    uptime_commitment: 100
  - id: cloudflare-api-gateway
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare API Gateway
    uptime_commitment: 100
  - id: cloudflare-waiting-room
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Waiting Room
    uptime_commitment: 100
  - id: cloudflare-turnstile
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Turnstile
    uptime_commitment: 100
  - id: cloudflare-warp
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare WARP
    uptime_commitment: 100
  - id: cloudflare-browser-isolation
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Browser Isolation
    uptime_commitment: 100
  - id: cloudflare-casb
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare CASB
    uptime_commitment: 100
  - id: cloudflare-email-security
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Email Security
    uptime_commitment: 100
  - id: cloudflare-1111
    source_url: https://www.cloudflare.com/business-sla/
    name: 1.1.1.1 DNS Resolver
  - id: cloudflare-d1
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare D1
  - id: cloudflare-email-routing
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Email Routing
  - id: cloudflare-registrar
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Registrar
  - id: cloudflare-always-online
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Always Online
  - id: cloudflare-time-services
    source_url: https://www.cloudflare.com/business-sla/
    name: Cloudflare Time Services
support:
  tiers:
    - Basic
    - Pro
    - Business
    - Enterprise
    - Premium Success
  has_24x7: true
  fastest_response: 30 min (P1, paid TAM Service; ~1 hr base Premium Enterprise)
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: https://www.cloudflare.com/plans/enterprise/externa/
  note: Enterprise includes 24/7/365 support; TAM and Premium Success are paid add-ons. Response times are targets. 30-min/sub-1-hr P1 is paid-gated (TAM Service / Premium Enterprise SLA); base Enterprise is 2-hr P1. Chat is Business+, emergency phone is Enterprise P1-only. Professional Services + Managed Defense. 30-min/sub-1-hr P1 is paid-gated (TAM Service / Premium Enterprise SLA); base Enterprise is 2-hr P1. Chat is Business+, emergency phone is Enterprise P1-only. Professional Services + Managed Defense.
  channels:
    - portal
    - chat
    - phone
    - discord
---

Cloudflare is a CDN & Edge provider. See the official SLA at [https://www.cloudflare.com/business-sla/](https://www.cloudflare.com/business-sla/).

<!-- Add human-readable notes about Cloudflare's SLA nuances here. -->
