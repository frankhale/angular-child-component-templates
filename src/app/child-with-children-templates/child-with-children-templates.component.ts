import {Component, contentChildren, input, TemplateRef, viewChild} from '@angular/core';
import {ChildTemplateComponent} from '../child-template/child-template.component';
import {NgForOf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-child-with-children-templates',
  imports: [
    NgTemplateOutlet,
    NgForOf
  ],
  templateUrl: './child-with-children-templates.component.html',
  styleUrl: './child-with-children-templates.component.scss'
})
export class ChildWithChildrenTemplatesComponent {
  readonly template = viewChild.required<TemplateRef<any>>("childTemplate");
  readonly childTemplateComponents = contentChildren(ChildTemplateComponent);
  readonly title = input.required<string>();
}
