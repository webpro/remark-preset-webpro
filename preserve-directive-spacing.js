import { directiveToMarkdown } from 'mdast-util-directive';

const defaultDirectiveHandlers = directiveToMarkdown().handlers;

export function preserveDirectiveSpacing() {
  const data = this.data();
  data.toMarkdownExtensions = data.toMarkdownExtensions || [];
  data.toMarkdownExtensions.push({
    handlers: {
      /** @param {import('mdast-util-directive').ContainerDirective} node */
      containerDirective(node, parent, state, info) {
        const serialized = defaultDirectiveHandlers.containerDirective.call(this, node, parent, state, info);
        if (node.children && node.children.length > 0) {
          const lines = serialized.split('\n');
          return [lines.at(0), lines.slice(1, -1).join('\n'), lines.at(-1)].join('\n\n');
        }
        return serialized;
      }
    }
  });
}
