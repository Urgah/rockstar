import { browser, by, element, Key } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  search(text: string):void {
    element(by.css('.search-bar')).sendKeys(text);
    element(by.id('search-button')).click();
  }

  openSongs(): void {
    element(by.css('.artist')).click();
  }

  createNewPlaylist(): void {
    element(by.id('open-playlist-modal')).click();
    element(by.id('new-playlist-input')).sendKeys('auto test');
    element(by.id('new-playlist-add')).click();
  }
}
