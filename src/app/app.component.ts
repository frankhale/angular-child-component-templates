import {Component} from '@angular/core';
import {
  ChildWithChildrenTemplatesComponent
} from './child-with-children-templates/child-with-children-templates.component';
import {ChildTemplateComponent} from './child-template/child-template.component';

@Component({
  selector: 'app-root',
  imports: [ChildWithChildrenTemplatesComponent, ChildTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-child-component-templates';
}
