---
title: SurveyMonkey
slug: surveymonkey
vendor_name: SurveyMonkey
legal_entity: SurveyMonkey
category: Productivity
website: https://www.surveymonkey.com
scope: global
sla_url: https://www.surveymonkey.com/mp/legal/terms-of-use/
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  As of 2026-06-19, SurveyMonkey (Momentive) publishes no public uptime SLA with
  service credits on surveymonkey.com. Checked Terms of Use
  (/mp/legal/terms-of-use/), Governing Services Agreement (/mp/legal/gsa/),
  Security Statement (/mp/legal/security/), and Enterprise Service-Specific Terms
  (/mp/legal/survey-platform-tos/) plus status.surveymonkey.com — none define an
  availability percentage or credit remedy. Enterprise terms section 3.7
  references "availability or uptime calculations" but these are defined only in
  individual enterprise Order Forms, not publicly. Existing fields
  (uptime_commitment 99.9, max_credit_percent 0, calculation_type none) are NOT
  publicly verifiable; left unchanged pending an enterprise Order Form / SLA
  document. The 99.9 figure could not be confirmed on the vendor domain.
  2026-06-20 cleanup: removed unverified numeric SLA values per the above note; no
  public credit-bearing SLA confirmed.
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: none
  remedy_type: termination_only
claim_process:
  submission_method: N/A - No SLA credits available
  submission_url: https://help.surveymonkey.com
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 30 business days
  credit_application: Applied to next invoice
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Free tier services
  - Beta features
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
  - id: cx
    name: GetFeedback
    category: CX
    description: Customer experience surveys
    sla_eligible: true
    source_url: https://www.surveymonkey.com/mp/legal/terms-of-use/
  - id: audience
    name: SurveyMonkey Audience
    category: Research
    description: Market research panel
    sla_eligible: true
    source_url: https://www.surveymonkey.com/mp/legal/terms-of-use/
  - id: surveys
    name: SurveyMonkey Surveys
    category: Survey
    description: Survey creation and distribution
    sla_eligible: true
    source_url: https://www.surveymonkey.com/mp/legal/terms-of-use/
  - id: forms
    name: Wufoo Forms
    category: Forms
    description: Online form builder
    sla_eligible: true
    source_url: https://www.surveymonkey.com/mp/legal/terms-of-use/
---

SurveyMonkey (Momentive) is a Enterprise Software provider. See the official legal terms at [https://www.surveymonkey.com/mp/legal/terms-of-use/](https://www.surveymonkey.com/mp/legal/terms-of-use/) and the [Governing Services Agreement](https://www.surveymonkey.com/mp/legal/gsa/).

<!--
As of 2026-06-19, SurveyMonkey publishes no public uptime SLA with service
credits. The Terms of Use, Governing Services Agreement, Security Statement, and
Enterprise Service-Specific Terms contain no defined availability percentage or
credit remedy. Any uptime/availability commitment for enterprise customers is
set in individual Order Forms (referenced by Enterprise Service-Specific Terms
section 3.7), which are not public. The 99.9 uptime and 0 credit figures below
are unverified against the vendor domain; flagged needs_review.
-->
