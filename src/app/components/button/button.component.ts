import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string = 'button';
  @Input() color: string = '#fff';
  @Input() bg: string = '#000';
  @Output() btnClick = new EventEmitter();

  onClick = (event: any) => {
    event.preventDefault();
    this.btnClick.emit(event);
  };
}
