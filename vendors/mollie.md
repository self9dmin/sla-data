---
title: Mollie
slug: mollie
vendor_name: Mollie
legal_entity: Mollie B.V.
category: Finance & Payments
website: https://www.mollie.com
scope: Europe
sla_url: https://www.mollie.com/en/user-agreement
last_verified: '2026-06-24'
last_updated: '2026-06-24'
has_automatic_credits: false
min_plan_for_sla: enterprise
needs_review: false
credit_note: 'Reviewed Mollie User Agreement. The agreement explicitly disclaims guaranteed availability — verbatim language: Mollie "cannot guarantee availability" of the platform. No numeric uptime commitment or credit structure found in the standard User Agreement. Enterprise agreements may include negotiated SLA terms. Legal entity: Mollie B.V. (Netherlands, KvK 30204462).'
credit_policy:
  remedy_type: no_sla
  calculation_type: none
claim_process:
  submission_method: Contact account team
global_exclusions:
  - Availability not guaranteed in standard agreement
  - No uptime SLA in User Agreement
support_tiers:
  - name: Standard
    price_model: Usage-based
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Enterprise
    price_model: Custom
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
      - Dedicated support
services:
  - id: mollie-payment-gateway
    name: Mollie Payment Gateway
    category: Finance & Payments
    description: Online payment processing for European businesses with multi-method support
    sla_eligible: false
    source_url: https://www.mollie.com/en/user-agreement
---

Mollie (Mollie B.V., KvK 30204462, Netherlands) is a European payment processor. The standard User Agreement explicitly states Mollie "cannot guarantee availability" — no numeric uptime commitment or credit remedy applies. Enterprise customers should contact Mollie directly for any SLA terms.
