---
title: Remote
slug: remote-com
vendor_name: Remote
legal_entity: Remote Technology, Inc.
category: HR & People Operations
website: https://remote.com
scope: global
sla_url: https://remote.com/policy/terms-of-service
last_verified: '2026-09-09'
last_updated: '2026-09-09'
has_automatic_credits: false
min_plan_for_sla: standard
max_credit_percent: 25
needs_review: false
credit_note: 'Verified against Remote Payroll Service Level Agreement (remote.com/policy/terms-of-service). IMPORTANT: Remote''s SLA covers PAYROLL SERVICE QUALITY (accuracy, timeliness of processing) — NOT platform uptime percentage. No numeric platform uptime commitment found. Credit structure verbatim: "If the same Service Metric is breached in three (3) consecutive payroll cycles within the same rolling six (6) month period, the Service Credit shall increase to fifteen percent (15%) of the monthly payroll service fees for the affected country or entity. The maximum aggregate Service Credits payable by Remote in any 12-month period shall not exceed twenty five percent (25%) of the total annual payroll services fees." Escalation: 10% credit for breach in 2 consecutive cycles, 15% for breach in 3 consecutive cycles. Remedy clause verbatim: "Except in the case of willful misconduct, gross negligence, or fraud, the Service Credits set out in this Payroll SLA shall be Your sole and exclusive remedy for any claim related to a Service Level Failure." SLA does NOT cover US payroll services. Legal entity: Remote Technology, Inc.'
credit_policy:
  remedy_type: credit
  calculation_type: escalating
  max_credit_percent: 25
claim_process:
  submission_method: Contact account team
  submission_url: https://support.remote.com/hc/en-us/requests/new
  required_evidence:
    - Evidence of payroll service metric failure
    - Affected country or entity details
    - Consecutive payroll cycle breach documentation
global_exclusions:
  - US payroll services excluded from SLA
  - Platform uptime not covered (payroll service quality only)
  - Force majeure events
  - Customer-caused delays
support_tiers:
  - name: Standard
    price_model: Usage-based
    sla_eligible: true
    availability: Business hours
    channels:
      - Chat
      - Email
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Chat
      - Email
      - Dedicated support
services:
  - id: remote-global-payroll
    name: Remote Global Payroll
    category: HR & People Operations
    description: International payroll processing and compliance for distributed teams
    sla_eligible: true
    source_url: https://remote.com/policy/terms-of-service
  - id: remote-eor
    name: Remote Employer of Record
    category: HR & People Operations
    description: Global employer of record services for international hiring and compliance
    sla_eligible: false
    source_url: https://remote.com/policy/terms-of-service
---

Remote (Remote Technology, Inc.) provides global HR, payroll, and employer-of-record services. The SLA covers **payroll service quality** (accuracy and timeliness), not platform uptime — credits are tied to consecutive payroll processing failures: 10% for 2 consecutive failures within 6 months, 15% for 3 consecutive, capped at 25% of annual payroll fees. US payroll is excluded. No platform uptime commitment confirmed.
