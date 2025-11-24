import { useEffect } from 'react';

export const useImageEvents = ({
    wrapperRef,
    hasImage,
    scale,
    isDragging,
    startDrag,
    drag,
    endDrag,
    startDragTouch,
    dragTouch,
    handleWheel
}) => {
    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const handleMouseDown = (e) => startDrag(e, wrapperRef);
        const handleTouchStart = (e) => startDragTouch(e, wrapperRef);
        const handleWheelEvent = (e) => handleWheel(e);

        wrapper.addEventListener('mousedown', handleMouseDown);
        wrapper.addEventListener('touchstart', handleTouchStart);
        wrapper.addEventListener('wheel', handleWheelEvent, { passive: false });

        return () => {
            wrapper.removeEventListener('mousedown', handleMouseDown);
            wrapper.removeEventListener('touchstart', handleTouchStart);
            wrapper.removeEventListener('wheel', handleWheelEvent);
        };
    }, [wrapperRef, startDrag, startDragTouch, handleWheel]);

    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (e) => drag(e, wrapperRef);
        const handleMouseUp = () => endDrag(wrapperRef);
        const handleTouchMove = (e) => dragTouch(e, wrapperRef);
        const handleTouchEnd = () => endDrag(wrapperRef);

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
        
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'grabbing';

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
        };
    }, [isDragging, drag, dragTouch, endDrag, wrapperRef]);
};