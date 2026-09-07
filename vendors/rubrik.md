---
title: Rubrik
slug: rubrik
vendor_name: Rubrik
legal_entity: Rubrik, Inc.
category: Storage & Backup
website: https://www.rubrik.com
scope: global
sla_url: https://www.rubrik.com/content/dam/rubrik/en/resources/policy/rubrik-service-agreement.pdf
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: true
credit_note: 'Verified against Rubrik Service Agreement (rubrik-service-agreement.pdf, v09122025; returns HTTP 403, content indexed by search engines). Legal entity verbatim: "RUBRIK, INC." (document header). Uptime verbatim: "Rubrik maintains a service login availability to the Rubrik Service of 99.9% per each calendar month (the ''Service Commitment'')." Calculation verbatim: "The Rubrik Service uptime is calculated as the total number of minutes the Rubrik Service is available to Customer in the applicable month divided by the total number of minutes that month, minus Downtime." Credit form verbatim: "Service Credits shall be provided as an additional number of days of the affected portion of the Rubrik Service, applied upon renewal of the applicable Subscription Period, without any additional fees payable by Customer." No-refund verbatim: "Rubrik shall not in any circumstances be obligated to pay any money or issue any refund to the Customer." Maximum credit cap verbatim: "The aggregate maximum number of Service Credits that can be issued to Customer shall not exceed two (2) months of fees." Sole remedy verbatim: "Provision of a Service Credit by Rubrik is Customer''s sole and exclusive remedy for any failure by Rubrik to meet the Service Commitment." Claim deadline verbatim: "Customer must submit a claim by raising a support case with Rubrik''s support team within thirty (30) days after the end of the calendar month during which the Service Commitment was not met, detailing the calendar month for which Customer is claiming the Service Credit together with the dates and times of when the Service Commitment was not met." Exclusions verbatim: "(i) Free Trials; (ii) unavailability caused by any unauthorized action or lack of action when required from Customer… (iii) unavailability caused by factors outside Rubrik''s reasonable control, including but not limited to a Force Majeure event or failure of a cloud service provider; (iv) unavailability that results from the use of services or software not provided by Rubrik." Status page: status.rubrik.com. NYSE: RBRK. Principal offices: 3495 Deer Creek Road, Palo Alto, CA 94304. needs_review: true — specific credit schedule (days per uptime band) not surfaced verbatim; only the 2-month aggregate cap is confirmed.'
credit_policy:
  remedy_type: service_extension
  calculation_type: days_extension
  max_credit_multiplier: 2
claim_process:
  submission_method: Support ticket
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: month_end
      description: Raise a support case within 30 days after end of the calendar month of the breach
global_exclusions:
  - Credits are additional service days at renewal only — no cash, no invoice credits
  - Free Trials explicitly excluded
  - Customer unauthorized action or inaction excluded
  - Force majeure and cloud service provider failures outside Rubrik control
  - Use of services or software not provided by Rubrik
  - Credit day schedule (days per uptime band) not publicly confirmed
support_tiers:
  - name: Standard
    price_model: Subscription
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
  - id: rubrik-cloud-data-management
    name: Rubrik Security Cloud
    category: Storage & Backup
    description: Cloud data management, backup, and cyber recovery platform with ransomware protection
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.rubrik.com/content/dam/rubrik/en/resources/policy/rubrik-service-agreement.pdf
---

Rubrik (Rubrik, Inc.; NYSE: RBRK; Palo Alto, CA) is a cloud data management and cyber recovery platform. The SLA guarantees 99.9% monthly service availability, measured as login access to the Rubrik Service. Credits are additional service days appended at subscription renewal — not cash or invoice credits — capped at a maximum of 2 months of fees in aggregate. Claims must be submitted via support case within 30 days of month-end. Free trials are explicitly excluded. The specific credit day schedule per uptime band is not publicly indexed.
