/**
 * @file mofron-effect-size/index.js
 * @brief size effect for mofron
 * @attention speed parameter is invalid if the width or height specify null
 * @license MIT
 */

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     *
     * @param (mixed) width parameter
     *                object: effect option
     * @param (string (size)) height parameter 
     * @short width,height
     * @type private
     */
    constructor (po, p2) {
        try {
            super();
            this.name('Size');
            this.shortForm('width', 'height');
	    /* init config */
	    this.confmng().add("width", { type: "size" });
	    this.confmng().add("height", { type: "size" });
	    /* set config */
	    if (0 < arguments.length) {
                this.config(po, p2);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    
    /**
     * change size
     *
     * @type private
     */
    contents (cmp) {
        try {
	    /* set width */
	    if (null !== this.width()) { 
	        cmp.width(this.width());
            }
            /* set height */
            if (null !== this.height()) {
                cmp.height(this.height());
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * width size
     *
     * @param (string (size)) width
     * @return (string (size)) width
     * @type parameter
     */
    width (prm) {
        try {
	    return this.confmng("width", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * height size
     *
     * @param (string (size)) height
     * @return (string (size)) height
     * @type parameter
     */
    height (prm) {
        try {
	    return this.confmng("height", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
