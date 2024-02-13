// "use client";
// import React from "react";
// // import GooglePayButton from "@google-pay/button-react";
// // import { PaymentDataRequest } from "@google-pay/button-react";
// import dynamic from "next/dynamic";

// const DynamicGooglePayButton = dynamic(
//   () => import("@google-pay/button-react"),
//   { ssr: false }
// );

// const FinancialPage = () => {
//   const paymentRequest = {
//     apiVersion: 2,
//     apiVersionMinor: 0,
//     allowedPaymentMethods: [
//       {
//         type: "CARD",
//         parameters: {
//           allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"],
//           allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
//         },
//         tokenizationSpecification: {
//           type: "PAYMENT_GATEWAY",
//           parameters: {
//             gateway: "example",
//             gatewayMerchantId: "exampleGatewayMerchantId",
//           },
//         },
//       },
//     ],
//     merchantInfo: {
//       merchantName: "Your Merchant Name",
//       merchantId: "yourMerchantId",
//     },
//     transactionInfo: {
//       totalPriceStatus: "FINAL",
//       totalPriceLabel: "Total",
//       totalPrice: "100.00",
//       currencyCode: "USD",
//       countryCode: "US",
//     },
//   };

//   const onPaymentSuccess = (paymentResult: any) => {
//     console.log("Payment success:", paymentResult);
//     // Handle successful payment
//   };

//   const onPaymentError = (error: any) => {
//     console.error("Payment error:", error);
//     // Handle payment error
//   };

//   return (
//     <div>
//       <div>page</div>
//       <DynamicGooglePayButton
//         environment="TEST"
//         paymentRequest={paymentRequest}
//         onLoadPaymentData={(paymentData) => {
//           console.log("Payment loaded:", paymentData);
//         }}
//         onPaymentSuccess={onPaymentSuccess}
//         onPaymentError={onPaymentError}
//       />
//     </div>
//   );
// };

// export default FinancialPage;
