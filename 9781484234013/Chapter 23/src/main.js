import {I18N, TCustomAttribute} from 'aurelia-i18n';
import XHR from 'i18next-xhr-backend';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-i18n', (instance) => {
      let aliases = ['t', 'i18n'];
      // add aliases for 't' attribute
      TCustomAttribute.configureAliases(aliases);
      // register backend plugin
      instance.i18next.use(XHR);
      // adapt options to your needs (see http://i18next.com/docs/options/)
      instance.setup({
        backend: {                                  
          loadPath: './locales/{{lng}}/{{ns}}.json'
        },
        lng : 'en',
        attributes : aliases,
        fallbackLng : 'en',
        debug : false
      });
   });    

  aurelia.start().then(a => a.setRoot());
}