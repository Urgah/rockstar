import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Search on AC/DC', () => {
    page.navigateTo();
    page.search('AC/DC');
    page.openSongs();
    expect(element(by.css('.songs')).length == 19 && element(by.id('artist-list')).length == 1);
  });

  it('Open and change playlist', () => {
    page.createNewPlaylist();
    expect(element(by.css('.songs')).length == 0);
  });
});
