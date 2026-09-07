---
title: Temporal Cloud
slug: temporal
vendor_name: Temporal Cloud
legal_entity: Temporal Technologies, Inc.
category: Developer Tools
website: https://temporal.io
scope: global
sla_url: https://docs.temporal.io/cloud/sla
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: false
credit_note: 'Verified against Temporal Cloud SLA documentation (docs.temporal.io/cloud/sla) and Terms of Service (temporal.io/terms-of-service, April 2025). Two uptime tiers verbatim: "Standard Temporal Cloud deployment is provided at availability and guarantees against Service errors at a rate of 99.9%." And: "Same Region Replication and Multi-region Temporal Cloud deployments are provided at availability and are guaranteed against Service errors at a rate of 99.99%." Measurement period verbatim: "The Monthly Uptime Percentage for a given Temporal Namespace is calculated as the average of the availability for all 5-minute intervals in a monthly billing cycle." Error type verbatim: "Errors recorded against the SLA are service errors, such as the UNAVAILABLE gRPC status code." Credit tiers verbatim for Standard deployment: <99.9% but ≥99.0% → 10% of monthly Namespace fees; <99.0% but ≥95.0% → 25% of monthly Namespace fees; <95.0% → 100% of monthly fees. Multi-region tier verbatim: <99.99% but ≥99.0% → 10%; full multi-region table below 99.0% not publicly indexed. Credit definition verbatim: "A ''Service Credit'' is a dollar credit, calculated as set forth below, that may be credited back to Customer." Claim deadline verbatim: "Customers may submit a Service Credit request within thirty (30) days of such Downtime Event." Claim process verbatim: "The Service Credit request must be written and provide details of the Downtime Event to enable Temporal to validate such Service Credit request." Credit delivery verbatim: "Service Credits for Downtime Events will be credited against subsequent payments owed by Customer." Sole remedy verbatim: "Service Credits are Customer''s sole remedy for any Downtime Events." Governing law: State of Washington (April 2025 ToS). Legal entity: Temporal Technologies, Inc. (Delaware corporation, incorporated November 8, 2019; registered address: 4431 175th Pl SE, Bellevue, WA 98006).'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99.0
      credit_percent: 25
    - uptime_below: 95.0
      credit_percent: 100
claim_process:
  submission_method: Written request
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit written Service Credit request within 30 days of the Downtime Event
global_exclusions:
  - Force majeure events beyond Temporal control
  - Customer or third-party voluntary actions/inactions
  - Internet access problems beyond Temporal demarcation point
  - Multi-region credit tiers below 99.0% not publicly confirmed
support_tiers:
  - name: Developer
    price_model: Usage-based
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Documentation
  - name: Production
    price_model: Usage-based
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Mission Critical
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Dedicated support
services:
  - id: temporal-cloud-standard
    name: Temporal Cloud Standard Namespace
    category: Developer Tools
    description: Managed workflow orchestration platform built on the open-source Temporal engine
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://docs.temporal.io/cloud/sla
  - id: temporal-cloud-ha
    name: Temporal Cloud High Availability Namespace
    category: Developer Tools
    description: Multi-region or same-region replication namespace with 99.99% SLA
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://docs.temporal.io/cloud/sla
---

Temporal Cloud (Temporal Technologies, Inc., Delaware; Bellevue, WA) is a managed workflow orchestration platform. Standard Namespaces carry a 99.9% monthly SLA with a 10%/25%/100% tiered credit structure. High Availability (multi-region/same-region replication) Namespaces get 99.99%. Uptime is measured in 5-minute intervals averaged over the monthly billing cycle — only UNAVAILABLE gRPC errors count as downtime. Written credit requests must be submitted within 30 days of the Downtime Event.
