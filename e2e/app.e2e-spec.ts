import { EsChargingStationPage } from './app.po';

describe('es-charging-station App', () => {
  let page: EsChargingStationPage;

  beforeEach(() => {
    page = new EsChargingStationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
