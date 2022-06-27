/**
 * @fileoverview props must have comment
 * @author Yuta Nakmura
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
// @see: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin-tslint/tests/index.spec.ts
const { TSESLint } = require("@typescript-eslint/utils");

const rule = require("../../../lib/rules/comment-refs");

const config = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  parser: require.resolve("@typescript-eslint/parser"),
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new TSESLint.RuleTester(config);
ruleTester.run("comment-refs", rule, {
  valid: [
    {
      code: `
      // comment
      const a = ref()
      `,
    },
    {
      code: `
      /** comment */
      const a = ref()
      `,
    },
    {
      code: `
      /**
       * comment
       */
      const a = ref()
      `,
    },
    {
      code: `
      // comment
      const a: Ref<number> = ref(0)
      `,
    },
    {
      code: `
      // comment
      const a= ref<number>(0)
      `,
    },
  ],

  invalid: [
    {
      code: `
      const a = ref()
      `,
      errors: [
        {
          message: "ref declaration must have comment",
        },
      ],
    },
  ],
});
