---
title: Plaid
slug: plaid
vendor_name: Plaid
legal_entity: Plaid
category: Finance & Payments
website: https://www.plaid.com
scope: global
sla_url: https://plaid.com/legal/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Old sla_url https://plaid.com/legal/service-level-agreement/ returns HTTP 404
  (dead). Plaid does not publish a public uptime SLA with service credits. The
  legal index at https://plaid.com/legal/ lists no SLA document. The only "99.9%
  or higher" availability figure on plaid.com (Terms of Use, Section 10 Baseline
  Performance Metrics) applies to Data Partners providing data to Plaid, not to
  Plaid's own customers, and carries no service-credit remedy. Per Plaid support
  docs, uptime/response-time SLA commitments "with associated service credits"
  exist only within paid Support Packages (Basic/Plus/Premium) negotiated by
  contract and are not publicly published. uptime_commitment, max_credit_percent,
  credit_policy, claim_process, and support_tier specifics below could not be
  verified on plaid.com and are left unchanged pending a contractual source.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note;
  no public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: no_credit
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://dashboard.plaid.com/support
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
  - id: auth
    name: Plaid Auth
    category: Verification
    description: Account verification
    sla_eligible: true
    source_url: https://plaid.com/legal/
  - id: identity
    name: Plaid Identity
    category: KYC
    description: Identity verification
    sla_eligible: true
    source_url: https://plaid.com/legal/
  - id: link
    name: Plaid Link
    category: Account Linking
    description: Bank account linking
    sla_eligible: true
    source_url: https://plaid.com/legal/
  - id: transactions
    name: Plaid Transactions
    category: Financial Data
    description: Transaction data access
    sla_eligible: true
    source_url: https://plaid.com/legal/
  - id: transfer
    name: Plaid Transfer
    category: Money Movement
    description: ACH transfers
    sla_eligible: true
    source_url: https://plaid.com/legal/
---

Plaid is a Finance & Payments provider. Plaid does not publish a public uptime SLA with service credits; uptime and response-time SLA commitments are offered only through paid Support Packages negotiated by contract. See Plaid's legal documents at [https://plaid.com/legal/](https://plaid.com/legal/).

<!-- Add human-readable notes about Plaid's SLA nuances here. -->
