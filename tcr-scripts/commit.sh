#!/usr/bin/env sh

export CURRENT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)

git add .
git commit --message Working
git push --no-recurse-submodules origin "$CURRENT_BRANCH"
