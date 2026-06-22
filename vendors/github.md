---
title: GitHub
slug: github
vendor_name: GitHub
legal_entity: GitHub, Inc.
category: Developer Tools
website: https://github.com
scope: global
sla_url: https://github.com/customer-terms/github-online-services-sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 25
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 5
    - uptime_below: 99.5
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_quarter
      description: Redeem within 30 days of the end of the Applicable Period (calendar quarter); uptime measured quarterly; credits also capped at 90 days of paid service per quarter
  submission_method: GitHub Support
  submission_url: https://support.github.com
  required_evidence:
    - Enterprise/Organization name
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 10 business days
  credit_application: Applied to next billing cycle
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Free tier services
  - Beta features
  - Customer misconfigurations
ai_feature_exclusions:
  - feature: GitHub Copilot
    exclusionType: not_covered_by_sla
    quote: Copilot is not listed in covered services for Enterprise Cloud SLA
    sourceUrl: https://github.com/customer-terms/github-online-services-sla
support_tiers:
  - name: Free
    slug: free
    price_model: Free
    sla_eligible: false
    claim_assistance: false
    availability: None
    channels:
      - Community
  - name: Team
    slug: team
    price_model: $4/user/month
    sla_eligible: false
    claim_assistance: false
    availability: Business hours
    channels:
      - Web
    response_times:
      general: < 24 hours
  - name: Enterprise
    slug: enterprise
    price_model: $21/user/month
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Web
      - Phone
    response_times:
      critical: < 4 hours
      high: < 8 hours
    features:
      premiumSupport: true
services:
  - id: git-operations
    name: Git Operations
    category: Source Control
    description: Git push, pull, clone operations
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://github.com/customer-terms/github-online-services-sla
  - id: actions
    name: GitHub Actions
    category: CI/CD
    description: Workflow automation and CI/CD
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://github.com/customer-terms/github-online-services-sla
  - id: api
    name: GitHub API
    category: API
    description: REST and GraphQL APIs
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://github.com/customer-terms/github-online-services-sla
  - id: packages
    name: GitHub Packages
    category: Package Registry
    description: Package hosting service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://github.com/customer-terms/github-online-services-sla
  - id: codespaces
    name: GitHub Codespaces
    category: Development
    description: Cloud development environments
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://github.com/customer-terms/github-online-services-sla
support:
  tiers:
    - "Standard"
    - "Premium"
    - "Premium Plus"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: team
  architecture_review: false
  professional_services: true
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://docs.github.com/en/enterprise-cloud@latest/support/learning-about-github-support/about-github-premium-support"
  note: "Premium Plus adds a named CRE team, health checks, training; targets, not credit-backed."
---

GitHub is a DevOps & Development provider. See the official SLA at [https://github.com/customer-terms/github-online-services-sla](https://github.com/customer-terms/github-online-services-sla).

<!-- Add human-readable notes about GitHub's SLA nuances here. -->
