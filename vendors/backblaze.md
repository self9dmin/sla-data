---
title: Backblaze
slug: backblaze
vendor_name: Backblaze
legal_entity: Backblaze
category: Cloud Infrastructure
website: https://www.backblaze.com
scope: global
sla_url: https://www.backblaze.com/company/policy/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 10
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 10
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 5
    - uptime_below: 99
      credit_percent: 10
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: month_end
      description: Submit within 30 days from the last day of the month in which the SLO violation is asserted
  submission_method: Support ticket
  submission_url: https://www.backblaze.com/help
  required_evidence:
    - Month and year in title
    - Affected User Account
    - Estimated downtime amount
    - Dates and times of each User Downtime incident
  review_timeline: Backblaze responds within 30 days
  credit_application: Applied against the customer's next payment for Covered Services
global_exclusions:
  - Force majeure event or internet disruption unrelated to Backblaze
  - Acts or omissions by you or a third party
  - Scheduled maintenance windows
  - Hardware or software not under Backblaze's control
  - Failure to follow B2 Cloud Storage integration requirements
  - Account suspension or termination for policy violations
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
  - id: b2
    name: Backblaze B2 Cloud Storage
    category: Storage
    description: S3-compatible cloud storage
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.backblaze.com/company/policy/sla
  - id: computer-backup
    name: Computer Backup
    category: Backup
    description: Personal/business computer backup; SLA-eligible only for Tera or Peta support plan customers
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.backblaze.com/company/policy/sla
---

Backblaze is a Cloud Infrastructure provider. See the official SLA at [https://www.backblaze.com/company/policy/sla](https://www.backblaze.com/company/policy/sla).

<!-- Add human-readable notes about Backblaze's SLA nuances here. -->
