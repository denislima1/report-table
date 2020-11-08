import { Component, OnInit } from '@angular/core';
import { ChildrenItemData, ParentItemData } from './report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  
  isLoadingOne = false;

  private counter = 3;

  loadOne(): void {
    var month = Array("Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro",
      "Outubro","Novembro","Dezembro");
    var eArr = month;

    console.log(eArr);

  }

 


  listOfParentData: ParentItemData[] = [];
  listOfChildrenData: ChildrenItemData[] = [];

  constructor() { }
  ngOnInit(): void {
    for (let i = 0; i < 3; ++i) {
      this.listOfParentData.push({
        key: i,
        day: '01',
        month: 'Novembro',
        year: '2020',
        onePay: '7.500.00',
        paid: '6.500.00',
        code: '003/555',
        expand: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenData.push({
        key: i,
        name: 'KG Travel',
        description: 'This is production name production name production name',
        onePayDay: '2.500.00',
        paidDay: '2.500.00',
        code: '003/555'
      });
    }
  }
}