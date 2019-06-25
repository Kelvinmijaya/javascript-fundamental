try {

  console.log('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  console.log('End of try (never reached)');  // (2)

} catch (err) {

  console.log(`Error has occurred!`); // (3) <--

}

console.log("...Then the execution continues");