import clsx from "clsx";
import React, { FunctionComponent } from "react";
import styles from "./AboutMe.module.scss";
import AvatarFlip from "./AvatarFlip";

export interface AboutMeProps {
  avatarFront: string;
  avatarBack: string;
  descriptionComponent: React.ReactNode;
}

export const AboutMe: FunctionComponent<AboutMeProps> = ({
  avatarFront,
  avatarBack,
  descriptionComponent,
}) => {
  return (
    <div className="margin-top--lg">
      <h2>About me</h2>
      <div className="row">
        <div className="col col--6">{descriptionComponent}</div>
        <div className={clsx("col col--5", styles.avatarContainer)}>
          <div className={styles.avatar}>
            <AvatarFlip frontImage={avatarFront} backImage={avatarBack} />
          </div> 
        </div>
      </div>
    </div>
  );
};