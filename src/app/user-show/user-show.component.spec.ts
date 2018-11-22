import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserShowComponent } from './user-show.component';
import { PostsComponent } from '../posts/posts.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserShowComponent', () => {
  let component: UserShowComponent;
  let fixture: ComponentFixture<UserShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShowComponent, PostsComponent ],
      imports: [FormsModule, RouterModule, HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increment votes when clicked on', () => {
    component.onVoted(1);
    expect(component.likes).toBe(1);
  });
});
