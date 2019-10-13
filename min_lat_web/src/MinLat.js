export class Activity{
    constructor(
        name = '',
        executionTime = null,
        deliveryTime = null,
        id = 0
    ){
        this.name = name;
        this.executionTime = executionTime;
        this.deliveryTime = deliveryTime;
        this.id = id;
    }
}

export function minimum_lateness(arr){
    arr = sortTimes(arr);
    console.log(arr);
    return arr;
}

function sortTimes(arr){
    arr.sort(function compareTimes(a, b){
        if(a.deliveryTime.hour > b.deliveryTime.hour){
            return 1;
        } else if (b.deliveryTime.hour > a.deliveryTime.hour){
            return -1;
        }else{
            if(a.deliveryTime.minute > b.deliveryTime.minute){
                return 1;
            }else{
                return -1;
            }
        }
    });
    return arr;
}