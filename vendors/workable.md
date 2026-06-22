---
title: Workable
slug: workable
vendor_name: Workable
legal_entity: Workable
category: HR & People Operations
website: https://www.workable.com
scope: global
sla_url: https://www.workable.com/legal/additional-terms?tab=service-level-agreement
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.8
max_credit_percent: 30
credit_unit: days
credit_note: "Credits are days of Services pro-rated against the Annual Plan (tiers: 7 / 14 / 30 days), capped at 30 days; not a percentage."
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: annual
needs_review: false
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 30
  # NOTE: Workable's SLA remedy is in DAYS of Services, not percent of fees.
  # Verbatim tiers: 99.8%-98.0% = 7 days; 98.0%-97% = 14 days; <97.0% = 30 days.
  # credit_percent values below are LEGACY/UNVERIFIED (see review_note).
  credit_tiers:
    - uptime_below: 99.8
      credit_percent: 10
    - uptime_below: 97.0
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support
  submission_url: https://help.workable.com
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Scheduled Downtime (notified at least one business day prior)
  - Emergency Downtime (vulnerability remediation)
  - Slowness or other performance issues with individual features
  - Issues related to external apps or third-party providers beyond Workable's control
  - Products or features identified as pilot, alpha, beta or similar
  - External network or equipment problems outside Workable's reasonable control
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
  - id: video
    name: Video Interviews
    category: Video
    description: Video interviewing
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.workable.com/legal/additional-terms?tab=service-level-agreement
  - id: hr
    name: Workable HR
    category: HRIS
    description: HR management
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.workable.com/legal/additional-terms?tab=service-level-agreement
  - id: recruiting
    name: Workable Recruiting
    category: ATS
    description: Applicant tracking
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.workable.com/legal/additional-terms?tab=service-level-agreement
  - id: sourcing
    name: Workable Sourcing
    category: Sourcing
    description: AI-powered sourcing
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.workable.com/legal/additional-terms?tab=service-level-agreement
support:
  tiers:
    - "Priority support (all paid plans)"
  has_24x7: true
  fastest_response: "3 hours"
  response_is_sla: false
  designated_contact: none
  architecture_review: false
  professional_services: false
  success_program: false
  training: false
  pricing: included
  source_url: "https://www.workable.com/pricing"
  note: "Single support level across paid plans; 24/7 email, 3-hour target. No credits."
---

Workable is a HR & People Operations provider. See the official SLA at [https://www.workable.com/legal/additional-terms?tab=service-level-agreement](https://www.workable.com/legal/additional-terms?tab=service-level-agreement).

Note: Workable's SLA commits to a Monthly Uptime Percentage of 99.8% or greater. Service Credits are expressed in days of Services (7 / 14 / 30 days), pro-rated against the Workable Annual Plan fees, and must be requested in writing. The SLA does not state a deadline (in days) for submitting credit requests.

<!-- Add human-readable notes about Workable's SLA nuances here. -->
