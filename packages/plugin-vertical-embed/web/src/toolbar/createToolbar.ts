import createInlineButtons from './inline-buttons';
import createInsertButtons from './insert-buttons';
import { CreatePluginToolbar } from 'wix-rich-content-common';

const createToolbar: CreatePluginToolbar = ({ settings, t, isMobile }) => {
  return {
    InlineButtons: createInlineButtons({ t, isMobile, settings }),
    InsertButtons: createInsertButtons({ t, settings, isMobile }),
    name: 'vertical-embed',
  };
};

export default createToolbar;
