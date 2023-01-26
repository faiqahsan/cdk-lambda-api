#!/usr/bin/env bash

echo -n "Command:"
read cdkCommand

set -x


export EMAIL_USERNAME=muhammadusama387@gmail.com
export EMAIL_PASSWORD=ymuiururmygsqtej
export EMAIL_SERVICE=gmail

cdk $cdkCommand --profile mine --require-approval never
