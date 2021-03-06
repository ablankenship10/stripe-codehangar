(function() {
  'use strict';

  angular
    .module("utils.codehangar")
    .directive("newsletter", directive);

  function directive() {
    return {
      restrict: 'A',
      scope: {},
      templateUrl: 'components/Newsletter/Newsletter.html',
      controller: controller,
      controllerAs: 'vm',
      bindToController: true
    }
  }

  function controller() {
    var vm = this;

    vm.submit = function(email) {
      if (!email) {
        return;
      }

      analytics.alias(email, {}, {}, function() {
        analytics.identify(email, {
          email: email
        });

        analytics.track('email subscribe', {
          source: 'stripe.codehangar',
          email: email,
          position: 'page bottom'
        });
      })
    }

    vm.init = function() {

    };
    vm.init();
  }
})();
