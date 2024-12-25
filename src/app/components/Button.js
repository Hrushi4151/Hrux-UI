// import React from 'react';
// import styled from 'styled-components';

// let cpath;
// const Button = ({path,name}) => {
//     cpath=path ? true:false;
//     console.log(path)
//   return (
//     <StyledWrapper>
//       <button> {name}
//       </button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   button {
//     padding: 1.3em 3em;
//     font-size: 12px;
//     text-transform: uppercase;
//     letter-spacing: 2.5px;
//     font-weight: 500;
//     color: #000;
//     ${cpath ? "background-color: #f5c43d":"background-color: #fff"};
//     border: none;
//     border-radius: 45px;
//     box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
//     transition: all 0.3s ease 0s;
//     cursor: pointer;
//     outline: none;
//   }

//   button:hover {
//     background-color: #f5c43d;
//     box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
//     color: #fff;
//     transform: translateY(-7px);
//   }

//   button:active {
//     transform: translateY(-1px);
//   }`;

// export default Button;



import React from 'react';

const Button = ({ path, name }) => {
  const isBlackBackground = path ? true : false;

  return (
    <button
      className={`px-6 py-4 text-sm uppercase tracking-wider font-medium rounded-full shadow-lg shadow-orange-400 transition-all duration-300 ${
        isBlackBackground ? 'bg-[#f5c43d] text-white' : 'bg-white text-black'
      } hover:bg-yellow-400 hover:text-white hover:shadow-xl transform hover:-translate-y-2 active:translate-y-0`}
    >
      {name}
    </button>
  );
};

export default Button;
