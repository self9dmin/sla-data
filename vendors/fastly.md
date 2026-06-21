---
title: Fastly
slug: fastly
vendor_name: Fastly
legal_entity: Fastly
category: CDN & Edge
website: https://www.fastly.com
scope: global
sla_url: https://docs.fastly.com/products/network-services-service-availability-sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 100
max_credit_percent: 50
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: gold
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
  credit_tiers:
    - uptime_below: 100
      credit_percent: 1
    - uptime_below: 99.99
      credit_percent: 5
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 98
      credit_percent: 50
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: degraded_performance_period
      description: >-
        Requests for Invoice Credits for Degraded Performance must be made
        within 30 days of the period of Degraded Performance.
  submission_method: Credit request to Fastly Support
  submission_url: https://support.fastly.com
  required_evidence: []
  credit_application: >-
    Credits will be applied to the Invoice two months following the month an
    invoice credit was incurred.
global_exclusions:
  - Reduction in availability due to maintenance
  - Customer hardware or software failures
  - Customer or end-user connectivity issues
  - Customer operator errors
  - Traffic exceeding Permitted Utilization
  - Customer corrupted content
  - Acts of god, war, earthquakes, or terrorist actions
  - Unpaid and month-to-month accounts (no invoice credits)
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
  - name: Gold
    slug: gold
    price_model: Paid
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
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
  - id: cdn
    name: Fastly CDN
    category: CDN
    description: Content delivery network (Network Services availability SLA)
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://docs.fastly.com/products/network-services-service-availability-sla
  - id: compute
    name: Fastly Compute
    category: Edge Compute
    description: Edge serverless compute (Network Services availability SLA)
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://docs.fastly.com/products/network-services-service-availability-sla
  - id: ddos
    name: Fastly DDoS Protection
    category: Security
    description: Managed DDoS mitigation service (no uptime guarantee)
    sla_eligible: false
    source_url: https://docs.fastly.com/products/ddos-protection-and-mitigation-service-and-sla
  - id: image-optimizer
    name: Fastly Image Optimizer
    category: Media
    description: Image optimization (Network Services availability SLA)
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://docs.fastly.com/products/network-services-service-availability-sla
  - id: waf
    name: Fastly Next-Gen WAF
    category: Security
    description: Web application firewall (Security service SLA, Hosted Dashboard / Cloud WAF)
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://docs.fastly.com/products/security-service-sla
---

Fastly is a CDN & Edge provider. See the official Network Services service availability SLA at [https://docs.fastly.com/products/network-services-service-availability-sla](https://docs.fastly.com/products/network-services-service-availability-sla).

<!--
SLA nuances (verified 2026-06-19 against docs.fastly.com):
- The Network Services availability SLA (CDN, Compute, Image Optimizer) provides Invoice Credits
  ONLY to Gold or Enterprise Support subscribers. Unpaid and month-to-month accounts get no SLA;
  termed contracts without Gold/Enterprise get only a termination option.
- Credit tiers are tied to Period of Degraded Performance: <100%-99.99% (up to 4.32 min) = 1%;
  <99.99%-99.9% (up to 43.8 min) = 5%; <99.9%-99.0% (up to 7.2 hr) = 10%;
  <99.0%-98.0% (up to 14.4 hr) = 25%; <98.0% (>864 min) = 50%. Max credit = invoice amount for the month.
- Credit requests must be made within 30 days; credits applied to the invoice two months later.
- Security (Next-Gen WAF / Cloud WAF Hosted) services have a separate 99.9% SLA with 5/10/15/20%
  credit tiers (max 20%) and a 15-day claim window — see the Security service SLA page.
- DDoS Protection and Mitigation is a managed service with no availability guarantee.
-->

