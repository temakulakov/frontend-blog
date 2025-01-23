'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Example: React.FC = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    // Данный код сработает только на клиенте
    axios
      .get('https://gachimuchi.fun/api/posts')
      .then((res) => setData(res.data));
  }, []);

  return <div>Data: {data || 'Loading...'}</div>;
};

export default Example;
