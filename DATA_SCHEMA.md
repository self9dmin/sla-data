# SLA.directory, Data Schema Specification

> **Version**: 1.0.0
> **Status**: Draft
> **Last updated**: 2026-03-03

---

## Overview

Each vendor in SLA.directory is represented by a single YAML file in `content/vendors/`. This document specifies the complete schema for these files.

### Design Principles

1. **Source URLs are mandatory**, Every SLA claim must be verifiable
2. **Normalize for comparison**, Key metrics use consistent types and units
3. **Vendor-level defaults, service-level overrides**, Reduce redundancy
4. **Comments welcome**, YAML supports inline documentation of SLA nuances
5. **Flat where possible**, Minimize nesting to keep diffs readable

---

## Complete Schema

### File Naming Convention

```
content/vendors/{slug}.yaml
```

- `slug` must be lowercase alphanumeric with hyphens only
- Must match the `slug` field inside the file
- Examples: `aws.yaml`, `google-cloud.yaml`, `digital-ocean.yaml`

### Top-Level Fields

```yaml
# ============================================================
# IDENTITY (required)
# ============================================================
slug: aws                           # URL-safe identifier [a-z0-9-]
name: Amazon Web Services            # Display name
vendor: Amazon                       # Parent company (if different from name)
website: https://aws.amazon.com      # Vendor homepage
category: cloud-infrastructure       # Primary category (see enum below)
tags:                                # Additional classification tags
  - iaas
  - paas
  - compute
  - storage
icon: aws                           # Simple Icons slug (simpleicons.org)

# ============================================================
# SLA DOCUMENTATION (required)
# ============================================================
sla_url: https://aws.amazon.com/legal/service-level-agreements/
sla_version: "2024-06-01"           # (optional) SLA document version/date
last_verified: 2026-03-01           # Date a human last verified this data
last_changed: 2025-11-15            # (optional) Date SLA terms last changed
status_page: https://health.aws.amazon.com/health/status

# ============================================================
# DEFAULT CREDIT POLICY (required)
# Applied to services that don't specify their own credit policy
# ============================================================
default_credit_policy:
  calculation: tiered                # tiered | proportional | flat | none
  remedy: credit                     # credit | refund | automatic | none
  max_credit_percent: 100            # Maximum credit as % of monthly fees
  automatic: false                   # Whether credits apply without filing a claim
  credit_tiers:                      # Must be ordered by uptime descending
    - below: 99.99                   # Uptime falls below this %
      credit: 10                     # Credit earned (% of monthly fees)
    - below: 99.0
      credit: 25
    - below: 95.0
      credit: 100

# ============================================================
# CLAIM PROCESS (required)
# ============================================================
claim_process:
  deadline_days: 30                  # Days to submit claim after incident
  deadline_basis: end_of_month       # See enum: incident_date | end_of_month | end_of_quarter | end_of_billing_cycle
  business_days: false               # Whether deadline is in business days
  method: support_ticket             # See enum: support_ticket | email | portal | api | account_manager
  url: https://console.aws.amazon.com/support/
  required_evidence:
    - Account ID
    - Affected resource identifiers
    - Incident timestamps (UTC)
    - Error logs or screenshots
  review_days: 10                    # (optional) Typical review timeline in business days
  credit_application: next_bill      # next_bill | account_balance | refund | manual

# ============================================================
# EXCLUSIONS (required)
# Common exclusions that apply to ALL services for this vendor
# ============================================================
exclusions:
  - Scheduled maintenance with prior notice
  - Force majeure events
  - Customer-initiated actions or misconfigurations
  - Free tier usage
  - Preview and beta services
  - Exceeding service quotas

# ============================================================
# SUPPORT TIERS (optional but recommended)
# Which plan levels include SLA coverage
# ============================================================
support_tiers:
  - name: Basic
    slug: basic
    price: Free
    sla_eligible: false
    response_time: null               # No guaranteed response
  - name: Business
    slug: business
    price: "$100/month"
    sla_eligible: true
    response_time: "< 1 hour"         # For critical issues
  - name: Enterprise
    slug: enterprise
    price: Custom
    sla_eligible: true
    response_time: "< 15 minutes"

# ============================================================
# SERVICES (required, at least one)
# Individual products/services with their own SLA terms
# ============================================================
services:
  - id: ec2
    name: Amazon EC2
    category: compute                 # Service-level category
    description: Virtual servers in the cloud
    sla_url: https://aws.amazon.com/ec2/sla/
    uptime: 99.99                     # Uptime commitment (%)
    uptime_scope: multi-az            # See enum: global | regional | multi-az | single-instance
    sla_eligible: true
    # (optional) Override default credit policy for this service
    credit_policy:
      credit_tiers:
        - below: 99.99
          credit: 10
        - below: 99.0
          credit: 25
        - below: 95.0
          credit: 100
    exclusions:                       # (optional) Service-specific exclusions
      - Single-AZ deployments
      - Spot instances

  - id: s3
    name: Amazon S3
    category: storage
    description: Object storage service
    sla_url: https://aws.amazon.com/s3/sla/
    uptime: 99.9
    sla_eligible: true

  - id: lambda
    name: AWS Lambda
    category: compute
    description: Serverless compute service
    sla_url: https://aws.amazon.com/lambda/sla/
    uptime: 99.95
    sla_eligible: true

# ============================================================
# NOTES (optional)
# Free-text notes about SLA nuances, gotchas, or context
# ============================================================
notes: |
  AWS SLAs are per-service, not account-wide. Most compute services
  require Multi-AZ deployment for the full SLA to apply. Single-AZ
  deployments typically have a lower or no uptime commitment.

  Credit claims must be submitted through AWS Support Center and
  require a Business or Enterprise support plan.
```

---

## Field Reference

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `slug` | string | Unique identifier, lowercase `[a-z0-9-]` |
| `name` | string | Human-readable vendor/product name |
| `website` | URL | Vendor homepage |
| `category` | enum | Primary category (see below) |
| `sla_url` | URL | Link to SLA documentation |
| `last_verified` | date | ISO 8601 date (`YYYY-MM-DD`) of last human verification |
| `default_credit_policy` | object | Default credit terms |
| `claim_process` | object | How to file an SLA claim |
| `exclusions` | string[] | List of SLA exclusions |
| `services` | object[] | At least one service entry |

### Optional Fields

| Field | Type | Description | Default |
|-------|------|-------------|---------|
| `vendor` | string | Parent company name | Same as `name` |
| `tags` | string[] | Additional classification | `[]` |
| `icon` | string | Simple Icons slug | `null` |
| `sla_version` | string | SLA document version/date | `null` |
| `last_changed` | date | When SLA terms last changed | `null` |
| `status_page` | URL | Vendor's status page | `null` |
| `support_tiers` | object[] | Support plan tiers | `[]` |
| `notes` | string | Free-text notes | `null` |

### Service Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique within vendor, `[a-z0-9-]` |
| `name` | string | Human-readable service name |
| `uptime` | float | Uptime commitment as percentage (0-100) |
| `sla_eligible` | boolean | Whether this service has SLA coverage |

### Service Optional Fields

| Field | Type | Description | Default |
|-------|------|-------------|---------|
| `category` | string | Service category | `null` |
| `description` | string | Brief description | `null` |
| `sla_url` | URL | Service-specific SLA URL | Inherits vendor `sla_url` |
| `uptime_scope` | enum | Scope of uptime guarantee | `global` |
| `credit_policy` | object | Override vendor default | Inherits `default_credit_policy` |
| `exclusions` | string[] | Service-specific exclusions | `[]` |
| `last_verified` | date | `YYYY-MM-DD` this service was individually re-verified. Set it when you re-check one service without re-verifying the whole vendor; it overrides the vendor's `last_verified` for this service's freshness. | Inherits vendor `last_verified` |

---

## Higher SLA tiers (optional)

Some vendors commit to a **stronger uptime SLA** on a specific plan, support subscription, or paid add-on (for example, Dynatrace commits to 99.95% on Enterprise Success and Support, versus 99.5% on standard support). The top-level `uptime_commitment` stays the **baseline** that applies by default; `sla_tiers` records the upgrades. List a tier only when the vendor's official SLA states a higher number; never infer one.

```yaml
sla_tiers:
  - name: Enterprise Success and Support      # required: the plan / tier / add-on name
    requirement: Active Enterprise Success and Support subscription   # what the customer must buy
    uptime_commitment: 99.95                   # required: the higher uptime % (0-100)
    max_credit_percent: 100                    # optional: credit cap if it differs from baseline
    source_url: https://...                    # the official SLA stating this tier
```

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | **Required.** The plan, support tier, or add-on that unlocks the higher SLA |
| `uptime_commitment` | float | **Required.** The higher uptime percentage (0-100) |
| `requirement` | string | What the customer must purchase or be on to get it |
| `max_credit_percent` | number | Credit cap for this tier, if it differs from the baseline |
| `source_url` | URL | The official document stating this tier's SLA |

---

## Support & Services (optional, complementary)

A separate layer from the SLA. The SLA is what the provider legally owes you in credits if uptime slips. The Support & Services layer describes what you can **buy** to get more help: faster support response targets, designated humans, architecture reviews, professional services, training. These are almost always **targets or entitlements**, not credit-backed SLAs. Capture them only when the vendor publishes them officially, and use `response_is_sla` to mark the rare case where a support response time actually carries a remedy.

```yaml
support:
  tiers:                                  # the vendor's named plan names
    - Standard Support
    - Enterprise Success and Support
  has_24x7: true                          # top tier offers 24x7 coverage
  fastest_response: "30 min"              # top-tier Sev1 / business-critical target
  response_is_sla: false                  # true ONLY if the response time carries a credit/remedy
  designated_contact: csm                 # none | csm | tam | team
  architecture_review: true               # available (paid or included)
  professional_services: true             # SOW-based engagements
  success_program: true                   # named customer-success offering
  training: false                         # paid or included training/enablement
  pricing: custom                         # included | flat | percent_of_spend | custom
  source_url: https://...                 # the official support/plans page
  note: |                                 # one-paragraph explanation, especially what is NOT contractual
    Enterprise Success and Support adds 24x7, priority response targets, a
    success manager, and config reviews. Deeper architecture work is separate
    professional services. Response times are targets, not credit-backed.
```

| Field | Type | Description |
|-------|------|-------------|
| `tiers` | string[] | Named support plans, in order from base to top |
| `has_24x7` | boolean | True if the top tier offers 24x7 coverage |
| `fastest_response` | string | Verbatim top-tier critical-case response (e.g. "15 min") |
| `response_is_sla` | boolean | True ONLY if the response time carries a credit/remedy. Default false. |
| `designated_contact` | enum | `none` / `csm` / `tam` / `team` — top tier's named contact |
| `architecture_review` | boolean | Architecture / Well-Architected review available |
| `professional_services` | boolean | SOW-based engagements (migrations, optimization) |
| `success_program` | boolean | Customer-success program at any tier |
| `training` | boolean | Paid or included training/enablement |
| `pricing` | enum | `included` / `flat` / `percent_of_spend` / `custom` |
| `source_url` | URL | Official support page |
| `note` | string | One paragraph; flag the contractual line clearly |

---

## Enumerated Values

### Categories

```yaml
categories:
  - cloud-infrastructure    # AWS, Azure, GCP, DigitalOcean
  - saas                    # Salesforce, HubSpot, Workday
  - developer-tools         # GitHub, GitLab, Atlassian
  - payments                # Stripe, PayPal, Square
  - communication           # Twilio, Slack, Zoom
  - cdn-edge                # Cloudflare, Fastly, Akamai
  - monitoring              # Datadog, New Relic, PagerDuty
  - security                # Okta, CrowdStrike, Zscaler
  - database                # MongoDB Atlas, Snowflake, Supabase
  - ai-ml                   # OpenAI, Anthropic, Google AI
  - analytics               # Amplitude, Mixpanel, Segment
  - email                   # SendGrid, Mailgun, Postmark
  - dns                     # Cloudflare DNS, Route 53, NS1
  - storage                 # S3, GCS, Backblaze B2
  - networking              # VPN, SD-WAN, load balancing
  - collaboration           # Notion, Confluence, Miro
  - crm                     # Salesforce, HubSpot CRM
  - hr                      # BambooHR, Workday, ADP
  - erp                     # SAP, Oracle, NetSuite
  - other                   # Catch-all
```

### Credit Calculation Types

| Value | Description |
|-------|-------------|
| `tiered` | Credit % depends on how far below the SLA threshold |
| `proportional` | Credit proportional to downtime minutes |
| `flat` | Fixed credit amount regardless of severity |
| `none` | No financial remedy defined |

### Remedy Types

| Value | Description |
|-------|-------------|
| `credit` | Service credit applied to future bills |
| `refund` | Cash refund to payment method |
| `automatic` | Credits applied automatically without claim |
| `none` | No financial remedy |

### Deadline Basis

| Value | Description |
|-------|-------------|
| `incident_date` | Days counted from the incident date |
| `end_of_month` | Days counted from end of calendar month of incident |
| `end_of_quarter` | Days counted from end of quarter |
| `end_of_billing_cycle` | Days counted from end of billing cycle |

### Claim Submission Methods

| Value | Description |
|-------|-------------|
| `support_ticket` | Via vendor's support ticketing system |
| `email` | Via email to support address |
| `portal` | Via a dedicated claims portal |
| `api` | Via API call |
| `account_manager` | Via assigned account manager |

### Uptime Scope

| Value | Description |
|-------|-------------|
| `global` | Applies globally across all regions |
| `regional` | Per-region uptime measurement |
| `multi-az` | Requires multi-availability-zone deployment |
| `single-instance` | Applies to individual instances |

### Verification Status (computed, not in data file)

| Value | Description |
|-------|-------------|
| `verified` | Verified within the last 6 months |
| `stale` | Last verified 6-12 months ago |
| `unverified` | Last verified over 12 months ago or never |

---

## Validation Rules

These rules are enforced by CI on every PR:

### Structural Rules

1. File must be valid YAML
2. `slug` must match filename (without `.yaml` extension)
3. `slug` must match pattern `^[a-z0-9][a-z0-9-]*[a-z0-9]$`
4. `category` must be one of the enumerated values
5. All URLs must be valid format (https preferred)
6. `last_verified` must be a valid ISO 8601 date, not in the future
7. At least one service must be defined

### Data Quality Rules

8. `uptime` must be between 0 and 100 (inclusive)
9. `uptime` should have at most 4 decimal places
10. `credit_tiers` must be ordered by `below` value descending
11. `credit` values must be between 0 and 100
12. `deadline_days` must be a positive integer
13. `max_credit_percent` must be between 0 and 100
14. No duplicate `id` values within a vendor's services
15. No duplicate `slug` values across all vendor files

### Source Verification Rules

16. `sla_url` must return HTTP 200 (checked weekly, not on every PR)
17. `status_page` URL must return HTTP 200 (if provided)

---

## Migration Mapping from OpenClause

The following table maps OpenClause JSON fields to the new YAML schema:

| OpenClause Field | SLA.directory Field | Notes |
|-----------------|--------------------|----|
| `slug` | `slug` | Direct mapping |
| `vendor_name` | `name` | Renamed for clarity |
| `product_name` | `vendor` | Now means parent company |
| `category` | `category` | Mapped to new enum values |
| `website` | `website` | Direct mapping |
| `lastUpdated` | `last_verified` | Renamed |
| `slaDocumentation.url` | `sla_url` | Flattened |
| `slaDocumentation.lastVerified` | `last_verified` | Merged into single field |
| `defaultCreditPolicy.calculationType` | `default_credit_policy.calculation` | Shortened |
| `defaultCreditPolicy.remedyType` | `default_credit_policy.remedy` | Shortened |
| `defaultCreditPolicy.maxCreditPercent` | `default_credit_policy.max_credit_percent` | Snake case |
| `defaultCreditPolicy.creditTiers[].uptimeBelow` | `default_credit_policy.credit_tiers[].below` | Shortened |
| `defaultCreditPolicy.creditTiers[].creditPercent` | `default_credit_policy.credit_tiers[].credit` | Shortened |
| `claimProcess.deadlines[0].days` | `claim_process.deadline_days` | Flattened (single deadline) |
| `claimProcess.deadlines[0].anchorPoint` | `claim_process.deadline_basis` | Renamed |
| `claimProcess.deadlines[0].businessDays` | `claim_process.business_days` | Direct mapping |
| `claimProcess.submissionMethod` | `claim_process.method` | Mapped to enum |
| `claimProcess.submissionUrl` | `claim_process.url` | Shortened |
| `claimProcess.requiredEvidence` | `claim_process.required_evidence` | Snake case |
| `claimProcess.reviewTimeline` | `claim_process.review_days` | Converted to integer |
| `claimProcess.creditApplication` | `claim_process.credit_application` | Mapped to enum |
| `globalExclusions` | `exclusions` | Shortened |
| `supportTiers[].name` | `support_tiers[].name` | Direct mapping |
| `supportTiers[].slaEligible` | `support_tiers[].sla_eligible` | Snake case |
| `services[].id` | `services[].id` | Direct mapping |
| `services[].name` | `services[].name` | Direct mapping |
| `services[].uptimeCommitment` | `services[].uptime` | Shortened |
| `services[].slaEligible` | `services[].sla_eligible` | Snake case |
| `statusgator` | *(dropped)* | Monitoring integration not needed |
| `statusgatorComponents` | *(dropped)* | Monitoring integration not needed |
| `incidentKeywords` | *(dropped)* | Monitoring integration not needed |
| `regionPattern` | *(dropped)* | Over-engineered for registry |
| `regions` | *(dropped)* | May revisit in Phase 3 |
| `aiFeatureExclusions` | `notes` | Converted to free text |

---

## Example Files

See `_data/sample/` for complete examples:

- `aws-ec2.yaml`, Complex cloud provider with many services and regional SLAs
- `salesforce.yaml`, Enterprise SaaS with multiple cloud products
- `github.yaml`, Developer tools with tier-gated SLA
- `cloudflare.yaml`, CDN/edge provider with 100% uptime commitments
- `stripe.yaml`, Payment platform with high uptime guarantees
