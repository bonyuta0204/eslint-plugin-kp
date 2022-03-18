/**
 * @fileoverview Require comment for vue component
 * @author Yuta Nakamura
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Require comment for vue component",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      CallExpression(node){
        if(node.callee.name === 'defineComponent'){
          const comment = context.getCommentsBefore(node)
          if(comment.length === 0){
            context.report({
              node: node,
              message: "Vue component must have comment"
            });
          }
        }
      }
    }
  },
};
