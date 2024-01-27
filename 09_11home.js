function displayPrototypeChain(obj) {
    let currentObject = obj;
  
    while (currentObject !== null) {
        console.log(currentObject);
        currentObject = Object.getPrototypeOf(currentObject);
    }
  
    process.exit();
  }
  
