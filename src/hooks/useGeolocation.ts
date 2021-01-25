import { useEffect, useState } from 'react';
import api from '../services/api';

interface IGeolocation {
  address: {
    road: string;
    city: string;
  };
}

export default function useGeolocation() {
  const [location, setLocation] = useState<[number, number]>([0, 0]);
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (process.env.NODE_ENV === 'test') return;

    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setLocation([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    if (location[0]) {
      api
        .get<IGeolocation>(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location[0]}&lon=${location[1]}&zoom=18&addressdetails=1`,
        )
        .then(response => {
          setAddress(`${response.data.address.road}`);
        });
    }
  }, [location]);

  return { address };
}
