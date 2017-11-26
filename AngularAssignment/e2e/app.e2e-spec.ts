import { AngularAssignmentPage } from './app.po';

describe('angular-assignment App', () => {
  let page: AngularAssignmentPage;

  beforeEach(() => {
    page = new AngularAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
