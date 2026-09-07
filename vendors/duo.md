---
title: Duo Security
slug: duo
vendor_name: Duo Security
legal_entity: Duo Security, Inc.
category: Security & Identity
website: https://duo.com
scope: global
sla_url: https://duo.com/legal/sla
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.99
max_credit_days: 15
has_automatic_credits: false
min_plan_for_sla: standard
claim_deadline_days: 30
needs_review: false
credit_note: 'Reviewed Duo Security SLA (duo.com/legal/sla). Uptime: 99.99% (upgraded from 99.9% in January 2026 per Duo blog announcement). Credit cap verbatim: "The aggregate maximum number of Service Credits to be issued by Duo Security to Customer for all Downtime that occurs in a single calendar month shall not exceed fifteen days of Service (or the value of 15 days of Service in the form of a monetary credit to a monthly-billing Customer''s account)." Non-refundability verbatim: "Service Credits may not be exchanged for, or converted to, monetary amounts." [for annual billing customers] Termination right verbatim: "In the event that Customer earns 15 days of service credits in each of three consecutive months, Customer may request termination and receive a refund of any pre-paid subscription Fees for Services not rendered." Downtime definition verbatim: "when there is more than a five percent user error rate across all of a Customer''s Users" (measured server-side). Claim deadline verbatim: "Customer must notify Duo Security within thirty (30) days from the time the Customer becomes eligible to receive a Service Credit." SLA stated to apply to all customers. Credit denominated in days of service, not a percentage of fees. needs_review: true — primary SLA page returns 403; credit structure from older indexed SLA text (prior 99.9% era); updated 99.99% credit schedule may differ. Direct review of duo.com/legal/sla recommended. Duo Security is a Cisco Systems subsidiary.'
credit_policy:
  remedy_type: credit
  calculation_type: flat
  credit_formula: 'Credits denominated in days of service (up to 15 days/month), not percentage of fees. Annual billing customers receive time credit; monthly billing customers receive equivalent monetary credit.'
claim_process:
  submission_method: Support ticket
  submission_url: https://duo.com/support
  credit_application: Applied as days of service extension (annual) or monetary credit (monthly billing)
  required_evidence:
    - Written notification of downtime occurrence
    - Dates and times of unavailability
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident
      description: Customer must notify Duo Security within 30 days of becoming eligible for a Service Credit
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Errors caused by Customer's network or third-party services
support_tiers:
  - name: Standard
    price_model: Per-user subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Premier
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
      - Dedicated support
services:
  - id: duo-mfa
    name: Duo MFA and Access Management
    category: Security & Identity
    description: Multi-factor authentication and zero-trust access platform
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://duo.com/legal/sla
---

Duo Security (a Cisco subsidiary) upgraded its uptime commitment to 99.99% in January 2026. Credits are denominated in days of service (up to 15 days/month) rather than a percentage of fees — monthly billing customers receive an equivalent monetary credit. A termination right arises if the maximum credit is earned in three consecutive months. Claims must be filed within 30 days of the incident.
