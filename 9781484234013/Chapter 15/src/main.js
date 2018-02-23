export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature('./src/resources');

  aurelia.start().then(a => a.setRoot());
}