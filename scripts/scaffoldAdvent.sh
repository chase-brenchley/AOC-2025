#!/bin/bash

day=$1

# Create the day directory if it doesn't exist
mkdir -p "src/day$day"

# Copy and rename templates
cp scaffold/adventOfCodeTemplate.ts "src/day$day/index.ts"
cp scaffold/adventOfCodeTemplate.test.ts "src/day$day/index.test.ts"
cp scaffold/adventOfCodeInputTemplate.txt "src/day$day/partialInput.txt"
cp scaffold/adventOfCodeInputTemplate.txt "src/day$day/completeInput.txt"

# Replace placeholders in TypeScript file
sed -i '' "s/{{DAY_NUMBER}}/$day/g" "src/day$day/index.ts" "src/day$day/index.test.ts"