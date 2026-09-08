---
title: Scaleway
slug: scaleway
vendor_name: Scaleway
legal_entity: Scaleway SAS
category: Cloud Infrastructure
website: https://www.scaleway.com/en/
scope: regional
sla_url: https://www.scaleway.com/en/virtual-instances/sla/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.9
max_credit_percent: 100
has_automatic_credits: false
min_plan_for_sla: all plans
claim_deadline_days: 30
needs_review: false
credit_note: 'Verified against Scaleway Instance SLA (scaleway.com/en/virtual-instances/sla/): 99.9% monthly SLO (Service Level Objective) for Virtual Instances. Credit structure: "The amount of the compensation granted by Scaleway is determined according to the following table and corresponds to a percentage of the monthly amount invoiced to the Client for the Resources that did not comply with the SLO during a given month." The exact percentage tiers per uptime range are in an HTML table on the SLA page that was not captured via search indexing — direct verification required. Cap: "The amount of the compensation granted by Scaleway over the course of a given calendar month shall under no circumstances exceed one-hundred percent (100%) of the monthly amount invoiced to the Client for all the Resources that failed to comply with the SLO." Credits are non-cash: "The Client acknowledges that this compensation cannot under any circumstances be reimbursed in cash." Claim: "Client''s request for compensation must be issued no later than thirty (30) days following the month during which the applicable Resources did not comply with the SLO." Edge Services credit cap is 50% per month.'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
claim_process:
  submission_method: Ticket
  submission_url: https://console.scaleway.com/support/tickets
  review_timeline: Not specified
  credit_application: Account credit only — not reimbursable in cash
  required_evidence:
    - Affected resource identifiers
    - Date and duration of non-compliance
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: billing_cycle_end
      description: Submit within 30 days following the month in which the SLO was not met
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Accounts with unpaid invoices (must notify within deadline)
support_tiers:
  - name: Basic
    price_model: Included
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
  - name: Business
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
services:
  - id: virtual-instances
    name: Virtual Instances
    category: Compute
    description: Scaleway cloud compute instances
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.scaleway.com/en/virtual-instances/sla/
  - id: block-storage
    name: Block Storage
    category: Storage
    description: Block storage volumes
    sla_eligible: true
    source_url: https://www.scaleway.com/en/block-storage/sla/
  - id: bare-metal
    name: Bare Metal
    category: Compute
    description: Dedicated bare metal servers
    sla_eligible: true
    source_url: https://www.scaleway.com/en/bare-metal/sla/
---

Scaleway is a European cloud provider headquartered in Paris. The SLA uses a tiered credit table (exact percentages per uptime range are on the SLA page but were not captured during research); credits are capped at 100% of monthly fees for non-compliant resources and are non-refundable in cash. Claims must be submitted within 30 days after the end of the affected month.
