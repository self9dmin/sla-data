---
title: Druva
slug: druva
vendor_name: Druva
legal_entity: Druva, Inc.
category: Storage & Backup
website: https://www.druva.com
scope: global
sla_url: https://www.druva.com/msa
last_verified: '2026-09-09'
last_updated: '2026-09-09'
uptime_commitment: 99.5
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: false
credit_note: 'Verified against Druva Service Level Agreement and Data Resiliency Guarantee (druva.com/legal; both pages return HTTP 403, content indexed by search engines). Legal entity verbatim: "Druva, Inc., a Delaware, United States company"; 2051 Mission College Blvd, Santa Clara, CA 95054. Standard SLA — Uptime verbatim: "The ''Availability SLA'' means that the Cloud Services will be available not less than 99.5% of the time during a Reporting Period." Calculation formula verbatim: "(Total Hours in Reporting Period – Unscheduled Maintenance which causes unavailability – Scheduled Maintenance) / (Total Hours in Reporting Period – Scheduled Maintenance) × 100%." Standard SLA credit verbatim: "If Druva fails to meet the Availability SLA, Durability SLA or Reliability SLA, Druva will provide a service credit to Customer equal to 10% of one month of Eligible Druva Solution fees." Claim deadline verbatim: "Any Customer request for a credit that Customer is entitled to under this SLA may only be made on a calendar month basis and must be submitted within ten (10) days after the end of the relevant calendar month or shall be deemed to have been waived by Customer." Claim method: written submission to Druva. Termination right verbatim: "If the same SLA Failure occurs in three (3) consecutive Reporting Periods, then Customer shall have the right to terminate the Customer Agreement upon written notice to Druva and Customer shall receive a prorated amount of the applicable fees prepaid." Sole remedy verbatim: "The right to a credit and/or the right to terminate this Agreement under this SLA and this Agreement shall be the sole and exclusive remedy available to Customer in the event of unavailability of the Cloud Services." InSync scheduled maintenance verbatim: "Every Saturday between 10 AM UTC to 1 PM UTC." Data Resiliency Guarantee (DRG) — separate instrument providing CASH payments (not credits) for data loss events. DRG minimum spend: $25,000/year. DRG maximum payments by tier: $25K–$49K/year = $100K; $50K–$99K/year = $250K; $100K–$249K/year = $750K; $250K–$499K/year = $2M; $500K–$999K/year = $4.5M; $1M+/year = $10M. DRG not available for Dell OEM orders or MSP customers. Additional SLA metrics: Durability SLA (99.999% data recoverable); Reliability SLA (99% backup success); Immutability SLA (100% immutable backups).'
credit_policy:
  remedy_type: credit
  calculation_type: per_incident
  max_credit_percent: 10
claim_process:
  submission_method: Written submission
  deadlines:
    - type: submission
      days: 10
      business_days: false
      anchor_point: month_end
      description: Written claim submitted within 10 days after end of the relevant calendar month — missed deadline forfeits the credit
global_exclusions:
  - Scheduled maintenance excluded (InSync: Saturdays 10 AM – 1 PM UTC)
  - Unscheduled maintenance that does not cause unavailability excluded from calculation
  - Credits are 10% of one month fees per SLA failure type (Availability, Durability, Reliability)
  - DRG (cash payments) separate from standard SLA credits and requires $25K+ annual spend
  - DRG not available for Dell OEM orders or MSP customers
  - Termination right triggered after 3 consecutive months of the same SLA failure
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Dedicated support
services:
  - id: druva-insync
    name: Druva inSync
    category: Storage & Backup
    description: SaaS data protection for endpoints, Microsoft 365, Google Workspace, and collaboration apps
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.druva.com/msa
  - id: druva-phoenix
    name: Druva Phoenix
    category: Storage & Backup
    description: SaaS backup and disaster recovery for servers, NAS, and databases
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.druva.com/msa
---

Druva (Druva, Inc., Delaware; Santa Clara, CA) is a SaaS data protection platform. The standard SLA guarantees 99.5% monthly availability with a 10% of one month's fees credit per SLA failure type (Availability, Durability, or Reliability). The claim window is only 10 days after month-end — missing it forfeits the credit. A termination right activates after 3 consecutive months of the same failure. A separate Data Resiliency Guarantee provides actual cash payments up to $10M for qualifying data loss events (minimum $25K annual spend, not available to MSPs or Dell OEM customers).
