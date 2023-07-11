# Copy the jsconfig.json template into each src/ subdirectory.
# Why?  They're each separate projects.

set -x
find ./src -mindepth 1 -type d -exec cp -v jsconfig-template/jsconfig-to-distribute.json {}/jsconfig.json \;
# mindepth 1 to avoid copying into src/ itself
