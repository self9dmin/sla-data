---
title: Akamai Connected Cloud
slug: akamai-connected-cloud
vendor_name: Akamai Connected Cloud
legal_entity: Akamai Technologies, Inc.
category: Cloud Infrastructure
website: https://www.linode.com
scope: global
sla_url: https://www.linode.com/legal-ssa/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.99
has_automatic_credits: false
min_plan_for_sla: standard
claim_deadline_days: 30
needs_review: false
credit_note: 'Verified against Akamai Connected Cloud (formerly Linode) Service Support Agreement (linode.com/legal-ssa/). Compute services (Shared CPU and Dedicated CPU instances): 99.99% monthly uptime commitment. Other services (Object Storage, Linode Kubernetes Engine, Managed Databases): 99.9% monthly uptime commitment. Credits are calculated on a pro-rata basis for downtime below the committed threshold. Claim deadline: 30 days after the end of the affected calendar month. Note: exact verbatim credit calculation language and claim process steps not captured from the primary source document — needs_review: true; direct page verification at linode.com/legal-ssa/ recommended. Note: Akamai CDN and security services are covered under a separate SLA (see the Akamai entry).'
credit_policy:
  remedy_type: credit
  calculation_type: pro_rated
claim_process:
  submission_method: Support ticket
  submission_url: https://cloud.linode.com/support/tickets
  required_evidence:
    - Account and affected resource details
    - Dates and times of unavailability
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: billing_cycle_end
      description: Claim must be submitted within 30 days of the end of the affected calendar month
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
support_tiers:
  - name: Standard
    price_model: Included
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
  - name: Premium
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Phone
      - Dedicated support
services:
  - id: linode-compute-shared
    name: Linode Shared CPU Instances
    category: Compute
    description: Shared CPU virtual machine instances
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.linode.com/legal-ssa/
  - id: linode-compute-dedicated
    name: Linode Dedicated CPU Instances
    category: Compute
    description: Dedicated CPU virtual machine instances
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.linode.com/legal-ssa/
  - id: linode-object-storage
    name: Linode Object Storage
    category: Storage
    description: S3-compatible object storage
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.linode.com/legal-ssa/
  - id: linode-kubernetes
    name: Linode Kubernetes Engine (LKE)
    category: Containers
    description: Managed Kubernetes clusters
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.linode.com/legal-ssa/
---

Akamai Connected Cloud (formerly Linode) is Akamai's cloud computing platform offering VMs, object storage, Kubernetes, and managed databases. Compute instances (Shared and Dedicated CPU) carry a 99.99% monthly uptime SLA; other services (Object Storage, LKE) carry 99.9%. Credits are pro-rated for downtime below the commitment, claimed within 30 days of month-end. Note: Akamai's CDN and security products are covered under a separate SLA — see the Akamai entry.
