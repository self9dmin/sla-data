---
title: Zoho
slug: zoho
vendor_name: Zoho
legal_entity: Zoho
category: CRM & Marketing
website: https://www.zoho.com
scope: global
sla_url: https://help.zoho.com/portal/en/kb/crm/getting-started/product-architecture-and-reliability/articles/zoho-crm-uptime-sla-and-availability
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Zoho's official SLA pages (CRM, Vault, Connect, Bookings, DataPrep on
  help.zoho.com) state a 99.9% monthly uptime commitment but contain NO service
  credit, credit tiers, max credit, claim deadline, or claim process. The
  general terms (zoho.com/terms.html) disclaim any uptime warranty. The
  credit_policy, max_credit_percent (100), claim_deadline_days (30), and
  claim_process in this file are NOT verifiable on zoho.com and appear
  fabricated; left unchanged pending review/removal. Verified 2026-06-19:
  uptime_commitment 99.9 and exclusions only.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
uptime_commitment: 99.9
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
  submission_url: https://www.zoho.com/contactus.html
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Planned maintenance (customers notified at least 48 hours in advance)
  - Factors outside Zoho's control (ISP failures, natural disasters, denial-of-service attacks)
  - Customer-side issues (customer's own hardware, software, or network configuration)
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
  - id: books
    name: Zoho Books
    category: Accounting
    description: Accounting software
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://help.zoho.com/portal/en/kb/crm/getting-started/product-architecture-and-reliability/articles/zoho-crm-uptime-sla-and-availability
  - id: campaigns
    name: Zoho Campaigns
    category: Email Marketing
    description: Email marketing
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://help.zoho.com/portal/en/kb/crm/getting-started/product-architecture-and-reliability/articles/zoho-crm-uptime-sla-and-availability
  - id: crm
    name: Zoho CRM
    category: CRM
    description: Customer relationship management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://help.zoho.com/portal/en/kb/crm/getting-started/product-architecture-and-reliability/articles/zoho-crm-uptime-sla-and-availability
  - id: desk
    name: Zoho Desk
    category: Customer Service
    description: Help desk software
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://help.zoho.com/portal/en/kb/crm/getting-started/product-architecture-and-reliability/articles/zoho-crm-uptime-sla-and-availability
  - id: people
    name: Zoho People
    category: HR
    description: HR management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://help.zoho.com/portal/en/kb/crm/getting-started/product-architecture-and-reliability/articles/zoho-crm-uptime-sla-and-availability
  - id: projects
    name: Zoho Projects
    category: Project Management
    description: Project management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://help.zoho.com/portal/en/kb/crm/getting-started/product-architecture-and-reliability/articles/zoho-crm-uptime-sla-and-availability
support:
  tiers:
    - "Classic"
    - "Premium"
    - "Enterprise"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: tam
  architecture_review: false
  professional_services: false
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://www.zoho.com/one/pricing/support-plans.html"
  note: "Premium 20% / Enterprise 25% of license; response times are targets, no credit remedy."
---

Zoho is a CRM & Sales provider. See the official SLA at [https://help.zoho.com/portal/en/kb/crm/getting-started/product-architecture-and-reliability/articles/zoho-crm-uptime-sla-and-availability](https://help.zoho.com/portal/en/kb/crm/getting-started/product-architecture-and-reliability/articles/zoho-crm-uptime-sla-and-availability).

<!-- Add human-readable notes about Zoho's SLA nuances here. -->
