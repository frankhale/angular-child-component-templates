import {Component, contentChildren, input, TemplateRef, viewChild} from '@angular/core';
import {
  ChildWithChildrenTemplatesComponent
} from '../child-with-children-templates/child-with-children-templates.component';
import {NgForOf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-child-template',
  imports: [
    NgTemplateOutlet,
    NgForOf
  ],
  templateUrl: './child-template.component.html',
  styleUrl: './child-template.component.scss'
})
export class ChildTemplateComponent {
  readonly template = viewChild.required<TemplateRef<any>>("childTemplate");
  readonly children = contentChildren(ChildWithChildrenTemplatesComponent);
  readonly show = input.required<boolean>();
  readonly title = input.required<string>();
}
