#!/usr/bin/env bash

set -euo pipefail

mkdir -p optimized

shopt -s nullglob

for img in *.jpg *.jpeg *.png *.webp; do
  [[ -f "$img" ]] || continue

  filename="${img%.*}"
  output="optimized/${filename}.webp"

  if [[ -f "$output" && "$output" -nt "$img" ]]; then
    echo "Skipping: $img"
    continue
  fi

  echo "Optimizing: $img -> ${filename}.webp"

  magick "$img"
  -resize 1920x1920\> \
    -strip \
    -quality 80 \
    "$output"
done

echo "Done!"
