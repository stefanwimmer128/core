#!/usr/bin/env bash

mkdocs build && \
    cd site/ && \
    git add -A
    git commit -m "Update docs" && \
    git push && \
    cd ../ && \
    git add docs/* site/ && \
    git commit -m "Update docs" docs/* site/ mkdocs.yml && \
    git push
