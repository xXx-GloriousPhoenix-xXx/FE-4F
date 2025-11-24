import { useState, useCallback } from 'react';

export const useZoom = (initialScale = 1, minScale = 1, maxScale = 4, zoomStep = 0.25) => {
    const [scale, setScale] = useState(initialScale);

    const zoomIn = useCallback(() => {
        setScale(prev => Math.min(prev + zoomStep, maxScale));
    }, [maxScale, zoomStep]);

    const zoomOut = useCallback(() => {
        setScale(prev => Math.max(prev - zoomStep, minScale));
    }, [minScale, zoomStep]);

    const resetZoom = useCallback(() => {
        setScale(initialScale);
    }, [initialScale]);

    const canZoomIn = scale < maxScale;
    const canZoomOut = scale > minScale;

    return {
        scale,
        setScale,
        zoomIn,
        zoomOut,
        resetZoom,
        canZoomIn,
        canZoomOut
    };
};