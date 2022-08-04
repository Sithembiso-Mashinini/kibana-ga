module.exports = function (kibana) {
  return new kibana.Plugin({
    id: 'ga',

    uiExports: {
      hacks: ['plugins/ga/hack'],
      injectDefaultVars(server) {
        let config = server.config();
        return {
          gaConfig: {
            enabled: config.get('ga.enabled'),
            name: config.get('ga.name'),
            tracker: config.get('ga.tracker'),
            fields: config.get('ga.fields'),
            trackPages: config.get('ga.trackPages')
          }
        };
      }
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
        name: Joi.string(),
        tracker: Joi.string(),
        fields: Joi.object(),
        trackPages: Joi.boolean().default(true)
      }).default();
    }
  });
}
