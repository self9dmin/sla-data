---
title: Alibaba Cloud
slug: alibaba-cloud
vendor_name: Alibaba Cloud
legal_entity: Alibaba Cloud
category: Cloud Infrastructure
website: https://www.alibabacloud.com
scope: global
sla_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: true
uptime_commitment: 99.975
max_credit_percent: 100
claim_deadline_days: 60
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.975
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
      anchor_point: calendar_month_end
      description: >-
        Claim may be filed from the sixth working day of the following calendar
        month and must be received within sixty (60) days after the last day of
        the calendar month in which the incident occurred
  submission_method: Ticket System
  submission_url: https://www.alibabacloud.com/support
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
  - id: alibaba-rds-multizone
    name: ApsaraDB RDS (Multi-Zone)
    category: Database
    description: HA Edition across 2+ zones (99.997% for 3+ zones)
    uptime_commitment: 99.995
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-rds-single
    name: ApsaraDB RDS (Single Zone)
    category: Database
    description: HA Edition in single zone
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-ack
    name: Container Service for Kubernetes (ACK)
    category: Compute
    description: HA clusters across multiple zones
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-disk
    name: Disk (Cloud Disks)
    category: Storage
    description: Block storage attached to ECS
    uptime_commitment: 99.995
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-ecs-multizone
    name: ECS (Multi-Zone)
    category: Compute
    description: Instances across multiple zones
    uptime_commitment: 99.995
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-ecs-single
    name: ECS (Single Instance)
    category: Compute
    description: Individual ECS instances
    uptime_commitment: 99.975
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-express-connect
    name: Express Connect
    category: Networking
    description: Dedicated physical connections
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-function-compute
    name: Function Compute
    category: Compute
    description: Serverless function execution
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-nat-gateway
    name: NAT Gateway
    category: Networking
    description: NAT Gateway services
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-oss
    name: Object Storage Service (OSS)
    category: Storage
    description: Standard/IA/Archive storage
    uptime_commitment: 99.995
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-polardb
    name: PolarDB
    category: Database
    description: Cloud-native relational database
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-privatelink
    name: PrivateLink
    category: Networking
    description: Private VPC connectivity
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-alb-nlb
    name: Server Load Balancer (ALB/NLB Multi-Zone)
    category: Networking
    description: Application and Network Load Balancers
    uptime_commitment: 99.995
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-clb
    name: Server Load Balancer (CLB Multi-Zone)
    category: Networking
    description: Classic Load Balancer
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: alibaba-vpn-gateway
    name: VPN Gateway
    category: Networking
    description: IPsec-VPN and SSL-VPN
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement
  - id: ecs-multi-zone
    name: Elastic Compute Service (ECS) - Multi-Zone
    uptime_commitment: 99.995
  - id: ecs-single
    name: Elastic Compute Service (ECS) - Single Instance
    uptime_commitment: 99.975
  - id: disk
    name: Elastic Block Storage (Cloud Disks)
    uptime_commitment: 99.995
  - id: rds-multi-zone-3
    name: ApsaraDB RDS - Multi-Zone (3+ zones)
    uptime_commitment: 99.997
  - id: rds-multi-zone-2
    name: ApsaraDB RDS - Multi-Zone (2 zones)
    uptime_commitment: 99.995
  - id: rds-single-zone
    name: ApsaraDB RDS - Single Zone
    uptime_commitment: 99.99
  - id: apsaradb-redis
    name: ApsaraDB for Redis
    uptime_commitment: 99.99
  - id: apsaradb-mongodb
    name: ApsaraDB for MongoDB
    uptime_commitment: 99.95
  - id: tablestore
    name: Tablestore
    uptime_commitment: 99.99
  - id: analyticdb-mysql
    name: AnalyticDB for MySQL
    uptime_commitment: 99.95
  - id: analyticdb-postgresql
    name: AnalyticDB for PostgreSQL
    uptime_commitment: 99.95
  - id: elasticsearch
    name: Elasticsearch
    uptime_commitment: 99.9
  - id: maxcompute
    name: MaxCompute
    uptime_commitment: 99.9
  - id: dataworks
    name: DataWorks
    uptime_commitment: 99.95
  - id: log-service
    name: Log Service
    uptime_commitment: 99.9
  - id: slb-alb-nlb
    name: Server Load Balancer (ALB/NLB) - Multi-Zone
    uptime_commitment: 99.995
  - id: slb-clb
    name: Server Load Balancer (CLB) - Multi-Zone
    uptime_commitment: 99.95
  - id: cdn
    name: CDN
    uptime_commitment: 99.9
  - id: mq-kafka
    name: Message Queue for Apache Kafka
    uptime_commitment: 99.95
  - id: mq-rocketmq
    name: Message Queue for RocketMQ
    uptime_commitment: 99.95
  - id: api-gateway
    name: API Gateway
    uptime_commitment: 99.95
  - id: eventbridge
    name: EventBridge
    uptime_commitment: 99.95
  - id: pai
    name: Machine Learning Platform for AI (PAI)
    uptime_commitment: 99.9
  - id: model-studio
    name: Model Studio
    uptime_commitment: 99.9
  - id: intelligent-speech
    name: Intelligent Speech Interaction
    uptime_commitment: 99.9
  - id: image-search
    name: Image Search
    uptime_commitment: 99.9
  - id: security-center
    name: Security Center
    uptime_commitment: 99.9
  - id: waf
    name: Web Application Firewall (WAF)
    uptime_commitment: 99.95
  - id: anti-ddos
    name: Anti-DDoS
    uptime_commitment: 99.95
  - id: kms
    name: Key Management Service (KMS)
    uptime_commitment: 99.9
  - id: ram
    name: Resource Access Management (RAM)
    uptime_commitment: 99.9
  - id: cloud-monitor
    name: Cloud Monitor
    uptime_commitment: 99.9
  - id: actiontrail
    name: ActionTrail
    uptime_commitment: 99.9
  - id: ros
    name: Resource Orchestration Service (ROS)
    uptime_commitment: 99.9
support:
  tiers:
    - "Basic"
    - "Developer"
    - "Business"
    - "Enterprise On-Ramp"
    - "Enterprise"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: tam
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://www.alibabacloud.com/help/en/after-sales-support/latest/pricing-overview"
  note: "Enterprise includes a TAM, 24/7, and architecture optimization; priced as a minimum or percentage of spend."
---

Alibaba Cloud is a Cloud Infrastructure provider. Alibaba Cloud publishes a separate SLA per product rather than a single canonical index; the representative Elastic Compute Service (ECS) SLA is at [https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement](https://www.alibabacloud.com/help/en/legal/latest/elastic-compute-service-service-level-agreement).

<!-- Add human-readable notes about Alibaba Cloud's SLA nuances here. -->
