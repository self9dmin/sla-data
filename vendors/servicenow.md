---
title: ServiceNow
slug: servicenow
vendor_name: ServiceNow
legal_entity: ServiceNow
category: Enterprise & Operations
website: https://www.servicenow.com
scope: global
sla_url: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/subscription-service-guide-upgrade.pdf
last_verified: '2026-06-21'
last_updated: '2026-06-21'
needs_review: true
  Guide PDF, which resolves and states the 99.8% monthly Availability SLA for production
  instances plus the credit or term-extension remedy and 30-day written request window.
  The prior sla_url and the per-service source_url both pointed at pages that now 404
  (the legal/sla PDF redirects to page-not-found, and the trust/compliance SLA HTML
  is gone), so all links were repointed at the Subscription Service Guide. The 99.9%
  figure previously listed for the Regulated Markets (FedRAMP) offering is not stated
  in this public document, so it has been removed pending a confirmable official
  source. The base 99.8% commitment and credit terms are confirmed public.'
uptime_commitment: 99.8
max_credit_percent: 100
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: flat
  remedy_type: credit
  max_credit_percent: 100
claim_process:
  deadlines:
    - type: claim_submission
      days: 30
      anchor_point: end of the month in which the Availability SLA was not met
      description: Customer must request all service credits or extensions in writing
        to ServiceNow within 30 days of the end of the month in which the Availability
        SLA was not met.
  submission_method: Written request to ServiceNow
  required_evidence:
    - Support requests relating to the period the production instances were not Available
  credit_application: Applied to next invoice for subscription fees (ServiceNow may
    delay issuing credits until amounts reach $1,000 USD)
global_exclusions:
  - Maintenance Time of up to two hours per month
  - Force Majeure Events
  - Modifications of the Subscription Service by anyone other than ServiceNow
  - General Internet outages
  - Failure of customer infrastructure or connectivity (including VPN)
  - Computer and telecommunications failures and delays
  - Network intrusions, denial-of-service, or other criminal attacks
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
  - id: impact
    name: ServiceNow Impact (Digital Production)
    category: ITSM
    description: Enhanced support wrapper - same SLA
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/subscription-service-guide-upgrade.pdf
  - id: production
    name: ServiceNow Production Instance
    category: ITSM
    description: Production subscription service
    uptime_commitment: 99.8
    sla_eligible: true
    source_url: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/subscription-service-guide-upgrade.pdf
  - id: regulated
    name: ServiceNow Regulated Markets (FedRAMP)
    category: ITSM
    description: GovCommunity and FedRAMP offerings, availability commitment not stated in the public Subscription Service Guide
    sla_eligible: true
    source_url: https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/subscription-service-guide-upgrade.pdf
support:
  tiers:
    - "Now Support (standard)"
    - "Impact Guided"
    - "Impact Total"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: team
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: custom
  source_url: "https://www.servicenow.com/impact.html"
  note: "ServiceNow Impact (paid, roughly percent-of-ACV) adds faster response targets and Accelerator engagements; Impact Total adds a named team (Customer Success Executive, Platform Architect, CSM, and SAM). Uptime IS credit-backed (99.8 percent); support response times are targets."
---

ServiceNow is a Enterprise Software provider. See the official availability terms in ServiceNow's Subscription Service Guide at [https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/subscription-service-guide-upgrade.pdf](https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/legal/subscription-service-guide-upgrade.pdf).

ServiceNow's Availability SLA commits that production instances of the Subscription Service will be Available at least 99.8% of the time during a calendar month, excluding Excused Downtime. If availability falls below this, the customer's exclusive remedy is to request (in writing within 30 days of month-end) either a Subscription Term extension or a service credit equal to the dollar value of the minutes the service was not Available, applied to the next invoice. Total monthly credits cannot exceed that month's subscription fee for the affected service and have no cash value; ServiceNow may delay issuing credits until they reach $1,000 USD.
