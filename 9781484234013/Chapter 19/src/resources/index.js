export function configure(config) {

  config.globalResources([
    './attributes/circle/circle',
    './attributes/input-mask/input-mask',
    './attributes/set-focus/set-focus',
    './binding-behaviors/stop-propagation',    
    './elements/listview/listview',
    './elements/listview/listview-item',
    './elements/multi-selector/multi-selector',
    './elements/tab-control/tab-control',
    './elements/tab-control/tab-item',
    './value-converters/date-format-value-converter',
    './value-converters/sort-value-converter',
    './value-converters/time-ago-value-converter',    
  ]);

} 