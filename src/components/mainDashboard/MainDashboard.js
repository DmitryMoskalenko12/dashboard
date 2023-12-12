import "./MainDashboard.scss";
import Pagination from "../pagination/Pagination";

const MainDashboard = () => {
  return (
    <section className="dashboard">
      <h1 className="dashboard__name-title">Hello Evano 👋🏼,</h1>
      <div className="dashboard__wrapper-content">
        <div className="dashboard__header">
          <div className="dashboard__block">
            <h2 className="dashboard__name">All Customers</h2>
            <span className="dashboard__active-members">Active Members</span>
          </div>

          <div className="dashboard__input-block">
            <svg
              className="dashboard__svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#7E7E7E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="#7E7E7E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              className="dashboard__input"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="dashboard__wrapper">
          <div className="dashboard__col">
            <div className="dashboard__cust-name-block">
              <span className="dashboard__cust-name dashboard__cust-name_left-name dashboard__cust-name_after">
                Customer Name
              </span>
            </div>

            <div className="dashboard__padding-left-name">
              <div className="dashboard__item-name dashboard__item-name_after">
                Jane Cooper
              </div>
              <div className="dashboard__item-name dashboard__item-name_after">
                Floyd Miles
              </div>
              <div className="dashboard__item-name dashboard__item-name_after">
                Ronald Richards
              </div>
              <div className="dashboard__item-name dashboard__item-name_after">
                Marvin McKinney
              </div>
              <div className="dashboard__item-name dashboard__item-name_after">
                Jerome Bell
              </div>
              <div className="dashboard__item-name dashboard__item-name_after">
                Kathryn Murphy
              </div>
              <div className="dashboard__item-name dashboard__item-name_after">
                Jacob Jones
              </div>
              <div className="dashboard__item-name dashboard__item-name_after">
                Kristin Watson
              </div>
            </div>
          </div>
          <div className="dashboard__col">
            <div className="dashboard__cust-name-block">
              <span className="dashboard__cust-name">Company</span>
            </div>

            <div className="dashboard__padding-right-company">
              <div className="dashboard__item-name">Microsoft</div>
              <div className="dashboard__item-name">Yahoo</div>
              <div className="dashboard__item-name">Adobe</div>
              <div className="dashboard__item-name">Tesla</div>
              <div className="dashboard__item-name">Google</div>
              <div className="dashboard__item-name">Microsoft</div>
              <div className="dashboard__item-name">Yahoo</div>
              <div className="dashboard__item-name">Facebook</div>
            </div>
          </div>

          <div className="dashboard__col">
            <div className="dashboard__cust-name-block">
              <span className="dashboard__cust-name dashboard__cust-name_left-phone">
                Phone Number
              </span>
            </div>
            <div className="dashboard__padding-left-phone-number">
              <div className="dashboard__item-name">(225) 555-0118</div>
              <div className="dashboard__item-name">(205) 555-0100</div>
              <div className="dashboard__item-name">(302) 555-0107</div>
              <div className="dashboard__item-name">(252) 555-0126</div>
              <div className="dashboard__item-name">(629) 555-0129</div>
              <div className="dashboard__item-name">(406) 555-0120</div>
              <div className="dashboard__item-name">(208) 555-0112</div>
              <div className="dashboard__item-name">(704) 555-0127</div>
            </div>
          </div>

          <div className="dashboard__col">
            <div className="dashboard__cust-name-block">
              <span className="dashboard__cust-name dashboard__cust-name_left-email">
                Email
              </span>
            </div>

            <div className="dashboard__padding-right-email">
              <div className="dashboard__item-name">jane@microsoft.com</div>
              <div className="dashboard__item-name">floyd@yahoo.com</div>
              <div className="dashboard__item-name">ronald@adobe.com</div>
              <div className="dashboard__item-name">marvin@tesla.com</div>
              <div className="dashboard__item-name">jerome@google.com</div>
              <div className="dashboard__item-name">kathryn@microsoft.com</div>
              <div className="dashboard__item-name">jacob@yahoo.com</div>
              <div className="dashboard__item-name">kristin@facebook.com</div>
            </div>
          </div>

          <div className="dashboard__col">
            <div className="dashboard__cust-name-block">
              <span className="dashboard__cust-name dashboard__cust-name_left-country ">
                Country
              </span>
            </div>

            <div className="dashboard__padding-left-country">
              <div className="dashboard__item-name">United States</div>
              <div className="dashboard__item-name">Kiribati</div>
              <div className="dashboard__item-name">Israel</div>
              <div className="dashboard__item-name">Iran</div>
              <div className="dashboard__item-name">Réunion</div>
              <div className="dashboard__item-name">Curaçao</div>
              <div className="dashboard__item-name">Brazil</div>
              <div className="dashboard__item-name">Åland Islands</div>
            </div>
          </div>

          <div className="dashboard__col">
            <div className="dashboard__cust-name-block">
              <span className="dashboard__cust-name dashboard__cust-name_left">
                Status
              </span>
            </div>

            <div className="dashboard__padding-right-status">
              <div className="dashboard__item">
                <div className="dashboard__item-status">
                  <div className="dashboard__status-text dashboard__status-text_active">
                    Active
                  </div>
                </div>
              </div>
              <div className="dashboard__item">
                <div className="dashboard__item-status">
                  <div className="dashboard__status-text dashboard__status-text_no-active">
                    Inactive
                  </div>
                </div>
              </div>
              <div className="dashboard__item">
                <div className="dashboard__item-status">
                  <div className="dashboard__status-text dashboard__status-text_no-active">
                    Inactive
                  </div>
                </div>
              </div>
              <div className="dashboard__item">
                <div className="dashboard__item-status">
                  <div className="dashboard__status-text dashboard__status-text_active">
                    Active
                  </div>
                </div>
              </div>
              <div className="dashboard__item">
                <div className="dashboard__item-status">
                  <div className="dashboard__status-text dashboard__status-text_active">
                    Active
                  </div>
                </div>
              </div>
              <div className="dashboard__item">
                <div className="dashboard__item-status">
                  <div className="dashboard__status-text dashboard__status-text_active">
                    Active
                  </div>
                </div>
              </div>
              <div className="dashboard__item">
                <div className="dashboard__item-status">
                  <div className="dashboard__status-text dashboard__status-text_active">
                    Active
                  </div>
                </div>
              </div>
              <div className="dashboard__item">
                <div className="dashboard__item-status">
                  <div className="dashboard__status-text dashboard__status-text_no-active">
                    Inactive
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default MainDashboard;
