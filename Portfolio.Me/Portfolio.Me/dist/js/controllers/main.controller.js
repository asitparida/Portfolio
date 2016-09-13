angular.module('Portfolio.UI')
.controller('MainController', ['$timeout', function ($timeout) {
    var self = this;
    self.name = 'Asit Kumar Parida';
    self.header = document.getElementById('header');
    self.submarine = document.getElementById('pf_submarine');

    var scrollIcon = document.getElementById('scrollUpIcon');
    $(window).on('scroll', function (e) {
        if ($(e.target).scrollTop() > window.innerHeight)
            scrollIcon.style.display = 'block';
        else
            scrollIcon.style.display = 'none';
    });

    self.showColorPicker = false;
    self.settingsPaneColorsInitalized = false;
    self.colorModes = [
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
    self.activeColorMode = self.colorModes[3];

    self.panmove = function (e) {
        e.pageX = e.center.x;
        e.pageY = e.center.y;
        self.mouseMove(e);
    }

    self.bannerleave = function () {
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

    self.mouseMove = function (e) {
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

    self.currentPic = 0;
    self.lastTop = self.picHeight = window.innerWidth <= 768 ? 100 : 72;

    self.pause = false;

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

    self.works = [
        { 'bgColor': '#161616', 'logo': 'project-logos/moosik_200_blank.png', 'imgStyle': 'width:130px;margin-top:80px;' },
        { 'bgColor': '#f0f0f0', 'logo': 'project-logos/notsogrey.png', 'imgStyle': 'width:130px;margin-top:78px;' },
        { 'bgColor': '#2c3e50', 'logo': '' },
        { 'bgColor': '#f0f0f0', 'logo': '' },
        { 'bgColor': '#2c3e50', 'logo': '' },
        { 'bgColor': '#f0f0f0', 'logo': '' },
        { 'bgColor': '#2c3e50', 'logo': '' },
        { 'bgColor': '#f0f0f0', 'logo': '' },
        { 'bgColor': '#2c3e50', 'logo': '' }
    ];

    self.openColorPicker = function () {
        if (self.showColorPicker == false) {
            self.showColorPicker = true;
            self.settingsPaneColorsInitalized = true;
            self.shownColorModes = [];
            $timeout(function () {
                _.each(self.colorModes, function (cm, iter) {
                    self.shownColorModes.push(cm);
                    cm.transition = 'all ' + (50 + (150 * (iter + 1))) + 'ms' + ' ease-out';
                });
                _.each(self.colorModes, function (cm, iter) {
                    $timeout(function () {
                        var _elem = document.getElementById('color_' + cm.colorId);
                        _elem.style.transform = 'rotate(' + (-150 + (iter * 18)) + 'deg)';
                    }, 400);
                });
            }, 400);
        }
        else {
            self.showColorPicker = false;
            $timeout(function () {
                self.settingsPaneColorsInitalized = false;
                self.shownColorModes = [];
            }, 300);
        }
    }

    self.closeColorPicker = function () {
        self.showColorPicker = false;
        $timeout(function () {
            self.settingsPaneColorsInitalized = false;
            self.shownColorModes = [];
        }, 300);
    }

    self.choseColor = function (color) {
        self.activeColorMode = color;
    }

    self.scrollLeft = function () {
        var _scrollElm = document.getElementById('contentSkillsList');
        $(_scrollElm).animate({ scrollLeft: _scrollElm.scrollLeft - (window.innerWidth / 3) }, 300);
    }

    self.scrollRight = function () {
        var _scrollElm = document.getElementById('contentSkillsList');
        $(_scrollElm).animate({ scrollLeft: _scrollElm.scrollLeft + (window.innerWidth / 3) }, 300);
    }

    self.goToContent = function () {
        var _contentElem = document.getElementById('portfolioContent');
        var _scrollTo = _contentElem.getBoundingClientRect().top;
        $('html, body').animate({
            scrollTop: _scrollTo
        }, 300);
    }

    self.scrollUp = function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        document.getElementById('scrollUpIcon').style.display = 'none';
    }

    setTimeout(self.adjustPosition, 100);

}])