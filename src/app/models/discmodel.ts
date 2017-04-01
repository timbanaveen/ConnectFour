import { GridValueTypes } from '../constants/gridvaluetypes';

export interface DiscModel {
    value; // color of disc
    bottomCount; // stores the count of same color disc on bottom
    leftCount; // stores the count of same color disc on left
    rightCount; // stores the count of same color disc on right
    topLeftCount; // stores the count of same color disc on top-left
    topRightCount; // stores the count of same color disc on top-right
    bottomLeftCount; // stores the count of same color disc on bottom-left
    bottomRightCount; // stores the count of same color disc on bottom-right
}
