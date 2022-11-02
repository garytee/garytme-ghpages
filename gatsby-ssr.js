import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';
import Transition from './src/components/Transition';

export const wrapPageElement = ({ element, props }) => <Transition {...props}>{element}</Transition>;

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet();
  const body = renderToString(sheet.collectStyles(bodyComponent));

  replaceBodyHTMLString(body);
  setHeadComponents([sheet.getStyleElement()]);
};

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}, pluginOptions) => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]);
};
