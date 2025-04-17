import { bootstrapWidget } from '@haus-storefront-elementor-widgets/widgets-core';
import TestWidget from './TestWidget';

document.addEventListener('DOMContentLoaded', () => {
  bootstrapWidget('[data-widget-type="test-widget"]', TestWidget);
});
