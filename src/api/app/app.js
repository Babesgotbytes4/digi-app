import users from '../users/users'


const SYNC_INTERVAL_IN_MS = 30 * 60 * 1000;

const INITIAL_STATE = {
  lastSynced: null,
  loggedInName: null,
};

const appString = window.localStorage.getItem("app");

if (!appString) window.localStorage.setItem("app", JSON.stringify(INITIAL_STATE));
const appData = appString ? JSON.parse(appString) : INITIAL_STATE;

const getStorage = () => {
  const string = window.localStorage.getItem("app");
  if (!string) return INITIAL_STATE;
  return JSON.parse(string);
};

const updateStorage = (object) =>
  window.localStorage.setItem(
    "app",
    JSON.stringify({
      ...getStorage(),
      ...object,
    })
  );

const calcIfShowIdSync = () => {
  // const appString = window.localStorage.getItem("app");
  const currentTimeStamp = new Date().getTime();
  const { lastSynced } = getStorage();

  if (
    !lastSynced ||
    appData.lastSynced + SYNC_INTERVAL_IN_MS <= currentTimeStamp
  ) {
    updateStorage({ lastSynced: currentTimeStamp });
    return true;
  }

  return false;
};

const getLoggedInName = () => {
    const { loggedInName } = getStorage()
    return loggedInName;
}


const logUserIn = (name) => {
  const loggedInName = getLoggedInName();

  if (!name || name.length < 1) return "no-name";
  if (loggedInName) return "already-logged-in";
  updateStorage({ loggedInName: name });
};

const logUserOut = () => {
    const loggedInName = getLoggedInName();

  if (!loggedInName) return "already-logged-out";
  updateStorage({ loggedInName: null });
};

const app = {
 
  calcIfShowIdSync,
  logUserIn,
  logUserOut,
  getLoggedInName,

};

export default app;