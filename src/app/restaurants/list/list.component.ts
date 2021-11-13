import { Component, OnInit } from '@angular/core';
import { RestoService } from 'src/app/services/resto.service'; 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  collection:any=[];
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      this.collection = result  ;
      
    });
  }

}
