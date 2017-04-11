import { TestBed, inject } from '@angular/core/testing';

import { DiscService } from './disc.service';
import { DiscModel } from '../models/discmodel';
import { DiscTypes } from '../constants/disctypes.enum';

describe('DiscService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DiscService]
        });
    });

    it('should create service', inject([DiscService], (service: DiscService) => {
        expect(service).toBeTruthy();
    }));

    it('should return correct disc', inject([DiscService], (service: DiscService) => {
        const disc: DiscModel = {
            type: DiscTypes.Blank,
            leftCount: 0,
            rightCount: 0,
            bottomCount: 0,
            topLeftCount: 0,
            topRightCount: 0,
            bottomLeftCount: 0,
            bottomRightCount: 0
        };

        expect(service.getDisc(DiscTypes.Blank)).toEqual(disc);

        disc.type = DiscTypes.Green;
        expect(service.getDisc(DiscTypes.Green)).toEqual(disc);

        disc.type = DiscTypes.Red;
        expect(service.getDisc(DiscTypes.Red)).toEqual(disc);
    }));

});
