---
title: Adobe
slug: adobe
vendor_name: Adobe
legal_entity: Adobe
category: Content & Media
website: https://www.adobe.com
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
    - uptime_below: 95
      credit_percent: 15
    - uptime_below: 90
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: downtime_date
      description: Notify Adobe in writing within 30 days of the Downtime
  submission_method: Notify Adobe in writing through Customer's CSM or Adobe Customer Care
  submission_url: https://www.adobe.com/legal/service-commitments.html
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
  - Customer failure to adhere to Adobe's documented recommendations or minimum system requirements
  - Unagreed spikes in demand for system resources
  - Software, hardware, or third-party services or integrations not provided or controlled by Adobe
  - Excluded Services and product add-ons not specifically listed under a Covered Service
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
  - id: analytics
    name: Adobe Analytics
    category: Analytics
    description: Web and marketing analytics
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
  - id: campaign
    name: Adobe Campaign
    category: Marketing Automation
    description: Cross-channel campaign management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
  - id: commerce
    name: Adobe Commerce
    category: E-commerce
    description: E-commerce platform (Magento)
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
  - id: experience-manager
    name: Adobe Experience Manager
    category: CMS
    description: Content management system
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
  - id: marketo
    name: Adobe Marketo Engage
    category: Marketing Automation
    description: B2B marketing automation
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
  - id: target
    name: Adobe Target
    category: Personalization
    description: A/B testing and personalization
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
sla_tiers:
  - name: 'AEM as a Cloud Service 99.99% SLA'
    requirement: 'AEM as a Cloud Service with the Additional Publish Region and 99.99% SLA add-ons'
    uptime_commitment: 99.99
    max_credit_percent: 25
    source_url: 'https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/unified-sla-actionabilityaddendum2025oct12.pdf'
support:
  tiers:
    - "Standard"
    - "Business"
    - "Enterprise"
    - "Elite"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://experienceleague.adobe.com/docs/support-resources/data-sheets/data-sheets/enterprise.html"
  note: "Elite adds a TAM and Named Support Engineer with a 15-min target; service-level targets are not credit-backed."
---

Adobe is a Content & Media provider. The official Unified SLA (effective 12 October 2025) covers Adobe On-demand and Managed Services including Analytics, Campaign, Commerce, Experience Manager, Marketo, and Target, with a 99.9% Minimum Uptime Percentage and tiered service credits (5/10/15/25% of Monthly Fees), capped at a 25% cumulative monthly credit. Customers must notify Adobe in writing within 30 days of the Downtime. See [Adobe Service Commitments](https://www.adobe.com/legal/service-commitments.html) and the [Unified SLA PDF](https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf).

<!-- Add human-readable notes about Adobe's SLA nuances here. -->
