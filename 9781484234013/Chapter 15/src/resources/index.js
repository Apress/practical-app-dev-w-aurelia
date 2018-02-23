export function configure(config) {
  config.globalResources([
    './value-converters/date-format-value-converter',
    './value-converters/sort-value-converter',
    './value-converters/time-ago-value-converter'
  ]);
}
