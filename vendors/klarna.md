---
title: Klarna
slug: klarna
vendor_name: Klarna
legal_entity: Klarna Bank AB (publ)
category: Finance & Payments
website: https://www.klarna.com
scope: global
sla_url: https://www.klarna.com/us/legal/
last_verified: '2026-06-25'
last_updated: '2026-06-25'
has_automatic_credits: false
min_plan_for_sla: enterprise
sla_help_wanted: false
needs_review: false
credit_note: 'Reviewed Klarna Terms of Service and Merchant Cooperation Agreement. Klarna explicitly disclaims all availability commitments verbatim: "KLARNA ASSETS ARE PROVIDED ''AS IS'' WITHOUT ANY EXPRESSED OR IMPLIED WARRANTY WHATSOEVER. KLARNA DOES NOT GUARANTEE ANY SPECIFIC AVAILABILITY, FUNCTIONALITY, QUALITY, SECURITY, TITLE AND/OR NON-INFRINGEMENT." [VERBATIM] Additional disclaimer verbatim: "Klarna does not guarantee the continuous, uninterrupted, error-free or secure use of any part of the Klarna Site or Services, and use of the Klarna Site or Services may be interrupted due to events outside Klarna''s reasonable control, such as delays in the banking system or credit card networks." [VERBATIM] Deprecation clause verbatim: "Klarna may deprecate or change the functionality of Klarna Assets at any time…and is in no way obliged to inform users about deprecations." Klarna internally targets 99.999% uptime in engineering documentation — this is an internal operational benchmark, explicitly not a merchant contractual commitment. No credit schedule or uptime SLA exists at any merchant tier. Legal entities: Klarna Bank AB (publ), Swedish bank, registration number 556737-0431, Stockholm, Sweden. US entity: Klarna Inc., NMLS #1353190, 800 N. High Street, Columbus, OH 43215. Corporate parent (2024–): Klarna Group plc (UK).'
credit_policy:
  remedy_type: no_sla
  calculation_type: none
claim_process:
  submission_method: Not applicable
global_exclusions:
  - All availability warranties expressly disclaimed (AS IS)
  - No uptime guarantee at any plan tier
  - Klarna may deprecate or change functionality without notice
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
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Dedicated support
services:
  - id: klarna-payments
    name: Klarna Buy Now Pay Later
    category: Finance & Payments
    description: Buy Now Pay Later payment solution and merchant commerce platform for online and in-store payments
    sla_eligible: false
    source_url: https://www.klarna.com/us/legal/
---

Klarna (Klarna Bank AB publ, Stockholm; Klarna Inc., US; Klarna Group plc, UK) is a Buy Now Pay Later and merchant payments platform. Klarna's Terms of Service and Merchant Cooperation Agreement explicitly disclaim all availability warranties — the platform is provided "AS IS" with no guarantee of continuous or uninterrupted service. No uptime SLA or credit structure exists at any merchant tier.
