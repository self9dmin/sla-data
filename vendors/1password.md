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
support:
  tiers:
    - "Teams"
    - "Business"
    - "Enterprise"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: false
  professional_services: false
  success_program: true
  training: true
  pricing: included
  source_url: "https://1password.com/pricing"
  note: "24/7 support and a CSM are marketed inclusions, not contractual response-time SLAs."
---

1Password is a Security & Identity provider. 1Password does not publish a public credit SLA for its core service; its [Terms of Service](https://1password.com/legal/terms-of-service/) provide the service "AS IS" / "AS AVAILABLE" with no uptime warranty. See 1Password's [Legal Center](https://1password.com/legal-center) for all policies. The only published SLA on 1password.com is the legacy [Trelica / SaaS Manager SLA](https://1password.com/legal/saas-manager/service-level-agreement), which covers a separate acquired product rather than the 1Password password manager.

<!-- Add human-readable notes about 1Password's SLA nuances here. -->
