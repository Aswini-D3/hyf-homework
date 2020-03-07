function getFullName(firstName, lastName, useFormalName) {
    let name1 = firstName;
    let name2 = lastName;

    if ((useFormalName = true)) {
      return "Lord "  + firstName + " " + lastName;
    } 
    else 
    {
      return firstName + " " + lastName;
    }
  }
  console.log(getFullName("Aswini", "Gundreddy"));
