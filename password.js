const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'invisible',
    name: 'value',
    message: 'Enter password'
  });
  if(response.value.length < 10){
      console.log('Password must be more than 10 letters')
  } else {
    console.log('Password entered!')
  }
  
})();