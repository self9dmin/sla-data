---
title: 1Password
slug: 1password
vendor_name: 1Password
legal_entity: 1Password
category: Security & Identity
website: https://www.1password.com
scope: global
sla_url: https://1password.com/legal-center
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  As of 2026-06-19, 1Password publishes no public credit SLA for its core
  service on 1password.com. The Terms of Service
  (https://1password.com/legal/terms-of-service/) disclaims uptime: the Service
  is provided "AS IS" and "AS AVAILABLE" and 1Password "DOES NOT WARRANT...THAT
  CUSTOMER'S ACCESS THERETO WILL BE UNINTERRUPTED." 1Password's Business/Enterprise
  plans are marketed as including an SLA, but the actual terms are not published
  publicly (negotiated/contractual). The only SLA document on 1password.com is the
  legacy Trelica / SaaS Manager SLA
  (https://1password.com/legal/saas-manager/service-level-agreement), a separate
  acquired product, NOT 1Password's password manager. That Trelica SLA states a
  "99.9% uptime commitment", a formula-based (not tiered) credit "= (Pro-rated
  Subscription fees per minute x minutes of Service Outage) x 5", a monthly cap
  of "20% of their total pro-rated Subscription Fees", and a request deadline "no
  later than 30 days after the last day of the month during which the Service
  Outage...occurred". The fields below (tiered credit tiers, max_credit_percent 25,
  claim_deadline_days 30 from incident) are UNVERIFIED against any official
  1Password SLA and were left unchanged pending a verifiable source. 2026-06-20
  cleanup: removed unverified numeric SLA values per the above note; no public
  credit-bearing SLA confirmed.
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
  submission_method: Support
  submission_url: https://support.1password.com
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
  - id: secrets
    name: 1Password Secrets Automation
    category: Secrets Management
    description: DevOps secrets management
    sla_eligible: true
    source_url: https://1password.com/legal-center
  - id: sso
    name: 1Password SSO
    category: Authentication
    description: Single sign-on integration
    sla_eligible: true
    source_url: https://1password.com/legal-center
  - id: vaults
    name: 1Password Vaults
    category: Password Management
    description: Secure password storage
    sla_eligible: true
    source_url: https://1password.com/legal-center
  - id: watchtower
    name: Watchtower
    category: Security
    description: Password health monitoring
    sla_eligible: true
    source_url: https://1password.com/legal-center
---

1Password is a Security & Identity provider. 1Password does not publish a public credit SLA for its core service; its [Terms of Service](https://1password.com/legal/terms-of-service/) provide the service "AS IS" / "AS AVAILABLE" with no uptime warranty. See 1Password's [Legal Center](https://1password.com/legal-center) for all policies. The only published SLA on 1password.com is the legacy [Trelica / SaaS Manager SLA](https://1password.com/legal/saas-manager/service-level-agreement), which covers a separate acquired product rather than the 1Password password manager.

<!-- Add human-readable notes about 1Password's SLA nuances here. -->
