import s from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.tableHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        {items.map((el) => {
          return (
            <tr key={el.id}>
              <th>{el.type}</th>
              <th>{el.amount}</th>
              <th>{el.currency}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  })
  )
};

export default TransactionHistory;
