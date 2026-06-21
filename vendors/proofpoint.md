---
title: Proofpoint
slug: proofpoint
vendor_name: Proofpoint
legal_entity: Proofpoint
category: Security & Identity
website: https://www.proofpoint.com
scope: global
sla_url: https://www.proofpoint.com/us/legal/license
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.999
max_credit_percent: 100
claim_deadline_days: 5
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.999
      credit_percent: 25
    - uptime_below: 99.0
      credit_percent: 50
    - uptime_below: 98.0
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 5
      business_days: true
      anchor_point: incident_date
      description: Notify Proofpoint Customer Support via support ticket within five (5) business days of the SLA incident
  submission_method: Support ticket
  submission_url: https://www.proofpoint.com/us/legal/license
  required_evidence:
    - Specific SLA claimed
    - Incident details and timeframes
    - Number of impacted users
    - Affected email with original Proofpoint headers (if requested)
    - Ping and trace routes
  credit_application: Applied to next subscription period fees
global_exclusions:
  - Scheduled Maintenance Window
  - Emergency Maintenance
  - Force Majeure events
  - Use of the Service outside the scope of the Agreement
  - Customer equipment or third-party software/hardware/network outside Proofpoint's data center
  - Customer failure to meet configuration requirements
  - End-of-life products or software versions
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
  - id: archive
    name: Enterprise Archive
    category: Compliance
    description: Email archiving and eDiscovery
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.proofpoint.com/sites/default/files/general_terms_hosted_services_sla_-_mar_2016.pdf
  - id: essentials
    name: Proofpoint Essentials
    category: Email Security
    description: Email filtering and protection
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.proofpoint.com/sites/default/files/legal-documents/pfpt-en-proofpoint-essentials-sla.pdf
  - id: sat
    name: Security Awareness Training
    category: Training
    description: Phishing simulation and training
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.proofpoint.com/us/legal/license
    needs_review: true
    review_note: No service-specific public SLA with a published uptime commitment found on proofpoint.com for Security Awareness Training; 99.9 unverified.
  - id: tap
    name: Targeted Attack Protection
    category: Threat Protection
    description: Advanced threat protection
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.proofpoint.com/us/legal/license
    needs_review: true
    review_note: TAP availability not separately published; 99.999 reflects the Hosted Services Filtering System Availability SLA but is not confirmed for TAP specifically.
  - id: trap
    name: Threat Response
    category: Incident Response
    description: Automated threat response
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.proofpoint.com/us/legal/license
    needs_review: true
    review_note: No public service-specific SLA with an uptime commitment found on proofpoint.com for Threat Response (TRAP); 99.99 unverified.
---

Proofpoint is a Security & Identity provider. See the official SLAs at [https://www.proofpoint.com/us/legal/license](https://www.proofpoint.com/us/legal/license).

<!--
Proofpoint does not publish a single unified credit SLA. Instead it posts multiple service-specific SLAs on its License Terms page (https://www.proofpoint.com/us/legal/license), including the Hosted Services SLA and the Proofpoint Essentials SLA.

Filtering System Availability is warranted at 99.999% (email connectivity on port 25). Service credits are a percentage of the monthly fee, tiered: <99.999% = 25%, <99.0% = 50%, <98.0% = 100%. Email Archiving availability is warranted at 99.9% (credit tiers 10/15/25%).

Credits are not automatic: the customer must notify Proofpoint Customer Support via support ticket within five (5) business days of the SLA incident. Service credits are the sole and exclusive remedy.

Verified 2026-06-19 against the Hosted Services SLA (Mar 2016) and Proofpoint Essentials SLA (May 2022). Some product-line uptime figures (SAT, TAP, TRAP) are flagged needs_review where no service-specific public uptime SLA was found.
-->

