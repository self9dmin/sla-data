---
title: NVIDIA
slug: nvidia
vendor_name: NVIDIA
legal_entity: NVIDIA Corporation
category: AI & Machine Learning
website: https://www.nvidia.com
scope: global
sla_url: https://www.nvidia.com/en-us/agreements/service-level-agreement/nvidia-cloud-services-service-level-agreement/
last_verified: '2026-06-23'
last_updated: '2026-06-23'
uptime_commitment: 99
max_credit_percent: 25
claim_deadline_days: 60
has_automatic_credits: false
min_plan_for_sla: enterprise
credit_note: 'Paid NVIDIA Cloud Services carry a public 99% monthly Service Availability SLA with service credits (Omniverse: 10% for 95–99%, 25% below 95%; DGX Cloud credits are time-based service extensions). Credits are claim-based, filed within 2 months. The free build.nvidia.com / NIM API trial is separate and "as is" with no SLA.'
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99
      credit_percent: 10
    - uptime_below: 95
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 60
      business_days: false
      anchor_point: incident_date
      description: File a claim within 2 months of the incident start
  submission_method: Support Ticket
  submission_url: https://www.nvidia.com/en-us/support/
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
  - id: nim
    name: NVIDIA NIM
    category: AI
    description: Containerized inference microservices
    sla_eligible: false
    source_url: https://build.nvidia.com
  - id: api-catalog
    name: API Catalog
    category: AI
    description: Hosted model endpoints (build.nvidia.com)
    sla_eligible: false
    source_url: https://build.nvidia.com
  - id: dgx-cloud
    name: DGX Cloud
    category: AI
    description: Managed GPU cloud (SLA-covered)
    sla_eligible: true
    source_url: https://www.nvidia.com/en-us/data-center/dgx-cloud/
  - id: ai-enterprise
    name: NVIDIA AI Enterprise
    category: AI
    description: Production AI software suite
    sla_eligible: true
    source_url: https://www.nvidia.com/en-us/data-center/products/ai-enterprise/
support:
  channels:
    - portal
    - phone
    - email
  designated_contact: tam
  professional_services: true
  has_24x7: true
  fastest_response: 1 hour (Sev-1, Business Critical)
  note: 'NVIDIA Enterprise Support (AI Enterprise): portal/web 24x7 both tiers; 24x7 phone only on Business Critical (Standard fastest 4 bh). TAM is a paid add-on. Professional & consulting services. NVIDIA Enterprise Support (AI Enterprise): portal/web 24x7 both tiers; 24x7 phone only on Business Critical (Standard fastest 4 bh). TAM is a paid add-on. Professional & consulting services.'
  source_url: https://www.nvidia.com/en-us/support/enterprise/
---

NVIDIA is an AI & Machine Learning provider. See the SLA/terms at [https://www.nvidia.com/en-us/agreements/service-level-agreement/nvidia-cloud-services-service-level-agreement/](https://www.nvidia.com/en-us/agreements/service-level-agreement/nvidia-cloud-services-service-level-agreement/).
