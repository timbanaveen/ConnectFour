import { TestBed, inject } from '@angular/core/testing';

import { ConnectFourService } from './connectfour.service';
import { DiscService } from './disc.service';
import { DiscModel } from '../models/discmodel';
import { DiscTypes } from '../constants/disctypes.enum';

describe('ConnectFourService', () => {
    let gridState: DiscModel[][];
    let discService: DiscService;
    let rowCount;
    let colCount;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ConnectFourService,
                DiscService
            ]
        });

        rowCount = 6;
        colCount = 7;
        discService = new DiscService();

        gridState = [];
        for (let i = 0; i < rowCount; i++) {
            gridState[i] = [];
            for (let j = 0; j < colCount; j++) {
                gridState[i][j] = discService.getDisc(DiscTypes.Blank);
            }
        }
    });

    it('should create service', inject([ConnectFourService], (service: ConnectFourService) => {
        expect(service).toBeTruthy();
    }));

    it('should add disc', inject([ConnectFourService], (service: ConnectFourService) => {
        expect(service.addDisc(0, 0, gridState)).toBeTruthy();
    }));

    it('should not add disc', inject([ConnectFourService], (service: ConnectFourService) => {
        for (let i = 0; i < rowCount; i++) {
            gridState[i][0] = discService.getDisc(DiscTypes.Green);
        }

        expect(service.addDisc(0, 0, gridState)).toBeFalsy();
    }));

    it('should update data of disc correctly', inject([ConnectFourService], (service: ConnectFourService) => {
        expect(service.addDisc(0, 'green', gridState)).toBeTruthy();
        expect(service.addDisc(0, 'green', gridState)).toBeTruthy();
        expect(service.addDisc(1, 'red', gridState)).toBeTruthy();
        expect(service.addDisc(2, 'green', gridState)).toBeTruthy();

        expect(service.addDisc(1, 'green', gridState)).toBeTruthy();

        const topDisc = gridState[rowCount - 2][0];

        expect(topDisc.bottomCount).toEqual(2);
        expect(topDisc.rightCount).toEqual(2);
        expect(topDisc.topLeftCount).toEqual(1);
        expect(topDisc.topRightCount).toEqual(1);
    }));

});
