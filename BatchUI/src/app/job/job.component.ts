import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(
    public _id : String,

    public SYS_FIELD_NAME : Array<any>,

    public SYS_TYPE : Array<any>,

    public SYS_FIELD_NO : Array<any>,

    public SYS_VAL_PROG : Array<any>,

    public SYS_DISPLAY_FMT : Array<any>,

    public SYS_ALT_INDEX : Array<any>,

    public SYS_SINGLE_MULT : Array<any>,

    public SYS_LANG_FIELD  : Array<any>,

    public CURR_NO : Array<any>,

    public INPUTTER : Array<any>,

    public DATE_TIME : Int8Array ,

    public AUTHORISER : String ,

    public CO_CODE  : String,

    public DEPT_CODE : String,

  ) { }

  ngOnInit(): void {
  }

}
