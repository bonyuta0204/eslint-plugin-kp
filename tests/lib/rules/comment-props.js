/**
 * @fileoverview props must have comment
 * @author Yuta Nakmura
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/comment-props"),
  RuleTester = require("eslint").RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("comment-props", rule, {
  valid: [
        {
      filename: 'test.vue',
      code: `
        export default {
          props: {
            // comment
            greetingText: String
          }
        }
      `,
      parserOptions
    }
  ],

  invalid: [
        {
      filename: 'test.vue',
      code: `
        export default {
          props: {
            greetingText: String
          }
        }
      `,
      parserOptions,
      errors: [
        {
          message: 'props must have comment',
        }
      ]
    }
  ],
});
