# serverless-aws-simple
Projects Serverless AWS

# Install serverless
npm install serverless -g
serverless config credentials --provider aws --key <ID_DA_CHAVE_DE_ACESSO> --secret <CHAVE_DE_ACESSO_SECRETA>

# Install dependences
npm install

# Deploy and Remove
sls deploy
sls remove

# Advanced deploy:
sls deploy --stage production --region eu-central-1
sls deploy function -f listCandidates

# Invoking Functions Locally and Remotely
list: sls invoke local -f listCandidates
post: sls invoke local -f candidateSubmission -p candidate.json

# Tailing the Logs
sls logs -f listCandidates -t