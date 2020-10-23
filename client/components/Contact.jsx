import React from "react";

const Contact = () => {
  return (
    <>
    <img className='goldBorder' src="./images/goldborders.png" />
      <div className='contactFormat'>
        <h1 className="mainHeader">Contact Info</h1>
        <h3>Email: </h3>
        <p>violanightshadeburlesque@gmail.com</p>
        <img className="viola" src="./images/floral.png" />
        <h3>Facebook & Instagram</h3>
        <a href="https://www.facebook.com/ViolaNightshade">
          <i className="fa-4x fab fa-facebook-square space"></i>
        </a>
        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fvicky_weeds%3Figshid%3D11m60p9efwm8u%26fbclid%3DIwAR0jqbFJmTwsXfCFfGeolqhcm7IAUerLsSv5j2JmiLFP-RaCA4JSa8siFEk&h=AT16ppbk6AxUnRT6DZuiJY40s_egIzyBcwqLPS_zvmL8GDKWfZ-dw4jixISEyQ9qYRy3E0g83xmbt4-J24ywWeavL4jyQNh2k90Nv7gi7pEDrSBT0kUN_5uZTIQwjPMP5KjKJA">
          <i className="fa-4x fab fa-instagram-square space"></i>
        </a>
      </div>
    </>
  );
};

export default Contact;
