// Code your solution in this file.
function lowerCaseDrivers(array){
  const lowerCaseDrivers = array.map(element => element.toLowerCase() );
        return lowerCaseDrivers;
}

function nameToAttributes(array){
    const driverArray = [];

      for (const element of array) {
          const obj = {};
         obj.firstName = element.split(" ")[0];
         obj.lastName = element.split(" ")[1];
        // obj[lastName] =
          driverArray.push(obj);

      }
      return driverArray;
}

function attributesToPhrase(object) {
    const list = [];
    for (const key of object) {
      // console.log(key);
      list.push(`${key.name} is from ${key.hometown}`);
    }
    return list;
}
