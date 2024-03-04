import React from "react";
import dynamic from "next/dynamic";

const DynamicGooglePayButton = dynamic(
  () =>
    import("@google-pay/button-react").catch(() => ({
      default: () => <div>Модуль не знайдено</div>,
    })),
  { ssr: false }
);

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
    <DynamicGooglePayButton
      environment="TEST"
      paymentRequest={paymentRequest}
      onLoadPaymentData={onLoadPaymentData}
      onError={onError}
      buttonColor="black"
      buttonType="donate"
      buttonLabel="ПІДТРИМАТИ НАС ФІНАНСОВО"
    />
  );
};

export default GooglePayButtonComponent;
