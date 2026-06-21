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
review_note: >-
  Hugging Face does not publish a public uptime SLA with service credits on its
  own domain. The Terms of Service (https://huggingface.co/terms-of-service)
  contains no uptime commitment or credit policy and disclaims availability
  ("We may at any time modify, suspend, or discontinue, temporarily or
  permanently, the Services (or any part thereof) with or without notice."). The
  official Inference Endpoint Service Description
  (https://cdn-media.huggingface.co/landing/assets/Inference+Endpoint+-+Service+Description.pdf)
  states the service "is subject to the same Service Level Agreements generally
  available through the Hugging Face Terms of Use, unless specific Availability,
  Support or other Service Level Agreements are specified in an applicable Order
  Form." The Private Hub Service Description defers SLAs to "applicable Order
  Forms." Enterprise plan docs (https://huggingface.co/docs/hub/enterprise) list
  only "Email support with SLA" (a support-response SLA, not an uptime/credit
  SLA). Therefore the 99.9 uptime_commitment, credit_policy, claim_process, and
  per-service uptime numbers below are NOT verifiable on huggingface.co and were
  left unchanged pending a public SLA or a customer Order Form. Verified
  2026-06-19 that no public credit SLA exists.

  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no public credit-bearing SLA confirmed.
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
---

Hugging Face is a AI & Machine Learning provider. See the official SLA at [https://huggingface.co/terms-of-service](https://huggingface.co/terms-of-service).

<!-- Add human-readable notes about Hugging Face's SLA nuances here. -->
