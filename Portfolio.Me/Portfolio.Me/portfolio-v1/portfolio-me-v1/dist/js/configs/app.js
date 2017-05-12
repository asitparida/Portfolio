(function () {

    angular.module('Portfolio.UI.Templates', [])
    .run(["$templateCache", function ($templateCache) {
        for (var tmpl in window.TemplatesPortfolio) {
             $templateCache.put(tmpl, window.TemplatesPortfolio[tmpl]);
         }
    }])

    angular.module('Portfolio.UI', ['Portfolio.UI.Templates','ngAnimate', 'ngMaterial', 'hmTouchEvents'])
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

    BrowserService.prototype.isBrowserSafari = function () {
        var self = this;
        if (typeof detect !== 'undefined' && detect != null && detect != {}) {
            if (typeof navigator !== 'undefined' && navigator != null && navigator != {}) {
                if (typeof navigator.userAgent !== 'undefined' && navigator.userAgent != null && navigator.userAgent != {}) {
                    var _parsed = detect.parse(navigator.userAgent);
                    if (typeof _parsed !== 'undefined' && _parsed != null && _parsed != {} && typeof _parsed.browser !== 'undefined' && _parsed.browser != null && _parsed.browser != {}) {
                        if (_parsed.browser.family.indexOf('Safari') != -1)
                            return true;
                    }
                }
            }
        }
        return false;
    }    

})()