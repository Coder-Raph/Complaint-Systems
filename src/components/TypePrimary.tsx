import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TypePrimary.module.css";

type TypePrimaryType = {
  getStarted?: string;

  /** Style props */
  typePrimaryBackground?: CSSProperties["background"];
  typePrimaryBoxShadow?: CSSProperties["boxShadow"];
  typePrimaryWidth?: CSSProperties["width"];
  typePrimaryPosition?: CSSProperties["position"];
  typePrimaryTop?: CSSProperties["top"];
  typePrimaryLeft?: CSSProperties["left"];
  typePrimaryHeight?: CSSProperties["height"];
  getStartedFontSize?: CSSProperties["fontSize"];
};

const TypePrimary: FunctionComponent<TypePrimaryType> = ({
  getStarted,
  typePrimaryBackground,
  typePrimaryBoxShadow,
  typePrimaryWidth,
  typePrimaryPosition,
  typePrimaryTop,
  typePrimaryLeft,
  typePrimaryHeight,
  getStartedFontSize,
}) => {
  const typePrimaryStyle: CSSProperties = useMemo(() => {
    return {
      background: typePrimaryBackground,
      boxShadow: typePrimaryBoxShadow,
      width: typePrimaryWidth,
      position: typePrimaryPosition,
      top: typePrimaryTop,
      left: typePrimaryLeft,
      height: typePrimaryHeight,
    };
  }, [
    typePrimaryBackground,
    typePrimaryBoxShadow,
    typePrimaryWidth,
    typePrimaryPosition,
    typePrimaryTop,
    typePrimaryLeft,
    typePrimaryHeight,
  ]);

  const getStartedStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: getStartedFontSize,
    };
  }, [getStartedFontSize]);

  return (
    <div className={styles.typeprimary} style={typePrimaryStyle}>
      <div className={styles.getStarted} style={getStartedStyle}>
        {getStarted}
      </div>
    </div>
  );
};

export default TypePrimary;
