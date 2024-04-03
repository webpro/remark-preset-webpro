/**
 * @typedef {import('unified').Preset} Preset
 */

import remarkFrontMatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkPrettier from 'unified-prettier';
import remarkGFM from 'remark-gfm';
import remarkMDX from 'remark-mdx';
import remarkReferenceLinks from 'remark-reference-links';
import remarkOrderLinks from 'remark-order-reference-links';
import remarkDirective from 'remark-directive';
import { transformDirectives } from './transform-directives.js';

/** @type {Preset} */
const remarkPresetWebPro = {
  settings: {},
  plugins: [
    remarkFrontMatter,
    remarkParse,
    remarkDirective,
    transformDirectives,
    remarkMDX,
    remarkPrettier,
    remarkGFM,
    remarkReferenceLinks,
    remarkOrderLinks
  ]
};

export default remarkPresetWebPro;
