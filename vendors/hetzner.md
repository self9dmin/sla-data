---
title: Hetzner
slug: hetzner
vendor_name: Hetzner
legal_entity: Hetzner Online GmbH
category: Cloud Infrastructure
website: https://www.hetzner.com
scope: regional
sla_url: https://docs.hetzner.com/general/company-and-policy/slas-cloud/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.9
max_credit_percent: 100
has_automatic_credits: false
min_plan_for_sla: all plans
claim_deadline_days: 14
credit_note: 'Verified against Hetzner Cloud SLA (docs.hetzner.com/general/company-and-policy/slas-cloud/): "Hetzner will use commercially reasonable efforts to ensure a monthly availability of 99.9% for its Cloud Servers, measured by the actual availability of each individual Cloud Server during a given calendar month." Credit is pro-rata: "calculated based on the hourly rate of the Cloud Server affected by the outage, as per the current price list, prorated to the actual duration of the unavailability." Cap: "Under no circumstances will the compensation for a given Cloud Server exceed one hundred percent (100%) of the monthly invoice amount for that Cloud Server." Credits are "non-refundable Cloud Credits, which may only be applied to future usage fees for Hetzner Cloud products. Cash payments are expressly excluded." Claim: "The Customer must submit a request for Cloud Credits within fourteen (14) calendar days following the end of the relevant month." SLA covers Cloud Servers and vServers only — load balancers, firewalls, snapshots, backups, managed services, and object storage are explicitly excluded.'
credit_policy:
  calculation_type: pro_rated
  remedy_type: credit
  max_credit_percent: 100
claim_process:
  submission_method: Ticket
  submission_url: https://www.hetzner.com/support
  credit_application: Non-refundable Cloud Credits for future Hetzner Cloud usage only
  required_evidence:
    - Affected Cloud Server IDs
    - Dates and duration of unavailability
  deadlines:
    - type: submission
      days: 14
      business_days: false
      anchor_point: billing_cycle_end
      description: Submit within 14 calendar days after the end of the affected month
global_exclusions:
  - Scheduled maintenance announced at least 24 hours in advance
  - Force majeure events
  - Customer-caused failures (software, configuration, operational practices)
  - Live migrations required for host stability
  - DDoS attacks and cyberattacks
  - Network interruptions outside Hetzner's control
support_tiers:
  - name: Standard
    price_model: Included
    sla_eligible: true
    availability: Business hours
    channels:
      - Email
      - Ticket
services:
  - id: cloud-servers
    name: Cloud Servers
    category: Compute
    description: Hetzner Cloud virtual servers (CX, CPX, CCX lines)
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://docs.hetzner.com/general/company-and-policy/slas-cloud/
  - id: vservers
    name: vServers
    category: Compute
    description: Hetzner vServer instances
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://docs.hetzner.com/general/company-and-policy/slas-cloud/
  - id: load-balancers
    name: Load Balancers
    category: Networking
    description: Managed load balancers — not covered by Cloud Server SLA
    sla_eligible: false
    source_url: https://docs.hetzner.com/general/company-and-policy/slas-cloud/
  - id: object-storage
    name: Object Storage
    category: Storage
    description: S3-compatible object storage — not covered by Cloud Server SLA
    sla_eligible: false
    source_url: https://docs.hetzner.com/general/company-and-policy/slas-cloud/
---

Hetzner is a Cloud Infrastructure provider based in Germany. The SLA covers Cloud Servers and vServers with a 99.9% monthly availability commitment and pro-rata credits (hourly rate × duration of unavailability, capped at 100% of the affected server's monthly invoice). Additional services such as load balancers, firewalls, snapshots, backups, managed Kubernetes, and object storage are explicitly excluded from SLA coverage.
