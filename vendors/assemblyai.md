---
title: AssemblyAI
slug: assemblyai
vendor_name: AssemblyAI
legal_entity: AssemblyAI Inc.
category: AI & Machine Learning
website: https://www.assemblyai.com
scope: global
sla_url: https://www.assemblyai.com/legal/service-level-agreement
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99.9
max_credit_percent: 10
claim_deadline_days: 10
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_note: 'AssemblyAI publishes a 99.9% monthly uptime SLA for customers with an Order Form: a 1% service credit per non-prorated hour of downtime, up to a maximum of 10 credits (10%) per month, as the sole and exclusive remedy. Credits must be requested within 10 days of the month end. Self-serve usage without an Order Form is "as is".'
credit_policy:
  calculation_type: incremental
  remedy_type: credit
  max_credit_percent: 10
claim_process:
  deadlines:
    - type: submission
      days: 10
      business_days: false
      anchor_point: incident_date
      description: Request credits within 10 days after the affected month
  submission_method: Email
  submission_url: https://www.assemblyai.com/contact
  required_evidence:
    - Account/Project ID
    - Affected service
    - Incident timestamps
    - Impact evidence
  review_timeline: 30 days
  credit_application: Applied to future invoice
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
  - id: stt
    name: Universal Speech-to-Text
    category: AI
    description: Async transcription (Universal-3)
    sla_eligible: true
    source_url: https://www.assemblyai.com
  - id: streaming
    name: Universal-Streaming
    category: AI
    description: Real-time STT
    sla_eligible: true
    source_url: https://www.assemblyai.com
  - id: audio-intel
    name: Audio Intelligence
    category: AI
    description: Diarization, translation, PII redaction
    sla_eligible: true
    source_url: https://www.assemblyai.com
  - id: voice-agent
    name: Voice Agent API
    category: AI
    description: LLM gateway + streaming
    sla_eligible: true
    source_url: https://www.assemblyai.com
support:
  channels:
    - email
    - chat
    - phone
    - slack
  designated_contact: none
  professional_services: false
  has_24x7: true
  fastest_response: 60 min (HIGH severity)
  note: Severity-based; tickets 24/7 and HIGH worked 24/7 (MEDIUM/LOW business hours). Phone is vendor-listed; Slack Connect for select customers. Severity-based; tickets 24/7 and HIGH worked 24/7 (MEDIUM/LOW business hours). Phone is vendor-listed; Slack Connect for select customers.
  source_url: https://www.assemblyai.com/docs/faq/what-are-your-support-hours-and-response-time-slas
---

AssemblyAI is an AI & Machine Learning provider. See the SLA/terms at [https://www.assemblyai.com/legal/service-level-agreement](https://www.assemblyai.com/legal/service-level-agreement).
