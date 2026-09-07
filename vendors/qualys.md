---
title: Qualys
slug: qualys
vendor_name: Qualys
legal_entity: Qualys, Inc.
category: Security & Identity
website: https://www.qualys.com
scope: global
sla_url: https://www.qualys.com/sla
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.5
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: false
claim_deadline_days: 15
credit_note: 'Verified against Qualys SLA document (qualys.com/sla, CDN PDF). Uptime commitment verbatim: 99.5% monthly Cloud Services Uptime. Measurement verbatim: "Cloud Services Uptime shall be measured by Qualys'' SOC connection to the Internet, and on a monthly basis will be calculated as the actual number of hours that the Cloud Services were available to the customer divided by the total hours of the month less any planned downtime, force majeure events, and loss of connection as a result of the customer''s actions." Credit verbatim: "If the root-cause analysis demonstrates that such failure was due to the fault of Qualys, provide Customer with a service credit (''Cloud Services Credit'') consisting of a one-week extension of any Cloud Services subscription impacted by the Cloud Services Uptime failure." NOTE: Credit is a 1-week subscription extension (time-based), NOT a percentage of fees — unusually weak compared to peers. Dispute window verbatim: "If Customer does not agree with the Cloud Services Uptime report, written notice of the dispute must be provided to Qualys within fifteen days of receipt of the report." Consecutive failure remedy verbatim: "In the event that Qualys does not meet the Cloud Services Uptime for three (3) consecutive months, Customer may terminate the applicable Cloud Services and receive a pro-rata refund of any prepaid fees for such terminated Service." Legal entity: Qualys, Inc. (NASDAQ: QLYS, Foster City, CA, Delaware corporation).'
credit_policy:
  remedy_type: credit
  calculation_type: pro_rated
  credit_unit: time
  max_credit_days: 7
claim_process:
  submission_method: Support ticket
  submission_url: https://success.qualys.com/customersupport/s/
  required_evidence:
    - Dates and times of service unavailability
    - Affected Qualys Cloud Services
    - Account details
global_exclusions:
  - Scheduled/planned maintenance
  - Force majeure events
  - Customer-caused connection losses
  - Internet disruptions outside Qualys SOC control
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
      - Phone
      - Email
      - Dedicated support
services:
  - id: qualys-cloud-platform
    name: Qualys Cloud Security Platform
    category: Security & Identity
    description: Cloud-based vulnerability management, compliance, and threat detection (VM, PC, WAS, CS)
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.qualys.com/sla
---

Qualys (Qualys, Inc., NASDAQ: QLYS) provides cloud-based vulnerability management and security compliance. The SLA commits to 99.5% monthly uptime with a **time-based credit** (1-week subscription extension per breach month) rather than a percentage-of-fees credit. If missed for three consecutive months, customers gain a termination right with pro-rata refund of prepaid fees.
