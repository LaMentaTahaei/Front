import { Component, OnInit, Input } from '@angular/core';
import { ClassModel } from '../class.model';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
// class item
@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  @Input() ClassItem: ClassModel;


  constructor(private dataService : DataService, private rout: ActivatedRoute) { }

  
  ngOnInit() {
    
  }

  onSelectedAnalisys()//show student list
  {
    // this.dataService.classSelected.emit(this.dataService.GetStudents(this.ClassItem.ID));
    this.dataService.ClassId = this.ClassItem.id;
  }
}
