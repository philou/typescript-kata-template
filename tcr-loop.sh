#!/usr/bin/env sh

# brew install fswatch

while true
do
    fswatch -1 -r ./src ./test
    ./tcr.sh
done