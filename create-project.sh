# install angular
npm install -g @angular/cli

# create new app using cli
ng new angular-app --style=scss --routing=true --inlineStyle=false

cd angular-app

npm i --save node-sass

# add bootstrap
ng add @ng-bootstrap/ng-bootstrap

# install chartjs
npm i --save chart.js

# generate components
ng g c components/daily-increase

ng g c components/countries-summary

ng g c components/overall-timeline

ng g c components/overall-summary

ng g c components/mailing-list

ng g service services/covid