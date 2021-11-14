import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import  { RestoService } from '../../services/resto.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  showAlert : boolean = false;
  
  public updateResto = new FormGroup ({
    name : new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),
  });

  constructor(private route : ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    this.resto.getRestoDetails(this.route.snapshot.params.id)
    .subscribe((result:any) => {
      this.updateResto = new FormGroup ({
        name : new FormControl(result['name']),
        email:new FormControl(result['email']),
        phone:new FormControl(result['phone']),
        address:new FormControl(result['address']),
      });
    });
    // console.log(this.route.snapshot.params.id);
  }
  

  updateRestaurant(){
    this.resto.updateResto(this.route.snapshot.params.id, this.updateResto.value)
    .subscribe((result : any) => {
      this.showAlert = true;
      this.updateResto = new FormGroup ({
        name : new FormControl(result['name']),
        email:new FormControl(result['email']),
        phone:new FormControl(result['phone']),
        address:new FormControl(result['address']),
      });
    })
  }

  // close alert function.
  closeAlert(){
    this.showAlert=false;
  }

}
