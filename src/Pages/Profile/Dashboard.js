import React, { useEffect } from "react";
import { Coin, CurrencyDollar, CurrencyExchange } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Helper/LocalStorage";
import Activity from "./Activity";
import Balance from "./Balance";
import Deposits from "./Deposite";
import Menu from "./Menu";
import { fetchProfile } from "./store/actions";

const ProfileDashboard = (props) => {
  const dispatch = useDispatch();
  const user = getUser();

  const { userData } = useSelector((state) => state.profile);

  // useEffect(() => { 
  //   dispatch(
  //     fetchProfile({
  //       id: user.id,
  //     })
  //   );
  // }, [dispatch, user.id]);

  return (
    <>
      <Menu {...props} />
      <section className="dashboard-section bg-light">
        <div className="container space-2">
          <div className="card-deck d-block d-lg-flex card-lg-gutters-3 mb-5">
            <div className="card mb-3 mb-lg-0">
              <div className="card-body p-5">
                <div className="media align-items-center">
                  <span className="btn-lg btn-icon btn-soft-primary rounded-circle mr-4 d-flex justify-content-center align-items-center">
                    <CurrencyDollar />
                  </span>
                  <div className="media-body">
                    <span className="d-block font-size-3">
                      ${userData?.walletBalance || 0}
                    </span>
                    <h2 className="h6 text-secondary font-weight-normal mb-0">
                      Available balance
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 mb-lg-0">
              <div className="card-body p-5">
                <div className="media align-items-center">
                  <span className="btn-lg btn-icon btn-soft-success rounded-circle mr-4 d-flex justify-content-center align-items-center">
                    <Coin />
                  </span>
                  <div className="media-body">
                    <span className="d-block font-size-3">
                      ${userData?.rewardedBalance || 0}
                    </span>
                    <h3 className="h6 text-secondary font-weight-normal mb-0">
                      Reward balance
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body p-5">
                <div className="media align-items-center">
                  <span className="btn-lg btn-icon btn-soft-warning rounded-circle mr-4 d-flex justify-content-center align-items-center">
                    <CurrencyExchange />
                  </span>
                  <div className="media-body">
                    <span className="d-block font-size-3">
                      ${userData?.pendingAmount || 0}
                    </span>
                    <h3 className="h6 text-secondary font-weight-normal mb-0">
                      Pending balance
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-deck d-block d-lg-flex card-lg-gutters-3">
            <Deposits {...props} />
            <Balance />
            <Activity />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileDashboard;
