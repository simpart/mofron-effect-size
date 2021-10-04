/**
 * @file mofron-effect-size/index.js
 * @brief size effect for mofron
 * @license MIT
 */
module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) 
     *                key-value: effect config
     * @short
     * @type private
     */
    constructor (p1,p2) {
        try {
            super();
            this.modname("Move");
	    this.shortForm("fromSize", "toSize");
            
	    this.transition(["width","height"]);
	    //this.transition("height");
            
            /* init config */
	    this.confmng().add("fromWidth",  { type: "size" });
	    this.confmng().add("toWidth",    { type: "size" });
	    this.confmng().add("fromHeight", { type: "size" });
	    this.confmng().add("toHeight",   { type: "size" });
            
            this.speed(1000);
            this.beforeEvent(
                (eff) => {
                    try {
		        let wid = eff.confmng("fromWidth");
			let hei = eff.confmng("fronHeight");
                        eff.component().style({
                            "width"  : (null === wid) ? undefined : wid,
			    "height" : (null === hei) ? undefined : hei
			});
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );

	    if (0 < arguments.length) {
                this.config(p1,p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
	    cmp.style({
                'width'  : this.confmng("toWidth"),
		'height' : this.confmng("toHeight")
	    });
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    fromSize (prm) {
        try {
	    this.confmng("fromWidth", prm);
            return this.confmng("fromHeight", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    toSize (prm) {
        try {
	    this.confmng("toWidth", prm);
            return this.confmng("toHeight", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
