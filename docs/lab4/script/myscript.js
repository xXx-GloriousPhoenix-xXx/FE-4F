class ImageZoom {
    constructor() {
        this.wrapper = document.getElementById('wrapper');
        this.image = document.getElementById('image');
        this.zoomInBtn = document.getElementById('zoom-in');
        this.zoomOutBtn = document.getElementById('zoom-out');
        
        this.scale = 1;
        this.minScale = 1;
        this.maxScale = 4;
        this.zoomStep = 0.25;
        
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.scrollLeft = 0;
        this.scrollTop = 0;
        
        this.init();
    }
    
    init() {
        this.zoomInBtn.addEventListener('click', () => this.zoomIn());
        this.zoomOutBtn.addEventListener('click', () => this.zoomOut());
        
        this.wrapper.addEventListener('mousedown', this.startDrag.bind(this));
        this.wrapper.addEventListener('mousemove', this.drag.bind(this));
        this.wrapper.addEventListener('mouseup', this.endDrag.bind(this));
        this.wrapper.addEventListener('mouseleave', this.endDrag.bind(this));
        
        this.wrapper.addEventListener('touchstart', this.startDragTouch.bind(this));
        this.wrapper.addEventListener('touchmove', this.dragTouch.bind(this));
        this.wrapper.addEventListener('touchend', this.endDrag.bind(this));        
    }
    
    zoomIn() {
        if (this.scale < this.maxScale) {
            this.scale += this.zoomStep;
            this.applyTransform();
        }
    }
    
    zoomOut() {
        if (this.scale > this.minScale) {
            this.scale -= this.zoomStep;
            this.applyTransform();
        }
    }
    
    applyTransform() {
        this.image.style.transform = `scale(${this.scale})`;
        
        if (this.scale > 1) {
            this.wrapper.style.cursor = 'grab';
            this.image.style.cursor = 'grab';
        } else {
            this.wrapper.style.cursor = 'default';
            this.image.style.cursor = 'default';
        }
    }
    
    startDrag(e) {
        if (this.scale <= 1) return;
        
        this.isDragging = true;
        this.wrapper.style.cursor = 'grabbing';
        this.image.style.cursor = 'grabbing';
        
        this.startX = e.pageX - this.wrapper.offsetLeft;
        this.startY = e.pageY - this.wrapper.offsetTop;
        this.scrollLeft = this.wrapper.scrollLeft;
        this.scrollTop = this.wrapper.scrollTop;
        
        e.preventDefault();
    }
    
    drag(e) {
        if (!this.isDragging || this.scale <= 1) return;
        
        e.preventDefault();
        const x = e.pageX - this.wrapper.offsetLeft;
        const y = e.pageY - this.wrapper.offsetTop;
        const walkX = (x - this.startX) * 2;
        const walkY = (y - this.startY) * 2;
        
        this.wrapper.scrollLeft = this.scrollLeft - walkX;
        this.wrapper.scrollTop = this.scrollTop - walkY;
    }
    
    endDrag() {
        this.isDragging = false;
        if (this.scale > 1) {
            this.wrapper.style.cursor = 'grab';
            this.image.style.cursor = 'grab';
        }
    }
    
    startDragTouch(e) {
        if (this.scale <= 1) return;
        
        this.isDragging = true;
        const touch = e.touches[0];
        this.startX = touch.pageX - this.wrapper.offsetLeft;
        this.startY = touch.pageY - this.wrapper.offsetTop;
        this.scrollLeft = this.wrapper.scrollLeft;
        this.scrollTop = this.wrapper.scrollTop;
    }
    
    dragTouch(e) {
        if (!this.isDragging || this.scale <= 1) return;
        
        const touch = e.touches[0];
        const x = touch.pageX - this.wrapper.offsetLeft;
        const y = touch.pageY - this.wrapper.offsetTop;
        const walkX = (x - this.startX) * 2;
        const walkY = (y - this.startY) * 2;
        
        this.wrapper.scrollLeft = this.scrollLeft - walkX;
        this.wrapper.scrollTop = this.scrollTop - walkY;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ImageZoom();
});
