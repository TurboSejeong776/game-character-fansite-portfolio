import { useEffect } from 'react';

export function PageNameChange(title: string) {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
}
