import ReactDOM from 'react-dom/client';
import { DataProvider, VendureDataProviderProps } from '@haus-storefront/core';

declare global {
  interface Window {
    ecomWidgetDataProviderProps?: VendureDataProviderProps;
  }
}

export function bootstrapWidget(
  selector: string,
  Component: React.ComponentType,
  dataProviderProps?: VendureDataProviderProps
) {
  const elements = document.querySelectorAll(selector);

  const props = dataProviderProps ?? window.ecomWidgetDataProviderProps;

  if (!props) {
    console.error(
      'Missing DataProvider props: window.ecomWidgetDataProviderProps is undefined'
    );
    return;
  }

  elements.forEach((element) => {
    const shadowRoot = element.attachShadow({ mode: 'open' });
    ReactDOM.createRoot(shadowRoot).render(
      <DataProvider {...props}>
        <Component />
      </DataProvider>
    );
  });
}
