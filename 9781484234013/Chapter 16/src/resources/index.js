export function configure(config) {
  config.globalResources([
    './binding-behaviors/stop-propagation',
    './value-converters/time-ago-value-converter'
  ]);
}
