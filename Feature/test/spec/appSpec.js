describe('App', function () {
  beforeEach(function () {
    bur.settings.vehicleData = testHelpers.vehicle;
    bur.settings.locale = 'en-gb';
  });

  it('should apply an instance of the application to the bur namespace', function () {
    bur.init();

    expect(bur.app).toBeDefined();
    expect(bur.app.queryEngine instanceof bur.ConfigurationBasicQuery).toBe(true);
  });

  it('should default to en-gb if there is not a matching config', function () {
    bur.settings.locale = 'mars';
    bur.init();

    expect(bur.app).toBeDefined();
    expect(bur.app.queryEngine instanceof bur.ConfigurationBasicQuery).toBe(true);
  });

  it('should manage de-de configuration', function(){
    bur.settings.locale = 'de-de';
    bur.init();

    expect(bur.app).toBeDefined();
    expect(bur.app.queryEngine instanceof bur.ConfigurationBasicQueryGerman).toBe(true);
  });
});
