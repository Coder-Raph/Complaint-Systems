import { FunctionComponent } from "react";
import VerticalForm from "../components/VerticalForm";
import TypePrimary from "../components/TypePrimary";
import styles from "./Desktop5.module.css";

const Desktop5: FunctionComponent = () => {
  return (
    <div className={styles.desktop5}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <div className={styles.lightBg} />
      </div>
      <div className={styles.complaintBoxAssignedParent}>
        <div
          className={styles.complaintBoxAssigned}
        >{`Complaint Box Assigned `}</div>
        <div className={styles.raphaelCommodore}>Raphael Commodore</div>
        <div className={styles.ticketNo67}>Ticket No: 67</div>
        <img
          className={styles.clipart5464871Icon}
          alt=""
          src="/clipart546487-1@2x.png"
        />
      </div>
      <img className={styles.desktop5Child} alt="" src="/group-11.svg" />
      <div className={styles.details}>
        <VerticalForm />
      </div>
      <TypePrimary
        getStarted="Save"
        typePrimaryBackground="radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0), rgba(36, 0, 255, 0.5)), #2400ff"
        typePrimaryBoxShadow="unset"
        typePrimaryWidth="378px"
        typePrimaryPosition="absolute"
        typePrimaryTop="742px"
        typePrimaryLeft="calc(50% - 189px)"
        typePrimaryHeight="56px"
        getStartedFontSize="40px"
      />
    </div>
  );
};

export default Desktop5;
