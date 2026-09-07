---
title: Orca Security
slug: orca-security
vendor_name: Orca Security
legal_entity: Orca Security Ltd.
category: Security & Identity
website: https://orcasecurity.io
scope: global
sla_url: https://orcasecurity.io/legal/
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: standard
max_credit_percent: 20
needs_review: false
credit_note: 'Verified against Orca Security SaaS License Agreement / EULA (April 24, 2024; also on AWS Marketplace and UK G-Cloud 14). Uptime verbatim: "Company commits to making the Platform available with a Monthly Uptime Percentage of at least 99.9% (the ''Service Commitment'')." Credit tiers verbatim: 99.0%–99.9% Monthly Uptime → "10% Service Credit" of monthly fees; Below 99.0% Monthly Uptime → "20% Service Credit" of monthly fees. Credit cap verbatim: "The aggregate maximum number of Service Credits to be issued for any and all Downtime Periods in a single subscription period shall not exceed 20% of the amount due by Customer for the Company Services." IMPORTANT: Cap is 20% per subscription period, not per month. Claim deadline verbatim: "To receive Service Credits, the Customer must notify Company''s technical support team within thirty (30) days from the end of the applicable month in which Customer becomes eligible to receive Service Credits, and submit Company''s technical support team all information necessary for Company to validate the Customer''s claim, including but not limited to, a detailed description of the Downtime incident, its time and duration." Forfeiture verbatim: "Failure to comply with these requirements will forfeit the customer''s right to receive Service Credits." Sole remedy verbatim: "AS SPECIFIED ABOVE CONSTITUTES ITS SOLE AND EXCLUSIVE REMEDY FOR ANY DOWNTIME OR UNAVAILABILITY." Maintenance verbatim: "Regular Maintenance is the period under which the Platform may be unavailable... between the hours of 2AM and 6AM (EST) Saturday." Scheduled maintenance notice: "at least a twenty-four (24) hours advance notice prior to Scheduled Maintenance." Legal entity: Orca Security Ltd. (Israel; confirmed in U.S. federal court filings Orca Security Ltd. v. Wiz, Inc., D. Del.).'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  max_credit_percent: 20
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99.0
      credit_percent: 20
claim_process:
  submission_method: Support ticket
  submission_url: https://orcasecurity.io/contact/
  required_evidence:
    - Detailed description of the Downtime incident
    - Time and duration of the incident
    - Account details
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: month_end
      description: Must notify technical support within 30 days from end of the applicable month
global_exclusions:
  - Regular Maintenance (Saturdays 2AM–6AM EST)
  - Scheduled Maintenance (24h advance notice given)
  - Force majeure events
  - Customer-caused issues
  - Third-party service failures
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
  - id: orca-platform
    name: Orca Cloud Security Platform
    category: Security & Identity
    description: Agentless cloud security posture management (CSPM), workload protection, and vulnerability management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://orcasecurity.io/legal/
---

Orca Security (Orca Security Ltd., Israel) provides agentless cloud security posture management. The SLA commits to 99.9% monthly uptime with a two-tier credit structure: 10% credit for uptime between 99.0%–99.9%, 20% credit below 99.0%, capped at 20% of total subscription fees per period. Claims must be filed within 30 days of the month end. Credits are the sole and exclusive remedy for downtime.
