---
title: Marketo
slug: marketo
vendor_name: Marketo
legal_entity: Marketo
category: CRM & Marketing
website: https://www.marketo.com
scope: global
sla_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.9
max_credit_percent: 25
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99.9
      credit_percent: 5
    - uptime_below: 99.5
      credit_percent: 10
    - uptime_below: 95.0
      credit_percent: 15
    - uptime_below: 90.0
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: downtime_date
      description: Notify Adobe in writing within 30 days of the Downtime
  submission_method: Customer's CSM or Adobe Customer Care
  submission_url: https://status.adobe.com/
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Scheduled maintenance with at least three business days advance notice
  - Acts or omissions of Customer, its agents, employees, or contractors
  - Customer's failure to adhere to Adobe's documented recommendations
  - Spikes in demand for system resources not agreed in writing
  - Third-party services or integrations not provided or controlled by Adobe
  - Force majeure events and government orders
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
  - id: dynamic-chat
    name: Dynamic Chat
    category: Chat
    description: Conversational marketing
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
  - id: engage
    name: Marketo Engage
    category: Marketing Automation
    description: B2B marketing automation
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
  - id: measure
    name: Marketo Measure
    category: Attribution
    description: Marketing attribution
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
  - id: sales-connect
    name: Sales Connect
    category: Sales Engagement
    description: Sales engagement platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
support:
  tiers:
    - "Silver"
    - "Gold"
    - "Platinum"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://helpx.adobe.com/legal/product-descriptions/adobe-marketo-engage---product-description.html"
  note: "Uses Adobe Enterprise Support tiers; Platinum adds a named TAM. Response times are targets."
---

Marketo is a Marketing & Analytics provider. Marketo Engage is a Covered Service under the Adobe Unified Service Level Agreement (Adobe On-demand Services and Managed Services). See the official SLA at [Adobe Unified SLA (effective 12 October 2025)](https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf).

<!-- Add human-readable notes about Marketo's SLA nuances here. -->
<!-- Marketo Engage is listed as a Covered Service (section 1.3.15) in Adobe's Unified SLA. Minimum Uptime Percentage is 99.9%. Service credits are tiered (5/10/15/25%) capped at a cumulative 25% of Monthly Fees, claimed by written notice to the CSM or Adobe Customer Care within 30 days of Downtime. Other listed services (Dynamic Chat, Marketo Measure, Sales Connect) are not separately named as Covered Services in the Unified SLA. -->
