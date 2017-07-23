#!/usr/bin/env bash

mkdocs build && \
    cd site/ && \
    git commit -a -m "Update docs" && \
    git push && \
    cd .. && \
    git add docs/* site/ && \
    git commit -m "Update docs" docs/* site/ && \
    git push
