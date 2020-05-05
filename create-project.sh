# install angular
npm install -g @angular/cli

# create new app using cli
ng new angular-app --style=scss --routing=true --inlineStyle=false

cd angular-app

npm i --save node-sass

# add bootstrap
ng add @ng-bootstrap/ng-bootstrap

npm i --save popper.js

# install chartjs
npm i --save chart.js
npm i --save ng2-charts

# generate components
ng g c components/daily-increase

ng g c components/countries-summary

ng g c components/overall-timeline

ng g c components/overall-summary

ng g service services/covid