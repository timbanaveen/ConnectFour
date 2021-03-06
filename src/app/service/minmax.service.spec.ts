import { TestBed, inject } from '@angular/core/testing';

import { MinmaxService } from './minmax.service';
import { ConnectFourService } from './connectfour.service';
import { DiscService } from './disc.service';

describe('MinmaxService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MinmaxService,
                ConnectFourService,
                DiscService
            ]
        });
    });

    it('should create service', inject([MinmaxService], (service: MinmaxService) => {
        expect(service).toBeTruthy();
    }));

    it('should get correct column index', inject([MinmaxService], (service: MinmaxService) => {
        const data = JSON.parse('[[2,0,0,0,0,0,0],[1,0,0,0,0,0,0],[2,0,1,0,0,0,0],[1,2,2,0,0,0,0],[1,1,2,1,0,0,0],[1,2,2,1,0,0,0]]');

        service.initMinMax();

        service.data = data;
        service.filledIndex = [6, 3, 4, 2, 0, 0, 0];

        expect(service.getBestcolumn()).toEqual(1);
    }));
});
