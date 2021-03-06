import { RicosContent, PreviewSettings } from '../types';
export default function previewStrategy(
  isViewer: boolean,
  isPreviewExpanded: boolean,
  onPreviewExpand: PreviewSettings['onPreviewExpand'],
  previewSettings?: PreviewSettings,
  content?: RicosContent
) {
  if (!isViewer || !previewSettings || !content) {
    return {};
  }
  const {
    transformation,
    contentInteractionMappers,
    onPreviewExpand: consumerCallback,
  } = previewSettings;
  if (!transformation || !contentInteractionMappers) {
    return {};
  }
  const initialState =
    isPreviewExpanded || !transformation ? content : transformation.apply(content);
  return {
    initialState,
    config: {
      PREVIEW: {
        ...previewSettings,
        onPreviewExpand: () => {
          onPreviewExpand?.();
          consumerCallback?.();
        },
      },
    },
  };
}
