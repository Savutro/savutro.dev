// src/components/AvatarFlip.tsx

import React, { useEffect, useState } from 'react';
import styles from './AvatarFlip.module.scss';

interface AvatarFlipProps {
  frontImage: string;
  backImage: string;
}

const AvatarFlip: React.FC<AvatarFlipProps> = ({ frontImage, backImage }) => {
  const [flipped, setFlipped] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.avatar} onClick={() => setFlipped((prev) => !prev)}>
      <div className={`${styles.inner} ${flipped ? styles.flipped : ''}`}>
        <img src={frontImage} alt="Front Avatar" />
        <img className={styles.back} src={backImage} alt="Back Avatar" />
      </div>
    </div>
  );
};

export default AvatarFlip;
