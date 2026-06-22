---
title: Cloudinary
slug: cloudinary
vendor_name: Cloudinary
legal_entity: Cloudinary
category: Content & Media
website: https://www.cloudinary.com
scope: global
sla_url: https://cloudinary.com/tou
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://support.cloudinary.com
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 15 business days
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
  - id: ai
    name: AI Features
    category: AI
    description: AI-powered media tools
    sla_eligible: true
    source_url: https://cloudinary.com/tou
  - id: dam
    name: Digital Asset Management
    category: DAM
    description: Asset management platform
    sla_eligible: true
    source_url: https://cloudinary.com/tou
  - id: delivery
    name: Media Delivery
    category: CDN
    description: Global media delivery
    sla_eligible: true
    source_url: https://cloudinary.com/tou
  - id: transform
    name: Media Transformation
    category: Media
    description: On-the-fly transformations
    sla_eligible: true
    source_url: https://cloudinary.com/tou
  - id: upload
    name: Media Upload
    category: Media
    description: Image and video upload
    sla_eligible: true
    source_url: https://cloudinary.com/tou
support:
  tiers:
    - "Free"
    - "Plus"
    - "Advanced"
    - "Enterprise"
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://cloudinary.com/pricing"
  note: "Enterprise SLAs referenced but response times not publicly published."
---

Cloudinary is a CDN & Edge provider. Cloudinary does not publish a credit-bearing SLA: its Terms of Use state it "strives for a 100% Uptime" and that the "support SLA is your sole and exclusive remedy," while the MSA notes the SLA is "attached to the Order Form" (per-contract, not public). See the Terms of Use at [https://cloudinary.com/tou](https://cloudinary.com/tou).

<!-- Add human-readable notes about Cloudinary's SLA nuances here. -->
