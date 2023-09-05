const calculateWeightLostInAMonth = (cycling, running, swimming, extraCalorieInTake) => {
   let weightLostInAMonth = 0;

   const cyclingCaloriesBurned = 300;
   const swimmingCaloriesBurned = 200;
   const runningCaloriesBurned = 500;

   const caloriesBurnedWeekly = (cyclingCaloriesBurned + swimmingCaloriesBurned + runningCaloriesBurned) * 2;
   
   const caloriesBurnedMonthly = caloriesBurnedWeekly * 4;

   const extraCalorieInTakeMonthly = extraCalorieInTake * 30;

   const netCaloriesBurnedMonthly = caloriesBurnedMonthly - extraCalorieInTakeMonthly;

   weightLostInAMonth = netCaloriesBurnedMonthly / 7700; // Assuming 7700 calories are approximately equal to 1 kg of weight loss

   console.log(`Sam can lose ${weightLostInAMonth} kilograms in a month.`);

   return weightLostInAMonth;
}

module.exports = calculateWeightLostInAMonth;
