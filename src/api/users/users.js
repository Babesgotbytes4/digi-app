const addUser = (props) => {
  const { name, pin, confirmPin } = props;
  if (name.length < 1) return "no-name";
  if (pin.length < 4) return "too-short-pin";
  if (confirmPin.length < 4) return "too-short-conferm-pin";
  if (pin !== confirmPin) return "pins-not-match";

  const usersString = window.localStorage.getItem("users");

  if (!usersString) {
    window.localStorage.setItem("users", JSON.stringify([{ name, pin }]));
    return null;
  }

  const usersData = JSON.parse(usersString);

  if (usersData.find((user) => user.name === name)) return "user-exist";

  window.localStorage.setItem(
    "users",
    JSON.stringify([...usersData, { name, pin }])
  );
};

const checkUser = (props) => {
  const { name, pin } = props;

  if (name.length < 1) return "no-name";
  if (pin.length < 4) return "pin-too-short";

  const usersString = window.localStorage.getItem("users");

  if (!usersString) return "no-users-created";

  const usersData = JSON.parse(usersString);
  const user = usersData.find((checkingUser) => checkingUser.name === name);

  if (!user) return "user-does-not-exist";
  if (user.pin === pin) return null;
};

const users = {
  addUser,
  checkUser,
};

export default users;
