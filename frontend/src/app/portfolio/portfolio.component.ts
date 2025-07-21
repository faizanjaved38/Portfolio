import { Component } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from './portfolio';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavbarComponent,HomeComponent,FooterComponent],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  portfolio: Portfolio[] | undefined;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    // this.fetchPortfolioData();
  }

  private fetchPortfolioData(): void {
    this.portfolioService.getPortfolio().subscribe(portfolio => {
      this.portfolio = portfolio;
      console.log(this.portfolio, "portfolio");

    });
  }
}
