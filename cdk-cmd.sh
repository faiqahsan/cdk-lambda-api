#!/usr/bin/env bash

echo -n "Command:"
read cdkCommand

set -x


export EMAIL_USERNAME=muhammadusama387@gmail.com
export SERVICE_DOMAIN=sandboxc5b1346f599147adb2e8fe9d8e1a7725.mailgun.org
export EMAIL_SERVICE_SECRET=2bef403be67810a3c4b0d14737123cba-75cd784d-c08afcb5
export EMAIL_SERVICE=mailgun
export EMAIL_FROM="noreply@my-sample-app.com"
export EMAIL_FROM_TITLE="Test Email Lambda"

cdk $cdkCommand --profile taha --require-approval never --all
