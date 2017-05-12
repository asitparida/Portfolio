import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as $ from 'jquery';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

(function () {
  $(document).ready(function () {
    let element: Element = document.getElementById('chrome-toggle-switch');
    element.addEventListener('change', (e: Event) => {
      let _checked: boolean = e.target['checked'] || false;
      if (_checked) {
        let _targetElms: NodeListOf<Element> = document.querySelectorAll('[data-tag="dark-mode-applicable"]');
        for (let i = 0; i < _targetElms.length; i++) {
          _targetElms[i].classList.add('dark');
        }
        if (_targetElms.length > 0) {
          let _textElm: Element = document.querySelector('[data-tag="chrome-toggle-text"]');
          if (_textElm) {
            _textElm.textContent = 'Switch off chrome';
          }
        }
      } else {
        let _targetElms: NodeListOf<Element> = document.querySelectorAll('[data-tag="dark-mode-applicable"]');
        for (let i = 0; i < _targetElms.length; i++) {
          _targetElms[i].classList.remove('dark');
        }
        if (_targetElms.length > 0) {
          let _textElm: Element = document.querySelector('[data-tag="chrome-toggle-text"]');
          if (_textElm) {
            _textElm.textContent = 'Switch on chrome';
          }
        }
      }
    }, true);
  });
})()