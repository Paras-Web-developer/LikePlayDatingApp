export const LikeFeedIcon = ({ val }) => {
  const like =
    val === true ? (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M21.6499 10.0302C21.2599 9.47022 20.5699 9.15022 19.7799 9.15022H15.6799C15.4099 9.15022 15.1599 9.04022 14.9899 8.84022C14.8099 8.64022 14.7399 8.36022 14.7799 8.07022L15.2899 4.79022C15.5099 3.81022 14.8599 2.71022 13.8799 2.38022C12.9699 2.04022 11.8999 2.50022 11.4699 3.15022L7.24988 9.42022C7.17136 9.55109 7.12988 9.70084 7.12988 9.85346V18.2481C7.12988 18.3839 7.18384 18.5142 7.27988 18.6102L10.4499 21.0602C10.8699 21.4802 11.8199 21.7102 12.4899 21.7102H16.3899C17.7299 21.7102 19.0799 20.7002 19.3799 19.4702L21.8399 11.9802C22.0999 11.2702 22.0299 10.5802 21.6499 10.0302Z"
          fill="#A8580F"
        />
        <path
          d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z"
          fill="#A8580F"
        />
      </svg>
    ) : (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2804 22.1H12.4804C11.9204 22.1 10.7004 21.93 10.0504 21.28L7.02035 18.94L7.94035 17.75L11.0404 20.15C11.2904 20.39 11.9204 20.59 12.4804 20.59H16.2804C17.1804 20.59 18.1504 19.87 18.3504 19.06L20.7704 11.71C20.9304 11.27 20.9004 10.87 20.6904 10.58C20.4704 10.27 20.0704 10.09 19.5804 10.09H15.5804C15.0604 10.09 14.5804 9.86999 14.2504 9.48999C13.9104 9.09999 13.7604 8.57999 13.8404 8.03999L14.3404 4.82999C14.4604 4.26999 14.0804 3.63999 13.5404 3.45999C13.0504 3.27999 12.4204 3.53999 12.2004 3.85999L8.10035 9.95999L6.86035 9.12999L10.9604 3.02999C11.5904 2.08999 12.9704 1.63999 14.0504 2.04999C15.3004 2.45999 16.1004 3.83999 15.8204 5.11999L15.3304 8.26999C15.3204 8.33999 15.3204 8.43999 15.3904 8.51999C15.4404 8.56999 15.5104 8.59999 15.5904 8.59999H19.5904C20.5704 8.59999 21.4204 9.00999 21.9204 9.71999C22.4104 10.41 22.5104 11.32 22.1904 12.2L19.8004 19.48C19.4304 20.93 17.8904 22.1 16.2804 22.1Z"
          fill="#7B7F91"
        />
        <path
          d="M5.37988 20.9999H4.37988C2.52988 20.9999 1.62988 20.1299 1.62988 18.3499V8.5499C1.62988 6.7699 2.52988 5.8999 4.37988 5.8999H5.37988C7.22988 5.8999 8.12988 6.7699 8.12988 8.5499V18.3499C8.12988 20.1299 7.22988 20.9999 5.37988 20.9999ZM4.37988 7.3999C3.28988 7.3999 3.12988 7.6599 3.12988 8.5499V18.3499C3.12988 19.2399 3.28988 19.4999 4.37988 19.4999H5.37988C6.46988 19.4999 6.62988 19.2399 6.62988 18.3499V8.5499C6.62988 7.6599 6.46988 7.3999 5.37988 7.3999H4.37988Z"
          fill="#7B7F91"
        />
      </svg>
    );
  return like;
};

export const HeartFeedIcon = ({ val }) => {
  let heart =
    val === true ? (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 8.6901C22 9.8801 21.81 10.9801 21.48 12.0001H2.52C2.19 10.9801 2 9.8801 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.9801 12 5.3301C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901Z"
          fill="url(#paint0_linear_1143_2710)"
        />
        <path
          d="M21.4795 12C19.8995 17 15.0295 19.99 12.6195 20.81C12.2795 20.93 11.7195 20.93 11.3795 20.81C8.96953 19.99 4.09953 17 2.51953 12H21.4795Z"
          fill="url(#paint1_linear_1143_2710)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1143_2710"
            x1="22"
            y1="3.1001"
            x2="1.56025"
            y2="4.26162"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF483C" />
            <stop offset="1" stop-color="#FF2C5A" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1143_2710"
            x1="21.4795"
            y1="12"
            x2="2.09633"
            y2="13.0442"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF483C" />
            <stop offset="1" stop-color="#FF2C5A" />
          </linearGradient>
        </defs>
      </svg>
    ) : (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 19.6501C10.69 19.6501 10.39 19.6101 10.14 19.5201C6.32 18.2101 0.25 13.5601 0.25 6.6901C0.25 3.1901 3.08 0.350098 6.56 0.350098C8.25 0.350098 9.83 1.0101 11 2.1901C12.17 1.0101 13.75 0.350098 15.44 0.350098C18.92 0.350098 21.75 3.2001 21.75 6.6901C21.75 13.5701 15.68 18.2101 11.86 19.5201C11.61 19.6101 11.31 19.6501 11 19.6501ZM6.56 1.8501C3.91 1.8501 1.75 4.0201 1.75 6.6901C1.75 13.5201 8.32 17.3201 10.63 18.1101C10.81 18.1701 11.2 18.1701 11.38 18.1101C13.68 17.3201 20.26 13.5301 20.26 6.6901C20.26 4.0201 18.1 1.8501 15.45 1.8501C13.93 1.8501 12.52 2.5601 11.61 3.7901C11.33 4.1701 10.69 4.1701 10.41 3.7901C9.48 2.5501 8.08 1.8501 6.56 1.8501Z"
          fill="#7B7F91"
        />
      </svg>
    );

  return heart;
};

export const TagFeedIcon = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M4.17038 15.2998L8.70038 19.8298C10.5604 21.6898 13.5804 21.6898 15.4504 19.8298L19.8404 15.4398C21.7004 13.5798 21.7004 10.5598 19.8404 8.6898L15.3004 4.1698C14.3504 3.2198 13.0404 2.7098 11.7004 2.7798L6.70038 3.0198C4.70038 3.1098 3.11038 4.6998 3.01038 6.6898L2.77038 11.6898C2.71038 13.0398 3.22038 14.3498 4.17038 15.2998Z"
          fill="#A8580F"
        />
        <path
          d="M9.50012 12.3801C11.0907 12.3801 12.3801 11.0907 12.3801 9.50012C12.3801 7.90954 11.0907 6.62012 9.50012 6.62012C7.90954 6.62012 6.62012 7.90954 6.62012 9.50012C6.62012 11.0907 7.90954 12.3801 9.50012 12.3801Z"
          fill="#A8580F"
        />
      </svg>
    </>
  );
};

export const CommentFeedIcon = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z"
          fill="#A8580F"
        />
        <path
          d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
          fill="#A8580F"
        />
      </svg>
    </>
  );
};

export const StarFeedIcon = ({ val }) => {
  let star =
    val === true ? (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.2902 2.13998L15.2202 5.92998C15.2102 6.44998 15.5403 7.13998 15.9603 7.44998L18.4403 9.32998C20.0303 10.53 19.7703 12 17.8703 12.6L14.6403 13.61C14.1003 13.78 13.5303 14.37 13.3903 14.92L12.6203 17.86C12.0103 20.18 10.4902 20.41 9.23025 18.37L7.47024 15.52C7.15024 15 6.39024 14.61 5.79024 14.64L2.45028 14.81C0.0602772 14.93 -0.619732 13.55 0.940268 11.73L2.92025 9.42998C3.29025 8.99998 3.46024 8.19999 3.29024 7.65999L2.28029 4.42998C1.69029 2.52998 2.75028 1.47999 4.64028 2.09999L7.59029 3.06999C8.09029 3.22999 8.84027 3.11998 9.26027 2.80998L12.3403 0.589979C14.0003 -0.610021 15.3302 0.0899825 15.2902 2.13998Z"
          fill="#FFB800"
        />
      </svg>
    ) : (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0103 22.5C12.4103 22.5 11.4803 22.21 10.5903 20.75L8.83027 17.9C8.66027 17.62 8.14026 17.35 7.82026 17.37L4.48024 17.54C2.48024 17.64 1.78028 16.81 1.53028 16.31C1.28028 15.81 1.06024 14.74 2.36024 13.22L4.34028 10.92C4.54028 10.68 4.65025 10.16 4.56025 9.86002L3.55024 6.63004C3.04024 5.01004 3.61025 4.14004 3.99025 3.76004C4.37024 3.38004 5.25025 2.83003 6.87025 3.37003L9.82026 4.34003C10.0903 4.43003 10.5903 4.35003 10.8203 4.19003L13.9003 1.97003C15.3103 0.950032 16.3302 1.22003 16.8002 1.47003C17.2702 1.72003 18.0702 2.40005 18.0402 4.14005L17.9702 7.93002C17.9602 8.21002 18.1902 8.67003 18.4102 8.84003L20.8903 10.72C22.2403 11.75 22.2903 12.78 22.2003 13.31C22.1103 13.84 21.7103 14.8 20.0903 15.3L16.8602 16.31C16.5602 16.4 16.1902 16.79 16.1102 17.09L15.3403 20.03C14.8303 21.96 13.8303 22.39 13.2703 22.47C13.2003 22.49 13.1103 22.5 13.0103 22.5ZM7.85023 15.87C8.71023 15.87 9.66023 16.39 10.1002 17.11L11.8602 19.96C12.3602 20.78 12.8102 21.03 13.0502 20.99C13.2802 20.96 13.6403 20.58 13.8903 19.66L14.6602 16.72C14.8702 15.92 15.6202 15.13 16.4102 14.89L19.6403 13.88C20.2603 13.69 20.6602 13.38 20.7202 13.06C20.7802 12.74 20.5002 12.32 19.9802 11.92L17.5003 10.04C16.8903 9.58004 16.4503 8.66002 16.4603 7.90002L16.5303 4.11002C16.5403 3.44002 16.3803 2.94004 16.0903 2.79004C15.8003 2.64004 15.3103 2.79002 14.7603 3.18002L11.6802 5.40002C11.0702 5.84002 10.0603 6.00004 9.33027 5.76004L6.38026 4.79004C5.76026 4.59004 5.26028 4.60002 5.03028 4.83002C4.80028 5.06002 4.78023 5.56002 4.97023 6.18002L5.98024 9.41003C6.23024 10.2 6.01023 11.27 5.47023 11.89L3.49025 14.19C2.86025 14.92 2.76025 15.43 2.87025 15.64C2.97025 15.85 3.45028 16.08 4.40028 16.03L7.74025 15.86C7.78025 15.87 7.82023 15.87 7.85023 15.87Z"
          fill="#7B7F91"
        />
        <path
          d="M21.9103 22.7502C21.7203 22.7502 21.5303 22.6802 21.3803 22.5302L18.3503 19.5002C18.0603 19.2102 18.0603 18.7302 18.3503 18.4402C18.6403 18.1502 19.1203 18.1502 19.4103 18.4402L22.4403 21.4702C22.7303 21.7602 22.7303 22.2402 22.4403 22.5302C22.2903 22.6802 22.1003 22.7502 21.9103 22.7502Z"
          fill="#7B7F91"
        />
      </svg>
    );
  return star;
};

export const CommentHeartIcon = () => {
  return (
    <svg
      width="11"
      height="10"
      viewBox="0 0 11 10"
      // fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.73 9.56C5.55 9.62 5.24 9.62 5.06 9.56C3.5 9.03 0 6.79999 0 3.01999C0 1.34999 1.34 0 3 0C3.98 0 4.84999 0.469991 5.39999 1.20999C5.93999 0.479991 6.81999 0 7.79999 0C9.45999 0 10.8 1.34999 10.8 3.01999C10.8 6.79999 7.3 9.03 5.73 9.56Z"
        // fill="url(#paint0_linear_1177_6491)"
        fill="currentColor"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1177_6491"
          x1="10.8"
          y1="-2.12245e-06"
          x2="-0.264163"
          y2="0.314595"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF483C" />
          <stop offset="1" stop-color="#FF2C5A" />
        </linearGradient>
      </defs>
    </svg>
  );
};