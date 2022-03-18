/**
 * @fileoverview props must have comment
 * @author Yuta Nakmura
 */
"use strict";

const utils = require("eslint-plugin-vue/lib/utils")


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
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function processProps(props){
      for (const item of props) {
        const comments = context.getCommentsBefore(item.node)
        if(comments.length === 0){
            context.report({
              node: item.node,
              message: "props must have comment"
            });
        }
      }

    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return utils.compositingVisitors(
      utils.defineScriptSetupVisitor(context, {
        onDefinePropsEnter(_node, props) {
          processProps(props)
        }
      }),
      utils.executeOnVue(context, (obj) => {
        processProps(utils.getComponentPropsFromOptions(obj))
      })
    )
  }






};
