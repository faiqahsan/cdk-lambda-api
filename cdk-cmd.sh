#!/usr/bin/env bash

echo -n "Command:"
read cdkCommand

set -x


export EMAIL_USERNAME=muhammadusama387@gmail.com
export SERVICE_DOMAIN=sandboxc5b1346f599147adb2e8fe9d8e1a7725.mailgun.org
export EMAIL_PASSWORD=pubkey-8251e5774c3ef12f000052378e88dba3 # ymuiururmygsqtej
export EMAIL_SERVICE=mailgun # gmail

cdk $cdkCommand --profile mine --require-approval never
