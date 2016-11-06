(function () {

    angular.module('Portfolio.UI', ['ngAnimate', 'ngMaterial', 'hmTouchEvents']);

    $(document).ready(function () {
        /* SETUP FOR LAYLOADING IMAGES */
        $('img.pf-img-lazy').lazyload();
    });

})()