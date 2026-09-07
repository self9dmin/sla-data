---
title: Personio
slug: personio
vendor_name: Personio
legal_entity: Personio Group SE
category: HR & People Operations
website: https://www.personio.com
scope: Europe
sla_url: https://www.personio.com/terms/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: false
credit_note: 'Verified against Personio General Terms & Conditions (personio.com/terms/). Uptime commitment verbatim: "Personio provides the Software with an availability of 99% on an annual average." CRITICAL: 99% is measured on an ANNUAL AVERAGE — not per-month. This allows up to approximately 87.6 hours of cumulative downtime per year before the SLA is technically breached, and individual months can have more downtime without triggering a credit claim. This is materially weaker than the industry standard of monthly-measured SLAs. Credit verbatim: "If Personio is in breach of the Service Level for a specific month, the Contract Owner may request a refund for such month (pro rata) within one year by contacting Personio''s Growth Team via the software (help section). In such a case, Personio will refund the fees paid for such month within 30 calendar days and the customer acknowledges that this shall be its sole and exclusive remedy in relation to the Service Level." Claim window: 1 year from breach month. Legal entity: Personio Group SE (registered Germany, HRB213189; UK branch FC037967; headquartered 3 Seidlstrasse, Munich 80335, Germany). Governed by laws of the Federal Republic of Germany.'
credit_policy:
  remedy_type: credit
  calculation_type: pro_rated
  credit_unit: time
claim_process:
  submission_method: In-app (help section)
  required_evidence:
    - Breach of annual average availability
    - Contract Owner to request via in-app help section
  deadlines:
    - type: submission
      days: 365
      business_days: false
      anchor_point: breach_month
      description: Contract Owner must request refund for the breach month within one year via the software help section
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Downtime that does not break the annual average threshold
support_tiers:
  - name: Essential
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Professional
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
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
  - id: personio-hr-software
    name: Personio HR Software
    category: HR & People Operations
    description: All-in-one HR software for SMEs covering recruiting, onboarding, payroll, and performance
    uptime_commitment: 99
    sla_eligible: true
    source_url: https://www.personio.com/terms/
---

Personio (Personio Group SE, Munich, Germany) is a European HR platform for SMEs. The SLA commits to **99% availability on an annual average** — not monthly. This means individual months can have more downtime without triggering a credit, as long as the rolling annual average stays above 99%. Credits equal one month's pro-rata fee per breach month, requested within 1 year via the in-app help section. Governed by German law.
