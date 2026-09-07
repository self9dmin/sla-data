---
title: LangChain
slug: langchain
vendor_name: LangChain
legal_entity: LangChain, Inc.
category: AI & Machine Learning
website: https://www.langchain.com
scope: global
sla_url: https://www.langchain.com/support-plans
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.5
max_credit_percent: 20
has_automatic_credits: true
min_plan_for_sla: standard
credit_note: LangChain commits to 99.5% API uptime (measured quarterly) for paid SaaS LangSmith / BYOC control plane, with automatic service credits of 10% (<99.5%) and 20% (<99%) applied to the next invoice. A minute counts as down when >50% of API calls return 5xx. Free / no-charge access is "as is".
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 20
  credit_tiers:
    - uptime_below: 99.5
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 20
claim_process:
  submission_method: Automatic
  submission_url: https://www.langchain.com/support-plans
  required_evidence: []
  review_timeline: N/A — auto-applied
  credit_application: Credited to next invoice automatically
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Beta / preview features
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: false
    claim_assistance: false
    availability: Business hours
    channels:
      - Documentation
  - name: Enterprise
    slug: enterprise
    price_model: Custom
    sla_eligible: false
    claim_assistance: false
    availability: 24/7
    channels:
      - Email
      - Phone
    response_times:
      critical: < 1 hour
      high: < 4 hours
services:
  - id: langsmith
    name: LangSmith
    category: AI
    description: LLM observability & evaluation
    sla_eligible: true
    source_url: https://www.langchain.com
  - id: langgraph
    name: LangGraph Platform
    category: AI
    description: Agent deployment runtime
    sla_eligible: true
    source_url: https://www.langchain.com
  - id: oss
    name: LangChain (OSS)
    category: AI
    description: Open-source framework
    sla_eligible: false
    source_url: https://www.langchain.com
support:
  channels:
    - email
    - chat
    - portal
    - slack
    - phone
  designated_contact: team
  professional_services: true
  has_24x7: true
  fastest_response: 30 min (Sev1, Premium)
  note: All tiers email/in-app/chat/portal; Premium adds Slack/Teams + phone (Sev1 escalations only) and is 24x7x365 for Sev1/2. Premium assigns an AI Engineer; onboarding/workshops/reviews. All tiers email/in-app/chat/portal; Premium adds Slack/Teams + phone (Sev1 escalations only) and is 24x7x365 for Sev1/2. Premium assigns an AI Engineer; onboarding/workshops/reviews.
  source_url: https://www.langchain.com/support-plans
---

LangChain is an AI & Machine Learning provider. See the SLA/terms at [https://www.langchain.com/support-plans](https://www.langchain.com/support-plans).
