import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FirestoreService } from '../../services/firestore.service';

interface DataItem {
  userName: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-welcome',
  imports: [FormsModule, NzButtonModule, NzDropDownModule, NzIconModule, NzInputModule, NzTableModule],
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [];
  listOfDisplayData: DataItem[] = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.loadData();
  }
  //ini untuk memanggil ke firestore.servise
  loadData(): void {
    this.firestoreService.getCollection<DataItem>('users').subscribe((data) => {
      this.listOfData = data;
      this.listOfDisplayData = [...this.listOfData];
    });
  }

  reset(): void {
    this.searchValue = '';
  }
}
