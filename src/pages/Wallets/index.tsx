import { useContext, useEffect } from 'react';
import { TitleContext } from '../../contexts/TitleContext';

export function Wallets() {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('My Wallets');
  }, [setTitle]);
  return <div>My Wallets</div>;
}
