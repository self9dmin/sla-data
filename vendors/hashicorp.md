---
title: HashiCorp
slug: hashicorp
vendor_name: HashiCorp
legal_entity: HashiCorp
category: Developer Tools
website: https://www.hashicorp.com
scope: global
sla_url: https://cloud.hashicorp.com/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 30
claim_deadline_days: 10
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 30
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99.5
      credit_percent: 20
    - uptime_below: 99
      credit_percent: 30
claim_process:
  deadlines:
    - type: submission
      days: 10
      business_days: true
      anchor_point: quarter_end
      description: Log a support ticket within ten (10) business days after the last day of the Quarter
  submission_method: Support ticket
  submission_url: https://www.ibm.com/mysupport
  required_evidence:
    - Detailed description of events resulting in Downtime, including request logs documenting errors
    - Time and duration of the Downtime
    - Number and location(s) of affected users (if applicable)
    - Descriptions of attempts to resolve the Downtime at time of occurrence
  review_timeline: 45 days
  credit_application: Applied to a future invoice for the affected HashiCorp Cloud service
global_exclusions:
  - Factors outside HashiCorp's reasonable control (natural disaster, war, terrorism, riots, government action, network attacks, network/device failure at customer site)
  - Services, hardware, or software provided by a third party (e.g. underlying cloud platform services)
  - Use of customer password or equipment to access the network
  - Customer or third-party improper use, scaling or configuration, or failure to follow appropriate security practices
  - Scheduled downtime for maintenance and upgrades
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: false
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
  - id: hcp-boundary
    name: HCP Boundary
    category: Security
    description: Managed access management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://cloud.hashicorp.com/sla
  - id: hcp-consul
    name: HCP Consul
    category: Networking
    description: Managed service mesh
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://cloud.hashicorp.com/sla
  - id: hcp-packer
    name: HCP Packer
    category: DevOps
    description: Image management service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://cloud.hashicorp.com/sla
  - id: hcp-terraform
    name: HCP Terraform (Terraform Cloud)
    category: Infrastructure as Code
    description: Managed Terraform workflow
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://cloud.hashicorp.com/sla
  - id: hcp-vault
    name: HCP Vault
    category: Security
    description: Managed secrets management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://cloud.hashicorp.com/sla
  - id: hcp-vault-radar
    name: HCP Vault Radar
    category: Security
    description: Secret discovery and scanning
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://cloud.hashicorp.com/sla
  - id: hcp-vault-secrets
    name: HCP Vault Secrets
    category: Security
    description: Managed secrets management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://cloud.hashicorp.com/sla
support:
  tiers:
    - "Silver"
    - "Gold"
    - "Platinum"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.hashicorp.com/customer-success/enterprise-support"
  note: "Platinum lists a 30-min Sev1 target and a TAM; no credit-remedy language on official pages."
---

HashiCorp is a DevOps & Development provider. See the official SLA at [https://cloud.hashicorp.com/sla](https://cloud.hashicorp.com/sla).

The HashiCorp Cloud SLA applies only to HashiCorp Cloud services at the Enterprise tier or above. Service Credits are tiered (10% / 20% / 30% of Applicable Quarterly Service Fees) based on Quarterly Uptime Percentage, capped at 30%. To claim, log a support ticket within ten (10) business days after the last day of the affected Quarter; claims are processed within 45 days. Development/Dev-tier clusters are not covered.

<!-- Add human-readable notes about HashiCorp's SLA nuances here. -->
