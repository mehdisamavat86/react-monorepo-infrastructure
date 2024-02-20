import { useCallback, useState } from 'react';

export type PopoverType = {
  onClose: VoidFunction;
  open: HTMLElement | null;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  setOpen: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  visiblity: boolean;
  toggleVisiblity: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showLoading: () => void;
  hideLoading: () => void;
};

export default function usePopover(visibility = true): PopoverType {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const [visiblity, setVisiblity] = useState(visibility);
  const toggleVisiblity = useCallback(() => {
    setVisiblity((v) => !v);
  }, []);

  const onOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setVisiblity(true);
    setOpen(event.currentTarget);
  }, []);

  const onClose = useCallback(() => {
    setOpen(null);
    setLoading(false);
  }, []);

  return {
    open,
    onOpen,
    onClose,
    setOpen,
    visiblity,
    toggleVisiblity,
    loading,
    setLoading,
    showLoading: () => setLoading(true),
    hideLoading: () => setLoading(false),
  };
}
