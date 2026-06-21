---
title: Heroku
slug: heroku
vendor_name: Heroku
legal_entity: Heroku
category: Cloud Infrastructure
website: https://www.heroku.com
scope: global
sla_url: https://www.heroku.com/policy/promise
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Could not verify quantitative SLA on heroku.com/salesforce.com. sla_url
  https://www.heroku.com/policy/promise is live but is a legal-agreements hub,
  not an SLA page. The former services source_url
  https://www.heroku.com/policy/sla returns HTTP 404 (replaced with the live
  policy hub). The Salesforce-Heroku MSA only commits to "commercially
  reasonable efforts to make the Heroku Services available 24 hours a day, 7
  days a week" with no uptime percentage, service credits, credit tiers, or
  claim deadline. No public Heroku/Salesforce page defines the 99.95% uptime,
  100% max credit, credit tiers, or 30-day claim deadline currently in this
  file, so those numbers are left UNCHANGED pending an authoritative source
  (likely the current Salesforce MSA or an enterprise contract SLA exhibit).

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
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support Ticket
  submission_url: https://help.heroku.com
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
  - id: connect
    name: Heroku Connect
    category: Integration
    description: Salesforce sync
    sla_eligible: true
    source_url: https://www.heroku.com/policy/
  - id: kafka
    name: Heroku Kafka
    category: Messaging
    description: Managed Apache Kafka
    sla_eligible: true
    source_url: https://www.heroku.com/policy/
  - id: redis
    name: Heroku Key-Value Store
    category: Database
    description: Managed Redis
    sla_eligible: true
    source_url: https://www.heroku.com/policy/
  - id: pipelines
    name: Heroku Pipelines
    category: CI/CD
    description: CI/CD pipelines
    sla_eligible: true
    source_url: https://www.heroku.com/policy/
  - id: postgres
    name: Heroku Postgres
    category: Database
    description: Managed PostgreSQL
    sla_eligible: true
    source_url: https://www.heroku.com/policy/
  - id: runtime
    name: Heroku Runtime
    category: PaaS
    description: Application runtime (dynos)
    sla_eligible: true
    source_url: https://www.heroku.com/policy/
---

Heroku is a Cloud Infrastructure provider. See the official SLA at [https://www.heroku.com/policy/promise](https://www.heroku.com/policy/promise).

<!-- Add human-readable notes about Heroku's SLA nuances here. -->
