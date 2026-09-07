---
title: Mimecast
slug: mimecast
vendor_name: Mimecast
legal_entity: Mimecast North America, Inc.
category: Security & Identity
website: https://www.mimecast.com
scope: global
sla_url: https://www.mimecast.com/company/mimecast-support-services/
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: standard
max_credit_percent: 100
needs_review: true
credit_note: 'Verified against Mimecast Aware Service Level Agreement (effective July 2025) and Service Levels and Support Description (effective 01 June 2026) — assets.mimecast.com PDFs. Uptime verbatim: "Mimecast commits to at least 99.9% Availability for its Aware Management Services during each calendar month." Credit cap verbatim: "Mimecast''s maximum accumulative liability to customers under the agreement in any calendar month shall be no more than 100% of the fees paid by the customer for the applicable month." Claim deadline verbatim: "customers must submit a credit request by opening a support case within 14 days of the end of the calendar month in which Mimecast fails to meet the standards." Claim content verbatim: "the credit request will include details and dates of the relevant anomalies, after which Mimecast will apply the appropriate credit upon verification." Measurement verbatim: "''Monthly Uptime Percentage'' is defined as for any calendar month a percentage calculated as: total minutes of Availability divided by the total minutes in the month, less scheduled maintenance." Credit tier percentages (per-threshold amounts) are in the PDF but not publicly indexed verbatim — needs_review: true. Scheduled maintenance excluded from availability calculation. Legal entities: Mimecast North America, Inc. (191 Spring Street, Lexington MA 02421, USA); UK entity: Mimecast Services Limited (England & Wales, registered 4901524, 1 Finsbury Ave Floor 4, London EC2M 2PF).'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  max_credit_percent: 100
claim_process:
  submission_method: Support case
  submission_url: https://www.mimecast.com/support/
  required_evidence:
    - Details and dates of the relevant anomalies
    - Support case opened with Mimecast
  deadlines:
    - type: submission
      days: 14
      business_days: false
      anchor_point: month_end
      description: Submit support case within 14 days of end of the calendar month in which the SLA was missed
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Third-party service failures outside Mimecast control
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Enhanced
    price_model: Subscription
    sla_eligible: true
    availability: Extended hours
    channels:
      - Ticket
      - Email
      - Phone
  - name: Premier
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Phone
      - Dedicated support
services:
  - id: mimecast-aware
    name: Mimecast Aware Management Services
    category: Security & Identity
    description: Email security, threat intelligence, and compliance management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.mimecast.com/company/mimecast-support-services/
  - id: mimecast-email-security
    name: Mimecast Email Security
    category: Security & Identity
    description: Secure email gateway, anti-spam, anti-malware, and advanced threat protection
    sla_eligible: true
    source_url: https://www.mimecast.com/company/mimecast-support-services/
---

Mimecast (Mimecast North America, Inc.; UK: Mimecast Services Limited) provides email security, threat intelligence, and compliance services. The SLA commits to 99.9% monthly availability for Aware Management Services with credits up to 100% of monthly fees. Claims must be submitted via support case within 14 days of month end. Credit tier percentages are in the service levels PDF — contact Mimecast for the full schedule.
