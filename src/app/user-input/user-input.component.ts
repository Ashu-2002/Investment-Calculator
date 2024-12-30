import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal<number>(0);
  enteredAnnualInvestment = signal<number>(0);
  enteredExpectedReturn = signal<number>(5);
  enteredDuration = signal<number>(10);

  constructor(private investmentResultsService: InvestmentResultsService){}

  onSubmit(){
    this.investmentResultsService.calculateInvestmentResults({
      initialInvestment: this.enteredInitialInvestment(),
      annualInvestment: this.enteredAnnualInvestment(),
      expectedReturn: this.enteredExpectedReturn(),
      duration: this.enteredDuration(),
    })
  }
}
