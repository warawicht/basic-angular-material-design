import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css'],
})
export class CustomerNewComponent implements OnInit {
  emailFormControl!: FormControl;

  constructor(public dialog: MatDialog, public snackbar: MatSnackBar) {}

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

  openRepDialog() {
    console.log('openRepDialog');
    const dialogRef = this.dialog.open(RepDialogComponent, {
      width: '300px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((r) => {
      console.log('r', r);
      alert(`User chose ${r}`);
    });
  }

  openUndoSnackBar() {
    const snackbarRef = this.snackbar.open('Customer saved', 'UNDO111', {
      horizontalPosition: 'end'
    });

    snackbarRef.onAction().subscribe(() => {
        alert('Undo that save!');
    });

  }
}
