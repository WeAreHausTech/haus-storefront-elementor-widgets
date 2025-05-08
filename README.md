# HausStorefrontElementorWidgets

This repository contains the custom Elementor widgets used in the Haus Storefront. These widgets are packaged and released as a Composer-compatible `.zip` archive for easy distribution and reuse.

---

## Local Testing

To use these Composer packages locally, replace the repository in `composer.json` for each package. For example:

```json
{
  "type": "path",
  "url": "../haus-storefront-elementor-widgets/libs/widgets-core",
  "options": {
    "symlink": true
  }
}
```

Then, include the package with the version in `composer.json`:

```json
"haus-storefront-elementor-widgets/add-to-cart-button": "1.0.1",
```

## 🚀 Releasing a New Version

To publish a new version of the widget package, run the following command:

```bash
yarn nx release --projects=widget
```

This will:

1. Bump the version number based on commit messages.
2. Create a new Git tag and update the release notes.
3. Trigger the GitHub Actions workflow for packaging and publishing.

---

## ⚙️ GitHub Actions Workflow

The GitHub Actions workflow is automatically triggered when a new tag is pushed. The workflow performs the following steps:

- Extracts the library name and version from the tag.
- Builds and packages the widget code.
- Creates a new GitHub release and attaches the packaged `.zip` file.
- Updates `packages.json` so the new version is available as a Composer package.

---

## 📦 Published Packages

You can view and download the published widget packages here:

👉 [Published Packages](https://wearehaustech.github.io/haus-storefront-elementor-widgets/packages/)
