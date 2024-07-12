/* eslint-disable react/prop-types */
const VectorMapPreloader = ({ msg }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container flex-column preloader mt-5">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="fallback-text mt-2 py-5">
          <h3>{msg}</h3>
        </div>
      </div>
    </div>
  );
};

export default VectorMapPreloader;
