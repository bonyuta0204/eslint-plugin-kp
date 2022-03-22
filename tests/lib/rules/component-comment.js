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

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("component-comment", rule, {
  valid: [
    {code: "//comment\ndefineComponent({})"},
    {code: "foo();"},
    {code: `
      /*
       * コメント
       */
      export default defineComponent({});
      `,
      parserOptions
    },
    {code: `
      import { defineComponent } from 'vue-composition-api'
      /*
       * コメント
       */
      export default defineComponent({});
      `,
      parserOptions
    },
    {code: "hoge.fuga()"},
  ],

  invalid: [
    {code: "defineComponent({})",errors: ["Vue component must have comment"]},
    {code: `
      /*
       * コメント
       */
      import { defineComponent } from 'vue-composition-api'

      export default defineComponent({});
      `,
      parserOptions,
      errors: ["Vue component must have comment"]
    },
  ],
});
