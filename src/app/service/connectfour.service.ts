import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { DiscTypes } from '../constants/disctypes.enum';
import { PlayerColors } from '../constants/playercolors';
import { DiscModel } from '../models/discmodel';

import { DiscService } from './disc.service';

@Injectable()
export class ConnectFourService {
    private _discService;
    private discAddedSource = new Subject<String>();
    private gridStateChangedSource = new Subject<any>();

    // Observables to utilizing components/services.
    discAdded$ = this.discAddedSource.asObservable();
    gridStateChanged$ = this.gridStateChangedSource.asObservable();

    constructor (
        discService: DiscService
    ) {
        this._discService = discService;
    }

    /**
     * Updates the Disc data which holds the count of same neighbor discs.
     * @param gridState
     * @param rowIdx
     * @param colIdx
     * @param disc
     */
    private updateDiscData(gridState: DiscModel[][], rowIdx, colIdx, disc: DiscModel) {
        let isWon;

        const nextLeft = idx => [idx[0], idx[1] - 1];
        const nextRight = idx => [idx[0], idx[1] + 1];
        const nextBottom = idx => [idx[0] + 1, idx[1]];
        const nextTopLeft = idx => [idx[0] - 1, idx[1] - 1];
        const nextTopRight = idx => [idx[0] - 1, idx[1] + 1];
        const nextBottomLeft = idx => [idx[0] + 1, idx[1] - 1];
        const nextBottomRight = idx => [idx[0] + 1, idx[1] + 1];

        const isInRange = idx => {
            if (idx[0] >= 0 && idx[0] < gridState.length
                && idx[1] >= 0 && idx[1] < gridState[0].length) {
                return true;
            }
            return false;
        };

        function getSameLast(coords, next) {
            let lastCoords = coords,
                prevCoords = coords;

            lastCoords = next(coords);

            while (isInRange(lastCoords) && gridState[lastCoords[0]][lastCoords[1]].type === disc.type) {
                prevCoords = lastCoords;
                lastCoords = next(lastCoords);
            }

            return prevCoords;
        }

        function updateCount(next, prop, coords) {
            const i = coords[0];
            const j = coords[1];

            if (!isInRange(coords)) {
                return 0;
            }

            if (gridState[i][j].type === DiscTypes.Blank) {
                return 0;
            }

            if (gridState[i][j].type !== disc.type) {
                return 0;
            }

            gridState[i][j][prop] = 1 + updateCount(next, prop, next(coords));

            if (gridState[i][j][prop] >= 4) {
                isWon = true;
            }

            return gridState[i][j][prop];
        };

        // updateCount(nextLeft, 'leftCount', getSameLast([rowIdx, colIdx], nextRight));
        updateCount(nextRight, 'rightCount', getSameLast([rowIdx, colIdx], nextLeft));
        updateCount(nextBottom, 'bottomCount', [rowIdx, colIdx]);
        updateCount(nextTopLeft, 'topLeftCount', getSameLast([rowIdx, colIdx], nextBottomRight));
        updateCount(nextTopRight, 'topRightCount', getSameLast([rowIdx, colIdx], nextBottomLeft));
        // updateCount(nextBottomLeft, 'bottomLeftCount', getSameLast([rowIdx, colIdx], nextTopRight));
        // updateCount(nextBottomRight, 'bottomRightCount', getSameLast([rowIdx, colIdx], nextTopLeft));

        if (isWon) {
            this.discAddedSource.next('Won');
        }
    }

    /**
     * Adds new disc to grid.
     * @param colIdx Column-Index
     * @param discColor Disc Color of new disc
     * @param currentState Current state of grid
     */
    public addDisc(colIdx, discColor, currentState: DiscModel[][]) {
        // Check edge cases
        if (colIdx > currentState[0].length - 1
            || colIdx < 0) {
            return false;
        }

        // Check if column is already full
        if (currentState[0][colIdx].type !== DiscTypes.Blank) {
            return false;
        }

        // Get insertion point
        let insertRowIdx = 0;
        while ( insertRowIdx < currentState.length
                && currentState[insertRowIdx][colIdx].type === DiscTypes.Blank ) {
            insertRowIdx++;
        }
        insertRowIdx--;

        // Add new disc.
        currentState[insertRowIdx][colIdx] = this._discService.getDisc(PlayerColors[discColor]);

        this.updateDiscData(currentState, insertRowIdx, colIdx, currentState[insertRowIdx][colIdx]);

        // Notify subscribers.
        this.gridStateChangedSource.next({
            idx: colIdx,
            val: PlayerColors[discColor]
        });
        this.discAddedSource.next();

        return true;
    }
}
