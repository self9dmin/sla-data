---
title: Hugging Face
slug: hugging-face
vendor_name: Hugging Face
legal_entity: Hugging Face
category: AI & Machine Learning
website: https://huggingface.co
scope: global
sla_url: https://huggingface.co/terms-of-service
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://huggingface.co/support
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
  - id: huggingface-autotrain
    name: AutoTrain
    category: AI
    description: Automated model training
    sla_eligible: true
    source_url: https://huggingface.co/terms-of-service
  - id: huggingface-hub
    name: Hugging Face Hub
    category: AI
    description: Model and dataset repository
    sla_eligible: true
    source_url: https://huggingface.co/terms-of-service
  - id: huggingface-inference
    name: Inference API
    category: AI
    description: Model inference endpoints
    sla_eligible: true
    source_url: https://huggingface.co/terms-of-service
  - id: huggingface-spaces
    name: Spaces
    category: AI
    description: ML app hosting
    sla_eligible: true
    source_url: https://huggingface.co/terms-of-service
support:
  tiers:
    - "Enterprise"
    - "Enterprise Plus"
    - "Expert Acceleration Program"
  has_24x7: false
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://huggingface.co/support"
  note: "Enterprise Plus adds private Slack with Solutions Engineering; Expert Acceleration is custom advisory."
---

Hugging Face is a AI & Machine Learning provider. See the official SLA at [https://huggingface.co/terms-of-service](https://huggingface.co/terms-of-service).

<!-- Add human-readable notes about Hugging Face's SLA nuances here. -->
