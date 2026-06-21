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

Data health is checked automatically every month: a workflow flags broken SLA links and vendors not re-verified in 180 days, then tracks them in a single open issue labeled `data-health`.

## License

SLA data in this repository is licensed **[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)**: free to use with attribution to SLA.directory. See [`LICENSE`](LICENSE).

> SLA terms change. Always confirm against the vendor's official SLA before relying on this data for contractual or financial decisions.
