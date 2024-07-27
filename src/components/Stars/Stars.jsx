const Stars = ({ stars, id }) => {

  let currentStarCount = stars * 5 / 100;

  return (
    <>{Array(5).fill(null).map((_, idx) => {

      let percentage;
      if (currentStarCount <= 0) {
        percentage = 0;
      } else {
        percentage = currentStarCount > 1 ? 100 : currentStarCount * 100;
        currentStarCount--;
      }

      return (
        <svg key={idx} xmlns='http://www.w3.org/2000/svg' height='18' width='18' viewBox='0 0 18 18' increment='0.01'>
          <linearGradient id={'floatStar' + idx + id} x1='0' x2='100%' y1='0' y2='0'>
            <stop offset={percentage + '%'} stopColor='#EB9C00'></stop>
            <stop offset='0' stopOpacity='0'></stop>
          </linearGradient>
          <polygon stroke="#EB9C00" strokeWidth="1" strokeLinecap="square" points='8.94 0 11.05 6.49 17.88 6.49 12.35 10.51 14.46 17 8.94 12.99 3.41 17 5.52 10.51 0 6.49 6.83 6.49 8.94 0' fill={`url(#floatStar${idx + id})`}></polygon>
        </svg>
      );
    })}</>
  );
};

export default Stars;