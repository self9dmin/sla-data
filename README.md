# SLA.directory open SLA dataset

The community-maintained dataset of Service Level Agreement terms: uptime commitments, service credits, claim windows, and **per-service** SLAs for cloud, SaaS, and developer platforms. This is the open data behind **[sla.directory](https://sla.directory)**.

- **159 vendors**, each as one Markdown file with YAML front matter in [`vendors/`](vendors/).
- Field reference: [`DATA_SCHEMA.md`](DATA_SCHEMA.md).
- Every data point should cite an **official source** (the vendor's own SLA page).

## Contribute (no git required)

You don't need to know git or fork anything. Just open an issue with a short web form:

- **[Suggest a correction](../../issues/new?template=suggest-correction.yml)**: fix or update an existing vendor.
- **[Add a vendor](../../issues/new?template=add-vendor.yml)**: request a new one.

A maintainer reviews each submission, verifies the source, and applies it. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## How the data stays accurate

SLA pages move and terms change, so the dataset is kept honest by a mix of sourcing rules, community contributions, and automation:

1. **Official sourcing.** Every value should trace to the vendor's own SLA or legal page, recorded in `sla_url` (and per-service `source_url`). No third-party summaries.
2. **Verification dates.** Each vendor carries a `last_verified` date so you can see how current a record is.
3. **Automated data-health check.** A scheduled GitHub Action ([`.github/workflows/data-health.yml`](.github/workflows/data-health.yml)) runs on the 1st of each month (and on demand):
   - **Link rot:** every `sla_url`, per-service `source_url`, and related URL is fetched. Only a confirmed dead status (HTTP 404/410, or a persistent 5xx) counts as broken. Bot-protected pages that time out or return 403/429 are treated as "could not verify" and are not reported, so the signal stays free of false alarms.
   - **Freshness:** vendors not re-verified in 12 months are flagged for a re-check.
   - Findings are collected into a single tracking issue labeled [`data-health`](../../issues?q=label%3Adata-health). A maintainer triages it and re-verifies against the official source.
   - When nothing is flagged, the workflow comments and **closes the issue automatically**, so an open `data-health` issue always means there is real work to do.

The result: broken source links and year-old records surface on their own, get re-verified, and the tracking issue heals itself when the data is clean.

## License

SLA data in this repository is licensed **[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)**: free to use with attribution to SLA.directory. See [`LICENSE`](LICENSE).

> SLA terms change. Always confirm against the vendor's official SLA before relying on this data for contractual or financial decisions.
