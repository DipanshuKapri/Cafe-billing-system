import { useState, useCallback } from 'react';
import { ToastMessage } from './types';

export const useToast = (duration = 3000) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((message: ToastMessage['message'], type: ToastMessage['type'] = 'info') => {
    const newToast: ToastMessage = { id: Date.now(), message, type };
    setToasts(currentToasts => [...currentToasts, newToast]);
    setTimeout(() => setToasts(currentToasts => currentToasts.filter(t => t.id !== newToast.id)), duration);
  }, [duration]);

  return { toasts, showToast };
};
