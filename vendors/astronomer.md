---
title: Astronomer
slug: astronomer
vendor_name: Astronomer
legal_entity: Astronomer, Inc.
category: Developer Tools
website: https://www.astronomer.io
scope: global
sla_url: https://www.astronomer.io/legal/sla/
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.5
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: true
credit_note: 'Verified against Astronomer Service Level Addendum (astronomer.io/legal/sla/; returns HTTP 403, content indexed by search engines). Legal entity verbatim: "Astronomer, Inc." Addresses cited across documents: 54 W. 21st St., Suite 1100, New York, NY 10010; and 231 W. 12th Street, Suite 2E, Cincinnati, Ohio 45202. State of incorporation not confirmed verbatim (likely Delaware). Uptime verbatim: "the Hosted Service will be available to Customer at least 99.5% of the time in any calendar month." Downtime definition verbatim: "Downtime is defined as the amount of time where the Customer''s specific Astro Control Plane API endpoint is not available due to a service outage. Downtime does not include Maintenance or Emergency Downtime." Emergency Downtime verbatim: "any critical emergency determined by Astronomer where a vulnerability in the Hosted Service is reasonably likely to have a broad material impact on the Service." Non-production exclusion verbatim: "all test, development, beta, sandbox and other non-production environments are expressly excluded from this SLA." Credit form verbatim: "Service Credit(s) may only be applied to a future invoice or payment and customers may not unilaterally offset Fees for any performance or availability issues." Sole remedy verbatim: "This SLA and any Service Credits set forth above are Customer''s sole and exclusive remedy for any failure by Astronomer to meet the Uptime Commitment." Claim deadline verbatim: "Customer must notify Astronomer by opening a support case through the Astronomer Support Portal within thirty (30) days from the date Customer becomes aware of Astronomer''s failure to meet the Uptime Commitment." Exclusions verbatim: Force majeure; Customer equipment/Third-Party Products; Customer''s violation of the Agreement. needs_review: true — specific credit percentage tiers (% per uptime band below 99.5%) not publicly indexed; only credit form (future invoice) confirmed.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Support portal ticket
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: awareness_date
      description: Open support case via Astronomer Support Portal within 30 days of becoming aware of the failure
global_exclusions:
  - Credits applied to future invoices only — no cash, no unilateral fee offsets
  - Test, development, beta, and sandbox environments explicitly excluded
  - Emergency Maintenance (vulnerability response) excluded from Downtime
  - Downtime limited to Control Plane API endpoint unavailability only
  - Force majeure, customer equipment, and third-party product failures excluded
  - Credit tier percentages not publicly confirmed
support_tiers:
  - name: Developer
    price_model: Usage-based
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Documentation
  - name: Team
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Business Critical
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Dedicated support
services:
  - id: astronomer-astro
    name: Astro (Managed Apache Airflow)
    category: Developer Tools
    description: Managed Apache Airflow platform for data pipeline orchestration with enterprise security and governance
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.astronomer.io/legal/sla/
---

Astronomer (Astronomer, Inc.; New York, NY / Cincinnati, OH) provides Astro, a managed Apache Airflow platform for data pipeline orchestration. The SLA commits to 99.5% monthly availability, measured as Control Plane API endpoint availability — test, development, beta, and sandbox environments are explicitly excluded. Credits apply to future invoices only; customers cannot unilaterally offset fees. Claims must be filed via the Support Portal within 30 days of becoming aware of the failure. The specific credit tier percentages are not publicly indexed.
