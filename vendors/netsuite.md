---
title: NetSuite
slug: netsuite
vendor_name: NetSuite
legal_entity: NetSuite
category: Enterprise & Operations
website: https://www.netsuite.com
scope: global
sla_url: https://www.oracle.com/a/ocom/docs/corporate/netsuite-service-level-commitment-v04012021.pdf
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.7
max_credit_percent: 25
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99.7
      credit_percent: 10
    - uptime_below: 99.5
      credit_percent: 15
    - uptime_below: 99
      credit_percent: 25
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_month
      description: Request within 30 calendar days from the end of the month in which Service Availability was not met
  submission_method: SuiteAnswers (article ID 97409 "How to submit an SLC Claim")
  submission_url: https://www.oracle.com/a/ocom/docs/corporate/netsuite-service-level-commitment-v04012021.pdf
  required_evidence:
    - Details of the claim as reasonably requested by Oracle
  credit_application: Service credit based on the monthly fee for the use of the Service
global_exclusions:
  - Scheduled maintenance
  - Unavailability from suspension or termination of the Service
  - Issues caused by Customer's or third-party equipment, software, services, or technology outside Oracle's direct control
  - Non-production and test accounts (Sandbox, Release Preview, Beta, Education, Demo, Developer, debugger)
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
  - id: crm
    name: NetSuite CRM
    category: CRM
    description: Customer relationship management
    uptime_commitment: 99.7
    sla_eligible: true
    source_url: https://www.oracle.com/a/ocom/docs/corporate/netsuite-service-level-commitment-v04012021.pdf
  - id: erp
    name: NetSuite ERP
    category: ERP
    description: Enterprise resource planning
    uptime_commitment: 99.7
    sla_eligible: true
    source_url: https://www.oracle.com/a/ocom/docs/corporate/netsuite-service-level-commitment-v04012021.pdf
  - id: financials
    name: NetSuite Financials
    category: Accounting
    description: Financial management
    uptime_commitment: 99.7
    sla_eligible: true
    source_url: https://www.oracle.com/a/ocom/docs/corporate/netsuite-service-level-commitment-v04012021.pdf
  - id: commerce
    name: NetSuite SuiteCommerce
    category: E-commerce
    description: E-commerce platform
    uptime_commitment: 99.7
    sla_eligible: true
    source_url: https://www.oracle.com/a/ocom/docs/corporate/netsuite-service-level-commitment-v04012021.pdf
  - id: wms
    name: NetSuite WMS
    category: Warehouse Management
    description: Warehouse management
    uptime_commitment: 99.7
    sla_eligible: true
    source_url: https://www.oracle.com/a/ocom/docs/corporate/netsuite-service-level-commitment-v04012021.pdf
support:
  tiers:
    - "Basic"
    - "Premium"
    - "ACS Advise"
    - "ACS Monitor"
    - "ACS Optimize"
    - "ACS Architect"
    - "ACS Platform"
  has_24x7: true
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.netsuite.com/portal/services/support-services/advanced-customer-support.shtml"
  note: "Premium adds 24/7 for Sev1/2; ACS tiers add CSM, reviews, and optimization services."
---

NetSuite is a Finance & Payments provider. See the official Service Level Commitment at [https://www.oracle.com/a/ocom/docs/corporate/netsuite-service-level-commitment-v04012021.pdf](https://www.oracle.com/a/ocom/docs/corporate/netsuite-service-level-commitment-v04012021.pdf).

<!-- Add human-readable notes about NetSuite's SLA nuances here. -->
