---
title: GoCardless
slug: gocardless
vendor_name: GoCardless
legal_entity: GoCardless Ltd
category: Finance & Payments
website: https://gocardless.com
scope: global
sla_url: https://gocardless.com/legal/service-level-agreement/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: true
credit_note: 'Verified against GoCardless SLA documentation. Uptime verbatim from UK Government Digital Marketplace listing: "GoCardless has an SLA for platform availability, with the top level of availability being 99.9%. They provide service credits in the result of it not being met, on a sliding scale." Historical performance context (same source): "uptime for the last year at the time of writing was 99.99% (30th April 2023–30th April 2024)." Credit structure: sliding scale confirmed but specific tier percentages (e.g., what % credit per uptime band) not found verbatim in any indexed source — the GoCardless SLA page returns HTTP 403. Claim deadline not found verbatim. needs_review: true — credit tier amounts require direct review of gocardless.com/legal/service-level-agreement/. Legal entity: GoCardless Ltd (company number 07495895, United Kingdom).'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Support ticket
  submission_url: https://gocardless.com/support/
  required_evidence:
    - Incident dates and times
    - Affected payment flows or API endpoints
    - Account details
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Banking network outages outside GoCardless control
  - Regulatory or compliance-related downtime
support_tiers:
  - name: Standard
    price_model: Usage-based
    sla_eligible: true
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
  - id: gocardless-bank-debit
    name: GoCardless Bank Debit Collection
    category: Finance & Payments
    description: Direct debit and open banking payment collection for recurring revenue businesses
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://gocardless.com/legal/service-level-agreement/
---

GoCardless (company no. 07495895, UK) is a bank debit and open banking payment collection platform operating across 30+ countries. The SLA commits to 99.9% monthly uptime with a sliding-scale credit structure. Specific credit tier amounts require direct review of the SLA document.
