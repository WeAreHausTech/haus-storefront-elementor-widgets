import { bootstrapWidget } from '@haus-storefront-elementor-widgets/widgets-core';
import AddToCartButtonWidget from './AddToCartButton';

document.addEventListener('DOMContentLoaded', async () => {
  await bootstrapWidget(
    '[data-widget-type="add-to-cart-button-widget"]',
    AddToCartButtonWidget
  );
});
