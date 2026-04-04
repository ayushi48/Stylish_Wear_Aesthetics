const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: process.env.PAYPAL_MODE || "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});
// paypal.configure({
//   mode: "sandbox",
//   client_id: "Aaiq_77dOvmvg7j53TwuAOlxRTbwaijTFnHSEOKF20L0DlJBzbO1vlFo1z_zk0QsAn8S1H0IYi6KhHqB",
//   client_secret: "ENb33IKu1XK5eIEkdE1sTWLRzgTZD8jhObbaE9WcAc0tBw-JVjv9MRieWZAdM-3bWtrMq31r4hVBU7Cz",
// });

module.exports = paypal;
