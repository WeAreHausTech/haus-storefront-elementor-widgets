import { bootstrapWidget } from '@haus-storefront-elementor-widgets/widgets-core';
import AddToCartButtonWidget from './AddToCartButton';

document.addEventListener('DOMContentLoaded', () => {
  bootstrapWidget(
    '[data-widget-type="add-to-cart-button-widget"]',
    AddToCartButtonWidget
  );
});
