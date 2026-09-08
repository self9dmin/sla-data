---
title: Affirm
slug: affirm
vendor_name: Affirm
legal_entity: Affirm, Inc.
category: Finance & Payments
website: https://www.affirm.com
scope: global
sla_url: https://www.affirm.com/terms
last_verified: '2026-06-25'
last_updated: '2026-06-25'
has_automatic_credits: false
min_plan_for_sla: enterprise
sla_help_wanted: true
needs_review: false
credit_note: 'Reviewed Affirm Merchant Portal Terms of Service (March 5, 2024) and US Service Terms (May 2023). No uptime percentage commitment appears in the standard merchant agreements. A SEC-filed Customer Installment Program Agreement references "Service Level Agreement (SLA) Standards" with the clause: "Each Party shall provide all services contemplated by this Agreement with promptness and diligence and in a professional and workmanlike manner." [VERBATIM — from SEC filing] However, specific SLA metrics are redacted [***] in the SEC filing. The SEC filing confirms: "terminations or suspensions shall be effectuated in accordance with SLAs set forth in the agreement" — Affirm does negotiate private SLAs for major partnerships, but these are not publicly accessible. No credit schedule, uptime percentage, claim deadline, or credit tiers found in any publicly indexed merchant document. sla_help_wanted: true — private negotiated SLAs exist for major partnerships but no public merchant SLA. Legal entity: Affirm, Inc. (Delaware). Per Merchant Portal ToS: "entered into between Affirm, Inc. or Affirm Canada Holdings Ltd. and merchants." [VERBATIM]'
credit_policy:
  remedy_type: no_sla
  calculation_type: none
claim_process:
  submission_method: Contact account team
global_exclusions:
  - No public merchant SLA with uptime commitments
  - SLA metrics redacted in SEC filings
  - Private negotiated SLAs for major partnerships only
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
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Dedicated support
services:
  - id: affirm-bnpl
    name: Affirm Buy Now Pay Later
    category: Finance & Payments
    description: Buy Now Pay Later payment solution for merchants enabling flexible consumer payment plans at checkout
    sla_eligible: false
    source_url: https://www.affirm.com/terms
---

Affirm (Affirm, Inc., Delaware) is a Buy Now Pay Later payment platform for merchants. Standard merchant agreements contain no uptime percentage or credit schedule — a professional standards clause references "SLA Standards" but specific metrics are redacted in SEC filings. Affirm does negotiate private SLAs for major partnerships. Merchants should request custom SLA terms through Affirm enterprise sales.
