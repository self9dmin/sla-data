---
title: Tailscale
slug: tailscale
vendor_name: Tailscale
legal_entity: Tailscale Inc.
category: Security & Identity
website: https://tailscale.com
scope: global
sla_url: https://tailscale.com/sla
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.9
max_credit_percent: 10
has_automatic_credits: false
min_plan_for_sla: silver
claim_deadline_days: 30
needs_review: false
credit_note: 'Verified against Tailscale SLA (tailscale.com/sla; mirrored at github.com/tailscale/terms-and-conditions/blob/main/sla/index.md — directly fetched from primary source). Uptime: "Tailscale will make commercially reasonable efforts to maintain at least 99.9% Uptime." Credit tiers verbatim (Silver/Gold plans): "≥99.9%: No credit; 90.00%–99.89%: 5% of monthly fees; <90.00%: 10% of monthly fees." Platinum plan verbatim: "≥99.99%: No credit; 90.00%–99.989%: 5% of monthly fees; <90.00%: 10% of monthly fees." Non-refundability verbatim: "Service Credits are not transferable or refundable, and have no currency or exchange value." Monthly cap verbatim: "Service Credits are capped at a maximum of the applicable monthly Fees." Claim process verbatim: "Customers must request Service Credits within thirty (30) days after the end of the impacted month by contacting Support." Applies to Silver, Gold, and Platinum plan subscribers; free plan users are excluded. Data confirmed from direct primary source (GitHub public document).'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  max_credit_percent: 10
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 5
    - uptime_below: 90
      credit_percent: 10
claim_process:
  submission_method: Support ticket
  submission_url: https://tailscale.com/contact/support
  credit_application: Applied as credits toward future service; non-refundable and non-transferable
  required_evidence:
    - Dates and times of unavailability
    - Affected plan/account details
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: billing_cycle_end
      description: Service Credit requests must be made within 30 days after the end of the impacted month
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Free plan users
support_tiers:
  - name: Starter
    price_model: Free
    sla_eligible: false
    availability: Community
    channels:
      - Documentation
      - Community
  - name: Silver
    price_model: Per-user subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Email
      - Ticket
  - name: Gold
    price_model: Per-user subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Email
      - Ticket
  - name: Platinum
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Email
      - Dedicated support
services:
  - id: tailscale-network
    name: Tailscale Network (Control Plane)
    category: Security & Identity
    description: Zero-trust mesh VPN using WireGuard with centralized control plane
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://tailscale.com/sla
---

Tailscale offers a 99.9% uptime SLA for Silver/Gold plans and 99.99% for Platinum. Credits are tiered at 5% (90–99.89% uptime) and 10% (<90%), capped at monthly fees. The SLA text is publicly available on GitHub. Claims must be filed within 30 days of the impacted month.
