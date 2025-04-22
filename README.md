# HausStorefrontElementorWidgets

## Create new version

```bash
    yarn nx release --projects=widget
```

This will:
1. Create a new version, tag and update release notes. 
2. Trigger the GitHub Workflow

###  GitHub Workflow
The GitHub Actions workflow will automatically trigger when a new tag is pushed. The workflow will:
- Extract the library name and version from the tag.
- Build and package the library.
- Create a GitHub release and attach the package as a `.zip` file.

## View Published Packages

You can view the published packages here:
[Published Packages](https://wearehaustech.github.io/haus-storefront-elementor-widgets/packages/)


