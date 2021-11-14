import { Component, OnInit } from '@angular/core';
import { RestoService } from 'src/app/services/resto.service'; 
import { Router } from '@angular/router'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  collection:any=[];
  constructor(private resto:RestoService, private router: Router) { }

  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      this.collection = result  ;
    });
  }

  // Redirect to add restaurant
  addRestaurant(){
    const navigationDetails: string[] = ['restaurant/add'];
    this.router.navigate(navigationDetails);
  }

  // Delete restaurant
  deleteResto(restoId:any){
    // delete api call
    this.resto.deleteResto(restoId).subscribe((result:any) => {
      // remove from the list
      this.collection = this.collection.filter((item: { id: any; }) => item.id !== restoId); 
    });
  }

}
