import styles from "./Header.module.scss";
import logo from "images/header/logo.svg";
import Title from "components/Title/Title";
import $ from "images/header/$.svg";
import bitcoin from "images/header/Bitcoin.svg";

const Header = () => {
  const currentDeposit = {
    bitcoin: 0.91,
    credit: "20,000",
  };
  return (
    <div className={styles.headerWrapper}>
        <div className={styles.header}>
        <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <Title size="s">QUANCE</Title>
      </div>
      <div className={styles.topBar}>
        <div className={styles.cryptoBalance}>
          <img src={bitcoin} alt="bitcion" />
          {currentDeposit.bitcoin}
          <p>BTC</p>
        </div>
        <div className={styles.credit}>
          <img src={$} alt="$" />
          {currentDeposit.credit}
        </div>
      </div>
        </div>
    
    </div>
  );
};

export default Header;
