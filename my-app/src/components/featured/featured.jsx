import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="row">
        <div className="featuredItem col-sm-4">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1 className ="featuredTitle">Dublin</h1>
            <h4 className ="featuredTitle">123 properties</h4>
          </div>
        </div>

        <div className="featuredItem col-sm-4">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1 className ="featuredTitle">Reno</h1>
            <h4 className ="featuredTitle">533 properties</h4>
          </div>
        </div>
        <div className="featuredItem col-sm-4">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1 className ="featuredTitle">Austin</h1>
            <h4 className ="featuredTitle">532 properties</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
