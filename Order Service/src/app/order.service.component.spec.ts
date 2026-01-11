import { TestBed } from '@angular/core/testing';
import { OrderDetailsComponent } from './order.service.component';

describe('OrderDetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderDetailsComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(OrderDetailsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Order Details'`, () => {
    const fixture = TestBed.createComponent(OrderDetailsComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('Order Details');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(OrderDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Order Details component is running!');
  });
});
