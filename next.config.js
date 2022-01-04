/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["sv"],
    defaultLocale: "sv",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  script: [
    {
      type: "text/javascript",
      hid: "fb-customer-chat",
      body: true,
      innerHTML: `
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "734860390568287");
      chatbox.setAttribute("attribution", "biz_inbox");
  
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };
    
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = '<https://connect.facebook.net/sv_SE/sdk/xfbml.customerchat.js>';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`,
    },
  ],
  __dangerouslyDisableSanitizersByTagID: { "fb-customer-chat": ["innerHTML"] },
};
