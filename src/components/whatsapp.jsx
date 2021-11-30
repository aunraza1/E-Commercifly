import React from 'react'
import Logo from "../assets/images/logo.png";
import FloatingWhatsApp from "react-floating-whatsapp";
function WhatsApp(){
return (
  <FloatingWhatsApp
    className="whatsApp-div"
    accountName="E-Commercifly"
    statusMessage="Online"
    avatar={Logo}
    phoneNumber="+923232970705"
    chatMessage={"Hello there! 🤝 \nHow can we help?"}
  />
);
}
export default WhatsApp