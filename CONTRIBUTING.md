# Contributing

Thank you for helping keep SLA.directory accurate. **You do not need to know git, fork the repo, or open a pull request.**

## How to contribute

Open an issue using one of the web forms:

- **[Suggest a correction](../../issues/new?template=suggest-correction.yml)** to fix or update a vendor that's already here.
- **[Add a vendor](../../issues/new?template=add-vendor.yml)** to request a new vendor.

A maintainer verifies the submission against the official source and applies it. That's it.

## What makes a good submission

- **Cite an official source.** The vendor's own SLA or legal page (e.g. `https://vendor.com/legal/sla`), not a blog post or third-party summary.
- **Be specific.** "Uptime should be 99.95% for multi-AZ per section 2 of the EC2 SLA" beats "uptime is wrong."
- **Per-service matters.** Many platforms (AWS, Azure, GCP, and others) publish a separate SLA per service. If a single service is off, say which one.

## Data model

Each vendor is one Markdown file under [`vendors/`](vendors/) with YAML front matter. The full field reference (uptime, credit policy, claim process, per-service SLAs, `credit_unit`, and more) is in [`DATA_SCHEMA.md`](DATA_SCHEMA.md).

## License

By contributing, you agree your contribution is released under **[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)**.
