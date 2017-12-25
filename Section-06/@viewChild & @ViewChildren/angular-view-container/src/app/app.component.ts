import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  styles: [
    'todo-app { margin-top: 20px; margin-left: 20px; }'
  ],
  template: `
    <content>
      <todo-app>
        <app-footer>
          <small>Yet another todo app!</small>
        </app-footer>
      </todo-app>
    </content>
  `
})
export class AppComponent {}