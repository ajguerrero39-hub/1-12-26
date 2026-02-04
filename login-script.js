
    console.log("password is: lasagna");
    //when button is clicked, get username and password values
   
    document.addEventListener('submit', function (event){
      event.preventDefault() //prevent form from submitting normally
      console.log('form behavior prevented');

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      console.log('username + pwd:', username + ". " + password);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
   //sessionStorage.setItem('loginTimeStamp', new Date().toISOString());
   //sessionStorage.setItem('loginAttempts', (parseInt(sessionStorage.getItem('loginAttempts') || 0) + 1).toString());

    console.log('session Username:', username);
    console.log('session Password:', password);

    window.location.assign("content.html");
    })