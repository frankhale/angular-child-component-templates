import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithChildrenTemplatesComponent } from './child-with-children-templates.component';

describe('ChildWithChildrenTemplatesComponent', () => {
  let component: ChildWithChildrenTemplatesComponent;
  let fixture: ComponentFixture<ChildWithChildrenTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildWithChildrenTemplatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildWithChildrenTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
