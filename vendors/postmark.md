---
title: Postmark
slug: postmark
vendor_name: Postmark
legal_entity: ActiveCampaign, LLC
category: Developer Tools
website: https://postmarkapp.com
scope: global
sla_url: https://www.activecampaign.com/legal/service-level-agreement
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.5
has_automatic_credits: false
min_plan_for_sla: enterprise
needs_review: true
credit_note: 'Reviewed ActiveCampaign Service Level Agreement (activecampaign.com/legal/service-level-agreement, last updated January 30, 2025). Postmark is owned by ActiveCampaign; the ActiveCampaign SLA is the governing document post-acquisition. Uptime verbatim: "ActiveCampaign will use commercially reasonable efforts to make the Services available at least 99.5% of the time in a Reporting Period (''Service Availability Commitment''), excluding for Maintenance Time and Excluded Time." [VERBATIM] Credit mechanism verbatim: credits applied "on a dollar-for-dollar basis to reduce the amount payable for the following Reporting Period." [VERBATIM] Claim deadline verbatim: must make credit requests "within ten business days after the end of the relevant Reporting Period." [VERBATIM] Sole remedy verbatim: "This Service Level Agreement sets forth Client''s sole and exclusive remedy for ActiveCampaign''s failure to meet the Service Availability Commitment." [VERBATIM] Measurement period: "Reporting Period" (defined as monthly billing cycle — not confirmed verbatim). Maximum credit cap: NOT FOUND explicitly; dollar-for-dollar credits reduce the following period''s invoice implying a cap at the Reporting Period fee. Whether "Services" in the ActiveCampaign SLA explicitly covers Postmark transactional email is not confirmed verbatim — needs_review: true. Legal entity: ActiveCampaign, LLC (Postmark acquired by ActiveCampaign). Prior to acquisition, Postmark''s standalone ToS contained no uptime guarantee.'
credit_policy:
  remedy_type: credit
  calculation_type: pro_rated
claim_process:
  submission_method: Support ticket
  deadlines:
    - type: submission
      days: 10
      business_days: true
      anchor_point: month_end
      description: Submit credit request within ten business days after the end of the relevant Reporting Period
global_exclusions:
  - Maintenance Time excluded from availability calculation
  - Excluded Time excluded from availability calculation
  - Whether SLA explicitly covers Postmark (vs. ActiveCampaign platform) not confirmed verbatim
support_tiers:
  - name: Free
    price_model: Free
    sla_eligible: false
    availability: Community
    channels:
      - Documentation
  - name: Standard
    price_model: Usage-based
    sla_eligible: false
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
  - id: postmark-transactional-email
    name: Postmark Transactional Email
    category: Developer Tools
    description: Transactional email delivery service for developers, with fast delivery and detailed analytics
    uptime_commitment: 99.5
    sla_eligible: true
    source_url: https://www.activecampaign.com/legal/service-level-agreement
---

Postmark (ActiveCampaign, LLC — acquired by ActiveCampaign) is a transactional email delivery service for developers. The governing SLA is ActiveCampaign's published SLA (updated January 30, 2025), which commits to 99.5% availability per reporting period. Credits are applied dollar-for-dollar against the next period's invoice and must be claimed within 10 business days of the reporting period end. Whether the SLA explicitly covers Postmark as a named service requires verification with ActiveCampaign.
