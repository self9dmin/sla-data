---
title: GitGuardian
slug: gitguardian
vendor_name: GitGuardian
legal_entity: GitGuardian SAS
category: Security & Identity
website: https://www.gitguardian.com
scope: global
sla_url: https://www.gitguardian.com/legal
last_verified: '2026-06-25'
last_updated: '2026-06-25'
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: false
credit_note: 'Reviewed GitGuardian Master Service Terms and Conditions (gitguardian.com/legal; updated October 20, 2025). GitGuardian publishes a support response-time SLA — not a platform uptime availability SLA. Credit structure verbatim: "If GitGuardian fails to meet the Monthly Average Initial Response Time or Monthly Average Error Resolution Time in a given calendar month, You will receive service credit equal to a one-week extension of the term of the Order Form." [VERBATIM] Sole remedy verbatim: "service credits are the customer''s sole remedy for GitGuardian''s failure to meet the Monthly Average Error Response Time or Monthly Average Initial Resolution Time." [VERBATIM] Measurement period: calendar month [VERBATIM]. No platform uptime percentage, credit cash payment, or uptime credit tiers found in any publicly accessible document. Legal entity: GitGuardian SAS (French société par actions simplifiée, SIREN 833 611 742, share capital €2,478.97, 54 rue de Seine, 75006 Paris, France). US subsidiary: GitGuardian Inc., 185 Alewife Brook Parkway Suite 210, Cambridge, MA 02138.'
credit_policy:
  remedy_type: service_extension
  calculation_type: days_extension
  max_credit_days: 7
claim_process:
  submission_method: Contact account team
global_exclusions:
  - SLA covers support response/resolution time metrics only, not platform uptime availability
  - Service credit is term extension only, not cash or fee reduction
  - Applies only to Order Form customers
support_tiers:
  - name: Free
    price_model: Free
    sla_eligible: false
    availability: Community
    channels:
      - Documentation
  - name: Business
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
  - id: gitguardian-secrets-detection
    name: GitGuardian Secrets Detection
    category: Security & Identity
    description: Automated secrets detection and remediation for source code repositories and developer workflows
    sla_eligible: true
    source_url: https://www.gitguardian.com/legal
---

GitGuardian (GitGuardian SAS, Paris, France; GitGuardian Inc., US) is a secrets detection and code security platform. GitGuardian's published SLA governs support response and error resolution times — not platform uptime availability. The sole remedy for failing to meet monthly average response/resolution time targets is a one-week subscription term extension per failing month. No platform uptime percentage or cash credit schedule is published.
