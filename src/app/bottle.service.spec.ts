import { TestBed, inject } from '@angular/core/testing';
import { BottleService } from './bottle.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('BottleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BottleService],
      imports: [HttpClientModule, FormsModule, RouterTestingModule]
    });
  });

  it('should be created', inject([BottleService], (service: BottleService) => {
    expect(service).toBeTruthy();
  }));
});
