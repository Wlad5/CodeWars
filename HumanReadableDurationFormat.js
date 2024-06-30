function formatDuration (seconds) {
  
    // defining time constants
    const SECONDS_IN_A_MINUTE = 60;
    const SECONDS_IN_AN_HOUR  = 60 * SECONDS_IN_A_MINUTE;
    const SECONDS_IN_A_DAY    = 24 * SECONDS_IN_AN_HOUR;
    const SECONDS_IN_A_YEAR   = 365 * SECONDS_IN_A_DAY;
    
    // creating an array to store the time components
    let components = [];
    
    // making sure no negative input is given
    if (seconds < 0) return 'Invalid input'; 
    
    // returning now if the input is equal to 0
    if (seconds === 0) return 'now';
    
    // checking how many times the constants fit in the given input
    let years = Math.floor(seconds / SECONDS_IN_A_YEAR);
    seconds %= SECONDS_IN_A_YEAR;
    
    let days = Math.floor(seconds / SECONDS_IN_A_DAY);
    seconds %= SECONDS_IN_A_DAY;
    
    let hours = Math.floor(seconds / SECONDS_IN_AN_HOUR);
    seconds %= SECONDS_IN_AN_HOUR;
    
    let minutes = Math.floor(seconds / SECONDS_IN_A_MINUTE);
    seconds %= SECONDS_IN_A_MINUTE;
    
    // constructing time components
    if (years)   components.push(years   + ' '  + (years   > 1 ? 'years'   : 'year'));
    if (days)    components.push(days    + ' '  + (days    > 1 ? 'days'    : 'day'));
    if (hours)   components.push(hours   + ' '  + (hours   > 1 ? 'hours'   : 'hour'));
    if (minutes) components.push(minutes + ' '  + (minutes > 1 ? 'minutes' : 'minute'));
    if (seconds) components.push(seconds + ' '  + (seconds > 1 ? 'seconds' : 'second'));
    
    // formatting output
    let result = components.join(', ');
    let lastCommaIndex = result.lastIndexOf(', ');
    
    if (lastCommaIndex !== -1) {
      result = result.slice(0, lastCommaIndex) + ' and' + result.slice(lastCommaIndex + 1);
    }
    
    return result
  }  