import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iClientsDoctorData } from './IClientsDoctor';

@Component({
  selector: 'app-list-clients-doctor',
  templateUrl: './list-clients-doctor.component.html',
  styleUrls: ['./list-clients-doctor.component.scss']
})
export class ListClientsDoctorComponent implements OnInit {

  editCache: { [key: string]: { edit: boolean; data: iClientsDoctorData } } = {};
  listOfData: iClientsDoctorData[] = [];

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: `${i}`,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`
      });
    }
    this.listOfData = data;
    this.updateEditCache();
  }

  redirectTo(id: string) {
    this.router.navigate(['/cardClient', id])
  }

  constructor(private router: Router) { }
}
