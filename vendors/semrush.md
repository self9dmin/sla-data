---
title: Semrush
slug: semrush
vendor_name: Semrush
legal_entity: Semrush
category: CRM & Marketing
website: https://www.semrush.com
scope: global
sla_url: https://www.semrush.com/company/legal/terms-of-service/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Semrush does not publish a public credit-backed SLA. Its Terms of Service
  (https://www.semrush.com/company/legal/terms-of-service/) disclaims
  availability: the Services are provided "AS-IS" and "AS AVAILABLE" with "no
  warranty that the Services or the Website ... WILL BE AVAILABLE ON AN
  UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS." The only uptime figure
  on semrush.com is a non-binding infrastructure statement on the Security page
  (https://www.semrush.com/company/security/): "The infrastructure providers
  use commercially reasonable efforts to ensure a minimum of 99.9% uptime." No
  service credits, credit tiers, max-credit percentage, claim deadline, or
  min-plan SLA could be verified on the vendor's domain. The existing
  uptime_commitment, credit_policy, claim_process, max_credit_percent,
  claim_deadline_days, has_automatic_credits, and min_plan_for_sla values are
  unverified and left unchanged pending review/removal.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
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
  submission_url: https://www.semrush.com/kb/
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
  - id: ppc
    name: Advertising Toolkit
    category: PPC
    description: PPC research and management
    sla_eligible: true
    source_url: https://www.semrush.com/company/legal/terms-of-service/
  - id: competitive
    name: Competitive Research
    category: Research
    description: Competitive analysis
    sla_eligible: true
    source_url: https://www.semrush.com/company/legal/terms-of-service/
  - id: content
    name: Content Marketing
    category: Content
    description: Content marketing platform
    sla_eligible: true
    source_url: https://www.semrush.com/company/legal/terms-of-service/
  - id: seo
    name: SEO Toolkit
    category: SEO
    description: SEO research and tools
    sla_eligible: true
    source_url: https://www.semrush.com/company/legal/terms-of-service/
  - id: social
    name: Social Media Toolkit
    category: Social Media
    description: Social media management
    sla_eligible: true
    source_url: https://www.semrush.com/company/legal/terms-of-service/
support:
  tiers:
    - "Free"
    - "Paid"
    - "Enterprise"
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: false
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.semrush.com/kb/264-contact-semrush"
  note: "Enterprise adds dedicated account management, onboarding, and training."
---

Semrush is a Marketing & Analytics provider. See the official SLA at [https://www.semrush.com/company/legal/terms-of-service/](https://www.semrush.com/company/legal/terms-of-service/).

<!-- Add human-readable notes about Semrush's SLA nuances here. -->
