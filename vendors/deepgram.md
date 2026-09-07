---
title: Deepgram
slug: deepgram
vendor_name: Deepgram
legal_entity: Deepgram, Inc.
category: AI & Machine Learning
website: https://deepgram.com
scope: global
sla_url: https://deepgram.com/dedicated
last_verified: '2026-06-23'
last_updated: '2026-06-23'
sla_help_wanted: true
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_note: Deepgram's consumer Terms and enterprise MSA both provide the software "as is" and do not warrant uninterrupted performance. A "99.9% uptime, enterprise-grade SLA" appears only as marketing on the Dedicated page; any committed SLA is negotiated per order form — SLA help wanted.
credit_policy:
  calculation_type: none
  remedy_type: no_sla
claim_process:
  submission_method: N/A - No public SLA credits
  submission_url: https://deepgram.com/contact-us
  required_evidence: []
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
  - id: nova
    name: Nova (Speech-to-Text)
    category: AI
    description: Flagship ASR model
    sla_eligible: false
    source_url: https://deepgram.com
  - id: aura
    name: Aura (Text-to-Speech)
    category: AI
    description: TTS model
    sla_eligible: false
    source_url: https://deepgram.com
  - id: voice-agent
    name: Voice Agent API
    category: AI
    description: STT+LLM+TTS pipeline
    sla_eligible: false
    source_url: https://deepgram.com
  - id: dedicated
    name: Deepgram Dedicated
    category: AI
    description: Single-tenant / on-prem deployment
    sla_eligible: true
    source_url: https://deepgram.com/dedicated
support:
  channels:
    - email
    - slack
  designated_contact: team
  professional_services: true
  has_24x7: false
  note: Email + Slack for Enterprise (no phone); 99.9% uptime SLA, response negotiated per contract. Implementation, custom model training, on-prem/private-cloud (billed separately). Email + Slack for Enterprise (no phone); 99.9% uptime SLA, response negotiated per contract. Implementation, custom model training, on-prem/private-cloud (billed separately).
  source_url: https://deepgram.com/pricing
---

Deepgram is an AI & Machine Learning provider. See the SLA/terms at [https://deepgram.com/dedicated](https://deepgram.com/dedicated).
