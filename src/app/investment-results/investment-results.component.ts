import { Component, computed, inject } from '@angular/core';
import { InvestmentResultsService } from '../investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentResultsService = inject(InvestmentResultsService);

  results =  computed(() => this.investmentResultsService.resultData());
}
