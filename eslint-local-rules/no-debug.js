module.exports = {
  meta: {
    docs: {
      description: 'Enforce the presence of a specific comment',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [
      {
        type: 'object',
        properties: {
          commentPattern: { type: 'string' },
        },
        additionalProperties: false,
      },
    ],
  },
  create: function (context) {
    const options = context.options[0] || {};
    const { commentPattern = 'DEBUG' } = options;

    return {
      Program: function (node) {
        const comments = context.getSourceCode().getAllComments();
        const comment = comments.find((x) => x.value.includes(commentPattern));

        if (comment) {
          context.report({
            comment,
            loc: comment.loc,
            message: `Please fix or remove "${commentPattern}"`,
          });
        }
      },
    };
  },
};
