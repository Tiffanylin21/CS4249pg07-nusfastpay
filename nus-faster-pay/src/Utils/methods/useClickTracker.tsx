import { useEffect, useState } from 'react';

const useClickTracker = () => {
  // Initialize totalClicks from sessionStorage or start with 0
  const [totalClicks, setTotalClicks] = useState(
    parseInt(sessionStorage.getItem('totalClicks') || '0', 10)
  );

  useEffect(() => {
    const clickListener = () => {
      setTotalClicks(prevTotalClicks => {
        const newTotalClicks = prevTotalClicks + 1;
        // Update the sessionStorage with the new count
        sessionStorage.setItem('totalClicks', newTotalClicks.toString());
        console.log(`Total clicks: ${newTotalClicks}`);
        return newTotalClicks;
      });
    };

    document.addEventListener('click', clickListener);

    return () => {
      document.removeEventListener('click', clickListener);
    };
  }, []);

  return totalClicks;
};

export default useClickTracker;
