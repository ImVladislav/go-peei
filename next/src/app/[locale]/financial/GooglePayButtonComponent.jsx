import React from "react";
import dynamic from "next/dynamic";

const DynamicGooglePayButton = dynamic(
  () =>
    import("@google-pay/button-react").catch(() => ({
      default: () => <div>Модуль не знайдено</div>,
    })),
  { ssr: false }
);

const GooglePayButtonComponent = ({ onSuccess, onError }) => {
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
    onSuccess(); // Викликати у разі успішного платежу
  };

  // Обробник події помилки
  const handleError = (event) => {
    console.error("error", event.detail);
    onError(); // Викликати у разі помилки платежу
  };
  // Повернення кнопки Google Pay з вказаними параметрами
  return (
    <DynamicGooglePayButton
      environment="TEST"
      paymentRequest={paymentRequest}
      onLoadPaymentData={onLoadPaymentData}
      onError={handleError} // використовуйте змінну handleError замість onError
      buttonColor="black"
      buttonType="donate"
      buttonLabel="ПІДТРИМАТИ НАС ФІНАНСОВО"
    />
  );
};

export default GooglePayButtonComponent;
