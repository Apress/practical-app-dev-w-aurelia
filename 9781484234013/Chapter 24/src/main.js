export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-testing');

  aurelia.start().then(a => a.setRoot());
}
