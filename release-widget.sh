#!/bin/bash

# Variables
WIDGET_NAME="add-to-cart-button"
VERSION="v1.0.0"
ZIP_FILE="dist/libs/$WIDGET_NAME/$WIDGET_NAME-$VERSION.zip"

# Build and package the widget
yarn nx run $WIDGET_NAME:package

# Create GitHub release
gh release create $VERSION $ZIP_FILE \
  --title "$WIDGET_NAME $VERSION" \
  --notes "Release notes for $WIDGET_NAME $VERSION"