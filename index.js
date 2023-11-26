// code your solution here

// Defines saturdayFun function declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Defines mondayWork function expression
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  // Defines wrapAdjective function
  const wrapAdjective = function(flair = '*') {
    return function(adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    };
  };
  
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective,
  };