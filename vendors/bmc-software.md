---
title: BMC Software
slug: bmc-software
vendor_name: BMC Software
legal_entity: BMC Software
category: Enterprise & Operations
website: https://www.bmc.com
scope: global
sla_url: https://www.bmc.com/content/dam/bmc/corporate/service-level-agreement.pdf
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  The only SLA verifiable on bmc.com (a public PDF) covers Control-M SaaS at
  99.95% with a pro-rata (non-tiered) credit; the 99.9% Helix-wide figure and
  tiered 15% credits recorded here cannot be confirmed on-domain and conflict
  with that PDF, pending reconciliation.
uptime_commitment: 99.9
max_credit_percent: 15
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 15
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 5
    - uptime_below: 99.5
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 15
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_month
      description: >-
        Service Credit Request must be received by BMC within 30 days after the
        end of the month in which the Non-Excluded Downtime occurred
  submission_method: Email to SLArequest@bmc.com
  submission_url: https://www.bmc.com/content/dam/bmc/corporate/service-level-agreement.pdf
  required_evidence:
    - Account number in email subject
    - BMC-provided monthly availability report OR dates and times of each incident of Non-excluded Downtime
  review_timeline: BMC confirms Service Credit within 15 days of receipt
  credit_application: Applied against customer's next transaction
global_exclusions:
  - Scheduled or mutually agreed maintenance (routine, non-emergency, or emergency)
  - Downtime on nonproduction systems
  - Force majeure / factors outside BMC's reasonable control (acts of God, government, flood, fire, hurricane, earthquake, civil unrest, terror, strikes, epidemics, pandemics, quarantines, ISP or power failures)
  - Failure of customer's Internet access or related problems
  - Customer or third-party equipment, software, or technology (outside BMC's direct control)
  - Actions or inactions of customer or any third party
  - Service suspension or termination of customer's right to use the Subscription Services
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: true
    claim_assistance: false
    availability: Business hours
    channels:
      - Email
    response_times:
      general: < 24 hours
  - name: Enterprise
    slug: enterprise
    price_model: Custom
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
    response_times:
      critical: < 1 hour
      high: < 4 hours
services:
  - id: helix-digital-workplace
    name: BMC Helix Digital Workplace
    category: Employee Experience
    description: Digital workplace services
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.bmc.com/content/dam/bmc/corporate/service-level-agreement.pdf
  - id: helix-discovery
    name: BMC Helix Discovery
    category: CMDB
    description: Asset and dependency discovery
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.bmc.com/content/dam/bmc/corporate/service-level-agreement.pdf
  - id: helix-itsm
    name: BMC Helix ITSM
    category: ITSM
    description: IT service management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.bmc.com/content/dam/bmc/corporate/service-level-agreement.pdf
  - id: helix-operations
    name: BMC Helix Operations Management
    category: IT Operations
    description: IT operations automation
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.bmc.com/content/dam/bmc/corporate/service-level-agreement.pdf
  - id: helix-remedyforce
    name: BMC Helix Remedyforce
    category: ITSM
    description: Salesforce-based ITSM
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.bmc.com/content/dam/bmc/corporate/service-level-agreement.pdf
support:
  tiers:
    - "Base Support"
    - "Premier Support Foundation"
    - "Premier Support Gold"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.bmc.com/it-services/customer-support-offerings.html"
  note: "Response times are stated as goals/targets, not contractual SLAs."
---

BMC Software is a Other SaaS provider. See the official SLA at [https://www.bmc.com/content/dam/bmc/corporate/service-level-agreement.pdf](https://www.bmc.com/content/dam/bmc/corporate/service-level-agreement.pdf).

<!-- Add human-readable notes about BMC Software's SLA nuances here. -->
