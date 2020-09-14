import { esModule } from './esmodule';

let test = new esModule()

require('angular');

angular.module('testApp', [])
angular.module('testApp').controller('testController', function() {
  this.hello = 'hello 1'
  console.log('hello 1')
})
