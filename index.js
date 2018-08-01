/**
 * Author: Anand Gupta | Github-Username: anandgupta193
 */

import * as postcss from 'postcss';

export default postcss.plugin('postcss-reverse-props', (options = {
    include: [],
    exclude: []
}) => {
    /**
     * This method handles AST transformation logic.
     */
    return root => {
        /**
         * Capturing all the rules having custom attributes
         */
        root.walkAtRules(atrule => {
            /**
             * Remove each rule having decorator as '@web'.
             * if decorator is '@mobile' remove only decorator (preventing scss/less to process decorators.)
             * This utility should be used before any other preprocessors.
             */
            options.exclude.forEach(element => {
                if (atrule.name && atrule.name === element) {
                    atrule.remove();
                }
            });
            options.include.forEach(element => {
                if (atrule.name && atrule.name === element) {
                    const rule = postcss.rule({ selector: atrule.params, source: atrule.source, nodes: atrule.nodes })
                    atrule.replaceWith(rule);
                }
            });

        });
    };
});