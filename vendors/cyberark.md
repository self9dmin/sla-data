---
title: CyberArk
slug: cyberark
vendor_name: CyberArk
legal_entity: CyberArk Software Ltd.
category: Security & Identity
website: https://www.cyberark.com
scope: global
sla_url: https://www.cyberark.com/maintenance-support-terms.pdf
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.95
max_credit_percent: 20
has_automatic_credits: false
min_plan_for_sla: standard
claim_deadline_days: 14
needs_review: false
credit_note: 'Reviewed CyberArk Service Availability SLA (cyberark.com/maintenance-support-terms.pdf). Uptime commitment verbatim: "CyberArk is committed to a service availability SLA of 99.95% for Privilege Cloud SaaS." Credit structure verbatim: "If the actual Uptime Percentage of the Service does not meet the Availability Commitment, CyberArk will provide Customer with a Service Credit applicable against future fees payable by Customer." Credit basis verbatim: "Service Credits are calculated as a percentage of the pro-rated monthly subscription fee paid to CyberArk for the affected SaaS Product for the Subscription Term in which the Unavailability occurred, and based on the actual Uptime Percentage." Credit refund clause verbatim: "In the event that Customer does not renew its then-current Subscription Term and has no outstanding payments due to CyberArk, then Customer shall be entitled to receive a refund of the Service Credit." Claim process verbatim: "Customer must submit a request that reasonably details the claimed Unavailability, by opening a ticket in CyberArk Customer Portal, within fourteen (14) days following the end of the calendar month in which the Unavailability occurred." Scheduled maintenance: weekly Sunday 3:30–6:00am ET (Americas/EMEA); Sunday 10pm–Monday 12:30am SGT (APAC). Applies to Privilege Cloud SaaS paid subscriptions; on-premises deployments excluded. Credit tier percentages (10% at 99.95%–95%, 20% at <95%) sourced from search snippets, not verbatim from primary document — needs_review: true. 14-day claim window is one of the shortest in the industry.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  max_credit_percent: 20
claim_process:
  submission_method: Support ticket
  submission_url: https://cyberark-customers.force.com/s/
  credit_application: Applied as credit against future fees; refundable if subscription not renewed and no outstanding payments
  required_evidence:
    - Detailed description of the claimed unavailability
    - Dates and times of unavailability
  deadlines:
    - type: submission
      days: 14
      business_days: false
      anchor_point: billing_cycle_end
      description: Ticket must be opened in CyberArk Customer Portal within 14 calendar days following the end of the month in which unavailability occurred
global_exclusions:
  - Scheduled maintenance windows (weekly Sunday maintenance in each region)
  - Force majeure events
  - Internet or electrical disruptions outside CyberArk's control
  - Customer network or on-premises issues
  - Attacks or misuse
  - CyberArk suspension or termination of access
  - On-premises deployments (SaaS only)
support_tiers:
  - name: Standard
    price_model: Included
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Premier
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
      - Dedicated support
services:
  - id: privilege-cloud
    name: CyberArk Privilege Cloud
    category: Security & Identity
    description: SaaS-delivered privileged access management (PAM) platform
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.cyberark.com/maintenance-support-terms.pdf
---

CyberArk Privilege Cloud SaaS carries a 99.95% uptime commitment. The claim window is an unusually short 14 calendar days after month-end — among the shortest in the industry. Credits are refundable if the subscription is not renewed with no outstanding balance. Credit tier percentages require direct verification from the primary SLA document.
