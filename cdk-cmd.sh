#!/usr/bin/env bash

echo -n "Command:"
read cdkCommand

set -x

export SENDGRID_API_KEY=test123

cdk $cdkCommand --profile dev-sandbox --require-approval never
