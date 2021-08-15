import s from "./Statistics.module.css";
import colorPicker from "./colorPicker.js";
import PropTypes from "prop-types";

function Statistics({ title , stats }) {
  return (
    <section className={s.statistics}>
      {!title  ? null : <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map((el) => {
          return (
            <li
              className={s.item}
              key={el.id}
              style={{ background: `${colorPicker()}` }}
            >
              <span className={s.label}>{el.label}</span>
              <span className={s.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

Statistics.defaultProps = {
  title: 'Some data'
}
export default Statistics;
