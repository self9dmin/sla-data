---
title: Segment
slug: segment
vendor_name: Segment
legal_entity: Segment
category: Analytics & BI
website: https://www.segment.com
scope: global
sla_url: https://www.twilio.com/en-us/legal/service-level-agreement/segment-data-ingestion-api
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.99
max_credit_percent: 0
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_refund
  max_credit_percent: 0
  credit_tiers: []
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: awareness_date
      description: >-
        Customer must exercise the Special Termination Right within thirty (30)
        days of reasonably becoming aware of the Data Ingestion API failing to
        achieve the Target Availability or such right will be deemed waived
  submission_method: Written notice to Twilio
  submission_url: https://www.twilio.com/en-us/legal/service-level-agreement/segment-data-ingestion-api
  required_evidence: []
  review_timeline: Not specified
  credit_application: >-
    No service credits. Remedy is a Special Termination Right with refund of
    pre-paid fees for the impacted Segment Services, paid within thirty (30)
    days of the termination effective date.
global_exclusions:
  - Customer's unauthorized use
  - General Internet problems, force majeure, or other factors outside Twilio's reasonable control (including DDoS attacks)
  - Customer's equipment, software, network, or other infrastructure
  - Third-party systems or acts
  - Scheduled or emergency maintenance
  - Non-supported or beta versions of the service
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
  - id: data-ingestion-api
    name: Segment Data Ingestion API
    category: Data Integration
    description: >-
      The identify, track, page, screen, group, and alias HTTP endpoints that
      ingest data the Customer submits to the Segment Services.
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.twilio.com/en-us/legal/service-level-agreement/segment-data-ingestion-api
support:
  tiers:
    - "Standard"
    - "Advanced"
    - "Premium"
    - "Premium+"
    - "Personalized"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://www.twilio.com/en-us/support-plans/cdp"
  note: "Premium+ adds a TAM and business reviews; pricing 8-15% of license. Targets, not credit-backed."
---

Segment is a Monitoring & Observability provider. See the official SLA at [https://www.twilio.com/en-us/legal/service-level-agreement/segment-data-ingestion-api](https://www.twilio.com/en-us/legal/service-level-agreement/segment-data-ingestion-api).

The Segment SLA covers the Data Ingestion API with a Target Availability of 99.99%, calculated on a calendar-month, per-minute basis. It does not provide service credits; the sole and exclusive remedy is a Special Termination Right (with refund of pre-paid fees for the impacted Segment Services), triggered by a confirmed failure to meet Target Availability in two consecutive months or in any three of six consecutive months. The legacy URL https://segment.com/legal/sla/ now redirects to this Twilio-hosted page.

<!-- Add human-readable notes about Segment's SLA nuances here. -->
