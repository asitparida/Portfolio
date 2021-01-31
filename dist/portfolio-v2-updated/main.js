(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div id=\"mainContent\" class=\"about-me-container\">\n    <app-bio></app-bio>\n    <div style=\"display:flex; justify-content: center; margin: 0 0 60px 0;\">\n        <a class=\"portfolio-btn\" href=\"assets/AsitParida.pdf\" target=\"_blank\">Download Resume</a>\n    </div>\n    <app-contact></app-contact>\n</div>"

/***/ }),

/***/ "./src/app/about-me/about-me.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".router-content {\n  padding: 60px 0; }\n  @media only screen and (max-width: 768px) {\n    .router-content {\n      padding: 80px 0 60px 0; } }\n  .grid-separator {\n  background: linear-gradient(-45deg, #e1f0fa 16px, red 16px, #e1f0fa 16px, transparent 0), linear-gradient(45deg, #e1f0fa 16px, transparent 0);\n  background-position: left top;\n  background-repeat: repeat-x;\n  background-size: 18px 32px;\n  content: \" \";\n  display: block;\n  height: 32px;\n  width: 100%;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  -webkit-transform: scaleY(-1);\n          transform: scaleY(-1); }\n  .grid-separator.top {\n    top: 0; }\n  .grid-separator.reverse {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  .grid-separator.dark {\n    background: linear-gradient(-45deg, #444 16px, red 16px, #444 16px, transparent 0), linear-gradient(45deg, #444 16px, transparent 0);\n    background-position: left top;\n    background-repeat: repeat-x;\n    background-size: 18px 32px; }\n  .tabs {\n  text-align: center;\n  display: block;\n  margin: 15px auto 0 auto;\n  padding: 0;\n  box-sizing: border-box; }\n  @media only screen and (min-width: 769px) {\n    .tabs {\n      margin-top: 20px; } }\n  .tabs .tab-toggler {\n    padding: 5px 5px 0 5px; }\n  @media only screen and (min-width: 769px) {\n      .tabs .tab-toggler {\n        text-align: center;\n        display: inline-block; } }\n  @media only screen and (max-width: 768px) {\n      .tabs .tab-toggler {\n        padding: 0; } }\n  .tabs .tab-toggler button {\n      display: inline-block;\n      line-height: 60px;\n      height: 60px;\n      padding: 0;\n      border: none;\n      font-weight: 100;\n      outline: none;\n      font-size: medium;\n      font-weight: 100;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      box-sizing: border-box;\n      text-align: center;\n      color: #909090;\n      background: transparent;\n      border-bottom: 3px solid rgba(52, 152, 219, 0.1); }\n  .tabs .tab-toggler button.active {\n        font-weight: bold;\n        color: #3498db;\n        border-bottom: 3px solid #3498db; }\n  @media only screen and (min-width: 769px) {\n          .tabs .tab-toggler button.active {\n            width: auto; } }\n  @media only screen and (max-width: 768px) {\n        .tabs .tab-toggler button {\n          border-bottom-width: 3px;\n          font-size: medium;\n          font-weight: 100;\n          text-transform: uppercase;\n          width: 49%; } }\n  @media only screen and (min-width: 769px) {\n        .tabs .tab-toggler button {\n          width: auto;\n          padding: 0 15px; } }\n  @media only screen and (max-width: 768px) {\n    .tabs {\n      padding: 12px 12px 0 12px;\n      margin-top: 0; } }\n  @media only screen and (min-width: 1210px) {\n  .tabs {\n    width: 1200px !important; } }\n  @media (min-width: 800px) and (max-width: 1209px) {\n  .tabs {\n    width: 800px !important; } }\n  .about-me-container {\n  background: #fff;\n  margin-bottom: -60px; }\n  @media only screen and (max-width: 768px) {\n  .portfolio-btn {\n    margin-top: 0; } }\n"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        document.documentElement.setAttribute('data-color', '$NONE');
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.scss */ "./src/app/about-me/about-me.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/about-me/bio/bio.component.html":
/*!*************************************************!*\
  !*** ./src/app/about-me/bio/bio.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"grid-wrap\">\n    <div class=\"timeline\">\n        <p class=\"info\">\n                I have worked closely with UX designers and usability experts to learn the nuances of great user experiences. My core skills include developing responsive, adaptive and accessible web and native apps using HTML, SCSS, JavaScript, Angular, Knockout JS, Electron, etc.\n                I have also managed UI deliveries for the projects. Apart from my work, I do spend time exploring new frameworks by building kitchen-sink apps. I do love investing time in the new UI development trends, data visualization libraries and developing plugins. My focus has been performance and extensibility which has enabled me to contribute and impact across multiple projects. I also have experience building SVG animations using GSAP and am comfortable with Photoshop & Illustrator. Apart from my core skills, I am a full-stack developer with experience in developing back-ends with .NET and SQL Server.\n                 </p>\n        <div class=\"timeline-content\">\n            <div class=\"stop\">\n                <img src=\"assets/education_green.png\" />\n                <div class=\"stop-content\">\n                    <div class=\"stop-title\">Education</div>\n                    <div class=\"stop-details\">\n                        <label>\n                            <strong>Master's degree</strong> (2018 - 2019)</label>\n                        <p>Earned my master's degree in Human-Computer Interaction at Carnegie Mellon University, Pittsburgh, PA</p>\n                    </div>\n                    <div class=\"stop-details\">\n                        <label>\n                            <strong>Bachelor of Technology</strong> (2009 - 2013)</label>\n                        <p>Completed my under-graduation from National Institute of Technology, Rourkela majoring in Electronics & Communication Engineering</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"stop\">\n                <img src=\"assets/coffee_green.png\" />\n                <div class=\"stop-content\">\n                    <div class=\"stop-title\">Experience</div>\n                    <div class=\"stop-details\">\n                        <label>\n                            <strong>Amazon.com Services LLC</strong> (September 2019 - Present)</label>\n                        <p>Working on establishing a strategic path towards creating\n                            value streams and solutions for in-house taxonomists\n                            working on the e-commerce platform</p>\n                    </div>\n                    <div class=\"stop-details\">\n                        <label>\n                            <strong>VMware Inc. </strong> (March 2018 - July 2018)</label>\n                        <p>As part of the cloud automation team, I worked on revamping the legacy user interfaces using\n                            modern web frameworks. I also contributed to the in-house design language concerning accessibility\n                            and internationalization needs for any interface.</p>\n                    </div>\n                    <div class=\"stop-details\">\n                        <label>\n                            <strong>Microsoft Corporation</strong> (July 2013 to March 2017)</label>\n                        <p>As part of the Microsoft UX team, I developed desktop and native app experiences using web technologies\n                            and UI frameworks like Angular, React, and Bootstrap, etc. and created shell frameworks for LOB\n                            applications using modern design guidelines. I managed UI deliveries for a 25 member team and\n                            oversaw project execution with a focus on performance, customer experience, extensibility, and\n                            accessibility.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"stop\">\n                <img src=\"assets/awards_green.png\" />\n                <div class=\"stop-content noPaddingBottom\">\n                    <div class=\"stop-title\">Honors & Awards</div>\n                    <div class=\"stop-details\">\n                        <label>\n                            <strong>Professional and Academic</strong>\n                        </label>\n                        <ul>\n                            <li>Microsoft IT Excellence 'Do great work' award for outstanding individual contribution in delivering a modern experience</li>\n                            <li>VMware certificate for excellence for recognizing individual contribution in delivering new product experience</li>\n                            <li>Secured a rank in Top 20 in the country for AISSE high school examinations and was awarded the CBSE Certificate of Merit</li>\n                        </ul>\n                    </div>\n                    <div class=\"stop-details\">\n                        <label>\n                            <strong>Extracurricular Activities</strong>\n                        </label>\n                        <ul>\n                            <li>Chief Student Convener for International Students Meet 2012 in NIT Rourkela with student participation from over four continents</li>\n                            <li>General Secretary for Student Activity Center appointed by Director, NIT Rourkela</li>\n                            <li>Secured the 1st position in Orissa State Disaster Preparedness Day Quiz\n                            </li>\n                            <li>Awarded the 2nd position in All India School Leadership Program convened by Oracle’s Think.com education\n                                foundation\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/about-me/bio/bio.component.scss":
/*!*************************************************!*\
  !*** ./src/app/about-me/bio/bio.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noPaddingBottom {\n  padding-bottom: 0; }\n\n.grid {\n  margin: 10px auto;\n  padding: 0;\n  list-style: none;\n  max-width: 1200px; }\n\n@media only screen and (min-width: 769px) {\n    .grid {\n      min-height: 300px; } }\n\n.grid:nth-child(1) {\n    margin-bottom: 10px; }\n\n.grid:nth-child(2) {\n    margin-top: 5px; }\n\n@media only screen and (max-width: 768px) {\n    .grid {\n      margin: 0 !important;\n      width: 100% !important; } }\n\n.grid-wrap {\n    clear: both;\n    margin: 0 auto;\n    padding: 30px 0;\n    max-width: 1260px; }\n\n.grid-wrap .timeline {\n      box-sizing: border-box;\n      display: block;\n      margin: 0 auto;\n      padding: 0 0 0px 0;\n      width: 80%; }\n\n@media only screen and (max-width: 768px) {\n        .grid-wrap .timeline {\n          padding: 5px 15px 15px 15px;\n          width: 100%; }\n          .grid-wrap .timeline p.info {\n            margin-top: 0; } }\n\n.grid-wrap .timeline p.info {\n        line-height: 1.45em;\n        padding-bottom: 15px; }\n\n@media only screen and (max-width: 768px) {\n          .grid-wrap .timeline p.info {\n            text-align: justify; } }\n\n.grid-wrap .timeline .timeline-content {\n        width: 100%;\n        display: block;\n        margin-top: 45px; }\n\n.grid-wrap .timeline .timeline-content .stop {\n          margin: 0;\n          position: relative;\n          padding: 0 0px 0 60px;\n          display: inline-block; }\n\n@media only screen and (max-width: 768px) {\n            .grid-wrap .timeline .timeline-content .stop {\n              padding: 0; } }\n\n.grid-wrap .timeline .timeline-content .stop img {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 24px; }\n\n.grid-wrap .timeline .timeline-content .stop .stop-content {\n            width: 100%;\n            padding: 0 0 36px 36px;\n            border-left: 1px dashed rgba(39, 174, 96, 0.5);\n            box-sizing: border-box;\n            float: left; }\n\n@media only screen and (max-width: 768px) {\n              .grid-wrap .timeline .timeline-content .stop .stop-content {\n                border-left: none;\n                padding-left: 0;\n                padding-bottom: 20px;\n                margin-bottom: 20px; } }\n\n.grid-wrap .timeline .timeline-content .stop .stop-content.noPaddingBottom {\n              padding-bottom: 0; }\n\n.grid-wrap .timeline .timeline-content .stop .stop-content:before {\n              position: absolute;\n              left: 52px;\n              content: ' ';\n              width: 16px;\n              height: 16px;\n              border-radius: 50%;\n              border: 1px solid #27ae60;\n              padding: 2px;\n              background: #ffffff;\n              box-sizing: border-box; }\n\n@media only screen and (max-width: 768px) {\n                .grid-wrap .timeline .timeline-content .stop .stop-content:before {\n                  display: none; } }\n\n.grid-wrap .timeline .timeline-content .stop .stop-content:after {\n              content: ' ';\n              position: absolute;\n              left: 55px;\n              top: 3px;\n              width: 10px;\n              height: 10px;\n              border-radius: 50%;\n              background: #27ae60; }\n\n@media only screen and (max-width: 768px) {\n                .grid-wrap .timeline .timeline-content .stop .stop-content:after {\n                  display: none; } }\n\n.grid-wrap .timeline .timeline-content .stop .stop-content .stop-title {\n              color: #27ae60;\n              font-weight: bold;\n              font-size: large; }\n\n@media only screen and (max-width: 768px) {\n                .grid-wrap .timeline .timeline-content .stop .stop-content .stop-title {\n                  border-left: none;\n                  padding-left: 36px;\n                  padding-top: 2px; } }\n\n.grid-wrap .timeline .timeline-content .stop .stop-content .stop-details {\n              margin-top: 20px; }\n\n.grid-wrap .timeline .timeline-content .stop .stop-content .stop-details ul {\n                padding-left: 16px;\n                margin: 6px 0;\n                list-style: none; }\n\n.grid-wrap .timeline .timeline-content .stop .stop-content .stop-details ul li {\n                  line-height: 1.45em;\n                  position: relative;\n                  padding-left: 5px; }\n\n.grid-wrap .timeline .timeline-content .stop .stop-content .stop-details ul li:before {\n                    content: ' ';\n                    width: 5px;\n                    height: 5px;\n                    border-radius: 50%;\n                    background: #27ae60;\n                    position: absolute;\n                    top: 9px;\n                    left: -15px; }\n\n.grid-wrap .timeline .timeline-content .stop .stop-content label {\n              margin-bottom: 0px;\n              font-size: medium; }\n\n@media only screen and (max-width: 768px) {\n                .grid-wrap .timeline .timeline-content .stop .stop-content label strong {\n                  display: block;\n                  margin-bottom: 8px; } }\n\n.grid-wrap .timeline .timeline-content .stop .stop-content p {\n              margin-bottom: 0;\n              margin-top: 6px;\n              line-height: 1.45em; }\n\n@media only screen and (max-width: 768px) {\n                .grid-wrap .timeline .timeline-content .stop .stop-content p {\n                  text-align: justify; } }\n\n@media only screen and (max-width: 768px) {\n      .grid-wrap {\n        margin-bottom: 0 !important;\n        padding: 12px; } }\n\n.grid.loaded {\n    background: none; }\n\n.grid.loaded .grid-item {\n      display: inline-block; }\n\n@media only screen and (min-width: 769px) {\n        .grid.loaded .grid-item {\n          float: left; } }\n\n.grid.loaded .grid-item .grid-item-text-container {\n        visibility: hidden; }\n\n.grid:not(.loaded) .grid-item {\n    display: none;\n    float: left; }\n\n@media only screen and (max-width: 768px) {\n      .grid:not(.loaded) .grid-item {\n        display: block; } }\n\n.grid.swipe-down .curtain {\n    -webkit-transform: translate3d(0, -120%, 0);\n            transform: translate3d(0, -120%, 0); }\n\n.grid.swipe-down .grid-item.animate .curtain {\n    -webkit-animation: swipeDown 0.5s cubic-bezier(0.6, 0, 0.4, 1) forwards;\n            animation: swipeDown 0.5s cubic-bezier(0.6, 0, 0.4, 1) forwards; }\n"

/***/ }),

/***/ "./src/app/about-me/bio/bio.component.ts":
/*!***********************************************!*\
  !*** ./src/app/about-me/bio/bio.component.ts ***!
  \***********************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BioComponent = /** @class */ (function () {
    function BioComponent() {
    }
    BioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! ./bio.component.html */ "./src/app/about-me/bio/bio.component.html"),
            styles: [__webpack_require__(/*! ./bio.component.scss */ "./src/app/about-me/bio/bio.component.scss")]
        })
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/about-me/contact/contact.component.html":
/*!*********************************************************!*\
  !*** ./src/app/about-me/contact/contact.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-form\">\n    <label>Get in touch</label>\n    <div class=\"section\">\n        <a class=\"dock-item\" target=\"_blank\" href=\"https://github.com/asitparida\" aria-label=\"Git Hub profile\" title=\"GitHub\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\"\n                x=\"0px\" y=\"0px\" viewBox=\"0 0 55.11 55.11\" style=\"enable-background:new 0 0 55.11 55.11;\" xml:space=\"preserve\"\n                width=\"22px\" height=\"22px\">\n                <g>\n                    <g>\n                        <path d=\"M18.549,29.909c-2.757,0-5,2.691-5,6s2.243,6,5,6s5-2.691,5-6S21.306,29.909,18.549,29.909z M18.549,39.909    c-1.654,0-3-1.794-3-4s1.346-4,3-4s3,1.794,3,4S20.204,39.909,18.549,39.909z\"\n                            fill=\"#3498db\" />\n                        <path d=\"M37.549,29.909c-2.757,0-5,2.691-5,6s2.243,6,5,6s5-2.691,5-6S40.306,29.909,37.549,29.909z M37.549,39.909    c-1.654,0-3-1.794-3-4s1.346-4,3-4s3,1.794,3,4S39.204,39.909,37.549,39.909z\"\n                            fill=\"#3498db\" />\n                        <path d=\"M39.075,24.909c-0.049,0-0.1,0-0.149,0.001c-0.926,0.016-1.853,0.054-2.78,0.091c-0.844,0.034-1.688,0.068-2.531,0.085    l-1.465,0.031c-2.543,0.053-5.178,0.107-7.751,0.097c-1.174-0.005-2.349-0.049-3.522-0.093c-1.598-0.06-3.248-0.124-4.886-0.083    c-2.273,0.055-4.185,0.781-5.685,2.159h0c-2.491,2.289-3.521,5.325-3.148,9.282c0.542,5.743,2.86,8.68,8.002,10.135    c4.323,1.223,8.665,1.333,12.322,1.281l1.218,0.006c0.411,0.003,0.822,0.007,1.233,0.007c0.507,0,1.014-0.005,1.521-0.021    c3.595-0.115,6.746-0.652,9.632-1.644c3.169-1.088,5.279-3.166,6.269-6.175c0.756-2.3,0.978-4.479,0.679-6.662    C47.547,29.856,44.45,24.909,39.075,24.909z M45.456,39.444c-0.795,2.417-2.437,4.022-5.019,4.908    c-2.695,0.925-5.654,1.428-9.046,1.536c-0.891,0.028-1.782,0.02-2.673,0.014l-1.249-0.007c-3.525,0.05-7.688-0.052-11.763-1.206    c-4.317-1.221-6.094-3.498-6.556-8.397C8.84,33,9.661,30.507,11.659,28.67c1.133-1.04,2.606-1.589,4.38-1.633    c1.576-0.036,3.196,0.023,4.762,0.082c1.196,0.045,2.393,0.09,3.589,0.095c2.608,0.012,5.247-0.044,7.802-0.098l1.463-0.03    c0.857-0.018,1.714-0.053,2.571-0.087c0.911-0.037,1.822-0.074,2.733-0.089c0.036-0.001,0.072-0.001,0.108-0.001    c4.13,0,6.607,4.022,6.984,6.771C46.31,35.554,46.114,37.44,45.456,39.444z\"\n                            fill=\"#3498db\" />\n                        <path d=\"M51.866,18.56c-0.595-0.819-0.867-1.301-0.782-2.176c0.177-1.843-0.075-3.698-0.319-5.491l-0.016-0.118    c-0.326-2.404-0.954-4.698-1.867-6.819l-0.325-0.754L47.08,3.516c-2.051,0.431-4.173,0.877-6.107,1.994    c-1.284,0.742-2.562,1.533-3.797,2.297c-0.827,0.512-1.654,1.024-2.486,1.523c-0.045,0.027-0.135,0.049-0.16,0.049c0,0,0,0,0,0    C30.057,8.598,25.412,8.59,20.72,9.356c-0.058,0.01-0.247-0.022-0.397-0.111c-0.516-0.309-1.019-0.641-1.521-0.972    c-0.583-0.385-1.167-0.769-1.767-1.12c-2.862-1.68-6.024-3.301-9.753-3.777L6.552,3.282L6.163,4.125    C6.09,4.279,6.028,4.412,5.977,4.55c-1.07,2.884-1.715,5.908-1.924,9.085c-0.073,1.101-0.148,2.24,0.014,3.377    c0.054,0.377,0.009,0.453-0.138,0.637c-1.347,1.679-2.31,3.435-2.945,5.368c-1.067,3.246-1.26,6.845-0.609,11.324    c0.54,3.747,1.459,6.481,2.977,8.863c3.193,5.008,8.122,7.829,14.651,8.385c3.263,0.278,6.574,0.32,9.82,0.32    c0.698,0,1.393-0.002,2.084-0.004c0.911-0.003,1.823-0.005,2.732-0.003c4.18,0.002,7.514-0.542,10.545-1.729    c5.396-2.111,8.984-6.043,10.663-11.688c0.936-3.145,1.355-6.489,1.245-9.941C54.97,24.698,53.884,21.339,51.866,18.56z     M51.931,37.915c-1.516,5.093-4.615,8.494-9.475,10.396c-2.79,1.093-5.87,1.61-9.812,1.591c-0.913-0.002-1.827,0-2.741,0.003    c-3.861,0.011-7.853,0.022-11.729-0.309c-5.958-0.507-10.255-2.95-13.135-7.467c-1.359-2.131-2.187-4.621-2.685-8.075    c-0.614-4.22-0.45-7.431,0.53-10.413c0.559-1.701,1.411-3.252,2.605-4.742c0.523-0.652,0.684-1.281,0.557-2.17    c-0.133-0.931-0.064-1.964,0.008-3.061c0.184-2.807,0.761-5.565,1.714-8.197c3.065,0.542,5.773,1.949,8.253,3.405    c0.57,0.334,1.124,0.7,1.677,1.064c0.527,0.348,1.055,0.695,1.597,1.019c0.54,0.322,1.192,0.46,1.747,0.368    c4.468-0.729,8.89-0.723,13.146,0.021c0.49,0.083,1.075-0.033,1.528-0.304c0.841-0.505,1.675-1.021,2.51-1.538    c1.242-0.769,2.483-1.537,3.746-2.266c1.619-0.935,3.446-1.332,5.381-1.74c0.675,1.74,1.149,3.601,1.413,5.541l0.016,0.118    c0.228,1.681,0.464,3.419,0.309,5.03c-0.154,1.594,0.459,2.586,1.155,3.544c1.803,2.483,2.734,5.386,2.846,8.872    C53.197,31.845,52.806,34.977,51.931,37.915z\"\n                            fill=\"#3498db\" />\n                    </g>\n                </g>\n            </svg>\n            <label>GitHub</label>\n        </a>\n        <a class=\"dock-item\" target=\"_blank\" href=\"https://api.whatsapp.com/send?phone=917893043880&text=Hi%20Asit%2C%20found%20your%20portfolio%20%3A)\"\n            title=\"WhatsApp\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\"\n                x=\"0px\" y=\"0px\" width=\"20px\" height=\"20px\" viewBox=\"0 0 90 90\" style=\"enable-background:new 0 0 90 90;\"\n                xml:space=\"preserve\">\n                <g>\n                    <path id=\"WhatsApp\" d=\"M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z\"\n                        fill=\"#3498db\" />\n                </g>\n            </svg>\n            <label>WhatsApp</label>\n        </a>\n        <a class=\"dock-item\" target=\"_blank\" href=\"https://www.linkedin.com/in/asitparida/\" aria-label=\"linked in profile\"\n            title=\"LinkedIn\">\n            <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                x=\"0px\" y=\"0px\" viewBox=\"0 0 485 485\" style=\"enable-background:new 0 0 485 485;\" xml:space=\"preserve\"\n                width=\"20px\" height=\"20px\">\n                <g>\n                    <rect x=\"89.016\" y=\"189.906\" width=\"67.506\" height=\"203.096\" />\n                    <path d=\"M122.323,162.186h0.446c23.551,0,38.194-15.601,38.194-35.101c-0.442-19.928-14.643-35.087-37.752-35.087\n       C100.107,91.998,85,107.157,85,127.085C85,146.585,99.678,162.186,122.323,162.186z\" />\n                    <path d=\"M261.4,393.002V279.576c0-6.086,0.464-12.119,2.24-16.459c4.887-12.149,15.978-24.693,34.641-24.693\n       c24.439,0,34.195,18.629,34.195,45.92v108.657H400V276.535c0-62.379-33.307-91.398-77.744-91.398\n       c-35.871,0-51.883,19.74-60.856,33.547v0.665h-0.442c0.118-0.219,0.306-0.442,0.442-0.665v-28.779h-67.537\n       c0.905,19.053,0,203.096,0,203.096H261.4z\" />\n                    <path d=\"M0,0v485h485V0H0z M455,455H30V30h425V455z\" />\n                </g>\n            </svg>\n            <label>LinkedIn</label>\n        </a>\n        <a class=\"dock-item\" target=\"_blank\" href=\"https://www.facebook.com/asitparida\" aria-label=\"facebook profile\"\n            title=\"Facebook\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\"\n                x=\"0px\" y=\"0px\" viewBox=\"0 0 485 485\" style=\"enable-background:new 0 0 485 485;\" xml:space=\"preserve\"\n                width=\"20px\" height=\"20px\">\n                <g>\n                    <path d=\"M200.767,400h65.266V242.413h43.798c0,0,4.104-25.428,6.103-53.235h-49.647v-36.264c0-5.416,7.109-12.696,14.153-12.696   h35.564V85h-48.366c-68.478,0-66.872,53.082-66.872,61.009v43.356h-31.771v53.029h31.771V400z\"\n                        fill=\"#3498db\" />\n                    <path d=\"M0,0v485h485V0H0z M455,455H30V30h425V455z\" fill=\"#3498db\" />\n                </g>\n            </svg>\n            <label>Facebook</label>\n        </a>\n        <a class=\"dock-item\" target=\"_blank\" href=\"mailto:asitparida@live.in\" aria-label=\"email me\" title=\"Email\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\"\n                x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\"\n                width=\"20px\" height=\"20px\">\n                <g>\n                    <g>\n                        <path d=\"M511.609,197.601c-0.001-0.77-0.173-1.933-0.472-2.603c-0.787-2.854-2.536-5.461-5.154-7.281l-73.292-50.948V82.153    c0-7.24-5.872-13.112-13.112-13.112H335.26l-71.743-49.878c-4.484-3.121-10.437-3.134-14.935-0.026l-72.206,49.904H92.426    c-7.242,0-13.112,5.872-13.112,13.112v53.973L5.666,187.027c-3.623,2.504-5.583,6.507-5.645,10.6    C0.017,197.704,0,197.777,0,197.857l0.391,284.235c0.005,3.477,1.391,6.81,3.852,9.266c2.458,2.451,5.788,3.827,9.26,3.827    c0.007,0,0.012,0,0.018,0l485.385-0.667c7.24-0.01,13.104-5.889,13.094-13.13L511.609,197.601z M432.69,168.708l41.898,29.118    l-41.898,29.128V168.708z M256.015,45.884l33.31,23.156h-66.812L256.015,45.884z M105.538,95.265h300.928v149.921L305.43,315.428    l-41.194-31.954c-0.064-0.05-0.119-0.081-0.181-0.126c-4.604-3.454-11.116-3.581-15.894,0.126l-41.493,32.185l-101.13-69.893    V95.265z M79.314,168.003v59.64l-43.146-29.819L79.314,168.003z M26.258,222.867l158.669,109.655L26.578,455.346L26.258,222.867z     M51.875,468.909l204.324-158.484l203.591,157.923L51.875,468.909z M327.144,332.271l158.276-110.036l0.32,233.059    L327.144,332.271z\"\n                            fill=\"#3498db\" />\n                    </g>\n                </g>\n                <g>\n                    <g>\n                        <path d=\"M344.77,147.713H167.234c-7.24,0-13.112,5.872-13.112,13.112s5.872,13.112,13.112,13.112H344.77    c7.242,0,13.112-5.872,13.112-13.112S352.012,147.713,344.77,147.713z\"\n                            fill=\"#3498db\" />\n                    </g>\n                </g>\n                <g>\n                    <g>\n                        <path d=\"M344.77,215.895H167.234c-7.24,0-13.112,5.872-13.112,13.112c0,7.24,5.872,13.112,13.112,13.112H344.77    c7.242,0,13.112-5.872,13.112-13.112C357.882,221.767,352.012,215.895,344.77,215.895z\"\n                            fill=\"#3498db\" />\n                    </g>\n                </g>\n            </svg>\n            <label>Email</label>\n        </a>\n        <a class=\"dock-item\" target=\"_blank\" href=\"tel:412-313-3794\" title=\"Phone\">\n            <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                x=\"0px\" y=\"0px\" width=\"20px\" height=\"20px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\"\n                xml:space=\"preserve\">\n                <g>\n                    <path d=\"M256,32c123.5,0,224,100.5,224,224S379.5,480,256,480S32,379.5,32,256S132.5,32,256,32 M256,0C114.625,0,0,114.625,0,256\n          s114.625,256,256,256s256-114.625,256-256S397.375,0,256,0L256,0z M398.719,341.594l-1.438-4.375\n          c-3.375-10.062-14.5-20.562-24.75-23.375L334.688,303.5c-10.25-2.781-24.875,0.969-32.405,8.5l-13.688,13.688\n          c-49.75-13.469-88.781-52.5-102.219-102.25l13.688-13.688c7.5-7.5,11.25-22.125,8.469-32.406L198.219,139.5\n          c-2.781-10.25-13.344-21.375-23.406-24.75l-4.313-1.438c-10.094-3.375-24.5,0.031-32,7.563l-20.5,20.5\n          c-3.656,3.625-6,14.031-6,14.063c-0.688,65.063,24.813,127.719,70.813,173.75c45.875,45.875,108.313,71.345,173.156,70.781\n          c0.344,0,11.063-2.281,14.719-5.938l20.5-20.5C398.688,366.062,402.062,351.656,398.719,341.594z\" />\n                </g>\n            </svg>\n            <label>Phone</label>\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/about-me/contact/contact.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/about-me/contact/contact.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form {\n  width: 100%;\n  padding: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: #f1fdfb; }\n  @media only screen and (max-width: 768px) {\n    .contact-form {\n      padding: 45px 12px; } }\n  .contact-form label {\n    font-size: 2em;\n    font-weight: 100px;\n    margin: 0 0 30px 0;\n    opacity: 0.50; }\n  @media only screen and (max-width: 768px) {\n      .contact-form label {\n        font-size: 1.5em; } }\n  .contact-form .section {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around; }\n  @media only screen and (max-width: 768px) {\n      .contact-form .section {\n        width: 100%; } }\n  .contact-form .section a {\n      text-decoration: none; }\n  .contact-form .section a.dock-item {\n        margin: 0 10px;\n        padding: 30px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center; }\n  @media only screen and (min-width: 769px) {\n          .contact-form .section a.dock-item {\n            min-width: 120px; } }\n  @media only screen and (max-width: 768px) {\n          .contact-form .section a.dock-item {\n            padding: 10px 5px 45px 5px; } }\n  .contact-form .section a.dock-item:hover {\n          background: rgba(0, 0, 0, 0.025); }\n  .contact-form .section a.dock-item label {\n          font-weight: bold;\n          order: 2;\n          text-decoration: none;\n          color: #000000;\n          opacity: 0.75;\n          font-size: small;\n          margin-top: 15px;\n          margin-bottom: 0; }\n  @media only screen and (max-width: 768px) {\n            .contact-form .section a.dock-item label {\n              display: none; } }\n  .contact-form .section a.dock-item svg {\n          order: 1;\n          width: 30px;\n          height: 30px;\n          fill: #27ae60; }\n  @media only screen and (max-width: 768px) {\n            .contact-form .section a.dock-item svg {\n              height: 20px;\n              width: 20px; } }\n  .contact-form .section a.dock-item svg g {\n            fill: #27ae60; }\n  .contact-form .section a.dock-item svg path {\n            fill: #27ae60; }\n"

/***/ }),

/***/ "./src/app/about-me/contact/contact.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/about-me/contact/contact.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/about-me/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/about-me/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/about-me/header/characters.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/about-me/header/characters.component.ts ***!
  \*********************************************************/
/*! exports provided: Characters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Characters", function() { return Characters; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var COLORS_PRIMARY = {
    $EMERALD: '#2ecc71',
    $NEPHRITIS: '#27ae60',
    $TURQUOISE: '#1abc9c',
    $PETER_RIVER: '#3498db',
    $AMETHYST: '#9b59b6',
    $SUNFLOWER: '#f1c40f',
    $CARROT: '#e67e22',
    $ALIZARIN: '#e74c3c',
    $ORANGE: '#f39c12',
    $PUMPKIN: '#d35400',
    $POMEGRANATE: '#c0392b',
    $WISTERIA: '#8e44ad',
    $BELIZE_HOLE: '#2980b9',
    $PETER_RIVER_DARK: '#1d6ea4',
    $PETER_RIVER_LIGHT: '#99cbec'
};
var Characters = /** @class */ (function () {
    function Characters(_o) {
        this.delay = 0;
        if (_o) {
            this.delay = _o;
        }
        this._render();
    }
    Characters.prototype._render = function () {
        var parent = document.getElementById('js-modal-hide-layer');
        var BubbleSpeech = /** @class */ (function (_super) {
            __extends(BubbleSpeech, _super);
            function BubbleSpeech() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BubbleSpeech.prototype.getShape = function () {
                // tslint:disable:max-line-length
                return '<defs><pattern id="image-path-svg" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512"><image x="-8" y="-24" width="520" height="520" xlink:href="assets/profile-pics/asit_2019.jpg"></image></pattern></defs><path fill="url(#image-path-svg)" class="bubble-path" d="M42,.19A40.71,40.71,0,0,1,47.19,0,38.43,38.43,0,0,1,53,.22a78.58,78.58,0,0,1,9.3,1.66c2.09.7,4,1.8,6.25,2.18a24.84,24.84,0,0,1,8.68,3.77,96.21,96.21,0,0,1,10.66,8.1,86.81,86.81,0,0,1,6,7.73,27.19,27.19,0,0,1,4.31,9.71c.47,2.5,1.36,4.94,1.47,7.51.25,3.82-1,7.49-1.59,11.22a35,35,0,0,1-2.6,7.37c-.71,1.73-2.09,3-3.19,4.53a10.72,10.72,0,0,1-3.38,2.81,47,47,0,0,1-4.53,2.64c-5.27,2.13-10.95,2.82-16.52,3.73a18,18,0,0,0-4.84,1c-.82.3-1.12,1.2-1.34,2a24.58,24.58,0,0,1-1.27,4.07,34.26,34.26,0,0,1-4.6,6.61,41.81,41.81,0,0,1-6.65,6.15,2.41,2.41,0,0,1-2.81.55c-.92-.56-1.86-1.88-1.12-2.92,1-1.44,2.36-2.56,3.1-4.15a14.12,14.12,0,0,0,1.19-8.77c-.42-1.41-1.13-3-2.6-3.59-2.49-.39-5,.23-7.49.19a68.53,68.53,0,0,1-8.86-.15,36.69,36.69,0,0,1-9-1.91,40.2,40.2,0,0,1-10.6-6,31.13,31.13,0,0,1-6.81-7.83C1.61,54.47-.16,49.95,0,45.28c0-1.36,0-2.73,0-4.09.45-5,2.54-9.63,4.53-14.17a40,40,0,0,1,5.07-8.34,34.06,34.06,0,0,1,6-6.51c2.29-1.88,4.39-4,7-5.52a40.55,40.55,0,0,1,8.48-4c2.14-.64,4.14-1.8,6.4-2C39,.56,40.51.38,42,.19Z"/>';
            };
            return BubbleSpeech;
        }(mojs.CustomShape));
        mojs.addShape('bubble-speech', BubbleSpeech);
        var speech = new mojs.Shape({
            top: '50%', left: '50%',
            shape: 'bubble-speech',
            radius: 50,
            y: -110,
            scale: { 0: 1 },
            angle: (_a = {}, _a[-90] = 0, _a),
            duration: 550,
            easing: 'cubic.out',
            delay: this.delay + 700,
            fill: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
            origin: '50% 100%',
            isForce3d: true,
            parent: parent
        });
        var Underline = /** @class */ (function (_super) {
            __extends(Underline, _super);
            function Underline() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // tslint:disable-next-line:max-line-length
            Underline.prototype.getShape = function () { return '<path class="undeline" d="M2.5,50.3296666 C3.31230785,50.3563224 4.33314197,51.7391553 5.26159075,51.244112 C6.0077473,50.8462659 7.06209448,50.3203773 7.71562592,50.3296666 C8.76504493,50.344583 10.5026522,50.7289147 10.5026522,50.7289147 C10.5026522,50.7289147 12.2264054,51.3540485 14.3045941,51.244112 C15.3644039,51.1880478 16.0579859,49.0942327 17.5373074,49.0205791 C18.3943409,48.9779084 19.7113596,50.7755195 20.6875422,50.7289147 C21.6556682,50.6826945 22.3001602,49.0692534 23.3699153,49.0205791 C24.1641633,48.9844405 26.4617126,51.2809265 27.3045404,51.244112 C28.6211722,51.1866018 29.868997,49.0779353 31.2843519,49.0205791 C32.5621635,48.9687968 34.5177647,50.7788661 35.8572938,50.7289147 C36.7433562,50.6958732 38.2335712,49.0522313 39.1401705,49.0205791 C39.9800278,48.9912571 40.561996,49.9055655 41.4152209,49.877823 C42.1696178,49.8532938 42.2680621,50.7519349 43.0298941,50.7289147 C43.9790327,50.7002347 44.036439,49.4065744 44.9921859,49.3806853 C45.4945214,49.3670781 46.5973018,48.5718404 47.1003097,48.559109 C48.1308079,48.5330267 48.971762,50.3516106 49.9999991,50.3296666 C50.8452183,50.3116285 50.5604619,49.1586632 51.3999478,49.1438038 C51.9113862,49.134751 53.4831103,48.5668789 53.9912876,48.559109 C54.882369,48.5454847 55.8282738,48.5684585 56.7056958,48.559109 C57.5279585,48.5503473 57.7153436,49.0252286 58.5216754,49.0205791 C59.2920272,49.016137 59.891015,48.0863678 60.6434283,48.0859881 C61.5658387,48.0855227 62.142412,49.0587083 63.0323087,49.0648534 C63.7314385,49.0696813 66.0372641,48.0767735 66.712955,48.0859881 C68.0228785,48.1038519 67.6682957,49.130074 68.8737479,49.1659145 C69.5874211,49.1871333 71.5986501,48.5310407 72.2696752,48.559109 C73.0379259,48.5912442 75.275178,49.892825 76.2284459,49.877823 C77.75882,49.8537388 76.8128295,49.1641707 78.6451998,49.0836451 C79.7893236,49.0333653 80.4770207,49.924725 81.6706526,49.877823 C83.0151778,49.8249918 82.7003946,49.0428007 84.0369748,49.0205791 C84.9618645,49.0052021 86.6077598,49.8672453 87.4984761,49.877823 C88.1326772,49.8853544 90.8057301,49.8531233 91.4118266,49.877823 C92.2804437,49.9132209 93.4120929,49.7988292 94.2005825,49.877823 C95.0771269,49.9656384 95.2679881,49.7233196 96.0110715,49.877823 C96.6642711,50.0136376 96.9762504,49.6806854 97.5,49.877823"></path>'; };
            Underline.prototype.getLength = function () { return 100; };
            return Underline;
        }(mojs.CustomShape));
        mojs.addShape('underline', Underline);
        var undeline = new mojs.Shape({
            shape: 'underline',
            top: '50%', left: '50%',
            fill: 'none',
            radius: 75,
            // radiusY:  20,
            y: 20,
            duration: 600,
            scaleX: { 2: 1 },
            // x: { 50 : 0 },
            origin: '0 50%',
            easing: 'cubic.out',
            // delay: this._o.delay + 275,
            delay: this.delay + 675,
            stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
            strokeWidth: 4,
            strokeLinecap: 'round',
            strokeDasharray: '100',
            strokeDashoffset: { '100': 0 },
            parent: parent
        });
        var charOpts = {
            left: '50%', top: '50%',
            fill: 'none',
            radius: 23,
            delay: this.delay,
            isShowEnd: true,
            isForce3d: true,
            parent: parent
        };
        var CHAR_STEP = 40;
        var SCALE_DOWN = .125;
        var SCALE_UP = 1;
        var Y_SHIFT = -20;
        // const Y_SHIFT = 0;
        var X_SHIFT = CHAR_STEP / 2;
        var FALLDOWN_OPTS = {
            scaleX: 1,
            scaleY: 1,
            y: Y_SHIFT,
            angle: 0,
            easing: 'bounce.out',
            duration: 1000,
        };
        var SHIFTX = 4 * CHAR_STEP;
        // tslint:disable-next-line:arrow-return-shorthand
        var not = function (fn, base) {
            if (base === void 0) { base = 1; }
            return function (p) { return base - fn(p); };
        };
        var bounceCurve = mojs.easing.path('M0,-100 C0,-100 15.6877613,115.487686 32.0269814,74.203186 C62.0118605,-1.559962 100.057489,-0.0941416292 100.057489,-0.0941416292');
        var nBounceCurve = not(bounceCurve, 2);
        var elasticCurve = mojs.easing.path('M0,0 L42.4468,99.9990418 C46.3646102,-8.62551409 51.8137449,77.8031065 53.2538649,98.8047514 C54.3071019,114.164379 57.4212363,145.777285 62.4147182,98.8047479 C62.4147182,98.8047504 64.981755,73.166208 70.2635684,98.8047479 C73.8553743,114.6133 81.1660962,98.8047504 100,99.9990418');
        var elasticScale = mojs.easing.path('M1.77635684e-15,-0.000957489014 L42.4468,-0.000958179367 C46.3646102,-108.625514 51.8137449,-22.1968935 53.2538649,-1.19524857 C54.3071019,14.1643792 57.4212363,45.7772847 62.4147182,-1.19525215 C62.4147182,-1.19524958 64.981755,-26.833792 70.2635684,-1.19525215 C73.8553743,14.6132996 81.1660962,-1.19524958 100,-0.000958179367');
        var nElasticScale = not(elasticScale, 2);
        var char1 = new mojs.Shape(__assign({}, charOpts, { y: (_b = {}, _b[Y_SHIFT] = -100 + Y_SHIFT, _b), angle: { 0: -50 }, x: -CHAR_STEP + X_SHIFT, scaleX: { 1: 1, curve: bounceCurve }, scaleY: { 1: 1, curve: nBounceCurve }, easing: 'quad.out', origin: '50% 100%', duration: 350 }))
            .then({
            y: Y_SHIFT,
            angle: { to: -100, curve: elasticCurve },
            easing: 'bounce.out',
            duration: 850
        });
        this.character1 = document.createElement('div');
        this.character1.classList.add('character');
        char1.el.appendChild(this.character1);
        var char2 = new mojs.Shape(__assign({}, charOpts, { y: (_c = {}, _c[Y_SHIFT] = -125 + Y_SHIFT, _c), angle: (_d = {}, _d[-90] = -50, _d), x: X_SHIFT, scaleX: { .5: 1, curve: bounceCurve }, scaleY: { 1: 1, curve: nBounceCurve }, easing: 'quad.out', origin: '50% 100%', delay: charOpts.delay + 75, duration: 350 }))
            .then({
            y: Y_SHIFT,
            angle: { to: 100, curve: elasticCurve },
            easing: 'bounce.out',
            duration: 950
        });
        this.character2 = document.createElement('div');
        this.character2.classList.add('character');
        char2.el.appendChild(this.character2);
        var char3 = new mojs.Shape(__assign({}, charOpts, { y: (_e = {}, _e[Y_SHIFT] = -150 + Y_SHIFT, _e), angle: { 0: -180, easing: 'cubic.in' }, x: -2 * CHAR_STEP + X_SHIFT, scaleY: { 1: 1, curve: bounceCurve }, scaleX: { 1: 1, curve: nBounceCurve }, easing: 'quad.out', delay: charOpts.delay + 250, duration: 350 }))
            .then({
            y: Y_SHIFT,
            angle: { to: -360, easing: 'expo.out' },
            easing: 'bounce.out',
            duration: 1000,
            origin: '50% 100%',
        });
        this.character3 = document.createElement('div');
        this.character3.classList.add('character');
        this.character3.classList.add('a');
        char3.el.appendChild(this.character3);
        var char4 = new mojs.Shape(__assign({}, charOpts, { y: (_f = {}, _f[Y_SHIFT] = -125 + Y_SHIFT, _f), angle: { 0: 180, easing: 'cubic.in' }, x: CHAR_STEP + X_SHIFT, scaleY: { 1: 1, curve: nBounceCurve }, scaleX: { 1: 1, curve: bounceCurve }, easing: 'quad.out', delay: charOpts.delay + 500, duration: 300 }))
            .then({
            y: Y_SHIFT,
            scaleX: { 1: 1, curve: elasticScale },
            scaleY: { 1: 1, curve: nElasticScale },
            angle: { to: 360, easing: 'expo.out' },
            easing: 'bounce.out',
            duration: 1000,
        });
        this.character4 = document.createElement('div');
        this.character4.classList.add('character');
        char4.el.appendChild(this.character4);
        var burst1 = new mojs.Burst({
            left: '50%', top: '50%',
            degree: 20,
            count: 2,
            angle: -90,
            parent: parent,
            x: -150 + X_SHIFT,
            y: -100 + Y_SHIFT,
            radius: { 10: 100 },
            timeline: { delay: 900 },
            children: {
                shape: 'line',
                scale: { 1: 0 },
                radius: 'rand(8, 18)',
                radiusY: 0,
                stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
                strokeWidth: 7,
                duration: 550,
                isForce3d: true
            }
        });
        burst1.el.classList.add('burst');
        var burst2 = new mojs.Burst({
            left: '50%', top: '50%',
            degree: 20,
            count: 2,
            parent: parent,
            // angle:   -90,
            x: CHAR_STEP + X_SHIFT,
            y: Y_SHIFT,
            radius: { 10: 100 },
            timeline: { delay: 2150 },
            children: {
                shape: 'line',
                scale: { 1: 0 },
                radius: 'rand(8, 18)',
                radiusY: 0,
                stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
                strokeWidth: 7,
                duration: 550,
                isForce3d: true
            },
            onComplete: function () {
                this.generate().replay();
            }
        });
        burst2.el.classList.add('burst');
        var line = new mojs.Shape({
            shape: 'line',
            parent: parent,
            stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
            radius: 40,
            radiusY: 0,
            x: -CHAR_STEP + X_SHIFT,
            y: 50 + Y_SHIFT,
            scaleX: { 0: 1 },
            strokeWidth: 4,
            left: '50%', top: '50%',
            delay: 1550,
            duration: 100,
            isTimelineLess: true,
            isShowEnd: false
        });
        line.el.style['z-index'] = 1;
        var line2 = new mojs.Shape({
            shape: 'line',
            parent: parent,
            stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
            radius: 15,
            radiusY: 0,
            x: (_g = {}, _g[X_SHIFT] = CHAR_STEP + X_SHIFT, _g),
            y: 50 + Y_SHIFT,
            scaleX: { 1: 0 },
            strokeWidth: 4,
            left: '50%', top: '50%',
            delay: 1550,
            duration: 400,
            isTimelineLess: true,
            isShowEnd: false
        });
        line2.el.style['z-index'] = 1;
        this.timeline = new mojs.Timeline({ speed: 1 });
        var speechBurst = new mojs.Burst({
            left: '50%', top: '50%',
            degree: 120,
            count: 5,
            parent: speech.el,
            angle: -60,
            x: 3,
            radius: { 55: 95 },
            timeline: { delay: 0 },
            children: {
                shape: 'line',
                scale: { 2: 0 },
                radius: 12,
                radiusY: 0,
                stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
                strokeWidth: 7,
                duration: 500,
                isForce3d: true
            },
            onComplete: function () {
                this.generate().replay();
            }
        });
        speechBurst.el.classList.add('burst');
        this.timeline
            .add(char1, char2, char3, char4, burst1, burst2, line, line2, speech, speechBurst, undeline);
        return this;
        var _a, _b, _c, _d, _e, _f, _g;
    };
    Characters.prototype.setWord = function (word) {
        if (word === void 0) { word = 'love'; }
        var WORD = word.split('');
        this.character1.innerText = WORD[1];
        this.character2.innerText = WORD[2];
        this.character3.innerText = WORD[0];
        this.character4.innerText = WORD[3];
    };
    return Characters;
}());



/***/ }),

/***/ "./src/app/about-me/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/about-me/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\" data-tag=\"dark-mode-applicable\">\n    <div class=\"app-header-xs\" [hidden]=\"!showLightHeader\">\n        <div class=\"app-header-xs-img-holder\">\n            <img data-lazy-load=\"true\" src=\"assets/profile-pics/asit_2020.jpg\" [attr.id]=\"picId\"/>\n        </div>\n        <div class=\"app-header-xs-title\">\n            <label>Asit Parida</label>\n        </div>\n    </div>\n    <!-- <div id=\"js-modal-hide-layer\" class=\"layer-text\"></div> -->\n    <ul class=\"app-header-topskills\">\n        <li>UX Design</li>\n        <li>Web & Native</li>\n        <li>Rapid Prototyping</li>\n        <li>Front End Engineering</li>\n        <li>Accessibility</li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/about-me/header/header.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/about-me/header/header.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-header {\n  padding: 60px 0 15px 0;\n  min-height: 300px;\n  width: 100%;\n  display: block; }\n  .app-header.dark {\n    background: #444; }\n  .app-header.dark .layer-text .character {\n      color: #fff;\n      text-shadow: -2px -2px rgba(255, 255, 255, 0.5); }\n  .app-header.dark .layer-text .character.a {\n        left: -10px; }\n  .app-header.dark .layer-text svg path.bubble-path {\n      stroke: rgba(255, 255, 255, 0.5); }\n  .app-header.dark .layer-text svg path.undeline {\n      stroke: rgba(255, 255, 255, 0.5); }\n  .app-header.dark .layer-text .burst svg line {\n      stroke: rgba(255, 255, 255, 0.5); }\n  .app-header.dark .app-header-topskills li {\n      color: rgba(255, 255, 255, 0.8); }\n  .app-header.dark .app-header-topskills li:after {\n        content: '';\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: rgba(255, 255, 255, 0.33);\n        display: inline-block;\n        margin-left: 30px;\n        margin-right: 30px; }\n  .app-header.dark .app-header-topskills li:last-child:after {\n        background: transparent;\n        margin: 0; }\n  .app-header .layer-text {\n    display: block;\n    margin: 0 auto;\n    height: 300px;\n    position: relative;\n    z-index: 10; }\n  @media only screen and (min-width: 769px) {\n      .app-header .layer-text {\n        width: 400px; } }\n  @media only screen and (max-width: 768px) {\n      .app-header .layer-text {\n        width: 100%;\n        display: none; } }\n  .app-header .layer-text .character {\n      color: #3498db;\n      text-shadow: -2px -2px rgba(52, 152, 219, 0.1);\n      font-size: 68px;\n      font-weight: bold;\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      text-align: center;\n      line-height: .475;\n      font-family: 'Open sans', sans-serif; }\n  .app-header .layer-text .character.a {\n        left: -10px; }\n  .app-header .layer-text svg path.bubble-path {\n      stroke: rgba(52, 152, 219, 0.33);\n      stroke-width: 5px; }\n  .app-header-topskills {\n    margin: 0;\n    list-style: none;\n    width: 100%;\n    text-align: center;\n    padding: 0;\n    position: relative;\n    opacity: 1; }\n  @media only screen and (max-width: 768px) {\n      .app-header-topskills {\n        display: none; } }\n  .app-header-topskills li {\n      font-size: small;\n      margin: 0;\n      color: #565656;\n      font-weight: 500;\n      text-align: center;\n      display: inline;\n      font-family: 'Open sans', sans-serif;\n      font-weight: bold;\n      text-transform: uppercase; }\n  .app-header-topskills li:after {\n        content: '';\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: rgba(39, 174, 96, 0.5);\n        display: inline-block;\n        margin-left: 45px;\n        margin-right: 45px; }\n  .app-header-topskills li:last-child:after {\n        background: transparent;\n        margin: 0; }\n  .app-header-xs-img-holder {\n    height: 200px;\n    width: 200px;\n    border: 10px solid rgba(39, 174, 96, 0.2);\n    border-radius: 50%;\n    overflow: hidden;\n    display: block;\n    margin: 30px auto; }\n  .app-header-xs-img-holder img {\n      height: 100%;\n      opacity: 0;\n      transition: opacity 0.2s ease-in 0s;\n      position: relative; }\n  .app-header-xs-title {\n    width: 100%;\n    padding: 0 15px 30px 15px;\n    box-sizing: border-box; }\n  @media only screen and (max-width: 768px) {\n      .app-header-xs-title {\n        padding: 0 15px 0px 15px; } }\n  .app-header-xs-title label {\n      display: block;\n      margin: 0 auto;\n      text-align: center;\n      font-size: 3em;\n      text-transform: capitalize;\n      color: #27ae60; }\n  @media only screen and (max-width: 768px) {\n        .app-header-xs-title label {\n          font-size: 2em; } }\n"

/***/ }),

/***/ "./src/app/about-me/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/about-me/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _characters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters.component */ "./src/app/about-me/header/characters.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SHOW_HEADER_ANIMATION = false;
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'app works!';
        this.showLightHeader = false;
        this.picId = 'pic' + Math.floor(Math.random() * 1000);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 768) {
            this.showLightHeader = true;
        }
        else {
            this.showLightHeader = false;
        }
        this.showLightHeader = true;
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        if (!this.showLightHeader && SHOW_HEADER_ANIMATION) {
            setTimeout(function () {
                var mainTimeline = new mojs.Timeline;
                var _ch = new _characters_component__WEBPACK_IMPORTED_MODULE_1__["Characters"](1000);
                _ch.setWord('asit');
                mainTimeline.add(_ch).play();
                document.addEventListener('visibilitychange', function _func() {
                    if (!document.hidden && !mainTimeline._isCompleted) {
                        mainTimeline.replay();
                    }
                    if (mainTimeline._isCompleted) {
                        document.removeEventListener('visibilitychange', _func);
                    }
                }, false);
            }, 100);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/about-me/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/about-me/header/header.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"router-content\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n<app-top-scroller></app-top-scroller>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".router-content {\n  padding: 60px 0; }\n  @media only screen and (max-width: 768px) {\n    .router-content {\n      padding: 80px 0 60px 0; } }\n  .grid-separator {\n  background: linear-gradient(-45deg, #e1f0fa 16px, red 16px, #e1f0fa 16px, transparent 0), linear-gradient(45deg, #e1f0fa 16px, transparent 0);\n  background-position: left top;\n  background-repeat: repeat-x;\n  background-size: 18px 32px;\n  content: \" \";\n  display: block;\n  height: 32px;\n  width: 100%;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  -webkit-transform: scaleY(-1);\n          transform: scaleY(-1); }\n  .grid-separator.top {\n    top: 0; }\n  .grid-separator.reverse {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  .grid-separator.dark {\n    background: linear-gradient(-45deg, #444 16px, red 16px, #444 16px, transparent 0), linear-gradient(45deg, #444 16px, transparent 0);\n    background-position: left top;\n    background-repeat: repeat-x;\n    background-size: 18px 32px; }\n  .tabs {\n  text-align: center;\n  display: block;\n  margin: 15px auto 0 auto;\n  padding: 0;\n  box-sizing: border-box; }\n  @media only screen and (min-width: 769px) {\n    .tabs {\n      margin-top: 20px; } }\n  .tabs .tab-toggler {\n    padding: 5px 5px 0 5px; }\n  @media only screen and (min-width: 769px) {\n      .tabs .tab-toggler {\n        text-align: center;\n        display: inline-block; } }\n  @media only screen and (max-width: 768px) {\n      .tabs .tab-toggler {\n        padding: 0; } }\n  .tabs .tab-toggler button {\n      display: inline-block;\n      line-height: 60px;\n      height: 60px;\n      padding: 0;\n      border: none;\n      font-weight: 100;\n      outline: none;\n      font-size: medium;\n      font-weight: 100;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      box-sizing: border-box;\n      text-align: center;\n      color: #909090;\n      background: transparent;\n      border-bottom: 3px solid rgba(52, 152, 219, 0.1); }\n  .tabs .tab-toggler button.active {\n        font-weight: bold;\n        color: #3498db;\n        border-bottom: 3px solid #3498db; }\n  @media only screen and (min-width: 769px) {\n          .tabs .tab-toggler button.active {\n            width: auto; } }\n  @media only screen and (max-width: 768px) {\n        .tabs .tab-toggler button {\n          border-bottom-width: 3px;\n          font-size: medium;\n          font-weight: 100;\n          text-transform: uppercase;\n          width: 49%; } }\n  @media only screen and (min-width: 769px) {\n        .tabs .tab-toggler button {\n          width: auto;\n          padding: 0 15px; } }\n  @media only screen and (max-width: 768px) {\n    .tabs {\n      padding: 12px 12px 0 12px;\n      margin-top: 0; } }\n  @media only screen and (min-width: 1210px) {\n  .tabs {\n    width: 1200px !important; } }\n  @media (min-width: 800px) and (max-width: 1209px) {\n  .tabs {\n    width: 800px !important; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ADD_DOCK = false;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.COLORS = {
            RED: '#FD5061',
            YELLOW: '#FFCEA5',
            BLACK: '#29363B',
            WHITE: 'white',
            VINOUS: '#A50710'
        };
        this.currentTab = 0;
        var self = this;
    }
    AppComponent.prototype.activateTab = function (index) {
        if (this.currentTab !== index) {
            if (gtag) {
                gtag('event', 'open-navigation-detail', {
                    'event_category': 'Navigation',
                    'event_label': index === 1 ? 'About Me' : 'Projects'
                });
            }
            this.currentTab = index;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener('animate-remove-byscrollfx', function (e) {
            var _details = e.detail;
            if (_details.el) {
                var _img = _details.el.querySelector('img');
                if (_img) {
                    _img.src = _img.getAttribute('data-tag-lazy');
                }
            }
        });
        document.addEventListener('load', function (e) {
            var elm = e.target;
            if (elm.tagName === 'IMG') {
                if (elm.hasAttribute('data-lazy-load')) {
                    if (elm.getAttribute('data-lazy-load') === 'true') {
                        elm.onload = function () {
                            elm.classList.add('show');
                        };
                    }
                }
            }
        }, true);
    };
    // tslint:disable max-line-length
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_me_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-me/header/header.component */ "./src/app/about-me/header/header.component.ts");
/* harmony import */ var _other_projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-projects/projects/projects.component */ "./src/app/other-projects/projects/projects.component.ts");
/* harmony import */ var _git_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./git-link.component */ "./src/app/git-link.component.ts");
/* harmony import */ var _about_me_bio_bio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-me/bio/bio.component */ "./src/app/about-me/bio/bio.component.ts");
/* harmony import */ var _other_projects_projects_defer_load_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./other-projects/projects/defer-load.directive */ "./src/app/other-projects/projects/defer-load.directive.ts");
/* harmony import */ var _structure_top_scroller_top_scroller_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./structure/top-scroller/top-scroller.component */ "./src/app/structure/top-scroller/top-scroller.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _collection_bun_bun_bun_bun_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collection/bun-bun/bun-bun.component */ "./src/app/collection/bun-bun/bun-bun.component.ts");
/* harmony import */ var _collection_not_so_grey_not_so_grey_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./collection/not-so-grey/not-so-grey.component */ "./src/app/collection/not-so-grey/not-so-grey.component.ts");
/* harmony import */ var _collection_lean_case_lean_case_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./collection/lean-case/lean-case.component */ "./src/app/collection/lean-case/lean-case.component.ts");
/* harmony import */ var _collection_moosik_moosik_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./collection/moosik/moosik.component */ "./src/app/collection/moosik/moosik.component.ts");
/* harmony import */ var _collection_veritas_veritas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./collection/veritas/veritas.component */ "./src/app/collection/veritas/veritas.component.ts");
/* harmony import */ var _collection_transit_display_transit_display_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./collection/transit-display/transit-display.component */ "./src/app/collection/transit-display/transit-display.component.ts");
/* harmony import */ var _collection_idiff_idiff_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./collection/idiff/idiff.component */ "./src/app/collection/idiff/idiff.component.ts");
/* harmony import */ var _collection_privacy_grade_privacy_grade_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./collection/privacy-grade/privacy-grade.component */ "./src/app/collection/privacy-grade/privacy-grade.component.ts");
/* harmony import */ var _structure_picture_carousel_picture_carousel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./structure/picture-carousel/picture-carousel.component */ "./src/app/structure/picture-carousel/picture-carousel.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _other_projects_other_projects_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./other-projects/other-projects.component */ "./src/app/other-projects/other-projects.component.ts");
/* harmony import */ var _my_skills_my_skills_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./my-skills/my-skills.component */ "./src/app/my-skills/my-skills.component.ts");
/* harmony import */ var _structure_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./structure/navigation/navigation.component */ "./src/app/structure/navigation/navigation.component.ts");
/* harmony import */ var _about_me_contact_contact_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./about-me/contact/contact.component */ "./src/app/about-me/contact/contact.component.ts");
/* harmony import */ var _img_zoomer_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./img-zoomer.directive */ "./src/app/img-zoomer.directive.ts");
/* harmony import */ var _click_outside_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./click-outside.directive */ "./src/app/click-outside.directive.ts");
/* harmony import */ var _structure_prototype_viewer_prototype_viewer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./structure/prototype-viewer/prototype-viewer.component */ "./src/app/structure/prototype-viewer/prototype-viewer.component.ts");
/* harmony import */ var _structure_pitch_video_pitch_video_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./structure/pitch-video/pitch-video.component */ "./src/app/structure/pitch-video/pitch-video.component.ts");
/* harmony import */ var _structure_project_previewer_project_previewer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./structure/project-previewer/project-previewer.component */ "./src/app/structure/project-previewer/project-previewer.component.ts");
/* harmony import */ var _gif_loader_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./gif-loader.directive */ "./src/app/gif-loader.directive.ts");
/* harmony import */ var _structure_anchorage_holder_anchorage_holder_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./structure/anchorage-holder/anchorage-holder.component */ "./src/app/structure/anchorage-holder/anchorage-holder.component.ts");
/* harmony import */ var _structure_prism_snippet_prism_snippet_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./structure/prism-snippet/prism-snippet.component */ "./src/app/structure/prism-snippet/prism-snippet.component.ts");
/* harmony import */ var _structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./structure/footer/footer.component */ "./src/app/structure/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_me_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _structure_footer_footer_component__WEBPACK_IMPORTED_MODULE_35__["FooterComponent"],
                _other_projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _git_link_component__WEBPACK_IMPORTED_MODULE_7__["GitLinkComponent"],
                _other_projects_projects_defer_load_directive__WEBPACK_IMPORTED_MODULE_9__["DeferLoadDirective"],
                _about_me_bio_bio_component__WEBPACK_IMPORTED_MODULE_8__["BioComponent"],
                _structure_top_scroller_top_scroller_component__WEBPACK_IMPORTED_MODULE_10__["TopScrollerComponent"],
                _collection_bun_bun_bun_bun_component__WEBPACK_IMPORTED_MODULE_13__["BunBunComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _collection_not_so_grey_not_so_grey_component__WEBPACK_IMPORTED_MODULE_14__["NotSoGreyComponent"],
                _collection_lean_case_lean_case_component__WEBPACK_IMPORTED_MODULE_15__["LeanCaseComponent"],
                _collection_moosik_moosik_component__WEBPACK_IMPORTED_MODULE_16__["MoosikComponent"],
                _collection_veritas_veritas_component__WEBPACK_IMPORTED_MODULE_17__["VeritasComponent"],
                _collection_transit_display_transit_display_component__WEBPACK_IMPORTED_MODULE_18__["TransitDisplayComponent"],
                _collection_idiff_idiff_component__WEBPACK_IMPORTED_MODULE_19__["IdiffComponent"],
                _collection_privacy_grade_privacy_grade_component__WEBPACK_IMPORTED_MODULE_20__["PrivacyGradeComponent"],
                _structure_picture_carousel_picture_carousel_component__WEBPACK_IMPORTED_MODULE_21__["PictureCarouselComponent"],
                _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_22__["AboutMeComponent"],
                _other_projects_other_projects_component__WEBPACK_IMPORTED_MODULE_23__["OtherProjectsComponent"],
                _my_skills_my_skills_component__WEBPACK_IMPORTED_MODULE_24__["MySkillsComponent"],
                _structure_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_25__["NavigationComponent"],
                _about_me_contact_contact_component__WEBPACK_IMPORTED_MODULE_26__["ContactComponent"],
                _img_zoomer_directive__WEBPACK_IMPORTED_MODULE_27__["ImgZoomerDirective"],
                _click_outside_directive__WEBPACK_IMPORTED_MODULE_28__["ClickOutsideDirective"],
                _structure_prototype_viewer_prototype_viewer_component__WEBPACK_IMPORTED_MODULE_29__["PrototypeViewerComponent"],
                _structure_pitch_video_pitch_video_component__WEBPACK_IMPORTED_MODULE_30__["PitchVideoComponent"],
                _structure_project_previewer_project_previewer_component__WEBPACK_IMPORTED_MODULE_31__["ProjectPreviewerComponent"],
                _gif_loader_directive__WEBPACK_IMPORTED_MODULE_32__["GifLoaderDirective"],
                _structure_anchorage_holder_anchorage_holder_component__WEBPACK_IMPORTED_MODULE_33__["AnchorageHolderComponent"],
                _structure_prism_snippet_prism_snippet_component__WEBPACK_IMPORTED_MODULE_34__["PrismSnippetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _collection_bun_bun_bun_bun_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection/bun-bun/bun-bun.component */ "./src/app/collection/bun-bun/bun-bun.component.ts");
/* harmony import */ var _collection_not_so_grey_not_so_grey_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collection/not-so-grey/not-so-grey.component */ "./src/app/collection/not-so-grey/not-so-grey.component.ts");
/* harmony import */ var _collection_veritas_veritas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collection/veritas/veritas.component */ "./src/app/collection/veritas/veritas.component.ts");
/* harmony import */ var _collection_lean_case_lean_case_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collection/lean-case/lean-case.component */ "./src/app/collection/lean-case/lean-case.component.ts");
/* harmony import */ var _collection_privacy_grade_privacy_grade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collection/privacy-grade/privacy-grade.component */ "./src/app/collection/privacy-grade/privacy-grade.component.ts");
/* harmony import */ var _collection_transit_display_transit_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collection/transit-display/transit-display.component */ "./src/app/collection/transit-display/transit-display.component.ts");
/* harmony import */ var _collection_idiff_idiff_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collection/idiff/idiff.component */ "./src/app/collection/idiff/idiff.component.ts");
/* harmony import */ var _collection_moosik_moosik_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collection/moosik/moosik.component */ "./src/app/collection/moosik/moosik.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _other_projects_other_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./other-projects/other-projects.component */ "./src/app/other-projects/other-projects.component.ts");
/* harmony import */ var _my_skills_my_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-skills/my-skills.component */ "./src/app/my-skills/my-skills.component.ts");
/* harmony import */ var _about_me_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about-me/contact/contact.component */ "./src/app/about-me/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { uid: 1000 } },
    { path: 'about-me', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_11__["AboutMeComponent"], data: { uid: 5000 } },
    { path: 'contact', component: _about_me_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"] },
    { path: 'other-projects', component: _other_projects_other_projects_component__WEBPACK_IMPORTED_MODULE_12__["OtherProjectsComponent"], data: { uid: 3000 } },
    { path: 'tools', component: _my_skills_my_skills_component__WEBPACK_IMPORTED_MODULE_13__["MySkillsComponent"], data: { uid: 4000 } },
    { path: 'featured', redirectTo: 'featured/veritas', pathMatch: 'full', data: { uid: 2000 } },
    { path: 'featured/bun-bun', component: _collection_bun_bun_bun_bun_component__WEBPACK_IMPORTED_MODULE_3__["BunBunComponent"], data: { uid: 2001 } },
    { path: 'featured/not-so-grey', component: _collection_not_so_grey_not_so_grey_component__WEBPACK_IMPORTED_MODULE_4__["NotSoGreyComponent"], data: { uid: 2002 } },
    { path: 'featured/veritas', component: _collection_veritas_veritas_component__WEBPACK_IMPORTED_MODULE_5__["VeritasComponent"], data: { uid: 2003 } },
    { path: 'featured/lean-case', component: _collection_lean_case_lean_case_component__WEBPACK_IMPORTED_MODULE_6__["LeanCaseComponent"], data: { uid: 2004 } },
    { path: 'featured/privacy-grade', component: _collection_privacy_grade_privacy_grade_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyGradeComponent"], data: { uid: 2005 } },
    { path: 'featured/transit-display', component: _collection_transit_display_transit_display_component__WEBPACK_IMPORTED_MODULE_8__["TransitDisplayComponent"], data: { uid: 2006 } },
    { path: 'featured/idiff', component: _collection_idiff_idiff_component__WEBPACK_IMPORTED_MODULE_9__["IdiffComponent"], data: { uid: 2007 } },
    { path: 'featured/moosik', component: _collection_moosik_moosik_component__WEBPACK_IMPORTED_MODULE_10__["MoosikComponent"], data: { uid: 2008 } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/click-outside.directive.ts":
/*!********************************************!*\
  !*** ./src/app/click-outside.directive.ts ***!
  \********************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/collection/bun-bun/bun-bun.component.html":
/*!***********************************************************!*\
  !*** ./src/app/collection/bun-bun/bun-bun.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<anchorage-holder></anchorage-holder>\n<div class=\"project-contents\">\n    <section class=\"project-section h100Adjusted justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Introduction</span>\n        <div class=\"section-wrapper alignItemsBottom\">\n            <div class=\"main-section alignItemsCenter header-section\">\n                <h1 style=\"margin-top: 0;\">Bun Bun Bakery</h1>\n                <p style=\"margin: 0 0 30px 0;\">An online shop for the best cinnamon buns in town</p>\n                <div class=\"tags centered\">\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/layers.png\">\n                        <label>design</label>\n                    </div>\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/research.png\">\n                        <label>evaluative research</label>\n                    </div>\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/prototype.png\">\n                        <label>prototyping</label>\n                    </div>\n                </div>\n                <div class=\"live-proto-btn\">\n                    <a class=\"portfolio-btn\" style=\"margin-right: 15px;\" href=\"https://bun-bun.azurewebsites.net\" target=\"_blank\">Visit Website</a>\n                </div>\n            </div>\n            <div class=\"content-available-below-fold\">\n                <img data-lazy-load=\"true\" src=\"assets/arrow_upward.png\" />\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h60\">\n        <div class=\"section-wrapper w100 alignItemsFlexStart\">\n            <div class=\"tri-section\">\n                <h2>Why</h2>\n                <h3>did I pick this project ?</h3>\n                <p>\n                    This project was <strong>my first segway into paper-prototyping</strong> after I joined my master's program.\n                    The <strong>evolution</strong> of the design from lo-fi iterations to mid-fi and then building out the exact pixel\n                    perfect screens for a web-app was a fascinating experience.\n                    I could clearly sense the gradual improvement of the screens and understand why<strong> lo-fi prototyping</strong> and\n                    <strong>guerilla testing</strong> are essential during the ideation and discovery phases.\n                </p>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h60\">\n        <span data-type=\"anchor-elem\">Design Language</span>\n        <div class=\"section-wrapper alignItemsFlexStart w100\">\n            <div class=\"tri-section w2\">\n                <h2>Visual Language</h2>\n                <p>\n                    The first step was to create a visual language for the design.\n                    I looked at the existing phone and web apps, in the food-commerce space, for inspiration.\n                    The <a href=\"https://coolors.co/\" target=\"_blank\">Coolors</a> site was an excellent tool to browse\n                    through some cool color palettes related to cinnamon rolls and bakery in general.\n                </p>\n            </div>\n            <div class=\"tri-section w2 justifyAlignCenter\">\n                <img imgZoomer data-lazy-load=\"true\" class=\"boxed\" src=\"assets/bun-bun/bun-bun.jpg\" />\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h50 justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Paper Prototyping</span>\n        <div class=\"section-wrapper w100\">\n            <div class=\"tri-section w1\">\n                <h2>Paper Prototyping</h2>\n                <h3>Iteration #1</h3>\n                <p>\n                        I created low-fidelity paper prototypes to test out the screens quickly. The idea was to validate out the skeleton for the web-app. The online e-shopping experience was created using papers, post-its, and sharpies. I also created simple use-cases for baseline testing.\n                </p>\n                <div class=\"comments-wrapper\">\n                    <div class=\"comment\">\n                        <h4 class=\"highlight\">Use-Case #1</h4>\n                        <p class=\"highlight-text\">Alex is a Business Person who knows what exactly she wants. She wants quick ordering and custom order.</p>\n                    </div>\n                    <div class=\"comment\">\n                        <h4 class=\"highlight\">Use-Case #2</h4>\n                        <p class=\"highlight-text\">Pam is a Business Event organizer. She is looking for reasonable offers on catering. She also prefers to bulk order for an event.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"tri-section w1 justifyAlignCenter\">\n                <app-picture-carousel staggerStep=\"10\" listWrapperClass=\"bun-bun-hand-drawn-list-carousel\"\n                    [bottomStagger]=\"true\" carouselWrapperClass=\"bun-bun-hand-drawn-place-carousel\" [items]=\"poaperPrototypesFirstCarouselItems\"></app-picture-carousel>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h50 justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Testing</span>\n        <div class=\"section-wrapper w100\">\n            <div class=\"tri-section\">\n                <h2></h2>\n                <h3>Guerilla Testing & Next Iterations</h3>\n            </div>\n        </div>\n        <div class=\"section-wrapper alignItemsFlexStart w100 p-t-b-0\">\n            <div class=\"tri-section\">\n                <h4 class=\"highlight\">Feedback #1</h4>\n                <p class=\"highlight-text\">In the homepage, images inside the carousel dont make sense and could be just\n                    changed to full bleed images.</p>\n            </div>\n            <div class=\"tri-section\">\n                <h4 class=\"highlight\">Feedback #2</h4>\n                <p class=\"highlight-text\">In the final confirmation page – the details after order is processed did not\n                    reflect the context earlier i.e. if store pick or delivery was selected.</p>\n            </div>\n            <div class=\"tri-section\">\n                <h4 class=\"highlight\">Feedback #3</h4>\n                <p class=\"highlight-text\">The call-to-action in the this iterations doesn't make sense as the ‘ORDER’\n                    button is not easily discoverable. </p>\n            </div>\n        </div>\n        <div class=\"section-wrapper w100 hidden-xs\" style=\"padding-top: 0;\">\n            <div class=\"tri-section\">\n                <button class=\"portfolio-btn\" (click)=\"showProtoTypeViewer = true;\"> Compare fidelities</button>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h75 justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Development</span>\n        <div class=\"section-wrapper w100 \">\n            <div class=\"tri-section\">\n                <h2>Digital Prototyping</h2>\n                <p>\n                    Once the paper-prototypes were locked in, I moved to high-fi static designs created in Adobe XD and\n                    then to building the working prototype using Angular 5 & TypeScript.\n                    Below is a video preview of the working prototype.\n                </p>\n                <div class=\"macbook-wrapper hidden-xs\">\n                    <div class=\"marvel-device macbook\">\n                        <div class=\"top-bar\"></div>\n                        <div class=\"camera\"></div>\n                        <div class=\"screen\">\n                            <div class=\"player-holder\">\n                                <video controls crossorigin playsinline id=\"player\" class=\"plyr-player\">\n                                    <source src=\"https://s3.us-east-2.amazonaws.com/asitparida-portfolio/BunBun.mp4\"\n                                        type=\"video/mp4\">\n                                </video>\n                            </div>\n                        </div>\n                        <div class=\"bottom-bar\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h20 justifyAlignCenter\">\n        <div class=\"section-wrapper w100 footer-section\">\n            <div class=\"tri-section w2\">\n                <h4>Links</h4>\n                <div class=\"btn-containers\">\n                    <a href=\"https://github.com/asitparida/bunbun\" target=\"_blank\" class=\"portfolio-btn\">Visit GitHub</a>\n                    <a href=\"https://bun-bun.azurewebsites.net\" target=\"_blank\" class=\"portfolio-btn\">Visit Website</a>\n                </div>\n            </div>\n            <div class=\"tri-section w1 justifyAlignFlexStart\">\n                <h4>Credits</h4>\n                <p>\n                    <a href=\"https://www.flaticon.com/\" target=\"_blank\">Flat Icon</a>\n                </p>\n            </div>\n        </div>\n        <div class=\"section-wrapper w100 footer-section projects-hyperlinks hidden-xs\">\n                <div class=\"projects-hyperlinks-content\">\n                    <a class=\"project-nav-link\" [routerLink]=\"['/featured/transit-display']\"><img\n                            src=\"assets/keyboard_left.png\" /><span class=\"text\"><span class=\"text-uppercase\">Previous Project:</span> Transit Hub Display</span></a>\n                    <a class=\"project-nav-link\" [routerLink]=\"['/other-projects']\"><span class=\"text\"><span\n                                class=\"text-uppercase override\">Other Projects</span></span><img class=\"right\"\n                            src=\"assets/keyboard_left.png\" /></a>\n                </div>\n            </div>\n    </section>\n</div>\n<div class=\"prototype-viewer\" *ngIf=\"showProtoTypeViewer\" (keyup.escape)=\" showProtoTypeViewer = false;\" tabindex=\"0\">\n    <div class=\"close\" (keyup.enter)=\" showProtoTypeViewer = false;\" (click)=\" showProtoTypeViewer = false;\">Close</div>\n    <div class=\"marvel-device ipad diff-ipad\">\n        <div class=\"camera\"></div>\n        <div class=\"screen\">\n            <app-prototype-viewer src=\"https://idiff.azurewebsites.net/preview/5e91671d-21e1-f2ee-d00c-750421a30c01?forceResolution=full\"></app-prototype-viewer>\n        </div>\n    </div>\n    <label>Use the drag handler to compare the low-fidelity and high-fidelity designs side-by-side</label>\n</div>"

/***/ }),

/***/ "./src/app/collection/bun-bun/bun-bun.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/collection/bun-bun/bun-bun.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.project-section {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  padding: 0;\n  min-height: 400px;\n  position: relative;\n  overflow-x: hidden; }\n\n@media only screen and (max-width: 768px) {\n    .project-section {\n      padding: 15px 0; } }\n\n.project-section .content-available-below-fold {\n    opacity: 0.20;\n    width: 48px;\n    height: 48px;\n    position: absolute;\n    bottom: 60px;\n    left: 50%;\n    margin-left: -24px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.project-section .content-available-below-fold img {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n\n@media only screen and (max-width: 768px) {\n      .project-section .content-available-below-fold {\n        display: none; } }\n\n@media only screen and (min-width: 769px) {\n    .project-section.h100Adjusted {\n      min-height: calc(100vh - 60px); } }\n\n.project-section.h100Adjusted .section-wrapper {\n    padding: 30px 60px 75px 60px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section.h100Adjusted .section-wrapper {\n        padding: 15px 15px 15px 15px; } }\n\n@media only screen and (min-width: 769px) {\n    .project-section.h100 {\n      min-height: 100vh; } }\n\n.project-section.h20 {\n    min-height: 200px; }\n\n.project-section:nth-child(2n + 2) {\n    background: #f1f8ff; }\n\n.project-section a {\n    text-decoration: underline;\n    color: #1a1919;\n    padding: 0; }\n\n.project-section a.portfolio-btn {\n      text-decoration: none; }\n\n.project-section .left-section,\n  .project-section .main-section {\n    width: 100%;\n    padding: 0px 30px;\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    flex-direction: column;\n    order: 1;\n    flex: initial;\n    height: 100%; }\n\n.project-section .left-section.header-section p,\n    .project-section .main-section.header-section p {\n      margin: 0 15px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .left-section,\n      .project-section .main-section {\n        width: 100%;\n        padding: 0px; }\n        .project-section .left-section.alignItemsFlexEnd,\n        .project-section .main-section.alignItemsFlexEnd {\n          align-items: center !important; } }\n\n.project-section .left-section {\n    width: 60%; }\n\n.project-section .left-section + .right-section {\n      width: 40%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .left-section {\n        width: 100%; } }\n\n.project-section .right-section {\n    padding: 0px 30px 0 80px;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n    order: 2;\n    flex: 1;\n    height: 100%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .right-section {\n        display: none; } }\n\n.project-section .section-wrapper {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    padding: 60px 15px;\n    max-width: 1200px; }\n\n.project-section .section-wrapper.w100 {\n      width: 100%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .section-wrapper {\n        padding: 0 15px;\n        flex-direction: column; } }\n\n.project-section .section-item {\n    flex: 1;\n    padding: 0 30px; }\n\n.project-section .section-items-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row; }\n\n.project-section .tri-section {\n    order: 1;\n    flex: 1;\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    flex-direction: column;\n    padding: 0 30px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section {\n        padding: 15px; }\n        .project-section .tri-section.comments-wrapper-section {\n          padding-top: 0; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section h2, .project-section .tri-section h3, .project-section .tri-section p {\n        text-align: left; } }\n\n.project-section .tri-section p {\n      font-size: 1.15em;\n      margin: 30px 0 0 0; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tri-section p {\n          font-size: 1em; } }\n\n.project-section .tri-section.w2 {\n      width: 66.66%;\n      flex: initial; }\n\n.project-section .tri-section.w2 img {\n        max-width: 60%;\n        max-height: 60%; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tri-section.w2 {\n          width: 100%; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section.w1 {\n        width: 100%; } }\n\n.project-section h1 {\n    font-size: 5em;\n    font-weight: 400;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h1 {\n        font-size: 2.5em; } }\n\n.project-section h2 {\n    font-size: 2.5em;\n    font-weight: 400;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h2 {\n        font-size: 1.75em; } }\n\n.project-section h3 {\n    font-size: 1.5em;\n    font-weight: 300;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h3 {\n        font-size: 1.25em; } }\n\n.project-section h4 {\n    font-size: 1.15em;\n    font-weight: 500;\n    margin: 0; }\n\n.project-section p {\n    font-size: 1.25em;\n    font-weight: 400;\n    margin: 15px 0 0 0;\n    line-height: 1.60em; }\n\n.project-section p br {\n      line-height: 3em; }\n\n@media only screen and (min-width: 769px) {\n      .project-section p.maxWidth80 {\n        max-width: 75%; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section p {\n        text-align: center;\n        margin: 15px 0 !important;\n        font-size: 1em;\n        line-height: normal; } }\n\n.project-section img {\n    max-width: 100%;\n    max-height: 80%; }\n\n.project-section img.boxed {\n      border-radius: 4px;\n      box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2); }\n\n.project-section img:not(.zoomed-in).section-image-bleed {\n      margin: 60px auto;\n      display: block;\n      max-width: 600px;\n      max-height: 400px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section img {\n        max-width: 80%;\n        max-height: 60%; } }\n\n.project-section .tags {\n    margin: 15px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%; }\n\n.project-section .tags.centered {\n      justify-content: center; }\n\n.project-section .tags.centered .tag {\n        width: 250px;\n        align-items: center; }\n\n.project-section .tags.centered .tag:last-child {\n          border-right: none; }\n\n@media only screen and (min-width: 769px) {\n      .project-section .tags.flexEnded {\n        justify-content: flex-end; }\n        .project-section .tags.flexEnded .tag {\n          width: 250px; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tags.flexEnded {\n        justify-content: center; } }\n\n.project-section .tags .tag {\n      line-height: 36px;\n      padding: 5px 15px;\n      margin: 0;\n      font-size: medium;\n      color: #707070;\n      border-right: 1px solid #f0f0f0;\n      display: flex;\n      align-items: flex-end;\n      flex-direction: column; }\n\n.project-section .tags .tag img {\n        max-width: 64px;\n        max-height: 36px;\n        display: block; }\n\n.project-section .tags .tag label {\n        display: block;\n        line-height: normal;\n        margin: 10px 0 0 0; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tags .tag {\n          align-items: center;\n          padding: 5px 10px; }\n          .project-section .tags .tag:last-child {\n            border-right: none; }\n          .project-section .tags .tag img {\n            max-width: 32px;\n            max-height: 18px; }\n          .project-section .tags .tag label {\n            font-size: small;\n            text-align: center; } }\n\n.project-section .comments-wrapper {\n    display: flex;\n    flex-direction: row;\n    margin-top: 30px; }\n\n.project-section .comments-wrapper .comment {\n      flex: 1; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .comments-wrapper {\n        flex-direction: column; } }\n\n.project-section .footer-section {\n    color: #909090; }\n\n.project-section .footer-section p {\n      margin-top: 15px !important; }\n\n.project-section .footer-section h4 {\n      color: #909090;\n      font-weight: bold; }\n\n.project-section .footer-section p {\n      color: #707070; }\n\n.project-section .footer-section a {\n      color: #565656;\n      margin-right: 10px;\n      text-decoration: none; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .footer-section a {\n          margin-right: 0px; } }\n\n.project-section .footer-section.projects-hyperlinks {\n      justify-content: space-between;\n      padding: 45px 45px 15px 45px; }\n\n.project-section .footer-section.projects-hyperlinks .projects-hyperlinks-content {\n        border-top: 1px dashed #e0e0e0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n        padding: 90px 0 0px 0; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        line-height: 48px;\n        padding: 0;\n        margin: 0; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link img {\n          width: 24px;\n          margin: 0 10px;\n          opacity: 0.50; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link img.right {\n            -webkit-transform: rotate(180deg);\n                    transform: rotate(180deg); }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link .text-uppercase {\n          letter-spacing: 1px;\n          margin-right: 15px; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link .text-uppercase:not(.override) {\n            font-size: small;\n            color: #909090;\n            text-transform: uppercase; }\n\n.project-section .macbook-wrapper {\n    padding: 60px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-flow: row;\n    width: 100%; }\n\n.alignItemsCenter {\n  align-items: center !important; }\n\n.alignItemsBottom {\n  align-items: flex-end !important; }\n\n.justifyAlignCenter {\n  justify-content: center !important;\n  align-items: center !important; }\n\n.alignItemsFlexStart {\n  align-items: flex-start !important; }\n\n@media only screen and (min-width: 769px) {\n  .alignItemsFlexEnd {\n    align-items: flex-end !important; } }\n\n.justifyAlignFlexStart {\n  justify-content: flex-start !important; }\n\n.justifyAlignFlexEnd {\n  justify-content: flex-end !important; }\n\n.highlight {\n  position: relative;\n  padding-left: 20px;\n  color: #707070; }\n\n.highlight:before {\n    content: '';\n    width: 5px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #999; }\n\n.highlight-text {\n  color: #707070;\n  margin-top: 15px !important;\n  padding-left: 20px;\n  max-width: 90%; }\n\n@media only screen and (max-width: 768px) {\n    .highlight-text {\n      max-width: 100%; } }\n\n.order1 {\n  order: 1 !important; }\n\n.order2 {\n  order: 2 !important; }\n\n.project-section-btn {\n  border: 2px solid #565656;\n  color: #565656;\n  padding: 0 15px;\n  line-height: 48px;\n  background: transparent;\n  font-size: medium;\n  letter-spacing: 1px;\n  margin-top: 30px;\n  min-width: 100px; }\n\n.project-section-btn:hover {\n    background: #000;\n    border-color: #000;\n    color: #fff;\n    outline: none; }\n\n.vh100 {\n  height: 100vh !important; }\n\n.prototype-viewer {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.prototype-viewer .close {\n    position: absolute;\n    left: 50%;\n    top: 0;\n    margin-left: -50px;\n    width: 100px;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: small;\n    letter-spacing: 1px;\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.05);\n    color: #565656;\n    line-height: 48px;\n    text-align: center;\n    z-index: 999; }\n\n.prototype-viewer .close:hover {\n      background: black;\n      color: #fff; }\n\n.prototype-viewer .television {\n    height: 900px;\n    width: 1600px;\n    zoom: 1;\n    -webkit-transform: scale(0.65, 0.65);\n            transform: scale(0.65, 0.65); }\n\n.prototype-viewer .television iframe {\n      width: 100%;\n      height: 100%;\n      border: none; }\n\n.prototype-viewer .television .control-wrapper {\n      position: absolute;\n      bottom: -30px;\n      height: 60px;\n      display: flex;\n      flex-flow: row;\n      justify-content: center;\n      align-items: center;\n      z-index: 5;\n      width: 100%; }\n\n.prototype-viewer .television .control-wrapper .up, .prototype-viewer .television .control-wrapper .down {\n        width: 60px;\n        height: 60px;\n        text-align: center;\n        line-height: 60px;\n        background: #fff;\n        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.75);\n        padding: 10px;\n        border-radius: 10px;\n        margin: 5px; }\n\n.prototype-viewer .television .control-wrapper .up img, .prototype-viewer .television .control-wrapper .down img {\n          max-width: 100%;\n          max-height: 100%; }\n\n.prototype-viewer .television .control-wrapper .up.down img, .prototype-viewer .television .control-wrapper .down.down img {\n          -webkit-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n\n.prototype-viewer label {\n    position: fixed;\n    bottom: 10px;\n    z-index: 999;\n    width: 100%;\n    padding: 0 10%;\n    text-align: center;\n    font-size: large;\n    line-height: 48px;\n    color: #909090; }\n\n.prototype-callout {\n  position: fixed;\n  width: 100vw;\n  height: 25vh;\n  bottom: 0px;\n  left: 0;\n  z-index: 990;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  /* Enable GPU Rendering */\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(50px);\n  -webkit-animation: slide-fade-in-from-bottom 0.5s ease-out forwards 0s;\n          animation: slide-fade-in-from-bottom 0.5s ease-out forwards 0s;\n  outline: none;\n  padding-top: 18px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); }\n\n.prototype-callout label {\n    color: #fff;\n    font-size: x-large;\n    font-weight: 300;\n    margin-right: 0px;\n    padding: 0;\n    margin-bottom: 30px;\n    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2); }\n\n.prototype-callout button.portfolio-btn,\n  .prototype-callout a.portfolio-btn {\n    margin: 0;\n    color: #fff;\n    border-color: #fff;\n    line-height: 44px;\n    height: 48px;\n    border-radius: 30px;\n    padding: 0 20px !important;\n    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);\n    transition: all 0.3s linear 0s; }\n\n.prototype-callout button.portfolio-btn:hover,\n    .prototype-callout a.portfolio-btn:hover {\n      background: #000;\n      color: #fff !important;\n      border-color: #000; }\n\n.prototype-callout .close {\n    position: absolute;\n    top: 0;\n    width: 100px;\n    height: 24px;\n    line-height: 24px;\n    font-size: x-small;\n    text-align: center;\n    color: #fff;\n    left: 50%;\n    background: rgba(0, 0, 0, 0.1);\n    letter-spacing: 1px;\n    margin-left: -50px;\n    text-transform: uppercase;\n    cursor: pointer; }\n\n.prototype-callout .close:hover {\n      background: #000;\n      color: #fff !important; }\n\n@-webkit-keyframes slide-fade-in-from-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes slide-fade-in-from-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n.code-host,\n/deep/ .code-host {\n  max-width: 100%;\n  padding: 0 60px 0 30px; }\n\n/deep/ .picture-carousel-wrapper.bun-bun-hand-drawn-place-carousel .picture-image-wrapper .img-container {\n  justify-content: center; }\n\n/deep/ .picture-carousel-wrapper.bun-bun-hand-drawn-place-carousel .picture-image-wrapper img {\n  max-height: 500px;\n  height: 70vh;\n  border-radius: 5px; }\n\n/deep/ .picture-carousel-wrapper.bun-bun-hand-drawn-place-carousel .text-container {\n  width: 33% !important; }\n\n/deep/ .picture-carousel-wrapper.bun-bun-hand-drawn-inplace-carousel .picture-image-wrapper .img-container {\n  justify-content: flex-end; }\n\n/deep/ .picture-carousel-wrapper.bun-bun-hand-drawn-inplace-carousel .picture-image-wrapper img {\n  height: auto;\n  max-width: 50vw;\n  border-radius: 5px; }\n\n/deep/ .picture-carousel-wrapper.bun-bun-hand-drawn-inplace-carousel .text-container {\n  width: 33% !important; }\n\n/deep/ .bun-bun-hand-drawn-list-carousel {\n  width: 320px !important;\n  height: 220px !important; }\n\n/deep/ .bun-bun-hand-drawn-list-carousel .picture-wrapper {\n    margin-top: -100px;\n    margin-right: -45px !important;\n    overflow: visible !important; }\n\n/deep/ .bun-bun-hand-drawn-list-carousel .picture-wrapper .picture-card {\n      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.33);\n      border-radius: 10px; }\n\n.iframe-wrapper {\n  width: 100%;\n  height: 100%;\n  border: none; }\n\n.marvel-device.ipad.diff-ipad {\n  width: 900px;\n  height: 700px;\n  zoom: 1;\n  -webkit-transform: scale(0.75, 0.75);\n          transform: scale(0.75, 0.75); }\n"

/***/ }),

/***/ "./src/app/collection/bun-bun/bun-bun.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/collection/bun-bun/bun-bun.component.ts ***!
  \*********************************************************/
/*! exports provided: BunBunComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BunBunComponent", function() { return BunBunComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BunBunComponent = /** @class */ (function () {
    function BunBunComponent() {
        this.isVideoPlayed = false;
        this.videoPlayer = null;
        this.isVideoPiped = false;
        this.showPrototypeCallout = false;
        this.poaperPrototypesFirstCarouselItems = [
            { text: 'Home landing page', img: 'assets/bun-bun/paper-iteration-1/IMG_1118.JPG' },
            { text: 'Item list page', img: 'assets/bun-bun/paper-iteration-1/IMG_1119.JPG' },
            { text: 'Details page for specific roll type', img: 'assets/bun-bun/paper-iteration-1/IMG_1120.JPG' },
            { text: 'Selecting a flavor and no. of units from the dropdown', img: 'assets/bun-bun/paper-iteration-1/IMG_1121.JPG' },
            { text: 'Details page with updated cart', img: 'assets/bun-bun/paper-iteration-1/IMG_1122.JPG' },
            { text: 'Cart popover showing currently added items', img: 'assets/bun-bun/paper-iteration-1/IMG_1123.JPG' },
            { text: 'Checkout process with address details', img: 'assets/bun-bun/paper-iteration-1/IMG_1124.JPG' },
            { text: 'Checkout process with payment details', img: 'assets/bun-bun/paper-iteration-1/IMG_1125.JPG' },
            { text: 'Checkout done - order confirmation modal', img: 'assets/bun-bun/paper-iteration-1/IMG_1126.JPG' },
        ];
        this.poaperPrototypesSecondCarouselItems = [
            { text: 'Home landing page', img: 'assets/bun-bun/paper-iteration-2/IMG_1130.JPG' },
            { text: 'Item list page', img: 'assets/bun-bun/paper-iteration-2/IMG_1131.JPG' },
            { text: 'Details page for specific roll type', img: 'assets/bun-bun/paper-iteration-2/IMG_1132.JPG' },
            { text: 'Selecting a flavor and no. of units from the dropdown', img: 'assets/bun-bun/paper-iteration-2/IMG_1133.JPG' },
            { text: 'Details page with updated cart', img: 'assets/bun-bun/paper-iteration-2/IMG_1134.JPG' },
            { text: 'Cart popover showing currently added items', img: 'assets/bun-bun/paper-iteration-2/IMG_1140.JPG' },
            { text: 'Checkout process with address details', img: 'assets/bun-bun/paper-iteration-2/IMG_1141.JPG' },
            { text: 'Checkout process with payment details', img: 'assets/bun-bun/paper-iteration-2/IMG_1142.JPG' },
            { text: 'Checkout done - order confirmation modal', img: 'assets/bun-bun/paper-iteration-2/IMG_1143.JPG' },
        ];
        this.showProtoTypeViewer = false;
    }
    BunBunComponent.prototype.ngOnInit = function () {
        document.documentElement.setAttribute('data-color', '$POMEGRANATE');
    };
    BunBunComponent.prototype.ngOnDestroy = function () {
    };
    BunBunComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.videoPlayer = new Plyr('#player', {
            loop: { active: true }
        });
        this.videoPlayer.toggleControls(false);
        this.videoPlayer.on('canplay', function (event) {
            var instance = event.detail.plyr;
            _this.videoPlayer.play();
            _this.videoPlayer.toggleControls(true);
        });
        this.videoPlayer.on('playing', function (event) {
            _this.isVideoPlayed = true;
        });
        this.videoPlayer.on('pause', function (event) {
            _this.isVideoPlayed = false;
        });
    };
    BunBunComponent.prototype.scrollTop = function () {
        if (typeof window.scrollTo !== 'undefined') {
            window.scrollTo(0, 0);
        }
    };
    BunBunComponent.prototype.watchVideo = function () {
        var _this = this;
        this.videoPlayer.stop();
        setTimeout(function () {
            _this.scrollTop();
            _this.videoPlayer.play();
        });
    };
    BunBunComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bun-bun',
            template: __webpack_require__(/*! ./bun-bun.component.html */ "./src/app/collection/bun-bun/bun-bun.component.html"),
            styles: [__webpack_require__(/*! ./bun-bun.component.scss */ "./src/app/collection/bun-bun/bun-bun.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BunBunComponent);
    return BunBunComponent;
}());



/***/ }),

/***/ "./src/app/collection/idiff/idiff.component.html":
/*!*******************************************************!*\
  !*** ./src/app/collection/idiff/idiff.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<anchorage-holder></anchorage-holder>\n<div class=\"project-contents\">\n    <section class=\"project-section h100Adjusted justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Introduction</span>\n        <div class=\"section-wrapper alignItemsBottom\">\n            <div class=\"main-section alignItemsCenter\">\n                <h1>iDiff</h1>\n                <p style=\"margin: 0 0 30px 0;\">A visual tool to compare multiple fidelities of designs</p>\n                <div class=\"tags centered\">\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/research.png\">\n                        <label>generative research</label>\n                    </div>\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/layers.png\">\n                        <label>design</label>\n                    </div>\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/research.png\">\n                        <label>evaluative research</label>\n                    </div>\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/prototype.png\">\n                        <label>prototyping</label>\n                    </div>\n                </div>\n                <div class=\"live-proto-btn\">\n                    <a href=\"https://idiff.azurewebsites.net\" target=\"_blank\" class=\"portfolio-btn\">View Prototype</a>\n                </div>\n            </div>\n            <div class=\"content-available-below-fold\">\n                <img data-lazy-load=\"true\" src=\"assets/arrow_upward.png\" />\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h50\">\n        <div class=\"section-wrapper w100 alignItemsFlexStart\">\n            <div class=\"tri-section\">\n                <h2>Why</h2>\n                <h3>did I build it ?</h3>\n                <p>\n                    The users would be able to compare interactions, levels of visible progress and <strong>delta\n                        changes</strong> in different screens.\n                    The tool could also be used to <strong>communicate</strong> the intent of the designers and and\n                    project <strong>the evolution of designs</strong>. The tool can be quite handy for portfolios.\n                </p>\n            </div>\n            <div class=\"tri-section\">\n                <h2>What</h2>\n                <h3>are the use-cases ?</h3>\n                <p>\n                    I combined the <strong>click-through</strong> prototyping features (e.g. Invision) for visualizing\n                    multiple levels of prototypes at the same time. Meaning we would be able to compare lo-fi, mid-fi\n                    and hi-fi prototypes all <strong>together</strong>.\n                </p>\n            </div>\n            <div class=\"tri-section\">\n                <h2>Who</h2>\n                <h3>is my audience ?</h3>\n                <p>\n                    The target audience is primarily designers working in <strong>visual design</strong> space. These\n                    folks\n                    nominally create <strong>multiple fidelities</strong> for designs.\n                    The tool would be helpful for them to allow click-through prototyping while comparing two designs\n                    or screens <strong>side-by-side</strong>.\n                </p>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h50\">\n        <span data-type=\"anchor-elem\">Ideation</span>\n        <div class=\"section-wrapper alignItemsFlexStart w100\">\n            <div class=\"tri-section\">\n                <h2>Ideation</h2>\n                <p class=\"maxWidth80\">\n                    The challenge was to create a web-based tool for aiding fellow designers and HCI students in my\n                    cohort at university.\n                    Just two weeks earlier to this, I was creating paper-prototypes for my very first classroom project.\n                    I was\n                    fascinated by the design evolution between iterations.\n                    <br />\n                    So, I thought of somehow combining the most enjoyable parts of projects.\n                    After hours of brainstorming, I finally decided build a collborative showcase tool for UX\n                    practitioners to visualize lo-fi and hi-fi resolution of designs they work with.\n                    These users can showcase their designs on a split-screen like display.\n                    <br />\n                    In addition, the tool would extend the current click-through capabilities for existing\n                    services like Invision.\n                </p>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h75 justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Paper Prototyping</span>\n        <div class=\"section-wrapper w100\">\n            <div class=\"tri-section w2 p50\">\n                <h2>Paper Prototyping</h2>\n                <p class=\"maxWidth80\">\n                    I created paper prototypes after initial ideation to quick validate the project idea.\n                    <br />\n                    I started sketching out both the authoring and the previewing views. I chose to focus on having a\n                    coherent stack of controls which would employ ample affordance. And so, the drag-bar handler was\n                    quite effective for feedforward.\n\n                </p>\n            </div>\n            <div class=\"tri-section w1\">\n                <app-picture-carousel [bottomStagger]=\"true\" carouselWrapperClass=\"idiff-carousel\"\n                    listWrapperClass=\"idiff-list\" [items]=\"pictureCarouselItems\"></app-picture-carousel>\n            </div>\n        </div>\n        <div class=\"section-wrapper alignItemsFlexStart w100\">\n            <div class=\"tri-section\">\n                <h4 class=\"highlight\">Feedback #1</h4>\n                <p class=\"highlight-text\">For authoring view, move controls to a single pane, either to left or right,\n                    to minmise jumping around the screens.</p>\n            </div>\n            <div class=\"tri-section\">\n                <h4 class=\"highlight\">Feedback #2</h4>\n                <p class=\"highlight-text\">For previewing, look to enable both horizontal and vertical splits for\n                    comparing fidelities.</p>\n            </div>\n            <div class=\"tri-section\">\n                <h4 class=\"highlight\">Feedback #3</h4>\n                <p class=\"highlight-text\">Add mutliple screen and device masks to enhance preview experience.</p>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h100 justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Development</span>\n        <div class=\"section-wrapper w100\">\n            <div class=\"tri-section \">\n                <h2>Authoring Flow</h2>\n                <p class=\"centered\">\n                    This is the prototyping flow wherein we compose our showcase preview by adding images for multiple\n                    fidelities. We add hotspots, define their destination states and then publish the preview.\n                </p>\n                <div class=\"macbook-wrapper hidden-xs\">\n                    <div class=\"marvel-device macbook\">\n                        <div class=\"top-bar\"></div>\n                        <div class=\"camera\"></div>\n                        <div class=\"screen\">\n                            <div class=\"player-holder\">\n                                <video controls crossorigin playsinline id=\"player\" class=\"plyr-player\">\n                                    <source\n                                        src=\"https://s3.us-east-2.amazonaws.com/asitparida-portfolio/idiff-authoring.mp4\"\n                                        type=\"video/mp4\">\n                                </video>\n                            </div>\n                        </div>\n                        <div class=\"bottom-bar\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h100 justifyAlignCenter\">\n        <div class=\"section-wrapper w100\">\n            <div class=\"tri-section \">\n                <h2>Previewing Flow</h2>\n                <p>\n                    Let's have a look at the previewing of the flow we prototyped above. In the online tool, we support\n                    previewing both with a laptop and iPad skin. When we open the preview link in an iPad, the\n                    device-skin disappears to allow users to play around with a hand-held device.\n                </p>\n                <div class=\"macbook-wrapper hidden-xs\">\n                    <div class=\"marvel-device ipad landscape\">\n                        <div class=\"top-bar\"></div>\n                        <div class=\"camera\"></div>\n                        <div class=\"screen\">\n                            <div class=\"player-holder\">\n                                <video controls crossorigin playsinline id=\"player\">\n                                    <source\n                                        src=\"https://s3.us-east-2.amazonaws.com/asitparida-portfolio/idiff-ipad-preview.mp4\"\n                                        type=\"video/mp4\">\n                                </video>\n                            </div>\n                        </div>\n                        <div class=\"bottom-bar\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h20 justifyAlignCenter\">\n        <div class=\"section-wrapper w100 footer-section\">\n            <div class=\"tri-section w2\">\n                <h4>Links</h4>\n                <div class=\"btn-containers\">\n                    <a href=\"https://github.com/asitparida/fid-dif\" target=\"_blank\" class=\"portfolio-btn\">Visit\n                        GitHub</a>\n                    <a href=\"https://idiff.azurewebsites.net\" target=\"_blank\" class=\"portfolio-btn\">Visit Website</a>\n                </div>\n            </div>\n            <div class=\"tri-section w1 justifyAlignFlexStart\">\n                <h4>Credits</h4>\n                <p>\n                    <a href=\"https://www.flaticon.com/\" target=\"_blank\">Flat Icon</a>\n                </p>\n            </div>\n        </div>\n        <div class=\"section-wrapper w100 footer-section projects-hyperlinks hidden-xs\">\n            <div class=\"projects-hyperlinks-content\">\n                <a class=\"project-nav-link\" [routerLink]=\"['/featured/veritas']\"><img\n                        src=\"assets/keyboard_left.png\" /><span class=\"text\"><span class=\"text-uppercase\">Previous\n                            Project:</span> Veritas</span></a>\n                <a class=\"project-nav-link\" [routerLink]=\"['/featured/transit-display']\"><span class=\"text\"><span\n                            class=\"text-uppercase\">Next Project:</span> Transit Hub Display </span><img class=\"right\"\n                        src=\"assets/keyboard_left.png\" /></a>\n            </div>\n        </div>\n    </section>\n</div>s"

/***/ }),

/***/ "./src/app/collection/idiff/idiff.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/collection/idiff/idiff.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.project-section {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  padding: 0;\n  min-height: 400px;\n  position: relative;\n  overflow-x: hidden; }\n\n@media only screen and (max-width: 768px) {\n    .project-section {\n      padding: 15px 0; } }\n\n.project-section .content-available-below-fold {\n    opacity: 0.20;\n    width: 48px;\n    height: 48px;\n    position: absolute;\n    bottom: 60px;\n    left: 50%;\n    margin-left: -24px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.project-section .content-available-below-fold img {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n\n@media only screen and (max-width: 768px) {\n      .project-section .content-available-below-fold {\n        display: none; } }\n\n@media only screen and (min-width: 769px) {\n    .project-section.h100Adjusted {\n      min-height: calc(100vh - 60px); } }\n\n.project-section.h100Adjusted .section-wrapper {\n    padding: 30px 60px 75px 60px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section.h100Adjusted .section-wrapper {\n        padding: 15px 15px 15px 15px; } }\n\n@media only screen and (min-width: 769px) {\n    .project-section.h100 {\n      min-height: 100vh; } }\n\n.project-section.h20 {\n    min-height: 200px; }\n\n.project-section:nth-child(2n + 2) {\n    background: #f1f8ff; }\n\n.project-section a {\n    text-decoration: underline;\n    color: #1a1919;\n    padding: 0; }\n\n.project-section a.portfolio-btn {\n      text-decoration: none; }\n\n.project-section .left-section,\n  .project-section .main-section {\n    width: 100%;\n    padding: 0px 30px;\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    flex-direction: column;\n    order: 1;\n    flex: initial;\n    height: 100%; }\n\n.project-section .left-section.header-section p,\n    .project-section .main-section.header-section p {\n      margin: 0 15px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .left-section,\n      .project-section .main-section {\n        width: 100%;\n        padding: 0px; }\n        .project-section .left-section.alignItemsFlexEnd,\n        .project-section .main-section.alignItemsFlexEnd {\n          align-items: center !important; } }\n\n.project-section .left-section {\n    width: 60%; }\n\n.project-section .left-section + .right-section {\n      width: 40%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .left-section {\n        width: 100%; } }\n\n.project-section .right-section {\n    padding: 0px 30px 0 80px;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n    order: 2;\n    flex: 1;\n    height: 100%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .right-section {\n        display: none; } }\n\n.project-section .section-wrapper {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    padding: 60px 15px;\n    max-width: 1200px; }\n\n.project-section .section-wrapper.w100 {\n      width: 100%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .section-wrapper {\n        padding: 0 15px;\n        flex-direction: column; } }\n\n.project-section .section-item {\n    flex: 1;\n    padding: 0 30px; }\n\n.project-section .section-items-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row; }\n\n.project-section .tri-section {\n    order: 1;\n    flex: 1;\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    flex-direction: column;\n    padding: 0 30px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section {\n        padding: 15px; }\n        .project-section .tri-section.comments-wrapper-section {\n          padding-top: 0; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section h2, .project-section .tri-section h3, .project-section .tri-section p {\n        text-align: left; } }\n\n.project-section .tri-section p {\n      font-size: 1.15em;\n      margin: 30px 0 0 0; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tri-section p {\n          font-size: 1em; } }\n\n.project-section .tri-section.w2 {\n      width: 66.66%;\n      flex: initial; }\n\n.project-section .tri-section.w2 img {\n        max-width: 60%;\n        max-height: 60%; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tri-section.w2 {\n          width: 100%; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section.w1 {\n        width: 100%; } }\n\n.project-section h1 {\n    font-size: 5em;\n    font-weight: 400;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h1 {\n        font-size: 2.5em; } }\n\n.project-section h2 {\n    font-size: 2.5em;\n    font-weight: 400;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h2 {\n        font-size: 1.75em; } }\n\n.project-section h3 {\n    font-size: 1.5em;\n    font-weight: 300;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h3 {\n        font-size: 1.25em; } }\n\n.project-section h4 {\n    font-size: 1.15em;\n    font-weight: 500;\n    margin: 0; }\n\n.project-section p {\n    font-size: 1.25em;\n    font-weight: 400;\n    margin: 15px 0 0 0;\n    line-height: 1.60em; }\n\n.project-section p br {\n      line-height: 3em; }\n\n@media only screen and (min-width: 769px) {\n      .project-section p.maxWidth80 {\n        max-width: 75%; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section p {\n        text-align: center;\n        margin: 15px 0 !important;\n        font-size: 1em;\n        line-height: normal; } }\n\n.project-section img {\n    max-width: 100%;\n    max-height: 80%; }\n\n.project-section img.boxed {\n      border-radius: 4px;\n      box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2); }\n\n.project-section img:not(.zoomed-in).section-image-bleed {\n      margin: 60px auto;\n      display: block;\n      max-width: 600px;\n      max-height: 400px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section img {\n        max-width: 80%;\n        max-height: 60%; } }\n\n.project-section .tags {\n    margin: 15px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%; }\n\n.project-section .tags.centered {\n      justify-content: center; }\n\n.project-section .tags.centered .tag {\n        width: 250px;\n        align-items: center; }\n\n.project-section .tags.centered .tag:last-child {\n          border-right: none; }\n\n@media only screen and (min-width: 769px) {\n      .project-section .tags.flexEnded {\n        justify-content: flex-end; }\n        .project-section .tags.flexEnded .tag {\n          width: 250px; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tags.flexEnded {\n        justify-content: center; } }\n\n.project-section .tags .tag {\n      line-height: 36px;\n      padding: 5px 15px;\n      margin: 0;\n      font-size: medium;\n      color: #707070;\n      border-right: 1px solid #f0f0f0;\n      display: flex;\n      align-items: flex-end;\n      flex-direction: column; }\n\n.project-section .tags .tag img {\n        max-width: 64px;\n        max-height: 36px;\n        display: block; }\n\n.project-section .tags .tag label {\n        display: block;\n        line-height: normal;\n        margin: 10px 0 0 0; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tags .tag {\n          align-items: center;\n          padding: 5px 10px; }\n          .project-section .tags .tag:last-child {\n            border-right: none; }\n          .project-section .tags .tag img {\n            max-width: 32px;\n            max-height: 18px; }\n          .project-section .tags .tag label {\n            font-size: small;\n            text-align: center; } }\n\n.project-section .comments-wrapper {\n    display: flex;\n    flex-direction: row;\n    margin-top: 30px; }\n\n.project-section .comments-wrapper .comment {\n      flex: 1; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .comments-wrapper {\n        flex-direction: column; } }\n\n.project-section .footer-section {\n    color: #909090; }\n\n.project-section .footer-section p {\n      margin-top: 15px !important; }\n\n.project-section .footer-section h4 {\n      color: #909090;\n      font-weight: bold; }\n\n.project-section .footer-section p {\n      color: #707070; }\n\n.project-section .footer-section a {\n      color: #565656;\n      margin-right: 10px;\n      text-decoration: none; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .footer-section a {\n          margin-right: 0px; } }\n\n.project-section .footer-section.projects-hyperlinks {\n      justify-content: space-between;\n      padding: 45px 45px 15px 45px; }\n\n.project-section .footer-section.projects-hyperlinks .projects-hyperlinks-content {\n        border-top: 1px dashed #e0e0e0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n        padding: 90px 0 0px 0; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        line-height: 48px;\n        padding: 0;\n        margin: 0; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link img {\n          width: 24px;\n          margin: 0 10px;\n          opacity: 0.50; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link img.right {\n            -webkit-transform: rotate(180deg);\n                    transform: rotate(180deg); }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link .text-uppercase {\n          letter-spacing: 1px;\n          margin-right: 15px; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link .text-uppercase:not(.override) {\n            font-size: small;\n            color: #909090;\n            text-transform: uppercase; }\n\n.project-section .macbook-wrapper {\n    padding: 60px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-flow: row;\n    width: 100%; }\n\n.alignItemsCenter {\n  align-items: center !important; }\n\n.alignItemsBottom {\n  align-items: flex-end !important; }\n\n.justifyAlignCenter {\n  justify-content: center !important;\n  align-items: center !important; }\n\n.alignItemsFlexStart {\n  align-items: flex-start !important; }\n\n@media only screen and (min-width: 769px) {\n  .alignItemsFlexEnd {\n    align-items: flex-end !important; } }\n\n.justifyAlignFlexStart {\n  justify-content: flex-start !important; }\n\n.justifyAlignFlexEnd {\n  justify-content: flex-end !important; }\n\n.highlight {\n  position: relative;\n  padding-left: 20px;\n  color: #707070; }\n\n.highlight:before {\n    content: '';\n    width: 5px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #999; }\n\n.highlight-text {\n  color: #707070;\n  margin-top: 15px !important;\n  padding-left: 20px;\n  max-width: 90%; }\n\n@media only screen and (max-width: 768px) {\n    .highlight-text {\n      max-width: 100%; } }\n\n.order1 {\n  order: 1 !important; }\n\n.order2 {\n  order: 2 !important; }\n\n.project-section-btn {\n  border: 2px solid #565656;\n  color: #565656;\n  padding: 0 15px;\n  line-height: 48px;\n  background: transparent;\n  font-size: medium;\n  letter-spacing: 1px;\n  margin-top: 30px;\n  min-width: 100px; }\n\n.project-section-btn:hover {\n    background: #000;\n    border-color: #000;\n    color: #fff;\n    outline: none; }\n\n.vh100 {\n  height: 100vh !important; }\n\n.prototype-viewer {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.prototype-viewer .close {\n    position: absolute;\n    left: 50%;\n    top: 0;\n    margin-left: -50px;\n    width: 100px;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: small;\n    letter-spacing: 1px;\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.05);\n    color: #565656;\n    line-height: 48px;\n    text-align: center;\n    z-index: 999; }\n\n.prototype-viewer .close:hover {\n      background: black;\n      color: #fff; }\n\n.prototype-viewer .television {\n    height: 900px;\n    width: 1600px;\n    zoom: 1;\n    -webkit-transform: scale(0.65, 0.65);\n            transform: scale(0.65, 0.65); }\n\n.prototype-viewer .television iframe {\n      width: 100%;\n      height: 100%;\n      border: none; }\n\n.prototype-viewer .television .control-wrapper {\n      position: absolute;\n      bottom: -30px;\n      height: 60px;\n      display: flex;\n      flex-flow: row;\n      justify-content: center;\n      align-items: center;\n      z-index: 5;\n      width: 100%; }\n\n.prototype-viewer .television .control-wrapper .up, .prototype-viewer .television .control-wrapper .down {\n        width: 60px;\n        height: 60px;\n        text-align: center;\n        line-height: 60px;\n        background: #fff;\n        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.75);\n        padding: 10px;\n        border-radius: 10px;\n        margin: 5px; }\n\n.prototype-viewer .television .control-wrapper .up img, .prototype-viewer .television .control-wrapper .down img {\n          max-width: 100%;\n          max-height: 100%; }\n\n.prototype-viewer .television .control-wrapper .up.down img, .prototype-viewer .television .control-wrapper .down.down img {\n          -webkit-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n\n.prototype-viewer label {\n    position: fixed;\n    bottom: 10px;\n    z-index: 999;\n    width: 100%;\n    padding: 0 10%;\n    text-align: center;\n    font-size: large;\n    line-height: 48px;\n    color: #909090; }\n\n.prototype-callout {\n  position: fixed;\n  width: 100vw;\n  height: 25vh;\n  bottom: 0px;\n  left: 0;\n  z-index: 990;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  /* Enable GPU Rendering */\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(50px);\n  -webkit-animation: slide-fade-in-from-bottom 0.5s ease-out forwards 0s;\n          animation: slide-fade-in-from-bottom 0.5s ease-out forwards 0s;\n  outline: none;\n  padding-top: 18px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); }\n\n.prototype-callout label {\n    color: #fff;\n    font-size: x-large;\n    font-weight: 300;\n    margin-right: 0px;\n    padding: 0;\n    margin-bottom: 30px;\n    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2); }\n\n.prototype-callout button.portfolio-btn,\n  .prototype-callout a.portfolio-btn {\n    margin: 0;\n    color: #fff;\n    border-color: #fff;\n    line-height: 44px;\n    height: 48px;\n    border-radius: 30px;\n    padding: 0 20px !important;\n    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);\n    transition: all 0.3s linear 0s; }\n\n.prototype-callout button.portfolio-btn:hover,\n    .prototype-callout a.portfolio-btn:hover {\n      background: #000;\n      color: #fff !important;\n      border-color: #000; }\n\n.prototype-callout .close {\n    position: absolute;\n    top: 0;\n    width: 100px;\n    height: 24px;\n    line-height: 24px;\n    font-size: x-small;\n    text-align: center;\n    color: #fff;\n    left: 50%;\n    background: rgba(0, 0, 0, 0.1);\n    letter-spacing: 1px;\n    margin-left: -50px;\n    text-transform: uppercase;\n    cursor: pointer; }\n\n.prototype-callout .close:hover {\n      background: #000;\n      color: #fff !important; }\n\n@-webkit-keyframes slide-fade-in-from-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes slide-fade-in-from-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n.code-host,\n/deep/ .code-host {\n  max-width: 100%;\n  padding: 0 60px 0 30px; }\n\n/deep/ .idiff-list {\n  width: 350px !important;\n  height: 250px !important; }\n\n/deep/ .idiff-list .picture-wrapper {\n    margin-top: -30px;\n    margin-right: -45px !important;\n    overflow: visible !important; }\n\n/deep/ .idiff-list .picture-wrapper .picture-card {\n      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.33);\n      border-radius: 10px; }\n\n/deep/ .idiff-carousel .picture-image-wrapper img {\n  height: 60vh;\n  border-radius: 5px;\n  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.33); }\n"

/***/ }),

/***/ "./src/app/collection/idiff/idiff.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/collection/idiff/idiff.component.ts ***!
  \*****************************************************/
/*! exports provided: IdiffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdiffComponent", function() { return IdiffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IdiffComponent = /** @class */ (function () {
    function IdiffComponent() {
        this.isVideoPlayed = false;
        this.videoPlayer = null;
        this.isVideoPiped = false;
        this.pictureCarouselItems = [
            { text: null, img: 'assets/idiff/Picture1.png' },
            { text: null, img: 'assets/idiff/Picture2.png' },
            { text: null, img: 'assets/idiff/Picture3.png' },
        ];
    }
    IdiffComponent.prototype.ngOnInit = function () {
        document.documentElement.setAttribute('data-color', '$WISTERIA');
    };
    IdiffComponent.prototype.ngOnDestroy = function () {
    };
    IdiffComponent.prototype.ngAfterViewInit = function () {
        var players = document.querySelectorAll('.plyr-player');
        if (players && players.length > 0) {
            players.forEach(function (p) {
                var videoPlayer = new Plyr(p, {
                    loop: { active: true }
                });
                videoPlayer.toggleControls(false);
                videoPlayer.on('canplay', function (event) {
                    videoPlayer.play();
                    videoPlayer.toggleControls(true);
                });
            });
        }
    };
    IdiffComponent.prototype.scrollTop = function () {
        if (typeof window.scrollTo !== 'undefined') {
            window.scrollTo(0, 0);
        }
    };
    IdiffComponent.prototype.watchVideo = function () {
        var _this = this;
        this.videoPlayer.stop();
        setTimeout(function () {
            _this.scrollTop();
            _this.videoPlayer.play();
        });
    };
    IdiffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-idiff',
            template: __webpack_require__(/*! ./idiff.component.html */ "./src/app/collection/idiff/idiff.component.html"),
            styles: [__webpack_require__(/*! ./idiff.component.scss */ "./src/app/collection/idiff/idiff.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IdiffComponent);
    return IdiffComponent;
}());



/***/ }),

/***/ "./src/app/collection/lean-case/lean-case.component.html":
/*!***************************************************************!*\
  !*** ./src/app/collection/lean-case/lean-case.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-contents\">\n    <div class=\"marvel-device macbook\">\n        <div class=\"top-bar\"></div>\n        <div class=\"camera\"></div>\n        <div class=\"screen\">\n            <div class=\"player-holder\">\n                <video controls crossorigin playsinline id=\"player\">\n                    <source src=\"https://s3.us-east-2.amazonaws.com/asitparida-portfolio/LeanCaseBeginnerMode.mp4\" type=\"video/mp4\">\n                </video>\n            </div>\n        </div>\n        <div class=\"bottom-bar\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/collection/lean-case/lean-case.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/collection/lean-case/lean-case.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/collection/lean-case/lean-case.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/collection/lean-case/lean-case.component.ts ***!
  \*************************************************************/
/*! exports provided: LeanCaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeanCaseComponent", function() { return LeanCaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeanCaseComponent = /** @class */ (function () {
    function LeanCaseComponent() {
    }
    LeanCaseComponent.prototype.ngAfterViewInit = function () {
        var player = new Plyr('#player', {
            loop: { active: true }
        });
        player.on('canplay', function (event) {
            var instance = event.detail.plyr;
            player.play();
        });
    };
    LeanCaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lean-case',
            template: __webpack_require__(/*! ./lean-case.component.html */ "./src/app/collection/lean-case/lean-case.component.html"),
            styles: [__webpack_require__(/*! ./lean-case.component.scss */ "./src/app/collection/lean-case/lean-case.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeanCaseComponent);
    return LeanCaseComponent;
}());



/***/ }),

/***/ "./src/app/collection/moosik/moosik.component.html":
/*!*********************************************************!*\
  !*** ./src/app/collection/moosik/moosik.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-contents\">\n    <div class=\"marvel-device macbook\">\n        <div class=\"top-bar\"></div>\n        <div class=\"camera\"></div>\n        <div class=\"screen\">\n            <div class=\"player-holder\">\n                <video controls crossorigin playsinline id=\"player\">\n                    <source src=\"https://s3.us-east-2.amazonaws.com/asitparida-portfolio/MoosikDemo.mp4\" type=\"video/mp4\">\n                </video>\n            </div>\n        </div>\n        <div class=\"bottom-bar\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/collection/moosik/moosik.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/collection/moosik/moosik.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/collection/moosik/moosik.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/collection/moosik/moosik.component.ts ***!
  \*******************************************************/
/*! exports provided: MoosikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoosikComponent", function() { return MoosikComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoosikComponent = /** @class */ (function () {
    function MoosikComponent() {
    }
    MoosikComponent.prototype.ngAfterViewInit = function () {
        var player = new Plyr('#player', {
            loop: { active: true }
        });
        player.on('canplay', function (event) {
            var instance = event.detail.plyr;
            player.play();
        });
    };
    MoosikComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moosik',
            template: __webpack_require__(/*! ./moosik.component.html */ "./src/app/collection/moosik/moosik.component.html"),
            styles: [__webpack_require__(/*! ./moosik.component.scss */ "./src/app/collection/moosik/moosik.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MoosikComponent);
    return MoosikComponent;
}());



/***/ }),

/***/ "./src/app/collection/not-so-grey/not-so-grey.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/collection/not-so-grey/not-so-grey.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-contents\">\n    <div class=\"marvel-device macbook\">\n        <div class=\"top-bar\"></div>\n        <div class=\"camera\"></div>\n        <div class=\"screen\">\n            <div class=\"player-holder\">\n                <video controls crossorigin playsinline id=\"player\">\n                    <source src=\"https://s3.us-east-2.amazonaws.com/asitparida-portfolio/NotSoGreyDefn.mp4\" type=\"video/mp4\">\n                </video>\n            </div>\n        </div>\n        <div class=\"bottom-bar\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/collection/not-so-grey/not-so-grey.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/collection/not-so-grey/not-so-grey.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".player-holder {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); }\n\n.project-contents {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/collection/not-so-grey/not-so-grey.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/collection/not-so-grey/not-so-grey.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotSoGreyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSoGreyComponent", function() { return NotSoGreyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotSoGreyComponent = /** @class */ (function () {
    function NotSoGreyComponent() {
    }
    NotSoGreyComponent.prototype.ngAfterViewInit = function () {
        var player = new Plyr('#player', {
            loop: { active: true }
        });
        player.on('canplay', function (event) {
            var instance = event.detail.plyr;
            player.play();
        });
    };
    NotSoGreyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-so-grey',
            template: __webpack_require__(/*! ./not-so-grey.component.html */ "./src/app/collection/not-so-grey/not-so-grey.component.html"),
            styles: [__webpack_require__(/*! ./not-so-grey.component.scss */ "./src/app/collection/not-so-grey/not-so-grey.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotSoGreyComponent);
    return NotSoGreyComponent;
}());



/***/ }),

/***/ "./src/app/collection/privacy-grade/privacy-grade.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/collection/privacy-grade/privacy-grade.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  privacy-grade works!\n</p>\n"

/***/ }),

/***/ "./src/app/collection/privacy-grade/privacy-grade.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/collection/privacy-grade/privacy-grade.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/collection/privacy-grade/privacy-grade.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/collection/privacy-grade/privacy-grade.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrivacyGradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyGradeComponent", function() { return PrivacyGradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyGradeComponent = /** @class */ (function () {
    function PrivacyGradeComponent() {
    }
    PrivacyGradeComponent.prototype.ngOnInit = function () {
    };
    PrivacyGradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-grade',
            template: __webpack_require__(/*! ./privacy-grade.component.html */ "./src/app/collection/privacy-grade/privacy-grade.component.html"),
            styles: [__webpack_require__(/*! ./privacy-grade.component.scss */ "./src/app/collection/privacy-grade/privacy-grade.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyGradeComponent);
    return PrivacyGradeComponent;
}());



/***/ }),

/***/ "./src/app/collection/transit-display/transit-display.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/collection/transit-display/transit-display.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<anchorage-holder></anchorage-holder>\n<div class=\"project-contents\">\n    <section class=\"project-section h100Adjusted justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Introduction</span>\n        <div class=\"section-wrapper alignItemsBottom\">\n            <div class=\"main-section alignItemsCenter\">\n                <h1 style=\"margin-top: 0px;\">Transit Hub Display</h1>\n                <p style=\"margin: 0 0 30px 0;\">Designing a data-driven display for a tourist hub</p>\n                <div class=\"tags centered\">\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/layers.png\">\n                        <label>design</label>\n                    </div>\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/research.png\">\n                        <label>evaluative research</label>\n                    </div>\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/prototype.png\">\n                        <label>prototyping</label>\n                    </div>\n                </div>\n                <div class=\"live-proto-btn\">\n                    <button class=\"portfolio-btn\" (click)=\"launchPrototypeFromCallout()\">View Prototype</button>\n                </div>\n            </div>\n            <div class=\"content-available-below-fold\">\n                <img data-lazy-load=\"true\" src=\"assets/arrow_upward.png\" />\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h75\">\n        <div class=\"section-wrapper alignItemsFlexStart w100 p-b-0\">\n            <div class=\"tri-section \">\n                <h2>What</h2>\n                <h3>are we building ?</h3>\n                <p>\n                    We are building an environmental display for the fictional Atlantis travel hub in the San Juan\n                    Islands. Passengers will get ample information to plan itineraries, take trips across the small\n                    islands and enjoy the peace and tranquility of the beautiful San Juan.\n                </p>\n            </div>\n        </div>\n        <div class=\"section-wrapper alignItemsFlexStart w100\">\n            <div class=\"tri-section\">\n                <h4 class=\"highlight\">Tenet #1</h4>\n                <p class=\"highlight-text\">People can plan itineraries to visit multiple islands and places of\n                    attractions on the island.</p>\n            </div>\n            <div class=\"tri-section\">\n                <h4 class=\"highlight\">Tenet #2</h4>\n                <p class=\"highlight-text\">We will promote the specific attractions and sight-seeing options across the\n                    different islands.</p>\n            </div>\n            <div class=\"tri-section\">\n                <h4 class=\"highlight\">Tenet #3</h4>\n                <p class=\"highlight-text\">The display would promote the PTF program through which passengers combine\n                    multiple trips across POIs in the islands.</p>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h50 justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Stakeholder Research</span>\n        <div class=\"section-wrapper w100\">\n            <div class=\"tri-section w2\">\n                <h2>Analyzing stakeholders</h2>\n                <p>To dissect through the data, we studied the personas and the available transit information for the\n                    islands.\n                    <br />\n                    To plot the inferred information, we used <strong>Wurman's LATCH</strong> model and observed data\n                    across multiple features and axes.\n                    <br />\n                    We created multiple tables to see what factors were absolutlely vital and what information could be\n                    ommitted from views.\n                </p>\n            </div>\n            <div class=\"tri-section w1 justifyAlignCenter\">\n                <app-picture-carousel [bottomStagger]=\"true\" carouselWrapperClass=\"transit-carousel\"\n                    listWrapperClass=\"transit-list\" [items]=\"pictureCarouselItems\"></app-picture-carousel>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h75\">\n        <span data-type=\"anchor-elem\">Personas</span>\n        <div class=\"section-wrapper w100 alignItemsFlexStart\">\n            <div class=\"tri-section\">\n                <h2>Persona #1</h2>\n                <h3>Elizabeth Duarte</h3>\n                <p>\n                    Our Stakeholder serves as the transportation director of the municipality of the San Juan Islands.\n                    Her department is\n                    is funding the environmental display for <strong>showing transportation data</strong> across the\n                    island.\n                    She aims to <strong>promote the new program</strong>, PTF pass, which would allow customers great\n                    ease and flexibility to travel across the islands\n                </p>\n            </div>\n            <div class=\"tri-section\">\n                <h2>Persona #2</h2>\n                <h3>George Shimko</h3>\n                <p>\n                    He is a long-time resident of the island and owns modest fishing cabins on nearby Orcas Island and\n                    Stuart Island. He regularly invites his children\n                    and grandchildren to his house on San Juan Island and intends to give them PTF passes so that\n                    they can <strong>travel across</strong> San Juan Islands.\n                </p>\n            </div>\n            <div class=\"tri-section\">\n                <h2>Persona #3</h2>\n                <h3>Patrick Mulvaney</h3>\n                <p>\n                    Patrick Mulvaney is an environmental engineer stationed in Seattle. He spends an average of three\n                    days per\n                    week visiting drilling and wind power sites throughout the San Juan Islands. Weather\n                    often influences his travel and so Patrick welcomes the new Pass program that allows him to\n                    <strong>purchase multiple trips</strong> and optimize his travel on-the-fly.\n                </p>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h75 justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Sketching</span>\n        <div class=\"section-wrapper w100\">\n            <div class=\"tri-section\">\n                <h2>Hand Drawn Sketches</h2>\n                <p>\n                    After gathering and analyzing the data set and the user infomation, we moved on to hand drawn\n                    sketches. We did the <strong>3-2-1 parallel sketching</strong> to get as many initial versions as\n                    possible.\n                </p>\n                <app-picture-carousel inplaceCarouselWrapperClass=\"transit-hand-drawn-inplace-carousel\"\n                    [embeddedCarousel]=\"true\" [bottomStagger]=\"true\"\n                    carouselWrapperClass=\"transit-hand-drawn-place-carousel\" [items]=\"handDrawnSketchesCarouselItems\">\n                </app-picture-carousel>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h75 justifyAlignCenter\">\n        <div class=\"section-wrapper w100 \">\n            <div class=\"tri-section w2\">\n                <h2>Iteration #1</h2>\n                <h3>Moving to digital protoyping</h3>\n                <p>\n                    Combining the best of the hand-drawn sketches till now, we decided to have an individual section\n                    for promoting the PTF pass.\n                    We focussed on visual coupling to highlight both trip data and map info. The\n                    highlighted part in the map keeps rotating to display the current island.\n                </p>\n                <div class=\"comments-wrapper\">\n                    <div class=\"comment\">\n                        <h4 class=\"highlight\">Critique #1</h4>\n                        <p class=\"highlight-text\">The lack of accuracy of the map took some credibility of the design\n                            away\n                        </p>\n                    </div>\n                    <div class=\"comment\">\n                        <h4 class=\"highlight\">Critique #2</h4>\n                        <p class=\"highlight-text\">Moving far away from the display, the subtle color hide a lot\n                            information </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"tri-section w1 justifyAlignCenter\">\n                <img imgZoomer data-lazy-load=\"true\" class=\"boxed\"\n                    src=\"assets/transit-display/digital-iteration-1.png\" />\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h50 justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Using Motion</span>\n        <div class=\"section-wrapper w100 \">\n            <div class=\"tri-section\">\n                <h2>Iteration #2</h2>\n                <h3>Using motion as feedback</h3>\n                <p>\n                    Based on the feedback, we went with a darker color palette, gave the map a more notable amount of\n                    space and\n                    worked on typographgy choices to enhance the text on the screen.\n                </p>\n                <div class=\"p-t-b-60 centered-in-box hidden-xs\">\n                    <div class=\"marvel-device macbook television\">\n                        <div class=\"camera\"></div>\n                        <div class=\"screen\">\n                            <div class=\"player-holder\">\n                                <video controls crossorigin playsinline id=\"player1\" class=\"plyr-player\">\n                                    <source\n                                        src=\"https://s3.us-east-2.amazonaws.com/asitparida-portfolio/TransitDisplayIterarion2.mp4\"\n                                        type=\"video/mp4\">\n                                </video>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"comments-wrapper p-b-60\">\n                    <div class=\"comment\">\n                        <h4 class=\"highlight\">Motion Use #1</h4>\n                        <p class=\"highlight-text\">We added motion to show where the vehicle is relative to the origin\n                            and destinations.\n                        </p>\n                    </div>\n                    <div class=\"comment\">\n                        <h4 class=\"highlight\">Motion Use #2</h4>\n                        <p class=\"highlight-text\">Each card had a status that changes when the vehicle arrived, is\n                            ready to board or is boarding.\n                        </p>\n                    </div>\n                    <div class=\"comment\">\n                        <h4 class=\"highlight\">Motion Use #3</h4>\n                        <p class=\"highlight-text\">We wanted the card to disappear when the vehicle departs from the\n                            station bringing in the next trip.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h50 justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Development</span>\n        <div class=\"section-wrapper w100 alignItemsBottom\">\n            <div class=\"tri-section\">\n                <h2>Final Prototype</h2>\n                <p>\n                    The final iteration displays the next departures per location.\n                    Users can find out more if they are interested, by interacting with a physical control (this has an\n                    up and a down arrow).\n                    <br />\n                    We used a card layout which reveals more information when interacted with.\n                    Also, the map highlights the routes related to the currently highlighted point of interest\n                    in the San Juan Islands.\n                </p>\n                <div>\n                    <!-- <button class=\"portfolio-btn\" (click)=\"watchVideo()\">Watch Video</button> -->\n                    <button class=\"portfolio-btn\" (click)=\"launchPrototype()\">View Prototype</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"section-wrapper w100 alignItemsBottom hidden-xs\">\n            <div class=\"marvel-device macbook television\">\n                <div class=\"camera\"></div>\n                <div class=\"screen\">\n                    <div class=\"player-holder\">\n                        <video controls crossorigin playsinline id=\"player2\" class=\"plyr-player\">\n                            <source\n                                src=\"https://s3.us-east-2.amazonaws.com/asitparida-portfolio/TransitBoardDisplay.mp4\"\n                                type=\"video/mp4\">\n                        </video>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h20 justifyAlignCenter\">\n        <div class=\"section-wrapper w100 footer-section\">\n            <div class=\"tri-section w2\">\n                <h4>Other Team Members</h4>\n                <p>\n                    <a href=\"\" target=\"_blank\">Clair Sun, </a> <a href=\"\" target=\"_blank\">Maggie Chain</a>\n                </p>\n            </div>\n            <div class=\"tri-section w1 justifyAlignFlexStart\">\n                <h4>Credits</h4>\n                <p>\n                    <a href=\"https://www.flaticon.com/\" target=\"_blank\">Flat Icon</a>\n                </p>\n            </div>\n        </div>\n        <div class=\"section-wrapper w100 footer-section projects-hyperlinks hidden-xs\">\n            <div class=\"projects-hyperlinks-content\">\n                <a class=\"project-nav-link\" [routerLink]=\"['/featured/idiff']\"><img\n                        src=\"assets/keyboard_left.png\" /><span class=\"text\"><span class=\"text-uppercase\">Previous\n                            Project:</span> IDiff</span></a>\n                <a class=\"project-nav-link\" [routerLink]=\"['/featured/bun-bun']\"><span class=\"text\"><span\n                            class=\"text-uppercase\">Next Project:</span> Bun Bun </span><img class=\"right\"\n                        src=\"assets/keyboard_left.png\" /></a>\n            </div>\n        </div>\n    </section>\n</div>\n<div class=\"prototype-viewer\" *ngIf=\"showProtoType\" (keyup.escape)=\" showProtoType = false;\" tabindex=\"0\">\n    <div class=\"close\" (keyup.enter)=\" showProtoType = false;\" (click)=\" showProtoType = false;\">Close</div>\n    <div class=\"marvel-device macbook television\">\n        <div class=\"camera\"></div>\n        <div class=\"screen\">\n            <app-prototype-viewer src=\"https://transit-hub-display.azurewebsites.net/\"></app-prototype-viewer>\n        </div>\n        <div class=\"control-wrapper\">\n            <div class=\"up\">\n                <img data-lazy-load=\"true\" src=\"assets/arrow_upward.png\" />\n            </div>\n            <div class=\"down\">\n                <img data-lazy-load=\"true\" src=\"assets/arrow_upward.png\" />\n            </div>\n        </div>\n    </div>\n    <label>To highlight an island or destination, click on it or use keyboard UP (↑) and DOWN (↓) arrow keys.</label>\n</div>"

/***/ }),

/***/ "./src/app/collection/transit-display/transit-display.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/collection/transit-display/transit-display.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.project-section {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  padding: 0;\n  min-height: 400px;\n  position: relative;\n  overflow-x: hidden; }\n\n@media only screen and (max-width: 768px) {\n    .project-section {\n      padding: 15px 0; } }\n\n.project-section .content-available-below-fold {\n    opacity: 0.20;\n    width: 48px;\n    height: 48px;\n    position: absolute;\n    bottom: 60px;\n    left: 50%;\n    margin-left: -24px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.project-section .content-available-below-fold img {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n\n@media only screen and (max-width: 768px) {\n      .project-section .content-available-below-fold {\n        display: none; } }\n\n@media only screen and (min-width: 769px) {\n    .project-section.h100Adjusted {\n      min-height: calc(100vh - 60px); } }\n\n.project-section.h100Adjusted .section-wrapper {\n    padding: 30px 60px 75px 60px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section.h100Adjusted .section-wrapper {\n        padding: 15px 15px 15px 15px; } }\n\n@media only screen and (min-width: 769px) {\n    .project-section.h100 {\n      min-height: 100vh; } }\n\n.project-section.h20 {\n    min-height: 200px; }\n\n.project-section:nth-child(2n + 2) {\n    background: #f1f8ff; }\n\n.project-section a {\n    text-decoration: underline;\n    color: #1a1919;\n    padding: 0; }\n\n.project-section a.portfolio-btn {\n      text-decoration: none; }\n\n.project-section .left-section,\n  .project-section .main-section {\n    width: 100%;\n    padding: 0px 30px;\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    flex-direction: column;\n    order: 1;\n    flex: initial;\n    height: 100%; }\n\n.project-section .left-section.header-section p,\n    .project-section .main-section.header-section p {\n      margin: 0 15px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .left-section,\n      .project-section .main-section {\n        width: 100%;\n        padding: 0px; }\n        .project-section .left-section.alignItemsFlexEnd,\n        .project-section .main-section.alignItemsFlexEnd {\n          align-items: center !important; } }\n\n.project-section .left-section {\n    width: 60%; }\n\n.project-section .left-section + .right-section {\n      width: 40%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .left-section {\n        width: 100%; } }\n\n.project-section .right-section {\n    padding: 0px 30px 0 80px;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n    order: 2;\n    flex: 1;\n    height: 100%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .right-section {\n        display: none; } }\n\n.project-section .section-wrapper {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    padding: 60px 15px;\n    max-width: 1200px; }\n\n.project-section .section-wrapper.w100 {\n      width: 100%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .section-wrapper {\n        padding: 0 15px;\n        flex-direction: column; } }\n\n.project-section .section-item {\n    flex: 1;\n    padding: 0 30px; }\n\n.project-section .section-items-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row; }\n\n.project-section .tri-section {\n    order: 1;\n    flex: 1;\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    flex-direction: column;\n    padding: 0 30px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section {\n        padding: 15px; }\n        .project-section .tri-section.comments-wrapper-section {\n          padding-top: 0; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section h2, .project-section .tri-section h3, .project-section .tri-section p {\n        text-align: left; } }\n\n.project-section .tri-section p {\n      font-size: 1.15em;\n      margin: 30px 0 0 0; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tri-section p {\n          font-size: 1em; } }\n\n.project-section .tri-section.w2 {\n      width: 66.66%;\n      flex: initial; }\n\n.project-section .tri-section.w2 img {\n        max-width: 60%;\n        max-height: 60%; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tri-section.w2 {\n          width: 100%; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section.w1 {\n        width: 100%; } }\n\n.project-section h1 {\n    font-size: 5em;\n    font-weight: 400;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h1 {\n        font-size: 2.5em; } }\n\n.project-section h2 {\n    font-size: 2.5em;\n    font-weight: 400;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h2 {\n        font-size: 1.75em; } }\n\n.project-section h3 {\n    font-size: 1.5em;\n    font-weight: 300;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h3 {\n        font-size: 1.25em; } }\n\n.project-section h4 {\n    font-size: 1.15em;\n    font-weight: 500;\n    margin: 0; }\n\n.project-section p {\n    font-size: 1.25em;\n    font-weight: 400;\n    margin: 15px 0 0 0;\n    line-height: 1.60em; }\n\n.project-section p br {\n      line-height: 3em; }\n\n@media only screen and (min-width: 769px) {\n      .project-section p.maxWidth80 {\n        max-width: 75%; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section p {\n        text-align: center;\n        margin: 15px 0 !important;\n        font-size: 1em;\n        line-height: normal; } }\n\n.project-section img {\n    max-width: 100%;\n    max-height: 80%; }\n\n.project-section img.boxed {\n      border-radius: 4px;\n      box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2); }\n\n.project-section img:not(.zoomed-in).section-image-bleed {\n      margin: 60px auto;\n      display: block;\n      max-width: 600px;\n      max-height: 400px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section img {\n        max-width: 80%;\n        max-height: 60%; } }\n\n.project-section .tags {\n    margin: 15px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%; }\n\n.project-section .tags.centered {\n      justify-content: center; }\n\n.project-section .tags.centered .tag {\n        width: 250px;\n        align-items: center; }\n\n.project-section .tags.centered .tag:last-child {\n          border-right: none; }\n\n@media only screen and (min-width: 769px) {\n      .project-section .tags.flexEnded {\n        justify-content: flex-end; }\n        .project-section .tags.flexEnded .tag {\n          width: 250px; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tags.flexEnded {\n        justify-content: center; } }\n\n.project-section .tags .tag {\n      line-height: 36px;\n      padding: 5px 15px;\n      margin: 0;\n      font-size: medium;\n      color: #707070;\n      border-right: 1px solid #f0f0f0;\n      display: flex;\n      align-items: flex-end;\n      flex-direction: column; }\n\n.project-section .tags .tag img {\n        max-width: 64px;\n        max-height: 36px;\n        display: block; }\n\n.project-section .tags .tag label {\n        display: block;\n        line-height: normal;\n        margin: 10px 0 0 0; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tags .tag {\n          align-items: center;\n          padding: 5px 10px; }\n          .project-section .tags .tag:last-child {\n            border-right: none; }\n          .project-section .tags .tag img {\n            max-width: 32px;\n            max-height: 18px; }\n          .project-section .tags .tag label {\n            font-size: small;\n            text-align: center; } }\n\n.project-section .comments-wrapper {\n    display: flex;\n    flex-direction: row;\n    margin-top: 30px; }\n\n.project-section .comments-wrapper .comment {\n      flex: 1; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .comments-wrapper {\n        flex-direction: column; } }\n\n.project-section .footer-section {\n    color: #909090; }\n\n.project-section .footer-section p {\n      margin-top: 15px !important; }\n\n.project-section .footer-section h4 {\n      color: #909090;\n      font-weight: bold; }\n\n.project-section .footer-section p {\n      color: #707070; }\n\n.project-section .footer-section a {\n      color: #565656;\n      margin-right: 10px;\n      text-decoration: none; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .footer-section a {\n          margin-right: 0px; } }\n\n.project-section .footer-section.projects-hyperlinks {\n      justify-content: space-between;\n      padding: 45px 45px 15px 45px; }\n\n.project-section .footer-section.projects-hyperlinks .projects-hyperlinks-content {\n        border-top: 1px dashed #e0e0e0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n        padding: 90px 0 0px 0; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        line-height: 48px;\n        padding: 0;\n        margin: 0; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link img {\n          width: 24px;\n          margin: 0 10px;\n          opacity: 0.50; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link img.right {\n            -webkit-transform: rotate(180deg);\n                    transform: rotate(180deg); }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link .text-uppercase {\n          letter-spacing: 1px;\n          margin-right: 15px; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link .text-uppercase:not(.override) {\n            font-size: small;\n            color: #909090;\n            text-transform: uppercase; }\n\n.project-section .macbook-wrapper {\n    padding: 60px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-flow: row;\n    width: 100%; }\n\n.alignItemsCenter {\n  align-items: center !important; }\n\n.alignItemsBottom {\n  align-items: flex-end !important; }\n\n.justifyAlignCenter {\n  justify-content: center !important;\n  align-items: center !important; }\n\n.alignItemsFlexStart {\n  align-items: flex-start !important; }\n\n@media only screen and (min-width: 769px) {\n  .alignItemsFlexEnd {\n    align-items: flex-end !important; } }\n\n.justifyAlignFlexStart {\n  justify-content: flex-start !important; }\n\n.justifyAlignFlexEnd {\n  justify-content: flex-end !important; }\n\n.highlight {\n  position: relative;\n  padding-left: 20px;\n  color: #707070; }\n\n.highlight:before {\n    content: '';\n    width: 5px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #999; }\n\n.highlight-text {\n  color: #707070;\n  margin-top: 15px !important;\n  padding-left: 20px;\n  max-width: 90%; }\n\n@media only screen and (max-width: 768px) {\n    .highlight-text {\n      max-width: 100%; } }\n\n.order1 {\n  order: 1 !important; }\n\n.order2 {\n  order: 2 !important; }\n\n.project-section-btn {\n  border: 2px solid #565656;\n  color: #565656;\n  padding: 0 15px;\n  line-height: 48px;\n  background: transparent;\n  font-size: medium;\n  letter-spacing: 1px;\n  margin-top: 30px;\n  min-width: 100px; }\n\n.project-section-btn:hover {\n    background: #000;\n    border-color: #000;\n    color: #fff;\n    outline: none; }\n\n.vh100 {\n  height: 100vh !important; }\n\n.prototype-viewer {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.prototype-viewer .close {\n    position: absolute;\n    left: 50%;\n    top: 0;\n    margin-left: -50px;\n    width: 100px;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: small;\n    letter-spacing: 1px;\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.05);\n    color: #565656;\n    line-height: 48px;\n    text-align: center;\n    z-index: 999; }\n\n.prototype-viewer .close:hover {\n      background: black;\n      color: #fff; }\n\n.prototype-viewer .television {\n    height: 900px;\n    width: 1600px;\n    zoom: 1;\n    -webkit-transform: scale(0.65, 0.65);\n            transform: scale(0.65, 0.65); }\n\n.prototype-viewer .television iframe {\n      width: 100%;\n      height: 100%;\n      border: none; }\n\n.prototype-viewer .television .control-wrapper {\n      position: absolute;\n      bottom: -30px;\n      height: 60px;\n      display: flex;\n      flex-flow: row;\n      justify-content: center;\n      align-items: center;\n      z-index: 5;\n      width: 100%; }\n\n.prototype-viewer .television .control-wrapper .up, .prototype-viewer .television .control-wrapper .down {\n        width: 60px;\n        height: 60px;\n        text-align: center;\n        line-height: 60px;\n        background: #fff;\n        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.75);\n        padding: 10px;\n        border-radius: 10px;\n        margin: 5px; }\n\n.prototype-viewer .television .control-wrapper .up img, .prototype-viewer .television .control-wrapper .down img {\n          max-width: 100%;\n          max-height: 100%; }\n\n.prototype-viewer .television .control-wrapper .up.down img, .prototype-viewer .television .control-wrapper .down.down img {\n          -webkit-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n\n.prototype-viewer label {\n    position: fixed;\n    bottom: 10px;\n    z-index: 999;\n    width: 100%;\n    padding: 0 10%;\n    text-align: center;\n    font-size: large;\n    line-height: 48px;\n    color: #909090; }\n\n.prototype-callout {\n  position: fixed;\n  width: 100vw;\n  height: 25vh;\n  bottom: 0px;\n  left: 0;\n  z-index: 990;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  /* Enable GPU Rendering */\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(50px);\n  -webkit-animation: slide-fade-in-from-bottom 0.5s ease-out forwards 0s;\n          animation: slide-fade-in-from-bottom 0.5s ease-out forwards 0s;\n  outline: none;\n  padding-top: 18px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); }\n\n.prototype-callout label {\n    color: #fff;\n    font-size: x-large;\n    font-weight: 300;\n    margin-right: 0px;\n    padding: 0;\n    margin-bottom: 30px;\n    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2); }\n\n.prototype-callout button.portfolio-btn,\n  .prototype-callout a.portfolio-btn {\n    margin: 0;\n    color: #fff;\n    border-color: #fff;\n    line-height: 44px;\n    height: 48px;\n    border-radius: 30px;\n    padding: 0 20px !important;\n    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);\n    transition: all 0.3s linear 0s; }\n\n.prototype-callout button.portfolio-btn:hover,\n    .prototype-callout a.portfolio-btn:hover {\n      background: #000;\n      color: #fff !important;\n      border-color: #000; }\n\n.prototype-callout .close {\n    position: absolute;\n    top: 0;\n    width: 100px;\n    height: 24px;\n    line-height: 24px;\n    font-size: x-small;\n    text-align: center;\n    color: #fff;\n    left: 50%;\n    background: rgba(0, 0, 0, 0.1);\n    letter-spacing: 1px;\n    margin-left: -50px;\n    text-transform: uppercase;\n    cursor: pointer; }\n\n.prototype-callout .close:hover {\n      background: #000;\n      color: #fff !important; }\n\n@-webkit-keyframes slide-fade-in-from-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes slide-fade-in-from-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n.code-host,\n/deep/ .code-host {\n  max-width: 100%;\n  padding: 0 60px 0 30px; }\n\n/deep/ .transit-list {\n  width: 320px !important;\n  height: 220px !important; }\n\n/deep/ .transit-list .picture-wrapper {\n    margin-top: -60px;\n    margin-right: -45px !important;\n    overflow: visible !important; }\n\n/deep/ .transit-list .picture-wrapper .picture-card {\n      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.33);\n      border-radius: 10px; }\n\n/deep/ .transit-carousel .picture-image-wrapper img {\n  height: 70vh;\n  border-radius: 5px;\n  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2); }\n\n/deep/ .picture-carousel-wrapper.transit-hand-drawn-place-carousel .picture-image-wrapper .img-container {\n  justify-content: center; }\n\n/deep/ .picture-carousel-wrapper.transit-hand-drawn-place-carousel .picture-image-wrapper img {\n  height: 70vh;\n  border-radius: 5px; }\n\n/deep/ .picture-carousel-wrapper.transit-hand-drawn-inplace-carousel .picture-image-wrapper .img-container {\n  justify-content: center; }\n\n/deep/ .picture-carousel-wrapper.transit-hand-drawn-inplace-carousel .picture-image-wrapper img {\n  height: 50vh;\n  border-radius: 5px; }\n\n@media only screen and (max-width: 768px) {\n    /deep/ .picture-carousel-wrapper.transit-hand-drawn-inplace-carousel .picture-image-wrapper img {\n      height: auto; } }\n"

/***/ }),

/***/ "./src/app/collection/transit-display/transit-display.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/collection/transit-display/transit-display.component.ts ***!
  \*************************************************************************/
/*! exports provided: TransitDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitDisplayComponent", function() { return TransitDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransitDisplayComponent = /** @class */ (function () {
    function TransitDisplayComponent(santizer) {
        this.santizer = santizer;
        this.isVideoPlayed = false;
        this.videoPlayers = [];
        this.isVideoPiped = false;
        this.pictureCarouselItems = [
            // tslint:disable:max-line-length
            { text: 'Analyzing the personas from the POV of their goals, priorities and pain points', img: 'assets/transit-display/stakeholder-analysis/Picture1.png' },
            { text: 'Looking for pain points an data points with high priority for personas ', img: 'assets/transit-display/stakeholder-analysis/Picture2.png' },
            { text: 'Laying out the aspects of information which would be helpful to each of the three personas want to see on the display', img: 'assets/transit-display/stakeholder-analysis/Picture3.png' },
            { text: 'Information that is affected by weather from the POV of personas', img: 'assets/transit-display/stakeholder-analysis/Picture4.png' },
            { text: 'Looking for absolutely important information without which each of the three personas cant function', img: 'assets/transit-display/stakeholder-analysis/Picture5.png' },
        ];
        this.handDrawnSketchesCarouselItems = [
            { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide6.png' },
            { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide8.png' },
            { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide7.png' },
        ];
        this.digitalIteration2Items = [
            { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide6.png' },
            { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide8.png' },
            { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide7.png' },
        ];
        this.showProtoType = false;
    }
    TransitDisplayComponent.prototype.ngOnInit = function () {
        document.documentElement.setAttribute('data-color', '$BELIZE_HOLE');
    };
    TransitDisplayComponent.prototype.ngOnDestroy = function () {
    };
    TransitDisplayComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var players = document.querySelectorAll('.plyr-player');
        if (players && players.length > 0) {
            players.forEach(function (p) {
                var videoPlayer = new Plyr(p, {
                    loop: { active: true }
                });
                videoPlayer.toggleControls(false);
                videoPlayer.on('canplay', function (event) {
                    videoPlayer.play();
                    videoPlayer.toggleControls(true);
                });
                _this.videoPlayers.push(videoPlayer);
            });
        }
    };
    TransitDisplayComponent.prototype.scrollTop = function () {
        if (typeof window.scrollTo !== 'undefined') {
            window.scrollTo(0, 0);
        }
    };
    TransitDisplayComponent.prototype.watchVideo = function () {
        var _this = this;
        this.videoPlayers[1].stop();
        setTimeout(function () {
            _this.scrollTop();
            _this.videoPlayers[1].play();
        });
    };
    TransitDisplayComponent.prototype.launchPrototype = function () {
        this.showProtoType = true;
    };
    TransitDisplayComponent.prototype.launchPrototypeFromCallout = function () {
        this.showProtoType = true;
    };
    TransitDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transit-display',
            template: __webpack_require__(/*! ./transit-display.component.html */ "./src/app/collection/transit-display/transit-display.component.html"),
            styles: [__webpack_require__(/*! ./transit-display.component.scss */ "./src/app/collection/transit-display/transit-display.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], TransitDisplayComponent);
    return TransitDisplayComponent;
}());



/***/ }),

/***/ "./src/app/collection/veritas/veritas.component.html":
/*!***********************************************************!*\
  !*** ./src/app/collection/veritas/veritas.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<anchorage-holder></anchorage-holder>\n<div class=\"project-contents\">\n    <section class=\"project-section h100Adjusted justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Introduction</span>\n        <div class=\"section-wrapper alignItemsCenter\">\n            <div class=\"left-section alignItemsFlexEnd\">\n                <h1 style=\"margin-top: 0px;\">Veritas</h1>\n                <p style=\"margin: 0 0 30px 0;\">An intervention to combat misinformation</p>\n                <div class=\"tags flexEnded\">\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/research.png\">\n                        <label>evaluative research</label>\n                    </div>\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/prototype.png\">\n                        <label>prototyping</label>\n                    </div>\n                    <div class=\"tag\">\n                        <img data-lazy-load=\"true\" src=\"assets/smartphone.png\">\n                        <label>react-native</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"right-section justifyAlignCenter p-l-r-0\">\n                <div class=\"tri-section w1 justifyAlignCenter\">\n                    <img data-lazy-load=\"true\" src=\"assets/gifs/veritas.gif\" style=\"max-height: 500px\" />\n                </div>\n            </div>\n            <div class=\"content-available-below-fold\">\n                <img data-lazy-load=\"true\" src=\"assets/arrow_upward.png\" />\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h75\">\n        <span data-type=\"anchor-elem\">Research</span>\n        <div class=\"section-wrapper w100 alignItemsFlexStart\">\n            <div class=\"tri-section\">\n                <h2>What</h2>\n                <h3>is the problem ?</h3>\n                <p>\n                    Dictionary.com’s word of year for 2018 is “<a href=\"https://www.dictionary.com/e/word-of-the-year/\"\n                        target=\"_blank\">misinformation</a>\". We are trying to mitigate the dissonance created by the\n                    \"fake\" news around us. But such malicious content is propagated through our social circles.\n                </p>\n            </div>\n            <div class=\"tri-section\">\n                <h2>Why</h2>\n                <h3>is it worth solving ?</h3>\n                <p>\n                    The rampant spread of “fake” news is due to people seeking out and believing information which\n                    aligns with their currently-held attitudes. We blindly trust the source, i.e., a friend of ours who\n                    re-tweeted or shared the article from somewhere (<a\n                        href=\"https://en.wikipedia.org/wiki/Elaboration_likelihood_model\" target=\"_blank\">ELM</a>).\n                </p>\n            </div>\n            <div class=\"tri-section\">\n                <h2>How</h2>\n                <h3>are we solving it ?</h3>\n                <p>\n                    We are designing an avatar-based mobile game to empower folks against such misinformation. As they\n                    progress through this <a href=\"https://cyberpsychology.eu/article/view/4343/3418\"\n                        target=\"_blank\">embedded\n                        game design</a>, they learn to look at content critically. We are employing multiple persuasive\n                    design strategies like fictionalization and obfuscation.\n                    We are designing an avatar based mobile game to empower folks against such misinformation.\n                </p>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h75\">\n        <div class=\"section-wrapper alignItemsFlexStart w100 p-b-0\">\n            <div class=\"tri-section\">\n                <h2>Literature Review</h2>\n                <p>\n                    We went through research papers we spoke about the different pathways people receive misinformation\n                    and essential characteristics of misinformation, especially in the form of blurbs that are\n                    “convenient,” “efficient,” and “trustworthy” sources. We took into account papers which spoke of\n                    how virtual pets influenced people and how they serve as catalysts for behavior change.\n                </p>\n            </div>\n        </div>\n        <div class=\"section-wrapper alignItemsFlexStart w100\">\n            <div class=\"tri-section comments-wrapper-section\">\n                <h4 class=\"highlight\">Tenet #1</h4>\n                <p class=\"highlight-text\">People are susceptible to misinformation due to confirmation bias, motivated\n                    reasoning, and the sleeper effect.</p>\n            </div>\n            <div class=\"tri-section comments-wrapper-section\">\n                <h4 class=\"highlight\">Tenet #2</h4>\n                <p class=\"highlight-text\">Employ fictionalization and intermixing to prevent psychological reactance.\n                </p>\n            </div>\n            <div class=\"tri-section comments-wrapper-section\">\n                <h4 class=\"highlight\">Tenet #3</h4>\n                <p class=\"highlight-text\">Utilizing personalization techniques increase the efficacy of the persuasive\n                    message and connection with the user.</p>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h75 justifyAlignCenter\">\n        <span data-type=\"anchor-elem\">Game Design</span>\n        <div class=\"section-wrapper w100\">\n            <div class=\"tri-section w2\">\n                <h2>Game Design</h2>\n                <p>We created a fictional world in which users are asked to take care of a creature, affectionately\n                    called a Worble.\n                    Throughout the game, users receive information from friends in their pet community on how to take\n                    care of their Worble. The correct information will help their Worble grow whereas the malicious\n                    ones will make it sick.\n                    Users accelerate their experience points as they correctly differentiate between the actual and\n                    false information.</p>\n            </div>\n            <div class=\"tri-section w1 justifyAlignCenter\">\n                <img data-lazy-load=\"true\" src=\"assets/veritas/worble.gif\" />\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h75 justifyAlignCenter\">\n        <div class=\"section-wrapper w100 \">\n            <div class=\"tri-section w2\">\n                <h2>Paper Prototyping</h2>\n                <p>\n                    The brainstorming sessions put us on a path towards the Tamagotchi-like game concept. We created\n                    multiple fidelities for our initial designs. To help us validate the needs we were addressing, we\n                    conducted think-aloud sessions on our paper prototypes.\n                </p>\n                <div class=\"comments-wrapper\">\n                    <div class=\"comment\">\n                        <h4 class=\"highlight\">User #1</h4>\n                        <p class=\"highlight-text\">I think it’s fun and learning how to care for your worble seems like\n                            it’ll be entertaining...</p>\n                    </div>\n                    <div class=\"comment\">\n                        <h4 class=\"highlight\">User #2</h4>\n                        <p class=\"highlight-text\">I loved decorating the creature...</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"tri-section w1 justifyAlignCenter\">\n                <img imgZoomer data-lazy-load=\"true\" class=\"boxed\" src=\"assets/veritas/worble_paperproto_testing.jpg\" />\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h75\">\n        <span data-type=\"anchor-elem\">Digital Prototyping</span>\n        <div class=\"section-wrapper alignItemsFlexStart w100 p-b-0\">\n            <div class=\"tri-section\">\n                <h2>Choosing React-Native</h2>\n                <p>\n                    With the scope of the prototype decided and the game scenes fleshed out, the next task was to pick up the right framework\n                    to build the initial version for the app and test with participants. Building on my experience of working in cross-functional\n                    teams, I started gathering all the data points to help the team choose the most <strong>affordable</strong> toolkit.\n                </p>\n            </div>\n        </div>\n        <div class=\"section-wrapper alignItemsFlexStart w100\">\n            <div class=\"tri-section comments-wrapper-section\">\n                <h4 class=\"highlight\">Web vs. Native</h4>\n                <p class=\"highlight-text\">We had to go native because however well the web version of the game could be built, the <strong>look and feel</strong> of a native app, executed correctly, would accentuate the game experience.</p>\n            </div>\n            <div class=\"tri-section comments-wrapper-section\">\n                <h4 class=\"highlight\">Learning curve for the team</h4>\n                <p class=\"highlight-text\">The entire team wanted to contribute to coding. I felt react-native offered <strong>a little bit of familiarity</strong> as their most recent experience with prototyping had come in the form of the HTML5 programming class.\n                </p>\n            </div>\n            <div class=\"tri-section comments-wrapper-section\">\n                <h4 class=\"highlight\">HTML5 Syntax</h4>\n                <p class=\"highlight-text\">Using the similar mark-up syntax offered <strong>the structural scaffolding</strong> for us and not learn the entire visual hierarchy of the app development process.</p>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h75\">\n        <div class=\"section-wrapper alignItemsFlexStart w100 p-b-0\">\n            <div class=\"tri-section\">\n                <h2>App Lifecycle</h2>\n                <p>\n                    I broke down the overall structure into three parts to ease interactions flows. The standalone pages would be active one at a time with other elements either overlaying full-page or partially.\n                    Throughout the game, the user had to be aware of the current context. This translated to managing the state of the game as close as possible. <strong>Mirroring the app lifecycle to game design</strong> was essential to me.\n                </p>\n                <img imgZoomer data-lazy-load=\"true\" class=\"boxed section-image-bleed\"\n                    src=\"assets/veritas/veritas-app-structure.jpg\" />\n            </div>\n        </div>\n        <div class=\"section-wrapper alignItemsFlexStart w100\">\n            <div class=\"tri-section comments-wrapper-section\">\n                <h4 class=\"highlight\">Game States to UI States</h4>\n                <p class=\"highlight-text\">With this my first game design, I learned how most of the game development involved <strong>reflecting the current state</strong> in the game pipeline.</p>\n            </div>\n            <div class=\"tri-section comments-wrapper-section\">\n                <h4 class=\"highlight\">Flex based layouts</h4>\n                <p class=\"highlight-text\">Perhaps the sweetest thing about reusing the know-how of HTML5 structures, thinking of every UI frame and component in terms of flex-based layout helped in <strong>building responsiveness out-of-box</strong>.</p>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h75\">\n        <div class=\"section-wrapper alignItemsFlexStart w100 p-b-0\">\n            <div class=\"tri-section\">\n                <h2>Using Observables for pipeline</h2>\n                <p>\n                    Since the app was a prototype with no back-end, I decided to go for an <strong>emitter-subscriber pattern</strong> fits in well as the same can be updated to listen to back-end events and update the game UI.\n                    I used <strong>RxJS based reactive programming</strong> for triggering several microinteractions.\n                    \n                </p>\n                <img imgZoomer data-lazy-load=\"true\" class=\"boxed section-image-bleed\"\n                    src=\"assets/veritas/veritas-app-states.jpg\" />\n            </div>\n        </div>\n        <div class=\"section-wrapper alignItemsFlexStart w100\">\n            <div class=\"tri-section comments-wrapper-section\">\n                <h4 class=\"highlight\">During state activation</h4>\n                <p class=\"highlight-text\">When any state gets activated, the <strong>game UI</strong> is updated, the <strong>available actions</strong> get updated, and the <strong>subsequent event listeners</strong> are set up.</p>\n            </div>\n            <div class=\"tri-section comments-wrapper-section\">\n                <h4 class=\"highlight\">Triggering Event</h4>\n                <p class=\"highlight-text\">This is achieved through taking action, for e.g. feeding the worble, shaking the phone. Both <strong>UI clicks</strong> and <strong>native sensor actions</strong> can trigger events. </p>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section alignItemsCenter h75\">\n        <div class=\"section-wrapper alignItemsFlexStart w100\">\n            <div class=\"tri-section\">\n                <h2>Applying Motion</h2>\n                <p>\n                    Once the flow of the game was in place, I started animating components to direct the user's attention towards it. The same interactions provide <strong>the necessary fluidity</strong> to the UI in general.\n                </p>\n                <app-picture-carousel inplaceCarouselWrapperClass=\"veritas-inplace-carousel\"\n                    [embeddedCarousel]=\"true\" [bottomStagger]=\"true\"\n                    [useVideo]=\"true\" [useDeviceSkin]=\"true\"\n                    carouselWrapperClass=\"veritas-place-carousel\" [items]=\"animationCarouselItems\">\n                </app-picture-carousel>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h50 justifyAlignCenter\">\n        <div class=\"section-wrapper w100 alignItemsBottom\">\n            <div class=\"tri-section w2\">\n                <h2>iOS App</h2>\n                <p>\n                    Further, I used <strong>native iOS capabilities</strong>, like using the accelerometer for detecting a shake, to enhance the game experience.\n                    After multiple iterations of design and parallel development cycles, we tested our app. We had favourable reviews with excellent critiques from the studio audience.\n                </p>\n                <button class=\"portfolio-btn\" (click)=\"watchVideo()\">Watch Video</button>\n            </div>\n            <div class=\"tri-section w1\">\n                <app-picture-carousel [items]=\"pictureCarouselItems\"></app-picture-carousel>\n            </div>\n        </div>\n    </section>\n    <section class=\"project-section h20 justifyAlignCenter\">\n        <div class=\"section-wrapper w100 footer-section\">\n            <div class=\"tri-section w2\">\n                <h4>Other Team Members</h4>\n                <p>\n                    <a href=\"https://medium.com/@gabygayles\" target=\"_blank\">Gaby Gayles,</a> <a\n                        href=\"https://medium.com/@dylanssmith10\" target=\"_blank\">Dylan Smith,</a> <a\n                        href=\"https://medium.com/@katherinehjiang\" target=\"_blank\">Katherine\n                        Jiang,</a> <a href=\"https://medium.com/@duncan.katelynj\" target=\"_blank\">Katelyn Duncan,</a> <a\n                        href=\"https://medium.com/@lenali\" target=\"_blank\">Lena Li</a>\n                </p>\n            </div>\n            <div class=\"tri-section w1 justifyAlignFlexStart\">\n                <h4>Credits</h4>\n                <p>\n                    <a href=\"https://www.flaticon.com/\" target=\"_blank\">Flat Icon</a>\n                </p>\n            </div>\n        </div>\n        <div class=\"section-wrapper w100 footer-section projects-hyperlinks hidden-xs\">\n            <div class=\"projects-hyperlinks-content\">\n                <a class=\"project-nav-link\" [routerLink]=\"['/home']\"><img src=\"assets/keyboard_left.png\" /><span\n                        class=\"text\"><span class=\"text-uppercase override\">Home</span></span></a>\n                <a class=\"project-nav-link\" [routerLink]=\"['/featured/idiff']\"><span class=\"text\"><span\n                            class=\"text-uppercase\">Next Project:</span> IDiff </span><img class=\"right\"\n                        src=\"assets/keyboard_left.png\" /></a>\n            </div>\n        </div>\n    </section>\n</div>\n<div class=\"prototype-viewer\" *ngIf=\"showProtoTypeViewer\" (keyup.escape)=\" showProtoTypeViewer = false;\" tabindex=\"0\">\n    <div class=\"close\" (keyup.enter)=\" showProtoTypeViewer = false;\" (click)=\" showProtoTypeViewer = false;\">Close</div>\n    <div class=\"marvel-device iphone-x\">\n        <div class=\"notch\">\n            <div class=\"camera\"></div>\n            <div class=\"speaker\"></div>\n        </div>\n        <div class=\"top-bar\"></div>\n        <div class=\"sleep\"></div>\n        <div class=\"bottom-bar\"></div>\n        <div class=\"volume\"></div>\n        <div class=\"overflow\">\n            <div class=\"shadow shadow--tr\"></div>\n            <div class=\"shadow shadow--tl\"></div>\n            <div class=\"shadow shadow--br\"></div>\n            <div class=\"shadow shadow--bl\"></div>\n        </div>\n        <div class=\"inner-shadow\"></div>\n        <div class=\"screen\">\n            <div class=\"player-holder\">\n                <video controls crossorigin playsinline id=\"player\">\n                    <source src=\"https://s3.us-east-2.amazonaws.com/asitparida-portfolio/Veritas.mp4\" type=\"video/mp4\">\n                </video>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/collection/veritas/veritas.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/collection/veritas/veritas.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.project-section {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  padding: 0;\n  min-height: 400px;\n  position: relative;\n  overflow-x: hidden; }\n\n@media only screen and (max-width: 768px) {\n    .project-section {\n      padding: 15px 0; } }\n\n.project-section .content-available-below-fold {\n    opacity: 0.20;\n    width: 48px;\n    height: 48px;\n    position: absolute;\n    bottom: 60px;\n    left: 50%;\n    margin-left: -24px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n.project-section .content-available-below-fold img {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n\n@media only screen and (max-width: 768px) {\n      .project-section .content-available-below-fold {\n        display: none; } }\n\n@media only screen and (min-width: 769px) {\n    .project-section.h100Adjusted {\n      min-height: calc(100vh - 60px); } }\n\n.project-section.h100Adjusted .section-wrapper {\n    padding: 30px 60px 75px 60px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section.h100Adjusted .section-wrapper {\n        padding: 15px 15px 15px 15px; } }\n\n@media only screen and (min-width: 769px) {\n    .project-section.h100 {\n      min-height: 100vh; } }\n\n.project-section.h20 {\n    min-height: 200px; }\n\n.project-section:nth-child(2n + 2) {\n    background: #f1f8ff; }\n\n.project-section a {\n    text-decoration: underline;\n    color: #1a1919;\n    padding: 0; }\n\n.project-section a.portfolio-btn {\n      text-decoration: none; }\n\n.project-section .left-section,\n  .project-section .main-section {\n    width: 100%;\n    padding: 0px 30px;\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    flex-direction: column;\n    order: 1;\n    flex: initial;\n    height: 100%; }\n\n.project-section .left-section.header-section p,\n    .project-section .main-section.header-section p {\n      margin: 0 15px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .left-section,\n      .project-section .main-section {\n        width: 100%;\n        padding: 0px; }\n        .project-section .left-section.alignItemsFlexEnd,\n        .project-section .main-section.alignItemsFlexEnd {\n          align-items: center !important; } }\n\n.project-section .left-section {\n    width: 60%; }\n\n.project-section .left-section + .right-section {\n      width: 40%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .left-section {\n        width: 100%; } }\n\n.project-section .right-section {\n    padding: 0px 30px 0 80px;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n    order: 2;\n    flex: 1;\n    height: 100%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .right-section {\n        display: none; } }\n\n.project-section .section-wrapper {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    padding: 60px 15px;\n    max-width: 1200px; }\n\n.project-section .section-wrapper.w100 {\n      width: 100%; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .section-wrapper {\n        padding: 0 15px;\n        flex-direction: column; } }\n\n.project-section .section-item {\n    flex: 1;\n    padding: 0 30px; }\n\n.project-section .section-items-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row; }\n\n.project-section .tri-section {\n    order: 1;\n    flex: 1;\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    flex-direction: column;\n    padding: 0 30px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section {\n        padding: 15px; }\n        .project-section .tri-section.comments-wrapper-section {\n          padding-top: 0; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section h2, .project-section .tri-section h3, .project-section .tri-section p {\n        text-align: left; } }\n\n.project-section .tri-section p {\n      font-size: 1.15em;\n      margin: 30px 0 0 0; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tri-section p {\n          font-size: 1em; } }\n\n.project-section .tri-section.w2 {\n      width: 66.66%;\n      flex: initial; }\n\n.project-section .tri-section.w2 img {\n        max-width: 60%;\n        max-height: 60%; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tri-section.w2 {\n          width: 100%; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tri-section.w1 {\n        width: 100%; } }\n\n.project-section h1 {\n    font-size: 5em;\n    font-weight: 400;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h1 {\n        font-size: 2.5em; } }\n\n.project-section h2 {\n    font-size: 2.5em;\n    font-weight: 400;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h2 {\n        font-size: 1.75em; } }\n\n.project-section h3 {\n    font-size: 1.5em;\n    font-weight: 300;\n    margin: 0;\n    text-align: center; }\n\n@media only screen and (max-width: 768px) {\n      .project-section h3 {\n        font-size: 1.25em; } }\n\n.project-section h4 {\n    font-size: 1.15em;\n    font-weight: 500;\n    margin: 0; }\n\n.project-section p {\n    font-size: 1.25em;\n    font-weight: 400;\n    margin: 15px 0 0 0;\n    line-height: 1.60em; }\n\n.project-section p br {\n      line-height: 3em; }\n\n@media only screen and (min-width: 769px) {\n      .project-section p.maxWidth80 {\n        max-width: 75%; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section p {\n        text-align: center;\n        margin: 15px 0 !important;\n        font-size: 1em;\n        line-height: normal; } }\n\n.project-section img {\n    max-width: 100%;\n    max-height: 80%; }\n\n.project-section img.boxed {\n      border-radius: 4px;\n      box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2); }\n\n.project-section img:not(.zoomed-in).section-image-bleed {\n      margin: 60px auto;\n      display: block;\n      max-width: 600px;\n      max-height: 400px; }\n\n@media only screen and (max-width: 768px) {\n      .project-section img {\n        max-width: 80%;\n        max-height: 60%; } }\n\n.project-section .tags {\n    margin: 15px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%; }\n\n.project-section .tags.centered {\n      justify-content: center; }\n\n.project-section .tags.centered .tag {\n        width: 250px;\n        align-items: center; }\n\n.project-section .tags.centered .tag:last-child {\n          border-right: none; }\n\n@media only screen and (min-width: 769px) {\n      .project-section .tags.flexEnded {\n        justify-content: flex-end; }\n        .project-section .tags.flexEnded .tag {\n          width: 250px; } }\n\n@media only screen and (max-width: 768px) {\n      .project-section .tags.flexEnded {\n        justify-content: center; } }\n\n.project-section .tags .tag {\n      line-height: 36px;\n      padding: 5px 15px;\n      margin: 0;\n      font-size: medium;\n      color: #707070;\n      border-right: 1px solid #f0f0f0;\n      display: flex;\n      align-items: flex-end;\n      flex-direction: column; }\n\n.project-section .tags .tag img {\n        max-width: 64px;\n        max-height: 36px;\n        display: block; }\n\n.project-section .tags .tag label {\n        display: block;\n        line-height: normal;\n        margin: 10px 0 0 0; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .tags .tag {\n          align-items: center;\n          padding: 5px 10px; }\n          .project-section .tags .tag:last-child {\n            border-right: none; }\n          .project-section .tags .tag img {\n            max-width: 32px;\n            max-height: 18px; }\n          .project-section .tags .tag label {\n            font-size: small;\n            text-align: center; } }\n\n.project-section .comments-wrapper {\n    display: flex;\n    flex-direction: row;\n    margin-top: 30px; }\n\n.project-section .comments-wrapper .comment {\n      flex: 1; }\n\n@media only screen and (max-width: 768px) {\n      .project-section .comments-wrapper {\n        flex-direction: column; } }\n\n.project-section .footer-section {\n    color: #909090; }\n\n.project-section .footer-section p {\n      margin-top: 15px !important; }\n\n.project-section .footer-section h4 {\n      color: #909090;\n      font-weight: bold; }\n\n.project-section .footer-section p {\n      color: #707070; }\n\n.project-section .footer-section a {\n      color: #565656;\n      margin-right: 10px;\n      text-decoration: none; }\n\n@media only screen and (max-width: 768px) {\n        .project-section .footer-section a {\n          margin-right: 0px; } }\n\n.project-section .footer-section.projects-hyperlinks {\n      justify-content: space-between;\n      padding: 45px 45px 15px 45px; }\n\n.project-section .footer-section.projects-hyperlinks .projects-hyperlinks-content {\n        border-top: 1px dashed #e0e0e0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n        padding: 90px 0 0px 0; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        line-height: 48px;\n        padding: 0;\n        margin: 0; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link img {\n          width: 24px;\n          margin: 0 10px;\n          opacity: 0.50; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link img.right {\n            -webkit-transform: rotate(180deg);\n                    transform: rotate(180deg); }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link .text-uppercase {\n          letter-spacing: 1px;\n          margin-right: 15px; }\n\n.project-section .footer-section.projects-hyperlinks .project-nav-link .text-uppercase:not(.override) {\n            font-size: small;\n            color: #909090;\n            text-transform: uppercase; }\n\n.project-section .macbook-wrapper {\n    padding: 60px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-flow: row;\n    width: 100%; }\n\n.alignItemsCenter {\n  align-items: center !important; }\n\n.alignItemsBottom {\n  align-items: flex-end !important; }\n\n.justifyAlignCenter {\n  justify-content: center !important;\n  align-items: center !important; }\n\n.alignItemsFlexStart {\n  align-items: flex-start !important; }\n\n@media only screen and (min-width: 769px) {\n  .alignItemsFlexEnd {\n    align-items: flex-end !important; } }\n\n.justifyAlignFlexStart {\n  justify-content: flex-start !important; }\n\n.justifyAlignFlexEnd {\n  justify-content: flex-end !important; }\n\n.highlight {\n  position: relative;\n  padding-left: 20px;\n  color: #707070; }\n\n.highlight:before {\n    content: '';\n    width: 5px;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #999; }\n\n.highlight-text {\n  color: #707070;\n  margin-top: 15px !important;\n  padding-left: 20px;\n  max-width: 90%; }\n\n@media only screen and (max-width: 768px) {\n    .highlight-text {\n      max-width: 100%; } }\n\n.order1 {\n  order: 1 !important; }\n\n.order2 {\n  order: 2 !important; }\n\n.project-section-btn {\n  border: 2px solid #565656;\n  color: #565656;\n  padding: 0 15px;\n  line-height: 48px;\n  background: transparent;\n  font-size: medium;\n  letter-spacing: 1px;\n  margin-top: 30px;\n  min-width: 100px; }\n\n.project-section-btn:hover {\n    background: #000;\n    border-color: #000;\n    color: #fff;\n    outline: none; }\n\n.vh100 {\n  height: 100vh !important; }\n\n.prototype-viewer {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.prototype-viewer .close {\n    position: absolute;\n    left: 50%;\n    top: 0;\n    margin-left: -50px;\n    width: 100px;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: small;\n    letter-spacing: 1px;\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.05);\n    color: #565656;\n    line-height: 48px;\n    text-align: center;\n    z-index: 999; }\n\n.prototype-viewer .close:hover {\n      background: black;\n      color: #fff; }\n\n.prototype-viewer .television {\n    height: 900px;\n    width: 1600px;\n    zoom: 1;\n    -webkit-transform: scale(0.65, 0.65);\n            transform: scale(0.65, 0.65); }\n\n.prototype-viewer .television iframe {\n      width: 100%;\n      height: 100%;\n      border: none; }\n\n.prototype-viewer .television .control-wrapper {\n      position: absolute;\n      bottom: -30px;\n      height: 60px;\n      display: flex;\n      flex-flow: row;\n      justify-content: center;\n      align-items: center;\n      z-index: 5;\n      width: 100%; }\n\n.prototype-viewer .television .control-wrapper .up, .prototype-viewer .television .control-wrapper .down {\n        width: 60px;\n        height: 60px;\n        text-align: center;\n        line-height: 60px;\n        background: #fff;\n        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.75);\n        padding: 10px;\n        border-radius: 10px;\n        margin: 5px; }\n\n.prototype-viewer .television .control-wrapper .up img, .prototype-viewer .television .control-wrapper .down img {\n          max-width: 100%;\n          max-height: 100%; }\n\n.prototype-viewer .television .control-wrapper .up.down img, .prototype-viewer .television .control-wrapper .down.down img {\n          -webkit-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n\n.prototype-viewer label {\n    position: fixed;\n    bottom: 10px;\n    z-index: 999;\n    width: 100%;\n    padding: 0 10%;\n    text-align: center;\n    font-size: large;\n    line-height: 48px;\n    color: #909090; }\n\n.prototype-callout {\n  position: fixed;\n  width: 100vw;\n  height: 25vh;\n  bottom: 0px;\n  left: 0;\n  z-index: 990;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  /* Enable GPU Rendering */\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(50px);\n  -webkit-animation: slide-fade-in-from-bottom 0.5s ease-out forwards 0s;\n          animation: slide-fade-in-from-bottom 0.5s ease-out forwards 0s;\n  outline: none;\n  padding-top: 18px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); }\n\n.prototype-callout label {\n    color: #fff;\n    font-size: x-large;\n    font-weight: 300;\n    margin-right: 0px;\n    padding: 0;\n    margin-bottom: 30px;\n    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2); }\n\n.prototype-callout button.portfolio-btn,\n  .prototype-callout a.portfolio-btn {\n    margin: 0;\n    color: #fff;\n    border-color: #fff;\n    line-height: 44px;\n    height: 48px;\n    border-radius: 30px;\n    padding: 0 20px !important;\n    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);\n    transition: all 0.3s linear 0s; }\n\n.prototype-callout button.portfolio-btn:hover,\n    .prototype-callout a.portfolio-btn:hover {\n      background: #000;\n      color: #fff !important;\n      border-color: #000; }\n\n.prototype-callout .close {\n    position: absolute;\n    top: 0;\n    width: 100px;\n    height: 24px;\n    line-height: 24px;\n    font-size: x-small;\n    text-align: center;\n    color: #fff;\n    left: 50%;\n    background: rgba(0, 0, 0, 0.1);\n    letter-spacing: 1px;\n    margin-left: -50px;\n    text-transform: uppercase;\n    cursor: pointer; }\n\n.prototype-callout .close:hover {\n      background: #000;\n      color: #fff !important; }\n\n@-webkit-keyframes slide-fade-in-from-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n@keyframes slide-fade-in-from-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n.code-host,\n/deep/ .code-host {\n  max-width: 100%;\n  padding: 0 60px 0 30px; }\n\n/deep/ .picture-carousel-wrapper.veritas-place-carousel .picture-image-wrapper .img-container {\n  justify-content: center; }\n\n/deep/ .picture-carousel-wrapper.veritas-place-carousel .picture-image-wrapper img {\n  height: 70vh;\n  border-radius: 5px; }\n\n/deep/ .picture-carousel-wrapper.veritas-inplace-carousel .picture-image-wrapper .img-container {\n  justify-content: flex-end;\n  max-width: 300px; }\n\n/deep/ .picture-carousel-wrapper.veritas-inplace-carousel .picture-image-wrapper .text-container {\n  align-items: flex-start; }\n\n/deep/ .picture-carousel-wrapper.veritas-inplace-carousel .marvel-device.iphone-x {\n  zoom: 0.5; }\n"

/***/ }),

/***/ "./src/app/collection/veritas/veritas.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/collection/veritas/veritas.component.ts ***!
  \*********************************************************/
/*! exports provided: VeritasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeritasComponent", function() { return VeritasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _veritas_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./veritas.constants */ "./src/app/collection/veritas/veritas.constants.ts");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VeritasComponent = /** @class */ (function () {
    function VeritasComponent() {
        this.isVideoPlayed = false;
        this.videoPlayer = null;
        this.isVideoPiped = false;
        this.showProtoTypeViewer = false;
        this.pictureCarouselItems = [
            { text: null, img: 'assets/veritas/IMG_1307_iphone8spacegrey_portrait.png' },
            { text: null, img: 'assets/veritas/IMG_1308_iphone8spacegrey_portrait.png' },
            { text: null, img: 'assets/veritas/IMG_1312_iphone8spacegrey_portrait.png' },
            { text: null, img: 'assets/veritas/IMG_1313_iphone8spacegrey_portrait.png' },
            { text: null, img: 'assets/veritas/IMG_1315_iphone8spacegrey_portrait.png' },
            { text: null, img: 'assets/veritas/IMG_1316_iphone8spacegrey_portrait.png' },
            { text: null, img: 'assets/veritas/IMG_1317_iphone8spacegrey_portrait.png' },
        ];
        // tslint:disable:max-line-length
        this.animationCarouselItems = [
            { title: 'Start Button', text: 'The button wobbles to capture attention and provide a call-to-action.', video: 'https://s3.us-east-2.amazonaws.com/asitparida-portfolio/veritas/animations/Start+Button.mp4', code: {
                    content: _veritas_constants__WEBPACK_IMPORTED_MODULE_1__["StartButtonCode"],
                    parseTypeText: 'markup',
                    parseType: prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.markup
                } },
            { title: 'Progress Bar', text: 'The slider fills smoothly to show an indefinite loader.', video: 'https://s3.us-east-2.amazonaws.com/asitparida-portfolio/veritas/animations/Prograss+Bar.mp4', code: {
                    content: _veritas_constants__WEBPACK_IMPORTED_MODULE_1__["ProgressBarCode"],
                    parseTypeText: 'javascript',
                    parseType: prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.javascript
                } },
            // { title: 'Messages', text: 'The message slides-in to direct the user\'s  attention to it.', video: 'https://s3.us-east-2.amazonaws.com/asitparida-portfolio/veritas/animations/Message+Animation+In.mp4' },
            { title: 'Action Menus', text: 'The panel slides into and out of view to maintain continuity and provide a point of entry.', video: 'https://s3.us-east-2.amazonaws.com/asitparida-portfolio/veritas/animations/Feed+Interaction+-+2.mp4', code: {
                    content: _veritas_constants__WEBPACK_IMPORTED_MODULE_1__["ActionMenuCode"],
                    parseTypeText: 'markup',
                    parseType: prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.markup
                } },
        ];
    }
    VeritasComponent.prototype.ngOnInit = function () {
        document.documentElement.setAttribute('data-color', '$TURQUOISE');
    };
    VeritasComponent.prototype.ngOnDestroy = function () {
    };
    VeritasComponent.prototype.ngAfterViewInit = function () {
    };
    VeritasComponent.prototype.initializeVideo = function () {
        var _this = this;
        this.videoPlayer = new Plyr('#player', {
            loop: { active: true }
        });
        this.videoPlayer.toggleControls(false);
        this.videoPlayer.on('canplay', function (event) {
            var instance = event.detail.plyr;
            _this.videoPlayer.play();
            _this.videoPlayer.toggleControls(true);
        });
        this.videoPlayer.on('playing', function (event) {
            _this.isVideoPlayed = true;
        });
        this.videoPlayer.on('pause', function (event) {
            _this.isVideoPlayed = false;
        });
    };
    VeritasComponent.prototype.scrollTop = function () {
        if (typeof window.scrollTo !== 'undefined') {
            window.scrollTo(0, 0);
        }
    };
    VeritasComponent.prototype.watchVideo = function () {
        var _this = this;
        this.showProtoTypeViewer = true;
        setTimeout(function () {
            if (!_this.videoPlayer) {
                _this.initializeVideo();
            }
            setTimeout(function () {
                _this.scrollTop();
                _this.videoPlayer.play();
            }, 300);
        });
    };
    VeritasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-veritas',
            template: __webpack_require__(/*! ./veritas.component.html */ "./src/app/collection/veritas/veritas.component.html"),
            styles: [__webpack_require__(/*! ./veritas.component.scss */ "./src/app/collection/veritas/veritas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VeritasComponent);
    return VeritasComponent;
}());



/***/ }),

/***/ "./src/app/collection/veritas/veritas.constants.ts":
/*!*********************************************************!*\
  !*** ./src/app/collection/veritas/veritas.constants.ts ***!
  \*********************************************************/
/*! exports provided: ProgressBarCode, StartButtonCode, ActionMenuCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarCode", function() { return ProgressBarCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartButtonCode", function() { return StartButtonCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMenuCode", function() { return ActionMenuCode; });
var ProgressBarCode = "\nconst updateProgress = () => {\n    this.state.progress++;\n    if (this.state.progress >= 100) {\n        this.state.progress = 0;\n        if (this.props.onComplete) {\n            this.clearTimers();\n            this.props.onComplete();\n        }\n    }\n    if (this.updateProgressInterval) {\n        requestAnimationFrame(() => {\n            this.setState({\n                progress: this.state.progress\n            })\n        });\n        if (this.timeout) {\n            clearTimeout(this.timeout);\n            this.timeout = null;\n        }\n        this.timeout = setTimeout(updateProgress, currentTimer);\n    }\n};\n";
var StartButtonCode = "\nAnimated.loop(Animated.sequence([\n    Animated.timing(this.animatedValueForScaling, { toValue: 1, duration: 300, delay: 1000}),\n    Animated.timing(this.animatedValueForScaling, { toValue: 0, duration: 300 }),\n    Animated.timing(this.animatedValueForScaling, { toValue: 0.5, duration: 100 }),\n    Animated.timing(this.animatedValueForScaling, { toValue: 0, duration: 300 }),\n    Animated.timing(this.animatedValueForScaling, { toValue: 0.5, duration: 300 })\n])).start();\nconst scaledAnimatedStyle = {\n    transform:[\n        {   scaleX: this.animatedValueForScaling.interpolate({ inputRange: [0, 1], outputRange: [0.80, 1.2], }) },\n        { scaleY: this.animatedValueForScaling.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1.2] })}\n    ]\n};\nreturn (\n    <TouchableWithoutFeedback onPress={this._onPressButton.bind(this)}>\n\t    <Animated.View style={[styles.centralIconStyles, scaledAnimatedStyle]} >\n\t\t    <Icon color='#fff' size={36} name='keyboard-arrow-right' />\n\t    </Animated.View>\n    </TouchableWithoutFeedback>\n);\n";
var ActionMenuCode = "\n<TouchableWithoutFeedback onPress={this.onAction.bind(this, 'WORBLE_ACTIONS')} disabled={worbleActions.length === 0} >\n    <View style={[{ alignItems: 'center' }, worbleActionDisabledStyle]}>\n        <Image\n            source={\n                require('../assets/images/worble_icon.png')\n            }\n            style={styles.actionBoxImage} />\n        <Text style={styles.actionBoxlabel}>Actions</Text>\n    </View>\n</TouchableWithoutFeedback>\n<Modal\n    animationType=\"fade\"\n    transparent={true}\n    visible={modalVisible}>\n    <TouchableWithoutFeedback onPress={() => {\n        this.setModalVisible(!this.state.modalVisible);\n    }}>\n    ...\n</Modal>\n";


/***/ }),

/***/ "./src/app/gif-loader.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/gif-loader.directive.ts ***!
  \*****************************************/
/*! exports provided: GifLoaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifLoaderDirective", function() { return GifLoaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GifLoaderDirective = /** @class */ (function () {
    function GifLoaderDirective(elRef) {
        this.elRef = elRef;
        this.gifHidden = true;
        this.imageElem = null;
        this.gifImageElem = null;
        this.nonGifImageElem = null;
        this.topThreshold = 200;
        this.bottomThreshold = window.innerHeight * 0.33;
    }
    GifLoaderDirective.prototype.ngAfterViewInit = function () {
        if (this.elRef) {
            this.imageElem = this.elRef.nativeElement;
            if (this.imageElem) {
                var gifElem = this.imageElem.querySelector('[data-img="gif"]');
                if (gifElem) {
                    this.gifImageElem = gifElem;
                }
                var nonGifElem = this.imageElem.querySelector('[data-img="non-gif"]');
                if (nonGifElem) {
                    this.nonGifImageElem = nonGifElem;
                }
                this.onWindowScroll();
            }
        }
    };
    GifLoaderDirective.prototype.onWindowScroll = function () {
        if (this.imageElem) {
            var props = this.imageElem.getBoundingClientRect();
            if (props) {
                var imageMid = props.top + (props.height / 2);
                var windowMid = window.innerHeight / 2;
                if (this.nonGifImageElem && this.gifImageElem) {
                    if (imageMid > (windowMid - this.topThreshold) && imageMid < (windowMid + this.bottomThreshold)) {
                        this.nonGifImageElem.classList.add('hidden');
                        this.gifImageElem.classList.remove('hidden');
                        this.gifHidden = false;
                    }
                    else {
                        this.nonGifImageElem.classList.remove('hidden');
                        this.gifImageElem.classList.add('hidden');
                        this.gifHidden = true;
                    }
                }
            }
        }
    };
    GifLoaderDirective.prototype.onMouseover = function () {
        if (this.gifHidden) {
            if (this.nonGifImageElem && this.gifImageElem) {
                this.nonGifImageElem.classList.add('hidden');
                this.gifImageElem.classList.remove('hidden');
                this.gifHidden = false;
            }
        }
    };
    GifLoaderDirective.prototype.onMouseleave = function () {
        if (!this.gifHidden) {
            if (this.nonGifImageElem && this.gifImageElem) {
                this.nonGifImageElem.classList.remove('hidden');
                this.gifImageElem.classList.add('hidden');
                this.gifHidden = true;
            }
        }
        this.onWindowScroll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GifLoaderDirective.prototype, "onWindowScroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GifLoaderDirective.prototype, "onMouseover", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GifLoaderDirective.prototype, "onMouseleave", null);
    GifLoaderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[gifLoader]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GifLoaderDirective);
    return GifLoaderDirective;
}());



/***/ }),

/***/ "./src/app/git-link.component.ts":
/*!***************************************!*\
  !*** ./src/app/git-link.component.ts ***!
  \***************************************/
/*! exports provided: GitLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitLinkComponent", function() { return GitLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GitLinkComponent = /** @class */ (function () {
    function GitLinkComponent() {
    }
    GitLinkComponent.prototype.onGitLink = function (e, link) {
        if (gtag) {
            gtag('event', 'open-git-link', {
                'event_category': 'Projects',
                'event_label': link
            });
        }
        e.stopPropagation();
        e.preventDefault();
        window.open(link, '_blank');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GitLinkComponent.prototype, "link", void 0);
    GitLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'git-link',
            template: " <a class=\"git-link\" target=\"_blank\" (click)=\"onGitLink($event, link)\" style=\"cursor: pointer;\">\n        <svg width=\"30px\" height=\"47px\" viewBox=\"0 0 48 47\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <title>Github</title>\n            <g id=\"Icons\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                <g id=\"Black\" transform=\"translate(-700.000000, -560.000000)\" >\n                    <path d=\"M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560\" id=\"Github\"></path>\n                </g>\n            </g>\n        </svg>\n    </a>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], GitLinkComponent);
    return GitLinkComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\n    <div class=\"titles\">\n        <h1 style=\"margin-top: 30px\">Hi</h1>\n        <h2 style=\"margin-top: 0px;\"> I am Asit</h2>\n        <h2>I design beautiful and simple things through <span class=\"code\">code</span> as my medium</h2>\n        <div class=\"live-proto-btn \" (click)=\"showVideo = true;\" *ngIf=\"!isMobile\">\n            <a class=\"portfolio-btn main\" style=\"margin-right: 15px;\"><i>▶</i> Watch Intro</a>\n        </div>\n    </div>\n    <div class=\"projects-title\">\n        <label>Projects</label>\n    </div>\n    <div class=\"project-wrapper\">\n        <div class=\"project-item-wrapper\">\n            <a [routerLink]=\"['/featured/veritas']\" data-bg-color=\"$TURQUOISE\">\n                <div class=\"project-item-content-wrapper\">\n                    <div class=\"content colored-bg\" gifLoader>\n                        <img data-img=\"non-gif\" class=\"\" style=\"margin:0 45px;\" data-lazy-load=\"true\"\n                            src=\"assets/gifs/veritas-frame.gif\" alt=\"GIF for Veritas App\" />\n                        <img data-img=\"gif\" class=\"hidden\" style=\"margin:0 45px;\" data-lazy-load=\"true\"\n                            src=\"assets/gifs/veritas.gif\" alt=\"GIF for Veritas App\" />\n                    </div>\n                    <div class=\"content\">\n                        <label class=\"title\">Veritas</label>\n                        <label>An avatar based intervention game for combating misinformation</label>\n                        <div class=\"tags\">\n                            <div class=\"tag\">research</div>\n                            <div class=\"tag\">prototyping</div>\n                            <div class=\"tag\">development</div>\n                        </div>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"project-item-wrapper\">\n            <a [routerLink]=\"['/featured/idiff']\" data-bg-color=\"$WISTERIA\">\n                <div class=\"project-item-content-wrapper\">\n                    <div class=\"content\">\n                        <label class=\"title\">iDiff</label>\n                        <label>A web-based visual tool to compare multiple fidelities for designs</label>\n                        <div class=\"tags\">\n                            <div class=\"tag\">design</div>\n                            <div class=\"tag\">research</div>\n                            <div class=\"tag\">development</div>\n                        </div>\n                    </div>\n                    <div class=\"content colored-bg\" gifLoader>\n                        <img data-img=\"non-gif\" class=\"\" style=\"margin:0 45px;\" data-lazy-load=\"true\"\n                            src=\"assets/gifs/idiff-frame.gif\" alt=\"GIF for I-DIFF App\" />\n                        <img data-img=\"gif\" class=\"hidden\" style=\"margin:0 45px;\" data-lazy-load=\"true\"\n                            src=\"assets/gifs/idiff.gif\" alt=\"GIF for I-DIFF App\" />\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"project-item-wrapper\">\n            <a [routerLink]=\"['/featured/transit-display']\" data-bg-color=\"$BELIZE_HOLE\">\n                <div class=\"project-item-content-wrapper\">\n                    <div class=\"content colored-bg\" gifLoader>\n                        <img data-img=\"non-gif\" class=\"\" data-lazy-load=\"true\"\n                            src=\"assets/gifs/transit-display-frame.gif\" alt=\"GIF for Transit Hub Display\"\n                            style=\"max-height: 90%;\" />\n                        <img data-img=\"gif\" class=\"hidden\" data-lazy-load=\"true\" src=\"assets/gifs/transit-display.gif\"\n                            alt=\"GIF for Transit Hub Display\" style=\"max-height: 90%;\" />\n                    </div>\n                    <div class=\"content \">\n                        <label class=\"title\">Transit Hub Display</label>\n                        <label>Designing a data-driven display for a tourist hub</label>\n                        <div class=\"tags\">\n                            <div class=\"tag\">design</div>\n                            <div class=\"tag\">research</div>\n                            <div class=\"tag\">prototyping</div>\n                        </div>\n                    </div>\n                </div>\n            </a>\n        </div>\n        <div class=\"project-item-wrapper\">\n            <a [routerLink]=\"['/featured/bun-bun']\" data-bg-color=\"$POMEGRANATE\">\n                <div class=\"project-item-content-wrapper\">\n                    <div class=\"content \">\n                        <label class=\"title\">Bun Bun Bakery</label>\n                        <label>An online bakery shop for the best cinnamon buns in town</label>\n                        <div class=\"tags\">\n                            <div class=\"tag\">design</div>\n                            <div class=\"tag\">prototyping</div>\n                            <div class=\"tag\">development</div>\n                        </div>\n                    </div>\n                    <div class=\"content colored-bg\" gifLoader>\n                        <img data-img=\"non-gif\" class=\"\" data-lazy-load=\"true\" src=\"assets/gifs/bun-bun-frame.gif\"\n                            alt=\"GIF for Bun Bun\" style=\"max-height: 90%;\" />\n                        <img data-img=\"gif\" class=\"hidden\" data-lazy-load=\"true\" src=\"assets/gifs/bun-bun.gif\"\n                            alt=\"GIF for Bun Bun\" style=\"max-height: 90%;\" />\n                    </div>\n                </div>\n            </a>\n        </div>\n    </div>\n    <div class=\"project-wrapper\">\n        <div class=\"project-item-wrapper\">\n            <div class=\"project-items-list\">\n                <div class=\"project-list-item\">\n                    <a (click)=\"openDrawer('Lean-Case')\" data-bg-color=\"$TURQUOISE\">\n                        <div class=\"project-item-content-wrapper\">\n                            <div class=\"content colored-bg\">\n                                <img data-lazy-load=\"true\" src=\"assets/project-logos/lean-case.png\"\n                                    alt=\"GIF for lean case\" style=\"max-height: 90%;\" />\n                            </div>\n                            <div class=\"content \">\n                                <label class=\"title\">Lean-Case</label>\n                                <label>A fintech app to plan and model day-to-day business operations</label>\n                                <div class=\"tags\">\n                                    <div class=\"tag\">design</div>\n                                    <div class=\"tag\">development</div>\n                                    <div class=\"tag\">angular</div>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"project-list-item\">\n                    <a (click)=\"openDrawer('uif-fabric')\" data-bg-color=\"$BELIZE_HOLE\">\n                        <div class=\"project-item-content-wrapper\">\n                            <div class=\"content colored-bg\">\n                                <img data-lazy-load=\"true\" src=\"assets/project-logos/uif-fabric.png\"\n                                    alt=\"GIF for Bun Bun\" style=\"max-height: 70%;\" />\n                            </div>\n                            <div class=\"content \">\n                                <label class=\"title\">uif-fabric</label>\n                                <label>Angular UI components library for Office UI fabric</label>\n                                <div class=\"tags\">\n                                    <div class=\"tag\">components</div>\n                                    <div class=\"tag\">UI Library</div>\n                                    <div class=\"tag\">angular</div>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n                <div class=\"project-list-item\">\n                    <a (click)=\"openDrawer('NotSoGrey')\" data-bg-color=\"$TURQUOISE\">\n                        <div class=\"project-item-content-wrapper\">\n                            <div class=\"content colored-bg\" style=\"padding: 0;\">\n                                <img data-lazy-load=\"true\" src=\"assets/project-logos/notsogrey_app.png\" alt=\"GIF for Not So Grey\"\n                                    style=\"max-width: 90%;\" />\n                            </div>\n                            <div class=\"content \">\n                                <label class=\"title\">Not So Grey</label>\n                                <label>A desktop app for folks who dream colors</label>\n                                <div class=\"tags\">\n                                    <div class=\"tag\">redesign</div>\n                                    <div class=\"tag\">chrome app</div>\n                                    <div class=\"tag\">angular</div>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div>\n        <div class=\"live-proto-btn \">\n            <a class=\"portfolio-btn main\" [routerLink]=\"['/other-projects']\"> See Other Projects</a>\n        </div>\n    </div>\n</div>\n\n<ng-container *ngIf=\"showVideo\">\n    <app-pitch-video [(showVideo)]=\"showVideo\"></app-pitch-video>\n</ng-container>\n<ng-container *ngIf=\"drawerOpened\">\n    <app-project-previewer [(drawerOpened)]=\"drawerOpened\" [projectId]=\"activeProjectId\"></app-project-previewer>\n</ng-container>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.router-content {\n  padding: 60px 0; }\n@media only screen and (max-width: 768px) {\n    .router-content {\n      padding: 80px 0 60px 0; } }\n.grid-separator {\n  background: linear-gradient(-45deg, #e1f0fa 16px, red 16px, #e1f0fa 16px, transparent 0), linear-gradient(45deg, #e1f0fa 16px, transparent 0);\n  background-position: left top;\n  background-repeat: repeat-x;\n  background-size: 18px 32px;\n  content: \" \";\n  display: block;\n  height: 32px;\n  width: 100%;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  -webkit-transform: scaleY(-1);\n          transform: scaleY(-1); }\n.grid-separator.top {\n    top: 0; }\n.grid-separator.reverse {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n.grid-separator.dark {\n    background: linear-gradient(-45deg, #444 16px, red 16px, #444 16px, transparent 0), linear-gradient(45deg, #444 16px, transparent 0);\n    background-position: left top;\n    background-repeat: repeat-x;\n    background-size: 18px 32px; }\n.tabs {\n  text-align: center;\n  display: block;\n  margin: 15px auto 0 auto;\n  padding: 0;\n  box-sizing: border-box; }\n@media only screen and (min-width: 769px) {\n    .tabs {\n      margin-top: 20px; } }\n.tabs .tab-toggler {\n    padding: 5px 5px 0 5px; }\n@media only screen and (min-width: 769px) {\n      .tabs .tab-toggler {\n        text-align: center;\n        display: inline-block; } }\n@media only screen and (max-width: 768px) {\n      .tabs .tab-toggler {\n        padding: 0; } }\n.tabs .tab-toggler button {\n      display: inline-block;\n      line-height: 60px;\n      height: 60px;\n      padding: 0;\n      border: none;\n      font-weight: 100;\n      outline: none;\n      font-size: medium;\n      font-weight: 100;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      box-sizing: border-box;\n      text-align: center;\n      color: #909090;\n      background: transparent;\n      border-bottom: 3px solid rgba(52, 152, 219, 0.1); }\n.tabs .tab-toggler button.active {\n        font-weight: bold;\n        color: #3498db;\n        border-bottom: 3px solid #3498db; }\n@media only screen and (min-width: 769px) {\n          .tabs .tab-toggler button.active {\n            width: auto; } }\n@media only screen and (max-width: 768px) {\n        .tabs .tab-toggler button {\n          border-bottom-width: 3px;\n          font-size: medium;\n          font-weight: 100;\n          text-transform: uppercase;\n          width: 49%; } }\n@media only screen and (min-width: 769px) {\n        .tabs .tab-toggler button {\n          width: auto;\n          padding: 0 15px; } }\n@media only screen and (max-width: 768px) {\n    .tabs {\n      padding: 12px 12px 0 12px;\n      margin-top: 0; } }\n@media only screen and (min-width: 1210px) {\n  .tabs {\n    width: 1200px !important; } }\n@media (min-width: 800px) and (max-width: 1209px) {\n  .tabs {\n    width: 800px !important; } }\n.home-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 60px 15px 60px;\n  flex-direction: column;\n  max-width: 1200px;\n  margin: 0 auto; }\n@media only screen and (max-width: 768px) {\n    .home-wrapper {\n      padding: 30px 12px 5px 12px; } }\n.home-wrapper .play-icon {\n    width: 48px;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n    background: rgba(0, 0, 0, 0.05);\n    border-radius: 50%;\n    margin: 60px 0 0 0;\n    cursor: pointer; }\n.home-wrapper .play-icon i {\n      color: rgba(0, 0, 0, 0.3);\n      font-style: normal;\n      line-height: 48px;\n      cursor: pointer;\n      position: relative;\n      left: 2px; }\n.home-wrapper .play-icon:hover {\n      background: rgba(0, 0, 0, 0.75); }\n.home-wrapper .play-icon:hover i {\n        color: rgba(255, 255, 255, 0.9); }\n@media only screen and (max-width: 768px) {\n      .home-wrapper .play-icon {\n        display: none; } }\n.home-wrapper .titles {\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 30px 0 30px 0;\n    flex-direction: column; }\n@media only screen and (min-width: 769px) {\n      .home-wrapper .titles {\n        min-height: calc(90vh - 300px); } }\n@media only screen and (max-width: 768px) {\n      .home-wrapper .titles {\n        padding: 15px 0; } }\n.home-wrapper .titles span.code {\n      padding: 0;\n      color: #3498db; }\n.home-wrapper .titles span.code:before {\n        content: '〈';\n        position: relative;\n        left: -6px;\n        color: #3498db;\n        margin-right: 2px; }\n.home-wrapper .titles span.code:after {\n        content: '〉';\n        position: relative;\n        right: -6px;\n        color: #3498db;\n        margin-left: 2px; }\n.home-wrapper h1 {\n    font-size: 6em;\n    font-weight: 300;\n    margin: 30px 0;\n    padding: 0;\n    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);\n    text-align: center; }\n@media only screen and (max-width: 768px) {\n      .home-wrapper h1 {\n        font-size: 3em;\n        margin: 15px 0;\n        padding: 0;\n        text-align: center;\n        width: 100%; } }\n.home-wrapper h2 {\n    font-size: 1.5em;\n    font-weight: 100;\n    margin: 5px 0;\n    padding: 0;\n    text-align: center; }\n@media only screen and (max-width: 768px) {\n      .home-wrapper h2 {\n        width: 100%;\n        font-size: 1.25em;\n        padding: 0;\n        text-align: center;\n        line-height: normal; }\n        .home-wrapper h2 + h2 {\n          margin-top: 10px; } }\n.home-wrapper h3 {\n    font-size: 2em;\n    font-weight: 100;\n    margin: 0;\n    padding: 0;\n    text-align: center; }\n@media only screen and (max-width: 768px) {\n      .home-wrapper h3 {\n        font-size: 1.5em;\n        padding: 0 12px; } }\n.home-wrapper .projects-title {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 1px dashed rgba(0, 0, 0, 0.1);\n    margin: 60px 0 30px 0;\n    position: relative; }\n@media only screen and (max-width: 768px) {\n      .home-wrapper .projects-title {\n        width: 100%;\n        padding: 0;\n        border-top: none;\n        margin-top: 15px;\n        margin-bottom: 15px; } }\n.home-wrapper .projects-title label {\n      margin: 25px 0 0 0;\n      padding: 0;\n      line-height: 60px;\n      font-size: 1.5em;\n      color: #707070;\n      font-weight: 100; }\n@media only screen and (max-width: 768px) {\n        .home-wrapper .projects-title label {\n          font-size: medium;\n          font-weight: 500;\n          line-height: 36px; } }\n@media only screen and (min-width: 769px) {\n        .home-wrapper .projects-title label {\n          margin: 25px 0 0 0;\n          padding: 0;\n          line-height: 60px;\n          font-size: 1em;\n          color: #A0A0A0;\n          font-weight: 500;\n          letter-spacing: 1px;\n          width: 250px;\n          text-align: center;\n          margin-top: 0; } }\n.home-wrapper .project-wrapper {\n    margin: 0;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-flow: column; }\n@media only screen and (max-width: 768px) {\n      .home-wrapper .project-wrapper {\n        width: 100%;\n        padding: 0; } }\n.home-wrapper .project-wrapper .project-item-wrapper {\n      padding: 0;\n      margin: 0 0 30px 0;\n      max-width: 1200px; }\n@media only screen and (max-width: 768px) {\n        .home-wrapper .project-wrapper .project-item-wrapper {\n          flex: 1 1 calc(100%);\n          height: auto;\n          margin-bottom: 12px;\n          padding: 0;\n          width: 100%; } }\n.home-wrapper .project-wrapper .project-item-wrapper .project-items-list {\n        width: 100%;\n        display: flex; }\n@media only screen and (max-width: 768px) {\n          .home-wrapper .project-wrapper .project-item-wrapper .project-items-list {\n            flex-flow: column; } }\n@media only screen and (min-width: 769px) {\n          .home-wrapper .project-wrapper .project-item-wrapper .project-items-list {\n            flex-flow: row wrap;\n            justify-content: space-between; } }\n@media only screen and (min-width: 769px) {\n          .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item {\n            flex: 1;\n            margin: 0 15px; }\n            .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item:first-child {\n              margin-left: 0; }\n            .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item:last-child {\n              margin-right: 0; } }\n@media only screen and (max-width: 768px) {\n          .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item {\n            width: 100%; }\n            .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item:not(:last-child) {\n              margin-bottom: 12px; } }\n.home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper {\n          width: 100%;\n          height: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center; }\n.home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .content {\n            min-width: auto; }\n@media only screen and (min-width: 769px) {\n              .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .content {\n                padding: 45px 20px 30px 30px; } }\n@media only screen and (max-width: 768px) {\n              .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .content {\n                padding: 20px;\n                align-items: flex-start;\n                width: 100%; } }\n.home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .content.colored-bg {\n              height: 250px;\n              width: 100%;\n              padding: 15px; }\n@media only screen and (min-width: 769px) {\n              .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .content:not(.colored-bg) label {\n                text-align: center; }\n                .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .content:not(.colored-bg) label.title {\n                  margin: 0 0 30px 0; }\n                .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .content:not(.colored-bg) label:not(.title) {\n                  font-size: 1.15em;\n                  font-weight: 400;\n                  line-height: 1.50em;\n                  margin: 0 0 20px 0; } }\n@media only screen and (max-width: 768px) {\n              .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .content:not(.colored-bg) label {\n                text-align: left; }\n                .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .content:not(.colored-bg) label.title {\n                  margin: 0 0 18px 0; }\n                .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .content:not(.colored-bg) label:not(.title) {\n                  font-size: medium;\n                  font-weight: 400; } }\n.home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .tags {\n            display: flex;\n            flex-flow: row wrap;\n            margin-top: 20px;\n            justify-content: center; }\n@media only screen and (max-width: 768px) {\n              .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .tags {\n                justify-content: flex-start;\n                margin-top: 15px; } }\n@media only screen and (max-width: 768px) {\n              .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .tags .tag {\n                padding: 0 7px; } }\n@media only screen and (min-width: 769px) {\n              .home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .tags .tag {\n                padding: 0 15px; } }\n.home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .tags .tag:first-child {\n              padding-left: 0; }\n.home-wrapper .project-wrapper .project-item-wrapper .project-items-list .project-list-item a .project-item-content-wrapper .tags .tag:last-child {\n              padding-right: 0; }\n.home-wrapper .project-wrapper .project-item-wrapper a {\n        text-decoration: none;\n        display: block;\n        background: rgba(0, 0, 0, 0.025);\n        color: #333;\n        width: 100%;\n        padding: 0;\n        flex-flow: column;\n        transition: all 0.3s linear 0s;\n        position: relative;\n        z-index: 1; }\n.home-wrapper .project-wrapper .project-item-wrapper a *, .home-wrapper .project-wrapper .project-item-wrapper a {\n          cursor: pointer; }\n@media only screen and (max-width: 768px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a {\n            padding: 0; } }\n.home-wrapper .project-wrapper .project-item-wrapper a:hover {\n          z-index: 2; }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper {\n          width: 100%;\n          height: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: row;\n          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n          transition: all 0.3s linear 0s; }\n@media only screen and (max-width: 768px) {\n            .home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper {\n              box-shadow: none; } }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .content {\n            order: 1;\n            flex: initial;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n            padding: 45px;\n            transition: background 0.3s linear 0s; }\n@media only screen and (max-width: 768px) {\n              .home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .content {\n                padding: 20px; } }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .content.colored-bg {\n              flex: initial;\n              height: 450px; }\n@media only screen and (max-width: 768px) {\n                .home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .content.colored-bg {\n                  display: none; } }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .content:not(.colored-bg) {\n              flex: 1; }\n@media only screen and (min-width: 769px) {\n                .home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .content:not(.colored-bg) {\n                  min-width: 400px; } }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper img {\n            max-width: 100%;\n            max-height: 100%; }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper img.hidden {\n              display: none; }\n@media only screen and (max-width: 768px) {\n            .home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper label.title {\n              margin: 0 0 18px 0;\n              padding: 0;\n              font-size: medium;\n              font-weight: 700;\n              text-align: left;\n              text-transform: uppercase;\n              width: 100%; } }\n@media only screen and (min-width: 769px) {\n            .home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper label.title {\n              margin: 0 0 15px 0;\n              padding: 0;\n              font-size: 1.25em;\n              font-weight: 700;\n              text-align: left;\n              width: 100%;\n              word-spacing: 3px;\n              opacity: 0.75; } }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper label {\n            margin: 0;\n            padding: 0;\n            font-size: 1.5em;\n            font-weight: 300;\n            text-align: left; }\n@media only screen and (max-width: 768px) {\n              .home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper label {\n                font-size: medium;\n                font-weight: normal;\n                width: 100%; } }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper p {\n            width: 80%;\n            margin: 15px 0 0 0;\n            font-size: medium;\n            text-align: center; }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .tags {\n            width: 100%;\n            display: flex;\n            flex-flow: row wrap;\n            margin: 60px 0 0 0; }\n@media only screen and (max-width: 768px) {\n              .home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .tags {\n                margin-top: 15px; } }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .tags .tag {\n              padding: 0 15px;\n              text-transform: uppercase;\n              color: #909090;\n              font-size: small;\n              margin: 0;\n              font-weight: 600; }\n@media only screen and (max-width: 768px) {\n                .home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .tags .tag {\n                  font-size: x-small;\n                  padding: 0 7px;\n                  color: #565656; } }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .tags .tag:not(:last-child) {\n                border-right: 1px solid #d0d0d0; }\n.home-wrapper .project-wrapper .project-item-wrapper a .project-item-content-wrapper .tags .tag:first-child {\n                padding-left: 0; }\n.home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$TURQUOISE\"] .project-item-content-wrapper .colored-bg {\n          background: #d2f9f1; }\n@media only screen and (max-width: 768px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$TURQUOISE\"] {\n            background: #d2f9f1; } }\n@media only screen and (min-width: 769px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$TURQUOISE\"] .project-item-content-wrapper:hover {\n            background: #1abc9c;\n            box-shadow: 0px 13px 71px -2px #28e1bd; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$TURQUOISE\"] .project-item-content-wrapper:hover .colored-bg {\n              background: #1abc9c; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$TURQUOISE\"] .project-item-content-wrapper:hover .tags .tag {\n              color: #f0f0f0;\n              border-right-color: #e0e0e0; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$TURQUOISE\"] .project-item-content-wrapper:hover label {\n              color: #f0f0f0; } }\n.home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$BELIZE_HOLE\"] .project-item-content-wrapper .colored-bg {\n          background: #dfeef8; }\n@media only screen and (max-width: 768px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$BELIZE_HOLE\"] {\n            background: #dfeef8; } }\n@media only screen and (min-width: 769px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$BELIZE_HOLE\"] .project-item-content-wrapper:hover {\n            background: #409ad5;\n            box-shadow: 0px 13px 71px -2px #2980b9; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$BELIZE_HOLE\"] .project-item-content-wrapper:hover .colored-bg {\n              background: #409ad5; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$BELIZE_HOLE\"] .project-item-content-wrapper:hover .tags .tag {\n              color: #f0f0f0;\n              border-right-color: #e0e0e0; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$BELIZE_HOLE\"] .project-item-content-wrapper:hover label {\n              color: #f0f0f0; } }\n.home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$PUMPKIN\"] .project-item-content-wrapper .colored-bg {\n          background: #fceae9; }\n@media only screen and (max-width: 768px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$PUMPKIN\"] {\n            background: #fceae9; } }\n@media only screen and (min-width: 769px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$PUMPKIN\"] .project-item-content-wrapper:hover {\n            background: #d35400;\n            box-shadow: 0px 13px 71px -2px #d35400; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$PUMPKIN\"] .project-item-content-wrapper:hover .colored-bg {\n              background: #d35400; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$PUMPKIN\"] .project-item-content-wrapper:hover .tags .tag {\n              color: #f0f0f0;\n              border-right-color: #e0e0e0; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$PUMPKIN\"] .project-item-content-wrapper:hover label {\n              color: #f0f0f0; } }\n.home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$ALIZARIN\"] .project-item-content-wrapper .colored-bg {\n          background: #fceae9; }\n@media only screen and (max-width: 768px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$ALIZARIN\"] {\n            background: #fceae9; } }\n@media only screen and (min-width: 769px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$ALIZARIN\"] .project-item-content-wrapper:hover {\n            background: #e74c3c;\n            box-shadow: 0px 13px 71px -2px #e74c3c; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$ALIZARIN\"] .project-item-content-wrapper:hover .colored-bg {\n              background: #e74c3c; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$ALIZARIN\"] .project-item-content-wrapper:hover .tags .tag {\n              color: #f0f0f0;\n              border-right-color: #e0e0e0; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$ALIZARIN\"] .project-item-content-wrapper:hover label {\n              color: #f0f0f0; } }\n.home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$POMEGRANATE\"] .project-item-content-wrapper .colored-bg {\n          background: #fceae9; }\n@media only screen and (max-width: 768px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$POMEGRANATE\"] {\n            background: #fceae9; } }\n@media only screen and (min-width: 769px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$POMEGRANATE\"] .project-item-content-wrapper:hover {\n            background: #c0392b;\n            box-shadow: 0px 13px 71px -2px #c0392b; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$POMEGRANATE\"] .project-item-content-wrapper:hover .colored-bg {\n              background: #c0392b; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$POMEGRANATE\"] .project-item-content-wrapper:hover .tags .tag {\n              color: #f0f0f0;\n              border-right-color: #e0e0e0; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$POMEGRANATE\"] .project-item-content-wrapper:hover label {\n              color: #f0f0f0; } }\n.home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$WISTERIA\"] .project-item-content-wrapper .colored-bg {\n          background: #f3eaf7; }\n@media only screen and (max-width: 768px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$WISTERIA\"] {\n            background: #f3eaf7; } }\n@media only screen and (min-width: 769px) {\n          .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$WISTERIA\"] .project-item-content-wrapper:hover {\n            background: #8e44ad;\n            box-shadow: 0px 13px 71px -2px #8e44ad; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$WISTERIA\"] .project-item-content-wrapper:hover .colored-bg {\n              background: #8e44ad; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$WISTERIA\"] .project-item-content-wrapper:hover .tags .tag {\n              color: #f0f0f0;\n              border-right-color: #e0e0e0; }\n            .home-wrapper .project-wrapper .project-item-wrapper a[data-bg-color=\"$WISTERIA\"] .project-item-content-wrapper:hover label {\n              color: #f0f0f0; } }\n.video-player {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  z-index: 999;\n  top: 0;\n  left: 0; }\n.video-player video {\n    width: 100%;\n    height: 100%; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'app works!';
        this.COLORS = {
            RED: '#FD5061',
            YELLOW: '#FFCEA5',
            BLACK: '#29363B',
            WHITE: 'white',
            VINOUS: '#A50710'
        };
        this.currentTab = 0;
        this.showVideo = false;
        this.drawerOpened = false;
        this.activeProjectId = null;
        this.isMobile = false;
        if (MobileDetect) {
            var md = new MobileDetect(window.navigator.userAgent);
            // tslint:disable-next-line:max-line-length
            var value = md.mobile() || md.phone() || md.tablet() || md.is('iPhone') || md.is('Android') || md.is('android');
            if (value) {
                this.isMobile = true;
            }
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        document.documentElement.setAttribute('data-color', '$NONE');
    };
    HomeComponent.prototype.openDrawer = function (projectId) {
        this.activeProjectId = projectId;
        this.drawerOpened = true;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/img-zoomer.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/img-zoomer.directive.ts ***!
  \*****************************************/
/*! exports provided: ImgZoomerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgZoomerDirective", function() { return ImgZoomerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImgZoomerDirective = /** @class */ (function () {
    function ImgZoomerDirective(el) {
        this.el = el;
        this.src = null;
        this.classAdded = false;
        this.spanNode = null;
        this.clickListener = null;
    }
    ImgZoomerDirective.prototype.ngAfterViewInit = function () {
        this.spanNode = document.createElement('span');
        this.spanNode.classList.add('zoomed-in-bg');
        this.el.nativeElement.classList.add('cursor-zoom-in');
        this.el.nativeElement.parentNode.append(this.spanNode);
    };
    ImgZoomerDirective.prototype.onClick = function () {
        var _this = this;
        this.classAdded = !this.classAdded;
        if (this.classAdded) {
            this.el.nativeElement.classList.add('zoomed-in');
            setTimeout(function () {
                _this.addDocClickListener();
            });
        }
        else {
            this.el.nativeElement.classList.remove('zoomed-in');
            this.removeDocClickListener();
        }
    };
    ImgZoomerDirective.prototype.addDocClickListener = function () {
        var _this = this;
        this.clickListener = function (e) {
            if (_this.classAdded) {
                _this.el.nativeElement.classList.remove('zoomed-in');
                _this.classAdded = false;
                _this.removeDocClickListener();
            }
        };
        document.addEventListener('click', this.clickListener);
    };
    ImgZoomerDirective.prototype.removeDocClickListener = function () {
        document.removeEventListener('click', this.clickListener);
        this.clickListener = null;
    };
    ImgZoomerDirective.prototype.onKeyUpEscape = function () {
        if (this.classAdded) {
            this.el.nativeElement.classList.remove('zoomed-in');
            this.classAdded = false;
            this.removeDocClickListener();
        }
    };
    ImgZoomerDirective.prototype.onDocKeyUpEscape = function () {
        if (this.classAdded) {
            this.el.nativeElement.classList.remove('zoomed-in');
            this.classAdded = false;
            this.removeDocClickListener();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgZoomerDirective.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImgZoomerDirective.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keyup.escape'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImgZoomerDirective.prototype, "onKeyUpEscape", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup.escape'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImgZoomerDirective.prototype, "onDocKeyUpEscape", null);
    ImgZoomerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[imgZoomer]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ImgZoomerDirective);
    return ImgZoomerDirective;
}());



/***/ }),

/***/ "./src/app/my-skills/my-skills.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-skills/my-skills.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-skills-wrapper\" *ngFor=\"let group of skillGroups\">\n    <label class=\"group-title\">{{group.title}}</label>\n    <ul class=\"content-skills\">\n        <li class=\"badge\" *ngFor=\"let item of group.skills\">\n            <label>{{item.tag}}</label>\n            <img data-tag=\"skill-pic\" data-lazy-load=\"true\" class=\"hidden\" [attr.id]=\"item.id\" [attr.src]=\"item.src\"\n                [attr.alt]=\"item.tag\" [attr.title]=\"item.tag\" />\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/my-skills/my-skills.component.scss":
/*!****************************************************!*\
  !*** ./src/app/my-skills/my-skills.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-skills-wrapper {\n  padding: 45px 90px 30px 90px;\n  display: flex;\n  flex-flow: column;\n  min-height: 50vh;\n  justify-content: center;\n  align-items: center; }\n  @media only screen and (max-width: 768px) {\n    .content-skills-wrapper {\n      padding: 30px 15px; } }\n  .content-skills-wrapper:nth-child(2n+ 2) {\n    background: #f1fdfb; }\n  .content-skills-wrapper label.group-title {\n    margin: 15px 0 30px 0;\n    font-size: large;\n    font-weight: bold;\n    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1); }\n  @media only screen and (max-width: 768px) {\n      .content-skills-wrapper label.group-title {\n        margin-bottom: 15px; } }\n  .content-skills-wrapper .content-skills {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    flex-flow: row wrap;\n    justify-content: center; }\n  .content-skills-wrapper .badge {\n    padding: 0;\n    border-left: 2px solid rgba(0, 0, 0, 0.025);\n    list-style: none;\n    max-width: 250px;\n    width: 20%;\n    height: 150px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 15px 0 30px 0;\n    flex-direction: column; }\n  @media only screen and (max-width: 768px) {\n      .content-skills-wrapper .badge {\n        width: 50%;\n        justify-content: flex-start;\n        border-left: none;\n        margin-bottom: 0;\n        height: 100px;\n        margin-top: 5px; } }\n  .content-skills-wrapper .badge img {\n      max-width: 75%;\n      max-height: 75%;\n      opacity: 0;\n      transition: opacity 0.2s ease-in 0s; }\n  .content-skills-wrapper .badge img.show {\n        opacity: 1; }\n  @media only screen and (max-width: 768px) {\n        .content-skills-wrapper .badge img {\n          height: 50px; } }\n  .content-skills-wrapper .badge label {\n      font-weight: 500;\n      font-size: medium;\n      letter-spacing: 1px;\n      margin: 0;\n      padding: 15px 0; }\n"

/***/ }),

/***/ "./src/app/my-skills/my-skills.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-skills/my-skills.component.ts ***!
  \**************************************************/
/*! exports provided: MySkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySkillsComponent", function() { return MySkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillGroups = [
    {
        title: 'Web Development',
        skills: [
            { id: 'html5', src: 'assets/profile-skills/html5.png', tag: 'HTML5' },
            { id: 'css3', src: 'assets/profile-skills/css3.png', tag: 'CSS3' },
            { id: 'js', src: 'assets/profile-skills/js.png', tag: 'Javascript' },
            { id: 'scss', src: 'assets/profile-skills/scss.png', tag: 'SCSS' },
            { id: 'ts', src: 'assets/profile-skills/ts.png', tag: 'Typescript' }
        ]
    },
    {
        title: 'Design Tools',
        skills: [
            { id: 'adobe-ps', src: 'assets/profile-skills/adobe-ps.png', tag: 'Adobe Photoshop' },
            { id: 'adobe-ai', src: 'assets/profile-skills/adobe-ai.png', tag: 'Adobe Illustrator' },
            { id: 'adobe-xd', src: 'assets/profile-skills/adobe-xd.png', tag: 'Adobe XD' },
            { id: 'figma', src: 'assets/profile-skills/figma.png', tag: 'Figma' },
        ]
    },
    {
        title: 'Dev Stack',
        skills: [
            { id: 'web', src: 'assets/profile-skills/web.png', tag: 'Web' },
            { id: 'nodejs', src: 'assets/profile-skills/node-js.png', tag: 'NodeJS' },
            { id: 'aspnetmvc', src: 'assets/profile-skills/aspnetmvc.png', tag: 'Asp Net MVC' },
            { id: 'sql', src: 'assets/profile-skills/sql.png', tag: 'SQL' },
        ]
    },
    {
        title: 'Frameworks',
        skills: [
            { id: 'react', src: 'assets/profile-skills/react.png', tag: 'React JS' },
            { id: 'react-native', src: 'assets/profile-skills/react-native.png', tag: 'React Native' },
            { id: 'ang2', src: 'assets/profile-skills/ang2.png', tag: 'Angular 2/6' },
            { id: 'ang', src: 'assets/profile-skills/ang.png', tag: 'Angular JS 1.x' },
            { id: 'bootstrap', src: 'assets/profile-skills/bootstrap.png', tag: 'Bootstrap' },
            { id: 'gsap', src: 'assets/profile-skills/gsap.png', tag: 'GSAP' },
            { id: 'vue', src: 'assets/profile-skills/vue.png', tag: 'Vue JS' },
            { id: 'mithtril', src: 'assets/profile-skills/mithtril.png', tag: 'Mithtril JS' },
            { id: 'ko', src: 'assets/profile-skills/ko.png', tag: 'Knockout JS' },
            { id: 'electron', src: 'assets/profile-skills/electron.png', tag: 'Electron' },
        ]
    },
    {
        title: 'Build Tools & Editors',
        skills: [
            { id: 'visualstudio', src: 'assets/profile-skills/visualstudio.png', tag: 'Visual Studio' },
            { id: 'git', src: 'assets/profile-skills/git.png', tag: 'Git' },
            { id: 'gulp', src: 'assets/profile-skills/gulp.png', tag: 'Gulp' },
            { id: 'npm', src: 'assets/profile-skills/npm.png', tag: 'NPM' },
            { id: 'bower', src: 'assets/profile-skills/bower.png', tag: 'Bower' },
        ]
    }
];
var MySkillsComponent = /** @class */ (function () {
    function MySkillsComponent() {
        this.skillGroups = SkillGroups;
    }
    MySkillsComponent.prototype.ngOnInit = function () {
        document.documentElement.setAttribute('data-color', '$NONE');
    };
    MySkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-skills',
            template: __webpack_require__(/*! ./my-skills.component.html */ "./src/app/my-skills/my-skills.component.html"),
            styles: [__webpack_require__(/*! ./my-skills.component.scss */ "./src/app/my-skills/my-skills.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MySkillsComponent);
    return MySkillsComponent;
}());



/***/ }),

/***/ "./src/app/other-projects/other-projects.component.html":
/*!**************************************************************!*\
  !*** ./src/app/other-projects/other-projects.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"other-projects-wrapper\"  id=\"mainContent\">\n    <div class=\"grid-separator hidden-on-xs\" data-tag=\"dark-mode-applicable\"></div>\n    <app-projects></app-projects>\n    <div class=\"grid-separator hidden-on-xs reverse\" data-tag=\"dark-mode-applicable\"></div>\n</div>"

/***/ }),

/***/ "./src/app/other-projects/other-projects.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/other-projects/other-projects.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".other-projects-wrapper {\n  padding: 30px 0 15px 0; }\n"

/***/ }),

/***/ "./src/app/other-projects/other-projects.component.ts":
/*!************************************************************!*\
  !*** ./src/app/other-projects/other-projects.component.ts ***!
  \************************************************************/
/*! exports provided: OtherProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherProjectsComponent", function() { return OtherProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherProjectsComponent = /** @class */ (function () {
    function OtherProjectsComponent() {
    }
    OtherProjectsComponent.prototype.ngOnInit = function () {
    };
    OtherProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-other-projects',
            template: __webpack_require__(/*! ./other-projects.component.html */ "./src/app/other-projects/other-projects.component.html"),
            styles: [__webpack_require__(/*! ./other-projects.component.scss */ "./src/app/other-projects/other-projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherProjectsComponent);
    return OtherProjectsComponent;
}());



/***/ }),

/***/ "./src/app/other-projects/projects/defer-load.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/other-projects/projects/defer-load.directive.ts ***!
  \*****************************************************************/
/*! exports provided: DeferLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeferLoadDirective", function() { return DeferLoadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line:directive-selector
var DeferLoadDirective = /** @class */ (function () {
    function DeferLoadDirective(el) {
        this.element = el.nativeElement;
    }
    DeferLoadDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.element.onload = function () {
            if (window.innerWidth > 768) {
                _this.element.classList.add('show');
            }
        };
    };
    DeferLoadDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[deferLoad]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DeferLoadDirective);
    return DeferLoadDirective;
}());



/***/ }),

/***/ "./src/app/other-projects/projects/projects.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/other-projects/projects/projects.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"grid-wrap\">\n    <div class=\"project-drawer-container out\" data-tag=\"project-drawer\" [attr.id]=\"drawerId\">\n        <div class=\"project-drawer\" data-tag=\"project-drawer-bg\">\n            <div class=\"close\" (click)=\"closeProjectDrawer()\">x</div>\n            <label data-tag=\"project-drawer-title\"></label>\n            <p data-tag=\"project-drawer-subtitle\"></p>\n            <div class=\"project-drawer-links\">\n                <a class=\"portfolio-btn\" href=\"\" target=\"_blank\" data-tag=\"app-link\">Visit Website</a>\n                <a class=\"portfolio-btn\" href=\"\" target=\"_blank\" data-tag=\"source-code\">GitHub</a>\n            </div>\n            <p data-tag=\"project-drawer-description\"></p>\n        </div>\n    </div>\n    <ul class=\"grid swipe-down\" id=\"grid\" data-tag=\"dark-mode-applicable\">\n        <li *ngFor=\"let item of projects; let i = index;\" [attr.data-color]=\"item.bgColor\" class=\"grid-item\" [attr.id]=\"item.id\">\n            <a target=\"_blank\" (click)=\"openProjectDrawer(item)\">\n                <label class=\"featured\" *ngIf=\"item.isNew\"><span>Featured</span></label>\n                <div class=\"grid-item-content-container\" data-tag=\"take-bg\">\n                    <img deferLoad [style.width]=\"item.width\" [style.height]=\"item.height\" [attr.data-tag-lazy]=\"item.imgSrc\" />\n                </div>\n                <div class=\"grid-item-text-container\" [attr.data-hoverbg]=\"item.hoverbg\" [attr.size]=\"item.size\">\n                    <div class=\"grid-item-text-container-box\">\n                        <h3>{{item.name}}</h3>\n                        <p>{{item.description}}</p>\n                        <!-- <git-link *ngIf=\"item.githubSrc\" [link]=\"item.githubSrc\"></git-link> -->\n                    </div>\n                </div>\n            </a>\n        </li>\n    </ul>\n    <div class=\"clear-xs-both\"></div>\n</section>"

/***/ }),

/***/ "./src/app/other-projects/projects/projects.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/other-projects/projects/projects.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid {\n  margin: 10px auto;\n  padding: 0;\n  list-style: none;\n  max-width: 1200px; }\n  @media only screen and (min-width: 769px) {\n    .grid {\n      min-height: 300px; } }\n  .grid:nth-child(1) {\n    margin-bottom: 10px; }\n  .grid:nth-child(2) {\n    margin-top: 5px; }\n  @media only screen and (max-width: 768px) {\n    .grid {\n      margin: 0 !important;\n      width: 100% !important; } }\n  .grid-wrap {\n    clear: both;\n    margin: 0 auto;\n    padding: 30px 0;\n    max-width: 1260px; }\n  .grid-wrap .timeline {\n      box-sizing: border-box;\n      display: block;\n      margin: 0 auto;\n      padding: 0 0 0px 0;\n      width: 80%; }\n  @media only screen and (max-width: 768px) {\n        .grid-wrap .timeline {\n          padding: 5px 15px 15px 15px;\n          width: 100%; }\n          .grid-wrap .timeline p.info {\n            margin-top: 0; } }\n  .grid-wrap .timeline p.info {\n        line-height: 1.45em;\n        padding-bottom: 15px; }\n  @media only screen and (max-width: 768px) {\n          .grid-wrap .timeline p.info {\n            text-align: justify; } }\n  .grid-wrap .timeline .timeline-content {\n        width: 100%;\n        display: block;\n        margin-top: 45px; }\n  .grid-wrap .timeline .timeline-content .stop {\n          margin: 0;\n          position: relative;\n          padding: 0 0px 0 60px;\n          display: inline-block; }\n  @media only screen and (max-width: 768px) {\n            .grid-wrap .timeline .timeline-content .stop {\n              padding: 0; } }\n  .grid-wrap .timeline .timeline-content .stop img {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 24px; }\n  .grid-wrap .timeline .timeline-content .stop .stop-content {\n            width: 100%;\n            padding: 0 0 36px 36px;\n            border-left: 1px dashed rgba(39, 174, 96, 0.5);\n            box-sizing: border-box;\n            float: left; }\n  @media only screen and (max-width: 768px) {\n              .grid-wrap .timeline .timeline-content .stop .stop-content {\n                border-left: none;\n                padding-left: 0;\n                padding-bottom: 20px;\n                margin-bottom: 20px; } }\n  .grid-wrap .timeline .timeline-content .stop .stop-content.noPaddingBottom {\n              padding-bottom: 0; }\n  .grid-wrap .timeline .timeline-content .stop .stop-content:before {\n              position: absolute;\n              left: 52px;\n              content: ' ';\n              width: 16px;\n              height: 16px;\n              border-radius: 50%;\n              border: 1px solid #27ae60;\n              padding: 2px;\n              background: #ffffff;\n              box-sizing: border-box; }\n  @media only screen and (max-width: 768px) {\n                .grid-wrap .timeline .timeline-content .stop .stop-content:before {\n                  display: none; } }\n  .grid-wrap .timeline .timeline-content .stop .stop-content:after {\n              content: ' ';\n              position: absolute;\n              left: 55px;\n              top: 3px;\n              width: 10px;\n              height: 10px;\n              border-radius: 50%;\n              background: #27ae60; }\n  @media only screen and (max-width: 768px) {\n                .grid-wrap .timeline .timeline-content .stop .stop-content:after {\n                  display: none; } }\n  .grid-wrap .timeline .timeline-content .stop .stop-content .stop-title {\n              color: #27ae60;\n              font-weight: bold;\n              font-size: large; }\n  @media only screen and (max-width: 768px) {\n                .grid-wrap .timeline .timeline-content .stop .stop-content .stop-title {\n                  border-left: none;\n                  padding-left: 36px;\n                  padding-top: 2px; } }\n  .grid-wrap .timeline .timeline-content .stop .stop-content .stop-details {\n              margin-top: 20px; }\n  .grid-wrap .timeline .timeline-content .stop .stop-content .stop-details ul {\n                padding-left: 16px;\n                margin: 6px 0;\n                list-style: none; }\n  .grid-wrap .timeline .timeline-content .stop .stop-content .stop-details ul li {\n                  line-height: 1.45em;\n                  position: relative;\n                  padding-left: 5px; }\n  .grid-wrap .timeline .timeline-content .stop .stop-content .stop-details ul li:before {\n                    content: ' ';\n                    width: 5px;\n                    height: 5px;\n                    border-radius: 50%;\n                    background: #27ae60;\n                    position: absolute;\n                    top: 9px;\n                    left: -15px; }\n  .grid-wrap .timeline .timeline-content .stop .stop-content label {\n              margin-bottom: 0px;\n              font-size: medium; }\n  @media only screen and (max-width: 768px) {\n                .grid-wrap .timeline .timeline-content .stop .stop-content label strong {\n                  display: block;\n                  margin-bottom: 8px; } }\n  .grid-wrap .timeline .timeline-content .stop .stop-content p {\n              margin-bottom: 0;\n              margin-top: 6px;\n              line-height: 1.45em; }\n  @media only screen and (max-width: 768px) {\n                .grid-wrap .timeline .timeline-content .stop .stop-content p {\n                  text-align: justify; } }\n  @media only screen and (max-width: 768px) {\n      .grid-wrap {\n        margin-bottom: 0 !important;\n        padding: 12px; } }\n  .grid.loaded {\n    background: none; }\n  .grid.loaded .grid-item {\n      display: inline-block; }\n  @media only screen and (min-width: 769px) {\n        .grid.loaded .grid-item {\n          float: left; } }\n  .grid.loaded .grid-item .grid-item-text-container {\n        visibility: hidden; }\n  .grid.dark .grid-item .curtain {\n    background: #222 !important; }\n  .grid.dark .grid-item a {\n    background: url('tile-watermark.png') #222; }\n  .grid.dark .grid-item[data-color]:nth-child(2n + 1) .grid-item-content-container {\n    box-sizing: border-box;\n    background-color: #333;\n    border: 3px solid #333; }\n  .grid.dark .grid-item[data-color]:nth-child(2n + 2) .grid-item-content-container {\n    box-sizing: border-box;\n    background-color: #333;\n    border: 3px solid #333; }\n  @media only screen and (max-width: 768px) {\n      .grid.dark .grid-item[data-color]:nth-child(2n + 2) .grid-item-content-container {\n        background-color: #111;\n        border-color: #111; } }\n  .grid.dark .grid-item[data-color] .grid-item-text-container-box {\n    color: #fff; }\n  .grid.dark .grid-item[data-color] .grid-item-text-container-box p {\n      text-shadow: none; }\n  .grid.dark .grid-item[data-color] .grid-item-text-container-box .git-link {\n      background-color: rgba(255, 255, 255, 0.33); }\n  .grid.dark .grid-item[data-color] .grid-item-text-container-box .git-link:hover {\n        background-color: #fff; }\n  .grid.dark .grid-item[data-color] .grid-item-text-container-box .git-link:hover svg g g {\n          fill: #000; }\n  .grid.dark .grid-item[data-color] .grid-item-text-container-box .git-link svg g g {\n        fill: #fff; }\n  @media only screen and (min-width: 769px) {\n    .grid.dark .grid-item[data-color] .grid-item-text-container:hover {\n      box-shadow: 0px 13px 71px -2px black;\n      background: #000;\n      background: rgba(0, 0, 0, 0.8) 20px 20px no-repeat; } }\n  .grid.dark .grid-item-content-container img {\n    width: 80%;\n    -webkit-filter: grayscale(100%);\n            filter: grayscale(100%); }\n  .grid.dark .grid-item-text-container-box h3 {\n    border-top: 5px solid rgba(255, 255, 255, 0.33); }\n  @media only screen and (max-width: 768px) {\n      .grid.dark .grid-item-text-container-box h3 {\n        border-top: none; } }\n  .grid.dark .grid-item:not(.shown) a {\n    border: 1px dashed #909090; }\n  .grid:not(.loaded) .grid-item {\n    display: none;\n    float: left; }\n  @media only screen and (max-width: 768px) {\n      .grid:not(.loaded) .grid-item {\n        display: block; } }\n  .grid .grid-item {\n    width: 300px;\n    padding: 5px;\n    box-sizing: border-box;\n    box-sizing: border-box;\n    text-align: left;\n    vertical-align: top; }\n  .grid .grid-item * {\n      cursor: pointer; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item {\n        width: 100% !important;\n        padding: 0 !important;\n        margin-bottom: 12px; } }\n  .grid .grid-item[size=\"double\"] {\n      width: 100%; }\n  .grid .grid-item[size=\"double\"] .grid-item-text-container-box p {\n        width: 50%; }\n  @media only screen and (max-width: 768px) {\n          .grid .grid-item[size=\"double\"] .grid-item-text-container-box p:not(.full) {\n            width: calc(100% - 60px) !important; } }\n  @media only screen and (max-width: 768px) {\n          .grid .grid-item[size=\"double\"] .grid-item-text-container-box p.full {\n            width: 100% !important; } }\n  .grid .grid-item a {\n      height: 100%;\n      width: 100%;\n      box-sizing: border-box;\n      opacity: 1;\n      background-size: cover;\n      background: url('tile-watermark.png') #fff;\n      background-repeat: repeat;\n      text-decoration: none; }\n  .grid .grid-item > a {\n      display: block;\n      outline: none;\n      border: none;\n      position: relative;\n      margin: 0; }\n  .grid .grid-item[data-color=\"$PETER_RIVER\"] .grid-item-content-container {\n      background-color: #e1f0fa; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$PETER_RIVER\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$PETER_RIVER\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(52, 152, 219, 0.1); }\n          .grid .grid-item[data-color=\"$PETER_RIVER\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #3498db; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$PETER_RIVER\"] .grid-item-text-container-box {\n        color: #fff; }\n        .grid .grid-item[data-color=\"$PETER_RIVER\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(52, 152, 219, 0.5); }\n        .grid .grid-item[data-color=\"$PETER_RIVER\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$PETER_RIVER\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #fff; }\n            .grid .grid-item[data-color=\"$PETER_RIVER\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #3498db; }\n          .grid .grid-item[data-color=\"$PETER_RIVER\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #fff; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$PETER_RIVER\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #3498db;\n        background: #3498db;\n        background: rgba(52, 152, 219, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$PETER_RIVER\"] label.featured span {\n      color: #fff;\n      background: #3498db; }\n  .grid .grid-item[data-color=\"$EMERALD\"] .grid-item-content-container {\n      background-color: #d1f5e0; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$EMERALD\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$EMERALD\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(46, 204, 113, 0.1); }\n          .grid .grid-item[data-color=\"$EMERALD\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #2ecc71; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$EMERALD\"] .grid-item-text-container-box {\n        color: #000; }\n        .grid .grid-item[data-color=\"$EMERALD\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(46, 204, 113, 0.5); }\n        .grid .grid-item[data-color=\"$EMERALD\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$EMERALD\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #000; }\n            .grid .grid-item[data-color=\"$EMERALD\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #2ecc71; }\n          .grid .grid-item[data-color=\"$EMERALD\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #000; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$EMERALD\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #2ecc71;\n        background: #2ecc71;\n        background: rgba(46, 204, 113, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$EMERALD\"] label.featured span {\n      color: #000;\n      background: #2ecc71; }\n  .grid .grid-item[data-color=\"$NEPHRITIS\"] .grid-item-content-container {\n      background-color: #b3eecc; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$NEPHRITIS\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$NEPHRITIS\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(39, 174, 96, 0.1); }\n          .grid .grid-item[data-color=\"$NEPHRITIS\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #27ae60; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$NEPHRITIS\"] .grid-item-text-container-box {\n        color: #fff; }\n        .grid .grid-item[data-color=\"$NEPHRITIS\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(39, 174, 96, 0.5); }\n        .grid .grid-item[data-color=\"$NEPHRITIS\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$NEPHRITIS\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #fff; }\n            .grid .grid-item[data-color=\"$NEPHRITIS\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #27ae60; }\n          .grid .grid-item[data-color=\"$NEPHRITIS\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #fff; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$NEPHRITIS\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #27ae60;\n        background: #27ae60;\n        background: rgba(39, 174, 96, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$NEPHRITIS\"] label.featured span {\n      color: #fff;\n      background: #27ae60; }\n  .grid .grid-item[data-color=\"$TURQUOISE\"] .grid-item-content-container {\n      background-color: #dbfaf4; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$TURQUOISE\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$TURQUOISE\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(40, 225, 189, 0.1); }\n          .grid .grid-item[data-color=\"$TURQUOISE\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #28e1bd; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$TURQUOISE\"] .grid-item-text-container-box {\n        color: #000; }\n        .grid .grid-item[data-color=\"$TURQUOISE\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(40, 225, 189, 0.5); }\n        .grid .grid-item[data-color=\"$TURQUOISE\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$TURQUOISE\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #000; }\n            .grid .grid-item[data-color=\"$TURQUOISE\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #28e1bd; }\n          .grid .grid-item[data-color=\"$TURQUOISE\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #000; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$TURQUOISE\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #28e1bd;\n        background: #28e1bd;\n        background: rgba(40, 225, 189, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$TURQUOISE\"] label.featured span {\n      color: #000;\n      background: #28e1bd; }\n  .grid .grid-item[data-color=\"$AMETHYST\"] .grid-item-content-container {\n      background-color: #f0e7f4; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$AMETHYST\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$AMETHYST\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(155, 89, 182, 0.1); }\n          .grid .grid-item[data-color=\"$AMETHYST\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #9b59b6; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$AMETHYST\"] .grid-item-text-container-box {\n        color: #fff; }\n        .grid .grid-item[data-color=\"$AMETHYST\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(155, 89, 182, 0.5); }\n        .grid .grid-item[data-color=\"$AMETHYST\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$AMETHYST\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #fff; }\n            .grid .grid-item[data-color=\"$AMETHYST\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #9b59b6; }\n          .grid .grid-item[data-color=\"$AMETHYST\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #fff; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$AMETHYST\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #9b59b6;\n        background: #9b59b6;\n        background: rgba(155, 89, 182, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$AMETHYST\"] label.featured span {\n      color: #fff;\n      background: #9b59b6; }\n  .grid .grid-item[data-color=\"$SUNFLOWER\"] .grid-item-content-container {\n      background-color: #fcf3d0; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$SUNFLOWER\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$SUNFLOWER\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(241, 196, 15, 0.1); }\n          .grid .grid-item[data-color=\"$SUNFLOWER\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #f1c40f; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$SUNFLOWER\"] .grid-item-text-container-box {\n        color: #000; }\n        .grid .grid-item[data-color=\"$SUNFLOWER\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(241, 196, 15, 0.5); }\n        .grid .grid-item[data-color=\"$SUNFLOWER\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$SUNFLOWER\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #000; }\n            .grid .grid-item[data-color=\"$SUNFLOWER\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #f1c40f; }\n          .grid .grid-item[data-color=\"$SUNFLOWER\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #000; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$SUNFLOWER\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #f1c40f;\n        background: #f1c40f;\n        background: rgba(241, 196, 15, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$SUNFLOWER\"] label.featured span {\n      color: #000;\n      background: #f1c40f; }\n  .grid .grid-item[data-color=\"$CARROT\"] .grid-item-content-container {\n      background-color: #fbe9d9; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$CARROT\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$CARROT\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(230, 126, 34, 0.1); }\n          .grid .grid-item[data-color=\"$CARROT\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #e67e22; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$CARROT\"] .grid-item-text-container-box {\n        color: #fff; }\n        .grid .grid-item[data-color=\"$CARROT\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(230, 126, 34, 0.5); }\n        .grid .grid-item[data-color=\"$CARROT\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$CARROT\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #fff; }\n            .grid .grid-item[data-color=\"$CARROT\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #e67e22; }\n          .grid .grid-item[data-color=\"$CARROT\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #fff; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$CARROT\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #e67e22;\n        background: #e67e22;\n        background: rgba(230, 126, 34, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$CARROT\"] label.featured span {\n      color: #fff;\n      background: #e67e22; }\n  .grid .grid-item[data-color=\"$ALIZARIN\"] .grid-item-content-container {\n      background-color: #fdf3f2; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$ALIZARIN\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$ALIZARIN\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(231, 76, 60, 0.1); }\n          .grid .grid-item[data-color=\"$ALIZARIN\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #e74c3c; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$ALIZARIN\"] .grid-item-text-container-box {\n        color: #fff; }\n        .grid .grid-item[data-color=\"$ALIZARIN\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(231, 76, 60, 0.5); }\n        .grid .grid-item[data-color=\"$ALIZARIN\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$ALIZARIN\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #fff; }\n            .grid .grid-item[data-color=\"$ALIZARIN\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #e74c3c; }\n          .grid .grid-item[data-color=\"$ALIZARIN\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #fff; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$ALIZARIN\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #e74c3c;\n        background: #e74c3c;\n        background: rgba(231, 76, 60, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$ALIZARIN\"] label.featured span {\n      color: #fff;\n      background: #e74c3c; }\n  .grid .grid-item[data-color=\"$ORANGE\"] .grid-item-content-container {\n      background-color: #fdedd4; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$ORANGE\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$ORANGE\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(243, 156, 18, 0.1); }\n          .grid .grid-item[data-color=\"$ORANGE\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #f39c12; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$ORANGE\"] .grid-item-text-container-box {\n        color: #fff; }\n        .grid .grid-item[data-color=\"$ORANGE\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(243, 156, 18, 0.5); }\n        .grid .grid-item[data-color=\"$ORANGE\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$ORANGE\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #fff; }\n            .grid .grid-item[data-color=\"$ORANGE\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #f39c12; }\n          .grid .grid-item[data-color=\"$ORANGE\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #fff; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$ORANGE\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #f39c12;\n        background: #f39c12;\n        background: rgba(243, 156, 18, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$ORANGE\"] label.featured span {\n      color: #fff;\n      background: #f39c12; }\n  .grid .grid-item[data-color=\"$PUMPKIN\"] .grid-item-content-container {\n      background-color: #ffc6a0; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$PUMPKIN\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$PUMPKIN\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(211, 84, 0, 0.1); }\n          .grid .grid-item[data-color=\"$PUMPKIN\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #d35400; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$PUMPKIN\"] .grid-item-text-container-box {\n        color: #fff; }\n        .grid .grid-item[data-color=\"$PUMPKIN\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(211, 84, 0, 0.5); }\n        .grid .grid-item[data-color=\"$PUMPKIN\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$PUMPKIN\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #fff; }\n            .grid .grid-item[data-color=\"$PUMPKIN\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #d35400; }\n          .grid .grid-item[data-color=\"$PUMPKIN\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #fff; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$PUMPKIN\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #d35400;\n        background: #d35400;\n        background: rgba(211, 84, 0, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$PUMPKIN\"] label.featured span {\n      color: #fff;\n      background: #d35400; }\n  .grid .grid-item[data-color=\"$POMEGRANATE\"] .grid-item-content-container {\n      background-color: #f2c9c5; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$POMEGRANATE\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$POMEGRANATE\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(192, 57, 43, 0.1); }\n          .grid .grid-item[data-color=\"$POMEGRANATE\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #c0392b; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$POMEGRANATE\"] .grid-item-text-container-box {\n        color: #fff; }\n        .grid .grid-item[data-color=\"$POMEGRANATE\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(192, 57, 43, 0.5); }\n        .grid .grid-item[data-color=\"$POMEGRANATE\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$POMEGRANATE\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #fff; }\n            .grid .grid-item[data-color=\"$POMEGRANATE\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #c0392b; }\n          .grid .grid-item[data-color=\"$POMEGRANATE\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #fff; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$POMEGRANATE\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #c0392b;\n        background: #c0392b;\n        background: rgba(192, 57, 43, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$POMEGRANATE\"] label.featured span {\n      color: #fff;\n      background: #c0392b; }\n  .grid .grid-item[data-color=\"$WISTERIA\"] .grid-item-content-container {\n      background-color: #e4d0ed; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$WISTERIA\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$WISTERIA\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(142, 68, 173, 0.1); }\n          .grid .grid-item[data-color=\"$WISTERIA\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #8e44ad; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$WISTERIA\"] .grid-item-text-container-box {\n        color: #fff; }\n        .grid .grid-item[data-color=\"$WISTERIA\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(142, 68, 173, 0.5); }\n        .grid .grid-item[data-color=\"$WISTERIA\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$WISTERIA\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #fff; }\n            .grid .grid-item[data-color=\"$WISTERIA\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #8e44ad; }\n          .grid .grid-item[data-color=\"$WISTERIA\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #fff; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$WISTERIA\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #8e44ad;\n        background: #8e44ad;\n        background: rgba(142, 68, 173, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$WISTERIA\"] label.featured span {\n      color: #fff;\n      background: #8e44ad; }\n  .grid .grid-item[data-color=\"$BELIZE_HOLE\"] .grid-item-content-container {\n      background-color: #bedcf0; }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item[data-color=\"$BELIZE_HOLE\"] .grid-item-text-container-box {\n        color: #303030; }\n        .grid .grid-item[data-color=\"$BELIZE_HOLE\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(41, 128, 185, 0.1); }\n          .grid .grid-item[data-color=\"$BELIZE_HOLE\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #2980b9; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$BELIZE_HOLE\"] .grid-item-text-container-box {\n        color: #fff; }\n        .grid .grid-item[data-color=\"$BELIZE_HOLE\"] .grid-item-text-container-box p {\n          text-shadow: 3px 3px rgba(41, 128, 185, 0.5); }\n        .grid .grid-item[data-color=\"$BELIZE_HOLE\"] .grid-item-text-container-box .git-link {\n          background-color: rgba(255, 255, 255, 0.33); }\n          .grid .grid-item[data-color=\"$BELIZE_HOLE\"] .grid-item-text-container-box .git-link:hover {\n            background-color: #fff; }\n            .grid .grid-item[data-color=\"$BELIZE_HOLE\"] .grid-item-text-container-box .git-link:hover svg g g {\n              fill: #2980b9; }\n          .grid .grid-item[data-color=\"$BELIZE_HOLE\"] .grid-item-text-container-box .git-link svg g g {\n            fill: #fff; } }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item[data-color=\"$BELIZE_HOLE\"] .grid-item-text-container:hover {\n        box-shadow: 0px 13px 71px -2px #2980b9;\n        background: #2980b9;\n        background: rgba(41, 128, 185, 0.8) 20px 20px no-repeat; } }\n  .grid .grid-item[data-color=\"$BELIZE_HOLE\"] label.featured span {\n      color: #fff;\n      background: #2980b9; }\n  .grid .grid-item label.featured {\n      margin: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      z-index: 11;\n      font-size: x-small;\n      text-align: left; }\n  .grid .grid-item label.featured span {\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        padding: 4px;\n        display: inline-block;\n        margin: 0;\n        text-align: center; }\n  @media only screen and (max-width: 768px) {\n        .grid .grid-item label.featured {\n          text-align: right; } }\n  .grid .grid-item-content-container {\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      overflow: hidden;\n      z-index: 9;\n      opacity: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  @media only screen and (max-width: 768px) {\n        .grid .grid-item-content-container {\n          height: 100%; }\n          .grid .grid-item-content-container img {\n            display: none !important; } }\n  @media only screen and (min-width: 769px) {\n        .grid .grid-item-content-container {\n          height: 300px; } }\n  .grid .grid-item-content-container img {\n        width: 80%;\n        opacity: 0;\n        transition: opacity 0.2s ease-in 0s; }\n  .grid .grid-item-content-container img.show {\n          opacity: 1; }\n  .grid .grid-item-content-container img.highlight-demo-pic {\n          height: 100%;\n          width: auto;\n          max-width: 80%; }\n  @media only screen and (max-width: 768px) {\n            .grid .grid-item-content-container img.highlight-demo-pic {\n              height: auto; } }\n  .grid .grid-item-text-container {\n      width: 100%;\n      display: block;\n      outline: none;\n      border: none;\n      position: relative;\n      z-index: 10;\n      overflow: hidden; }\n  @media only screen and (min-width: 769px) {\n        .grid .grid-item-text-container {\n          height: 300px; } }\n  .grid .grid-item-text-container-box {\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        padding: 30px;\n        opacity: 0;\n        -webkit-transform: translateY(100%);\n                transform: translateY(100%); }\n  @media only screen and (max-width: 768px) {\n          .grid .grid-item-text-container-box {\n            -webkit-transform: translateY(0);\n                    transform: translateY(0);\n            opacity: 1;\n            padding: 20px; } }\n  .grid .grid-item-text-container-box h3 {\n          display: inline-block;\n          bottom: 30px;\n          margin: 0;\n          padding-top: 15px;\n          font-family: 'Open sans', sans-serif;\n          font-weight: bold;\n          text-align: left;\n          text-transform: uppercase;\n          letter-spacing: 1px;\n          box-sizing: border-box;\n          font-size: medium;\n          border-top: 5px solid rgba(255, 255, 255, 0.33);\n          transition: color 0.2s, -webkit-transform 0.2s;\n          transition: transform 0.2s, color 0.2s;\n          transition: transform 0.2s, color 0.2s, -webkit-transform 0.2s;\n          text-decoration: none;\n          max-width: calc(100% - 90px); }\n  @media only screen and (max-width: 768px) {\n            .grid .grid-item-text-container-box h3 {\n              border-top: none;\n              font-size: medium;\n              transition: color 16s, -webkit-transform 16ms;\n              transition: transform 16ms, color 16s;\n              transition: transform 16ms, color 16s, -webkit-transform 16ms;\n              padding-top: 0; } }\n  @media only screen and (min-width: 769px) {\n            .grid .grid-item-text-container-box h3 {\n              position: absolute; } }\n  .grid .grid-item-text-container-box p {\n          padding: 0 30px;\n          left: 0;\n          top: 45px;\n          display: block;\n          font-family: 'Open sans', sans-serif;\n          width: 100%;\n          font-size: large;\n          text-align: left;\n          text-decoration: none;\n          text-transform: lowercase; }\n  @media only screen and (min-width: 769px) {\n            .grid .grid-item-text-container-box p {\n              position: absolute;\n              font-weight: bold; } }\n  @media only screen and (max-width: 768px) {\n            .grid .grid-item-text-container-box p {\n              border-top: none;\n              font-size: medium;\n              margin-bottom: 0;\n              font-weight: 500; } }\n  .grid .grid-item-text-container-box .git-link {\n          position: absolute;\n          bottom: 30px;\n          right: 30px;\n          height: 48px;\n          width: 48px;\n          padding: 0 9px;\n          border-radius: 50%;\n          transition: background-color 0.2s linear 0s; }\n  .grid .grid-item:not(.shown) {\n      overflow: hidden; }\n  .grid .grid-item:not(.shown) a {\n        border: 1px dashed #E0E0E0; }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item.shown .grid-item-content-container {\n        -webkit-animation: show-container 0.5s linear forwards;\n                animation: show-container 0.5s linear forwards; }\n        .grid .grid-item.shown .grid-item-content-container img {\n          display: block; } }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item.shown .grid-item-content-container {\n        -webkit-animation: show-container 0.5s linear forwards;\n                animation: show-container 0.5s linear forwards; }\n        .grid .grid-item.shown .grid-item-content-container img {\n          display: block; } }\n  .grid .grid-item.shown .grid-item-text-container {\n      visibility: visible; }\n  .grid .grid-item.shown .curtain {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0); }\n  @media only screen and (min-width: 769px) {\n      .grid .grid-item.animate .grid-item-content-container {\n        -webkit-animation: add-background 0.25s linear forwards;\n                animation: add-background 0.25s linear forwards; }\n      .grid .grid-item.animate .grid-item-text-container {\n        -webkit-animation: show-container 0.25s step-end forwards;\n                animation: show-container 0.25s step-end forwards; } }\n  @media only screen and (max-width: 768px) {\n      .grid .grid-item.animate .grid-item-content-container {\n        -webkit-animation: add-background 0.1s linear forwards;\n                animation: add-background 0.1s linear forwards; }\n      .grid .grid-item.animate .grid-item-text-container {\n        -webkit-animation: show-container 0.1s step-end forwards;\n                animation: show-container 0.1s step-end forwards; } }\n  .grid .curtain {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 8;\n    width: 100%;\n    height: 100%;\n    background: #f0f0f0 !important; }\n  .grid.swipe-down .curtain {\n    -webkit-transform: translate3d(0, -120%, 0);\n            transform: translate3d(0, -120%, 0); }\n  .grid.swipe-down .grid-item.animate .curtain {\n    -webkit-animation: swipeDown 0.5s cubic-bezier(0.6, 0, 0.4, 1) forwards;\n            animation: swipeDown 0.5s cubic-bezier(0.6, 0, 0.4, 1) forwards; }\n  body.dark .grid-wrap .timeline .timeline-content .stop .stop-content {\n  border-left: 1px dashed rgba(86, 86, 86, 0.5) !important; }\n  body.dark .grid-wrap .timeline .timeline-content .stop .stop-content:before {\n    position: absolute;\n    left: 52px;\n    content: ' ';\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    border: 1px solid #565656 !important;\n    padding: 2px;\n    background: #ffffff;\n    box-sizing: border-box; }\n  @media only screen and (max-width: 768px) {\n      body.dark .grid-wrap .timeline .timeline-content .stop .stop-content:before {\n        display: none; } }\n  body.dark .grid-wrap .timeline .timeline-content .stop .stop-content:after {\n    content: ' ';\n    position: absolute;\n    left: 55px;\n    top: 3px;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: #565656 !important; }\n  @media only screen and (max-width: 768px) {\n      body.dark .grid-wrap .timeline .timeline-content .stop .stop-content:after {\n        display: none; } }\n  body.dark .grid-wrap .timeline .timeline-content .stop .stop-content .stop-title {\n    color: #565656 !important; }\n  body.dark .grid-wrap .timeline .timeline-content .stop .stop-content .stop-details ul li:before {\n    content: ' ';\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background: #565656 !important;\n    position: absolute;\n    top: 8px;\n    left: -15px; }\n  @media only screen and (min-width: 769px) {\n  .grid-item-text-container:hover .grid-item-text-container-box,\n  .grid-item-text-container.active .grid-item-text-container-box {\n    -webkit-animation: move-up-text 0.5s linear forwards;\n            animation: move-up-text 0.5s linear forwards; } }\n  @-webkit-keyframes swipeDown {\n  0% { }\n  50% {\n    -webkit-transform: translate3d(0, -120%, 0);\n            transform: translate3d(0, -120%, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n  @keyframes swipeDown {\n  0% { }\n  50% {\n    -webkit-transform: translate3d(0, -120%, 0);\n            transform: translate3d(0, -120%, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n  @-webkit-keyframes fadeOut {\n  0% { }\n  50% {\n    opacity: 1; }\n  60% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n  @keyframes fadeOut {\n  0% { }\n  50% {\n    opacity: 1; }\n  60% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n  @-webkit-keyframes showMe {\n  from {\n    visibility: hidden; }\n  60% {\n    visibility: visible; }\n  100% {\n    visibility: visible; } }\n  @keyframes showMe {\n  from {\n    visibility: hidden; }\n  60% {\n    visibility: visible; }\n  100% {\n    visibility: visible; } }\n  @-webkit-keyframes show-container {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); }\n  60% {\n    opacity: 1; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n  @keyframes show-container {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); }\n  60% {\n    opacity: 1; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n  @-webkit-keyframes add-background {\n  0% {\n    background: rgba(1, 1, 1, 0); }\n  100% {\n    background: #010101; } }\n  @keyframes add-background {\n  0% {\n    background: rgba(1, 1, 1, 0); }\n  100% {\n    background: #010101; } }\n  @-webkit-keyframes hide-container {\n  0%,\n  90% {\n    display: block; }\n  100% {\n    display: none; } }\n  @keyframes hide-container {\n  0%,\n  90% {\n    display: block; }\n  100% {\n    display: none; } }\n  @-webkit-keyframes move-up-text {\n  0% {\n    -webkit-transform: translate3d(0, 15px, 0);\n            transform: translate3d(0, 15px, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n  @keyframes move-up-text {\n  0% {\n    -webkit-transform: translate3d(0, 15px, 0);\n            transform: translate3d(0, 15px, 0);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n  .clearfix:after {\n  clear: both;\n  content: ' '; }\n"

/***/ }),

/***/ "./src/app/other-projects/projects/projects.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/other-projects/projects/projects.component.ts ***!
  \***************************************************************/
/*! exports provided: hexToRgb, BASE_COLORS, Project, ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_COLORS", function() { return BASE_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.definitions */ "./src/app/other-projects/projects/projects.definitions.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function getStyle(el, styleProp) {
    if (el.currentStyle) {
        return el.currentStyle[styleProp];
    }
    return document.defaultView.getComputedStyle(el, null)[styleProp];
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
var BASE_COLORS = {
    $EMERALD: '#2ecc71',
    $NEPHRITIS: '#27ae60',
    $TURQUOISE: '#1abc9c',
    $PETER_RIVER: '#3498db',
    $AMETHYST: '#9b59b6',
    $SUNFLOWER: '#f1c40f',
    $CARROT: '#e67e22',
    $ALIZARIN: '#e74c3c',
    $ORANGE: '#f39c12',
    $PUMPKIN: '#d35400',
    $POMEGRANATE: '#c0392b',
    $WISTERIA: '#8e44ad',
    $BELIZE_HOLE: '#2980b9'
};
var Project = /** @class */ (function () {
    function Project() {
        this.darker = false;
        this.isNew = false;
        this.video = null;
        this.size = 'single';
        this.width = '100%';
        this.height = 'auto';
        this.bgColor = '#fff';
    }
    return Project;
}());

var projectDrawerOpened = false;
function RemoveVisibleInDrawer() {
    var drawerContainer = document.querySelector('[data-tag="project-drawer"]');
    if (drawerContainer) {
        drawerContainer.classList.remove('visible');
    }
}
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.projects = [];
        this.currentWindowSize = null;
        this.drawerId = 'drawer' + Math.floor(Math.random() * 100);
        var self = this;
        var projects = _projects_definitions__WEBPACK_IMPORTED_MODULE_1__["Projects"].filter(function (p) { return p.hide !== true; });
        underscore__WEBPACK_IMPORTED_MODULE_2__["each"](projects, function (_item, _iter) {
            var _project = new Project();
            _project.id = 'pro_' + _iter;
            _project.name = _item.name;
            _project.description = _item.description;
            _project.githubSrc = _item.git;
            _project.publishSrc = _item.href;
            _project.imgSrc = _item.img;
            _project.content = _item.content;
            _project.darker = _item.darker || false;
            _project.isNew = _item.isNew || false;
            if (_item.size != null) {
                _project.landscapeSize = _item.size;
            }
            if (_item.width != null) {
                _project.width = _item.width;
            }
            if (_item.height != null) {
                _project.height = _item.height;
            }
            if (_item.bgColor != null) {
                _project.bgColor = _item.bgColor;
            }
            self.projects.push(_project);
        });
    }
    ProjectsComponent.prototype.ngAfterViewInit = function () {
        this.initializeMasonry();
    };
    ProjectsComponent.prototype.reload = function () {
        window.location.reload();
    };
    ProjectsComponent.prototype.initializeMasonry = function () {
        var _this = this;
        if (window.innerWidth > 768) {
            if (this.currentWindowSize === null || this.currentWindowSize === 1) {
                var gridElm = document.getElementById('grid');
                var gridMasonry = new GridScrollFx(gridElm, {
                    viewportFactor: 0.20
                }, function () {
                    _this.hightlightGridLayoutAdjuster();
                    // this.showTimeline();
                });
                setTimeout(this.hightlightGridLayoutAdjuster);
                this.currentWindowSize = 1;
            }
            else {
                this.reload();
            }
        }
        else {
            if (this.currentWindowSize === null || this.currentWindowSize === 0) {
                var containers = document.querySelectorAll('.grid');
                for (var i = 0; i < containers.length; i++) {
                    if (containers[i]) {
                        var container = containers[i];
                        if (container.classList.contains('loaded') === false) {
                            container.classList.add('loaded');
                        }
                        var items = container.querySelectorAll('.grid-item');
                        for (var j = 0; j < items.length; j++) {
                            if (items[j]) {
                                var item = items[j];
                                if (item.classList.contains('shown') === false) {
                                    item.classList.add('shown');
                                }
                            }
                        }
                    }
                }
                this.currentWindowSize = 0;
                // this.showTimeline();
            }
            else {
                this.reload();
            }
        }
    };
    ProjectsComponent.prototype.hightlightGridLayoutAdjuster = function () {
        setTimeout(function () {
            var gridElm = document.getElementById('grid');
            var highlightGridElms = document.querySelectorAll('.assign-grid-width');
            if (gridElm && highlightGridElms.length > 0) {
                var props = gridElm.getBoundingClientRect();
                if (props) {
                    for (var i = 0; i < highlightGridElms.length; i++) {
                        highlightGridElms[i].style.width = props.width + 'px';
                        if (highlightGridElms[i].classList.contains('assign-opacity')) {
                            highlightGridElms[i].style.opacity = '1';
                        }
                    }
                }
            }
        });
    };
    ProjectsComponent.prototype.drawerClickListener = function (e) {
        var elem = e.target;
        var found = false;
        while (!found && elem.parentElement) {
            if (elem.classList.contains('project-drawer')) {
                found = true;
            }
            if (found) {
                break;
            }
            else {
                elem = elem.parentElement;
            }
        }
        if (!found) {
            var elemTarget = document.querySelector('[data-tag="project-drawer"]');
            if (elemTarget) {
                elemTarget.classList.remove('anim', 'in');
                elemTarget.classList.add('anim', 'out');
                document.body.classList.remove('no-overflow');
            }
        }
        projectDrawerOpened = false;
        RemoveVisibleInDrawer();
    };
    ProjectsComponent.prototype.drawerKeyUpListener = function (e) {
        if (e.keyCode === 27) {
            var elemTarget = document.querySelector('[data-tag="project-drawer"]');
            if (elemTarget) {
                elemTarget.classList.remove('anim', 'in');
                elemTarget.classList.add('anim', 'out');
                document.body.classList.remove('no-overflow');
                projectDrawerOpened = false;
                RemoveVisibleInDrawer();
            }
        }
    };
    ProjectsComponent.prototype.closeProjectDrawer = function () {
        projectDrawerOpened = false;
        var elem = document.getElementById(this.drawerId);
        if (elem) {
            elem.classList.remove('anim', 'in');
            elem.classList.add('anim', 'out');
        }
        document.removeEventListener('click', this.drawerClickListener);
        document.body.classList.remove('no-overflow');
        RemoveVisibleInDrawer();
    };
    ProjectsComponent.prototype.openProjectDrawer = function (item) {
        var _this = this;
        if (gtag) {
            gtag('event', 'open-project-detail', {
                'event_category': 'Projects',
                'event_label': item.name
            });
        }
        document.removeEventListener('click', this.drawerClickListener);
        document.removeEventListener('keyup', this.drawerKeyUpListener);
        var elem = document.getElementById(this.drawerId);
        var drawerContainer = document.querySelector('[data-tag="project-drawer"]');
        if (elem) {
            projectDrawerOpened = !projectDrawerOpened;
            drawerContainer.classList.remove('visible');
            if (projectDrawerOpened) {
                drawerContainer.classList.add('visible');
                var bgColor = BASE_COLORS[item.bgColor];
                var rgb = hexToRgb(bgColor);
                drawerContainer.style.backgroundColor = "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0.90)";
                var elemTitle = elem.querySelector('[data-tag="project-drawer-title"]');
                if (elemTitle) {
                    elemTitle.textContent = item.name;
                    elemTitle.classList.remove('darker');
                    if (item.darker) {
                        elemTitle.classList.add('darker');
                    }
                }
                var elemSubtitle = elem.querySelector('[data-tag="project-drawer-subtitle"]');
                if (elemSubtitle) {
                    if (item.description) {
                        elemSubtitle.innerHTML = item.description || '';
                    }
                }
                var elemDescription = elem.querySelector('[data-tag="project-drawer-description"]');
                if (elemDescription) {
                    if (item.content) {
                        elemDescription.innerHTML = item.content || '';
                    }
                }
                var elemClose = elem.querySelector('.close');
                if (elemClose) {
                    elemClose.classList.remove('darker');
                    if (item.darker) {
                        elemClose.classList.add('darker');
                    }
                }
                var elemWebButton = elem.querySelector('[data-tag="app-link"]');
                if (elemWebButton) {
                    if (!underscore__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](item.publishSrc)) {
                        elemWebButton.href = item.publishSrc;
                        elemWebButton.style.display = '';
                    }
                    else {
                        elemWebButton.style.display = 'NONE';
                    }
                }
                var elemGithuButton = elem.querySelector('[data-tag="source-code"]');
                if (elemGithuButton) {
                    if (!underscore__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](item.githubSrc)) {
                        elemGithuButton.href = item.githubSrc;
                        elemGithuButton.style.display = '';
                    }
                    else {
                        elemGithuButton.style.display = 'NONE';
                    }
                }
                document.body.classList.add('no-overflow');
                elem.classList.remove('anim', 'out');
                elem.classList.add('anim', 'in');
                setTimeout(function () {
                    document.addEventListener('click', _this.drawerClickListener);
                    document.addEventListener('keyup', _this.drawerKeyUpListener);
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProjectsComponent.prototype, "initializeMasonry", null);
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/other-projects/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/other-projects/projects/projects.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/other-projects/projects/projects.definitions.ts":
/*!*****************************************************************!*\
  !*** ./src/app/other-projects/projects/projects.definitions.ts ***!
  \*****************************************************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
// tslint:disable:max-line-length
var Projects = [
    {
        hide: true,
        name: 'Lean-Case',
        description: 'a fintech app to plan and model day-to-day business operations and revenue subscriptions',
        git: null,
        img: 'assets/project-logos/lean-case.png',
        video: 'https://s3.us-east-2.amazonaws.com/asitparida-portfolio/LeanCaseBeginnerMode.mp4',
        href: 'http://www.lean-case.com/',
        width: 'auto',
        height: '65%',
        isNew: false,
        bgColor: '$TURQUOISE',
        githubSrc: null,
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n            <li>Serving as freelance consultant for the project wherein I am helping redesign the experience with modern UX</li>\n            <li>Contributing to the development process as a design/front-end developer</li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>A fin-tech start-up, Lean-Case, is a business case portal for organizations to connect with&nbsp;customers to create, manage and track the right plans and gain insights. The SAAS tool allows us to model revenues mix and provides flexible cost planning tools. With an array of templates to choose from like Subscription B2B/B2C, eCommerce, Marketplace, Advertising, License, Professional Service, etc., the application helps understand the unit economics of a customer contract and a Sales Team and&nbsp;the viability of the business model.</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n            <li>Angular 2.x/4.x + TypeScript + SASS</li>\n            <li>MongoDB, RabbitMQ, OAuth 2.0, AWS</li>\n        </ul>\n    "
    },
    {
        hide: true,
        name: 'uif-fabric',
        description: 'The unofficial Angular 2/4 components library built for Office UI fabric.',
        git: 'https://github.com/asitparida/uif-fabric',
        img: 'assets/project-logos/uif-fabric.png',
        href: 'https://uif-fabric.azurewebsites.net',
        width: 'auto',
        height: '45%',
        isNew: false,
        bgColor: '$PETER_RIVER',
        githubSrc: null,
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n          <li>Developing the working angular 2/4 components adapted from the fabric design language created by Microsoft</li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>Fabric is the official UX design framework for Microsoft's Office Add-ins. With Fabric, add-ins blend seamlessly with Word, Excel, PowerPoint, and Outlook. </p>\n        <p>The component implemementations offers a variety of UI elements to help you create an experience in Angular front-end framework that delights users and complements Microsoft's design language.</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n          <li>Angular 2.x/4.x + TypeScript + SASS</li>\n          <li>Office UI Fabric JS, Office UI Fabric Core, Azure</li>\n        </ul>\n        "
    },
    {
        name: 'tl;dr',
        description: 'blog for tl;dr snips on javascript concepts and problems',
        git: 'https://github.com/asitparida/tldr-xyz',
        img: 'assets/profile-skills/js.png',
        href: 'http://tl-dr.azurewebsites.net/',
        width: 'auto',
        height: '25%',
        isNew: false,
        bgColor: '$SUNFLOWER',
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n          <li>Designed &amp; developed the working application</li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>QuickReferences is a tl;dr styled blog intended for quick reads on various topics related to the web development process. Topics range from core JavaScript topics like closures, compositions, currying, web fundamentals like prototypal inheritance to implementations for problems like babylonian method to calculate square-roots and look-n-say sequences. The application features reading playlists curated on similar topics. Almost every article includes a working fiddle link. The blog has been built on top of ASP.Net and uses out of box features from Azure like CosmosDB.&nbsp;</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n          <li>Angular 1.x/2.x + TypeScript + SASS</li>\n          <li>React + Redux &nbsp;+ TypeScript + SASS</li>\n          <li>Azure CosmosDB, Azure Web Apps</li>\n          <li>ASP .NET Core 2.x + Visual Studio for MacOS</li>\n        </ul>\n        "
    },
    {
        name: 'Svg Flow Box',
        description: 'Lightweight SVG based event highlighting on flows',
        git: 'https://github.com/asitparida/SVGFlowBox',
        img: 'assets/project-logos/svg-flow.png',
        href: 'https://svg-flow-box.azurewebsites.net',
        width: '100%',
        height: 'auto',
        bgColor: '$PETER_RIVER',
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n          <li>Designed &amp; developed the vanilla JS plugin&nbsp;</li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>Created as part of an freelance gig, the plugin can be used to paint a flow chart like graph representing a timeline of events.&nbsp;</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n          <li>Vanilla JS + SVG + SCSS</li>\n          <li>Written in TypeScript</li>\n        </ul>\n        "
    },
    {
        hide: true,
        name: 'Reddit',
        description: 'Concept illustration for what Reddit may look like',
        git: 'https://github.com/asitparida/redesign-reddit',
        img: 'assets/project-logos/reddit.png',
        href: 'http://redesign-reddit.azurewebsites.net/',
        width: '80%',
        height: 'auto',
        bgColor: '$ALIZARIN',
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n          <li>Developed the working prototype based on a redesign by Dmitriy Kharaberyush's @ <a rel=\"nofollow\" href=\"https://dribbble.com/shots/3257279-Reddit-Trainy/attachments/699302\">https://dribbble.com/shots/3257279-Reddit-Trainy/attachments/699302</a></li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>The project tries to implement a new Reddit look-n-feel while addressing balanced web performance and modern UI guidelines and faster searching &amp; grouping. The focus was on getting the animations leaner but effective and hero virtual content loading technique in JavaScript. In addition, the prototype features easy navigation between subreddits.</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n          <li>Angular 2.x/4.x + TypeScript + SASS</li>\n          <li>Azure Web App + Visual Studio Code</li>\n        </ul>\n        "
    },
    {
        name: 'Now',
        description: 'chrome extension for web notifications like github, mail, calendar etc',
        git: 'https://github.com/asitparida/Now',
        img: 'assets/project-logos/now.png',
        href: 'https://github.com/asitparida/Now',
        width: '90%',
        height: 'auto',
        bgColor: '$PETER_RIVER',
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n          <li>Designed and developed the working prototype</li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>The app is inspired by the Android application Google Now. Its a browser extension for Google Chrome, titled Feeder, which accumulates actionable data from different services like emails, calendar, twitter, etc. and presents us with a personalised tab when we open a new tab in the Chrome browser. Currently under development, the idea is to continuously integrate with Bing's cognitive APIs to leverage customised insights for a user.&nbsp;</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n          <li>React + Redux + Redux Observable + TypeScript + SASS</li>\n          <li>Azure Web App + Visual Studio Code</li>\n        </ul>\n        "
    },
    {
        name: 'NotSoGrey',
        description: 'A desktop app for folks who dream colors',
        git: 'https://github.com/asitparida/NotSoGrey',
        img: 'assets/project-logos/notsogrey_app.png',
        href: 'https://github.com/asitparida/NotSoGrey',
        video: 'https://s3.us-east-2.amazonaws.com/asitparida-portfolio/NotSoGreyDefn.mp4',
        size: 'double',
        width: '90%',
        height: 'auto',
        bgColor: '$NEPHRITIS',
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n          <li>Developed the working prototype based on the original design by <a href=\"http://ahappyphase.com/\">Sudeep Phase</a></li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>The browser extension serves as a small utility for people who live and dream colors. Users can pick colors from a webpage and delve into its composition and play around with it. They can also check contrast ratios for the color concerning different types of color blindness. The color palettes and the images have been generated by crawling the sites such as Adobe Color and Dribbble.</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n          <li>Chrome browser extension</li>\n          <li>Angular 1.x + Vanilla JS + SASS</li>\n          <li>Visual Studio Code</li>\n        </ul>\n        "
    },
    {
        name: 'Multihost Adapter',
        description: 'An adapter for running multiple ui client frameworks together',
        git: 'https://github.com/asitparida/Multihost.Adapter',
        img: 'assets/project-logos/multihost.png',
        href: 'https://github.com/asitparida/Multihost.Adapter',
        size: 'double',
        width: '100%',
        height: 'auto',
        bgColor: '$PETER_RIVER',
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n          <li>Designed and developed the plugin</li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>The plug-n-play module serves as a bootstrapper for popular web frameworks like Angular, React, VueJS &amp; Mithril. Once initialized, the adapter can pull client source-codes from the web and plug them in. It was developed to serve as a platform to any client-side JS components. For the desktop version, I am using an Electron based build and for native, am relying on Cordova.&nbsp;</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n          <li>Supports bootstrapping for Angular 1.X, Angular 2.X, React, VueJS and Mithril</li>\n          <li>Electron &amp; Cordova builds available</li>\n        </ul>\n        "
    },
    {
        name: 'Flintstones',
        description: 'A small animation on flintstones chracters using GSAP',
        git: 'https://github.com/asitparida/GSAP.FlintStory',
        img: 'assets/project-logos/flintstones.png',
        href: 'http://gsap-flintstones-asparida.azurewebsites.net/',
        size: 'double',
        width: 'auto',
        height: '90%',
        darker: true,
        bgColor: '$SUNFLOWER',
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n          <li>Created and animated the illustrations and the storyline</li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>I created the storyline when I was exploring the current trends in web animations. With the advent of minimalistic design guidelines, there has been a shift to SVG animations. Inspired by the works of Sarah Drashner &amp; Lego Mushroom, I started working on a full 10 second story. It took around 8 days to create the artefacts. I used GreenSock's TweenMax library to build the timeline.&nbsp;</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n          <li>Angular 1.X + TweenMax + SCSS</li>\n          <li>Azure Web Apps</li>\n        </ul>\n        "
    },
    {
        name: 'Moosik',
        description: 'An offline music player using Electron',
        git: 'https://github.com/asitparida/Moosik',
        img: 'assets/project-logos/moosik_app.png',
        href: 'https://github.com/asitparida/Moosik/releases',
        size: 'double',
        width: '80%',
        height: 'auto',
        bgColor: '$PETER_RIVER'
    },
    {
        name: 'Light Wizard ',
        description: 'A light weight angular2 wizard',
        git: 'https://github.com/asitparida/LightWizard',
        img: 'assets/project-logos/light-wizard2.png',
        href: 'http://light-wizard.azurewebsites.net/',
        width: '80%',
        height: 'auto',
        bgColor: '$ALIZARIN',
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n          <li>Designed &amp; developed the wizard plugin for Angular 2.X</li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>The plugin &nbsp;is supposed to serve as an lightweight solution to stepper wizards. Its customizable and provides lifecycle hooks for all steps. I have added out-of-box support for different layouts with respect to navigation and header inside the wizard with just a toggle and no content changes.</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n          <li>Angular 2.X/4.X + TypeScript + SCSS</li>\n          <li>Azure Web App + Visual Studio Code</li>\n        </ul>\n        "
    },
    {
        name: 'ng-grid',
        description: 'angular 2 implementation for vx-grid',
        git: 'https://github.com/asitparida/ng-vxgrid',
        img: 'assets/project-logos/grid_app.png',
        href: 'https://vxgrid-ng2.azurewebsites.net/home',
        width: '90%',
        height: 'auto',
        bgColor: '$PETER_RIVER',
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n          <li>Designed &amp; developed the grid plugin for Angular 2.X</li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>The plugin is angular 2.X variant for vx-grid. Its customizable and provides lifecycle hooks. It's a standalone plugin which uses native table tags for painting the grid. The plugin adds a virtual grid support wherein we add only a specific number of data rows onto the DOM and trigger more additions only when we try to scroll. Rich grid features like sorting, grouping, inline search and row selection are present as out-of-box functionalities.</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n          <li>Angular 2.X/4.X + TypeScript + SCSS</li>\n          <li>Azure Web App + Visual Studio Code</li>\n        </ul>\n        "
    },
    {
        name: 'Star Wars',
        description: 'An small game built to destory all death stars',
        git: 'https://github.com/asitparida/StarWars.Game',
        img: 'assets/project-logos/starwars.png',
        href: 'http://star-wars-asparida.azurewebsites.net',
        size: 'double',
        width: '70%',
        height: 'auto',
        darker: true,
        bgColor: '$SUNFLOWER'
    },
    {
        hide: true,
        name: 'Quick References',
        description: 'blog for tl;dr snips on tech stacks',
        git: 'https://github.com/asitparida/tldr-xyz',
        img: 'assets/project-logos/quickref.png',
        href: 'http://tl-dr.azurewebsites.net/',
        width: 'auto',
        height: '50%',
        bgColor: '$PETER_RIVER',
        content: "\n        <p><strong>Contribution</strong></p>\n        <ul>\n          <li>Designed &amp; developed the working application</li>\n        </ul>\n        <p><strong>Description</strong></p>\n        <p>QuickReferences is a tl;dr styled blog intended for quick reads on various topics related to the web development process. Topics range from core JavaScript topics like closures, compositions, currying, web fundamentals like prototypal inheritance to implementations for problems like babylonian method to calculate square-roots and look-n-say sequences. The application features reading playlists curated on similar topics. Almost every article includes a working fiddle link. The blog has been built on top of ASP.Net and uses out of box features from Azure like CosmosDB.&nbsp;</p>\n        <p><strong>Notes</strong></p>\n        <ul>\n          <li>Angular 1.x/2.x + TypeScript + SASS</li>\n          <li>React + Redux &nbsp;+ TypeScript + SASS</li>\n          <li>Azure CosmosDB, Azure Web Apps</li>\n          <li>ASP .NET Core 2.x + Visual Studio for MacOS</li>\n        </ul>\n        "
    },
    {
        name: 'TopGit',
        description: 'Browse top projects on GitHub',
        git: 'https://github.com/asitparida/TopGit',
        img: 'assets/project-logos/topgit_app.png',
        href: 'http://topgit.azurewebsites.net',
        width: '90%',
        height: 'auto',
        bgColor: '$NEPHRITIS'
    },
    {
        name: 'CSS Loaders',
        description: 'Robot like css loader animation',
        git: 'https://github.com/asitparida/CSSRobotLoader',
        img: 'assets/project-logos/cssloader.png',
        href: 'http://css-loader-robot.azurewebsites.net',
        width: 'auto',
        height: '70%',
        bgColor: '$PUMPKIN'
    },
    {
        name: 'Tweening Photos',
        description: 'Animating a classic movie wallpaper using GSAP',
        git: 'https://github.com/asitparida/GSAP.PhotoVector.Anim',
        img: 'assets/project-logos/photoanim.png',
        href: 'http://gsap-pv-anim-asparida.azurewebsites.net',
        width: '90%',
        height: 'auto',
        bgColor: '$ALIZARIN'
    },
    {
        name: 'Segoe MDL Cheatsheet',
        description: 'Web crawled SCSS sheet for MDL Icons',
        git: 'https://github.com/asitparida/SegoeMDLCheatsheet',
        img: 'assets/project-logos/icons.png',
        href: 'https://github.com/asitparida/SegoeMDLCheatsheet',
        width: '150px',
        height: 'auto',
        bgColor: '$CARROT'
    },
    {
        name: 'Rich CC',
        description: 'ng-plugin for showing calendar events',
        git: 'https://github.com/asitparida/RichCC',
        img: 'assets/project-logos/richcc.png',
        href: 'http://richcc.azurewebsites.net',
        width: '90%',
        height: 'auto',
        bgColor: '$NEPHRITIS'
    },
    {
        name: 'Pie Mix',
        description: 'ng-plugin built using SVG',
        git: 'https://github.com/asitparida/PieMix',
        img: 'assets/project-logos/piemix.png',
        href: 'http://piemix.azurewebsites.net',
        width: 'auto',
        height: '70%',
        bgColor: '$AMETHYST'
    },
    {
        name: 'Vx Grid',
        description: 'A DOM virtualized ng-plugin',
        git: 'https://github.com/asitparida/VxGrid',
        img: 'assets/project-logos/vx-grid.jpg',
        href: 'http://vxgrid.azurewebsites.net',
        bgColor: '$ALIZARIN'
    },
    {
        name: 'Tweening Nature',
        description: 'Animating a wallpaper using GSAP',
        git: 'https://github.com/asitparida/GSAP.Background.Anim',
        img: 'assets/project-logos/nature_tween.png',
        href: 'http://gsap-bganim-asparida.azurewebsites.net',
        width: '90%',
        height: 'auto',
        bgColor: '$PETER_RIVER'
    },
    {
        name: 'Utilities',
        description: 'quick utilities based on angularjs 1.x',
        git: 'https://github.com/asitparida?tab=repositories&q=Utility',
        img: 'assets/project-logos/swiss-knife.png',
        href: 'https://github.com/asitparida?tab=repositories&q=Utility',
        width: '60%',
        height: 'auto',
        bgColor: '$ALIZARIN'
    },
    {
        name: 'Lazy Panda',
        description: 'Just too lazy for emotions',
        git: 'https://github.com/asitparida/Lazy.Panda',
        img: 'assets/project-logos/panda.png',
        href: 'http://lazypanda-asparida.azurewebsites.net',
        width: 'auto',
        height: '70%',
        bgColor: '$PETER_RIVER'
    }
];
// tslint:enable:max-line-length


/***/ }),

/***/ "./src/app/structure/anchorage-holder/anchorage-holder.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/structure/anchorage-holder/anchorage-holder.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"anchorage-holder hidden-xs\" [attr.id]=\"anchorageHolderId\">\n  <div class=\"anchorage-vertical\">\n    <div class=\"anchor\" tabindex=\"0\" *ngFor=\"let anchor of anchors\" (keyup.enter)=\"activateAnchor(anchor)\" (keyup.space)=\"activateAnchor(anchor)\" (click)=\"activateAnchor(anchor)\"><div class=\"anchor-circle\" [attr.id]=\"anchor.circleId\"></div><span>{{anchor.text}}</span></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/structure/anchorage-holder/anchorage-holder.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/structure/anchorage-holder/anchorage-holder.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".anchorage-holder {\n  position: fixed;\n  right: 21px;\n  top: 50%;\n  z-index: 997;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .anchorage-holder.show {\n    opacity: 1;\n    -webkit-animation: pop-up 0.3s linear 0s forwards;\n            animation: pop-up 0.3s linear 0s forwards; }\n  .anchorage-holder.hide {\n    opacity: 0;\n    -webkit-animation: pop-out 0.15s linear 0s forwards;\n            animation: pop-out 0.15s linear 0s forwards; }\n  .anchorage-holder .anchorage-vertical {\n    display: flex;\n    flex-flow: column wrap; }\n  .anchorage-holder .anchorage-vertical .anchor {\n      height: 36px;\n      width: 36px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n      cursor: pointer;\n      outline: none; }\n  .anchorage-holder .anchorage-vertical .anchor .anchor-circle {\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        border: 1px solid #333333; }\n  .anchorage-holder .anchorage-vertical .anchor .anchor-circle.active {\n          background: #333333; }\n  .anchorage-holder .anchorage-vertical .anchor span {\n        white-space: nowrap;\n        opacity: 0;\n        position: absolute;\n        left: 5px;\n        -webkit-transform: translateX(-100%);\n                transform: translateX(-100%);\n        text-transform: uppercase;\n        letter-spacing: 1px;\n        font-size: small;\n        background: #333;\n        color: #fff;\n        padding: 0 10px;\n        border-radius: 15px;\n        line-height: 24px; }\n  .anchorage-holder .anchorage-vertical .anchor:hover .anchor-circle:not(:active) {\n        background: rgba(51, 51, 51, 0.5); }\n  .anchorage-holder .anchorage-vertical .anchor:hover span {\n        -webkit-animation: fade-slide-in 0.2s ease-out 0s forwards;\n                animation: fade-slide-in 0.2s ease-out 0s forwards;\n        opacity: 1; }\n  @-webkit-keyframes fade-slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-95%);\n            transform: translateX(-95%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); } }\n  @keyframes fade-slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-95%);\n            transform: translateX(-95%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); } }\n  @-webkit-keyframes pop-up {\n  0% {\n    opacity: 0;\n    display: block; }\n  100% {\n    opacity: 1; } }\n  @keyframes pop-up {\n  0% {\n    opacity: 0;\n    display: block; }\n  100% {\n    opacity: 1; } }\n  @-webkit-keyframes pop-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    display: none; } }\n  @keyframes pop-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/structure/anchorage-holder/anchorage-holder.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/structure/anchorage-holder/anchorage-holder.component.ts ***!
  \**************************************************************************/
/*! exports provided: AnchorageHolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorageHolderComponent", function() { return AnchorageHolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnchorageHolderComponent = /** @class */ (function () {
    function AnchorageHolderComponent() {
        this.anchors = [];
        this.anchorageHolderId = 'anchorageHolder' + Math.floor(Math.random() * 10e8);
        this.ondebouncedScroll = lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"](this.onNewScroll, 10);
        this.shown = false;
    }
    AnchorageHolderComponent.prototype.ngOnInit = function () {
    };
    AnchorageHolderComponent.prototype.onscroll = function () {
        this.ondebouncedScroll();
    };
    AnchorageHolderComponent.prototype.onNewScroll = function () {
        var anchors = document.querySelectorAll('[data-type="anchor-elem"]');
        if (anchors && anchors.length > 0) {
            for (var i = 0; i < anchors.length; i++) {
                var elem = anchors[i];
                var props = elem.getBoundingClientRect();
                var circleId = 'circle' + elem.id;
                var circle = document.getElementById(circleId);
                if (props.top > 0 && props.top < window.innerHeight) {
                    if (circle) {
                        this.removeActiveFromAnchors(circleId);
                        circle.classList.add('active');
                        break;
                    }
                }
            }
        }
    };
    AnchorageHolderComponent.prototype.removeActiveFromAnchors = function (targetAnchorId) {
        var anchors = document.querySelectorAll('[data-type="anchor-elem"]');
        if (anchors && anchors.length > 0) {
            anchors.forEach(function (elem) {
                var circleId = 'circle' + elem.id;
                if (circleId !== targetAnchorId) {
                    var circle = document.getElementById(circleId);
                    if (circle) {
                        circle.classList.remove('active');
                    }
                }
            });
        }
    };
    AnchorageHolderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.anchors = [];
            var anchors = document.querySelectorAll('[data-type="anchor-elem"]');
            if (anchors && anchors.length > 0) {
                anchors.forEach(function (elem) {
                    var id = 'anchor_elm' + Math.floor(Math.random() * 10e8);
                    elem.id = id;
                    _this.anchors.push({ id: id, text: elem.textContent, circleId: 'circle' + id });
                });
            }
            setTimeout(function () {
                _this.onNewScroll();
            });
        });
    };
    AnchorageHolderComponent.prototype.activateAnchor = function (anchor) {
        var elem = document.getElementById(anchor.id);
        if (elem) {
            var props = elem.getBoundingClientRect();
            if (typeof window.scrollTo !== 'undefined') {
                window.scrollBy({
                    top: props.top - 100,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AnchorageHolderComponent.prototype, "onscroll", null);
    AnchorageHolderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'anchorage-holder',
            template: __webpack_require__(/*! ./anchorage-holder.component.html */ "./src/app/structure/anchorage-holder/anchorage-holder.component.html"),
            styles: [__webpack_require__(/*! ./anchorage-holder.component.scss */ "./src/app/structure/anchorage-holder/anchorage-holder.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnchorageHolderComponent);
    return AnchorageHolderComponent;
}());



/***/ }),

/***/ "./src/app/structure/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/structure/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-holder\">\n    <div class=\"footer-wrapper\">\n        <div class=\"footer-inner-wrapper\">\n            <ul>\n                <li>© Asit Parida 2019</li>\n            </ul>\n            <ul>\n                <li>\n                    <a [routerLink]=\"['about-me']\">Contact</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/structure/footer/footer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/structure/footer/footer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-holder {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%; }\n  .footer-holder .footer-wrapper {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 1200px;\n    padding: 0 60px; }\n  .footer-holder .footer-wrapper .footer-inner-wrapper {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      border-top: 3px solid rgba(0, 0, 0, 0.03);\n      height: 90px; }\n  .footer-holder .footer-wrapper ul {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      white-space: nowrap;\n      list-style: none;\n      padding: 0; }\n  .footer-holder .footer-wrapper ul:first-child li {\n        margin-right: 45px; }\n  .footer-holder .footer-wrapper ul:last-child li {\n        margin-left: 45px; }\n  .footer-holder .footer-wrapper ul li {\n        color: #A0A0A0;\n        text-transform: uppercase;\n        font-size: small;\n        letter-spacing: 1px; }\n  .footer-holder .footer-wrapper ul li a {\n          text-decoration: none;\n          color: #A0A0A0; }\n  .footer-holder .footer-wrapper ul li a:hover, .footer-holder .footer-wrapper ul li a:focus {\n            color: #909090; }\n  @media only screen and (min-width: 1366px) {\n  .footer-holder .footer-wrapper {\n    max-width: 1200px; } }\n  @media (min-width: 992px) and (max-width: 1361px) {\n  .footer-holder .footer-wrapper {\n    max-width: 900px; } }\n  @media only screen and (max-width: 991px) {\n  .footer-holder .footer-wrapper {\n    max-width: 600px; }\n    .footer-holder .footer-wrapper ul:last-child li:not(:first-child) {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/structure/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/structure/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/structure/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/structure/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/structure/navigation/navigation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/structure/navigation/navigation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\" [attr.id]=\"navigationBarId\">\n    <ul [ngClass]=\"directionFill\">\n        <li>\n            <a class=\"first-level\" [routerLink]=\"['home']\" routerLinkActive=\"active-link\"><span>Home</span><img src=\"assets/navigation/outline_home_black_36dp.png\" /></a>\n        </li>\n        <li class=\"featured-link\" (click)=\"toggleFeaturedSubMenu()\">\n            <a class=\"first-level\" [routerLink]=\"['featured']\" routerLinkActive=\"active-link\"><span>Featured Works</span><img\n                    src=\"assets/navigation/outline_widgets_black_36dp.png\" /></a>\n            <ng-container *ngIf=\"!featuredSubMenuHidden\">\n                <ul class=\"submenu\" [attr.id]=\"featuredSubMenuId\" [style.left]=\"leftAdjust\" (clickOutside)=\"onClickOutside()\" >\n                    <li>\n                        <a [routerLink]=\"['featured/veritas']\" routerLinkActive=\"active-link\">Veritas</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['featured/idiff']\" routerLinkActive=\"active-link\">iDiff</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['featured/transit-display']\" routerLinkActive=\"active-link\">Transit Hub\n                            Display</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['featured/bun-bun']\" routerLinkActive=\"active-link\">Bun Bun Bakery</a>\n                    </li>\n                </ul>\n            </ng-container>\n        </li>\n        <li class=\"hidden-xs\">\n            <a class=\"first-level\" [routerLink]=\"['other-projects']\" routerLinkActive=\"active-link\"><span>Other Projects</span><img\n                    src=\"assets/navigation/outline_widgets_black_36dp.png\" /></a>\n        </li>\n        <li class=\"hidden-xs\">\n            <a class=\"first-level\" [routerLink]=\"['tools']\" routerLinkActive=\"active-link\"><span>Skills</span><img src=\"assets/navigation/outline_games_black_36dp.png\" /></a>\n        </li>\n        <li>\n            <a class=\"first-level\" [routerLink]=\"['about-me']\" routerLinkActive=\"active-link\"><span>About Me</span><img\n                    src=\"assets/navigation/outline_mood_black_36dp.png\" /></a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/structure/navigation/navigation.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/structure/navigation/navigation.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: fixed;\n  z-index: 998;\n  top: 0;\n  left: 0;\n  background: #fff;\n  transition: -webkit-transform 0.3s ease-out 0s;\n  transition: transform 0.3s ease-out 0s;\n  transition: transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s; }\n  @media only screen and (max-width: 768px) {\n    .navigation {\n      height: 80px; } }\n  .navigation.out-of-view {\n    -webkit-transform: translateY(-1000%);\n            transform: translateY(-1000%); }\n  .navigation ul {\n    width: 100%;\n    white-space: nowrap;\n    list-style: none;\n    display: flex;\n    flex-flow: row;\n    justify-content: center; }\n  .navigation ul:hover {\n      opacity: 1; }\n  @media only screen and (max-width: 768px) {\n      .navigation ul {\n        padding: 0;\n        margin: 0; } }\n  .navigation ul li {\n      background: #fff;\n      margin: 0;\n      position: relative;\n      height: 60px; }\n  @media only screen and (max-width: 768px) {\n        .navigation ul li {\n          flex: 1; }\n          .navigation ul li.hidden-xs {\n            display: none !important; } }\n  @media only screen and (max-width: 768px) {\n        .navigation ul li {\n          width: 25%;\n          height: 80px; } }\n  .navigation ul li.featured-link {\n        cursor: pointer;\n        position: relative; }\n  .navigation ul li.featured-link > a {\n          pointer-events: none;\n          background: #fff;\n          position: relative; }\n  .navigation ul li.featured-link ul.submenu {\n          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\n          position: absolute;\n          white-space: normal;\n          padding: 0;\n          top: 59px;\n          flex-flow: column;\n          width: 250px;\n          z-index: 1;\n          -webkit-animation: slide-fade-in 0.2s ease-out forwards 0s;\n                  animation: slide-fade-in 0.2s ease-out forwards 0s; }\n  @media only screen and (max-width: 768px) {\n            .navigation ul li.featured-link ul.submenu {\n              width: 100vw !important;\n              top: 79px; } }\n  .navigation ul li.featured-link ul.submenu li {\n            width: 100%; }\n  @media only screen and (max-width: 768px) {\n              .navigation ul li.featured-link ul.submenu li {\n                height: 60px; } }\n  .navigation ul li.featured-link ul.submenu li a {\n              width: 100%;\n              display: block;\n              background: #fff;\n              white-space: nowrap;\n              padding: 0 15px;\n              border-left: 3px solid rgba(0, 0, 0, 0);\n              border-bottom: 1px solid rgba(0, 0, 0, 0.03); }\n  .navigation ul li.featured-link ul.submenu li a.active-link {\n                border-left-color: rgba(0, 0, 0, 0.5); }\n  @media only screen and (max-width: 768px) {\n                .navigation ul li.featured-link ul.submenu li a {\n                  height: 60px;\n                  line-height: 60px; } }\n  .navigation ul li.featured-link ul.submenu li a:hover {\n                background: rgba(0, 0, 0, 0.05);\n                color: rgba(0, 0, 0, 0.9); }\n  .navigation ul li a {\n        padding: 0;\n        text-decoration: none;\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: medium;\n        color: #909090;\n        display: inline-block;\n        vertical-align: middle;\n        text-align: center;\n        outline: none;\n        z-index: 1;\n        background: #fff; }\n  @media only screen and (max-width: 768px) {\n          .navigation ul li a {\n            width: 100%;\n            line-height: 80px;\n            height: 80px; } }\n  @media only screen and (min-width: 769px) {\n          .navigation ul li a {\n            min-width: 120px;\n            line-height: 60px;\n            height: 60px; } }\n  .navigation ul li a img {\n          width: 24px;\n          vertical-align: middle;\n          opacity: 0.50;\n          margin-top: -26px; }\n  @media only screen and (min-width: 769px) {\n            .navigation ul li a img {\n              display: none; } }\n  .navigation ul li a.active-link {\n          z-index: 2; }\n  .navigation ul li a.active-link img {\n            opacity: 1; }\n  .navigation ul li a.active-link span {\n            color: #000; }\n  .navigation ul li a span {\n          width: 100%;\n          display: inline-block;\n          padding: 0 30px; }\n  @media only screen and (max-width: 768px) {\n            .navigation ul li a span {\n              position: absolute;\n              bottom: 14px;\n              font-size: small;\n              left: 0;\n              line-height: 24px;\n              text-align: center;\n              padding: 0; } }\n  .navigation ul li a:hover {\n          background: rgba(0, 0, 0, 0.03); }\n  .navigation ul li a.first-level:after {\n          content: '';\n          width: 100%;\n          bottom: 0;\n          height: 3px;\n          background: rgba(0, 0, 0, 0.03);\n          border-radius: 3px;\n          display: block;\n          z-index: 1;\n          position: absolute; }\n  .navigation ul.left a.active-link.first-level:after {\n      content: '';\n      width: 100%;\n      left: 0;\n      bottom: 0;\n      height: 3px;\n      background: rgba(0, 0, 0, 0.5);\n      border-radius: 3px;\n      display: block;\n      -webkit-animation: fill-in-from-left 0.5s ease-out forwards 0s;\n              animation: fill-in-from-left 0.5s ease-out forwards 0s;\n      z-index: 5;\n      position: absolute; }\n  .navigation ul.right a.active-link.first-level:after {\n      content: '';\n      right: 0;\n      width: 100%;\n      bottom: 0;\n      height: 3px;\n      background: rgba(0, 0, 0, 0.5);\n      border-radius: 3px;\n      display: block;\n      -webkit-animation: fill-in-from-right 0.5s ease-out forwards 0s;\n              animation: fill-in-from-right 0.5s ease-out forwards 0s;\n      z-index: 5;\n      position: absolute; }\n  @-webkit-keyframes fill-in-from-left {\n  0% {\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  @keyframes fill-in-from-left {\n  0% {\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  @-webkit-keyframes fill-in-from-right {\n  0% {\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  @keyframes fill-in-from-right {\n  0% {\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  @-webkit-keyframes slide-fade-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n  @keyframes slide-fade-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n"

/***/ }),

/***/ "./src/app/structure/navigation/navigation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/structure/navigation/navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.navigationBarId = 'navbar' + Math.floor(Math.random() * 10e8);
        this.classAdded = false;
        this.lastScrollPosition = null;
        this.lastUid = -1;
        this.directionFill = 'left';
        this.featuredSubMenuHidden = true;
        this.featuredSubMenuId = 'menu-' + Math.floor(Math.random() * 10e8);
        this.leftAdjust = '0px';
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RoutesRecognized"]; }))
            .subscribe(function (data) {
            // tslint:disable-next-line:max-line-length
            if (data && data.state && data.state.root && data.state.root.firstChild && data && data.state && data.state.root && data.state.root.firstChild.data) {
                var uid = data.state.root.firstChild.data['uid'] || -1;
                if (uid < _this.lastUid) {
                    _this.directionFill = 'right';
                }
                else {
                    _this.directionFill = 'left';
                }
                _this.lastUid = uid;
            }
        });
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var elem = document.getElementById(this.navigationBarId);
        document.addEventListener('scroll', function (event) {
            if (window.scrollY < _this.lastScrollPosition) {
                if (_this.classAdded) {
                    elem.classList.remove('out-of-view');
                    _this.classAdded = false;
                    setTimeout(function () {
                        _this.featuredSubMenuHidden = true;
                    });
                }
            }
            else if (window.scrollY > _this.lastScrollPosition) {
                if (!_this.classAdded && window.scrollY > 150) {
                    elem.classList.add('out-of-view');
                    _this.classAdded = true;
                }
            }
            _this.lastScrollPosition = window.scrollY;
        });
        var fetauredElm = document.querySelector('.featured-link');
        if (fetauredElm) {
            var props = fetauredElm.getBoundingClientRect();
            if (window.innerWidth > 768) {
                if (props) {
                    var adjust = (250 - props.width) / 2;
                    this.leftAdjust = "-" + adjust + "px";
                }
            }
            else {
                this.leftAdjust = "-" + props.left + "px";
            }
        }
    };
    NavigationComponent.prototype.toggleFeaturedSubMenu = function () {
        var _this = this;
        setTimeout(function () {
            _this.featuredSubMenuHidden = !_this.featuredSubMenuHidden;
        });
    };
    NavigationComponent.prototype.onClickOutside = function () {
        if (!this.featuredSubMenuHidden) {
            this.featuredSubMenuHidden = true;
        }
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/structure/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/structure/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/structure/picture-carousel/picture-carousel.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/structure/picture-carousel/picture-carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!embeddedCarousel\">\n    <div class=\"picture-carousel-preview\" [ngClass]=\"listWrapperClass\" [style.height]=\"previewHeight\"\n        [style.width]=\"previewWidth\" (click)=\"showCarousel()\">\n        <div class=\"picture-wrapper\" [style.marginRight]=\"marginRightAdjust\"\n            *ngFor=\"let item of pictureItems; let i = index;\"\n            [style.right]=\"bottomStagger ? (i*staggerStep) + 'px' : (i*staggerStep) + 'px' \"\n            [style.top]=\"bottomStagger ? (i*staggerStep) + 'px' : '0px'\">\n            <div class=\"picture-card\" [style.backgroundImage]=\"item.img\"></div>\n        </div>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"embeddedCarousel\">\n    <div class=\"picture-carousel-wrapper embeddedCarousel\" [ngClass]=\"inplaceCarouselWrapperClass\" tabindex=\"0\"\n        (keyup.escape)=\"carouselShown = false;\" (keyup.arrowleft)=\"move(-1)\" (keyup.arrowright)=\"move(1)\"\n        (keyup.arrowup)=\"move(-1)\" (keyup.arrowdown)=\"move(1)\">\n        <div class=\"picture-image-wrapper\">\n            <div class=\"picture-control left\" (keyup.enter)=\"move(-1)\" (click)=\"move(-1)\" tabindex=\"0\">\n                <i></i>\n            </div>\n            <div class=\"picture-control right\" (keyup.enter)=\"move(1)\" (click)=\"move(1)\" tabindex=\"0\">\n                <i></i>\n            </div>\n            <div class=\"img-container\">\n                <img data-lazy-load=\"true\" [ngClass]=\"currentClass\" [src]=\"activeItem.img\" *ngIf=\"!useVideo\" />\n                <ng-container *ngIf=\"useVideo\">\n                    <div class=\"marvel-device iphone-x\" [ngClass]=\"currentClass\">\n                        <div class=\"notch\">\n                            <div class=\"camera\"></div>\n                            <div class=\"speaker\"></div>\n                        </div>\n                        <div class=\"top-bar\"></div>\n                        <div class=\"sleep\"></div>\n                        <div class=\"bottom-bar\"></div>\n                        <div class=\"volume\"></div>\n                        <div class=\"overflow\">\n                            <div class=\"shadow shadow--tr\"></div>\n                            <div class=\"shadow shadow--tl\"></div>\n                            <div class=\"shadow shadow--br\"></div>\n                            <div class=\"shadow shadow--bl\"></div>\n                        </div>\n                        <div class=\"inner-shadow\"></div>\n                        <div class=\"screen\">\n                            <div class=\"player-holder\">\n                                <video autoplay loop crossorigin playsinline [src]=\"activeItem.video\"></video>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n            </div>\n            <p class=\"text-container\" *ngIf=\"activeItem.text && !activeItem.code\">\n                <label class=\"title\" *ngIf=\"activeItem.title\">{{activeItem.title}}</label>\n                <span>{{activeItem.text}}</span>\n            </p>\n            <p class=\"code-container\" *ngIf=\"activeItem.code\">\n                <label class=\"title\" *ngIf=\"activeItem.title\">{{activeItem.title}}</label>\n                <span class=\"title-subtext\">{{activeItem.text}}</span>\n                <prism-snippet class=\"code-host\" [code]=\"activeItem.code\" *ngIf=\"activeItem.code\"></prism-snippet>\n            </p>\n            <div class=\"picture-footer embeddedCarouselFooter\">\n                <div class=\"marker\" *ngFor=\"let item of pictureItems; let i = index;\" (click)=\"activateIndex(i)\"\n                    [class.active]=\"i === activeIndex\"></div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n<div class=\"picture-carousel-wrapper\" [ngClass]=\"carouselWrapperClass\" *ngIf=\"carouselShown\" tabindex=\"0\"\n    (keyup.escape)=\"carouselShown = false;\" (keyup.arrowleft)=\"move(-1)\" (keyup.arrowright)=\"move(1)\"\n    (keyup.arrowup)=\"move(-1)\" (keyup.arrowdown)=\"move(1)\">\n    <div class=\"picture-image-wrapper\">\n        <div class=\"close\" tabindex=\"0\" (keyup.enter)=\"carouselShown = false;\" (click)=\"carouselShown = false;\">Close\n        </div>\n        <div class=\"picture-control left\" (keyup.enter)=\"move(-1)\" (click)=\"move(-1)\" tabindex=\"0\">\n            <i></i>\n        </div>\n        <div class=\"picture-control right\" (keyup.enter)=\"move(1)\" (click)=\"move(1)\" tabindex=\"0\">\n            <i></i>\n        </div>\n        <div class=\"img-container\" [class.justifyContentFlexEnd]=\"activeItem.text\">\n            <img data-lazy-load=\"true\" [ngClass]=\"currentClass\" [src]=\"activeItem.img\" />\n        </div>\n        <p class=\"text-container\" *ngIf=\"activeItem.text\" [class.justifyContentFlexStart]=\"activeItem.text\">\n            <span>{{activeItem.text}}</span>\n        </p>\n        <div class=\"picture-footer\">\n            <div class=\"marker\" *ngFor=\"let item of pictureItems; let i = index;\" [class.active]=\"i === activeIndex\" (click)=\"activateIndex(i)\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/structure/picture-carousel/picture-carousel.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/structure/picture-carousel/picture-carousel.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picture-carousel-preview {\n  position: relative;\n  height: 200px;\n  width: 400px;\n  top: 60px; }\n  .picture-carousel-preview,\n  .picture-carousel-preview * {\n    cursor: zoom-in; }\n  @media only screen and (max-width: 768px) {\n    .picture-carousel-preview {\n      display: none; } }\n  .picture-carousel-preview .picture-wrapper {\n    border-radius: 5px;\n    overflow: hidden;\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n  .picture-carousel-preview .picture-wrapper .picture-card {\n      width: 100%;\n      height: 100%;\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: top right; }\n  .picture-carousel-wrapper {\n  outline: none; }\n  .picture-carousel-wrapper:not(.embeddedCarousel) {\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 999;\n    background: white; }\n  .picture-carousel-wrapper.embeddedCarousel {\n    height: 70vh;\n    width: 100%; }\n  @media only screen and (max-width: 768px) {\n      .picture-carousel-wrapper.embeddedCarousel {\n        height: 50vh;\n        margin-bottom: 30px; } }\n  .picture-carousel-wrapper .picture-control {\n    position: absolute;\n    height: 80px;\n    margin-top: -40px;\n    line-height: 80px;\n    text-align: center;\n    top: 50%;\n    width: 96px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer; }\n  @media only screen and (max-width: 768px) {\n      .picture-carousel-wrapper .picture-control {\n        height: 36px;\n        line-height: 36px;\n        width: 36px; } }\n  .picture-carousel-wrapper .picture-control:hover {\n      background: rgba(0, 0, 0, 0.05); }\n  .picture-carousel-wrapper .picture-control:hover i {\n        border-color: #565656; }\n  .picture-carousel-wrapper .picture-control i {\n      border-bottom: 2px solid #A0A0A0;\n      border-left: 2px solid #A0A0A0;\n      width: 1em;\n      height: 1em;\n      display: block; }\n  .picture-carousel-wrapper .picture-control.left {\n      left: 0; }\n  @media only screen and (max-width: 768px) {\n        .picture-carousel-wrapper .picture-control.left {\n          left: -18px; } }\n  .picture-carousel-wrapper .picture-control.left i {\n        -webkit-transform: rotate(45deg) skew(0deg);\n                transform: rotate(45deg) skew(0deg);\n        margin-right: -0.5em; }\n  .picture-carousel-wrapper .picture-control.right {\n      right: 0; }\n  @media only screen and (max-width: 768px) {\n        .picture-carousel-wrapper .picture-control.right {\n          right: -18px; } }\n  .picture-carousel-wrapper .picture-control.right i {\n        -webkit-transform: rotate(-135deg) skew(0deg);\n                transform: rotate(-135deg) skew(0deg);\n        margin-left: -0.5em; }\n  .picture-carousel-wrapper .close {\n    position: absolute;\n    left: 50%;\n    top: 0;\n    margin-left: -50px;\n    width: 100px;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: small;\n    letter-spacing: 1px;\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.05);\n    color: #565656;\n    line-height: 48px;\n    text-align: center; }\n  .picture-carousel-wrapper .close:hover {\n      background: black;\n      color: #fff; }\n  .picture-carousel-wrapper .picture-footer {\n    position: absolute;\n    bottom: 0;\n    height: 60px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .picture-carousel-wrapper .picture-footer.embeddedCarouselFooter {\n      height: 18px;\n      align-items: flex-end; }\n  @media only screen and (max-width: 768px) {\n        .picture-carousel-wrapper .picture-footer.embeddedCarouselFooter {\n          align-items: center; } }\n  .picture-carousel-wrapper .picture-footer.embeddedCarouselFooter .marker {\n        position: relative;\n        top: 6px; }\n  @media only screen and (max-width: 768px) {\n          .picture-carousel-wrapper .picture-footer.embeddedCarouselFooter .marker {\n            top: 6px; } }\n  .picture-carousel-wrapper .picture-footer .marker {\n      border-radius: 50%;\n      width: 12px;\n      height: 12px;\n      border: 1px solid rgba(0, 0, 0, 0.33);\n      margin: 0 15px;\n      cursor: pointer; }\n  @media only screen and (max-width: 768px) {\n        .picture-carousel-wrapper .picture-footer .marker {\n          margin: 0 5px; } }\n  .picture-carousel-wrapper .picture-footer .marker.active {\n        cursor: default;\n        background: rgba(0, 0, 0, 0.8); }\n  .picture-carousel-wrapper .picture-footer .marker:not(.active):hover {\n        background: rgba(0, 0, 0, 0.5); }\n  .picture-carousel-wrapper .picture-image-wrapper {\n    position: relative;\n    padding: 30px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box; }\n  @media only screen and (max-width: 768px) {\n      .picture-carousel-wrapper .picture-image-wrapper {\n        padding: 0;\n        flex-direction: column; } }\n  .picture-carousel-wrapper .picture-image-wrapper .img-container {\n      flex: 1;\n      height: 100%;\n      order: 1;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-right: 30px; }\n  @media only screen and (max-width: 768px) {\n        .picture-carousel-wrapper .picture-image-wrapper .img-container {\n          justify-content: center;\n          padding: 0 36px; } }\n  .picture-carousel-wrapper .picture-image-wrapper .img-container.justifyContentFlexEnd {\n        justify-content: flex-end;\n        max-width: 50%; }\n  .picture-carousel-wrapper .picture-image-wrapper .img-container.justifyContentFlexStart {\n        justify-content: flex-start; }\n  .picture-carousel-wrapper .picture-image-wrapper .code-container {\n      flex: initial;\n      height: 50%;\n      order: 2;\n      width: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: flex-start;\n      flex-direction: column; }\n  @media only screen and (max-width: 768px) {\n        .picture-carousel-wrapper .picture-image-wrapper .code-container {\n          flex: 1;\n          width: 100%; } }\n  .picture-carousel-wrapper .picture-image-wrapper .code-container label.title {\n        display: block;\n        max-width: 400px;\n        padding: 15px 30px;\n        font-weight: 400;\n        font-size: large; }\n  @media only screen and (max-width: 768px) {\n          .picture-carousel-wrapper .picture-image-wrapper .code-container label.title {\n            font-size: 1em;\n            line-height: normal;\n            text-align: center;\n            padding: 15px 0;\n            font-weight: 400;\n            width: 100%; } }\n  .picture-carousel-wrapper .picture-image-wrapper .code-container span.title-subtext {\n        display: block;\n        padding: 0 30px 10px 30px;\n        font-weight: 100;\n        font-size: medium;\n        line-height: 1.5em; }\n  @media only screen and (max-width: 768px) {\n          .picture-carousel-wrapper .picture-image-wrapper .code-container span.title-subtext {\n            font-size: 1em;\n            line-height: normal;\n            text-align: center;\n            padding: 15px 0;\n            font-weight: 400;\n            width: 100%; } }\n  .picture-carousel-wrapper .picture-image-wrapper .text-container {\n      flex: initial;\n      height: 50%;\n      order: 2;\n      width: 50%;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-direction: column; }\n  .picture-carousel-wrapper .picture-image-wrapper .text-container.justifyContentFlexEnd {\n        justify-content: flex-end; }\n  .picture-carousel-wrapper .picture-image-wrapper .text-container.justifyContentFlexStart {\n        justify-content: center;\n        align-items: flex-start; }\n  @media only screen and (max-width: 768px) {\n        .picture-carousel-wrapper .picture-image-wrapper .text-container {\n          flex: 1;\n          width: 100%; } }\n  .picture-carousel-wrapper .picture-image-wrapper .text-container label.title {\n        display: block;\n        max-width: 400px;\n        padding: 15px 30px;\n        font-weight: 400;\n        font-size: 1.75em; }\n  @media only screen and (max-width: 768px) {\n          .picture-carousel-wrapper .picture-image-wrapper .text-container label.title {\n            font-size: 1em;\n            line-height: normal;\n            text-align: center;\n            padding: 15px 0;\n            font-weight: 400;\n            width: 100%; } }\n  .picture-carousel-wrapper .picture-image-wrapper .text-container span {\n        display: block;\n        max-width: 400px;\n        padding: 30px;\n        font-weight: 100;\n        font-size: 1.5em;\n        line-height: 1.5em; }\n  @media only screen and (max-width: 768px) {\n          .picture-carousel-wrapper .picture-image-wrapper .text-container span {\n            font-size: 1em;\n            line-height: normal;\n            text-align: center;\n            padding: 15px 0;\n            font-weight: 400;\n            width: 100%; } }\n  .picture-carousel-wrapper .picture-image-wrapper img,\n    .picture-carousel-wrapper .picture-image-wrapper .marvel-device {\n      max-width: 90%;\n      max-height: 90%; }\n  .picture-carousel-wrapper .picture-image-wrapper img.hide-right,\n      .picture-carousel-wrapper .picture-image-wrapper .marvel-device.hide-right {\n        -webkit-animation: fade-out-right 0.3s linear forwards 0s;\n                animation: fade-out-right 0.3s linear forwards 0s; }\n  .picture-carousel-wrapper .picture-image-wrapper img.show-right,\n      .picture-carousel-wrapper .picture-image-wrapper .marvel-device.show-right {\n        -webkit-animation: fade-in-right 0.3s linear forwards 0s;\n                animation: fade-in-right 0.3s linear forwards 0s; }\n  .picture-carousel-wrapper .picture-image-wrapper img.hide-left,\n      .picture-carousel-wrapper .picture-image-wrapper .marvel-device.hide-left {\n        -webkit-animation: fade-out-left 0.3s linear forwards 0s;\n                animation: fade-out-left 0.3s linear forwards 0s; }\n  .picture-carousel-wrapper .picture-image-wrapper img.show-left,\n      .picture-carousel-wrapper .picture-image-wrapper .marvel-device.show-left {\n        -webkit-animation: fade-in-left 0.3s linear forwards 0s;\n                animation: fade-in-left 0.3s linear forwards 0s; }\n  @-webkit-keyframes fade-out-right {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px); } }\n  @keyframes fade-out-right {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px); } }\n  @-webkit-keyframes fade-in-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  @keyframes fade-in-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  @-webkit-keyframes fade-out-left {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); } }\n  @keyframes fade-out-left {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); } }\n  @-webkit-keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  @keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-20px);\n            transform: translateX(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  .zoomIcon {\n  cursor: zoom-in; }\n"

/***/ }),

/***/ "./src/app/structure/picture-carousel/picture-carousel.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/structure/picture-carousel/picture-carousel.component.ts ***!
  \**************************************************************************/
/*! exports provided: PictureCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureCarouselComponent", function() { return PictureCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PictureCarouselComponent = /** @class */ (function () {
    function PictureCarouselComponent(sanitizer, elRef) {
        this.sanitizer = sanitizer;
        this.elRef = elRef;
        this.items = [];
        this.pictureItems = [];
        this.marginRightAdjust = '-90px';
        this.previewHeight = '300px';
        this.previewWidth = '450px';
        this.activeIndex = 0;
        this.currentClass = '';
        this.carouselShown = false;
        this.listWrapperClass = '';
        this.carouselWrapperClass = '';
        this.inplaceCarouselWrapperClass = '';
        this.bottomStagger = false;
        this.embeddedCarousel = false;
        this.staggerStep = 15;
        this.useVideo = false;
        this.useDeviceSkin = false;
    }
    PictureCarouselComponent.prototype.ngOnInit = function () {
        this.pictureItems = [].concat(this.items).reverse()
            .map(function (x) { return Object.assign({}, x, {
            img: "url(" + x.img + ")"
        }); });
        this.activeItem = this.items[this.activeIndex];
    };
    PictureCarouselComponent.prototype.ngAfterViewInit = function () {
        if (window.innerWidth <= 768) {
            this.embeddedCarousel = true;
        }
        if (this.embeddedCarousel) {
            var elem = this.elRef.nativeElement;
            if (elem) {
                elem.style.width = '100%';
            }
        }
    };
    PictureCarouselComponent.prototype.showCarousel = function () {
        var _this = this;
        this.carouselShown = true;
        setTimeout(function () {
            var elem = _this.elRef.nativeElement;
            if (elem) {
                var targetElm = elem.querySelector('.picture-carousel-wrapper');
                if (targetElm) {
                    targetElm.focus();
                }
            }
        });
    };
    PictureCarouselComponent.prototype.move = function (dir) {
        var _this = this;
        var direction = dir === -1 ? 'left' : 'right';
        this.currentClass = "hide-" + direction;
        this.activeIndex = this.activeIndex + dir;
        this.activeIndex = this.activeIndex < 0 ? this.items.length - 1 : this.activeIndex;
        this.activeIndex = this.activeIndex > this.items.length - 1 ? 0 : this.activeIndex;
        setTimeout(function () {
            _this.activeItem = _this.items[_this.activeIndex];
            _this.currentClass = "show-" + direction;
            setTimeout(function () {
                _this.currentClass = '';
            }, 300);
        }, 300);
    };
    PictureCarouselComponent.prototype.activateIndex = function (i) {
        var _this = this;
        if (this.activateIndex !== i) {
            var direction_1 = i < this.activeIndex ? 'left' : 'right';
            this.currentClass = "hide-" + direction_1;
            this.activeIndex = i;
            this.activeIndex = this.activeIndex < 0 ? this.items.length - 1 : this.activeIndex;
            this.activeIndex = this.activeIndex > this.items.length - 1 ? 0 : this.activeIndex;
            setTimeout(function () {
                _this.activeItem = _this.items[_this.activeIndex];
                _this.currentClass = "show-" + direction_1;
                setTimeout(function () {
                    _this.currentClass = '';
                }, 300);
            }, 300);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PictureCarouselComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PictureCarouselComponent.prototype, "listWrapperClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PictureCarouselComponent.prototype, "carouselWrapperClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PictureCarouselComponent.prototype, "inplaceCarouselWrapperClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PictureCarouselComponent.prototype, "bottomStagger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PictureCarouselComponent.prototype, "embeddedCarousel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PictureCarouselComponent.prototype, "staggerStep", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PictureCarouselComponent.prototype, "useVideo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PictureCarouselComponent.prototype, "useDeviceSkin", void 0);
    PictureCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-picture-carousel',
            template: __webpack_require__(/*! ./picture-carousel.component.html */ "./src/app/structure/picture-carousel/picture-carousel.component.html"),
            styles: [__webpack_require__(/*! ./picture-carousel.component.scss */ "./src/app/structure/picture-carousel/picture-carousel.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PictureCarouselComponent);
    return PictureCarouselComponent;
}());



/***/ }),

/***/ "./src/app/structure/pitch-video/pitch-video.component.html":
/*!******************************************************************!*\
  !*** ./src/app/structure/pitch-video/pitch-video.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pitch-video-container\" tabindex=\"0\" (keyup.escape)=\"closeVideo()\" #playerHolder [hidden]=\"isVideoPip\">\n    <div class=\"overlay\" (click)=\"closeVideo()\"></div>\n    <div class=\"close\" tabindex=\"0\" (keyup.enter)=\"closeVideo()\" (click)=\"closeVideo()\">Close\n    </div>\n    <!-- <video controls crossorigin playsinline [attr.id]=\"playerId\" allowfullscreen>\n        <source src=\"https://s3.us-east-2.amazonaws.com/asitparida-portfolio/AsitParidaPitch.mp4\" type=\"video/mp4\">\n    </video> -->\n    <div class=\"plyr__video-embed\" [attr.id]=\"playerId\">\n        <iframe\n            src=\"https://www.youtube.com/embed/RkxHVy92xFQ\"\n            allowfullscreen allowtransparency allow=\"autoplay\"></iframe>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/structure/pitch-video/pitch-video.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/structure/pitch-video/pitch-video.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pitch-video-container {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .pitch-video-container .close {\n    position: absolute;\n    left: 50%;\n    top: 0;\n    margin-left: -50px;\n    width: 100px;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: small;\n    letter-spacing: 1px;\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.05);\n    color: #565656;\n    line-height: 48px;\n    text-align: center;\n    z-index: 2; }\n  .pitch-video-container .close:hover {\n      background: black;\n      color: #fff; }\n  .pitch-video-container video {\n    max-width: 100%;\n    max-height: 100%; }\n  .pitch-video-container /deep/ .plyr {\n    border-radius: 4px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n    position: relative; }\n  .pitch-video-container .overlay {\n    width: 100%;\n    height: 100%;\n    background: rgba(255, 255, 255, 0.9);\n    position: absolute;\n    z-index: 1; }\n  .pitch-video-container[hidden] {\n    display: none !important; }\n  @-webkit-keyframes fade-in-video {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @keyframes fade-in-video {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/structure/pitch-video/pitch-video.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/structure/pitch-video/pitch-video.component.ts ***!
  \****************************************************************/
/*! exports provided: PitchVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchVideoComponent", function() { return PitchVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PitchVideoComponent = /** @class */ (function () {
    function PitchVideoComponent(elRef) {
        this.elRef = elRef;
        this.playerId = "player_" + Math.floor(Math.random() * 10e8);
        this.isVideoPlayed = false;
        this.isVideoPlayedPiped = false;
        this.isVideoPip = false;
        this.showVideo = false;
        this.showVideoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PitchVideoComponent.prototype.ngOnInit = function () {
    };
    PitchVideoComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.playerHolder.nativeElement.focus();
        setTimeout(function () {
            _this.adjustVideoSize();
            setTimeout(function () {
                _this.initializeVideo();
            }, 100);
        }, 1);
    };
    PitchVideoComponent.prototype.adjustVideoSize = function () {
        var videoElm = document.getElementById(this.playerId);
        if (window.innerHeight < window.innerWidth) {
            var width = window.innerWidth - 120;
            var height = (width * (9 / 16));
            if (height > (window.innerHeight - 120)) {
                height = window.innerHeight - 120;
                width = (height * (16 / 9));
            }
            videoElm.style.width = width + 'px';
            videoElm.style.height = height + 'px';
        }
    };
    PitchVideoComponent.prototype.resetVideoSize = function () {
        var videoElm = document.getElementById(this.playerId);
        videoElm.style.width = null;
        videoElm.style.height = null;
    };
    PitchVideoComponent.prototype.initializeVideo = function () {
        var _this = this;
        this.videoPlayer = new Plyr("#" + this.playerId, {
            loop: { active: true },
            controls: [
                'play-large',
                'restart',
                'rewind',
                'play',
                'fast-forward',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'settings',
                'fullscreen',
                'pip',
            ]
        });
        this.videoPlayer.pip = false;
        this.videoPlayer.toggleControls(false);
        this.videoPlayer.on('ready', function (event) {
            _this.videoPlayer.play();
            _this.videoPlayer.toggleControls(true);
        });
        this.videoPlayer.on('canplay', function (event) {
            _this.videoPlayer.play();
            _this.videoPlayer.toggleControls(true);
        });
        this.videoPlayer.on('playing', function (event) {
            _this.isVideoPlayed = true;
        });
        this.videoPlayer.on('pause', function (event) {
            _this.isVideoPlayed = false;
        });
        this.videoPlayer.on('enterpictureinpicture', function (event) {
            setTimeout(function () {
                _this.isVideoPip = true;
            });
        });
        this.videoPlayer.on('leavepictureinpicture', function (event) {
            setTimeout(function () {
                _this.isVideoPip = false;
            });
        });
        this.videoPlayer.on('enterfullscreen', function (event) {
            _this.resetVideoSize();
        });
        this.videoPlayer.on('exitfullscreen', function (event) {
            _this.adjustVideoSize();
        });
    };
    PitchVideoComponent.prototype.closeVideo = function () {
        var _this = this;
        this.videoPlayer.stop();
        setTimeout(function () {
            _this.videoPlayer.destroy();
            setTimeout(function () {
                _this.showVideo = false;
                _this.showVideoChange.emit(_this.showVideo);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('playerHolder'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PitchVideoComponent.prototype, "playerHolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PitchVideoComponent.prototype, "showVideo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PitchVideoComponent.prototype, "showVideoChange", void 0);
    PitchVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pitch-video',
            template: __webpack_require__(/*! ./pitch-video.component.html */ "./src/app/structure/pitch-video/pitch-video.component.html"),
            styles: [__webpack_require__(/*! ./pitch-video.component.scss */ "./src/app/structure/pitch-video/pitch-video.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PitchVideoComponent);
    return PitchVideoComponent;
}());



/***/ }),

/***/ "./src/app/structure/prism-snippet/prism-snippet.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/structure/prism-snippet/prism-snippet.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre class=\"language-\"><code class=\"language-javascript\" [innerHTML]=\"html\"></code></pre>"

/***/ }),

/***/ "./src/app/structure/prism-snippet/prism-snippet.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/structure/prism-snippet/prism-snippet.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * atom-dark theme for `prism.js`\n * Based on Atom's `atom-dark` theme: https://github.com/atom/atom-dark-syntax\n * @author Joe Gibson (@gibsjose)\n */\n"

/***/ }),

/***/ "./src/app/structure/prism-snippet/prism-snippet.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/structure/prism-snippet/prism-snippet.component.ts ***!
  \********************************************************************/
/*! exports provided: PrismSnippetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrismSnippetComponent", function() { return PrismSnippetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrismSnippetComponent = /** @class */ (function () {
    function PrismSnippetComponent() {
        this.html = null;
    }
    PrismSnippetComponent.prototype.ngOnInit = function () {
    };
    PrismSnippetComponent.prototype.ngOnChanges = function (changes) {
        if (this.code) {
            this.html = prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.highlight(this.code.content, this.code.parseType, this.code.parseTypeText);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrismSnippetComponent.prototype, "code", void 0);
    PrismSnippetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'prism-snippet',
            template: __webpack_require__(/*! ./prism-snippet.component.html */ "./src/app/structure/prism-snippet/prism-snippet.component.html"),
            styles: [__webpack_require__(/*! ./prism-snippet.component.scss */ "./src/app/structure/prism-snippet/prism-snippet.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], PrismSnippetComponent);
    return PrismSnippetComponent;
}());



/***/ }),

/***/ "./src/app/structure/project-previewer/project-previewer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/structure/project-previewer/project-previewer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-drawer-container visible anim in\" data-tag=\"project-drawer\">\n    <div class=\"project-drawer flex\" data-tag=\"project-drawer-bg\" *ngIf=\"project\">\n        <div class=\"project-drawer-content\" [class.justifyContentFlexStart]=\"project.video\">\n            <div class=\"close\" (click)=\"closeDrawer()\">x</div><label\n                data-tag=\"project-drawer-title\">{{project.name}}</label>\n            <p data-tag=\"project-drawer-subtitle\">{{project.description}}</p>\n            <div class=\"project-drawer-links\">\n                <a class=\"portfolio-btn\" *ngIf=\"project.publishSrc\" data-tag=\"app-link\" [attr.href]=\"project.publishSrc\"\n                    target=\"_blank\">Visit Website</a>\n                <a class=\"portfolio-btn\" *ngIf=\"project.githubSrc\" data-tag=\"source-code\"\n                    [attr.href]=\"project.githubSrc\" target=\"_blank\">GitHub</a></div>\n            <div class=\"project-video-container\" *ngIf=\"project.video && !isMobile\">\n                <div class=\"marvel-device macbook\">\n                    <div class=\"top-bar\"></div>\n                    <div class=\"camera\"></div>\n                    <div class=\"screen\">\n                        <div class=\"player-holder\">\n                            <video controls crossorigin playsinline autoplay loop [src]=\"project.video\"></video>\n                        </div>\n                    </div>\n                    <div class=\"bottom-bar\"></div>\n                </div>\n            </div>\n            <div data-tag=\"project-drawer-description\" [innerHTML]=\"project.content\">\n            </div>\n        </div>\n    </div>\n    <div class=\"project-drawer-overlay\" (click)=\"closeDrawer()\" [style.backgroundColor]=\"backgroundColor\"></div>\n</div>"

/***/ }),

/***/ "./src/app/structure/project-previewer/project-previewer.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/structure/project-previewer/project-previewer.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-video-container {\n  display: block;\n  justify-items: center;\n  margin: 0 auto;\n  padding: 60px 60px;\n  line-height: 1.50em;\n  max-width: 1200px; }\n"

/***/ }),

/***/ "./src/app/structure/project-previewer/project-previewer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/structure/project-previewer/project-previewer.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectPreviewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPreviewerComponent", function() { return ProjectPreviewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _other_projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other-projects/projects/projects.component */ "./src/app/other-projects/projects/projects.component.ts");
/* harmony import */ var _other_projects_projects_projects_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other-projects/projects/projects.definitions */ "./src/app/other-projects/projects/projects.definitions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectPreviewerComponent = /** @class */ (function () {
    function ProjectPreviewerComponent() {
        this.projectId = 'uif-fabric';
        this.drawerOpened = false;
        this.drawerOpenedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backgroundColor = "rgba(0,0,0,0)";
        this.project = null;
        this.isMobile = false;
        this.originalItem = null;
        if (MobileDetect) {
            var md = new MobileDetect(window.navigator.userAgent);
            // tslint:disable-next-line:max-line-length
            var value = md.mobile() || md.phone() || md.tablet() || md.is('iPhone') || md.is('Android') || md.is('android');
            if (value) {
                this.isMobile = true;
            }
        }
    }
    ProjectPreviewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.body.classList.add('no-overflow');
        var item = _other_projects_projects_projects_definitions__WEBPACK_IMPORTED_MODULE_2__["Projects"].find(function (x) { return x.name === _this.projectId; });
        if (item) {
            this.originalItem = item;
            this.project = this.getProject(item);
            var bgColor = _other_projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["BASE_COLORS"][item.bgColor];
            var rgb = Object(_other_projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"])(bgColor);
            this.backgroundColor = "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0.90)";
        }
    };
    ProjectPreviewerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setVideo();
        }, 300);
    };
    ProjectPreviewerComponent.prototype.closeDrawer = function () {
        this.project.video = null;
        this.drawerOpened = false;
        this.drawerOpenedChange.emit(this.drawerOpened);
        document.body.classList.remove('no-overflow');
    };
    ProjectPreviewerComponent.prototype.setVideo = function () {
        this.project.video = this.originalItem.video || null;
    };
    ProjectPreviewerComponent.prototype.getProject = function (_item) {
        var _project = new _other_projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["Project"]();
        _project.name = _item.name;
        _project.description = _item.description;
        _project.githubSrc = _item.git;
        _project.publishSrc = _item.href;
        _project.imgSrc = _item.img;
        _project.content = _item.content;
        _project.darker = _item.darker || false;
        _project.isNew = _item.isNew || false;
        _project.video = null;
        if (_item.size != null) {
            _project.landscapeSize = _item.size;
        }
        if (_item.width != null) {
            _project.width = _item.width;
        }
        if (_item.height != null) {
            _project.height = _item.height;
        }
        if (_item.bgColor != null) {
            _project.bgColor = _item.bgColor;
        }
        return _project;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectPreviewerComponent.prototype, "projectId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectPreviewerComponent.prototype, "drawerOpened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectPreviewerComponent.prototype, "drawerOpenedChange", void 0);
    ProjectPreviewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-previewer',
            template: __webpack_require__(/*! ./project-previewer.component.html */ "./src/app/structure/project-previewer/project-previewer.component.html"),
            styles: [__webpack_require__(/*! ./project-previewer.component.scss */ "./src/app/structure/project-previewer/project-previewer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectPreviewerComponent);
    return ProjectPreviewerComponent;
}());



/***/ }),

/***/ "./src/app/structure/prototype-viewer/prototype-viewer.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/structure/prototype-viewer/prototype-viewer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"holder\">\n  <div class=\"loading\" *ngIf=\"!hideIframeLoader\">\n    <div class=\"sk-circle\">\n      <div class=\"sk-circle1 sk-child\"></div>\n      <div class=\"sk-circle2 sk-child\"></div>\n      <div class=\"sk-circle3 sk-child\"></div>\n      <div class=\"sk-circle4 sk-child\"></div>\n      <div class=\"sk-circle5 sk-child\"></div>\n      <div class=\"sk-circle6 sk-child\"></div>\n      <div class=\"sk-circle7 sk-child\"></div>\n      <div class=\"sk-circle8 sk-child\"></div>\n      <div class=\"sk-circle9 sk-child\"></div>\n      <div class=\"sk-circle10 sk-child\"></div>\n      <div class=\"sk-circle11 sk-child\"></div>\n      <div class=\"sk-circle12 sk-child\"></div>\n    </div>\n  </div>\n  <iframe #iframeItem [attr.src]=\"iframeSrc\"></iframe>\n</div>"

/***/ }),

/***/ "./src/app/structure/prototype-viewer/prototype-viewer.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/structure/prototype-viewer/prototype-viewer.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".holder {\n  width: 100%;\n  height: 100%; }\n  .holder iframe {\n    width: 100%;\n    height: 100%;\n    border: none; }\n  .holder .loading {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .sk-circle {\n  margin: 100px auto;\n  width: 80px;\n  height: 80px;\n  position: relative; }\n  .sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n  .sk-circle .sk-child:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #fff;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both; }\n  .sk-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n  .sk-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n  .sk-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n  .sk-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n  .sk-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n  .sk-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n  .sk-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n  .sk-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n  .sk-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n  .sk-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n  .sk-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n  .sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n  .sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n  .sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n  .sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n  .sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n  .sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n  .sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n  .sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n  .sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n  .sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n  .sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n  @-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n  @keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/structure/prototype-viewer/prototype-viewer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/structure/prototype-viewer/prototype-viewer.component.ts ***!
  \**************************************************************************/
/*! exports provided: PrototypeViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrototypeViewerComponent", function() { return PrototypeViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrototypeViewerComponent = /** @class */ (function () {
    function PrototypeViewerComponent(santizer) {
        this.santizer = santizer;
        this.showProtoType = false;
        this.hideIframeLoader = false;
    }
    PrototypeViewerComponent.prototype.ngOnInit = function () {
        this.hideIframeLoader = false;
        this.iframeSrc = this.santizer.bypassSecurityTrustResourceUrl(this.src);
    };
    PrototypeViewerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.hideIframeLoader = false;
        if (this.iframeElm) {
            var iframe = this.iframeElm.nativeElement;
            if (iframe) {
                iframe.onload = function () {
                    setTimeout(function () {
                        _this.hideIframeLoader = true;
                    });
                };
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrototypeViewerComponent.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrototypeViewerComponent.prototype, "showProtoType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframeItem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PrototypeViewerComponent.prototype, "iframeElm", void 0);
    PrototypeViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prototype-viewer',
            template: __webpack_require__(/*! ./prototype-viewer.component.html */ "./src/app/structure/prototype-viewer/prototype-viewer.component.html"),
            styles: [__webpack_require__(/*! ./prototype-viewer.component.scss */ "./src/app/structure/prototype-viewer/prototype-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], PrototypeViewerComponent);
    return PrototypeViewerComponent;
}());



/***/ }),

/***/ "./src/app/structure/top-scroller/top-scroller.component.html":
/*!********************************************************************!*\
  !*** ./src/app/structure/top-scroller/top-scroller.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"arrow-holder hide\" (click)=\"scrollTop()\">\n  <img src=\"assets/arrow_up.png\" />\n</div>"

/***/ }),

/***/ "./src/app/structure/top-scroller/top-scroller.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/structure/top-scroller/top-scroller.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".arrow-holder {\n  width: 48px;\n  height: 48px;\n  background: #dbfaf4;\n  box-shadow: 0px 2px 4px rgba(40, 225, 189, 0.75);\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  text-align: center;\n  border-radius: 50%;\n  margin-top: 24px;\n  cursor: pointer;\n  z-index: 998; }\n  .arrow-holder.show {\n    opacity: 1;\n    -webkit-animation: pop-up 0.3s linear 0s forwards;\n            animation: pop-up 0.3s linear 0s forwards; }\n  .arrow-holder.hide {\n    opacity: 0;\n    -webkit-animation: pop-out 0.15s linear 0s forwards;\n            animation: pop-out 0.15s linear 0s forwards; }\n  .arrow-holder img {\n    height: 30px;\n    position: relative;\n    top: 9px;\n    opacity: 0.75; }\n  @-webkit-keyframes pop-up {\n  0% {\n    opacity: 0;\n    display: block; }\n  100% {\n    opacity: 1; } }\n  @keyframes pop-up {\n  0% {\n    opacity: 0;\n    display: block; }\n  100% {\n    opacity: 1; } }\n  @-webkit-keyframes pop-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    display: none; } }\n  @keyframes pop-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/structure/top-scroller/top-scroller.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/structure/top-scroller/top-scroller.component.ts ***!
  \******************************************************************/
/*! exports provided: TopScrollerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopScrollerComponent", function() { return TopScrollerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopScrollerComponent = /** @class */ (function () {
    function TopScrollerComponent(elRef) {
        this.elRef = elRef;
    }
    TopScrollerComponent.prototype.ngAfterViewInit = function () {
        var element = this.elRef.nativeElement;
        if (element) {
            var scroller_1 = element.querySelector('.arrow-holder');
            if (scroller_1 && typeof window.scrollY !== 'undefined') {
                document.addEventListener('scroll', function (e) {
                    if (window.scrollY > (window.innerHeight * 0.50)) {
                        scroller_1.classList.remove('hide');
                        if (!scroller_1.classList.contains('show')) {
                            scroller_1.classList.add('show');
                        }
                    }
                    else {
                        scroller_1.classList.remove('show');
                        if (!scroller_1.classList.contains('hide')) {
                            scroller_1.classList.add('hide');
                        }
                    }
                });
            }
        }
    };
    TopScrollerComponent.prototype.scrollTop = function () {
        if (typeof window.scrollTo !== 'undefined') {
            window.scrollBy({
                top: -window.scrollY,
                left: 0,
                behavior: 'smooth'
            });
        }
    };
    TopScrollerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-scroller',
            template: __webpack_require__(/*! ./top-scroller.component.html */ "./src/app/structure/top-scroller/top-scroller.component.html"),
            styles: [__webpack_require__(/*! ./top-scroller.component.scss */ "./src/app/structure/top-scroller/top-scroller.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TopScrollerComponent);
    return TopScrollerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4__);





// kick off the polyfill!
smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_4___default.a.polyfill();
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/asitparida/Codes/Portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map