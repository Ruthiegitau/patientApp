import { PatientAppPage } from './app.po';

describe('patient-app App', function() {
  let page: PatientAppPage;

  beforeEach(() => {
    page = new PatientAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
