---
title: Abnormal Security
slug: abnormal-security
vendor_name: Abnormal Security
legal_entity: Abnormal AI, Inc.
category: Security
website: https://abnormalsecurity.com
scope: global
sla_url: https://legal.abnormalsecurity.com/legal-hub/abnormal-security-support-and-service-level-agreement-policy-465249c8
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: true
credit_note: 'Verified against Abnormal Security Support and Service Level Agreement Policy (legal.abnormalsecurity.com; returns HTTP 403, text indexed by search engines). Legal entity: Abnormal AI, Inc. (formerly Abnormal Security Corporation), Delaware corporation; San Francisco, CA. Uptime verbatim: "The Monthly Availability Percentage for the Service is ninety-nine and nine-tenths percent (99.9%)." Calculation formula verbatim: "(Calendar Minutes − Unavailable Minutes) ÷ Calendar Minutes × 100." Unavailability definition verbatim: "''Unavailable'' means if Customer is unable to access the Service by means of a web browser and/or API as a result of failure(s) in the Service, as confirmed by Abnormal." Credit form verbatim: Credits are "days of subscription term extension" and "may not be exchanged for, or converted to, monetary amounts." Maximum credit cap verbatim: "The aggregate maximum amount of Service Level Credits for a Service Level Failure will not exceed 15 days per month." Sole remedy verbatim: Credits are "Customer''s sole and exclusive remedy" for Service Level Failures. Claim deadline verbatim: Customer must request credits "within thirty (30) days from the time Customer becomes eligible to receive Service Level Credits under this Policy by filing a Support Case." Trial exclusion verbatim: "Abnormal offers no warranty, indemnity, SLA, or support for trials and betas and its liability for trials and betas will not exceed $50,000." Scheduled maintenance exclusion verbatim: "Planned Maintenance" is "routine maintenance periods lasting no more than four hours with at least 48 hours prior notice." Exclusions verbatim: "(a) Planned Maintenance or Emergency Maintenance; (b) third-party platforms and networks, Customer or User application, equipment, software or other third-party technology; (c) Customer or its User''s use of the Service in violation of the Agreement… (d) force majeure events." needs_review: true — credit tier table (days per uptime band below 99.9%) exists in the document but row values not indexed in any search snippet; only the 15-day monthly aggregate cap is confirmed.'
credit_policy:
  remedy_type: service_extension
  calculation_type: days_extension
  max_credit_days: 15
claim_process:
  submission_method: Support ticket
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: eligibility_date
      description: File a Support Case within 30 days of becoming eligible for Service Level Credits
global_exclusions:
  - Credits are subscription term extension days only — no cash or invoice credit conversion
  - Trial and beta services explicitly excluded (liability cap $50K for trials)
  - Planned Maintenance (max 4 hours with 48 hours notice) excluded
  - Emergency Maintenance excluded
  - Customer or User Agreement violations excluded
  - Force majeure excluded
  - Credit tier table (days per uptime band) not publicly confirmed; only 15-day monthly cap confirmed
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
  - id: abnormal-email-security
    name: Abnormal AI Email Security
    category: Security
    description: AI-powered email security platform detecting phishing, BEC, and account takeover attacks via behavioral analysis
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://legal.abnormalsecurity.com/legal-hub/abnormal-security-support-and-service-level-agreement-policy-465249c8
---

Abnormal Security (Abnormal AI, Inc., Delaware; San Francisco, CA; formerly Abnormal Security Corporation) is an AI-powered email security platform. The SLA guarantees 99.9% monthly availability, measured as customer access via web browser or API. Credits are subscription term extension days — not cash or invoice credits — capped at 15 days per month in aggregate. Claims must be filed via Support Case within 30 days of eligibility. Trial and beta services are explicitly excluded, with a separate $50K liability cap for trial use. The credit tier table (days per uptime band) is not publicly indexed.
