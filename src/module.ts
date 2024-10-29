import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'format',
      name: 'Time Format',
      defaultValue: 'YYYY-MM-DD HH:mm:ss',
    })
    .addTextInput({
      path: 'fontSize',
      name: 'Font Size',
      defaultValue: '14px',
    })
    .addTextInput({
      path: 'color',
      name: 'Color',
      defaultValue: 'rgb(204, 204, 220)',
    });
});
