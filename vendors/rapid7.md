---
title: Rapid7
slug: rapid7
vendor_name: Rapid7
legal_entity: Rapid7, Inc.
category: Security & Identity
website: https://www.rapid7.com
scope: global
sla_url: https://www.rapid7.com/legal/sla/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.95
has_automatic_credits: false
min_plan_for_sla: standard
claim_deadline_days: 5
needs_review: false
credit_note: 'Verified against Rapid7 Insight Platform Service Level Agreement (rapid7.com/legal/sla/). Uptime commitment verbatim: "If the System Availability during a given month is less than 99.95%, Customer may be eligible for a credit as detailed below (''Service Credit''), which is the sole and exclusive remedy for any failure to meet the SLA." Claim deadline verbatim: "To receive a Service Credit, Customer must file a claim for such credit within five days following the end of the calendar month in which the Service Level was not met by opening a written case in Rapid7''s Customer Portal." Credit cap verbatim: "In any given month Customer shall in no event be entitled to receive a credit that exceeds 100% of its monthly fee for the Service." CRITICAL: 5-day claim window is one of the most restrictive found. Credit calculation: prorated monthly portion of annual fees (days in month / 365). Applicable services: InsightIDR, InsightVM, InsightAppSec, InsightOps, InsightConnect, InsightCloudSec, Threat Command, Surface Command. Legal entities: Rapid7 LLC (US customers), Rapid7 International Limited (non-US customers).'
credit_policy:
  remedy_type: credit
  calculation_type: pro_rated
  max_credit_percent: 100
claim_process:
  submission_method: Support ticket
  submission_url: https://support.rapid7.com
  required_evidence:
    - Written case in Rapid7 Customer Portal
    - Dates and times of service unavailability
    - Affected Insight Platform services
  deadlines:
    - type: submission
      days: 5
      business_days: false
      anchor_point: billing_cycle_end
      description: Written case must be opened in Rapid7 Customer Portal within 5 days after the end of the calendar month in which the SLA was not met
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Free trial or beta services
  - On-premises or hybrid deployments
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
      - Phone
      - Email
      - Dedicated support
services:
  - id: rapid7-insightvm
    name: Rapid7 InsightVM
    category: Security & Identity
    description: Vulnerability management and risk prioritization with live dashboards
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.rapid7.com/legal/sla/
  - id: rapid7-insightidr
    name: Rapid7 InsightIDR
    category: Security & Identity
    description: Cloud SIEM and XDR for threat detection and incident response
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.rapid7.com/legal/sla/
  - id: rapid7-insightappsec
    name: Rapid7 InsightAppSec
    category: Security & Identity
    description: Dynamic application security testing (DAST) for web applications
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.rapid7.com/legal/sla/
---

Rapid7 (Rapid7, Inc., NASDAQ: RPD) provides cloud security products including InsightVM, InsightIDR, InsightAppSec, InsightCloudSec, and others. The SLA commits to 99.95% monthly system availability with a pro-rated credit equal to the affected month's proportion of annual fees. Credits are the sole and exclusive remedy.
