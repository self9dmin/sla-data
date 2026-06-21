---
title: Salesforce
slug: salesforce
vendor_name: Salesforce
legal_entity: Salesforce, Inc.
category: CRM & Marketing
website: https://www.salesforce.com
scope: global
sla_url: https://www.salesforce.com/company/legal/agreements/
last_verified: '2026-06-20'
last_updated: '2026-06-19'
needs_review: true
review_note: '2026-06-20 browser check: salesforce.com exposes only a legal index, no public uptime SLA with service credits; unverified numeric values removed.'
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_billing_month
      description: Submit claim within 30 days of billing cycle end
  submission_method: Salesforce Support
  submission_url: https://help.salesforce.com
  required_evidence:
    - Organization ID
    - Affected services
    - Incident timestamps
    - User impact description
  review_timeline: 15 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer configurations
  - Sandbox environments
  - Beta/Preview features
  - Third-party integrations
support_tiers:
  - name: Standard
    slug: standard
    price_model: Included
    sla_eligible: true
    claim_assistance: false
    availability: Business hours
    channels:
      - Web
    response_times:
      general: < 2 business days
  - name: Premier
    slug: premier
    price_model: 30% of license fees
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Web
      - Phone
    response_times:
      critical: < 1 hour
      high: < 4 hours
    features:
      premierSupport: true
  - name: Signature
    slug: signature
    price_model: Custom
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Web
      - Phone
      - TAM
    response_times:
      critical: < 15 minutes
      high: < 2 hours
    features:
      tam: Dedicated
      proactiveMonitoring: true
services:
  - id: sales-cloud
    name: Sales Cloud
    category: CRM
    description: Sales automation and CRM
    sla_eligible: true
    source_url: https://www.salesforce.com/company/legal/agreements/
  - id: service-cloud
    name: Service Cloud
    category: Customer Service
    description: Customer service platform
    sla_eligible: true
    source_url: https://www.salesforce.com/company/legal/agreements/
  - id: marketing-cloud
    name: Marketing Cloud
    category: Marketing
    description: Digital marketing platform
    sla_eligible: true
    source_url: https://www.salesforce.com/company/legal/agreements/
  - id: commerce-cloud
    name: Commerce Cloud
    category: E-commerce
    description: E-commerce platform
    sla_eligible: true
    source_url: https://www.salesforce.com/company/legal/agreements/
  - id: platform
    name: Salesforce Platform
    category: PaaS
    description: Application development platform
    sla_eligible: true
    source_url: https://www.salesforce.com/company/legal/agreements/
  - id: heroku
    name: Heroku
    category: PaaS
    description: Cloud application platform
    sla_eligible: true
    source_url: https://www.heroku.com/policy/agreements/
---

Salesforce is a CRM & Marketing provider. See the official SLA at [https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/).

<!-- Add human-readable notes about Salesforce's SLA nuances here. -->
