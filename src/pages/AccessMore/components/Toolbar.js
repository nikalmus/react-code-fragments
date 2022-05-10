import buttons from "../images";

const { notificationsBtn, searchBtn } = buttons;

const Toolbar = () => {
  return (
    <div>
      <button onClick={() => alert("Notified!")}>
        <img src={notificationsBtn} alt="" />
      </button>
      <div>Notifications</div>
      <a href="https://duckduckgo.com/?q=search&kp=-1&kl=us-en">
        <img src={searchBtn} alt="" />
      </a>
      <div>Search</div>
    </div>
  );
};

export default Toolbar;
