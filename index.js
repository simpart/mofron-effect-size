/**
 * @file mofron-effect-size/index.js
 * @brief size effect for mofron
 * @attention speed parameter is invalid if the width or height specify null
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
	    let sflg = this.sizeFlag();
            if (true === sflg[0]) {
                cmp.width(this.width());
            }
            if (true === sflg[1]) {
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
	    if (undefined !== prm) {
                this.sizeFlag(true);
	    }
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
	    if (undefined !== prm) {
                this.sizeFlag(undefined, true);
	    }
	    return this.member("height", "size", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * size flag for check default value
     * 
     * @param (boolean) true: width is not default value
     * @param (boolean) true: heigh is not default value
     * @return (array) size flag [(width flag), (height flag)]
     * @type private
     */
    sizeFlag (wid,hei) {
        try {
            if ( (undefined === wid) && (undefined === hei) ) {
                /* getter */
		return (undefined === this.m_sizflg) ? [false,false] : this.m_sizflg;
	    }
	    let sflg = this.sizeFlag();
	    if ('boolean' === typeof wid) {
                sflg[0] = wid;
	    } else if ('boolean' === typeof hei) {
                sflg[1] = hei;
	    }
	    this.m_sizflg = sflg;
	} catch (e) {
	    console.error(e.stack);
	    throw e;
	}
    }
}
module.exports = mofron.effect.Size;
/* end of file */
