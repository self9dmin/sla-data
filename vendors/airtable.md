---
title: Airtable
slug: airtable
vendor_name: Airtable
legal_entity: Airtable
category: Productivity
website: https://www.airtable.com
scope: global
sla_url: https://www.airtable.com/company/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: downtime_multiplier
  remedy_type: credit
  credit_description: Service credit equal to ten (10) times the fees paid for the
    affected Services for the portion of the calendar month that constituted Downtime.
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: month_end
      description: Customers must send an email to Airtable within thirty (30) days
        of the end of the month in which the Uptime Commitment was not met
  submission_method: Email
  submission_url: mailto:support@airtable.com
  required_evidence:
    - Account ID or registered email address
    - Previously reported dates and times of Downtime
  review_timeline: Credit issued within 30 days
  credit_application: May only be used against future billing charges
global_exclusions:
  - Customer acts or omissions
  - Third-party equipment, software, or services not provided by Airtable
  - Customer-supplied integrations
  - Performance or slowness issues not amounting to Downtime
  - Internet or network outages outside Airtable's control
  - Force Majeure events
  - Scheduled maintenance (with 24+ hours notice)
  - Hacking, viruses, or other attacks
  - Emergency maintenance
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: false
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
  - id: ai
    name: Airtable AI
    category: AI
    description: AI-powered fields
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.airtable.com/company/sla
  - id: automations
    name: Airtable Automations
    category: Automation
    description: Workflow automations
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.airtable.com/company/sla
  - id: bases
    name: Airtable Bases
    category: Database
    description: Relational databases
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.airtable.com/company/sla
  - id: interfaces
    name: Airtable Interface Designer
    category: App Builder
    description: Custom app interfaces
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.airtable.com/company/sla
  - id: sync
    name: Airtable Sync
    category: Data Sync
    description: Cross-base data sync
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.airtable.com/company/sla
support:
  tiers:
    - "Standard"
    - "Premium Support"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.airtable.com/services/premium-support"
  note: "Premium Support is a paid add-on with a TAM, 24/7 coverage, and a 1-hour critical-issue target."
---

Airtable is a Productivity & Collaboration provider. See the official SLA at [https://www.airtable.com/company/sla](https://www.airtable.com/company/sla).

<!-- Add human-readable notes about Airtable's SLA nuances here. -->
