/* eslint-disable react/prop-types */
import CountUp, { useCountUp } from "react-countup";

const MiniCountCard = ({ children, title, countVal, icon, classes }) => {
  useCountUp({
    ref: "countup-val",
    enableScrollSpy: true,
    scrollSpyDelay: 2000,
    scrollSpyOnce: true,
    separator: ",",
  });

  return (
    <div className="card">
      <div className="card-header p-3 pt-2">
        <div
          className={`icon icon-lg icon-shape ${classes} text-center border-radius-xl mt-n4 position-absolute`}
        >
          <i className="material-icons opacity-10">{icon}</i>
        </div>
        <div className="text-end pt-1">
          <p className="text-sm mb-0 text-capitalize">{title}</p>
          <h4 className="mb-0">
            <CountUp start={0} end={countVal} enableScrollSpy scrollSpyOnce>
              <span className="countup-val" />
            </CountUp>
          </h4>
        </div>
      </div>
      <hr className="dark horizontal my-0" />
      {children}
    </div>
  );
};

export default MiniCountCard;
