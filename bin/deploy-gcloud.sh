yarn build

export BUCKET_URI=
export KEY_FILE=SPASample.json
export GCLOUD_PROJECT=

echo ${BUCKET_URI}

# Authorize and set project
${HOME}/google-cloud-sdk/bin/gcloud auth activate-service-account --key-file ${HOME}/${KEY_FILE}
${HOME}/google-cloud-sdk/bin/gcloud config set project ${GCLOUD_PROJECT}

# Copy Files
${HOME}/google-cloud-sdk/bin/gsutil cp ./dist/index.html gs://${BUCKET_URI}/index.html
${HOME}/google-cloud-sdk/bin/gsutil cp ./dist/main.js gs://${BUCKET_URI}/main.js
${HOME}/google-cloud-sdk/bin/gsutil cp ./dist/main.js.map gs://${BUCKET_URI}/main.js.map

# Make Files Publically Accessible
${HOME}/google-cloud-sdk/bin/gsutil acl ch -u AllUsers:R gs://${BUCKET_URI}/index.html
${HOME}/google-cloud-sdk/bin/gsutil acl ch -u AllUsers:R gs://${BUCKET_URI}/main.js
${HOME}/google-cloud-sdk/bin/gsutil acl ch -u AllUsers:R gs://${BUCKET_URI}/main.js.map

# Edit the website configuration
${HOME}/google-cloud-sdk/bin/gsutil web set -m index.html -e index.html gs://${BUCKET_URI}
