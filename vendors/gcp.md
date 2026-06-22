---
title: GCP
slug: gcp
vendor_name: GCP
legal_entity: Google Cloud Platform
category: Cloud Infrastructure
website: https://cloud.google.com
scope: regional
regions:
  - code: us-central1
    name: Iowa
    continent: americas
    popular: true
  - code: us-east1
    name: South Carolina
    continent: americas
    popular: true
  - code: us-east4
    name: Northern Virginia
    continent: americas
    popular: true
  - code: us-west1
    name: Oregon
    continent: americas
    popular: true
  - code: us-west2
    name: Los Angeles
    continent: americas
  - code: us-west3
    name: Salt Lake City
    continent: americas
  - code: us-west4
    name: Las Vegas
    continent: americas
  - code: northamerica-northeast1
    name: Montreal
    continent: americas
  - code: southamerica-east1
    name: Sao Paulo
    continent: americas
  - code: europe-west1
    name: Belgium
    continent: europe
    popular: true
  - code: europe-west2
    name: London
    continent: europe
    popular: true
  - code: europe-west3
    name: Frankfurt
    continent: europe
    popular: true
  - code: europe-west4
    name: Netherlands
    continent: europe
  - code: europe-west6
    name: Zurich
    continent: europe
  - code: europe-north1
    name: Finland
    continent: europe
  - code: asia-east1
    name: Taiwan
    continent: asia-pacific
  - code: asia-east2
    name: Hong Kong
    continent: asia-pacific
  - code: asia-northeast1
    name: Tokyo
    continent: asia-pacific
    popular: true
  - code: asia-northeast2
    name: Osaka
    continent: asia-pacific
  - code: asia-northeast3
    name: Seoul
    continent: asia-pacific
  - code: asia-south1
    name: Mumbai
    continent: asia-pacific
  - code: asia-southeast1
    name: Singapore
    continent: asia-pacific
    popular: true
  - code: asia-southeast2
    name: Jakarta
    continent: asia-pacific
  - code: australia-southeast1
    name: Sydney
    continent: asia-pacific
    popular: true
  - code: australia-southeast2
    name: Melbourne
    continent: asia-pacific
  - code: me-west1
    name: Tel Aviv
    continent: middle-east
  - code: africa-south1
    name: Johannesburg
    continent: africa
region_pattern: \b(us-central1|us-east1|us-east4|us-east5|us-south1|us-west1|us-west2|us-west3|us-west4|northamerica-northeast1|northamerica-northeast2|southamerica-east1|southamerica-west1|europe-west1|europe-west2|europe-west3|europe-west4|europe-west6|europe-west8|europe-west9|europe-central2|europe-north1|europe-southwest1|asia-east1|asia-east2|asia-northeast1|asia-northeast2|asia-northeast3|asia-south1|asia-south2|asia-southeast1|asia-southeast2|australia-southeast1|australia-southeast2|me-west1|me-central1|me-central2|africa-south1)\b
sla_url: https://cloud.google.com/terms/sla
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: true
uptime_commitment: 99.99
max_credit_percent: 100
claim_deadline_days: 60
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 25
    - uptime_below: 95
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 60
      business_days: false
      anchor_point: eligibility_date
      description: Notify Google technical support within 60 days (Compute Engine) of becoming eligible; most other products require 30 days. Provide log files showing Downtime Periods
  submission_method: Google Cloud Support
  submission_url: https://console.cloud.google.com/support
  required_evidence:
    - Google Cloud Project ID
    - Affected resource names
    - Incident timestamps (UTC)
    - Error logs from Cloud Logging
    - Description of business impact
  review_timeline: 5-10 business days
  credit_application: Applied as credit to Google Cloud account
global_exclusions:
  - Scheduled maintenance
  - Force majeure events
  - Customer misconfigurations
  - Alpha/Beta services
  - Free tier usage
  - Quota exceeded errors
support_tiers:
  - name: Basic
    slug: basic
    price_model: Free
    sla_eligible: false
    claim_assistance: false
    availability: None
    channels:
      - Documentation
      - Community
  - name: Standard
    slug: standard
    price_model: $29/user/month (min $100)
    sla_eligible: true
    claim_assistance: false
    availability: Business hours
    channels:
      - Email
    response_times:
      p2: < 4 hours
      p3: < 8 hours
      p4: < 1 day
  - name: Enhanced
    slug: enhanced
    price_model: 3% of monthly spend (min $500)
    sla_eligible: true
    claim_assistance: true
    availability: 24/7 for P1
    channels:
      - Email
      - Phone
    response_times:
      p1: < 1 hour
      p2: < 4 hours
      p3: < 8 hours
  - name: Premium
    slug: premium
    price_model: 4% of monthly spend (min $12,500)
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
      - TAM
    response_times:
      p1: < 15 minutes
      p2: < 2 hours
      p3: < 4 hours
    features:
      tam: Dedicated
      training: true
services:
  - id: compute-engine
    name: Compute Engine
    category: Compute
    description: Virtual machines on demand
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://cloud.google.com/compute/sla
  - id: cloud-storage
    name: Cloud Storage
    category: Storage
    description: Object storage for any amount of data
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://cloud.google.com/storage/sla
  - id: cloud-sql
    name: Cloud SQL
    category: Database
    description: Managed MySQL, PostgreSQL, SQL Server
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://cloud.google.com/sql/sla
  - id: cloud-spanner
    name: Cloud Spanner
    category: Database
    description: Globally distributed relational database
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://cloud.google.com/spanner/sla
    credit_policy:
      calculation_type: tiered
      max_credit_percent: 50
      credit_tiers:
        - uptime_below: 99.999
          credit_percent: 10
        - uptime_below: 99.99
          credit_percent: 25
        - uptime_below: 99
          credit_percent: 50
  - id: bigquery
    name: BigQuery
    category: Analytics
    description: Serverless data warehouse
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://cloud.google.com/bigquery/sla
  - id: cloud-functions
    name: Cloud Functions
    category: Compute
    description: Event-driven serverless compute
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://cloud.google.com/functions/sla
  - id: gke
    name: Google Kubernetes Engine
    category: Containers
    description: Managed Kubernetes
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://cloud.google.com/kubernetes-engine/sla
  - id: cloud-run
    name: Cloud Run
    category: Compute
    description: Fully managed serverless containers
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://cloud.google.com/run/sla
  - id: pub-sub
    name: Pub/Sub
    category: Messaging
    description: Messaging and event ingestion
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://cloud.google.com/pubsub/sla
  - id: cloud-cdn
    name: Cloud CDN
    category: CDN
    description: Content delivery network
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://cloud.google.com/cdn/sla
  - id: compute
    name: Compute Engine and Load Balancing
    uptime_commitment: 99.99
  - id: functions
    name: Cloud Run functions
    uptime_commitment: 99.95
  - id: appengine
    name: App Engine
    uptime_commitment: 99.95
  - id: dns
    name: Cloud DNS
    uptime_commitment: 100
  - id: memorystore
    name: Memorystore
    uptime_commitment: 99.99
  - id: firestore
    name: Firestore
    uptime_commitment: 99.999
  - id: bigtable
    name: Cloud Bigtable
    uptime_commitment: 99.999
  - id: dataflow
    name: Dataflow
    uptime_commitment: 99.9
  - id: alloydb
    name: AlloyDB
    uptime_commitment: 99.99
  - id: anti-money-laundering-ai
    name: Anti Money Laundering AI
    uptime_commitment: 99.9
  - id: apigee
    name: Apigee
    uptime_commitment: 99.99
  - id: application-integration
    name: Application Integration
    uptime_commitment: 99.5
  - id: translate-automl
    name: AutoML Translation
    uptime_commitment: 99.5
  - id: bare-metal
    name: Bare Metal Solution
    uptime_commitment: 99.99
  - id: blockchain-node-engine
    name: Blockchain Node Engine
    uptime_commitment: 99.5
  - id: certificate-authority-service
    name: Certificate Authority Service
    uptime_commitment: 99.95
  - id: build
    name: Cloud Build
    uptime_commitment: 99.5
  - id: composer
    name: Cloud Composer
    uptime_commitment: 99.5
  - id: data-fusion
    name: Cloud Data Fusion
    uptime_commitment: 99.9
  - id: dlp
    name: Cloud DLP
    uptime_commitment: 99.5
  - id: ekm
    name: Cloud External Key Manager
    uptime_commitment: 99.5
  - id: healthcare
    name: Cloud Healthcare
    uptime_commitment: 99.9
  - id: kms
    name: Cloud HSM
    uptime_commitment: 99.95
  - id: identity
    name: Cloud Identity Services
    uptime_commitment: 99.9
  - id: network-connectivity-interconnect
    name: Cloud Interconnect
    uptime_commitment: 99.99
  - id: nat
    name: Cloud NAT
    uptime_commitment: 99.99
  - id: natural-language
    name: Cloud Natural Language API
    uptime_commitment: 99.5
  - id: firewall
    name: Cloud NGFW
    uptime_commitment: 99.99
  - id: operations
    name: Cloud Observability (Monitoring, Logging)
    uptime_commitment: 99.95
  - id: scheduler
    name: Cloud Scheduler
    uptime_commitment: 99.5
  - id: service-mesh
    name: Cloud Service Mesh
    uptime_commitment: 99.5
  - id: tasks
    name: Cloud Tasks
    uptime_commitment: 99.95
  - id: translate
    name: Cloud Translation
    uptime_commitment: 99.5
  - id: vision
    name: Cloud Vision
    uptime_commitment: 99.5
  - id: network-connectivity-vpn
    name: Cloud VPN
    uptime_commitment: 99.99
  - id: workstations
    name: Cloud Workstations
    uptime_commitment: 99.5
  - id: data-catalog
    name: Data Catalog
    uptime_commitment: 99.9
  - id: dataplex
    name: Dataplex
    uptime_commitment: 99.9
  - id: dataproc
    name: Dataproc
    uptime_commitment: 99.5
  - id: dataproc-metastore
    name: Dataproc Metastore
    uptime_commitment: 99.9
  - id: datastore
    name: Datastore
    uptime_commitment: 99.95
  - id: dialogflow
    name: Dialogflow
    uptime_commitment: 99.5
  - id: document-ai
    name: Document AI
    uptime_commitment: 99.5
  - id: filestore
    name: Filestore
    uptime_commitment: 99.99
  - id: gemini-enterprise
    name: Gemini Enterprise
    uptime_commitment: 99.5
  - id: gemini
    name: Gemini for Google Cloud
    uptime_commitment: 99.5
  - id: vertex-ai-generative-ai
    name: Gemini on Vertex
    uptime_commitment: 99.5
  - id: armor
    name: Google Cloud Armor
    uptime_commitment: 99.99
  - id: netapp-volumes
    name: Google Cloud NetApp Volumes
    uptime_commitment: 99.99
  - id: vmware-engine
    name: Google Cloud VMware Engine
    uptime_commitment: 99.99
  - id: earth-engine
    name: Google Earth Engine
    uptime_commitment: 99.5
  - id: identity-platform
    name: Identity Platform
    uptime_commitment: 99.95
  - id: iot
    name: IoT Core
    uptime_commitment: 99.5
  - id: looker-core
    name: Looker (Google Cloud core)
    uptime_commitment: 99.5
  - id: looker-studio
    name: Looker Studio Pro
    uptime_commitment: 99.5
  - id: managed-service-for-apache-kafka
    name: Managed Service for Apache Kafka
    uptime_commitment: 99.9
  - id: managed-microsoft-ad
    name: Managed Service for Microsoft Active Directory
    uptime_commitment: 99.9
  - id: media-cdn
    name: Media CDN
    uptime_commitment: 99.95
  - id: ncc
    name: Network Connectivity Center
    uptime_commitment: 99.9
  - id: parallelstore
    name: Parallelstore
    uptime_commitment: 99.9
  - id: recaptcha-enterprise
    name: reCAPTCHA Enterprise
    uptime_commitment: 99.5
  - id: secret-manager
    name: Secret Manager
    uptime_commitment: 99.95
  - id: secure-web-proxy
    name: Secure Web Proxy
    uptime_commitment: 99.9
  - id: security-command-center
    name: Security Command Center
    uptime_commitment: 99.5
  - id: sas
    name: Spectrum Access System
    uptime_commitment: 99.9
  - id: speech-to-text
    name: Speech-to-Text
    uptime_commitment: 99.5
  - id: talent-solution
    name: Talent Solution
    uptime_commitment: 99.5
  - id: text-to-speech
    name: Text-to-Speech
    uptime_commitment: 99.5
  - id: transcoder
    name: Transcoder API
    uptime_commitment: 99.5
  - id: vertex-ai-featurestore
    name: Vertex AI Feature Store
    uptime_commitment: 99.5
  - id: vertex-ai
    name: Vertex AI Platform
    uptime_commitment: 99.5
  - id: retail
    name: Vertex AI Search for commerce
    uptime_commitment: 99.5
  - id: vector-search
    name: Vertex AI Vector Search
    uptime_commitment: 99.5
  - id: vertex-ai-vision
    name: Vertex AI Vision
    uptime_commitment: 99.5
  - id: video-intelligence
    name: Video Intelligence API
    uptime_commitment: 99.5
  - id: workflows
    name: Workflows
    uptime_commitment: 99.5
  - id: ai-platform-training
    name: AI Platform Training and Prediction
    uptime_commitment: 99.5
  - id: firebase-storage
    name: Cloud Storage for Firebase
    uptime_commitment: 99.95
  - id: kms
    name: Cloud Key Management Service
    uptime_commitment: 99.95
support:
  tiers:
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
  pricing: percent_of_spend
  source_url: "https://cloud.google.com/support"
  note: "Premium (>=$15k/mo or percent-of-spend) adds a TAM, a 15-minute P1 response target, and event/onboarding guidance. Response times are targets, not credit-backed; per-product uptime SLAs are the credited layer."
---

GCP is a Cloud Infrastructure provider. See the official SLA at [https://cloud.google.com/terms/sla](https://cloud.google.com/terms/sla).

<!-- Add human-readable notes about GCP's SLA nuances here. -->
