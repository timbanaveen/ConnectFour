import { Injectable } from '@angular/core';

import { DiscTypes } from '../constants/disctypes.enum';
import { DiscModel } from '../models/discmodel';

@Injectable()
export class DiscService {

    constructor() { }

    getDisc(discType: DiscTypes): DiscModel {
        let disc;

        switch (discType) {
            case DiscTypes.Blank:
                disc = this.getBlankDisc();
                break;
            case DiscTypes.Red:
                disc = this.getRedDisc();
                break;
            case DiscTypes.Green:
                disc = this.getGreenDisc();
                break;
            default:
                disc = this.getBlankDisc();
                break;
        }

        return disc;
    }

    // Returns new blank disc.
    private getBlankDisc(): DiscModel {
        return {
            type: DiscTypes.Blank,
            leftCount: 0,
            rightCount: 0,
            bottomCount: 0,
            topLeftCount: 0,
            topRightCount: 0,
            bottomLeftCount: 0,
            bottomRightCount: 0
        };
    }

    // Returns new red disc.
    private getRedDisc(): DiscModel {
        return {
            type: DiscTypes.Red,
            leftCount: 0,
            rightCount: 0,
            bottomCount: 0,
            topLeftCount: 0,
            topRightCount: 0,
            bottomLeftCount: 0,
            bottomRightCount: 0
        };
    }

    // Returns new red disc.
    private getGreenDisc(): DiscModel {
        return {
            type: DiscTypes.Green,
            leftCount: 0,
            rightCount: 0,
            bottomCount: 0,
            topLeftCount: 0,
            topRightCount: 0,
            bottomLeftCount: 0,
            bottomRightCount: 0
        };
    }

}
