---
title: Coralogix
slug: coralogix
vendor_name: Coralogix
legal_entity: Coralogix Ltd.
category: Monitoring & Observability
website: https://coralogix.com
scope: global
sla_url: https://coralogix.com/terms-conditions/
last_verified: '2026-09-09'
last_updated: '2026-09-09'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: standard
needs_review: true
credit_note: 'Verified against Coralogix Terms & Conditions (coralogix.com/terms-conditions/). Uptime verbatim: "The Services shall be available twenty-four (24) hours a day, seven (7) days a week, with a Monthly Uptime Percentage of at least 99.9%, all in accordance with and subject to the Coralogix Uptime SLA Policy." Credit mechanism verbatim from indexed EULA content: "in the event Coralogix does not meet a Service Level Standard, the service provider shall owe to subscribers any applicable Performance Credit, as liquidated damages and not as a penalty." The T&C delegates all credit tier detail (percentages per threshold, claim deadline, cap) to a separate "Coralogix Uptime SLA Policy" document at coralogix.com/coralogix-uptime-sla — that policy was inaccessible for verbatim review (HTTP 403). Specific tier %s, claim deadline, and credit cap not captured — needs_review: true. Legal entity: Coralogix Ltd. (Israel).'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Contact support
  submission_url: https://coralogix.com/contact/
  required_evidence:
    - Dates and times of service unavailability
    - Affected account details
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
support_tiers:
  - name: Standard
    price_model: Subscription
    sla_eligible: true
    availability: Business hours
    channels:
      - Ticket
      - Email
  - name: Enterprise
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Ticket
      - Email
      - Dedicated support
services:
  - id: coralogix-platform
    name: Coralogix Observability Platform
    category: Monitoring & Observability
    description: Log analytics, metrics, and tracing with AI-powered anomaly detection
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://coralogix.com/terms-conditions/
---

Coralogix is a log analytics and observability platform based in Israel. The Terms & Conditions commit to 99.9% monthly uptime, delegating credit mechanics to a separate Uptime SLA Policy document. Credit tier percentages and claim deadline require direct review of the Uptime SLA Policy page (coralogix.com/coralogix-uptime-sla).
