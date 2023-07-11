import React from "react";

interface Props {
  fill: string;
}

export const BasketBall = ({ fill }: Props): JSX.Element => {
  return (
    <>
      {
        <svg
          width="25"
          height="25"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.8308 4.67582C15.8704 5.50082 17.2725 6.65498 18.7996 8.02373C20.2621 9.33623 21.8683 10.8696 23.3892 12.5258C26.3121 10.0446 28.5683 7.24457 29.7308 4.5779C28.121 3.91668 26.4294 3.47521 24.7017 3.2654C21.3446 2.85626 17.939 3.34288 14.8308 4.67582ZM32.5204 5.99665C31.1079 9.1404 28.56 12.2321 25.4267 14.8946C26.3463 16.0309 27.1798 17.2342 27.9204 18.4946C28.7746 19.9737 29.5329 21.6883 30.2017 23.4862C33.9767 22.0633 37.9454 21.3591 41.6642 21.8092C41.5692 18.6277 40.6843 15.5197 39.0892 12.7654C37.497 9.99769 35.2392 7.67113 32.5204 5.99665ZM41.5038 24.9404C38.3038 24.505 34.7225 25.1071 31.2038 26.4487C31.8079 28.4008 32.3183 30.3571 32.7308 32.1342C33.1732 34.033 33.5643 35.9434 33.9038 37.8633C36.6409 35.8324 38.7869 33.1083 40.1204 29.9717C40.8079 28.3654 41.2725 26.6696 41.5038 24.9404ZM31.0329 39.6279C30.6595 37.352 30.2113 35.089 29.6892 32.8425C29.2902 31.1191 28.8351 29.4091 28.3246 27.7154C27.4725 28.1404 26.6329 28.605 25.81 29.105C20.785 32.1633 16.7642 36.3342 15.0683 40.2237C17.6167 41.2739 20.3608 41.7644 23.1152 41.662C25.8695 41.5596 28.5697 40.8666 31.0329 39.63V39.6279ZM12.2788 38.805C14.3642 34.1654 18.9246 29.6362 24.185 26.4362C25.1975 25.8196 26.2475 25.2446 27.3267 24.7237C26.6975 23.0092 25.9933 21.405 25.2142 20.0571C24.5455 18.9218 23.7927 17.8382 22.9621 16.8154C22.2405 17.3312 21.5012 17.8218 20.7454 18.2862C15.3913 21.5737 8.95793 23.6967 3.13293 22.9925C3.22876 26.1735 4.11438 29.2807 5.71001 32.0342C7.30201 34.8026 9.55984 37.1299 12.2788 38.805ZM3.29543 19.8591C3.65794 17.1177 4.60709 14.4866 6.07822 12.1451C7.54935 9.80359 9.50789 7.80667 11.8204 6.2904C13.5017 7.58154 15.1335 8.93598 16.7121 10.3508C18.0871 11.5841 19.5392 12.9758 20.9038 14.4446C20.3204 14.8508 19.7225 15.2466 19.1079 15.6237C14.01 18.755 8.20584 20.5258 3.29543 19.8591ZM11.2017 3.00498C15.3951 0.575496 20.2658 -0.422038 25.0767 0.163315C28.5299 0.576768 31.8391 1.78989 34.7414 3.70628C37.6436 5.62268 40.059 8.18954 41.7954 11.2029C43.5362 14.2132 44.551 17.5879 44.7593 21.059C44.9677 24.53 44.3637 28.0019 42.9954 31.1987C41.0975 35.6587 37.7985 39.379 33.5975 41.7966C22.885 47.98 9.18918 44.3092 3.00376 33.5987C-3.17957 22.8862 0.489178 9.18832 11.2017 3.00498Z"
            fill={fill}
          />
        </svg>
      }
    </>
  );
};

export const Etc = ({ fill }: Props): JSX.Element => {
  return (
    <>
      {
        <svg
          width="25"
          height="25"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.7857 25.7143H25.7143V41.7857C25.7143 42.6382 25.3756 43.4558 24.7728 44.0586C24.17 44.6614 23.3525 45 22.5 45C21.6475 45 20.83 44.6614 20.2272 44.0586C19.6244 43.4558 19.2857 42.6382 19.2857 41.7857V25.7143H3.21429C2.3618 25.7143 1.54424 25.3756 0.941443 24.7728C0.338648 24.17 0 23.3525 0 22.5C0 21.6475 0.338648 20.83 0.941443 20.2272C1.54424 19.6244 2.3618 19.2857 3.21429 19.2857H19.2857V3.21429C19.2857 2.3618 19.6244 1.54424 20.2272 0.941442C20.83 0.338646 21.6475 0 22.5 0C23.3525 0 24.17 0.338646 24.7728 0.941442C25.3756 1.54424 25.7143 2.3618 25.7143 3.21429V19.2857H41.7857C42.6382 19.2857 43.4558 19.6244 44.0586 20.2272C44.6614 20.83 45 21.6475 45 22.5C45 23.3525 44.6614 24.17 44.0586 24.7728C43.4558 25.3756 42.6382 25.7143 41.7857 25.7143Z"
            fill={fill}
          />
        </svg>
      }
    </>
  );
};

export const FootBall = ({ fill }: Props): JSX.Element => {
  return (
    <>
      {
        <svg
          width="27"
          height="19"
          viewBox="0 0 42 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16667 0C1.85417 0 0 1.85417 0 4.16667V29.1667C0 30.2717 0.438987 31.3315 1.22039 32.1129C2.00179 32.8943 3.0616 33.3333 4.16667 33.3333H37.5C38.6051 33.3333 39.6649 32.8943 40.4463 32.1129C41.2277 31.3315 41.6667 30.2717 41.6667 29.1667V4.16667C41.6667 3.0616 41.2277 2.00179 40.4463 1.22039C39.6649 0.438987 38.6051 0 37.5 0H4.16667ZM4.16667 4.16667H18.75V8.60417C15.0833 9.5625 12.5 12.875 12.5 16.6667C12.5049 18.5122 13.1208 20.3041 14.2515 21.7626C15.3822 23.2212 16.964 24.2643 18.75 24.7292V29.1667H4.16667V25H10.4167V8.33333H4.16667V4.16667ZM22.9167 4.16667H37.5V8.33333H31.25V25H37.5V29.1667H22.9167V24.7292C26.5833 23.7708 29.1667 20.4583 29.1667 16.6667C29.1617 14.8212 28.5458 13.0293 27.4152 11.5707C26.2845 10.1121 24.7027 9.06899 22.9167 8.60417V4.16667ZM4.16667 12.5H6.25V20.8333H4.16667V12.5ZM35.4167 12.5H37.5V20.8333H35.4167V12.5ZM22.9167 13.0625C24.2083 13.8125 25 15.1875 25 16.6667C25 18.1458 24.2083 19.5208 22.9167 20.2708V13.0625ZM18.75 13.0625V20.2708C17.4583 19.5208 16.6667 18.1458 16.6667 16.6667C16.6667 15.1875 17.4583 13.8125 18.75 13.0625Z"
            fill={fill}
          />
        </svg>
      }
    </>
  );
};
export const Soccer = ({ fill }: Props): JSX.Element => {
  return (
    <>
      {
        <svg
          width="25"
          height="25"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3125 0C16.2951 0 12.3679 1.19131 9.02749 3.42327C5.68711 5.65524 3.08361 8.82762 1.54621 12.5392C0.00880109 16.2509 -0.393454 20.335 0.390308 24.2753C1.17407 28.2155 3.10865 31.8349 5.9494 34.6756C8.79016 37.5164 12.4095 39.4509 16.3497 40.2347C20.29 41.0185 24.3741 40.6162 28.0858 39.0788C31.7974 37.5414 34.9698 34.9379 37.2017 31.5975C39.4337 28.2571 40.625 24.3299 40.625 20.3125C40.6193 14.927 38.4774 9.76378 34.6693 5.95567C30.8612 2.14757 25.698 0.00568715 20.3125 0ZM21.875 7.69141L26.7168 4.36133C29.4889 5.47801 31.9238 7.29506 33.7832 9.63477L32.2207 14.8965C32.1816 14.8965 32.1406 14.916 32.1016 14.9297L27.6445 16.377C27.5777 16.3983 27.5124 16.4244 27.4492 16.4551L21.875 12.6211V7.69141ZM13.9141 4.36133L18.75 7.69141V12.6211L13.1719 16.4629C13.1087 16.4323 13.0434 16.4061 12.9766 16.3848L8.51954 14.9375C8.48048 14.9238 8.43946 14.9141 8.4004 14.9043L6.8379 9.64258C8.69907 7.29866 11.1375 5.47874 13.9141 4.36133ZM11.375 29.5742H5.83985C4.2196 27.055 3.29072 24.1539 3.14649 21.1621L7.44337 17.8652C7.48033 17.8816 7.51815 17.8959 7.55665 17.9082L12.0156 19.3574C12.0752 19.3754 12.1359 19.3898 12.1973 19.4004L14.3047 25.5371C14.2754 25.5723 14.2461 25.6074 14.2188 25.6445L11.4649 29.4355C11.4324 29.4801 11.4024 29.5264 11.375 29.5742ZM24.7442 36.9141C21.8403 37.6875 18.7847 37.6875 15.8809 36.9141L13.916 31.3672C13.9414 31.3359 13.9688 31.3066 13.9922 31.2734L16.7481 27.4805C16.7805 27.4366 16.8105 27.3909 16.8379 27.3438H23.7871C23.8145 27.3909 23.8445 27.4366 23.877 27.4805L26.6328 31.2734C26.6563 31.3066 26.6836 31.3359 26.709 31.3672L24.7442 36.9141ZM29.25 29.5684C29.2226 29.5205 29.1926 29.4743 29.1602 29.4297L26.4043 25.6445C26.377 25.6074 26.3477 25.5723 26.3184 25.5371L28.4258 19.4004C28.4872 19.3898 28.5478 19.3754 28.6074 19.3574L33.0664 17.9082C33.1049 17.8959 33.1427 17.8816 33.1797 17.8652L37.4766 21.1621C37.3324 24.1539 36.4035 27.055 34.7832 29.5742L29.25 29.5684Z"
            fill={fill}
          />
        </svg>
      }
    </>
  );
};

export const TableTennis = ({ fill }: Props): JSX.Element => {
  return (
    <>
      {
        <svg
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.8931 35.8423L43.594 31.5432C43.2176 31.194 42.9597 30.7359 42.8563 30.2331C42.753 29.7302 42.8092 29.2076 43.0173 28.7383C43.9314 26.775 44.4141 24.6386 44.4328 22.4731C44.445 22.3861 44.445 22.2979 44.4328 22.2109C44.4418 19.0742 43.4703 16.013 41.6541 13.4555C38.1443 8.5502 33.4927 4.57343 28.1015 1.86885C24.6816 0.194724 20.8257 -0.374107 17.0682 0.241194C13.3106 0.856496 9.83748 2.62545 7.13022 5.30289L5.37388 7.05923C2.66828 9.77676 0.882035 13.2736 0.266098 17.0586C-0.349838 20.8435 0.235487 24.7264 1.93984 28.1615L2.20198 28.6072C0.803032 30.0585 0.0147863 31.9916 0 34.0073C0.0104082 35.3982 0.389561 36.7615 1.09879 37.9581C1.80801 39.1548 2.82193 40.1418 4.03712 40.8187C5.25232 41.4956 6.6253 41.8381 8.01604 41.8112C9.40677 41.7843 10.7655 41.389 11.9536 40.6656C12.4255 41.0326 12.8449 41.4258 13.3167 41.7666C14.309 42.4565 15.3833 43.0201 16.5149 43.4443H16.7508C17.2226 43.6278 17.7207 43.7851 18.245 43.9424H18.6382C19.454 44.1519 20.2878 44.2836 21.1285 44.3356H22.7538C23.3043 44.3356 23.8286 44.3356 24.3791 44.1783H24.8247C26.1136 43.957 27.366 43.5601 28.5471 42.9987C29.0178 42.8092 29.5333 42.7603 30.0312 42.858C30.5291 42.9557 30.9879 43.1958 31.352 43.5492L35.1793 47.3764C36.8398 49.0428 39.0919 49.9851 41.4444 49.9978C43.4177 49.9767 45.3025 49.1757 46.6872 47.7696L47.6834 46.7735C49.1293 45.3345 49.9594 43.3899 49.9986 41.3503C50.0377 39.3107 49.2827 37.3357 47.8931 35.8423ZM7.78557 36.6811C7.26711 36.6811 6.76029 36.5274 6.3292 36.2393C5.89811 35.9513 5.56212 35.5419 5.36371 35.0629C5.1653 34.5839 5.11339 34.0568 5.21454 33.5483C5.31569 33.0398 5.56535 32.5727 5.93196 32.2061C6.29857 31.8395 6.76566 31.5898 7.27416 31.4887C7.78266 31.3875 8.30974 31.4394 8.78874 31.6378C9.26774 31.8362 9.67715 32.1722 9.96519 32.6033C10.2532 33.0344 10.407 33.5412 10.407 34.0597C10.407 34.7549 10.1308 35.4217 9.63919 35.9133C9.14758 36.4049 8.48081 36.6811 7.78557 36.6811ZM15.9119 37.0481L15.2304 36.5238C15.5033 35.7307 15.645 34.8984 15.6498 34.0597C15.6498 31.974 14.8212 29.9737 13.3464 28.4989C11.8716 27.024 9.87129 26.1955 7.78557 26.1955H6.78944L6.55351 25.7761C5.33424 23.3239 4.91371 20.5513 5.35096 17.8479C5.78822 15.1444 7.0613 12.6458 8.99142 10.703L10.7478 8.94664C12.7155 7.06066 15.2223 5.83505 17.9192 5.44038C20.6161 5.04571 23.369 5.50162 25.7946 6.74466C30.1981 8.94721 34.0231 12.1527 36.9618 16.1031L15.9119 37.0481ZM44.1707 43.2608L43.2008 44.257C42.0998 45.358 40.3959 45.1482 38.9803 43.7327L35.153 39.9316C34.026 38.8119 32.5862 38.0598 31.0233 37.7743C29.4604 37.4889 27.8477 37.6835 26.3975 38.3326C25.5711 38.7376 24.6868 39.0117 23.7761 39.1452C23.2752 39.2409 22.7657 39.2848 22.2557 39.2763H21.1023L39.1114 21.2672C39.2949 23.0633 38.9868 24.8755 38.2201 26.5101C37.571 27.9602 37.3764 29.5729 37.6618 31.1358C37.9473 32.6987 38.6994 34.1385 39.8191 35.2655L44.1182 39.5909C44.6056 40.074 44.8841 40.729 44.8939 41.4151C44.9037 42.1013 44.6441 42.764 44.1707 43.2608Z"
            fill={fill}
          />
        </svg>
      }
    </>
  );
};

export const Tennis = ({ fill }: Props): JSX.Element => {
  return (
    <>
      {
        <svg
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.0941 31.7981C42.7213 31.7981 45.2409 32.757 47.0986 34.4637C48.9563 36.1705 50 38.4853 50 40.899C50 43.3128 48.9563 45.6276 47.0986 47.3344C45.2409 49.0411 42.7213 50 40.0941 50C37.4669 50 34.9473 49.0411 33.0896 47.3344C31.2319 45.6276 30.1882 43.3128 30.1882 40.899C30.1882 38.4853 31.2319 36.1705 33.0896 34.4637C34.9473 32.757 37.4669 31.7981 40.0941 31.7981ZM40.0941 36.3486C38.7805 36.3486 37.5207 36.828 36.5918 37.6814C35.663 38.5348 35.1412 39.6922 35.1412 40.899C35.1412 42.1059 35.663 43.2633 36.5918 44.1167C37.5207 44.9701 38.7805 45.4495 40.0941 45.4495C41.4077 45.4495 42.6675 44.9701 43.5964 44.1167C44.5252 43.2633 45.0471 42.1059 45.0471 40.899C45.0471 39.6922 44.5252 38.5348 43.5964 37.6814C42.6675 36.828 41.4077 36.3486 40.0941 36.3486ZM10.5002 30.7515C10.5002 30.7515 13.9921 27.5207 14.0168 21.1045C13.1253 16.1217 15.2551 10.2744 20.1337 5.81489C27.3898 -0.851556 37.9643 -1.94367 43.8088 3.35763C49.579 8.72719 48.3903 18.4425 41.1342 25.1089C36.2803 29.5911 29.9158 31.5478 24.4923 30.7287C17.5087 30.7515 13.9921 33.9596 13.9921 33.9596L3.49183 43.6066L0 40.3985L10.5002 30.7515ZM40.2675 6.61122C36.3794 3.06185 28.95 4.13121 23.6256 9.04573C18.3259 13.9147 17.1372 20.7632 21.0005 24.3126C24.8886 27.8619 32.318 26.7698 37.6176 21.9008C42.9668 17.0091 44.1308 10.1833 40.2675 6.61122Z"
            fill={fill}
          />
        </svg>
      }
    </>
  );
};

export const VolleyBall = ({ fill }: Props): JSX.Element => {
  return (
    <>
      {
        <svg
          width="22"
          height="24"
          viewBox="0 0 42 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16667 3.66667H3.66667V4.16667V8.33333V8.83333H4.16667H9.91667V24.5H4.16667H3.66667V25V29.1667V29.6667H4.16667H18.75H19.25V29.1667V24.7292V24.3426L18.8759 24.2453C17.1968 23.8083 15.7097 22.8276 14.6467 21.4563C13.5838 20.0852 13.0048 18.4008 13 16.6661C13.0003 13.1044 15.4278 9.98926 18.8764 9.08792L19.25 8.99028V8.60417V4.16667V3.66667H18.75H4.16667ZM22.9167 3.66667H22.4167V4.16667V8.60417V8.99069L22.7907 9.08805C24.4698 9.52505 25.957 10.5057 27.02 11.877C28.0829 13.2481 28.6619 14.9325 28.6667 16.6673C28.6664 20.229 26.2389 23.3441 22.7902 24.2454L22.4167 24.3431V24.7292V29.1667V29.6667H22.9167H37.5H38V29.1667V25V24.5H37.5H31.75V8.83333H37.5H38V8.33333V4.16667V3.66667H37.5H22.9167ZM4.16667 12H3.66667V12.5V20.8333V21.3333H4.16667H6.25H6.75V20.8333V12.5V12H6.25H4.16667ZM35.4167 12H34.9167V12.5V20.8333V21.3333H35.4167H37.5H38V20.8333V12.5V12H37.5H35.4167ZM23.1677 12.6301L22.4167 12.194V13.0625V20.2708V21.1393L23.1677 20.7032C24.6127 19.8642 25.5 18.325 25.5 16.6667C25.5 15.0083 24.6127 13.4691 23.1677 12.6301ZM19.25 13.0625V12.194L18.4989 12.6301C17.054 13.4691 16.1667 15.0083 16.1667 16.6667C16.1667 18.325 17.054 19.8642 18.4989 20.7032L19.25 21.1393V20.2708V13.0625ZM0.5 4.16667C0.5 2.13031 2.13031 0.5 4.16667 0.5H37.5C38.4725 0.5 39.4051 0.886308 40.0927 1.57394C40.7804 2.26158 41.1667 3.19421 41.1667 4.16667V29.1667C41.1667 30.1391 40.7804 31.0718 40.0927 31.7594C39.4051 32.447 38.4725 32.8333 37.5 32.8333H4.16667C3.19421 32.8333 2.26158 32.447 1.57394 31.7594C0.886308 31.0718 0.5 30.1391 0.5 29.1667V4.16667Z"
            fill={fill}
            stroke="black"
          />
        </svg>
      }
    </>
  );
};

export const BaseBall = ({ fill }: Props): JSX.Element => {
  return (
    <>
      {
        <svg
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99952 6.96029 3.79521 10.8648 1.90302 15.4329C0.0108321 20.0011 -0.484251 25.0277 0.480379 29.8773C1.44501 34.7268 3.82603 39.1814 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1227 49.5196C24.9723 50.4842 29.9989 49.9892 34.5671 48.097C39.1352 46.2048 43.0397 43.0005 45.7867 38.8892C48.5338 34.778 50 29.9445 50 25C49.993 18.3717 47.3568 12.017 42.6699 7.33006C37.983 2.64317 31.6283 0.00699956 25 0ZM11.5601 41.3245C11.7572 41.0841 11.9543 40.8606 12.1418 40.625C12.2997 40.4275 12.4171 40.2009 12.4873 39.9581C12.5576 39.7153 12.5793 39.461 12.5513 39.2097C12.5233 38.9585 12.4461 38.7153 12.3241 38.4939C12.202 38.2725 12.0376 38.0773 11.8402 37.9195C11.6427 37.7616 11.4161 37.6442 11.1733 37.574C10.9304 37.5037 10.6761 37.482 10.4249 37.51C10.1737 37.538 9.93042 37.6152 9.70903 37.7372C9.48765 37.8593 9.29246 38.0237 9.13462 38.2211L8.81251 38.6106C5.60077 34.8026 3.83912 29.9815 3.83912 25C3.83912 20.0184 5.60077 15.1974 8.81251 11.3894L9.13462 11.7788C9.29246 11.9763 9.48765 12.1407 9.70903 12.2628C9.93042 12.3848 10.1737 12.462 10.4249 12.49C10.6761 12.518 10.9304 12.4963 11.1733 12.426C11.4161 12.3558 11.6427 12.2384 11.8402 12.0805C12.0376 11.9227 12.202 11.7275 12.3241 11.5061C12.4461 11.2847 12.5233 11.0415 12.5513 10.7902C12.5793 10.539 12.5576 10.2847 12.4873 10.0419C12.4171 9.79906 12.2997 9.57245 12.1418 9.375C11.9543 9.13461 11.7572 8.89423 11.5601 8.67548C15.3432 5.55351 20.0951 3.84593 25 3.84593C29.9049 3.84593 34.6568 5.55351 38.4399 8.67548C38.2428 8.91586 38.0457 9.13702 37.8582 9.375C37.7003 9.57245 37.5829 9.79906 37.5127 10.0419C37.4424 10.2847 37.4207 10.539 37.4487 10.7902C37.4767 11.0415 37.5539 11.2847 37.6759 11.5061C37.798 11.7275 37.9624 11.9227 38.1599 12.0805C38.3573 12.2384 38.5839 12.3558 38.8268 12.426C39.0696 12.4963 39.3239 12.518 39.5751 12.49C39.8263 12.462 40.0696 12.3848 40.291 12.2628C40.5124 12.1407 40.7075 11.9763 40.8654 11.7788L41.1875 11.3894C44.3992 15.1974 46.1609 20.0184 46.1609 25C46.1609 29.9815 44.3992 34.8026 41.1875 38.6106L40.8654 38.2211C40.7107 38.0152 40.5161 37.8424 40.2934 37.7131C40.0706 37.5838 39.8241 37.5005 39.5685 37.4683C39.313 37.436 39.0535 37.4554 38.8056 37.5254C38.5577 37.5954 38.3264 37.7144 38.1253 37.8755C37.9243 38.0366 37.7577 38.2364 37.6354 38.4631C37.5131 38.6898 37.4375 38.9388 37.4133 39.1952C37.3891 39.4517 37.4166 39.7104 37.4942 39.956C37.5719 40.2016 37.6981 40.4291 37.8654 40.625C38.0529 40.8654 38.25 41.0937 38.4471 41.3245C34.6641 44.4465 29.9121 46.1541 25.0072 46.1541C20.1023 46.1541 15.3504 44.4465 11.5673 41.3245H11.5601ZM17.2813 29.1635C17.0424 30.582 16.6821 31.9773 16.2043 33.3341C16.0341 33.8152 15.6798 34.2089 15.2193 34.4286C14.7588 34.6484 14.2298 34.6762 13.7488 34.506C13.2678 34.3358 12.8741 33.9814 12.6543 33.5209C12.4345 33.0604 12.4067 32.5315 12.5769 32.0505C12.9822 30.9053 13.287 29.7269 13.488 28.5288C13.5276 28.2779 13.6165 28.0373 13.7496 27.8209C13.8827 27.6045 14.0574 27.4167 14.2635 27.2682C14.4696 27.1197 14.7032 27.0135 14.9505 26.9558C15.1979 26.8981 15.4543 26.8899 15.7049 26.9318C15.9554 26.9738 16.1952 27.0649 16.4104 27.2C16.6255 27.3351 16.8117 27.5115 16.9583 27.719C17.1049 27.9265 17.2089 28.161 17.2643 28.4089C17.3197 28.6568 17.3255 28.9133 17.2813 29.1635ZM17.2813 20.8365C17.3654 21.3396 17.2463 21.8554 16.9501 22.2706C16.6539 22.6858 16.2049 22.9663 15.7019 23.0505C15.597 23.0675 15.4909 23.0764 15.3846 23.0769C14.93 23.0763 14.4903 22.9147 14.1436 22.6208C13.7968 22.3268 13.5654 21.9195 13.4904 21.4711C13.2894 20.2731 12.9846 19.0947 12.5793 17.9495C12.4091 17.4685 12.4369 16.9395 12.6567 16.479C12.8765 16.0185 13.2702 15.6642 13.7512 15.494C14.2322 15.3238 14.7612 15.3516 15.2217 15.5714C15.6822 15.7911 16.0365 16.1848 16.2067 16.6659C16.6836 18.0228 17.0431 19.4181 17.2813 20.8365ZM36.25 34.5048C35.7693 34.6749 35.2407 34.6472 34.7804 34.4277C34.3202 34.2081 33.966 33.8148 33.7957 33.3341C33.318 31.9773 32.9577 30.582 32.7188 29.1635C32.6745 28.9133 32.6803 28.6568 32.7357 28.4089C32.7911 28.161 32.8952 27.9265 33.0417 27.719C33.1883 27.5115 33.3745 27.3351 33.5897 27.2C33.8048 27.0649 34.0446 26.9738 34.2951 26.9318C34.5457 26.8899 34.8021 26.8981 35.0495 26.9558C35.2969 27.0135 35.5304 27.1197 35.7365 27.2682C35.9426 27.4167 36.1173 27.6045 36.2504 27.8209C36.3835 28.0373 36.4724 28.2779 36.512 28.5288C36.713 29.7269 37.0178 30.9053 37.4231 32.0505C37.5073 32.2887 37.5437 32.5411 37.5303 32.7933C37.5169 33.0456 37.4539 33.2927 37.345 33.5207C37.2361 33.7486 37.0833 33.9528 36.8954 34.1217C36.7075 34.2905 36.4882 34.4207 36.25 34.5048ZM32.7188 20.8365C32.9577 19.418 33.318 18.0227 33.7957 16.6659C33.9659 16.1848 34.3202 15.7911 34.7807 15.5714C35.2412 15.3516 35.7702 15.3238 36.2512 15.494C36.7322 15.6642 37.1259 16.0185 37.3457 16.479C37.5655 16.9395 37.5933 17.4685 37.4231 17.9495C37.0178 19.0947 36.713 20.2731 36.512 21.4711C36.4369 21.9199 36.2052 22.3275 35.8579 22.6215C35.5107 22.9155 35.0704 23.0769 34.6154 23.0769C34.5083 23.0765 34.4014 23.0676 34.2957 23.0505C33.7931 22.9657 33.3447 22.685 33.0491 22.2698C32.7534 21.8547 32.6346 21.3392 32.7188 20.8365Z"
            fill={fill}
          />
        </svg>
      }
    </>
  );
};
