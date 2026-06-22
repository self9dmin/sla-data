---
title: Azure
slug: azure
vendor_name: Azure
legal_entity: Microsoft Azure
category: Cloud Infrastructure
website: https://azure.microsoft.com/en-us/
scope: regional
regions:
  - code: eastus
    name: East US
    continent: americas
    popular: true
  - code: eastus2
    name: East US 2
    continent: americas
    popular: true
  - code: westus
    name: West US
    continent: americas
  - code: westus2
    name: West US 2
    continent: americas
    popular: true
  - code: westus3
    name: West US 3
    continent: americas
  - code: centralus
    name: Central US
    continent: americas
  - code: northcentralus
    name: North Central US
    continent: americas
  - code: southcentralus
    name: South Central US
    continent: americas
  - code: westcentralus
    name: West Central US
    continent: americas
  - code: canadacentral
    name: Canada Central
    continent: americas
  - code: canadaeast
    name: Canada East
    continent: americas
  - code: brazilsouth
    name: Brazil South
    continent: americas
  - code: northeurope
    name: North Europe (Ireland)
    continent: europe
    popular: true
  - code: westeurope
    name: West Europe (Netherlands)
    continent: europe
    popular: true
  - code: uksouth
    name: UK South
    continent: europe
    popular: true
  - code: ukwest
    name: UK West
    continent: europe
  - code: francecentral
    name: France Central
    continent: europe
  - code: germanywestcentral
    name: Germany West Central
    continent: europe
  - code: switzerlandnorth
    name: Switzerland North
    continent: europe
  - code: norwayeast
    name: Norway East
    continent: europe
  - code: swedencentral
    name: Sweden Central
    continent: europe
  - code: southeastasia
    name: Southeast Asia (Singapore)
    continent: asia-pacific
    popular: true
  - code: eastasia
    name: East Asia (Hong Kong)
    continent: asia-pacific
  - code: australiaeast
    name: Australia East
    continent: asia-pacific
    popular: true
  - code: australiasoutheast
    name: Australia Southeast
    continent: asia-pacific
  - code: japaneast
    name: Japan East
    continent: asia-pacific
    popular: true
  - code: japanwest
    name: Japan West
    continent: asia-pacific
  - code: koreacentral
    name: Korea Central
    continent: asia-pacific
  - code: centralindia
    name: Central India
    continent: asia-pacific
  - code: southafricanorth
    name: South Africa North
    continent: africa
  - code: uaenorth
    name: UAE North
    continent: middle-east
region_pattern: \b(eastus|eastus2|westus|westus2|westus3|centralus|northcentralus|southcentralus|westcentralus|canadacentral|canadaeast|brazilsouth|northeurope|westeurope|uksouth|ukwest|francecentral|francesouth|germanywestcentral|germanynorth|switzerlandnorth|switzerlandwest|norwayeast|norwaywest|swedencentral|southeastasia|eastasia|australiaeast|australiasoutheast|australiacentral|australiacentral2|japaneast|japanwest|koreacentral|koreasouth|southafricanorth|southafricawest|uaenorth|uaecentral|centralindia|westindia|southindia|qatarcentral|polandcentral|italynorth|israelcentral|mexicocentral)\b
sla_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
last_verified: '2025-12-20'
last_updated: '2026-06-19'
needs_review: true
uptime_commitment: 99.999
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: standard
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 10
    - uptime_below: 99.9
      credit_percent: 25
    - uptime_below: 99
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_calendar_month_of_failure
      description: Submit claim within 30 days of incident month end
  submission_method: Azure Support Portal
  submission_url: https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade
  required_evidence:
    - Azure Subscription ID
    - Affected resource IDs
    - Incident timestamps (UTC)
    - Error messages and logs
    - Description of impact
  review_timeline: 10-15 business days
  credit_application: Applied as credit to Azure bill
global_exclusions:
  - Scheduled maintenance with prior notice
  - Force majeure events
  - Customer-initiated actions
  - Preview/Beta services
  - Free tier services
  - Services outside supported regions
support_tiers:
  - name: Basic
    slug: basic
    price_model: Free
    sla_eligible: false
    claim_assistance: false
    availability: None
    channels:
      - Documentation
      - Forums
  - name: Developer
    slug: developer
    price_model: $29/month
    sla_eligible: false
    claim_assistance: false
    availability: Business hours
    channels:
      - Email
    response_times:
      general: < 8 hours
  - name: Standard
    slug: standard
    price_model: $100/month
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
    response_times:
      critical: < 1 hour
      high: < 4 hours
      moderate: < 8 hours
  - name: Professional Direct
    slug: professional-direct
    price_model: $1,000/month
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
      - ProDirect Manager
    response_times:
      critical: < 15 minutes
      high: < 2 hours
      moderate: < 4 hours
    features:
      tam: Pooled
  - name: Premier
    slug: premier
    price_model: Custom (starts ~$50,000/year)
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
      - TAM
      - Premier Portal
    response_times:
      critical: < 15 minutes
      high: < 2 hours
    features:
      tam: Dedicated
      onsite: true
services:
  - id: virtual-machines
    name: Azure Virtual Machines
    category: Compute
    description: Infrastructure-as-a-service VMs
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: blob-storage
    name: Azure Blob Storage
    category: Storage
    description: Object storage for unstructured data
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: sql-database
    name: Azure SQL Database
    category: Database
    description: Managed relational SQL database
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: cosmos-db
    name: Azure Cosmos DB
    category: Database
    description: Globally distributed NoSQL database
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
    credit_policy:
      calculation_type: tiered
      max_credit_percent: 100
      credit_tiers:
        - uptime_below: 99.999
          credit_percent: 10
        - uptime_below: 99.99
          credit_percent: 25
        - uptime_below: 99
          credit_percent: 100
  - id: functions
    name: Azure Functions
    category: Compute
    description: Serverless compute service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: kubernetes-service
    name: Azure Kubernetes Service
    category: Containers
    description: Managed Kubernetes service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: app-service
    name: Azure App Service
    category: Compute
    description: Managed web app hosting
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: cdn
    name: Azure CDN
    category: CDN
    description: Content delivery network
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: load-balancer
    name: Azure Load Balancer
    category: Networking
    description: Layer 4 load balancer
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: service-bus
    name: Azure Service Bus
    category: Messaging
    description: Enterprise message broker
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services
  - id: virtual-machines-zone
    name: Azure Virtual Machines (Zone Redundant Deployment)
    uptime_commitment: 99.99
  - id: virtual-machines
    name: Azure Virtual Machines (Non-Zone Redundant Deployment)
    uptime_commitment: 99.99
  - id: app-service-standard
    name: Azure App Service (Standard Tier)
    uptime_commitment: 99.9
  - id: app-service-enterprise
    name: Azure App Service (Enterprise Tier)
    uptime_commitment: 99.95
  - id: functions-consumption
    name: Azure Functions (Consumption Plan)
    uptime_commitment: 99.9
  - id: functions-premium
    name: Azure Functions (Dedicated/Premium/Flex)
    uptime_commitment: 99.95
  - id: spring-apps-standard
    name: Azure Spring Apps (Standard Tier)
    uptime_commitment: 99.9
  - id: spring-apps-enterprise
    name: Azure Spring Apps (Enterprise Tier)
    uptime_commitment: 99.95
  - id: lab-services
    name: Azure Lab Services
    uptime_commitment: 99.9
  - id: container-instances
    name: Azure Container Instances
    uptime_commitment: 99.9
  - id: key-vault
    name: Azure Key Vault
    uptime_commitment: 99.99
  - id: firewall-manager
    name: Azure Firewall Manager
    uptime_commitment: 99.99
  - id: ddos-protection-basic
    name: Azure DDoS Protection (Basic)
  - id: ddos-protection-standard
    name: Azure DDoS Protection Standard
    uptime_commitment: 99.99
  - id: bastion
    name: Azure Bastion
    uptime_commitment: 99.95
  - id: private-link
    name: Azure Private Link / Private Endpoints
    uptime_commitment: 99.99
  - id: monitor
    name: Azure Monitor
    uptime_commitment: 99.9
  - id: log-analytics
    name: Azure Log Analytics
    uptime_commitment: 99.9
  - id: application-insights
    name: Azure Application Insights
    uptime_commitment: 99.9
  - id: metrics-alerts
    name: Azure Metrics Alerts
    uptime_commitment: 99.9
  - id: event-hubs
    name: Azure Event Hubs
    uptime_commitment: 99.95
  - id: event-grid
    name: Azure Event Grid
    uptime_commitment: 99.99
  - id: aks-zone
    name: Azure Kubernetes Service (AKS) - Availability Zone Enabled
    uptime_commitment: 99.95
  - id: aks
    name: Azure Kubernetes Service (AKS) - Non-Availability Zone
    uptime_commitment: 99.9
  - id: aks-automatic-zone
    name: AKS Automatic Clusters - Availability Zone Enabled
    uptime_commitment: 99.95
  - id: aks-automatic
    name: AKS Automatic Clusters - Non-Availability Zone
    uptime_commitment: 99.9
  - id: aks-automatic-readiness
    name: AKS Automatic Clusters - Readiness SLA (Pod Start)
    uptime_commitment: 99.9
  - id: container-registry
    name: Azure Container Registry (ACR)
    uptime_commitment: 99.9
  - id: storage-lrs
    name: Azure Storage - Local Redundant Storage (LRS)
    uptime_commitment: 99.9
  - id: storage-zrs
    name: Azure Storage - Zone Redundant Storage (ZRS)
    uptime_commitment: 99.9
  - id: storage-grs
    name: Azure Storage - Geo-Redundant Storage (GRS)
    uptime_commitment: 99.9
  - id: storage-ra-grs
    name: Azure Storage - Read-Access GRS (RA-GRS)
    uptime_commitment: 99.9
  - id: storage-gzrs
    name: Azure Storage - Geo-Zone Redundant Storage (GZRS)
    uptime_commitment: 99.9
  - id: storage-ra-gzrs
    name: Azure Storage - Read-Access GZRS (RA-GZRS)
    uptime_commitment: 99.9
  - id: storage-priority-replication
    name: Azure Storage - Priority Replication (GRS/GZRS)
    uptime_commitment: 99.9
  - id: managed-disks
    name: Azure Managed Disks
    uptime_commitment: 99.9
  - id: sql-database-zone
    name: Azure SQL Database - Zone Redundant Deployment
    uptime_commitment: 99.995
  - id: sql-database
    name: Azure SQL Database - Non-Zonal Deployment
    uptime_commitment: 99.99
  - id: sql-database-basic-standard
    name: Azure SQL Database - Basic and Standard Tiers
    uptime_commitment: 99.99
  - id: sql-database-geo-replication
    name: Azure SQL Database - Active Geo-Replication
    uptime_commitment: 99.999
  - id: cosmosdb-postgresql
    name: Azure Cosmos DB for PostgreSQL - High Availability
    uptime_commitment: 99.99
  - id: cosmosdb-nosql
    name: Azure Cosmos DB for NoSQL
    uptime_commitment: 99.99
  - id: cosmosdb-mongodb
    name: Azure Cosmos DB for MongoDB
    uptime_commitment: 99.99
  - id: cosmosdb-cassandra
    name: Azure Cosmos DB for Apache Cassandra
    uptime_commitment: 99.99
  - id: cosmosdb-gremlin
    name: Azure Cosmos DB for Apache Gremlin
    uptime_commitment: 99.99
  - id: cosmosdb-table
    name: Azure Cosmos DB for Table
    uptime_commitment: 99.99
  - id: load-balancer
    name: Azure Load Balancer (Standard)
    uptime_commitment: 99.99
  - id: application-gateway
    name: Azure Application Gateway (v2)
    uptime_commitment: 99.95
  - id: virtual-network-manager
    name: Azure Virtual Network Manager
    uptime_commitment: 99.99
  - id: virtual-wan
    name: Azure Virtual WAN
    uptime_commitment: 99.95
  - id: firewall
    name: Azure Firewall
    uptime_commitment: 99.99
  - id: dns-private-resolver
    name: Azure DNS Private Resolver
    uptime_commitment: 99.99
  - id: front-door
    name: Azure Front Door (Standard and Premium)
    uptime_commitment: 99.99
  - id: traffic-manager
    name: Azure Traffic Manager
    uptime_commitment: 99.99
  - id: entra-domain-services
    name: Microsoft Entra Domain Services (Azure AD DS)
    uptime_commitment: 99.9
  - id: entra-external-id
    name: Microsoft Entra External ID
    uptime_commitment: 99.9
  - id: entra-verified-id
    name: Microsoft Entra Verified ID
    uptime_commitment: 99.9
  - id: entra-access-reviews
    name: Microsoft Entra ID Governance - Access Reviews
    uptime_commitment: 99.9
  - id: entra-lifecycle-workflows
    name: Microsoft Entra ID Governance - Lifecycle Workflows
    uptime_commitment: 99.9
  - id: graph-api-directory
    name: Microsoft Graph API - Directory Namespace Endpoints
    uptime_commitment: 99.9
  - id: authenticator-lite
    name: Microsoft Authenticator Lite (Brokered SSO Runtime)
    uptime_commitment: 99.9
  - id: logic-apps-consumption
    name: Azure Logic Apps - Consumption Tier
    uptime_commitment: 99.9
  - id: logic-apps-standard
    name: Azure Logic Apps - Standard Tier
    uptime_commitment: 99.95
  - id: api-management-developer
    name: Azure API Management - Developer Tier
  - id: api-management
    name: Azure API Management - Basic, Standard, Premium Tiers
    uptime_commitment: 99.95
  - id: integration-service-environment
    name: Azure Integration Service Environment (ISE)
    uptime_commitment: 99.9
  - id: automation-runbook
    name: Azure Automation - Runbook Execution
    uptime_commitment: 99.9
  - id: automation-dsc
    name: Azure Automation - DSC (Desired State Configuration)
    uptime_commitment: 99.9
  - id: azure-synapse-dedicated-sql
    name: Azure Synapse Analytics - Dedicated SQL Pools
    uptime_commitment: 99.9
  - id: azure-synapse-serverless-sql
    name: Azure Synapse Analytics - Serverless SQL Pools
    uptime_commitment: 99.9
  - id: azure-synapse-spark
    name: Azure Synapse Analytics - Spark Pools
    uptime_commitment: 99.9
  - id: azure-cognitive-services
    name: Azure Cognitive Services
    uptime_commitment: 99.9
  - id: azure-ai-search
    name: Azure AI Search
    uptime_commitment: 99.9
  - id: azure-ml-online-endpoints
    name: Azure Machine Learning - Online Endpoints
    uptime_commitment: 99.9
  - id: azure-ml-compute-clusters
    name: Azure Machine Learning - Compute Clusters
    uptime_commitment: 99.9
  - id: azure-databricks
    name: Azure Databricks
    uptime_commitment: 99.95
  - id: power-bi-embedded
    name: Power BI Embedded
    uptime_commitment: 99.9
  - id: azure-hdinsight
    name: Azure HDInsight
    uptime_commitment: 99.9
  - id: exchange-online
    name: Exchange Online
    uptime_commitment: 99.9
  - id: sharepoint-online
    name: SharePoint Online
    uptime_commitment: 99.9
  - id: onedrive-business
    name: OneDrive for Business
    uptime_commitment: 99.9
  - id: microsoft-teams
    name: Microsoft Teams
    uptime_commitment: 99.9
  - id: m365-apps
    name: Microsoft 365 Apps (Office Desktop Apps)
    uptime_commitment: 99.9
  - id: purview-dlp
    name: Microsoft Purview - Data Loss Prevention (DLP)
    uptime_commitment: 99.9
  - id: defender-office365
    name: Microsoft Defender for Office 365
    uptime_commitment: 99.9
  - id: intune
    name: Microsoft Intune
    uptime_commitment: 99.9
  - id: intune-suite
    name: Microsoft Intune Suite (Advanced Management Add-ons)
    uptime_commitment: 99.9
  - id: windows-autopatch
    name: Windows Autopatch
    uptime_commitment: 99.9
  - id: wufb-deployment
    name: Windows Update for Business Deployment Service
    uptime_commitment: 99.9
  - id: defender-endpoint
    name: Microsoft Defender for Endpoint
    uptime_commitment: 99.9
  - id: defender-vulnerability-mgmt
    name: Microsoft Defender Vulnerability Management
    uptime_commitment: 99.9
  - id: defender-cloud-apps
    name: Microsoft Defender for Cloud Apps
    uptime_commitment: 99.9
  - id: teams-phone
    name: Microsoft Teams Phone System
    uptime_commitment: 99.9
  - id: microsoft-bookings
    name: Microsoft Bookings
    uptime_commitment: 99.9
  - id: microsoft-whiteboard
    name: Microsoft Whiteboard
    uptime_commitment: 99.9
  - id: power-bi-premium-capacity
    name: Power BI Premium Capacity
    uptime_commitment: 99.9
  - id: power-apps
    name: Power Apps
    uptime_commitment: 99.9
  - id: power-automate
    name: Power Automate
    uptime_commitment: 99.9
  - id: power-virtual-agents
    name: Power Virtual Agents / Copilot Studio Bots
    uptime_commitment: 99.9
  - id: sharepoint-syntex
    name: SharePoint Syntex
    uptime_commitment: 99.9
  - id: microsoft-planner
    name: Microsoft Planner
  - id: microsoft-forms
    name: Microsoft Forms
  - id: microsoft-loop
    name: Microsoft Loop
  - id: microsoft-whiteboard-client
    name: Microsoft Whiteboard (Client Application)
  - id: microsoft-stream-sharepoint
    name: Microsoft Stream (on SharePoint)
  - id: microsoft-to-do
    name: Microsoft To Do
  - id: microsoft-lists
    name: Microsoft Lists
  - id: microsoft-sway
    name: Microsoft Sway
  - id: viva-engage
    name: Viva Engage (formerly Yammer)
  - id: viva-insights-personal
    name: Viva Insights (Personal Insights)
  - id: viva-topics
    name: Viva Topics
  - id: viva-learning
    name: Viva Learning
support:
  tiers:
    - "Developer"
    - "Standard"
    - "Professional Direct"
    - "Microsoft Unified"
  has_24x7: true
  fastest_response: "15 min"
  response_is_sla: false
  designated_contact: csm
  architecture_review: true
  professional_services: true
  success_program: true
  training: true
  pricing: percent_of_spend
  source_url: "https://azure.microsoft.com/support/plans/"
  note: "Microsoft Unified (custom, roughly percent-of-spend) adds a CSAM, a designated technical team for critical cases, a roughly 15-minute Azure-critical response target, and proactive assessments. Response times are targets, not credited."
---

Azure is a Cloud Infrastructure provider. See the official SLA at [https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services](https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services).

<!-- Add human-readable notes about Azure's SLA nuances here. -->
