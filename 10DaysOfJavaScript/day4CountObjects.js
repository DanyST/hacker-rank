// https://www.hackerrank.com/challenges/js10-count-objects/problem

function getCount(objects) {
    let count = 0;
    objects.forEach(object => {
        if (object.x == object.y) {
            count++;
        }
    })
        
    return count;
}