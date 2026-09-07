---
title: Sophos
slug: sophos
vendor_name: Sophos
legal_entity: Sophos Limited
category: Security
website: https://www.sophos.com
scope: global
sla_url: https://www.sophos.com/en-us/legal/mdr-description
last_verified: '2026-06-25'
last_updated: '2026-06-25'
has_automatic_credits: false
min_plan_for_sla: enterprise
needs_review: false
credit_note: 'Verified against Sophos MDR Service Description (sophos.com/en-us/legal/mdr-description; all pages return HTTP 403, text indexed by search engines). IMPORTANT: Sophos does not publish a platform uptime SLA. The only Sophos contractual SLA is a response-time SLA applicable exclusively to the MDR Complete service tier — not a percentage-based uptime availability SLA. SLA type verbatim: "The SLA refers to the Response Time by the Security Services Team and is only applicable to the MDR Complete Service tier." Response-time SLA commitment verbatim: 60-minute response for 90% of High Severity Cases, measured monthly. Credit structure verbatim: "In the event Sophos missed the SLA as described above, Customer will be entitled to a credit in the amount of five percent (5%) of the fees paid for the Service during the previous billing cycle, or five thousand dollars ($5,000), whichever is lesser." Credit form verbatim: "Service Credit will be applied towards the subscription fee for the next Service subscription term." Maximum credit cap verbatim: "Customer will be entitled to claim a Service Credit no more than three (3) times in any calendar year." — Effective annual maximum: lesser of 3 × 5% of billing cycle fees or $15,000. Claim deadline verbatim: "Customer must request the Service Credit in writing and deliver such requests to [sophos email] with ''MDR Service Credit'' in the subject line within thirty (30) calendar days from the time Customer becomes eligible to receive a Service Credit." Evidence requirement verbatim: "Customer''s Service Credit request must be supported with evidence from log or report data." MSP exclusion verbatim: "The SLA is only available to Customers that have purchased MDR Complete subscription, and not available to MSPs." Separate instrument — Breach Protection Warranty: MDR Complete includes up to $1M in incident response expenses and $1,000/breached machine (distinct from SLA credits, not detailed here). Legal entity verbatim: "Sophos Limited" — registered in England and Wales, company number 02096520, incorporated February 4, 1987. Registered office: The Pentagon, Abingdon Science Park, Abingdon, Oxon, OX14 3YP, United Kingdom.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  max_credit_percent: 5
claim_process:
  submission_method: Written email request
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: eligibility_date
      description: Written request with MDR Service Credit in subject line within 30 days of becoming eligible; must include log/report evidence
global_exclusions:
  - No platform uptime SLA exists — SLA applies only to MDR Complete response times, not platform availability
  - MDR Complete tier required; MSPs explicitly excluded
  - Credit cap is lesser of 5% of billing cycle fees or $5,000 per occurrence
  - Maximum 3 credit claims per calendar year
  - Scheduled maintenance excluded
  - Industry-wide cyberwarfare / ransomware events excluded
  - Customer or MSP breach of Agreement excluded
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: MDR Essentials
    price_model: Subscription
    sla_eligible: false
    availability: 24/7
    channels:
      - Ticket
      - Email
  - name: MDR Complete
    price_model: Subscription
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Dedicated SOC team
services:
  - id: sophos-mdr-complete
    name: Sophos MDR Complete
    category: Security
    description: Fully managed detection and response service with 24/7 threat hunting, investigation, and incident response
    sla_eligible: true
    source_url: https://www.sophos.com/en-us/legal/mdr-description
---

Sophos (Sophos Limited, registered in England and Wales No. 02096520; Abingdon, UK) is a cybersecurity company offering endpoint, network, and managed detection and response products. Sophos does not publish a platform uptime SLA. The only contractual SLA is a response-time SLA for MDR Complete: 60-minute response for 90% of High Severity Cases monthly. Credits are the lesser of 5% of the prior billing cycle's fees or $5,000 per occurrence, capped at 3 claims per year. MDR Essentials and MSP customers are explicitly excluded. A separate Breach Protection Warranty (up to $1M incident response) supplements the SLA.
