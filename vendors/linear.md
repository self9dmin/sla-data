---
title: Linear
slug: linear
vendor_name: Linear
legal_entity: Linear
category: Developer Tools
website: https://linear.app
scope: global
sla_url: https://linear.app/terms
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://linear.app/contact
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
  - id: cycles
    name: Linear Cycles
    category: Sprint Planning
    description: Sprint and cycle management
    sla_eligible: true
    source_url: https://linear.app/terms
  - id: issues
    name: Linear Issues
    category: Issue Tracking
    description: Issue tracking and management
    sla_eligible: true
    source_url: https://linear.app/terms
  - id: projects
    name: Linear Projects
    category: Project Management
    description: Project planning
    sla_eligible: true
    source_url: https://linear.app/terms
  - id: roadmaps
    name: Linear Roadmaps
    category: Roadmapping
    description: Product roadmapping
    sla_eligible: true
    source_url: https://linear.app/terms
support:
  tiers:
    - "Standard"
    - "Enterprise"
  has_24x7: false
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: false
  success_program: true
  training: false
  pricing: custom
  source_url: "https://linear.app/enterprise"
  note: "Enterprise adds a dedicated CSM and custom SLAs; no public tiered support catalog."
---

Linear is a DevOps & Development provider operated by Linear Orbit, Inc. See the official Terms of Service at [https://linear.app/terms](https://linear.app/terms).

<!-- Add human-readable notes about Linear's SLA nuances here. -->
<!-- NEEDS REVIEW (2026-06-19): Linear does not publish a public uptime SLA, availability percentage, or service-credit policy on linear.app. The Terms of Service (effective 2026-06-09) disclaim uninterrupted service and offer no credits. The uptime_commitment (99.9) and support-tier response times in the frontmatter are unverified on the vendor's domain and were left unchanged pending confirmation (likely Enterprise-contract-only or nonexistent). The "SLAs" feature on Plus/Enterprise plans refers to issue-deadline tracking, not service availability. -->
