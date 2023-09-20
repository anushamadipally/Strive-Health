import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FrameworkDialogComponent } from '../framework-dialog/framework-dialog.component';
import { ApisService } from '../apis.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-frameworkmanagement',
  templateUrl: './frameworkmanagement.component.html',
  styleUrls: ['./frameworkmanagement.component.css']
})
export class FrameworkmanagementComponent implements OnInit {
constructor( private dialog:MatDialog, private api:ApisService, private http:HttpClient){}

employees:any
 card: any;
ngOnInit(): void {
this.api.getfwtemp().subscribe((data:any)=>{
  console.log("Data is",data)
  this.card=data.data;
});
}


openDialog() {
  const dialogRef = this.dialog.open(FrameworkDialogComponent,{
    width:'30rem'

  });

}

user = {
  fw_icon: 'iVBORw0KGgoAAAANSUhEUgAAALgAAAFfCAYAAAD9BQZJAAAAIGNIUk0AAH' // Replace with your actual Base64 string
};

getIconUrl() {
  return 'data:image/png;base64,' + this.user.fw_icon;
}

}
