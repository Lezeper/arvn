import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestComponent } from './test.component';
import { SharedModule } from '../shared/shared.module';
import { PhoneNumberDirective } from './test.directive';

const testRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'test',
    component: TestComponent
  }
]);

@NgModule({
  imports: [
    testRouting,
    SharedModule
  ],
  declarations: [
    TestComponent,
    PhoneNumberDirective
  ],
  providers: []
})
export class TestModule{}