import { SVGProps, ComponentRef } from "react";

const CheckMarkIcon = (props: SVGProps<ComponentRef<"svg">>) => {
  return (
    <svg
      {...props}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_123)">
        <path
          d="M10.9929 20.1535C5.93341 20.1535 1.83215 16.0522 1.83215 10.9928C1.83215 5.93329 5.93341 1.83203 10.9929 1.83203C16.0523 1.83203 20.1536 5.93329 20.1536 10.9928C20.1536 16.0522 16.0523 20.1535 10.9929 20.1535ZM10.0796 14.657L16.5562 8.1795L15.2609 6.88417L10.0796 12.0664L7.48799 9.47482L6.19266 10.7702L10.0796 14.657Z"
          fill="#29C7C7"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_123">
          <rect width="21.9857" height="21.9857" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { CheckMarkIcon };
