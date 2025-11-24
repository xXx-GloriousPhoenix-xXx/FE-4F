import cl from './Image.module.css';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useZoom } from '../../hooks/useZoom';
import { useDrag } from '../../hooks/useDrag';
import { useImageEvents } from '../../hooks/useImageEvents';
import EditButton from '../EditButton/EditButton';

const Image = () => {
    const [hasImage, setHasImage] = useState(true);
    const wrapperRef = useRef(null);
    const imageRef = useRef(null);
    const defaultPosition = useRef({ left: 0, top: 0 });
    
    const { scale, zoomIn, zoomOut, resetZoom, canZoomIn, canZoomOut } = useZoom(1, 1, 4, 0.25);
    const { isDragging, startDrag, drag, endDrag, startDragTouch, dragTouch } = useDrag(scale);

    useEffect(() => {
        if (!imageRef.current || !wrapperRef.current) return;
        
        const imageRect = imageRef.current.getBoundingClientRect();
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        
        defaultPosition.current = {
            left: imageRect.left - wrapperRect.left,
            top: imageRect.top - wrapperRect.top
        };
        
        console.log('Default position saved:', defaultPosition.current);
    }, [hasImage]);

    const handleWheel = useCallback((e) => {
        if (!hasImage) return;
        
        e.preventDefault();
        
        if (e.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    }, [hasImage, zoomIn, zoomOut]);

    const addImage = useCallback(() => {
        setHasImage(true);
        resetZoom();
    }, [resetZoom]);

    const removeImage = useCallback(() => {
        setHasImage(false);
        resetZoom();
    }, [resetZoom]);

    useEffect(() => {
        if (!imageRef.current || !wrapperRef.current) return;

        const imageRect = imageRef.current.getBoundingClientRect();
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const currentLeft = imageRect.left - wrapperRect.left;
        const currentTop = imageRect.top - wrapperRect.top;

        const translateX = defaultPosition.current.left - currentLeft;
        const translateY = defaultPosition.current.top - currentTop;

        imageRef.current.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        
        if (scale > 1) {
            wrapperRef.current.style.cursor = 'grab';
            imageRef.current.style.cursor = 'grab';
        } else {
            wrapperRef.current.style.cursor = 'default';
            imageRef.current.style.cursor = 'default';
        }
    }, [scale]);

    useImageEvents({
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
    });

    const isAvailable = {
        increase: hasImage && canZoomIn,
        decrease: hasImage && canZoomOut,
        add: !hasImage,
        remove: hasImage
    };

    return (
        <div className={cl.Wrapper}>
            <div className={cl.Editor}>
                <div ref={wrapperRef} className={cl.Image}>
                    {hasImage && (
                        <img 
                            ref={imageRef}
                            src="assets/img/kharkiv.jpg" 
                            alt="kharkiv" 
                        />
                    )}
                </div>
                <div className={cl.Control}>
                    <EditButton
                        text="Збільшити"
                        onClick={zoomIn}
                        disabled={!isAvailable.increase}
                        opacity={isAvailable.increase ? 1 : 0.5}
                        cursor={isAvailable.increase ? 'pointer' : 'not-allowed'}
                    />
                    <EditButton
                        text="Зменшити"
                        onClick={zoomOut}
                        disabled={!isAvailable.decrease}
                        opacity={isAvailable.decrease ? 1 : 0.5}
                        cursor={isAvailable.decrease ? 'pointer' : 'not-allowed'}
                    />                        
                    <EditButton
                        text="Додати"
                        onClick={addImage}
                        disabled={!isAvailable.add}
                        opacity={isAvailable.add ? 1 : 0.5}
                        cursor={isAvailable.add ? 'pointer' : 'not-allowed'}
                    />
                    <EditButton
                        text="Видалити"
                        onClick={removeImage}
                        disabled={!isAvailable.remove}
                        opacity={isAvailable.remove ? 1 : 0.5}
                        cursor={isAvailable.remove ? 'pointer' : 'not-allowed'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Image;