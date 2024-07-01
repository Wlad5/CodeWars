function humanReadable (seconds) {
    const HOURS   = Math.floor(seconds  / 3600);
    const MINUTES = Math.floor((seconds % 3600) / 60);
    const SECONDS = seconds % 60;
    
    let components = [];
    
    if (seconds === 0) {
      
      return '00:00:00'
    
    } else {
    
      components.push(HOURS.toFixed(0).padStart(2, '0'));
      components.push(MINUTES.toFixed(0).padStart(2, '0'));
      components.push(SECONDS.toFixed(0).padStart(2, '0'));
      
      return components.join(':');
    }
}