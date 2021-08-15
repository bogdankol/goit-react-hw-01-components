import s from "./FriendList.module.css";
import FrindsListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";


function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((el) => {
        return (
          <FrindsListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
            key={el.id}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object,]),
};

export default FriendList;
