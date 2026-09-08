---
title: Avalara
slug: avalara
vendor_name: Avalara
legal_entity: Avalara, Inc.
category: Finance & Payments
website: https://www.avalara.com/us/en/index.html
scope: global
sla_url: https://legal.avalara.com/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
has_automatic_credits: false
min_plan_for_sla: enterprise
sla_help_wanted: true
needs_review: false
credit_note: 'Reviewed Avalara End User Terms (legal.avalara.com). Avalara''s developer documentation explicitly states: "While there are no Latency Service Level Agreements available, Avalara strives for a consistent service calculation time measured in hundreds of milliseconds." SLA details appear to vary by service and are contained in Service-Specific Supplemental Terms not publicly indexed. Terms note that agreements are binding "together with any applicable Order Document(s) and applicable Service-Specific Supplemental Terms." No numeric uptime commitment or credit schedule found in publicly accessible standard terms. sla_help_wanted: true — SLA terms require review of Order Document and Service-Specific Supplemental Terms. Legal entity: Avalara, Inc. (private company, acquired by Vista Equity Partners 2022; formerly NASDAQ: AVLR).'
credit_policy:
  remedy_type: no_sla
  calculation_type: none
claim_process:
  submission_method: Contact account team
global_exclusions:
  - No Latency SLA published per developer documentation
  - SLA terms vary by service and are in Service-Specific Supplemental Terms
  - Availability SLA terms require Order Document review
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
      - Email
      - Dedicated support
services:
  - id: avalara-avatax
    name: Avalara AvaTax
    category: Finance & Payments
    description: Automated sales tax calculation and compliance API for e-commerce and ERP systems
    sla_eligible: false
    source_url: https://legal.avalara.com/
---

Avalara (Avalara, Inc., private — formerly NASDAQ: AVLR) provides automated tax compliance software including AvaTax. The developer documentation explicitly states no Latency SLA exists. Availability SLA terms are contained in per-customer Order Documents and Service-Specific Supplemental Terms — contact Avalara enterprise sales for SLA commitments.
