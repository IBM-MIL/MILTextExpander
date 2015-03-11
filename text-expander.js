/*
 *  Licensed Materials - Property of IBM
 *  © Copyright IBM Corporation 2015. All Rights Reserved.
 *  This sample program is provided AS IS and may be used, executed, copied and modified without royalty
 *  payment by customer (a) for its own instruction and study, (b) in order to develop applications designed to
 *  run with an IBM product, either for customer's own internal use or for redistribution by customer, as part
 *  of such an application, in customer's own products.
 */

/**
 *  @namespace MILTextExpander
 *  @description Defines the {@linkcode MILTextExpander} module, which includes the textExpander directive.
 *  @requires ngAminate
 *  @author Jim Avery
 *  @copyright © 2015 IBM Corporation. All Rights Reserved.
 */

'use strict';

var MILTextExpander = angular.module('MILTextExpander', ['ngAnimate']);

/**
 *  @class MILTextExpander.textExpander
 *  @memberOf MILTextExpander
 *  @description A directive that creates a text box that smoothly reveals and hides itself when the
 *  title area is clicked. This directive is decorated with four attributes: {@linkcode title} specifies the text
 *  to be displayed in the title area. {@linkcode text} specifies the text that will be shown or hidden.
 *  {@linkcode buttonImage} is an optional attribute for specifying an image that will exist to the right of the
 *  title. {@linkcode buttonRotation} is an optional attribute to specify the number of degrees the
 *  {@linkcode buttonImage} will rotate when the text is shown; negative values indicate counterclockwise rotation.
 *  @example
 *  <text-expander title="Lorem" text="Ipsum" button-image="arrow-button.jpg" button-rotation="90"></text-expander>
 *  @author James Avery
 *  @copyright © 2015 IBM Corporation. All Rights Reserved.
 */
MILTextExpander.directive('textExpander', function () {

    return {

        restrict: 'E',

        scope: {
            title: '@',
            text: '@',
            buttonImage: '@',
            buttonRotation: '@'
        },

        template: "<style>.titleText{font-size:18pt;margin-bottom: 25px;}.titleText span:last-child{float: right;}.expandButton{height: auto; width: 18px;-webkit-transition: all ease 0.3s;transition: all ease 0.3s;}.detailsText{margin-bottom: 25px;font-family: 'OpenSansRegular';font-size: 14pt;}.rotateButton{-webkit-transform: rotate({{buttonRotation}}deg);transform: rotate({{buttonRotation}}deg);}.hideAnimation.ng-hide-add, .hideAnimation.ng-hide-remove{-webkit-transition: all ease 0.6s;transition: all ease 0.6s;}.hideAnimation.ng-hide-add{max-height: 300px;margin-bottom: 25px;overflow: hidden;}.hideAnimation.ng-hide-add-active{max-height: 0px;margin-bottom: 0px;}.hideAnimation.ng-hide-remove{max-height: 0px;margin-bottom: 0px;overflow: hidden;}.hideAnimation.ng-hide-remove-active{max-height: 300px;margin-bottom: 25px;}</style><div class='titleText' ng-click='displayText = !displayText'><span>{{title}}</span><span><img class='expandButton' src='{{buttonImage}}' ng-class='{rotateButton: displayText}'></span></div><div class='detailsText hideAnimation' ng-show='displayText'>{{text}}</div>",

        link: function (scope, element, attrs) {
            scope.displayText = false;
        }

    };

});