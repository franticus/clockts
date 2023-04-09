import { useState, useEffect } from "react";

//https://timezonedb.com/time-zones
export const TZ = {
  CHICAGO: "America/Chicago",
  AMSTERDAM: "Europe/Amsterdam",
  CURRENT: Intl.DateTimeFormat().resolvedOptions().timeZone
};

export const useTime = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const timeZoneURL = `https://api.timezonedb.com/v2.1/get-time-zone?key=267U2BIJ1NV1&format=json&by=zone&zone=${TZ}`;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(timeZoneURL);
        const result = await response.json();
        if (response.ok) {
          const date = new Date(result.formatted);
          setTime(date);
        } else {
          setHasError(true);
          setErrorMessage(result);
        }
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    };
    if (!time) {
      fetchData();
    }
  }, [time]);

  useEffect(() => {
    if (!time) return;

    const count = setInterval(() => {
      setTime(new Date(time.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(count);
    };
  }, [time]);

  return { time, isLoading, hasError, errorMessage };
};
