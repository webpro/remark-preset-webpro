const ALERT_RE = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/;

export function preserveGfmAlerts() {
  const data = this.data();
  data.toMarkdownExtensions = data.toMarkdownExtensions || [];
  data.toMarkdownExtensions.push({
    handlers: {
      gfmAlert(node) {
        return node.value;
      },
    },
  });

  return (tree) => {
    transformAlerts(tree);
  };
}

function transformAlerts(node) {
  if (node.type === "blockquote") {
    const paragraph = node.children?.[0];
    if (paragraph?.type === "paragraph") {
      const text = paragraph.children[0];
      if (text?.type === "text") {
        const match = text.value.match(ALERT_RE);
        if (match) {
          const rest = text.value.slice(match[0].length);
          paragraph.children.splice(
            0,
            1,
            { type: "gfmAlert", value: match[0] },
            ...(rest ? [{ type: "text", value: rest }] : []),
          );
        }
      }
    }
  }
  if (node.children) {
    for (const child of node.children) {
      transformAlerts(child);
    }
  }
}
