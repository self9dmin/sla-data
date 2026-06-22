---
title: Firebase
slug: firebase
vendor_name: Firebase
legal_entity: Firebase
category: Databases & Data Infrastructure
website: https://www.firebase.com
scope: global
sla_url: https://firebase.google.com/terms/service-level-agreement
last_verified: '2026-06-19'
last_updated: '2026-06-19'
uptime_commitment: 99.95
max_credit_percent: 30
claim_deadline_days: 60
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 30
  credit_tiers:
    - uptime_below: 99.95
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 30
claim_process:
  deadlines:
    - type: submission
      days: 60
      business_days: false
      anchor_point: incident_date
      description: Credit request must be received by the end of the second billing cycle after which the incident occurred
  submission_method: Account/billing support request via Firebase Support
  submission_url: https://firebase.google.com/support
  required_evidence:
    - Issue category Billing
    - Summary stating SLA Credit Request
    - Incident dates and times
    - Affected service URLs
    - Request logs documenting the errors
  review_timeline: Confirmed within one billing cycle
  credit_application: Service Credit issued within one billing cycle following confirmation
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
  - id: firestore
    name: Cloud Firestore
    category: Database
    description: NoSQL document database
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://firebase.google.com/terms
  - id: functions
    name: Cloud Functions for Firebase
    category: Serverless
    description: Serverless functions
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://firebase.google.com/terms
  - id: auth
    name: Firebase Authentication
    category: Identity
    description: User authentication
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://firebase.google.com/terms
  - id: fcm
    name: Firebase Cloud Messaging
    category: Messaging
    description: Push notifications
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://firebase.google.com/terms
  - id: storage
    name: Firebase Cloud Storage
    category: Storage
    description: File storage
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://firebase.google.com/terms/service-level-agreement/cloud-storage
  - id: hosting
    name: Firebase Hosting
    category: Hosting
    description: Web hosting with CDN
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://firebase.google.com/terms/service-level-agreement
  - id: realtime-db
    name: Firebase Realtime Database
    category: Database
    description: Real-time JSON database
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://firebase.google.com/terms/service-level-agreement
support:
  tiers:
    - "Basic"
    - "Standard"
    - "Enhanced"
    - "Premium"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: flat
  source_url: "https://cloud.google.com/terms/tssg/firebase"
  note: "Inherits Google Cloud Customer Care; response times are SLOs/targets per TSSG."
---

Firebase is a Database provider. See the official SLA at [https://firebase.google.com/terms/service-level-agreement](https://firebase.google.com/terms/service-level-agreement).

The canonical Firebase SLA ("Service Level Agreement for Hosting and Real-Time Database") covers only Firebase Hosting and Realtime Database, with a 99.95% Monthly Uptime Percentage commitment and a maximum 30% service credit. Cloud Storage for Firebase has its own SLA (multi-regional 99.95%, regional 99.9%, max 50% credit). Other listed services (Firestore, Cloud Functions, Authentication, FCM) are governed by Google Cloud Platform terms rather than a Firebase-domain SLA.

<!-- Add human-readable notes about Firebase's SLA nuances here. -->
