import React from 'react';
import PropTypes from 'prop-types';
import { RicosEditor } from 'ricos-editor';
import { RichContentEditor } from 'wix-rich-content-editor';
import { pluginHtml, htmlButtonsTypes } from 'wix-rich-content-plugin-html';
import { pluginLinkPreview } from 'wix-rich-content-plugin-link-preview';

const HtmlWithDomainStory = ({ contentState }) => {
  const { html, adsense } = htmlButtonsTypes;
  return (
    <RicosEditor
      plugins={[
        pluginHtml({ exposeButtons: [html, adsense], siteDomain: 'https://www.wix.com' }),
        pluginLinkPreview(),
      ]}
      content={contentState}
    >
      <RichContentEditor iframeSandboxDomain="https://richcontent-sttorybook.filesusr.com" />
    </RicosEditor>
  );
};

HtmlWithDomainStory.propTypes = {
  contentState: PropTypes.object,
};

export default HtmlWithDomainStory;
