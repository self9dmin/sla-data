---
title: Databricks
slug: databricks
vendor_name: Databricks
legal_entity: Databricks
category: Databases & Data Infrastructure
website: https://www.databricks.com
scope: global
sla_url: https://www.databricks.com/legal/platform-services-schedule
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Prior sla_url (databricks.com/legal/service-level-agreement) is dead (HTTP
  404) as of 2026-06-19. Databricks publishes no standalone, openly accessible
  SLA page on databricks.com; the legal index lists no SLA document, and the
  live Master Cloud Services Agreement and Platform Services Schedule do not
  embed uptime/credit terms. sla_url repointed to the confirmed-live Platform
  Services Schedule as the governing official document. Third-party/search
  snippets indicate the actual Databricks SLA (AWS/GCP) uses tiers of 10%
  credit below 99.9% and 25% below 99.0% with a 45-day credit issuance window
  -- which conflicts with the values currently in this file -- but this could
  NOT be confirmed on a first-party databricks.com URL, so all numbers and
  last_verified are left UNCHANGED pending a verifiable official source.

  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_billing_month
      description: Submit within 30 days of end of billing month
  submission_method: Support Portal
  submission_url: https://help.databricks.com
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 15 business days
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
  - id: sql
    name: Databricks SQL
    category: Data Warehouse
    description: SQL analytics warehouse
    sla_eligible: true
    source_url: https://www.databricks.com/legal/platform-services-schedule
  - id: workspace
    name: Databricks Workspace
    category: Data Platform
    description: Unified analytics workspace
    sla_eligible: true
    source_url: https://www.databricks.com/legal/platform-services-schedule
  - id: delta-lake
    name: Delta Lake
    category: Data Lake
    description: Open table format storage
    sla_eligible: true
    source_url: https://www.databricks.com/legal/platform-services-schedule
  - id: mlflow
    name: MLflow
    category: ML Platform
    description: Machine learning lifecycle
    sla_eligible: true
    source_url: https://www.databricks.com/legal/platform-services-schedule
  - id: unity-catalog
    name: Unity Catalog
    category: Data Governance
    description: Unified data governance
    sla_eligible: true
    source_url: https://www.databricks.com/legal/platform-services-schedule
---

Databricks is a Database & Data Infrastructure provider. See the official SLA at [https://www.databricks.com/legal/platform-services-schedule](https://www.databricks.com/legal/platform-services-schedule).

<!-- Add human-readable notes about Databricks's SLA nuances here. -->
