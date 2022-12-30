import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleButton {
  @Input() checked: boolean = true;
  @Output() checkedChange = new EventEmitter<boolean>();
}
