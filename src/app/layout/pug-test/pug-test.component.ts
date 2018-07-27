import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pug-test',
  templateUrl: './pug-test.component.pug'
})
export class PugTestComponent implements OnChanges{
  constructor() {}

  ngOnChanges(changes: any): void {
    console.log('pug test component ');
  }

}
