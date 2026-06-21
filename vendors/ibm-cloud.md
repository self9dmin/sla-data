---
title: IBM Cloud
slug: ibm-cloud
vendor_name: IBM Cloud
legal_entity: IBM Cloud
category: Cloud Infrastructure
website: https://www.ibm.com/cloud
scope: global
sla_url: https://cloud.ibm.com/docs/overview?topic=overview-slas
last_verified: '2026-06-20'
last_updated: '2026-06-19'
needs_review: true
review_note: 'Verified via browser 2026-06-20: IBM Cloud publishes per-service SLAs with service credits and no single global uptime number; top-level fields are a representative value — see services[].'
uptime_commitment: 100
max_credit_percent: 10
claim_deadline_days: 3
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 10
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 5
    - uptime_below: 99.9
      credit_percent: 10
claim_process:
  deadlines:
    - type: notification
      days: 1
      business_days: false
      anchor_point: incident_date
      description: 'CRITICAL: Notify IBM within 24 HOURS of incident'
    - type: submission
      days: 3
      business_days: true
      anchor_point: end_of_billing_month
      description: Submit formal claim within 3 BUSINESS DAYS of month end
  submission_method: IBM Support
  submission_url: https://www.ibm.com/cloud/support
  required_evidence:
    - Account ID
    - Affected services
    - Incident timestamps
    - Impact description
  review_timeline: 15 business days
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
  - id: activity-tracker
    name: Activity Tracker
    category: Management
    description: Activity Tracker service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: api-connect
    name: API Connect
    category: Integration
    description: API Connect service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: app-connect
    name: App Connect
    category: Integration
    description: App Connect service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: app-id
    name: App ID
    category: Security
    description: App ID service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: load-balancer-for-vpc
    name: Application Load Balancer for VPC
    category: Networking
    description: Application Load Balancer for VPC service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: bare-metal-servers
    name: Bare Metal Servers for VPC
    category: Compute
    description: Bare Metal Servers for VPC service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: block-storage-for-vpc
    name: Block Storage for VPC
    category: Storage
    description: Block Storage for VPC service
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: blockchain-platform
    name: Blockchain Platform
    category: Emerging Tech
    description: Blockchain Platform service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: certificate-manager
    name: Certificate Manager
    category: Security
    description: Certificate Manager service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: cloud-foundry
    name: Cloud Foundry
    category: Platform
    description: Cloud Foundry service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: cloud-internet-services
    name: Cloud Internet Services
    category: Networking
    description: Cloud Internet Services service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: cloud-monitoring
    name: Cloud Monitoring
    category: Management
    description: Cloud Monitoring service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: cloud-object-storage
    name: Cloud Object Storage
    category: Storage
    description: Cloud Object Storage service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: cognos-analytics
    name: Cognos Analytics
    category: Analytics
    description: Cognos Analytics service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: container-registry
    name: Container Registry
    category: Containers
    description: Container Registry service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: continuous-delivery
    name: Continuous Delivery
    category: DevOps
    description: Continuous Delivery service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: databases-for-elasticsearch
    name: Databases for Elasticsearch
    category: Database
    description: Databases for Elasticsearch service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: databases-for-etcd
    name: Databases for etcd
    category: Database
    description: Databases for etcd service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: databases-for-mongodb
    name: Databases for MongoDB
    category: Database
    description: Databases for MongoDB service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: databases-for-mysql
    name: Databases for MySQL
    category: Database
    description: Databases for MySQL service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: databases-for-postgresql
    name: Databases for PostgreSQL
    category: Database
    description: Databases for PostgreSQL service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: databases-for-redis
    name: Databases for Redis
    category: Database
    description: Databases for Redis service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: db2-on-cloud
    name: Db2 on Cloud
    category: Database
    description: Db2 on Cloud service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: db2-warehouse
    name: Db2 Warehouse
    category: Analytics
    description: Db2 Warehouse service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: direct-link
    name: Direct Link
    category: Networking
    description: Direct Link service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: event-streams
    name: Event Streams
    category: Integration
    description: Event Streams service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: file-storage-for-vpc
    name: File Storage for VPC
    category: Storage
    description: File Storage for VPC service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: hyper-protect-crypto-services
    name: Hyper Protect Crypto Services
    category: Security
    description: Hyper Protect Crypto Services service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: code-engine
    name: IBM Cloud Code Engine
    category: Compute
    description: IBM Cloud Code Engine service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: dns-services
    name: IBM Cloud DNS Services
    category: Networking
    description: IBM Cloud DNS Services service
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: functions
    name: IBM Cloud Functions
    category: Compute
    description: IBM Cloud Functions service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: kubernetes-service
    name: IBM Cloud Kubernetes Service
    category: Containers
    description: IBM Cloud Kubernetes Service service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: pak-for-data
    name: IBM Cloud Pak for Data
    category: Analytics
    description: IBM Cloud Pak for Data service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: satellite
    name: IBM Cloud Satellite
    category: Hybrid Cloud
    description: IBM Cloud Satellite service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: cloudant
    name: IBM Cloudant
    category: Database
    description: IBM Cloudant service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: key-protect
    name: Key Protect
    category: Security
    description: Key Protect service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: log-analysis
    name: Log Analysis
    category: Management
    description: Log Analysis service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: mq-on-cloud
    name: MQ on Cloud
    category: Integration
    description: MQ on Cloud service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: natural-language-understanding
    name: Natural Language Understanding
    category: AI & Machine Learning
    description: Natural Language Understanding service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: power-virtual-server
    name: Power Virtual Server
    category: Compute
    description: Power Virtual Server service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: red-hat-openshift-on-ibm-cloud
    name: Red Hat OpenShift on IBM Cloud
    category: Containers
    description: Red Hat OpenShift on IBM Cloud service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: schematics
    name: Schematics
    category: DevOps
    description: Schematics service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: secrets-manager
    name: Secrets Manager
    category: Security
    description: Secrets Manager service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: security-and-compliance-center
    name: Security and Compliance Center
    category: Security
    description: Security and Compliance Center service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: speech-to-text
    name: Speech to Text
    category: AI & Machine Learning
    description: Speech to Text service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: streaming-analytics
    name: Streaming Analytics
    category: Analytics
    description: Streaming Analytics service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: text-to-speech
    name: Text to Speech
    category: AI & Machine Learning
    description: Text to Speech service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: transit-gateway
    name: Transit Gateway
    category: Networking
    description: Transit Gateway service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: virtual-private-cloud-vpc
    name: Virtual Private Cloud
    category: Networking
    description: Virtual Private Cloud service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: virtual-servers-for-vpc
    name: Virtual Server for VPC
    category: Compute
    description: Virtual Server for VPC service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: vmware-solutions
    name: VMware Solutions
    category: Compute
    description: VMware Solutions service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: vpn-for-vpc
    name: VPN for VPC
    category: Networking
    description: VPN for VPC service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: watson-assistant
    name: Watson Assistant
    category: AI & Machine Learning
    description: Watson Assistant service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: watson-discovery
    name: Watson Discovery
    category: AI & Machine Learning
    description: Watson Discovery service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: watson-machine-learning
    name: Watson Machine Learning
    category: AI & Machine Learning
    description: Watson Machine Learning service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: watson-query
    name: Watson Query
    category: Database
    description: Watson Query service
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
  - id: watson-studio
    name: Watson Studio
    category: AI & Machine Learning
    description: Watson Studio service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.ibm.com/support/customer/csol/terms/?id=i126-9268
---

IBM Cloud is a Cloud Infrastructure provider. See the official SLA at [https://cloud.ibm.com/docs/overview?topic=overview-slas](https://cloud.ibm.com/docs/overview?topic=overview-slas). IBM Cloud SLAs are per-service: each service's availability target and credit amounts are defined in its individual Transaction Document / Service Description.

<!-- Add human-readable notes about IBM Cloud's SLA nuances here. -->
