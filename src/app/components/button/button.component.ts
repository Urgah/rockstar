import { Component, OnInit, Input } from '@angular/core';
import { faForward } from '@fortawesome/free-solid-svg-icons';

/**
 * Default button component which is needed to add the standard image by default
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  constructor() { }
  faForward = faForward;
  ngOnInit(): void {
  }

}
