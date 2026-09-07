---
title: Harness
slug: harness
vendor_name: Harness
legal_entity: Harness, Inc.
category: Developer Tools
website: https://www.harness.io
scope: global
sla_url: https://www.harness.io/legal/support-terms-sla-06-2025
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.5
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: true
credit_note: 'Verified against Harness Support Terms & SLA (harness.io/legal/support-terms-sla-06-2025, dated June 17, 2025). Two uptime tiers verbatim: "For Customers who are subscribed to Harness''s ''standard'' support service subscription, the Target Up Time is 99.5% in a given calendar quarter." And: "For Customers who are subscribed to Harness''s ''premier'' support service subscription, the Target Up Time is 99.8% in a given calendar quarter." Measurement period verbatim: "Availability is calculated on a quarterly, per-minute, per Harness Platform module basis (i.e., Continuous Delivery is subject to its own Availability and Target Up-Time calculation, and Continuous Integration is separately subject to its own Availability and Target Up-Time calculation)." Credit calculation verbatim: "To calculate the Service Credit, the applicable percentage in the chart below is multiplied by the portion of the fees paid by Customer for the then current License Term that are applicable to the relevant calendar quarter, for the affected Harness Platform module." Known credit rate verbatim from example: "Harness will either issue a Service Credit to Customer in the amount of $2,500 (i.e. (($100,000/4) * 10%))..." — confirming 10% is one credit tier at 98% availability. Full tiered credit table not publicly indexed (returned 403). needs_review: true — complete credit tier table not confirmed verbatim. Claim deadline verbatim: "Customer must submit a support ticket to Harness...within 15 days after the end of the calendar quarter in which Customer believes the Service Credit was earned." Credit delivery verbatim: "Harness will, in its sole discretion, either (i) apply the Service Credit as a credit to Customer''s next invoice, or (ii) will pay Customer the Service Credit within forty five (45) days following the end of the quarter." Sole remedy verbatim: "The Service Credit is Customer''s sole and exclusive remedy for any failure of the Harness Platform to meet the Target Up-Time." SaaS-only verbatim: "Availability, Downtime, Exclusions, Scheduled Maintenance, Service Credits and Target Up Time are only applicable to Customer if Customer has licensed the software-as-a-service (SaaS) version of the Harness Platform." Scheduled maintenance notice verbatim: "Harness uses commercially reasonable efforts to provide Customer with at least twenty four (24) hours advance notice via email or text of any Scheduled Maintenance." Legal entity: Harness, Inc. (Delaware corporation), 55 Stockton St., 8th Floor, San Francisco, CA 94108.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Support ticket
  deadlines:
    - type: submission
      days: 15
      business_days: false
      anchor_point: quarter_end
      description: Submit support ticket within 15 days after end of the calendar quarter
global_exclusions:
  - Self-hosted (non-SaaS) deployments explicitly excluded
  - Per-module SLA (Continuous Delivery, CI, etc. each measured separately)
  - Exclusions include customer-side issues, third-party/vendor outages, force majeure
  - Scheduled maintenance with 24-hour advance notice excluded
  - Credit tier table not publicly confirmed (document returns 403)
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Premier
    price_model: Subscription
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Phone
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Phone
      - Dedicated support
services:
  - id: harness-platform
    name: Harness CI/CD Platform
    category: Developer Tools
    description: Unified platform for CI/CD, feature flags, cloud cost management, chaos engineering, and security testing
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.harness.io/legal/support-terms-sla-06-2025
---

Harness (Harness, Inc., Delaware; San Francisco, CA) is a unified CI/CD, feature flags, and cloud cost management platform. The SLA is quarterly per module: standard support customers get 99.5% and premier support customers get 99.8%. Credits are calculated as a percentage of the affected module's quarterly fees. Claims must be submitted within 15 days of quarter-end; Harness pays within 45 days. Only SaaS deployments are covered — self-hosted is excluded. The full credit tier table is not publicly available online.
