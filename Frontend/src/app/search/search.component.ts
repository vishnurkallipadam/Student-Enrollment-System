import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   query:string | undefined
  public searchFilter: any = '';
  constructor(private studentservice:StudentService ) { }
  name:any=''
  email:any=''
  passout:any=''
  district:any=''
  state:any=''
  qualification:any=''

  students=(this.name,this.email,this.qualification,this.district,this.state,this.passout)
  ngOnInit(): void {
    this.studentservice.searchStudents().subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data))
    })
  }

}
