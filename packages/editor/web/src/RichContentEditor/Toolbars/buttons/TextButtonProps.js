import { HEADER_BLOCK } from 'wix-rich-content-common';
import {
  AlignLeftIcon,
  AlignTextCenterIcon,
  AlignRightIcon,
  AlignJustifyIcon,
  TEXT_BUTTONS,
} from 'wix-rich-content-editor-common';
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  BlockQuoteIcon,
  TitleIcon,
  TitleOneIcon,
  TitleTwoIcon,
  OrderedListIcon,
  UnorderedListIcon,
} from '../../Icons';
import generateTextButtonProps from './utils/generateTextToolbarButtonProps';
import { BUTTON_STYLES } from './consts';

export default {
  [TEXT_BUTTONS.BOLD]: ({ icon, t, getEditorState, setEditorState, externalOnClick, alignment }) =>
    generateTextButtonProps({
      name: TEXT_BUTTONS.BOLD,
      styles: ['BOLD'],
      type: BUTTON_STYLES.INLINE,
      icons: [icon || BoldIcon],
      tooltipTextKey: 'BoldButton_Tooltip',
      t,
      getEditorState,
      setEditorState,
      externalOnClick,
      alignment,
    }),
  [TEXT_BUTTONS.ITALIC]: ({
    icon,
    t,
    getEditorState,
    setEditorState,
    externalOnClick,
    alignment,
  }) =>
    generateTextButtonProps({
      name: TEXT_BUTTONS.ITALIC,
      styles: ['ITALIC'],
      type: BUTTON_STYLES.INLINE,
      icons: [icon || ItalicIcon],
      tooltipTextKey: 'ItalicButton_Tooltip',
      t,
      getEditorState,
      setEditorState,
      externalOnClick,
      alignment,
    }),
  [TEXT_BUTTONS.UNDERLINE]: ({
    icon,
    t,
    getEditorState,
    setEditorState,
    externalOnClick,
    alignment,
  }) =>
    generateTextButtonProps({
      name: TEXT_BUTTONS.UNDERLINE,
      styles: ['UNDERLINE'],
      type: BUTTON_STYLES.INLINE,
      icons: [icon || UnderlineIcon],
      tooltipTextKey: 'UnderlineButton_Tooltip',
      t,
      getEditorState,
      setEditorState,
      externalOnClick,
      alignment,
    }),
  [TEXT_BUTTONS.TITLE]: ({
    icons,
    t,
    getEditorState,
    setEditorState,
    externalOnClick,
    alignment,
  }) =>
    generateTextButtonProps({
      name: TEXT_BUTTONS.TITLE,
      styles: ['unstyled', HEADER_BLOCK.TWO, HEADER_BLOCK.THREE],
      type: BUTTON_STYLES.BLOCK,
      icons: [
        icons.inactiveIconTitle || TitleIcon,
        icons.iconForTitleOne || TitleOneIcon,
        icons.iconForTitleTwo || TitleTwoIcon,
      ],
      tooltipTextKey: 'TitleButton_Tooltip',
      t,
      getEditorState,
      setEditorState,
      externalOnClick,
      alignment,
    }),
  [TEXT_BUTTONS.BLOCKQUOTE]: ({
    icon,
    t,
    getEditorState,
    setEditorState,
    externalOnClick,
    alignment,
  }) =>
    generateTextButtonProps({
      name: 'Quote',
      styles: ['blockquote'],
      type: BUTTON_STYLES.BLOCK,
      icons: [icon || BlockQuoteIcon],
      tooltipTextKey: 'QuoteButton_Tooltip',
      t,
      getEditorState,
      setEditorState,
      externalOnClick,
      alignment,
    }),
  [TEXT_BUTTONS.ALIGN_LEFT]: ({
    icon,
    t,
    getEditorState,
    setEditorState,
    externalOnClick,
    alignment,
  }) =>
    generateTextButtonProps({
      name: TEXT_BUTTONS.ALIGN_LEFT,
      type: BUTTON_STYLES.ALIGNMENT,
      styles: ['left'],
      icons: [icon || AlignLeftIcon],
      tooltipTextKey: 'AlignTextLeftButton_Tooltip',
      t,
      getEditorState,
      setEditorState,
      externalOnClick,
      alignment,
    }),
  [TEXT_BUTTONS.ALIGN_CENTER]: ({
    icon,
    t,
    getEditorState,
    setEditorState,
    externalOnClick,
    alignment,
  }) =>
    generateTextButtonProps({
      name: TEXT_BUTTONS.ALIGN_CENTER,
      type: BUTTON_STYLES.ALIGNMENT,
      styles: ['center'],
      icons: [icon || AlignTextCenterIcon],
      tooltipTextKey: 'AlignTextCenterButton_Tooltip',
      t,
      getEditorState,
      setEditorState,
      externalOnClick,
      alignment,
    }),
  [TEXT_BUTTONS.ALIGN_RIGHT]: ({
    icon,
    t,
    getEditorState,
    setEditorState,
    externalOnClick,
    alignment,
  }) =>
    generateTextButtonProps({
      name: TEXT_BUTTONS.ALIGN_RIGHT,
      type: BUTTON_STYLES.ALIGNMENT,
      styles: ['right'],
      icons: [icon || AlignRightIcon],
      tooltipTextKey: 'AlignTextRightButton_Tooltip',
      t,
      getEditorState,
      setEditorState,
      externalOnClick,
      alignment,
    }),
  [TEXT_BUTTONS.ALIGN_JUSTIFY]: ({
    icon,
    t,
    getEditorState,
    setEditorState,
    externalOnClick,
    alignment,
  }) =>
    generateTextButtonProps({
      name: TEXT_BUTTONS.ALIGN_JUSTIFY,
      styles: ['justify'],
      type: BUTTON_STYLES.ALIGNMENT,
      icons: [icon || AlignJustifyIcon],
      tooltipTextKey: 'AlignTextJustifyButton_Tooltip',
      t,
      getEditorState,
      setEditorState,
      externalOnClick,
      alignment,
    }),
  [TEXT_BUTTONS.ORDERED_LIST]: ({
    icon,
    t,
    getEditorState,
    setEditorState,
    externalOnClick,
    alignment,
  }) =>
    generateTextButtonProps({
      name: 'NumberedList',
      styles: ['ordered-list-item'],
      type: BUTTON_STYLES.BLOCK,
      icons: [icon || OrderedListIcon],
      tooltipTextKey: 'OrderedListButton_Tooltip',
      t,
      getEditorState,
      setEditorState,
      externalOnClick,
      alignment,
    }),
  [TEXT_BUTTONS.UNORDERED_LIST]: ({
    icon,
    t,
    getEditorState,
    setEditorState,
    externalOnClick,
    alignment,
  }) =>
    generateTextButtonProps({
      name: 'BulletedList',
      styles: ['unordered-list-item'],
      type: BUTTON_STYLES.BLOCK,
      icons: [icon || UnorderedListIcon],
      tooltipTextKey: 'UnorderedListButton_Tooltip',
      t,
      getEditorState,
      setEditorState,
      externalOnClick,
      alignment,
    }),
};
