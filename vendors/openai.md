---
title: OpenAI
slug: openai
vendor_name: OpenAI
legal_entity: OpenAI
category: AI & Machine Learning
website: https://www.openai.com
scope: global
sla_url: https://openai.com/api-scale-tier/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  The previous sla_url (https://openai.com/policies/service-level-agreement/)
  returns HTTP 404. The only publicly documented OpenAI uptime SLA is the Scale
  Tier / Priority Processing 99.9% uptime SLA for Enterprise customers, confirmed
  at https://openai.com/api-scale-tier/ ("Scale Tier traffic offers a 99.9%
  uptime SLA and prioritized compute." / "This offering is available to
  Enterprise customers."). OpenAI does NOT publicly publish service credit
  percentages, credit tiers, a maximum credit percent, or an SLA claim deadline
  for SLA breaches; the reliability FAQ only states "You will be credited with
  the greater of the two SLA amounts for the calendar month of that Scale Tier
  token unit purchase." The credit_tiers, max_credit_percent, claim_deadline_days
  (30), and submission details in this file are NOT verifiable on openai.com and
  have been left unchanged pending an enterprise Order Form / SLA exhibit. Note:
  https://openai.com/policies/service-credit-terms/ governs prepaid/promo Service
  Credit balances, not uptime SLA credits; the 30-day window in the Services
  Agreement (Sec 6.4) is for invoice disputes via ar-enterprise@openai.com, not
  SLA credit claims. 2026-06-20 cleanup: removed unverified numeric SLA values
  per the above note; no public credit-bearing SLA confirmed.
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: invoice_date
      description: Submit within 30 days from invoice date
  submission_method: Enterprise Email
  submission_url: mailto:ar-enterprise@openai.com
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
  - id: chatgpt
    name: ChatGPT
    category: AI
    description: ChatGPT conversational AI
    sla_eligible: true
    source_url: https://openai.com/api-scale-tier/
  - id: dalle
    name: DALL-E
    category: AI
    description: Image generation API
    sla_eligible: true
    source_url: https://openai.com/api-scale-tier/
  - id: embeddings
    name: Embeddings
    category: AI
    description: Text embeddings API
    sla_eligible: true
    source_url: https://openai.com/api-scale-tier/
  - id: api
    name: OpenAI API
    category: AI
    description: GPT and AI model API access
    sla_eligible: true
    source_url: https://openai.com/api-scale-tier/
  - id: whisper
    name: Whisper
    category: AI
    description: Speech recognition API
    sla_eligible: true
    source_url: https://openai.com/api-scale-tier/
support:
  tiers:
    - "Free"
    - "Plus"
    - "Team"
    - "Business"
    - "Enterprise"
    - "API Scale Tier"
  has_24x7: true
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://openai.com/chatgpt/enterprise/"
  note: "Enterprise: 24/7 support, AI advisors, account director/CSM. API Scale Tier carries an uptime SLA; support response times are targets."
---

OpenAI is a AI & Machine Learning provider. See the official SLA at [https://openai.com/api-scale-tier/](https://openai.com/api-scale-tier/).

<!-- Add human-readable notes about OpenAI's SLA nuances here. -->
