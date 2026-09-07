---
title: Doppler
slug: doppler
vendor_name: Doppler
legal_entity: Doppler Technologies, Inc.
category: Developer Tools
website: https://www.doppler.com
scope: global
sla_url: https://docs.doppler.com/docs/service-sla
last_verified: '2026-06-25'
last_updated: '2026-06-25'
has_automatic_credits: false
min_plan_for_sla: enterprise
sla_help_wanted: false
needs_review: false
credit_note: 'Reviewed Doppler SLO documentation (docs.doppler.com/docs/service-sla) and Terms of Service. Doppler explicitly labels their commitment an SLO (Service Level Objective), not an SLA: "Doppler maintains a quarterly Service Level Objective (SLO) of 99.95%." [VERBATIM] Measurement period: quarterly [VERBATIM]. Maintenance exclusion verbatim: "Downtime related to maintenance events scheduled in advance will not be counted against this SLO." Maintenance windows verbatim: "Maintenance events are typically limited to no more than 5 minutes of downtime per quarter." An SLO is an internal operational target; it does not carry contractual credit remedies. This is confirmed by the Terms of Service no-refund clause verbatim: "You shall not be entitled to any refund of any prepaid fees unless terminated by Doppler without cause." No credit schedule, credit percentage, claim deadline, or credit tiers found in any publicly accessible document. Legal entity: Doppler Technologies, Inc. (San Francisco, CA).'
credit_policy:
  remedy_type: no_credit
  calculation_type: none
claim_process:
  submission_method: Not applicable
global_exclusions:
  - Commitment is an SLO (internal target), not a contractual SLA
  - No credit remedy tied to the SLO
  - Terms of Service no-refund clause bars prepaid fee refunds
  - Scheduled maintenance windows excluded from SLO calculation
support_tiers:
  - name: Free
    price_model: Free
    sla_eligible: false
    availability: Community
    channels:
      - Documentation
  - name: Team
    price_model: Subscription
    sla_eligible: false
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Enterprise
    price_model: Custom
    sla_eligible: false
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Dedicated support
services:
  - id: doppler-secrets-manager
    name: Doppler Secrets Manager
    category: Developer Tools
    description: Universal secrets manager for syncing environment variables and secrets across teams, apps, and infrastructure
    sla_eligible: false
    source_url: https://docs.doppler.com/docs/service-sla
---

Doppler (Doppler Technologies, Inc., San Francisco) is a universal secrets management platform. Doppler publishes a quarterly 99.95% Service Level Objective (SLO) — explicitly not an SLA. An SLO is an internal operational benchmark carrying no contractual credit remedy, confirmed by the Terms of Service no-refund clause. Scheduled maintenance (typically ≤5 minutes per quarter) is excluded from the SLO calculation.
