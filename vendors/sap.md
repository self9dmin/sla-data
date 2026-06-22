---
title: SAP
slug: sap
vendor_name: SAP
legal_entity: SAP
category: Enterprise & Operations
website: https://www.sap.com
scope: global
sla_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: true
uptime_commitment: 99.7
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: linear
  remedy_type: credit
  max_credit_percent: 100
  credit_per_percent_below: 2
  credit_note: >-
    "Credit" means 2% of the Monthly Subscription Fees for each 1% below the
    System Availability SLA, not to exceed 100% of the fees paid (v8-2023).
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: true
      anchor_point: end_of_month
      description: >-
        Claim via documented support case within 30 business days after the
        end of the relevant Month in which SAP missed the System Availability SLA
  submission_method: Documented support case (SAP ONE Support)
  submission_url: https://support.sap.com
  required_evidence:
    - Documented support case
  review_timeline: Not specified in SLA
  credit_application: Applied to a future invoice for the affected Cloud Service
global_exclusions:
  - Maintenance Window (scheduled weekly maintenance)
  - Major Upgrade Window notified at least 5 business days in advance
  - Factors outside SAP's reasonable control (unforeseeable events)
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
  - id: analytics-cloud
    name: SAP Analytics Cloud
    category: BI
    description: Business analytics
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
  - id: ariba
    name: SAP Ariba
    category: Procurement
    description: Procurement network
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
  - id: ariba-contracts
    name: SAP Ariba Contracts
    category: Contract Management
    description: Contract lifecycle management
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
  - id: ariba-procurement
    name: SAP Ariba Procurement
    category: Procurement
    description: Procurement operations
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
  - id: ariba-sourcing
    name: SAP Ariba Sourcing
    category: Sourcing
    description: Strategic sourcing
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
  - id: ariba-supplier-management
    name: SAP Ariba Supplier Management
    category: Supplier Management
    description: Supplier information and risk
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
  - id: btp
    name: SAP BTP
    category: PaaS
    description: Business technology platform
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
  - id: ariba-network
    name: SAP Business Network
    category: B2B Network
    description: Business-to-business collaboration
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
  - id: concur
    name: SAP Concur
    category: Expense Management
    description: Travel and expense
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
  - id: s4hana
    name: SAP S/4HANA Cloud
    category: ERP
    description: Intelligent ERP cloud
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
  - id: successfactors
    name: SAP SuccessFactors
    category: HCM
    description: Human capital management
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf
sla_tiers:
  - name: 'BTP High Availability'
    requirement: 'Paid High Availability option (HANA Cloud, ASE, etc.)'
    uptime_commitment: 99.95
    source_url: 'https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/sap-business-technology-platform-supplement-english-v11-2025.pdf'
support:
  tiers:
    - "Standard"
    - "Enterprise Support"
    - "Preferred Success"
    - "ActiveAttention"
    - "MaxAttention"
  has_24x7: true
  fastest_response: "1 hour"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://support.sap.com/en/offerings-programs.html"
  note: "Enterprise Support priced as a percentage of license; premium engagements add designated SAP contacts. Targets, not credit-backed."
---

SAP is a Enterprise Software provider. See the official SLA at [Service Level Agreement for SAP Cloud Services (v8-2023)](https://assets.cdn.sap.com/agreements/product-use-and-support-terms/cls/en/service-level-agreement-for-sap-cloud-services-english-v8-2023.pdf).

The standard System Availability SLA is 99.7% per month. Credits equal 2% of Monthly Subscription Fees for each 1% below the SLA, up to 100% of fees. Claims must be made via a documented support case within 30 business days after the end of the affected month. SAP BTP and several flagship cloud services carry a 99.9% SLA per the SAP Business Technology Platform Supplement (v11-2025).

<!-- Add human-readable notes about SAP's SLA nuances here. -->
