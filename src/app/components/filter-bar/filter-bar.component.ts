import { Component, OnInit } from '@angular/core';
import {coin} from './coins-table.component'



@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {
  coins: Coin[] = [];
  filteredCoins: Coin[] = [];

  searchText = '';

  constructor() { }

  searchItem() {
    this.coins = this.coins.filter((coin) => 
    coin.name.toLowerCase().includes(this.searchText.toLowerCase())) ||
    coin.symbol.toLowerCase().includes(this.searchText.toLowerCase());
  }

  ngOnInit(): void {
  }

}
