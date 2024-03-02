import React from "react";
import GooglePayButton from "@google-pay/button-react";
const GooglePayButtonComponent = () => {
  // Параметри запиту платежу
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"],
          // billingAddressRequired: true,
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId",
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant",
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US",
    },
  };

  // Обробник події завантаження даних про платіж
  const onLoadPaymentData = (event) => {
    console.log("load payment data", event.detail);
  };

  // Обробник події помилки
  const onError = (event) => {
    console.error("error", event.detail);
  };

  // Повернення кнопки Google Pay з вказаними параметрами
  return (
    <GooglePayButton
      environment="TEST"
      paymentRequest={paymentRequest}
      onLoadPaymentData={(onLoadPaymentData) => {
        console.log("Payment loaded:", onLoadPaymentData);
      }}
      // onLoadPaymentData={onLoadPaymentData}
      onError={onError}
      buttonColor="black"
      buttonType="donate"
      buttonLabel="ПІДТРИМАТИ НАС ФІНАНСОВО"
      // Текст кнопки з вашого зображення
    />
  );
};
export default GooglePayButtonComponent;
