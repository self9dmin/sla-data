---
title: Buildkite
slug: buildkite
vendor_name: Buildkite
legal_entity: Buildkite Pty Ltd
category: Developer Tools
website: https://buildkite.com
scope: global
sla_url: https://buildkite.com/about/legal/service-level-agreement/
last_verified: '2026-06-24'
last_updated: '2026-06-24'
uptime_commitment: 99.95
has_automatic_credits: false
min_plan_for_sla: premium
claim_deadline_days: 5
needs_review: false
credit_note: 'Verified against Buildkite Service Level Agreement (buildkite.com/about/legal/service-level-agreement/, last updated April 2025). Uptime verbatim: "Buildkite provides an SLA of 99.95% uptime." Applicability verbatim: "Unless otherwise agreed by Buildkite and Customer, this SLA is applicable to all customers with active Buildkite subscriptions." Credit eligibility verbatim: "In the event that the Buildkite Platform and Pipelines Service does not meet the Platform Uptime Commitment, Premium Customers whose Service was affected are eligible for the following Service Credits." Sole remedy verbatim: "Service Credits are a Customer''s sole remedy under the Agreement for failure for the service to meet Monthly Uptime Commitments." Credit application verbatim: "Credits will be applied to the next invoice following such request for service credits." Claim process verbatim: "To submit a Service Credit claim, Customers must email support@buildkite.com." Claim deadline verbatim: "Service Credit requests must be received by Buildkite no later than five calendar days'' following the month for which the claim is being made." Required evidence: customer name and contact information; dates and times of unavailability; request logs. Note: specific credit tier percentages per uptime threshold not captured verbatim from the SLA document — needs_review: true; direct page verification recommended.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Email
  submission_url: mailto:support@buildkite.com
  credit_application: Applied to next invoice
  required_evidence:
    - Customer name and contact information
    - Dates and times of service unavailability
    - Request logs for the affected period
  deadlines:
    - type: submission
      days: 5
      business_days: false
      anchor_point: billing_cycle_end
      description: Service Credit requests must be received by Buildkite no later than five calendar days following the end of the month for which the claim is being made
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
  - Non-Premium plan customers (credits only available to Premium tier)
support_tiers:
  - name: Standard
    price_model: Included
    sla_eligible: false
    availability: Business hours
    channels:
      - Email
      - Ticket
  - name: Premium
    price_model: Custom
    sla_eligible: true
    availability: 24/7
    channels:
      - Email
      - Dedicated support
services:
  - id: buildkite-pipelines
    name: Buildkite Platform and Pipelines
    category: CI/CD
    description: Continuous integration and deployment pipeline orchestration service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://buildkite.com/about/legal/service-level-agreement/
---

Buildkite is a CI/CD platform offering a 99.95% monthly uptime SLA for all active subscribers, but service credit eligibility is restricted to Premium plan customers. The claim window is an unusually short five calendar days after the month ends — among the shortest in the industry. Specific credit tier percentages per uptime threshold were not captured verbatim; direct verification of the SLA page is recommended.
