#!/bin/sh
set -e

node="yarn node"
tsdxArgs=()
tsdxArgs+=("build" "--name" "headlessui" "--format" "cjs,esm,umd" "--tsconfig" "./tsconfig.tsdx.json")
tsdxArgs+=($@)
$node "$(yarn bin tsdx)" "${tsdxArgs[@]}"