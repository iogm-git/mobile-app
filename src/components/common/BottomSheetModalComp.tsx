import React, { forwardRef, useMemo, useRef, useImperativeHandle } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

interface BottomSheetProps {
  children: React.ReactNode;
}

export type BottomSheetRef = BottomSheetModal;

const BottomSheetModalComp = forwardRef<BottomSheetRef, BottomSheetProps>(
  ({ children }: BottomSheetProps, ref) => {
    const snapPoints = useMemo(() => ['85%', '95%'], []);

    const bottomSheetModalRef = useRef<BottomSheetRef>(null);

    useImperativeHandle(ref, () => bottomSheetModalRef.current!);

    return (
      <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints}>
        {children}
      </BottomSheetModal>
    );
  }
);

export default BottomSheetModalComp;
