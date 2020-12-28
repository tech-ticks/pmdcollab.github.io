#!/bin/bash

# Call this script with "./add-submission.sh [zip URL from Discord]"
curl $1 -o submission.zip
unzip submission.zip
rm submission.zip
