---
title: Zendesk
slug: zendesk
vendor_name: Zendesk
legal_entity: Zendesk
category: Communication & Collaboration
website: https://www.zendesk.com
scope: global
sla_url: https://support.zendesk.com/hc/en-us/articles/9974862958746-About-Zendesk-service-availability
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Former sla_url (zendesk.com/company/legal/service-level-agreement/) returns
  404; Zendesk no longer hosts a standalone public SLA doc. Verified from the
  official "About Zendesk service availability" article: 99.9% guarantee for
  Premier Support customers on qualifying plans, claim by emailing
  servicecredit@zendesk.com within 60 days of the impacted month, credits are
  the only remedy and are not automatic. Corrected: claim_deadline_days 45->60,
  min_plan standard->premier. NOT verified: the credit-percentage tier table and
  max_credit_percent (100) — Zendesk does not publish credit tiers on any public
  page (they live in non-public Premier Support contractual terms); the only
  public comparator (Sunshine Conversations) caps at 10%/month. credit_tiers and
  max_credit_percent below are retained as prior approximations.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: premier
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  deadlines:
    - type: submission
      days: 60
      business_days: false
      anchor_point: end_of_impacted_month
      description: Email servicecredit@zendesk.com to submit a claim within 60 days of the impacted month when availability falls below 99.9%
  submission_method: Email to servicecredit@zendesk.com
  submission_url: https://support.zendesk.com
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
  - id: chat
    name: Zendesk Chat
    category: Customer Service
    description: Live chat
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://support.zendesk.com/hc/en-us/articles/9974862958746-About-Zendesk-service-availability
  - id: explore
    name: Zendesk Explore
    category: Analytics
    description: Analytics and reporting
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://support.zendesk.com/hc/en-us/articles/9974862958746-About-Zendesk-service-availability
  - id: guide
    name: Zendesk Guide
    category: Knowledge Base
    description: Help center and knowledge base
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://support.zendesk.com/hc/en-us/articles/9974862958746-About-Zendesk-service-availability
  - id: sell
    name: Zendesk Sell
    category: CRM
    description: Sales CRM
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://support.zendesk.com/hc/en-us/articles/9974862958746-About-Zendesk-service-availability
  - id: support
    name: Zendesk Support
    category: Customer Service
    description: Ticketing system
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://support.zendesk.com/hc/en-us/articles/9974862958746-About-Zendesk-service-availability
  - id: talk
    name: Zendesk Talk
    category: Voice
    description: Call center software
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://support.zendesk.com/hc/en-us/articles/9974862958746-About-Zendesk-service-availability
---

Zendesk is a Communication & Collaboration provider. See the official SLA at [https://support.zendesk.com/hc/en-us/articles/9974862958746-About-Zendesk-service-availability](https://support.zendesk.com/hc/en-us/articles/9974862958746-About-Zendesk-service-availability).

<!-- Add human-readable notes about Zendesk's SLA nuances here. -->
