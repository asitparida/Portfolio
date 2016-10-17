(function () {
    'use strict';

    angular
        .module('Portfolio.UI')
        .directive('gitLink', [GitLinkDirective]);

    function GitLinkDirective() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            priority: 1001,
            scope: {
                'link': '='
            },
            templateUrl: '/dist/js/templates/git-link.tmpl.html'
        };
    }

})();
