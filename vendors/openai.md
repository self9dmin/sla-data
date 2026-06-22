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
