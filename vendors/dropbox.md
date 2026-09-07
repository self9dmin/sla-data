---
title: Dropbox
slug: dropbox
vendor_name: Dropbox
legal_entity: Dropbox
category: Productivity
website: https://www.dropbox.com
scope: global
sla_url: https://www.dropbox.com/business_agreement
last_verified: '2026-06-23'
last_updated: '2026-06-23'
has_automatic_credits: false
min_plan_for_sla: standard
credit_note: The Dropbox Business Agreement provides the service "as is" / "as available" and disclaims any warranty of uninterrupted service — no public uptime SLA or service credits. (Previously recorded as credit without support.)
credit_policy:
  calculation_type: none
  remedy_type: no_sla
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support Request
  submission_url: https://www.dropbox.com/support
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Free tier services
  - Beta features
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
    name: Dropbox API
    category: APIs
    description: Developer API
    sla_eligible: true
    source_url: https://www.dropbox.com/business_agreement
  - id: storage
    name: Dropbox Cloud Storage
    category: Storage
    description: File storage
    sla_eligible: true
    source_url: https://www.dropbox.com/business_agreement
  - id: paper
    name: Dropbox Paper
    category: Productivity
    description: Collaborative docs
    sla_eligible: true
    source_url: https://www.dropbox.com/business_agreement
  - id: sign
    name: Dropbox Sign
    category: Legal
    description: E-signatures (HelloSign)
    sla_eligible: true
    source_url: https://www.dropbox.com/business_agreement
  - id: sync
    name: Dropbox Sync
    category: Storage
    description: File sync
    sla_eligible: true
    source_url: https://www.dropbox.com/business_agreement
support:
  tiers:
    - Standard
    - Enterprise
    - Premium Support add-on
  has_24x7: true
  fastest_response: 1 hour (email, Enterprise)
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: https://help.dropbox.com/account-settings/customer-support-levels
  note: Response times are stated as targets in help docs, not credit-backed SLAs. Phone/chat are Business/Enterprise (and Premium add-on); 24x7 phone at Enterprise.
  channels:
    - portal
    - email
    - chat
    - phone
---

Dropbox is a Productivity & Collaboration provider. See the official Dropbox Business Agreement at [https://www.dropbox.com/business_agreement](https://www.dropbox.com/business_agreement). Note: Dropbox does not publish a public uptime SLA with service credits; its agreements disclaim any availability guarantee.

<!-- Add human-readable notes about Dropbox's SLA nuances here. -->
