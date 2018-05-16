import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { FormatStringPipe } from './formatstr.pipe';
import { RepeatPipe } from './repeatpipe';
import { StatusconvertPipe } from './statusconvert.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WelcomePipe,
        FormatStringPipe,
        RepeatPipe,
        StatusconvertPipe
      ],
    }).compileComponents();
  }))

  afterEach(async(() => {
    console.log("hi");
  })
);

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('App');
  }));

  it('should render title in a p tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('APP');
  }));

  it('check Add Method',async(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const componentObject = fixture.componentInstance;
    const result = componentObject.add(11,11);
    expect(result).toEqual(22);
  }));
});
