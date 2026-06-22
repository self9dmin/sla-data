---
title: Atlassian
slug: atlassian
vendor_name: Atlassian
legal_entity: Atlassian Corporation Plc
category: Developer Tools
website: https://www.atlassian.com
scope: global
sla_url: https://www.atlassian.com/legal/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 50
claim_deadline_days: 15
has_automatic_credits: false
min_plan_for_sla: premium
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 50
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 95
      credit_percent: 50
claim_process:
  deadlines:
    - type: submission
      days: 15
      business_days: false
      anchor_point: end_of_calendar_month
      description: Submit a ticket with all fields fully and accurately completed within fifteen (15) days after the end of the calendar month in which the alleged failure occurred
  submission_method: Support Portal
  submission_url: https://support.atlassian.com
  required_evidence:
    - Affected Cloud product
    - Incident details
  review_timeline: Not specified
  credit_application: Applied to invoice for the affected Cloud Product
global_exclusions:
  - Scheduled or emergency maintenance
  - Force majeure events
  - Internet/infrastructure issues outside Atlassian's control
  - Customer breach, unauthorized use, equipment, or data
  - Third-party products
  - Sandbox, Free, and Beta products
  - Integrations, API calls, and mobile experiences (except Bitbucket Git transactions)
support_tiers:
  - name: Free
    slug: free
    price_model: Free
    sla_eligible: false
    claim_assistance: false
    availability: None
    channels:
      - Community
  - name: Standard
    slug: standard
    price_model: Per-user pricing
    sla_eligible: false
    claim_assistance: false
    availability: Business hours
    channels:
      - Web
    response_times:
      general: < 24 hours
  - name: Premium
    slug: premium
    price_model: Per-user pricing (higher)
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Web
      - Phone
    response_times:
      critical: < 1 hour
      high: < 4 hours
    features:
      guaranteedUptime: 99.9%
  - name: Enterprise
    slug: enterprise
    price_model: Custom
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Web
      - Phone
      - TAM
    response_times:
      critical: < 30 minutes
      high: < 2 hours
    features:
      tam: Dedicated
      guaranteedUptime: 99.95%
services:
  - id: jira
    name: Jira
    category: Project Management
    description: Issue and project tracking
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.atlassian.com/legal/sla
  - id: confluence
    name: Confluence
    category: Documentation
    description: Team collaboration and wiki
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.atlassian.com/legal/sla
  - id: bitbucket
    name: Bitbucket
    category: Source Control
    description: Git code hosting
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.atlassian.com/legal/sla
  - id: jira-service-management
    name: Jira Service Management
    category: IT Service Management
    description: Service desk and ITSM
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.atlassian.com/legal/sla
  - id: trello
    name: Trello
    category: Project Management
    description: Visual project management
    sla_eligible: false
    source_url: https://www.atlassian.com/legal/sla
  - id: opsgenie
    name: Opsgenie
    category: Incident Management
    description: On-call and alerting; covered by a separate product-specific SLA
    sla_eligible: false
    source_url: https://www.atlassian.com/software/opsgenie/sla
  - id: statuspage
    name: Statuspage
    category: Status Communication
    description: Status page hosting
    sla_eligible: false
    source_url: https://www.atlassian.com/legal/sla
sla_tiers:
  - name: 'Enterprise'
    requirement: 'Enterprise plan'
    uptime_commitment: 99.95
    source_url: 'https://support.atlassian.com/subscriptions-and-billing/docs/service-level-agreement-for-atlassian-cloud-products/'
support:
  tiers:
    - "Standard"
    - "Premium"
    - "Enterprise"
  has_24x7: true
  fastest_response: "30 min"
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: false
  success_program: true
  training: false
  pricing: flat
  source_url: "https://confluence.atlassian.com/support/atlassian-support-offerings-193299636.html"
  note: "Atlassian uses commercially reasonable efforts to meet target response times; no credit remedy."
---

Atlassian is a DevOps & Development provider. See the official SLA at [https://www.atlassian.com/legal/sla](https://www.atlassian.com/legal/sla).

<!--
Atlassian's Cloud SLA applies only to Premium and Enterprise plans of Eligible Cloud Products
(Jira, Jira Service Management, Confluence, Bitbucket, Compass, Loom Business+AI/Enterprise,
Jira Product Discovery). Standard and Free plans have NO uptime SLA.
Uptime commitment: 99.9% (Premium), 99.95% (Enterprise).
Premium credit tiers: <99.9%->10%, <99.0%->25%, <95.0%->50%.
Enterprise adds a <99.95% and >=99.9% -> 5% tier.
Aggregate maximum Service Credit will not exceed 100% of the amount invoiced for the affected
Cloud Product in that billing period. Claims must be submitted within 15 days after the end of
the calendar month in which the failure occurred. Opsgenie has a separate product-specific SLA.
-->

