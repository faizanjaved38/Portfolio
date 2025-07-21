import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from './portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private url = 'http://localhost:5200';
  portfolio$ = signal<any[]>([]);
  portfolioData$ = signal<any>({} as any);

  constructor(private httpClient: HttpClient) { }

  getPortfolio(): Observable<Portfolio[]> {
    return this.httpClient.get<Portfolio[]>(`${this.url}/portfolio`);
  }

  // getEmployees() {
  //   this.refreshEmployees();
  //   // return this.portfolio$();
  // }

  getEmployee(id: string) {
    this.httpClient.get<any>(`${this.url}/portfolio/${id}`).subscribe(portfolioData => {
      this.portfolioData$.set(portfolioData);
      return this.portfolioData$();
    });
  }

  createEmployee(portfolioData: any) {
    return this.httpClient.post(`${this.url}/portfolio`, portfolioData, { responseType: 'text' });
  }

  updateEmployee(id: string, portfolioData: any) {
    return this.httpClient.put(`${this.url}/portfolio/${id}`, portfolioData, { responseType: 'text' });
  }

  deleteEmployee(id: string) {
    return this.httpClient.delete(`${this.url}/portfolio/${id}`, { responseType: 'text' });
  }
   portfolio = {
    "name": "Faizan Javed",
    "title": "Software Developer",
    "phone": "+923377224350",
    "email": "faizanjaved38@gmail.com",
    "linkedin": "https://www.linkedin.com/in/faizan-javed-1a669311b",
    "location": "Faisalabad, Pakistan",
    "skills": {
      "primary": ["Angular", "Angular Js", "React Js", "GitHub", "JavaScript", "TypeScript", "Bootstrap", "CSS", "HTML", "MySQL", "WordPress", "RestApi", "Tailwind", "Material UI", "RxJs", "PHP"],
      "other": ["Self-motivated & Self-confident", "Ability to take Initiative", "Good Convincing Power", "Strategic Planning", "Team Leadership", "Relationship Building", "Project Management"]
    },
    "certifications": ["OBJECTIVE", "Seeking a challenging role within an organization where my extensive professional education, proven experience, and honed skills can be optimally utilized to drive the organization's strategic initiatives. Committed to contributing significantly to the company's growth while continuously developing my own skill set. Open to both on-site and remote work arrangements to ensure flexible and effective collaboration."],
    "education": [
      {
        "degree": "B.Sc Electrical Engineering",
        "specialization": "Electronics",
        "year": "2015 - 2019",
        "university": "The University of Faisalabad"
      },
      {
        "degree": "WEB DEVELOPMENT COURSE",
        "subjects": ["HTML", "CSS", "Bootstrap", "jQuery", "WordPress", "PHP", "JavaScript"],
        "year": "2021 - 2022",
        "institution": "Wapexp college Faisalabad"
      }
    ],
    "work_experience": [
      {
        "position": "Software Developer",
        "company": "Genesis Technologies",
        "technologies": ["Angular Js", "Angular", "Phyton", "Ubuntu", "JavaScript", "Git", "React Js"],
        "start_date": "01/05/2023",
        "end_date": "Present"
      },
      {
        "position": "Angular Frontend Developer",
        "company": "The University of Faisalabad",
        "technologies": ["Angular", "GitHub", "JavaScript", "TypeScript", "RxJs", "Tailwind", "Material UI", "RestApi"],
        "start_date": "07/06/2022",
        "end_date": ""
      },
      {
        "position": "Internee Web developer",
        "company": "Softrix Technology Faisalabad",
        "technologies": ["HTML", "CSS", "Bootstrap", "PHP", "JavaScript"],
        "start_date": "21/07/2022",
        "end_date": "31/04/2023"
      },
      {
        "position": "Internship",
        "company": "Wapexp college Faisalabad",
        "technologies": ["HTML", "CSS", "Bootstrap", "jQuery", "WordPress", "PHP", "JavaScript"],
        "start_date": "01/04/2022",
        "end_date": "30/05/2022"
      }
    ]
  }
}