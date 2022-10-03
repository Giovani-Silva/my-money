import { useContext, useEffect } from 'react';
import { TitleContext } from '../../contexts/TitleContext';

export function Settings() {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('Settings');
  }, [setTitle]);

  return <div>Settings</div>;
}
