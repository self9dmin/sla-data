---
title: Webflow
slug: webflow
vendor_name: Webflow
legal_entity: Webflow
category: E-commerce
website: https://www.webflow.com
scope: global
sla_url: https://webflow.com/legal/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 25
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: flat
  remedy_type: service_credit
  max_credit_percent: 25
claim_process:
  submission_method: Written request to Webflow
  submission_url: https://support.webflow.com/get-support
  claim_deadline_days: 7
  required_evidence:
    - Notice of downtime
    - Initial time of downtime
  review_timeline: As confirmed by Webflow
  credit_application: Applied toward ensuing Renewal Term
needs_review: true
review_note: >-
  Official Webflow SLA (https://webflow.com/legal/sla, "Last Updated 08.01.2024")
  is Enterprise-only and incorporated into the MSA/Order Form. Verified verbatim:
  Downtime Credit of "2% of the total Fees paid by Customer prorated for the month"
  per Qualifying Downtime (downtime >30 consecutive min exceeding the Uptime Level
  threshold); cap "shall not accrue Downtime Credits exceeding 25% of the Monthly
  Fees per calendar month"; must "request such Downtime Credits in writing within
  seven (7) calendar days from the initial time of downtime". The SLA does NOT
  publish a fixed uptime percentage: Section 1.1 ties Hosting/Application Uptime
  Levels to "the thresholds for the Service Tier subscribed to by Customer on the
  applicable Order Form." The 99.9 uptime_commitment and per-service values are
  carried over from prior data and could NOT be confirmed verbatim on the public
  SLA (set by individual Order Form). Per-service source_url updated to the
  canonical SLA page.
global_exclusions:
  - Scheduled maintenance
  - Outages of third-party applications, utilities, or connections integrated by Customer (e.g. plug-ins or APIs)
  - Components, processes, or systems not within Webflow's exclusive control (e.g. Customer proxies or DNS resolvers)
  - Third-party denial of service or malicious attacks
  - Force Majeure Events
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
  - id: cms
    name: Webflow CMS
    category: CMS
    description: Content management system
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://webflow.com/legal/sla
  - id: designer
    name: Webflow Designer
    category: Design
    description: Visual web design tool
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://webflow.com/legal/sla
  - id: ecommerce
    name: Webflow Ecommerce
    category: E-commerce
    description: E-commerce functionality
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://webflow.com/legal/sla
  - id: hosting
    name: Webflow Hosting
    category: Hosting
    description: Website hosting
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://webflow.com/legal/sla
  - id: logic
    name: Webflow Logic
    category: Automation
    description: Visual automation builder
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://webflow.com/legal/sla
support:
  tiers:
    - "Standard"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://webflow.com/enterprise"
  note: "Enterprise includes a dedicated CSM, priority queue, and onboarding; response details negotiated per contract."
---

Webflow is a E-commerce provider. See the official SLA at [https://webflow.com/legal/sla](https://webflow.com/legal/sla).

<!-- Add human-readable notes about Webflow's SLA nuances here. -->
