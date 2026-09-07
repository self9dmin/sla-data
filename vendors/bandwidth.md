---
title: Bandwidth
slug: bandwidth
vendor_name: Bandwidth
legal_entity: Bandwidth Inc.
category: Communication & Collaboration
website: https://www.bandwidth.com
scope: global
sla_url: https://www.bandwidth.com/legal/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
has_automatic_credits: false
min_plan_for_sla: enterprise
sla_help_wanted: true
needs_review: false
credit_note: 'Reviewed Bandwidth Communications Services Agreement (bandwidth.com/legal/). The standard agreement provides services "on an ''as is'' and ''as available'' basis" except where specifically set forth in applicable SLAs. Bandwidth states that to determine if an SLA is applicable, customers should "contact your Bandwidth account team" — indicating SLA terms (uptime commitments, credit tiers) are enterprise-negotiated, not published as standard public terms. No numeric uptime percentage or credit schedule found in publicly accessible standard terms. sla_help_wanted: true — enterprise agreements required for SLA terms. needs_review: true — primary source confirms SLA exists but terms are per-customer. Legal entity: Bandwidth Inc. (NASDAQ: BAND, Raleigh, North Carolina, USA).'
credit_policy:
  remedy_type: no_sla
  calculation_type: none
claim_process:
  submission_method: Contact account team
global_exclusions:
  - Standard agreement provides services on as-is and as-available basis
  - SLA terms require enterprise agreement negotiation
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
      - Phone
      - Email
      - Dedicated support
services:
  - id: bandwidth-voice-api
    name: Bandwidth Voice API
    category: Communication & Collaboration
    description: Programmable voice calls, phone number management, and PSTN connectivity
    sla_eligible: false
    source_url: https://www.bandwidth.com/legal/
  - id: bandwidth-messaging-api
    name: Bandwidth Messaging API
    category: Communication & Collaboration
    description: SMS and MMS messaging API with 10DLC and toll-free number support
    sla_eligible: false
    source_url: https://www.bandwidth.com/legal/
---

Bandwidth (Bandwidth Inc., NASDAQ: BAND, Raleigh NC) provides programmable voice, messaging, and emergency calling APIs for enterprises and communication platform builders. The standard Communications Services Agreement provides no numeric uptime commitment — SLA terms including uptime percentages and credit structures are enterprise-negotiated. Contact your Bandwidth account team for SLA terms.
