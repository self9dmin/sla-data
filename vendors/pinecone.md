---
title: Pinecone
slug: pinecone
vendor_name: Pinecone
legal_entity: Pinecone Systems, Inc.
category: AI & Machine Learning
website: https://www.pinecone.io
scope: global
sla_url: https://www.pinecone.io/legal/
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.95
max_credit_percent: 50
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_note: 'Pinecone''s Service Level Addendum commits to 99.95% monthly uptime for Enterprise customers with a qualifying advance commitment: service credits of 10% (<99.95%), 25% (<99.0%), 50% (<95.0%), as the sole and exclusive remedy. A support ticket must be opened within 60 minutes of downtime and the credit requested by the end of the following month. Self-serve plans have no uptime commitment.'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
  credit_tiers:
    - uptime_below: 99.95
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
      anchor_point: incident_date
      description: Open a ticket within 60 minutes of downtime; request the credit by the end of the following month
  submission_method: Support Ticket
  submission_url: https://www.pinecone.io/contact/
  required_evidence:
    - Account/Project ID
    - Affected service
    - Incident timestamps
    - Impact evidence
  review_timeline: 30 days
  credit_application: Applied to future invoice
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Beta / preview features
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: false
    claim_assistance: false
    availability: Business hours
    channels:
      - Documentation
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
  - id: serverless
    name: Serverless Vector DB
    category: AI
    description: Managed serverless vector database
    sla_eligible: true
    source_url: https://www.pinecone.io
  - id: pods
    name: Pod-based Vector DB
    category: AI
    description: Dedicated pod indexes
    sla_eligible: true
    source_url: https://www.pinecone.io
  - id: inference
    name: Pinecone Inference
    category: AI
    description: Embedding / reranking models
    sla_eligible: false
    source_url: https://www.pinecone.io
support:
  channels:
    - portal
    - email
    - slack
  designated_contact: none
  professional_services: false
  has_24x7: true
  fastest_response: 30 min (Sev1, Premium)
  note: Ticket + email (all paid); dedicated shared Slack at Premium (no phone at any tier). Sev1 24x7x365 at Pro & Premium (otherwise Mon-Fri 8-8 ET). No professional services in policy. Ticket + email (all paid); dedicated shared Slack at Premium (no phone at any tier). Sev1 24x7x365 at Pro & Premium (otherwise Mon-Fri 8-8 ET). No professional services in policy.
  source_url: https://www.pinecone.io/legal/support-policy/
---

Pinecone is an AI & Machine Learning provider. See the SLA/terms at [https://www.pinecone.io/legal/](https://www.pinecone.io/legal/).
