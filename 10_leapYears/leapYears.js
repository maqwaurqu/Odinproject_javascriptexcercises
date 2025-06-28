const leapYears = function(years) {
    if (!(years%4)) {
        if (!(years%400)) {
            return true
        }
        else if ((years%400)&&(years%100)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
