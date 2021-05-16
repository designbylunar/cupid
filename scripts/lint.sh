#!/bin/sh
set -e

ROOT_DIR="$(git rev-parse --show-toplevel)/"
TARGET_DIR="$(pwd)"
RELATIVE_TARGET_DIR="${TARGET_DIR}/$ROOT_DIR/}"

pushd $ROOT_DIR > /dev/null

node="yarn node"
tsdxArgs=()
tsdxArgs+=($RELATIVE_TARGET_DIR)
tsdxArgs+=($@)

$node "$(yarn bin tsdx)" "${tsdxArgs[@]}"

popd > /dev/null