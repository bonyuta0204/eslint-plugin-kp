/**
 * @fileoverview props must have comment
 * @author Yuta Nakmura
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
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "props must have comment",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === "ref") {

          const variableDeclarationNode = node.parent.parent;

          if (variableDeclarationNode) {
            let comment = context
              .getSourceCode()
              .getCommentsBefore(variableDeclarationNode);

            if (comment.length === 0) {
              context.report({
                node: node,
                message: "ref declaration must have comment",
              });
            }
          }
        }
      },
    };
  },
};
