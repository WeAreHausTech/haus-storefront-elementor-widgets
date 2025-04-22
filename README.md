# HausStorefrontElementorWidgets

# Publishing a New Package

## Create new version and tag
This will create a new version, tag and update release notes. 

```bash
    yarn nx release
```

###  Trigger the GitHub Workflow
The GitHub Actions workflow will automatically trigger when a new tag is pushed. The workflow will:
- Extract the library name and version from the tag.
- Build and package the library.
- Create a GitHub release and attach the package as a `.zip` file.

