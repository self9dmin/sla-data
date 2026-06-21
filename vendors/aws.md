---
title: AWS
slug: aws
vendor_name: AWS
legal_entity: Amazon Web Services, Inc.
category: Cloud Infrastructure
website: https://aws.amazon.com
scope: regional
regions:
  - code: us-east-1
    name: US East (N. Virginia)
    continent: americas
    popular: true
  - code: us-east-2
    name: US East (Ohio)
    continent: americas
  - code: us-west-1
    name: US West (N. California)
    continent: americas
  - code: us-west-2
    name: US West (Oregon)
    continent: americas
    popular: true
  - code: eu-west-1
    name: Europe (Ireland)
    continent: europe
    popular: true
  - code: eu-west-2
    name: Europe (London)
    continent: europe
  - code: eu-west-3
    name: Europe (Paris)
    continent: europe
  - code: eu-central-1
    name: Europe (Frankfurt)
    continent: europe
    popular: true
  - code: eu-north-1
    name: Europe (Stockholm)
    continent: europe
  - code: ap-southeast-1
    name: Asia Pacific (Singapore)
    continent: asia-pacific
    popular: true
  - code: ap-southeast-2
    name: Asia Pacific (Sydney)
    continent: asia-pacific
  - code: ap-northeast-1
    name: Asia Pacific (Tokyo)
    continent: asia-pacific
    popular: true
  - code: ap-northeast-2
    name: Asia Pacific (Seoul)
    continent: asia-pacific
  - code: ap-northeast-3
    name: Asia Pacific (Osaka)
    continent: asia-pacific
  - code: ap-south-1
    name: Asia Pacific (Mumbai)
    continent: asia-pacific
  - code: sa-east-1
    name: South America (Sao Paulo)
    continent: americas
  - code: ca-central-1
    name: Canada (Central)
    continent: americas
  - code: me-south-1
    name: Middle East (Bahrain)
    continent: middle-east
  - code: af-south-1
    name: Africa (Cape Town)
    continent: africa
region_pattern: \b(us-east-[12]|us-west-[12]|eu-west-[123]|eu-central-1|eu-north-1|ap-southeast-[12]|ap-northeast-[123]|ap-south-1|sa-east-1|ca-central-1|me-south-1|af-south-1|ap-east-1|eu-south-1|me-central-1|ap-south-2|ap-southeast-3|eu-central-2|eu-south-2|il-central-1)\b
sla_url: https://aws.amazon.com/legal/service-level-agreements/
last_verified: '2026-06-19'
last_updated: '2026-06-19'
needs_review: true
review_note: >-
  AWS has no single global uptime number; top-level fields are representative of
  the EC2/Compute region-level SLA (99.99%) and other services differ, see
  services[] for per-service values and sources.
uptime_commitment: 99.99
max_credit_percent: 100
claim_deadline_days: 30
has_automatic_credits: false
min_plan_for_sla: business
credit_policy:
  calculation_type: tiered
  remedy_type: credit
  max_credit_percent: 100
  credit_tiers:
    - uptime_below: 99.99
      credit_percent: 10
    - uptime_below: 99
      credit_percent: 30
    - uptime_below: 95
      credit_percent: 100
claim_process:
  deadlines:
    - type: submission
      days: 30
      business_days: false
      anchor_point: end_of_second_billing_cycle
      description: Claim must be received by the end of the second billing cycle after the incident occurred (billing-cycle anchor, not a fixed 30 days)
  submission_method: AWS Support Center
  submission_url: https://console.aws.amazon.com/support/
  required_evidence:
    - AWS Account ID
    - Affected resource ARNs
    - Incident timestamps (UTC)
    - Error logs or screenshots
  review_timeline: 5-10 business days
  credit_application: Applied to next billing cycle
global_exclusions:
  - Scheduled maintenance with prior notice
  - Force majeure events
  - Customer-initiated actions or misconfigurations
  - Free tier usage
  - Preview and beta services
  - Exceeding service quotas
support_tiers:
  - name: Basic
    slug: basic
    price_model: Free
    sla_eligible: false
    claim_assistance: false
    availability: None
    channels:
      - Documentation
  - name: Developer
    slug: developer
    price_model: $29/month
    sla_eligible: false
    claim_assistance: false
    availability: Business hours
    channels:
      - Email
    response_times:
      general: < 24 hours
      systemImpaired: < 12 hours
  - name: Business
    slug: business
    price_model: Greater of $100/month or 10% of AWS charges
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
      - Chat
    response_times:
      general: < 24 hours
      systemImpaired: < 12 hours
      productionImpaired: < 4 hours
      productionDown: < 1 hour
    features:
      trustedAdvisor: true
  - name: Enterprise
    slug: enterprise
    price_model: Greater of $15,000/month or custom
    sla_eligible: true
    claim_assistance: true
    availability: 24/7
    channels:
      - Email
      - Phone
      - Chat
      - TAM
      - Slack
    response_times:
      businessCritical: < 15 minutes
      productionDown: < 1 hour
      productionImpaired: < 4 hours
      systemImpaired: < 12 hours
    features:
      tam: Dedicated
      concierge: true
services:
  - id: ec2
    name: Amazon EC2
    category: Compute
    description: Virtual servers in the cloud
    uptime_commitment: 99.99
    sla_eligible: true
    source_url: https://aws.amazon.com/ec2/sla/
  - id: s3
    name: Amazon S3
    category: Storage
    description: Object storage service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://aws.amazon.com/s3/sla/
  - id: lambda
    name: AWS Lambda
    category: Compute
    description: Serverless compute service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://aws.amazon.com/lambda/sla/
  - id: rds
    name: Amazon RDS
    category: Database
    description: Managed relational database service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://aws.amazon.com/rds/sla/
  - id: dynamodb
    name: Amazon DynamoDB
    category: Database
    description: Managed NoSQL database service
    uptime_commitment: 99.999
    sla_eligible: true
    source_url: https://aws.amazon.com/dynamodb/sla/
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
  - id: cloudfront
    name: Amazon CloudFront
    category: CDN
    description: Content delivery network
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://aws.amazon.com/cloudfront/sla/
  - id: route53
    name: Amazon Route 53
    category: DNS
    description: Scalable DNS and domain registration
    uptime_commitment: 100
    sla_eligible: true
    source_url: https://aws.amazon.com/route53/sla/
    credit_policy:
      calculation_type: tiered
      max_credit_percent: 25
      credit_tiers:
        - uptime_below: 100
          credit_percent: 25
  - id: eks
    name: Amazon EKS
    category: Containers
    description: Managed Kubernetes service
    uptime_commitment: 99.95
    sla_eligible: true
    source_url: https://aws.amazon.com/eks/sla/
  - id: sqs
    name: Amazon SQS
    category: Messaging
    description: Managed message queue service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://aws.amazon.com/messaging/sla/
  - id: sns
    name: Amazon SNS
    category: Messaging
    description: Managed notification service
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://aws.amazon.com/messaging/sla/
  - id: aurora
    name: Amazon Aurora
    uptime_commitment: 99.99
  - id: api-gateway
    name: Amazon API Gateway
    uptime_commitment: 99.95
  - id: ecs
    name: Amazon ECS
    uptime_commitment: 99.99
  - id: fargate
    name: AWS Fargate
    uptime_commitment: 99.99
  - id: kinesis-streams
    name: Amazon Kinesis Data Streams
    uptime_commitment: 99.9
  - id: redshift
    name: Amazon Redshift
    uptime_commitment: 99.9
  - id: elasticache
    name: Amazon ElastiCache
    uptime_commitment: 99.9
  - id: opensearch
    name: Amazon OpenSearch Service
    uptime_commitment: 99.9
  - id: bedrock
    name: Amazon Bedrock
    uptime_commitment: 99.9
  - id: sagemaker
    name: Amazon SageMaker
    uptime_commitment: 99.9
  - id: cognito
    name: Amazon Cognito
    uptime_commitment: 99.9
  - id: step-functions
    name: AWS Step Functions
    uptime_commitment: 99.9
  - id: eventbridge
    name: Amazon EventBridge
    uptime_commitment: 99.99
  - id: secrets-manager
    name: AWS Secrets Manager
    uptime_commitment: 99.9
  - id: ssm-parameter-store
    name: AWS Systems Manager Parameter Store
    uptime_commitment: 99.9
  - id: vpc
    name: Amazon VPC
    uptime_commitment: 99.99
  - id: direct-connect
    name: AWS Direct Connect
    uptime_commitment: 99.99
  - id: elb
    name: Elastic Load Balancing
    uptime_commitment: 99.99
  - id: cloudwatch
    name: Amazon CloudWatch
    uptime_commitment: 99.9
  - id: waf
    name: AWS WAF
    uptime_commitment: 99.95
  - id: shield-advanced
    name: AWS Shield Advanced
    uptime_commitment: 99.99
  - id: ebs
    name: Amazon EBS
    uptime_commitment: 99.99
  - id: efs
    name: Amazon EFS
    uptime_commitment: 99.99
  - id: app-runner
    name: AWS App Runner
    uptime_commitment: 99.95
  - id: amplify-hosting
    name: AWS Amplify Hosting
    uptime_commitment: 99.95
  - id: msk
    name: Amazon MSK
    uptime_commitment: 99.9
  - id: mq
    name: Amazon MQ
    uptime_commitment: 99.9
  - id: documentdb
    name: Amazon DocumentDB
    uptime_commitment: 99.99
  - id: neptune
    name: Amazon Neptune
    uptime_commitment: 99.99
  - id: keyspaces
    name: Amazon Keyspaces
    uptime_commitment: 99.99
  - id: qldb
    name: Amazon QLDB
    uptime_commitment: 99.9
  - id: timestream
    name: Amazon Timestream
    uptime_commitment: 99.99
  - id: backup
    name: AWS Backup
    uptime_commitment: 99.9
  - id: transfer-family
    name: AWS Transfer Family
    uptime_commitment: 99.9
  - id: connect
    name: Amazon Connect
    uptime_commitment: 99.99
  - id: lex
    name: Amazon Lex
    uptime_commitment: 99.9
  - id: polly
    name: Amazon Polly
    uptime_commitment: 99.9
  - id: transcribe
    name: Amazon Transcribe
    uptime_commitment: 99.9
  - id: translate
    name: Amazon Translate
    uptime_commitment: 99.9
  - id: rekognition
    name: Amazon Rekognition
    uptime_commitment: 99.9
  - id: textract
    name: Amazon Textract
    uptime_commitment: 99.9
  - id: comprehend
    name: Amazon Comprehend
    uptime_commitment: 99.9
  - id: codebuild
    name: AWS CodeBuild
    uptime_commitment: 99.9
  - id: codepipeline
    name: AWS CodePipeline
    uptime_commitment: 99.9
  - id: codedeploy
    name: AWS CodeDeploy
    uptime_commitment: 99.9
  - id: glue
    name: AWS Glue
    uptime_commitment: 99.9
  - id: athena
    name: Amazon Athena
    uptime_commitment: 99.9
  - id: quicksight
    name: Amazon QuickSight
    uptime_commitment: 99.9
  - id: appsync
    name: AWS AppSync
    uptime_commitment: 99.95
  - id: iot-core
    name: AWS IoT Core
    uptime_commitment: 99.9
  - id: acm
    name: AWS Certificate Manager
    uptime_commitment: 99.9
  - id: kms
    name: AWS KMS
    uptime_commitment: 99.999
---

AWS is a Cloud Infrastructure provider. See the official SLA at [https://aws.amazon.com/legal/service-level-agreements/](https://aws.amazon.com/legal/service-level-agreements/).

<!-- Add human-readable notes about AWS's SLA nuances here. -->
