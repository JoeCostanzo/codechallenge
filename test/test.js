import * as challengeESNextImport from '../src/index';

var toExecute = function (pkg) {
  console.log(pkg.katas.VerifyAllKatas());
  console.log(pkg.pt.VerifyPascalOnlyRecursive());
  console.log(pkg.pi.VerifyPi());
};

var preES6 = function () {
  "use strict";
  var challengePreES6Import = require('../src/index');
  toExecute(challengePreES6Import);
};

var esnext = function () {
  "use strict";
  toExecute(challengeESNextImport);
};

var parallel = function (fnList, done) {
  var i = 0;
  for (i = fnList.length; i > 0; i--) {
    (function (arg) {
      setTimeout(function () {
        var fn = fnList.pop();
        fn();
      }, 0);
    }(i));
  }
  done("All functions successfully invoked.");
};

parallel([esnext, preES6], function (res) {
  console.log(res);
});


/**
 * Created by joec on 3/30/2017.
 */
