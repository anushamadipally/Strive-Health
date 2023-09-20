import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-framework-dialog',
  templateUrl: './framework-dialog.component.html',
  styleUrls: ['./framework-dialog.component.css']
})
export class FrameworkDialogComponent implements OnInit {
  myForm! : FormGroup;

  constructor(private fb:FormBuilder, private api:ApisService){}
  ngOnInit(): void {
   
    this.myForm=this.fb.group({
      fw_name  :new FormControl('',[]),
      fw_type_id :new FormControl('',[]),
      fw_category:new FormControl('',[]),
      fw_owner_id:new FormControl('',[]),
      fw_model :new FormControl('',[]),
      modules_mandatory:new FormControl('',[]),
      modules_optional:new FormControl('',[]),
      fw_icon:new FormControl('',[]),
      fw_duration:new FormControl('',[]),
    
      });
 
  }

 
  
  addusers(){

//     let data= new FormData()
//     data.append('fw_name ', this.myForm.value. fw_name )
//     data.append('fw_type_id', this.myForm.value. fw_type_id)
//     data.append('fw_category',this.myForm.value. fw_category)
//     data.append('fw_owner_id',this.myForm.value. fw_owner_id)
//     data.append(' fw_model ',this.myForm.value. fw_model )
//     data.append(' modules_mandatory',this.myForm.value.modules_mandatory)
//     data.append(' modules_optional',this.myForm.value. modules_optional)
//     data.append(' fw_icon',this.myForm.value. fw_icon)
//     data.append('fw_duration',this.myForm.value.fw_duration)
 
//     this.api.postfwtemp(data).subscribe((res:any)=>{

//     }) 
// }
}
}