---
title: Split (by Harness)
slug: split
vendor_name: Split
legal_entity: Harness, Inc.
category: Developer Tools
website: https://www.split.io
scope: global
sla_url: https://www.harness.io/legal/support-terms-sla-06-2025
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.5
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: true
credit_note: 'Split.io was acquired by Harness in 2022. The governing SLA document is the Harness Support Terms & SLA (harness.io/legal/support-terms-sla-06-2025, dated June 17, 2025). Split Feature Flags is one of the Harness Platform modules covered under the Harness SLA, measured on a per-module basis. Uptime verbatim: "For Customers who are subscribed to Harness''s ''standard'' support service subscription, the Target Up Time is 99.5% in a given calendar quarter." And: "For Customers who are subscribed to Harness''s ''premier'' support service subscription, the Target Up Time is 99.8% in a given calendar quarter." Measurement verbatim: "Availability is calculated on a quarterly, per-minute, per Harness Platform module basis." Downtime definition verbatim: "Downtime means the number of minutes that the applicable Harness Platform module is completely inoperable or inaccessible." Credit calculation verbatim: "To calculate the Service Credit, the applicable percentage in the chart below is multiplied by the portion of the fees paid by Customer for the then current License Term that are applicable to the relevant calendar quarter, for the affected Harness Platform module." Credit example verbatim: "Harness will either issue a Service Credit to Customer in the amount of $2,500 (i.e. (($100,000/4) * 10%))" — confirming 10% is one credit tier. Full credit tier table not publicly indexed. Claim deadline verbatim: "Customer must submit a support ticket to Harness within 15 days after the end of the calendar quarter in which Customer believes the Service Credit was earned." SaaS only verbatim: "Availability, Downtime, Exclusions, Scheduled Maintenance, Service Credits and Target Up Time are only applicable to Customer if Customer has licensed the software-as-a-service (SaaS) version of the Harness Platform." Sole remedy verbatim: "The Service Credit is Customer''s sole and exclusive remedy for any failure of the Harness Platform to meet the Target Up-Time." Scheduled maintenance verbatim: at least 24 hours advance notice, scheduled during weekend hours between 18:00 Friday and 3:00 Monday Pacific Time. Legal entity: Harness, Inc. (Delaware corporation), 55 Stockton St., 8th Floor, San Francisco, CA 94108. needs_review: true — complete credit tier table not confirmed verbatim.'
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
  - Per-module SLA (Feature Flags measured separately from other Harness modules)
  - Partial outages not counted — module must be completely inoperable or inaccessible
  - Exclusions include customer equipment/network, force majeure, third-party failures
  - Scheduled maintenance with 24-hour advance notice excluded
  - Credit tier table not publicly confirmed
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
services:
  - id: split-feature-flags
    name: Split Feature Flags (Harness Feature Flags)
    category: Developer Tools
    description: Feature flag management and experimentation platform, now part of Harness Platform
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.harness.io/legal/support-terms-sla-06-2025
---

Split (acquired by Harness in 2022; now operating as Harness Feature Flags; legal entity Harness, Inc., Delaware; San Francisco, CA) is a feature flag management and experimentation platform. Following acquisition, the governing SLA is the Harness Support Terms & SLA: 99.5% quarterly (standard support) or 99.8% quarterly (premier support), measured per module. Credits are calculated as a tiered percentage of the affected module's quarterly fees. Claims must be submitted within 15 days of quarter-end. The full credit tier table is not publicly available. Only SaaS deployments are covered.
