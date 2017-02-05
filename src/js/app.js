let contactFormContents = {
  name: "",
  email: "",
  message: ""
}

function listeners() {
  const introPhoto = document.querySelector( ".intro-pic" );
  const portfolioPhoto = document.querySelectorAll( ".item" );

  introPhoto.addEventListener( 'mouseover', function () {
    introPhoto.classList.remove( "scanlines" );
  });

  introPhoto.addEventListener( 'mouseout', function () {
    introPhoto.classList.add( "scanlines" );
  });

  portfolioPhoto.forEach(( item ) => {
    item.addEventListener( 'mouseover', () => {
      item.classList.remove( 'scanlines' );
    });
    item.addEventListener( 'mouseout', () => {
      item.classList.add( 'scanlines' );
    });
  });

  //  document.querySelector(".chatbot-name-next").onclick = ((e) => {
  //     contactFormContents.name = document.querySelector(".chatbot-name").value;
  //     console.log(contactFormContents.name);
  //     console.log(contactFormContents);
  //     document.querySelector(".bot-email").className = "bot-email";
  //     document.querySelector(".bot-name").className = "bot-name hide-me";
  //  });

  //  document.querySelector(".chatbot-email-next").onclick = ((e) => {

  //     contactFormContents.email = document.querySelector(".chatbot-email").value;
  //     console.log(contactFormContents.email);
  //     console.log(contactFormContents);
  //     document.querySelector(".bot-message").className = "bot-message";
  //     document.querySelector(".bot-email").className = "bot-email hide-me";
  //  });

  //  document.querySelector(".chatbot-text-next").onclick = ((e) => {

  //     contactFormContents.message = document.querySelector(".chatbot-message").value;
  //     console.log(contactFormContents.message);
  //     console.log(contactFormContents);
  //     if (contactFormContents.message != null) {
  //        textShove();
  //     } else {
  //        return;
  //     }
  //  });
};



function textShove() {
  document.querySelector( ".sender-name" ).value = contactFormContents.name;
  document.querySelector( ".sender-email" ).value = contactFormContents.email;
  document.querySelector( ".sender-message" ).value = contactFormContents.message;
};


function init() {
  // initialize accessory things here.

}

function fakeMessageBot() {
  const cannedMessages = {
    greeting: "hey",
    name: "name?",
    email: "email?",
    message: "message?",
    thanks: "thanks"
  };
}


document.addEventListener( 'DOMContentLoaded', function () {
  listeners();

});