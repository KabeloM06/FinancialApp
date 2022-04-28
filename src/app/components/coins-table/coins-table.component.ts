import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change: number;
  total_volume: number;
}

@Component({
  selector: 'app-coins-table',
  templateUrl: './coins-table.component.html',
  styleUrls: ['./coins-table.component.css']
})
export class CoinsTableComponent implements OnInit {

  coins: Coin[] | undefined;
  titles: string[] = [
    '#',
    'Coin',
    'Price',
    'Price Change',
    '24hr Volume',
  ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .subscribe((res) => {
      console.log(res);
    },
    (error) => console.log(error))
  };

}
