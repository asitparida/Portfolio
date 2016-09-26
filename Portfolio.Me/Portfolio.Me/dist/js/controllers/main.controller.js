(function () {

    angular.module('Portfolio.UI')
    .controller('MainController', ['$timeout', MainController]);

    function MainController($timeout) {

        var self = this;
        this.timeout = $timeout;
        this.name = 'Asit Kumar Parida';
        this.showColorPicker = false;
        this.settingsPaneColorsInitalized = false;
        this.currentPic = 0;
        this.header = document.getElementById('header');
        this.submarine = document.getElementById('pf_submarine');
        this.scrollIcon = document.getElementById('scrollUpIcon');
        this.colorModes = [
            { id: _.uniqueId('col'), colorId: "turquoise", name: "turquoise", code: "#1abc9c" },
            { id: _.uniqueId('col'), colorId: "emerland", name: "emerland", code: "#2ecc71" },
            { id: _.uniqueId('col'), colorId: "nephritis", name: "nephritis", code: "#27ae60" },
            { id: _.uniqueId('col'), colorId: "peterRiver", name: "peter river", code: "#3498db" },
            { id: _.uniqueId('col'), colorId: "wetAsphalt", name: "wet asphalt", code: "#34495e" },
            { id: _.uniqueId('col'), colorId: "amethyst", name: "amethyst", code: "#9b59b6" },
            { id: _.uniqueId('col'), colorId: "carrot", name: "carrot", code: "#e67e22" },
            { id: _.uniqueId('col'), colorId: "alizarin", name: "alizarin", code: "#e74c3c" },
            { id: _.uniqueId('col'), colorId: "pomegranate", name: "pomegranate", code: "#c0392b" }
        ];
        this.activeColorMode = this.colorModes[3];
        this.lastTop = this.picHeight = window.innerWidth <= 768 ? 100 : 72;
        this.pause = false;

        $(window).on('scroll', function (e) {
            if ($(e.target).scrollTop() > window.innerHeight)
                self.scrollIcon.style.display = 'block';
            else
                self.scrollIcon.style.display = 'none';
        });

        self.adjustPosition = function () {
            if (!self.pause) {
                var currPic = 'header-pic-' + self.currentPic;
                var nextId = self.currentPic + 1 > 4 ? 0 : self.currentPic + 1;
                var nextPic = 'header-pic-' + nextId;
                var _top = self.lastTop - 1;
                var _bgPosY = self.picHeight - _top;
                document.getElementById(currPic).style.zIndex = 1;
                document.getElementById(nextPic).style.zIndex = 2;
                document.getElementById(nextPic).style.top = _top + 'px';
                document.getElementById(nextPic).style.backgroundPositionY = _bgPosY + 'px';
                self.lastTop = _top;
                if (self.lastTop == 0) {
                    document.getElementById(currPic).style.top = '170px';
                    self.currentPic = nextId;
                    self.lastTop = self.picHeight;
                }
            }
            setTimeout(self.adjustPosition, 40);
        }

        setTimeout(self.adjustPosition, 100);
    }

    MainController.prototype.panmove = function (e) {
        var self = this;
        e.pageX = e.center.x;
        e.pageY = e.center.y;
        self.mouseMove(e);
    }

    MainController.prototype.bannerleave = function () {
        var self = this;
        self.headerHeight = self.header.getBoundingClientRect().height;
        self.headerWidth = self.header.getBoundingClientRect().width;
        self.headerHeight = self.header.getBoundingClientRect().height;
        self.headerWidth = self.header.getBoundingClientRect().width;
        self.submarineHeight = self.submarine.getBoundingClientRect().height;
        self.submarineWidth = self.submarine.getBoundingClientRect().width;
        var _top = 0.33 * (self.headerHeight - self.submarineHeight);
        var _left = 0.5 * (self.headerWidth - self.submarineWidth);
        self.submarine.style.top = _top + 'px';
        self.submarine.classList.add('transition-left');
        self.submarine.style.left = _left + 'px';
        setTimeout(function () {
            self.submarine.classList.remove('transition-left');
        }, 300);
    }

    MainController.prototype.mouseMove = function (e) {
        var self = this;
        self.headerHeight = self.header.getBoundingClientRect().height;
        self.headerWidth = self.header.getBoundingClientRect().width;
        self.submarineHeight = self.submarine.getBoundingClientRect().height;
        self.submarineWidth = self.submarine.getBoundingClientRect().width;
        var _top = e.pageY - (self.submarineHeight) + 45;
        var _left = e.pageX - 75;
        _top = _top >= self.headerHeight - 200 ? self.headerHeight - 200 : _top;
        _top = _top <= -50 ? -50 : _top;
        _left = _left <= 0 ? 0 : _left;
        _left = _left >= self.headerWidth - 200 ? self.headerWidth - 200 : _left;
        self.submarine.style.top = _top + 'px';
        self.submarine.style.left = _left + 'px';
    }

    MainController.prototype.openColorPicker = function () {
        var self = this;
        setTimeout(this.adjustPosition, 100);
        if (self.showColorPicker == false) {
            self.showColorPicker = true;
            self.settingsPaneColorsInitalized = true;
            self.shownColorModes = [];
            self.timeout(function () {
                _.each(self.colorModes, function (cm, iter) {
                    self.shownColorModes.push(cm);
                    cm.transition = 'all ' + (50 + (150 * (iter + 1))) + 'ms' + ' ease-out';
                });
                _.each(self.colorModes, function (cm, iter) {
                    self.timeout(function () {
                        var _elem = document.getElementById('color_' + cm.colorId);
                        _elem.style.transform = 'rotate(' + (-150 + (iter * 18)) + 'deg)';
                    }, 400);
                });
            }, 400);
        }
        else {
            self.showColorPicker = false;
            self.timeout(function () {
                self.settingsPaneColorsInitalized = false;
                self.shownColorModes = [];
            }, 300);
        }
    }

    MainController.prototype.closeColorPicker = function () {
        var self = this;
        self.showColorPicker = false;
        self.timeout(function () {
            self.settingsPaneColorsInitalized = false;
            self.shownColorModes = [];
        }, 300);
    }

    MainController.prototype.choseColor = function (color) {
        var self = this;
        self.activeColorMode = color;
    }

    MainController.prototype.scrollLeft = function () {
        var _scrollElm = document.getElementById('contentSkillsList');
        $(_scrollElm).animate({ scrollLeft: _scrollElm.scrollLeft - (window.innerWidth / 3) }, 300);
    }

    MainController.prototype.scrollRight = function () {
        var _scrollElm = document.getElementById('contentSkillsList');
        $(_scrollElm).animate({ scrollLeft: _scrollElm.scrollLeft + (window.innerWidth / 3) }, 300);
    }

    MainController.prototype.goToContent = function () {
        var _contentElem = document.getElementById('portfolioContent');
        var _scrollTo = _contentElem.getBoundingClientRect().top;
        $('html, body').animate({
            scrollTop: _scrollTo
        }, 300);
    }

    MainController.prototype.scrollUp = function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        document.getElementById('scrollUpIcon').style.display = 'none';
    }

})()