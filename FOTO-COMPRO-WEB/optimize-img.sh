#!/usr/bin/env bash

set -euo pipefail

mkdir -p optimized

shopt -s nullglob

for img in *.webp; do
  output="optimized/$img"

  if [[ -f "$output" ]]; then
    echo "Skipping: $img (already optimized)"
    continue
  fi

  echo "Optimizing: $img"

  magick "$img" \
    -resize 1920x1920\> \
    -quality 80 \
    "$output"
done

echo "Done!"
