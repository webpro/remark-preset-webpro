/**
 * @typedef {import('unified').Preset} Preset
 */

import remarkFrontMatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkPrettier from 'unified-prettier';
import remarkGFM from 'remark-gfm';
import remarkReferenceLinks from 'remark-reference-links';
import remarkOrderLinks from 'remark-order-reference-links';
import remarkDirective from 'remark-directive';
import remarkValidateRelativeLinks from 'remark-validate-relative-links';
import remarkWrapProse from '@webpro/remark-wrap-prose';
import { preserveDirectiveSpacing } from './preserve-directive-spacing.js';
import { preserveGfmAlerts } from './preserve-gfm-alerts.js';

/** @type {Preset} */
const remarkPresetWebPro = {
  // https://github.com/remarkjs/remark/blob/main/packages/remark-stringify/readme.md#options
  settings: {
    bullet: '-',
    emphasis: '_',
    tightDefinitions: true
  },
  plugins: [
    remarkFrontMatter,
    remarkParse,
    remarkDirective,
    preserveDirectiveSpacing,
    preserveGfmAlerts,
    remarkWrapProse,
    remarkPrettier,
    remarkGFM,
    remarkReferenceLinks,
    remarkOrderLinks,
    remarkValidateRelativeLinks
  ]
};

export default remarkPresetWebPro;
