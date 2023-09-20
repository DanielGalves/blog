import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit{
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
      private route:ActivatedRoute
  ){ }


  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get("id"))

      this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id:string | null){ 
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo

  }

}