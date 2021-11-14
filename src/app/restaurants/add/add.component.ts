import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../../services/resto.service'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  showAlert:boolean = false;
  // makes an instance of any
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }

  public addResto = new FormGroup({
    name : new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),
  });

  addRestaurant(){
    // console.log(this.addResto.value)
    // subscribe work as a callback
    this.resto.addResto(this.addResto.value).subscribe((result) => {
      this.showAlert=true;
      
      // for reset form 
      this.addResto.reset({})
    });
  }

  // close alert function.
  closeAlert(){
    this.showAlert=false;
  }
}
