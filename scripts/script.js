const formElement = document.getElementById("form");

    formElement.addEventListener("submit", event => {
      event.preventDefault();

      let name = document.getElementById("name");
      let email = document.getElementById("email");
      let contact = document.getElementById("contact");
      let subject = document.getElementById("sub");
      let message = document.getElementById("message");

      if(name.value == "" || email.value == "" || contact.value == "" || subject.value == "" || message.value == "" ){
        alert('You must enter values in all the fields!');}
      
      else{
        alert('Form successfully submitted.');
      }

      name.value = "";
      email.value = "";
      contact.value = "";
      subject.value = "";
      message.value = "";
      });
