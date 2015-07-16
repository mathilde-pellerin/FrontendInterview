(function () {

  bur.init = function () {
    var DEFAULT_LOCALE = 'en-gb',
        config = {
          'en-gb': {
            QueryEngine: bur.ConfigurationBasicQuery,
            StateEngine: bur.ConfigurationState
          }
        },
        localeConfig = config[bur.settings.locale] || config[DEFAULT_LOCALE];

    bur.app = new bur.Configurator(
        new localeConfig.QueryEngine(bur.settings.vehicleData),
        new localeConfig.StateEngine()
    );
  };

}());
