---
title: Google Workspace
slug: google-workspace
vendor_name: Google Workspace
legal_entity: Google Workspace
category: Productivity
website: https://workspace.google.com
scope: global
sla_url: https://workspace.google.com/terms/sla.html
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: false
review_note: "Verified against the Google Workspace SLA; credits are denominated in days of service (3/7/15), represented via credit_unit: days."
uptime_commitment: 99.9
max_credit_percent: 15
credit_unit: days
credit_note: "Service credits are Days of Service added to the end of the term (tiers: 3 / 7 / 15 days), not a percentage of fees."
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 15
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 3
    - uptime_below: 99
      credit_percent: 7
    - uptime_below: 95
      credit_percent: 15
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Admin Console
  submission_url: https://workspace.google.com/support/
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
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
  - id: gworkspace-gmail
    name: Gmail (Business)
    category: Productivity
    description: Email service - credits as Days of Service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://workspace.google.com/terms/sla.html
  - id: gworkspace-calendar
    name: Google Calendar
    category: Productivity
    description: Calendar service - credits as Days of Service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://workspace.google.com/terms/sla.html
  - id: gworkspace-chat
    name: Google Chat
    category: Collaboration
    description: Messaging service - credits as Days of Service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://workspace.google.com/terms/sla.html
  - id: gworkspace-drive
    name: Google Drive
    category: Storage
    description: Cloud storage - credits as Days of Service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://workspace.google.com/terms/sla.html
  - id: gworkspace-meet
    name: Google Meet
    category: Collaboration
    description: Video conferencing - credits as Days of Service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://workspace.google.com/terms/sla.html
  - id: gworkspace-voice-premier
    name: Google Voice (Premier)
    category: Communications
    description: Business phone - Premier tier with advanced features
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://workspace.google.com/terms/sla.html
  - id: gworkspace-voice-standard
    name: Google Voice (Standard)
    category: Communications
    description: Business phone - Standard tier
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://workspace.google.com/terms/sla.html
---

Google Workspace is a Productivity & Collaboration provider. See the official SLA at [https://workspace.google.com/terms/sla.html](https://workspace.google.com/terms/sla.html).

<!-- Add human-readable notes about Google Workspace's SLA nuances here. -->
