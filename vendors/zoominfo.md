---
title: ZoomInfo
slug: zoominfo
vendor_name: ZoomInfo
legal_entity: ZoomInfo Technologies LLC
category: Marketing & Analytics
website: https://www.zoominfo.com
scope: global
sla_url: https://www.zoominfo.com/legal/ltc
last_verified: '2026-06-25'
last_updated: '2026-06-25'
uptime_commitment: 99.9
has_automatic_credits: false
min_plan_for_sla: paid
needs_review: false
credit_note: 'Verified against ZoomInfo License Terms and Conditions (zoominfo.com/legal/ltc; all ZoomInfo legal pages return HTTP 403 to direct fetch, verbatim text indexed by search engines). Uptime verbatim: "ZoomInfo guarantees that the ZoomInfo Technology will be available at least 99.9% of the time in a given calendar month." NOTE: Earlier version (December 20, 2021) measured on a weekly basis; current LTC measures per calendar month. Remedy structure verbatim: "In the event that system availability falls below the availability guarantee, Licensee may provide notice to ZoomInfo, and if availability again falls below guaranteed levels within 3 months of such notice, Licensee may terminate this Agreement upon notice to ZoomInfo and shall be entitled to a prorated refund of any prepaid Subscription Fees applicable to periods after the date of such termination." CRITICAL: Remedy is TERMINATION + PRORATED REFUND, not service credits. No tiered credit table exists. Sole remedy verbatim: "LICENSEE''S SOLE AND EXCLUSIVE REMEDY FOR ANY UNCURED BREACH BY ZOOMINFO OF ITS OBLIGATIONS UNDER THIS AGREEMENT IS TERMINATION BY WRITTEN NOTICE TO ZOOMINFO, AND REFUND OF A PRORATED PORTION OF THE SUBSCRIPTION FEES THAT LICENSEE HAS PAID." [VERBATIM, capitalized in original] Claim mechanism: two-strike system — (1) Licensee provides written notice after first breach; (2) availability must fall below guaranteed levels again within 3 months to trigger termination right. No fixed calendar-day deadline. Exclusions verbatim: "Planned outages for system maintenance, outages caused by factors outside of ZoomInfo''s reasonable control, and intermittent outages for a period of less than five minutes shall be excluded from the foregoing uptime calculation." Data accuracy sole remedy verbatim: "if Licensee notifies ZoomInfo that the Licensed Materials'' contact data is inaccurate...Licensee''s sole and exclusive remedy for inaccurate data shall be [prorated refund for remaining subscription period after termination date]." Aggregate liability cap verbatim: "ZoomInfo''s maximum liability to Licensee shall be the amounts actually paid to ZoomInfo by Licensee under the Agreement in the twelve months preceding the event." Legal entities: ZoomInfo Technologies LLC (Delaware LLC, November 1, 2018; 805 Broadway St Ste 900, Vancouver, WA 98660-3506); public holding company ZoomInfo Technologies Inc. (Delaware corporation, November 14, 2019).'
credit_policy:
  remedy_type: termination_with_refund
  calculation_type: pro_rated
claim_process:
  submission_method: Written notice
  required_evidence:
    - Written notice to ZoomInfo after first availability breach
    - Second breach must occur within 3 months of initial notice to trigger termination right
global_exclusions:
  - Planned maintenance windows
  - Force majeure or factors outside ZoomInfo control
  - Intermittent outages less than 5 minutes
  - Remedy is termination + prorated refund only, not service credits
  - Two-strike mechanism — second breach within 3 months required to exercise remedy
support_tiers:
  - name: Standard
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
  - id: zoominfo-platform
    name: ZoomInfo Sales Intelligence Platform
    category: Marketing & Analytics
    description: B2B intelligence and data platform with company/contact data, intent signals, and sales workflows
    uptime_commitment: 99.9
    sla_eligible: true
    source_url: https://www.zoominfo.com/legal/ltc
---

ZoomInfo (ZoomInfo Technologies LLC, Delaware; Vancouver, WA) is a B2B intelligence and data platform. The SLA guarantees 99.9% monthly availability, but the remedy is unusual: it is not a service credit — it is a prorated refund triggered only after a two-strike mechanism. Licensees must first give written notice of a breach; if availability falls below 99.9% again within 3 months, the Licensee may terminate and receive a prorated refund of prepaid fees. Intermittent outages under 5 minutes are excluded from the uptime calculation.
