/**
 * @fileoverview props must have comment
 * @author Yuta Nakmura
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/comment-refs"),
  RuleTester = require("eslint").RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("comment-refs", rule, {
  valid: [
        {
      filename: 'test.vue',
      code: `
      // comment
      const a = ref()
      `,
      parserOptions
    }
  ],

  invalid: [
        {
      filename: 'test.vue',
      code: `
      const a = ref()
      `,
      parserOptions,
      errors: [
        {
          message: 'ref declaration must have comment',
        }
      ]
    }
  ],
});
