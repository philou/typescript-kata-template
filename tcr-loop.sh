#!/usr/bin/env sh

while true
do
    inotify -r -e modify ./src ./test
    ./tcr.sh
done