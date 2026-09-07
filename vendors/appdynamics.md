---
title: AppDynamics
slug: appdynamics
vendor_name: AppDynamics
legal_entity: Cisco Systems, Inc.
category: Monitoring & Observability
website: https://www.appdynamics.com
scope: global
sla_url: https://legal.appdynamics.com/AppDynamics_cSaaS_SLA.pdf
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.5
max_credit_percent: 20
has_automatic_credits: false
min_plan_for_sla: standard
claim_deadline_days: 30
needs_review: false
credit_note: 'Verified against AppDynamics cSaaS SLA and AppDynamics Cloud SLA (March 2023) at legal.appdynamics.com. Note: uptime is measured per CALENDAR QUARTER, not monthly. cSaaS SLA verbatim: "AppDynamics will provide Availability of 99.5% (the ''Availability SLA'')." Cloud SLA credit tiers verbatim: "if the Availability is 99.5% or greater, End User is entitled to receive no credits; if the Availability is 97.0% - 99.49%, then End User is entitled to receive Service Credits equal to five percent of the fees for the applicable calendar quarter; if the Availability is 95.0% - 96.9%, then End User is entitled to receive Service Credits equal to ten percent of the fees for the applicable calendar quarter; and if the Availability is less than 95.0%, then End User is entitled to receive Service Credits equal to twenty percent of the fees for the applicable calendar quarter." Credit cap verbatim: "The aggregate maximum Service Credit for any Measurement Period will be a credit for the value of 20% of the fees paid to Cisco for the applicable calendar month." Claim deadline verbatim: "You must request Service Credits no more than 30 days after the end of the applicable Measurement Period." Cisco review timeline verbatim: "Cisco will use commercially reasonable efforts to review and issue earned Service Credits within 30 calendar days of confirming that You are entitled to those Service Credits." AppDynamics is a Cisco product; contracts are under Cisco Systems, Inc.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  max_credit_percent: 20
  credit_tiers:
    - uptime_below: 99.5
      credit_percent: 5
    - uptime_below: 97
      credit_percent: 10
    - uptime_below: 95
      credit_percent: 20
claim_process:
  submission_method: Support ticket
  submission_url: https://support.appdynamics.com
  credit_application: Applied as account credit against future Cisco fees
  required_evidence:
    - Evidence of availability shortfall during the quarter
    - Affected resource and account details
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: billing_cycle_end
      description: Service Credit requests must be submitted within 30 days after the end of the applicable calendar quarter (Measurement Period)
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Internet or third-party network disruptions
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Phone
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
      - Dedicated support
services:
  - id: appdynamics-csaas
    name: AppDynamics cSaaS (APM)
    category: Monitoring & Observability
    description: Application performance monitoring SaaS delivered via Cisco cloud
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://legal.appdynamics.com/AppDynamics_cSaaS_SLA.pdf
  - id: appdynamics-cloud
    name: AppDynamics Cloud
    category: Monitoring & Observability
    description: Next-generation cloud-native APM on Cisco Cloud Observability platform
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://legal.appdynamics.com/AppDynamics_Cloud_SLA_03.17.2023.pdf
---

AppDynamics (a Cisco product) offers a 99.5% quarterly availability SLA — note the measurement period is per calendar quarter, not monthly, which materially affects credit eligibility. Credits are tiered at 5/10/20% of quarterly fees, capped at 20% of the applicable monthly fee. Claims must be filed within 30 days of the quarter's end.
