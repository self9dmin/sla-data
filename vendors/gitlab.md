---
title: GitLab
slug: gitlab
vendor_name: GitLab
legal_entity: GitLab
category: Developer Tools
website: https://www.gitlab.com
scope: global
sla_url: https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/service-level-agreement/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 10
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: ultimate
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 10
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 5
    - uptime_below: 99.5
      credit_percent: 10
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident_date
      description: Submit within 30 days of incident
  submission_method: Support Ticket
  submission_url: https://support.gitlab.com/
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 15 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Scheduled Maintenance windows
  - Emergency maintenance for critical security or data integrity
  - Force Majeure or general Internet connectivity issues
  - Customer Terms of Service violations or misuse
  - Equipment or software not controlled by GitLab
  - Alpha, Beta, or Preview features
support_tiers:
  - name: Premium
    slug: premium
    price_model: Included
    sla_eligible: false
    claim_assistance: false
    availability: Business hours
    channels:
      - Email
    response_times:
      general: < 24 hours
  - name: Ultimate
    slug: ultimate
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
  - id: ci
    name: GitLab CI/CD
    category: CI/CD
    description: Continuous integration and deployment
    uptime_commitment: 99.9
    sla_eligible: false
    source_url: https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/service-level-agreement/
  - id: registry
    name: GitLab Container Registry
    category: DevOps
    description: Container image registry
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/service-level-agreement/
  - id: packages
    name: GitLab Package Registry
    category: DevOps
    description: Package management (npm, Maven, etc.)
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/service-level-agreement/
  - id: pages
    name: GitLab Pages
    category: Hosting
    description: Static site hosting
    uptime_commitment: 99.9
    sla_eligible: false
    source_url: https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/service-level-agreement/
  - id: saas
    name: GitLab.com (SaaS)
    category: DevOps
    description: Hosted GitLab platform (Ultimate tier; covers Issues/MRs, Git operations, Container & Package Registry, API)
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/service-level-agreement/
support:
  tiers:
    - "Free"
    - "Priority"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: included
  source_url: "https://about.gitlab.com/support/"
  note: "Priority Support is included with Premium/Ultimate; 30-min Sev1 target, 24/7 emergency only."
---

GitLab is a DevOps & Development provider. See the official SLA at [https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/service-level-agreement/](https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/service-level-agreement/).

The current SLA (effective for Ultimate-tier SaaS purchased or renewed on or after 2026-01-01) commits to a 99.9% Monthly Uptime Percentage for Covered Experiences (Issues and Merge Requests, Git operations, Container Registry, Package Registry, and related API requests). Service credits are claims-based: 5% of monthly fees when uptime is 99.5% to below 99.9%, and 10% when below 99.5%. Claims must be submitted via support.gitlab.com within thirty (30) days after the end of the affected month.

<!-- Add human-readable notes about GitLab's SLA nuances here. -->
