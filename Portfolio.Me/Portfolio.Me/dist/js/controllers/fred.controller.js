(function () {

    angular.module('Portfolio.UI')
    .controller('FredController', ['$timeout', 'BrowserService', FredController])
    .service('BrowserService', BrowserService);

    function BrowserService() {
        var self = this;
        self.browserSupported = true;
        self.isIESupported = false;
    }

    BrowserService.prototype.isBrowserSupported = function () {
        var self = this;
        if (typeof detect !== 'undefined' && detect != null && detect != {}) {
            if (typeof navigator !== 'undefined' && navigator != null && navigator != {}) {
                if (typeof navigator.userAgent !== 'undefined' && navigator.userAgent != null && navigator.userAgent != {}) {
                    var _parsed = detect.parse(navigator.userAgent);
                    if (typeof _parsed !== 'undefined' && _parsed != null && _parsed != {} && typeof _parsed.browser !== 'undefined' && _parsed.browser != null && _parsed.browser != {}) {
                        if (_parsed.browser.family == 'IE')
                            self.browserSupported = self.isIESupported;
                    }
                }
            }
        }
        return self.browserSupported;
    }

    BrowserService.prototype.isBrowserIE = function () {
        var self = this;
        if (typeof detect !== 'undefined' && detect != null && detect != {}) {
            if (typeof navigator !== 'undefined' && navigator != null && navigator != {}) {
                if (typeof navigator.userAgent !== 'undefined' && navigator.userAgent != null && navigator.userAgent != {}) {
                    var _parsed = detect.parse(navigator.userAgent);
                    if (typeof _parsed !== 'undefined' && _parsed != null && _parsed != {} && typeof _parsed.browser !== 'undefined' && _parsed.browser != null && _parsed.browser != {}) {
                        if (_parsed.browser.family == 'IE')
                            return true;
                    }
                }
            }
        }
        return false;
    }

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