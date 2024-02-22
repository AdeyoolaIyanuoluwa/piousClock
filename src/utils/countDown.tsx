import React from 'react';
// import styles from '../../container/Onboarding/index.module.scss';
import styles from '../admin/container/Onboarding/index.module.scss'
import { CountDownProps } from '../types';
const CountDown = ({ minutes, seconds }: CountDownProps) => {
  const [over, setOver] = React.useState(false);
  const [time, setTime] = React.useState({
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  });

  const tick = () => {
    if (over) return;
    if (time.minutes == 0 && time.seconds == 0) setOver(true);
    else if (time.seconds == 0)
      setTime({
        minutes: time.minutes - 1,
        seconds: 59
      });
    else
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
  };

  React.useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      {over ? (
        <p>{""}</p>
      ) : (
        <p>
          <p className={styles.otp__expire}>
            <p>in</p>
            {time.minutes.toString().padStart(2, '')}:{time.seconds.toString().padStart(2, '')}s
          </p>
        </p>
      )}
    </div>
  );
};


export default CountDown;
