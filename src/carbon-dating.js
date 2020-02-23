const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let activNumber = parseFloat(sampleActivity);
    if (Number.isNaN(activNumber)) return (false)
    else if (typeof sampleActivity !== "string") return (false)
    else if (activNumber <= 0) return (false)
    else if (activNumber > 15) return (false)
    else  return Math.ceil((Math.log(MODERN_ACTIVITY / activNumber)) / (0.693 / HALF_LIFE_PERIOD));
};
