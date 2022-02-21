import React from 'react'
import CookieConsent from "react-cookie-consent";

export default function CookiesScreen() {
  return (
    <div>
       <CookieConsent
  debug={true}
  location="bottom"
  style={{ background: '#f83b0b',textAlign:"left"}}
  buttonStyle={{color:'#000', background:"#fff",fontSize:"14px"}}
  buttonText="I Understand!"
  cookieName='BUZZ'
  expires={365}
>
  This site uses cookies.see our <a href="/privacy"> Privacy Policy </a> for more.
</CookieConsent>
    </div>
  )
}
