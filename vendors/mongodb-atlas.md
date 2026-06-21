---
title: MongoDB Atlas
slug: mongodb-atlas
vendor_name: MongoDB Atlas
legal_entity: MongoDB Atlas
category: Databases & Data Infrastructure
website: https://www.mongodb.com
scope: global
sla_url: https://www.mongodb.com/legal/sla/cloud/atlas-database
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: false
review_note: Verified against the official MongoDB Atlas Database SLA on 2026-06-19.
uptime_commitment: 99.995
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.995
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 95
      credit_percent: 100
claim_process:
  deadlines:
    - type: notification
      days: 1
      business_days: false
      anchor_point: incident_date
      description: Log a support ticket within 24 hours of first becoming aware of an event impacting availability
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_following_month
      description: Submit claim and all required information by the end of the month immediately following the month in which the Downtime occurred
  submission_method: Support Portal
  submission_url: https://support.mongodb.com
  required_evidence:
    - Detailed description of events resulting in Downtime, including request logs
    - Time and duration of the Downtime
    - Number and location(s) of affected users (if applicable)
    - Description of attempts made to resolve the Downtime at the time
  review_timeline: 45 days
  credit_application: Applied to next invoice
global_exclusions:
  - Factors outside MongoDB's reasonable control (natural disaster, war, government action, network/device failure at your site)
  - Third-party services/hardware/software (e.g. the underlying cloud platform)
  - Use of your password or equipment to access the network
  - Customer improper use/scaling/configuration or failure to follow security practices
  - MongoDB Beta Offerings
  - Partial minutes of unavailability and scheduled maintenance/upgrade downtime
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
  - id: mongodb-realm
    name: Atlas App Services
    category: Backend
    description: Backend-as-a-Service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.mongodb.com/legal/sla/cloud/atlas-database
  - id: charts
    name: Atlas Charts
    category: Analytics
    description: Data visualization
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.mongodb.com/legal/sla/cloud/atlas-database
  - id: datalake
    name: Atlas Data Lake
    category: Analytics
    description: Federated queries
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.mongodb.com/legal/sla/cloud/atlas-database
  - id: search
    name: Atlas Search
    category: Search
    description: Full-text search
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.mongodb.com/legal/sla/cloud/atlas-database
  - id: triggers
    name: Atlas Triggers
    category: Serverless
    description: Database triggers
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.mongodb.com/legal/sla/cloud/atlas-database
  - id: clusters
    name: MongoDB Atlas Clusters
    category: Database
    description: Managed MongoDB clusters
    uptime_commitment: 99.995
    sla_eligible: true
    source_url: https://www.mongodb.com/legal/sla/cloud/atlas-database
---

MongoDB Atlas is a Database & Data Infrastructure provider. See the official SLA at [https://www.mongodb.com/legal/service-level-agreement](https://www.mongodb.com/legal/sla/cloud/atlas-database).

<!-- Add human-readable notes about MongoDB Atlas's SLA nuances here. -->
