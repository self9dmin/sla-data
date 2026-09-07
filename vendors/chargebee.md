---
title: Chargebee
slug: chargebee
vendor_name: Chargebee
legal_entity: Chargebee Inc.
category: Finance & Payments
website: https://www.chargebee.com
scope: global
sla_url: https://www.chargebee.com/legal/sla/
last_verified: '2026-06-25'
last_updated: '2026-06-25'
has_automatic_credits: false
min_plan_for_sla: enterprise
sla_help_wanted: true
needs_review: false
credit_note: 'Reviewed Chargebee legal documentation (chargebee.com/legal/). Chargebee prominently markets a "99.9% Uptime Guarantee" on product and pricing pages, and some sources reference 99.95% for enterprise customers. However, the formal SLA page at chargebee.com/legal/sla/ returns HTTP 403 and no verbatim SLA credit schedule, claim deadline, measurement period, or credit tier percentages appear in any publicly indexed document. Any contractual SLA terms are embedded in negotiated enterprise MSAs. sla_help_wanted: true — formal SLA terms gated behind enterprise agreement. Legal entity: Chargebee Inc. (Delaware corporation).'
credit_policy:
  remedy_type: no_sla
  calculation_type: none
claim_process:
  submission_method: Contact account team
global_exclusions:
  - Formal SLA page not publicly accessible
  - SLA terms embedded in negotiated enterprise MSAs only
support_tiers:
  - name: Rise
    price_model: Subscription
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Scale
    price_model: Subscription
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
      - Phone
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Phone
      - Dedicated support
services:
  - id: chargebee-billing
    name: Chargebee Subscription Billing
    category: Finance & Payments
    description: Subscription management, recurring billing, revenue recognition, and dunning automation
    sla_eligible: false
    source_url: https://www.chargebee.com/legal/sla/
---

Chargebee (Chargebee Inc., Delaware) is a subscription management and recurring billing platform. While Chargebee markets a 99.9% uptime guarantee, the formal SLA document is not publicly accessible and no verbatim credit structure or claim deadline has been confirmed. Enterprise customers should request the full SLA terms during contract negotiation.
