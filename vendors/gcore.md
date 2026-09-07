---
title: Gcore
slug: gcore
vendor_name: Gcore
legal_entity: G-Core Labs S.A.
category: CDN & Edge
website: https://gcore.com
scope: global
sla_url: https://gcore.com/legal/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: enterprise
sla_help_wanted: true
needs_review: true
credit_note: 'Reviewed Gcore legal documentation at gcore.com/legal/. Uptime: 99.9% for CDN and most cloud services; 99.99% for DDoS Protection products (cited in product pages). Credit mechanism verbatim from indexed legal content: "any Service Credit granted under the SLA for a Downtime will be applied to the next applicable invoice, against any charges for MRCs and/or overages." Sole-remedy clause verbatim: "Service Credits are the Customer''s only form of compensation for SLA breaches and represent the full extent of Gcore''s liability in such cases." Specific credit tier percentages and claim deadline not found in any publicly indexed source — per-product SLA documents at gcore.com/legal return HTTP 403. sla_help_wanted: true — tier amounts require direct enterprise engagement. needs_review: true. Legal entity: G-Core Labs S.A. (Luxembourg).'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Contact account team
  submission_url: https://gcore.com/contacts/
  required_evidence:
    - Incident dates and times
    - Affected service and account details
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - DDoS attacks
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
  - id: gcore-cdn
    name: Gcore CDN
    category: CDN & Edge
    description: Global CDN with edge caching, delivery optimization, and DDoS protection
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://gcore.com/legal/
---

Gcore (G-Core Labs S.A., Luxembourg) provides CDN, cloud, and edge services globally. Public SLA terms with specific uptime percentages and credit structures are not confirmed from accessible sources — enterprise customers should request SLA terms directly.
