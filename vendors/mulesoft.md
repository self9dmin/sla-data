---
title: MuleSoft
slug: mulesoft
vendor_name: MuleSoft
legal_entity: MuleSoft
category: Developer Tools
website: https://www.mulesoft.com
scope: global
sla_url: https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/Agreements/mulesoft-cloud-offerings-SLA-forSalesforce-uMSA.pdf
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.95
max_credit_percent: 15
claim_deadline_days: 10
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 15
  credit_tiers:
    - uptime_below: 99.95
      credit_percent: 5
    - uptime_below: 99.5
      credit_percent: 10
    - uptime_below: 98
      credit_percent: 15
claim_process:
  deadlines:
    - type: submission
      days: 10
      business_days: false
      anchor_point: end_of_month
      description: Customer must inform SFDC within ten days of the end of the calendar month in which the Cloud Offerings were Unavailable
  submission_method: Notify Salesforce (SFDC) support
  submission_url: https://status.salesforce.com/products/Mulesoft
  required_evidence:
    - Notification of unavailability for the affected calendar month
  review_timeline: Not specified
  credit_application: Service credit for future subscriptions
global_exclusions:
  - Force majeure events
  - Causes contributed directly by Customer, its Affiliates or vendors
  - Software or hardware not provided by SFDC
  - Regularly scheduled maintenance
  - CloudHub application not deployed to two or more CloudHub Workers
  - CloudHub application not deployed in a production environment
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
  - id: exchange
    name: Anypoint Exchange
    category: API Marketplace
    description: API and asset marketplace
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/Agreements/mulesoft-cloud-offerings-SLA-forSalesforce-uMSA.pdf
  - id: anypoint
    name: Anypoint Platform
    category: iPaaS
    description: Integration platform
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/Agreements/mulesoft-cloud-offerings-SLA-forSalesforce-uMSA.pdf
  - id: api-manager
    name: API Manager
    category: API Management
    description: API management
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/Agreements/mulesoft-cloud-offerings-SLA-forSalesforce-uMSA.pdf
  - id: cloudhub
    name: CloudHub
    category: Runtime
    description: Cloud integration runtime
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/Agreements/mulesoft-cloud-offerings-SLA-forSalesforce-uMSA.pdf
  - id: composer
    name: MuleSoft Composer
    category: No-Code Integration
    description: No-code integration
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/Agreements/mulesoft-cloud-offerings-SLA-forSalesforce-uMSA.pdf
support:
  tiers:
    - "Standard"
    - "Premier"
    - "Signature"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://www.salesforce.com/services/success-plans/signature/"
  note: "MuleSoft uses Salesforce Success Plans; response times are targets, not credit-backed."
---

MuleSoft is a Integration & Automation provider. See the official MuleSoft Cloud Offerings SLA at [https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/Agreements/mulesoft-cloud-offerings-SLA-forSalesforce-uMSA.pdf](https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/Agreements/mulesoft-cloud-offerings-SLA-forSalesforce-uMSA.pdf).

<!-- Add human-readable notes about MuleSoft's SLA nuances here. -->
