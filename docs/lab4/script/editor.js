class ImageEditor {
    constructor() {
        this.wrapper = document.getElementById('wrapper');
        this.image = document.getElementById('image');
        this.zoomInBtn = document.getElementById('zoom-in');
        this.zoomOutBtn = document.getElementById('zoom-out');
        this.addBtn = document.getElementById('add');
        this.removeBtn = document.getElementById('remove');
        
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

        this.addBtn.addEventListener('click', () => this.addImage());
        this.removeBtn.addEventListener('click', () => this.removeImage());
        
        this.wrapper.addEventListener('mousedown', this.startDrag.bind(this));
        this.wrapper.addEventListener('mousemove', this.drag.bind(this));
        this.wrapper.addEventListener('mouseup', this.endDrag.bind(this));
        this.wrapper.addEventListener('mouseleave', this.endDrag.bind(this));
        
        this.wrapper.addEventListener('touchstart', this.startDragTouch.bind(this));
        this.wrapper.addEventListener('touchmove', this.dragTouch.bind(this));
        this.wrapper.addEventListener('touchend', this.endDrag.bind(this));      
        
        this.updateButtonsState();
    }
    
    addImage() {
        if (!this.image.parentNode) {
            this.wrapper.appendChild(this.image);
            this.resetImage();
            this.updateButtonsState();
        }
    }
    
    removeImage() {
        if (this.image.parentNode) {
            this.image.remove();
            this.resetWrapper();
            this.updateButtonsState();
        }
    }

    resetImage() {
        this.scale = 1;
        this.image.style.transform = 'scale(1)';
        this.image.style.cursor = 'default';
    }
    
    resetWrapper() {
        this.wrapper.style.cursor = 'default';
        this.wrapper.scrollLeft = 0;
        this.wrapper.scrollTop = 0;
    }

    updateButtonsState() {
        const hasImage = !!this.image.parentNode;
        
        this.zoomInBtn.disabled = !hasImage || this.scale == this.maxScale;
        this.zoomOutBtn.disabled = !hasImage || this.scale == this.minScale;
        
        this.removeBtn.disabled = !hasImage;
        
        this.addBtn.disabled = hasImage;
        
        this.updateButtonStyles();
    }

    updateButtonStyles() {
        const buttons = [this.zoomInBtn, this.zoomOutBtn, this.addBtn, this.removeBtn];
        
        buttons.forEach(btn => {
            if (btn.disabled) {
                btn.style.opacity = '0.5';
                btn.style.cursor = 'not-allowed';
            } else {
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
            }
        });
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

        this.updateButtonsState();
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
    new ImageEditor();
});
