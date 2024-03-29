/**
 * @typedef {import('unified').Preset} Preset
 */

import remarkFrontMatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkPrettier from 'unified-prettier';
import remarkGFM from 'remark-gfm';
import remarkReferenceLinks from 'remark-reference-links';
import remarkOrderLinks from 'remark-order-reference-links';

/** @type {Preset} */
const remarkPresetWebPro = {
  settings: {},
  plugins: [remarkFrontMatter, remarkParse, remarkPrettier, remarkGFM, remarkReferenceLinks, remarkOrderLinks]
};

export default remarkPresetWebPro;
