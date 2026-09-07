---
title: Wasabi
slug: wasabi
vendor_name: Wasabi
legal_entity: Wasabi Technologies, LLC
category: Cloud Infrastructure
website: https://wasabi.com
scope: global
sla_url: https://wasabi.com/legal/service-level-agreement/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: all plans
needs_review: false
credit_note: 'Verified against Wasabi Hot Cloud Storage SLA (wasabi.com/legal/service-level-agreement/): "Monthly Uptime Percentage is calculated by subtracting from 100%, the average of the Error Rates from each five-minute period in the monthly billing cycle. Error Rate means: (i) the total number of internal server errors returned by Wasabi as error status ''Internal Error'' or ''Service Unavailable'' divided by (ii) the total number of requests for the applicable request type during that five-minute period." Sole remedy: "Your sole and exclusive remedy for any unavailability, non-performance, or other failure by us to provide the Services is the receipt of a Service Credit (if eligible) in accordance with the terms of this SLA." Claim: "the credit request must be received by us by the end of the second billing cycle after which the incident occurred and must include specific documentation of the errors and outages claimed." Minimum credit: "A Service Credit will be applicable and issued only if the credit amount for the applicable monthly billing cycle is greater than one dollar ($1 USD)." Credits applied as monetary credit to future Wasabi Service use. The specific credit percentage per uptime tier is on the SLA page but was not confirmed verbatim — direct page verification required.'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  submission_method: Email
  submission_url: mailto:support@wasabi.com
  credit_application: Monetary credit to future Wasabi Service usage
  required_evidence:
    - Error documentation showing internal server errors or service unavailability
    - Dates and times of errors/outages
    - Request type affected
  deadlines:
    - type: submission
      days: 60
      business_days: false
      anchor_point: billing_cycle_end
      description: Credit request must be received by the end of the second billing cycle after the incident
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Credits below $1 USD minimum threshold
support_tiers:
  - name: Standard
    price_model: Included
    sla_eligible: true
    availability: Business hours
    channels:
      - Email
      - Ticket
services:
  - id: hot-cloud-storage
    name: Hot Cloud Storage
    category: Object Storage
    description: S3-compatible hot cloud object storage
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://wasabi.com/legal/service-level-agreement/
---

Wasabi is a cloud object storage provider offering hot cloud storage at a flat per-TB price with no egress fees. The SLA covers Hot Cloud Storage with a 99.9% monthly availability commitment and sole-remedy credits. The specific credit percentage per uptime tier requires direct verification of the SLA page; the claim must be filed by the end of the second billing cycle after the incident.
