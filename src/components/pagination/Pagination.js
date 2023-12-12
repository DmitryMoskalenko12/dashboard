import "./Pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <h3 className="pagination__title">Showing data 1 to 8 of 256K entries</h3>
      <div className="pagination__block">
        <button className="pagination__left">
          <svg
            width="5"
            height="7"
            viewBox="0 0 5 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.936 6.392L0.176 3.668L2.936 0.944H4.664L1.892 3.668L4.664 6.392H2.936Z"
              fill="#404B52"
            />
          </svg>
        </button>
        <button className="pagination__active-button">1</button>
        <button className="pagination__button">2</button>
        <button className="pagination__button">3</button>
        <button className="pagination__button">4</button>
        <button className="pagination__button">..</button>
        <button className="pagination__button">40</button>
        <button className="pagination__right">
          <svg
            width="5"
            height="7"
            viewBox="0 0 5 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.344 0.944H2.072L4.832 3.668L2.072 6.392H0.344L3.116 3.668L0.344 0.944Z"
              fill="#404B52"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
