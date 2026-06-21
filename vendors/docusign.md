---
title: DocuSign
slug: docusign
vendor_name: DocuSign
legal_entity: DocuSign
category: Productivity
website: https://www.docusign.com
scope: global
sla_url: https://www.docusign.com/legal/terms-and-conditions/schedule-docusign-signature/attachment-eu-advanced-signature-sla
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  The top-line 99.99% uptime and percentage credits could not be confirmed on
  any live docusign.com SLA page; live attachments instead use a time-based
  credit table with no stated uptime percentage. Numbers left as-is pending
  confirmation of the canonical core Signature SLA URL.
uptime_commitment: 99.99
max_credit_percent: 25
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 15
  credit_tiers:
    - uptime_below: null
      credit_percent: 15
    - uptime_below: null
      credit_percent: 10
    - uptime_below: null
      credit_percent: 5
  credit_tier_note: >-
    Credits are based on cumulative Unavailable Time in a calendar month, not
    on a monthly uptime percentage. Per the live DocuSign SLA: Unavailable Time
    more than 45 minutes = 5%; more than 4.5 hours = 10%; more than 9 hours =
    15% of the monthly fee for the affected Service.
claim_process:
  deadlines:
    - type: submission
      days: null
      business_days: false
      anchor_point: end_of_term
      description: >-
        Customer must provide DocuSign with written notice no later than the end
        of the Term during which the breach occurred.
  submission_method: Written notice to DocuSign
  submission_url: https://support.docusign.com
  required_evidence:
    - Written notice of the Unavailable Time / breach
  review_timeline: Not specified
  credit_application: Applied against the next payment due for the affected Service
global_exclusions:
  - Scheduled Maintenance
  - Acts or omissions of Customer, its Affiliates, or representatives
  - Events outside DocuSign's reasonable control, including force majeure events
  - Customer's delay or failure to perform its obligations under the Agreement
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
  - id: api
    name: DocuSign API
    category: APIs
    description: Developer API
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.docusign.com/legal/terms-and-conditions/msa-service-schedules
  - id: clm
    name: DocuSign CLM
    category: Legal
    description: Contract lifecycle management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.docusign.com/legal/terms-and-conditions/msa-service-schedules
  - id: esignature
    name: DocuSign eSignature
    category: Legal
    description: Electronic signatures
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.docusign.com/legal/terms-and-conditions/schedule-docusign-signature/attachment-eu-advanced-signature-sla
  - id: identify
    name: DocuSign Identify
    category: Identity Management
    description: Identity verification
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.docusign.com/legal/terms-and-conditions/msa-service-schedules
---

DocuSign is a Enterprise Software provider. See the official SLA at [https://www.docusign.com/legal/terms-and-conditions/schedule-docusign-signature/attachment-eu-advanced-signature-sla](https://www.docusign.com/legal/terms-and-conditions/schedule-docusign-signature/attachment-eu-advanced-signature-sla). Current Master Services Agreement schedules and SLA attachments are indexed at [https://www.docusign.com/legal/terms-and-conditions/msa-service-schedules](https://www.docusign.com/legal/terms-and-conditions/msa-service-schedules).

<!-- Add human-readable notes about DocuSign's SLA nuances here. -->
