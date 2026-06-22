---
title: Smartsheet
slug: smartsheet
vendor_name: Smartsheet
legal_entity: Smartsheet
category: Productivity
website: https://www.smartsheet.com
scope: global
sla_url: https://www.smartsheet.com/legal/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 50
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 95
      credit_percent: 50
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_calendar_month
      description: Submit within 30 days following the end of the calendar month in which the Availability Event occurred
  submission_method: SLA Fee Credit Request form
  submission_url: https://app.smartsheet.com/b/form/679d05c12b0449c786f384707e366c35
  required_evidence:
    - All information required by the SLA Fee Credit Request form
  review_timeline: Smartsheet validates Availability Events against its system records
  credit_application: Applied against the fees for the next renewal Term
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Free tier services
  - Beta features
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
  - id: brandfolder
    name: Brandfolder
    category: DAM
    description: Digital asset management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.smartsheet.com/legal/sla
  - id: datasheet
    name: DataSheet
    category: Data Management
    description: Data connector platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.smartsheet.com/legal/sla
  - id: dynamic-view
    name: Dynamic View
    category: Reporting
    description: Customizable data views
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.smartsheet.com/legal/sla
  - id: resource-management
    name: Resource Management
    category: Resource Planning
    description: Resource planning and allocation
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.smartsheet.com/legal/sla
  - id: platform
    name: Smartsheet Platform
    category: Project Management
    description: Work management platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.smartsheet.com/legal/sla
support:
  tiers:
    - "Standard"
    - "Professional"
    - "Enterprise"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.smartsheet.com/support-plans"
  note: "Enterprise includes 24/7 and a 1-hour P1 target; published as a target."
---

Smartsheet is a Productivity & Collaboration provider. See the official SLA at [https://www.smartsheet.com/legal/sla](https://www.smartsheet.com/legal/sla).

The SLA (Last Updated: July 1, 2022) covers the "Core Application" of a commercial Smartsheet instance purchased as an Enterprise plan. Availability is measured per calendar month: ≥99.9% earns no credit; <99.9% through ≥99.0% earns a 10% credit; <99.0% through ≥95.0% earns 25%; <95.0% earns a maximum 50% credit. Credits are not automatic, Customers must submit the SLA Fee Credit Request form within 30 days following the end of the calendar month in which the Availability Event occurred, and any approved credit is applied against the fees for the next renewal Term. Add-on products (Brandfolder, Resource Management, Dynamic View, etc.) are not separately given an uptime commitment in the SLA.
