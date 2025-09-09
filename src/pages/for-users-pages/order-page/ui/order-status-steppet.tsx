import React from "react";

interface Props {
  deliveryStatus?: string;
  status?: string;
}

const PendingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
       viewBox="0 0 24 24" strokeWidth={1.5}
       stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
  </svg>
);

const CourierIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
       viewBox="0 0 24 24" strokeWidth={1.5}
       stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const PreparingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
       viewBox="0 0 24 24" strokeWidth={1.5}
       stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
       viewBox="0 0 24 24" strokeWidth={1.5}
       stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const OrderStatusStepper = ({ status, deliveryStatus }: Props) => {
  const steps =
    deliveryStatus === "self_get"
      ? [
          { key: "pending", label: "Kutilmoqda", icon: <PendingIcon /> },
          { key: "preparing", label: "Tayyorlanmoqda", icon: <PreparingIcon /> },
          { key: "ready", label: "Tayyor", icon: <CheckIcon /> },
        ]
      : [
          { key: "pending", label: "Kutilmoqda", icon: <PendingIcon /> },
          { key: "preparing", label: "Tayyorlanmoqda", icon: <PreparingIcon /> },
          { key: "by_currier", label: "Yetkazilmoqda", icon: <CourierIcon /> },
          { key: "finished", label: "Yetib bordi", icon: <CheckIcon /> },
        ];

  const currentIndex = steps.findIndex((step) => step.key === status || step.key === deliveryStatus);

  return (
    <div className="my-4 flex items-center justify-between w-full max-w-md mx-auto">
      {steps.map((step, index) => (
        <React.Fragment key={step.key}>
          <Step active={index <= currentIndex}>{step.icon}</Step>
          {index !== steps.length - 1 && (
            <Line active={index < currentIndex} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const Step = ({ active, children }: { active?: boolean; children: React.ReactNode }) => (
  <div
    className={`flex flex-col items-center rounded-full p-1 ${
      active ? "bg-primary text-white" : "bg-gray-300 text-gray-500"
    }`}
  >
    {children}
  </div>
);

const Line = ({ active }: { active?: boolean }) => (
  <div className={`flex-1 h-0.5 mx-1 ${active ? "bg-primary" : "bg-gray-300"}`} />
);

export default OrderStatusStepper;
