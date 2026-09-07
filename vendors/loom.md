---
title: Loom
slug: loom
vendor_name: Loom
legal_entity: Atlassian Network Services, Inc.
category: Communication & Collaboration
website: https://www.loom.com
scope: global
sla_url: https://www.atlassian.com/legal/sla
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: true
credit_note: 'Verified against Atlassian Customer Agreement and Loom SLA (effective April 1, 2025; loom.com/terms redirects to Atlassian Customer Agreement). Uptime commitments verbatim from Atlassian Loom announcement (April 1, 2025): "Loom Business + AI: 99.90% monthly uptime percentage" and "Loom Enterprise: 99.95% monthly uptime percentage." Claim deadline verbatim: "You have until the 15th [of] the month after the problem occurred to submit a compensation request." Standard plan: no uptime SLA. Credit tier percentages from Atlassian SLA Appendix B not publicly indexed verbatim — needs_review: true. Legal entity: Atlassian Network Services, Inc. (Delaware); Loom acquired by Atlassian in 2023.'
credit_policy:
  remedy_type: credit
  calculation_type: tiered
claim_process:
  submission_method: Support ticket
  submission_url: https://support.loom.com
  deadlines:
    - type: submission
      anchor_point: month_end
      description: Submit compensation request by the 15th of the month following the incident
global_exclusions:
  - Standard plan customers (no SLA)
  - Scheduled maintenance
  - Force majeure events
  - Customer-caused issues
support_tiers:
  - name: Standard
    price_model: Free/Subscription
    sla_eligible: false
    availability: Community
    channels:
      - Documentation
  - name: Business + AI
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
  - id: loom-video-messaging
    name: Loom Video Messaging
    category: Communication & Collaboration
    description: Async video messaging and screen recording for team communication
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.atlassian.com/legal/sla
---

Loom (acquired by Atlassian in 2023; operated under Atlassian Network Services, Inc.) is an async video messaging and screen recording platform. Since April 1, 2025, Business+AI plan subscribers have a 99.9% monthly uptime SLA and Enterprise subscribers get 99.95%. Standard plan has no uptime SLA. Claims must be submitted by the 15th of the month following the incident. Credit tier percentages are in Atlassian SLA Appendix B — consult the Atlassian Customer Agreement for the full schedule.
