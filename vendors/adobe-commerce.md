---
title: Adobe Commerce
slug: adobe-commerce
vendor_name: Adobe Commerce
legal_entity: Adobe Inc.
category: E-commerce
website: https://business.adobe.com/products/magento/magento-commerce.html
scope: global
sla_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.99
max_credit_percent: 25
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: enterprise
needs_review: false
credit_note: 'Verified against Adobe Commerce SLA (effective October 12, 2025). Covered services verbatim: "Adobe Commerce as a Cloud Service, Adobe Commerce Optimizer, Adobe Commerce on Cloud, Adobe Commerce on Managed Services, Commerce Business Intelligence, Order Management for Adobe Commerce." Adobe Commerce on Cloud (99.99% SLA) credit tiers verbatim: "≥ 99.9% but < 99.99%: 10% of Monthly Fees"; "≥ 99.0% but < 99.9%: 15% of Monthly Fees"; "< 99.0%: 25% of Monthly Fees." Adobe Commerce on Managed Services (99.9% SLA) credit tiers verbatim: "≥ 99.0% but < 99.9%: 10% of Monthly Fees"; "≥ 98.0% but < 99.0%: 15% of Monthly Fees"; "< 98.0%: 25% of Monthly Fees." Cap verbatim: "Failure to achieve the Minimum Uptime Percentage for the Covered Service will result in the Service Credit % applicable to each Covered Service, subject to a maximum cumulative Service Credit % of 25% of total Monthly Fees for the Covered Service." Claim verbatim: "If the uptime for a Covered Service is lower than the Minimum Uptime Percentage, and Customer notifies Adobe in writing about such Downtime within 30 days of the Downtime, Adobe shall provide Customer with a service credit." Termination right verbatim: "If Adobe fails to maintain an Uptime Percentage of ≥ 90% for any individual Covered Service for any 3 months in a 6-month period (''Minimum Level of Service''), Customer may terminate."'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
  max_credit_percent: 25
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 10
    - uptime_below: 99.9
      credit_percent: 15
    - uptime_below: 99
      credit_percent: 25
claim_process:
  submission_method: Written notice to Adobe
  credit_application: Applied as service credit against future fees
  required_evidence:
    - Written notification to Adobe identifying the downtime
    - Dates and times of the downtime
    - Affected service and environment
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: incident
      description: Customer must notify Adobe in writing within 30 days of the downtime event
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Non-Production environments
  - Beta or trial services
support_tiers:
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Email
      - Phone
      - Dedicated support
services:
  - id: adobe-commerce-cloud
    name: Adobe Commerce on Cloud
    category: E-commerce
    description: Adobe-hosted production environment for Adobe Commerce (formerly Magento Commerce Cloud)
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
  - id: adobe-commerce-cloud-service
    name: Adobe Commerce as a Cloud Service
    category: E-commerce
    description: Next-generation cloud-native Adobe Commerce SaaS platform
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
  - id: adobe-commerce-managed
    name: Adobe Commerce on Managed Services
    category: E-commerce
    description: Adobe-managed hosting for Adobe Commerce (legacy Magento Enterprise Cloud Edition)
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.adobe.com/cc-shared/assets/pdf/legal/terms/enterprise/pdfs/sla-adobeon-demand-managedservices-2025oct12.pdf
---

Adobe Commerce (formerly Magento) offers enterprise SLAs with a tiered credit structure (10/15/25%, capped at 25% of monthly fees). Adobe Commerce on Cloud and as a Cloud Service carry a 99.99% monthly uptime commitment; Adobe Commerce on Managed Services carries 99.9%. Both product lines share the same credit tier logic but with different uptime thresholds. Claims must be filed in writing within 30 days of the downtime event. A right to terminate arises if uptime falls below 90% for 3 months in any 6-month period.
