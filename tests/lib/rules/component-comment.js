/**
 * @fileoverview Require comment for vue component
 * @author Yuta Nakamura
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/component-comment"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("component-comment", rule, {
  valid: [
    {code: "//comment\ndefineComponent({})"},
    {code: "foo();"},
    {code: "hoge.fuga()"},
  ],

  invalid: [
    {code: "defineComponent({})",errors: ["Vue component must have comment"]},
  ],
});
