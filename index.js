/**
 * @file mofron-effect-size/index.js
 * @brief size effect for mofron
 * @author simpart
 */
const mf = require('mofron');

mf.effect.Size = class extends mf.Effect {
    /**
     * initialize effect
     *
     * @param (mixed) width parameter
     *                object: effect option
     * @param (string (size)) height parameter 
     * @pmap width,height
     * @type private
     */
    constructor (po, p2) {
        try {
            super();
            this.name('Size');
            this.prmMap(['width', 'height']);
            this.prmOpt(po, p2);
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
            if (null !== this.width()) {
                cmp.width(this.width());
            }
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
	    return this.member("width", "size", prm);
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
	    return this.member("height", "size", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Size;
/* end of file */
