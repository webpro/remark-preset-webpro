import { h } from 'hastscript';
import { visit } from 'unist-util-visit';

const isDirectiveNode = node =>
  node.type === 'textDirective' || node.type === 'leafDirective' || node.type === 'containerDirective';

export const transformDirectives = () => tree => {
  const visitor = node => {
    if (isDirectiveNode(node)) {
      const hast = h(node.name, node.attributes);
      const data = node.data || (node.data = {});
      data.hName = hast.tagName;
      data.hProperties = hast.properties;
    }
  };
  visit(tree, visitor);
};
