(function () {

    angular.module('Portfolio.UI')
    .controller('FredController', ['$timeout', 'BrowserService', FredController]);

    function FredController($timeout, BrowserService) {

        var self = this;
        this.timeout = $timeout;
        this.browserService = BrowserService;
        self.moonRings = document.getElementById('moon-rings');
        self.isBrowserIE = self.browserService.isBrowserIE();
        //self.animateMoonRings();

    }

    FredController.prototype.animateMoonRings = function () {
        var self = this;
        self.moonTimeline = new TimelineMax({ repeat: -1 });
        self.moonTimeline
            .to(self.moonRings, 5, { scaleX: 1.10, scaleY: 1.10, ease: Elastic.easeOut.config(1, 0.5), transformOrigin: "center", })
            .to(self.moonRings, 5, { scaleX: 1, scaleY: 1, ease: Elastic.easeOut.config(1, 0.5), transformOrigin: "center", });
    }

})();