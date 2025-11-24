import { useState, useRef, useCallback } from 'react';

export const useDrag = (scale) => {
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const startY = useRef(0);
    const scrollLeft = useRef(0);
    const scrollTop = useRef(0);

    const startDrag = useCallback((e, wrapperRef) => {
        if (scale <= 1 || !wrapperRef.current) return;
        
        setIsDragging(true);
        wrapperRef.current.style.cursor = 'grabbing';
        
        startX.current = e.pageX - wrapperRef.current.offsetLeft;
        startY.current = e.pageY - wrapperRef.current.offsetTop;
        scrollLeft.current = wrapperRef.current.scrollLeft;
        scrollTop.current = wrapperRef.current.scrollTop;
        
        e.preventDefault();
    }, [scale]);

    const drag = useCallback((e, wrapperRef) => {
        if (!isDragging || scale <= 1 || !wrapperRef.current) return;
        
        e.preventDefault();
        const x = e.pageX - wrapperRef.current.offsetLeft;
        const y = e.pageY - wrapperRef.current.offsetTop;
        const walkX = (x - startX.current) * 2;
        const walkY = (y - startY.current) * 2;
        
        wrapperRef.current.scrollLeft = scrollLeft.current - walkX;
        wrapperRef.current.scrollTop = scrollTop.current - walkY;
    }, [isDragging, scale]);

    const endDrag = useCallback((wrapperRef) => {
        setIsDragging(false);
        if (scale > 1 && wrapperRef.current) {
            wrapperRef.current.style.cursor = 'grab';
        }
    }, [scale]);

    const startDragTouch = useCallback((e, wrapperRef) => {
        if (scale <= 1 || !wrapperRef.current) return;
        
        setIsDragging(true);
        const touch = e.touches[0];
        startX.current = touch.pageX - wrapperRef.current.offsetLeft;
        startY.current = touch.pageY - wrapperRef.current.offsetTop;
        scrollLeft.current = wrapperRef.current.scrollLeft;
        scrollTop.current = wrapperRef.current.scrollTop;
    }, [scale]);

    const dragTouch = useCallback((e, wrapperRef) => {
        if (!isDragging || scale <= 1 || !wrapperRef.current) return;
        
        const touch = e.touches[0];
        const x = touch.pageX - wrapperRef.current.offsetLeft;
        const y = touch.pageY - wrapperRef.current.offsetTop;
        const walkX = (x - startX.current) * 2;
        const walkY = (y - startY.current) * 2;
        
        wrapperRef.current.scrollLeft = scrollLeft.current - walkX;
        wrapperRef.current.scrollTop = scrollTop.current - walkY;
    }, [isDragging, scale]);

    return {
        isDragging,
        startDrag,
        drag,
        endDrag,
        startDragTouch,
        dragTouch
    };
};