
/**
 * Typography
 * 
 * Container for typography settings.
 * To use with React component in this manner:
 *      import { TypographyStyle } from 'react-typography';
 *      import typography from './typography';
 */

import Typography from 'typography';
import parnassusTheme from 'typography-theme-parnassus';

const typography = new Typography(parnassusTheme);

export default typography;