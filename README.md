## This is a real-world serverless angular project deployed with aws lamdba for free

I have created a COVID-19 dashboard using Angular 9 and demostrate how to deploy it to AWS Lambda using serverless.

###Prerequisites

The project requires you to have these packages installed on your system, please follow the instructions to install them.

[Node 12](https://nodejs.org/en/download)

[Angular CLI](https://cli.angular.io/)

[AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)


Part 1 - Build an angular app
------

We start with creating the angular project by using angular cli named 'angular-app'.

```bash
ng new angular-app --style=scss --routing=true --inlineStyle=false
```

You can start the application by `ng serve` and test it in browser [http://localhost:4200/](http://localhost:4200/).

Just `cd` into the project folder /angular-app, and we need to install a few npm packages that we needed as dependencies for this project.

```bash
# add sass
npm i --save node-sass

# add bootstrap
ng add @ng-bootstrap/ng-bootstrap

# install chartjs
npm i --save chart.js

```

Part 2 - Configure serverless and deploy to aws 
-----

First we need to setup an AWS account and obtain the programmatic access. After you have obtained the Access_Key & Access_Secret, keep them somewhere safe and you will need them for lambda deployment. 

Then install the serverless package and configure it with your AWS access_key and access_secret.

```

# install serverless
npm install -g serverless

# configure serverless with aws credentials
serverless config credentials --provider aws --key <ACCESS_KEY> --secret <ACCESS_SECRET>

# enable us to convert the angular application into one that supports server-side rendering
ng add @ng-toolkit/universal

npm i --save express

npm i --save aws-serverless-express

# adding aws as the provider
ng add @ng-toolkit/serverless --provider aws

npm i --save-dev serverless-api-compression


# deploy
npm run build:serverless:deploy
```

Part 3 - Configure dns and domain
------

- Register domain 


- Configure dns


- SSL
```

//aws acm certificate-validated --certificate-arn arn:aws:acm:us-west-2:294202928772:certificate/ee9db60b-ea57-42a8-b5ef-37fc9eb2add8

CERTIFICATE_ARN="$(aws acm request-certificate --domain-name *.asin.pro --validation-method DNS --idempotency-token 91adc45q | jq -r '.CertificateArn')"

VALIDATION_CNAME="$(aws acm describe-certificate --certificate-arn $CERTIFICATE_ARN | jq -r '.Certificate.DomainValidationOptions[].ResourceRecord.Name')"

VALIDATION_VALUE="$(aws acm describe-certificate --certificate-arn $CERTIFICATE_ARN | jq -r '.Certificate.DomainValidationOptions[].ResourceRecord.Value')"

echo create a CNAME entry at your DNS provider - CNAME: $VALIDATION_CNAME with VALUE : $VALIDATION_VALUE

aws apigateway create-domain-name --domain-name 'www.asin.pro' --endpoint-configuration "{ \"types\": [\"REGIONAL\"] }" --regional-certificate-arn $CERTIFICATE_ARN

aws apigateway get-rest-api --rest-api-id <API_KEY_ID>

aws apigateway create-base-path-mapping --domain-name 'www.asin.pro' --base-path '(none)' --stage 'production' --rest-api-id z20smy4uaj

```

- Set custom domain for api gateway
