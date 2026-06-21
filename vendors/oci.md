---
title: OCI
slug: oci
vendor_name: OCI
legal_entity: OCI
category: Cloud Infrastructure
website: https://www.oci.com
scope: global
sla_url: https://www.oracle.com/cloud/sla/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  Verified against the Oracle PaaS and IaaS Pillar Document (March 2026); SLA is
  per-service and top-level fields reflect a representative service (99.995% is
  the highest-tier figure, e.g. Autonomous Database with Data Guard).
uptime_commitment: 99.995
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
    - uptime_below: 99.0
      credit_percent: 25
    - uptime_below: 95.0
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 60
      business_days: false
      anchor_point: incident_date
      description: >-
        "Oracle must receive the claim within sixty (60) calendar days from when
        the issue occurred" (PaaS and IaaS Pillar Document, sec. 3.3 Claims)
  submission_method: Contact your Oracle account manager
  submission_url: https://www.oracle.com/cloud/sla/
  required_evidence:
    - Name of the affected Oracle PaaS/IaaS Cloud Service
    - Detailed description of the circumstances of the claim
    - Time and duration of the downtime
    - Region affected
    - Relevant OCIDs (tenancy, compartment, affected resource)
  review_timeline: Within 60 days of Oracle's receipt of the claim
  credit_application: Service credit as percentage of net fees for the affected service
global_exclusions:
  - Your equipment, software, or third-party technology (incl. third-party platforms you deploy on)
  - Inter-related service failures (credits only for the root-cause Primary Service)
  - Your or your Users' actions or inactions and misconfigurations (e.g. mis-configured security groups, VCNs, network firewall policy, exceeding service limits)
  - Anything excluded from Unplanned Downtime per the Oracle Cloud Hosting and Delivery Policies (sec. 3.3)
  - Maintenance periods not selected or agreed to by you are excluded from Common Exclusions
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
  - id: autonomous-dataguard
    name: Autonomous Database (Data Guard)
    category: Database
    description: With Autonomous Data Guard enabled
    uptime_commitment: 99.995
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: autonomous-standard
    name: Autonomous Database (Standard)
    category: Database
    description: Without Autonomous Data Guard
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: base-database
    name: Base Database Service (Enterprise)
    category: Database
    description: Standard or Enterprise Edition
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: exadata
    name: Exadata Database Service
    category: Database
    description: Exadata Infrastructure availability
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: mysql-heatwave
    name: MySQL HeatWave (High Availability)
    category: Database
    description: MySQL with HA option enabled
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: block-volume
    name: OCI Block Volume
    category: Storage
    description: Block storage read/write IO
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: compute-multiad
    name: OCI Compute (Multi-AD/Fault Domain)
    category: Compute
    description: Instances across multiple Availability Domains
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: compute-single
    name: OCI Compute (Single Instance)
    category: Compute
    description: Single Fault Domain deployment
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: dns
    name: OCI DNS
    category: Networking
    description: Authoritative DNS queries
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: fastconnect
    name: OCI FastConnect
    category: Networking
    description: Virtual connection connectivity
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: file-storage
    name: OCI File Storage
    category: Storage
    description: NFS request processing
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: functions
    name: OCI Functions
    category: Compute
    description: Function invocation availability
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: iam
    name: OCI IAM
    category: Identity
    description: Identity and Access Management
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: vault
    name: OCI Key Management (Vault)
    category: Identity
    description: Key management operations
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: load-balancer
    name: OCI Load Balancer
    category: Networking
    description: Traffic processing availability
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: object-storage
    name: OCI Object Storage
    category: Storage
    description: Standard and Archive storage
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: vpn
    name: OCI Site-to-Site VPN
    category: Networking
    description: IPSec VPN connection availability
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: oke
    name: Oracle Kubernetes Engine (OKE)
    category: Compute
    description: Kubernetes API Server uptime
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.oracle.com/cloud/sla/
  - id: oracle-exadata-exascale-vm-image
    name: Oracle Exadata Exascale VM Image
    uptime_commitment: 99.95
  - id: oci-sql-watch
    name: Oracle Cloud Infrastructure - SQL Watch
    uptime_commitment: 99.9
  - id: mysql-heatwave-aws-storage
    name: MySQL HeatWave - AWS - Storage
    uptime_commitment: 99.9
  - id: mysql-database-aws-ingress
    name: MySQL Database - AWS - Ingress
    uptime_commitment: 99.9
  - id: mysql-database-aws-egress-private
    name: MySQL Database - AWS - Egress Private
    uptime_commitment: 99.9
  - id: oracle-exadata-exascale-rdma
    name: Oracle Exadata Exascale RDMA
    uptime_commitment: 99.95
  - id: oracle-exadata-exascale-database
    name: Oracle Exadata Exascale Database
    uptime_commitment: 99.95
  - id: oracle-exadata-exascale-database-additional
    name: Oracle Exadata Exascale Database - Additional
    uptime_commitment: 99.95
  - id: oracle-exadata-exascale-additional-storage
    name: Oracle Exadata Exascale Additional Storage
    uptime_commitment: 99.95
  - id: mysql-database-aws-private-endpoint
    name: MySQL Database - AWS - Private Endpoint
    uptime_commitment: 99.9
  - id: oci-generative-ai
    name: Oracle Cloud Infrastructure - Generative AI
    uptime_commitment: 99.9
  - id: oci-ai-agent
    name: Oracle Cloud Infrastructure - AI Agent
    uptime_commitment: 99.9
  - id: exadata-database-ecpu-dedicated
    name: Exadata Database ECPU - Dedicated
    uptime_commitment: 99.95
  - id: oracle-data-integrator-cloud
    name: Oracle Data Integrator Cloud Service
    uptime_commitment: 99.9
  - id: oracle-big-data-cloud-enterprise
    name: Oracle Big Data Cloud Enterprise
    uptime_commitment: 99.9
  - id: oracle-database-cloud-service
    name: Oracle Database Cloud Service - All Editions
    uptime_commitment: 99.9
  - id: oracle-data-integrator-cloud-byol
    name: Oracle Data Integrator Cloud Service - BYOL
    uptime_commitment: 99.9
  - id: oracle-autonomous-data-warehouse-byol
    name: Oracle Autonomous Data Warehouse - BYOL - OCPU Per Hour
    uptime_commitment: 99.95
  - id: oracle-autonomous-data-warehouse
    name: Oracle Autonomous Data Warehouse - OCPU Per Hour
    uptime_commitment: 99.95
  - id: oci-database-migration
    name: Oracle Cloud Infrastructure - Database Migration
    uptime_commitment: 99.9
  - id: oracle-analytics-cloud-professional
    name: Oracle Analytics Cloud - Professional
    uptime_commitment: 99.9
  - id: oracle-analytics-cloud-enterprise
    name: Oracle Analytics Cloud - Enterprise
    uptime_commitment: 99.9
  - id: oracle-autonomous-transaction-processing
    name: Oracle Autonomous Transaction Processing - OCPU
    uptime_commitment: 99.95
  - id: oracle-autonomous-transaction-processing-byol
    name: Oracle Autonomous Transaction Processing - BYOL
    uptime_commitment: 99.95
  - id: oracle-base-database-standard
    name: Oracle Base Database Service - Standard Edition
    uptime_commitment: 99.9
  - id: oracle-base-database-enterprise
    name: Oracle Base Database Service - Enterprise Edition
    uptime_commitment: 99.9
  - id: oracle-base-database-all
    name: Oracle Base Database Service - All Editions
    uptime_commitment: 99.9
  - id: oracle-cloud-sql-compute
    name: Oracle Cloud SQL - Compute Capacity
    uptime_commitment: 99.9
  - id: oracle-big-data-compute-standard
    name: Oracle Big Data Service - Compute - Standard
    uptime_commitment: 99.9
  - id: oracle-big-data-compute-dense-io
    name: Oracle Big Data Service - Compute - Dense IO
    uptime_commitment: 99.9
  - id: oracle-big-data-compute-high-memory
    name: Oracle Big Data Service - Compute - High Memory
    uptime_commitment: 99.9
  - id: oci-data-safe
    name: Oracle Cloud Infrastructure - Data Safe
    uptime_commitment: 99.9
  - id: oracle-atp-exadata
    name: Oracle Autonomous Transaction Processing - Exadata
    uptime_commitment: 99.95
  - id: oracle-adw-exadata
    name: Oracle Autonomous Data Warehouse - Exadata
    uptime_commitment: 99.95
  - id: oracle-adw-ecpu
    name: Oracle Autonomous Data Warehouse - ECPU
    uptime_commitment: 99.95
  - id: oracle-autonomous-json-database
    name: Oracle Autonomous JSON Database
    uptime_commitment: 99.95
  - id: oracle-analytics-professional
    name: Oracle Analytics - Professional
    uptime_commitment: 99.9
  - id: oracle-analytics-enterprise
    name: Oracle Analytics - Enterprise
    uptime_commitment: 99.9
  - id: oci-database-postgresql
    name: Oracle Cloud Infrastructure - Database with PostgreSQL
    uptime_commitment: 99.95
  - id: exadata-cloud-quarter-rack
    name: Exadata Cloud Infrastructure - Quarter Rack
    uptime_commitment: 99.95
  - id: exadata-cloud-half-rack
    name: Exadata Cloud Infrastructure - Half Rack
    uptime_commitment: 99.95
  - id: exadata-cloud-full-rack
    name: Exadata Cloud Infrastructure - Full Rack
    uptime_commitment: 99.95
  - id: oci-ai-services
    name: Oracle Cloud Infrastructure - AI Services
    uptime_commitment: 99.9
  - id: oci-iam-standard
    name: Oracle Cloud Infrastructure Identity and Access Management - Standard
    uptime_commitment: 99.95
  - id: oci-iam-premium
    name: Oracle Cloud Infrastructure Identity and Access Management - Premium
    uptime_commitment: 99.95
  - id: oci-health-checks
    name: Oracle Cloud Infrastructure - Health Checks
    uptime_commitment: 99.9
  - id: oci-document-understanding
    name: Oracle Cloud Infrastructure - AI Services - Document Understanding
    uptime_commitment: 99.9
  - id: oracle-big-data-service-ocpu
    name: Oracle Big Data Service - OCPU Per Hour
    uptime_commitment: 99.9
  - id: oci-streaming
    name: Oracle Cloud Infrastructure - Streaming
    uptime_commitment: 99.95
  - id: oci-data-science
    name: Oracle Cloud Infrastructure - Data Science
    uptime_commitment: 99.9
  - id: media-services-standard-h264
    name: Media Services - Media Flow - Standard - H264
    uptime_commitment: 99.9
  - id: media-services-speed
    name: Media Services - Media Flow - Speed
    uptime_commitment: 99.9
  - id: media-services-quality
    name: Media Services - Media Flow - Quality
    uptime_commitment: 99.9
  - id: mysql-database-aws-storage
    name: MySQL Database - AWS - Storage
    uptime_commitment: 99.9
  - id: oci-queue
    name: Oracle Cloud Infrastructure Queue
    uptime_commitment: 99.9
  - id: oracle-adw-serverless
    name: Oracle Autonomous Data Warehouse - Serverless
    uptime_commitment: 99.95
  - id: oracle-atp-serverless
    name: Oracle Autonomous Transaction Processing - Serverless
    uptime_commitment: 99.95
  - id: oracle-adw-dedicated
    name: Oracle Autonomous Data Warehouse - Dedicated
    uptime_commitment: 99.95
  - id: oracle-adw-storage
    name: Oracle Autonomous Data Warehouse - Storage
    uptime_commitment: 99.95
  - id: oci-api-gateway
    name: Oracle Cloud Infrastructure - API Gateway
    uptime_commitment: 99.95
  - id: oci-events
    name: Oracle Cloud Infrastructure - Events
    uptime_commitment: 99.9
  - id: oci-language-nlp
    name: Oracle Cloud Infrastructure - Language - NLP
    uptime_commitment: 99.9
  - id: oci-language-translation
    name: Oracle Cloud Infrastructure - Language - Translation
    uptime_commitment: 99.9
  - id: mysql-heatwave-aws-node
    name: MySQL HeatWave - AWS - HeatWave Node
    uptime_commitment: 99.9
  - id: mysql-database-aws-ecpu
    name: MySQL Database - AWS - ECPU
    uptime_commitment: 99.9
  - id: oracle-access-governance-standard
    name: Oracle Access Governance - Standard
    uptime_commitment: 99.9
  - id: oracle-access-governance-premium
    name: Oracle Access Governance - Premium
    uptime_commitment: 99.9
  - id: oracle-access-governance-enterprise
    name: Oracle Access Governance - Enterprise
    uptime_commitment: 99.9
  - id: oracle-base-database-arm-standard
    name: Oracle Base Database Service on Arm - Standard
    uptime_commitment: 99.9
  - id: oracle-base-database-arm-enterprise
    name: Oracle Base Database Service on Arm - Enterprise
    uptime_commitment: 99.9
  - id: oracle-base-database-arm-high-performance
    name: Oracle Base Database Service on Arm - High Performance
    uptime_commitment: 99.9
  - id: oracle-base-database-arm-extreme-performance
    name: Oracle Base Database Service on Arm - Extreme Performance
    uptime_commitment: 99.9
  - id: oci-notifications
    name: Oracle Cloud Infrastructure - Notifications
    uptime_commitment: 99.9
  - id: oci-functions
    name: Oracle Cloud Infrastructure - Functions
    uptime_commitment: 99.95
  - id: oci-oke
    name: Oracle Cloud Infrastructure - Container Engine for Kubernetes
    uptime_commitment: 99.95
  - id: oci-database-block-volume
    name: Oracle Cloud Infrastructure Database - Block Volume
    uptime_commitment: 99.99
  - id: oci-database-object-storage
    name: Oracle Cloud Infrastructure Database - Object Storage
    uptime_commitment: 99.9
  - id: oracle-globally-distributed-adb-standard
    name: Oracle Globally Distributed Autonomous Database - Standard
    uptime_commitment: 99.95
  - id: oracle-globally-distributed-adb-premium
    name: Oracle Globally Distributed Autonomous Database - Premium
    uptime_commitment: 99.995
  - id: oracle-ajd-serverless
    name: Oracle Autonomous JSON Database - Serverless
    uptime_commitment: 99.95
  - id: oracle-apex
    name: Oracle APEX Application Development
    uptime_commitment: 99.9
---

OCI is a Cloud Infrastructure provider. See the official SLA at [https://www.oracle.com/cloud/sla/](https://www.oracle.com/cloud/sla/). The authoritative terms are in the [Oracle PaaS and IaaS Public Cloud Services Pillar Document (PDF)](https://www.oracle.com/contracts/docs/paas_iaas_pub_cld_srvs_pillar_4021422.pdf).

<!-- Add human-readable notes about OCI's SLA nuances here. -->
