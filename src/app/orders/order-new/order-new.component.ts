import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css'],
})
export class OrderNewComponent implements OnInit {
  constructor() {}

  minDate = new Date();

  dateCtrl!: FormControl;

  ngOnInit() {
    this.dateCtrl = new FormControl('', [Validators.required]);
  }
}
