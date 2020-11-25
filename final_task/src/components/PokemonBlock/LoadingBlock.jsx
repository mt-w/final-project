import React from "react";
import ContentLoader from "react-content-loader";
function LoadingBlock() {
  return (
    <ContentLoader
      className="pokemon-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="133" cy="133" r="127" />
      <rect x="4" y="274" rx="0" ry="0" width="406" height="30" />
      <rect x="-1" y="315" rx="6" ry="6" width="302" height="84" />
    </ContentLoader>
  );
}
export default LoadingBlock;
