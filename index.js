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
     * @param p1 (object) effect option
     * @param p1 (array) enable,disable width ([ena, dis])
     * @param p2 (array) enable,disable height ([ena, dis])
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
     * enable size effect
     *
     * @note private method
     */
    enable (tgt) {
        try {
            if (null !== this.width()) {
                tgt.style({ width : this.width()[0] });
            }
            if (null !== this.height()) {
                tgt.style({ height : this.height()[0] });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * disable size effect
     *
     * @note private method
     */
    disable (tgt) {
        try {
            if (null !== this.width()) {
                tgt.style({ width : this.width()[1] });
            }
            if (null !== this.height()) {
                tgt.style({ height : this.height()[1] });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * width size setter/getter
     *
     * @param p1 (string) enable width (css size value)
     * @param p1 (undefined) call as getter
     * @param p2 (string) disable width (css size value)
     * @param p2 (undefined) call as getter
     * @return (array) width (enable, disable)
     */
    width (en, dis) {
        try {
            if ( (undefined === en) && (undefined === dis) ) {
                /* getter */
                return (undefined === this.m_width) ? null : this.m_width;
            }
            /* setter */
            if (undefined === this.m_width) {
                this.m_width = [null, null];
            }
            if (undefined !== en) {
                this.m_width[0] = mf.func.getSize(en).toString()
            }
            if (undefined !== dis) {
                this.m_width[1] = mf.func.getSize(dis).toString();
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * height size setter/getter
     *
     * @param p1 (string) enable height (css size value)
     * @param p1 (undefined) call as getter
     * @param p2 (string) disable height (css size value)
     * @param p2 (undefined) call as getter
     * @return (array) height (enable, disable)
     */
    height (en, dis) {
        try {
            if ( (undefined === en) && (undefined === dis) ) {
                /* getter */
                return (undefined === this.m_height) ? null : this.m_height;
            }
            /* setter */
            if (undefined === this.m_height) {
                this.m_height = [null, null];
            }
            if (undefined !== en) {
                this.m_height[0] = mf.func.getSize(en).toString()
            }
            if (undefined !== dis) {
                this.m_height[1] = mf.func.getSize(dis).toString();
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Size;
/* end of file */
