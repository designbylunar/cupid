#!/bin/sh
set -e

node="yarn node"
jestArgs=()

jestArgs+=("--passWithNoTests")

if [ -n "$CI" ]; then
    jestArgs+=("--maxWorkers=4")
    jestArgs+=("--ci")
fi
jestArgs+=($@)

$node "$(yarn bin jest)" "${jestArgs[@]}"