---
title: Snyk
slug: snyk
vendor_name: Snyk
legal_entity: Snyk Limited
category: Security & Identity
website: https://snyk.io
scope: global
sla_url: https://snyk.io/policies/terms-of-service/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 95
max_credit_days: 10
has_automatic_credits: false
min_plan_for_sla: enterprise
claim_deadline_days: 60
sla_help_wanted: true
needs_review: false
credit_note: 'Verified against Snyk Master Services Agreement (MSA template, August 2023; also per EULA). Uptime: 95% Monthly Uptime Percentage — unusually low by SaaS standards. Downtime definition verbatim: "the number of minutes during which the proportion of failed API responses to user requests exceeds five percent in a given calendar month." Credit cap verbatim: "The aggregate maximum number of Service Credits the Licensee can claim for Downtime periods that occur in a single calendar month shall not exceed the equivalent of 10 days of Service value." Sole remedy verbatim: "Service Credits shall be the Licensee''s exclusive remedy for Snyk''s failure to adhere to the SLA, and Snyk shall not be obliged to pay any money or make any refund to the Licensee." Claim deadline verbatim: "Customer must request the applicable Service Credit by written notice to Snyk within sixty (60) days of an event which gives rise to Service Credits. Customer waives any right to Service Credits not requested within this time period." Termination right verbatim: "If Monthly Uptime Percentage is below 95% for three consecutive months or any three months during any twelve month period, in addition to the 10 day Service Credit, Customer will have the right to terminate the Agreement upon 10 Business Days'' notice." Exclusions: Scheduled Downtime (3 days'' notice, ≤3 hours/quarter) and Emergency Downtime. SLA embedded in Enterprise MSA; free and Team plan users have no SLA coverage. sla_help_wanted: true for non-enterprise tiers. needs_review: true — data from indexed MSA PDF snippets, not live primary source.'
credit_policy:
  remedy_type: credit
  calculation_type: flat
  credit_formula: 'Credits equal up to 10 days of service value per month for any month below 95% uptime. Credit form not specified (service extension or equivalent value).'
claim_process:
  submission_method: Written notice to Snyk
  required_evidence:
    - Written notice identifying the downtime event
    - Dates and times of unavailability
  deadlines:
    - type: submission
      days: 60
      business_days: false
      anchor_point: incident
      description: Written notice to Snyk within 60 days of the event giving rise to Service Credits; credits waived if not claimed within this period
global_exclusions:
  - Scheduled Downtime (≥3 days notice, limited to ≤3 hours per quarter)
  - Emergency Downtime
  - Force majeure events
  - Customer-caused issues
  - Free and Team plan customers (SLA in Enterprise MSA only)
support_tiers:
  - name: Free
    price_model: Free
    sla_eligible: false
    availability: Community
    channels:
      - Documentation
      - Community
  - name: Team
    price_model: Per-developer subscription
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Email
      - Phone
      - Dedicated support
services:
  - id: snyk-platform
    name: Snyk Developer Security Platform
    category: Security & Identity
    description: Developer-first security for code, containers, infrastructure, and open-source dependencies
    uptime_commitment: 95
    sla_eligible: true
    source_url: https://snyk.io/policies/terms-of-service/
---

Snyk's Enterprise MSA includes a 95% Monthly Uptime Percentage — one of the lowest explicit uptime commitments in the SaaS security space. Credits are capped at 10 days of service value per month. A termination right arises if the threshold is breached in 3 months within any 12-month period. Claims must be filed within 60 days. The SLA applies to Enterprise plan customers only.
