'use strict';

import { Controller } from 'stimulus';
import formCollection from 'symfony-collection-js';

export default class extends Controller {
    static values = {
        allowAdd: Boolean,
        allowDelete: Boolean,
        allowMoveUp: Boolean,
        allowMoveDown: Boolean,
        prototypeName: String
    };

    connect() {
        let options = {
            call_post_add_on_init: false,
            prototype_name: this.prototypeNameValue || '__name__',
        };
        if (this.allowAddValue) {
            options = {
                ...options,
                other_btn_add: this.element.querySelectorAll('.collection-js-add-btn'),
                btn_add_selector: '.collection-js-elem-add',
            };
        }
        if (this.allowDeleteValue) {
            options = {
                ...options,
                btn_delete_selector:  '.collection-js-elem-remove',
            };
        }
        if (this.allowMoveUpValue) {
            options = {
                ...options,
                btn_up_selector:  '.collection-js-elem-up',
            };
        }
        if (this.allowMoveDownValue) {
            options = {
                ...options,
                btn_down_selector:  '.collection-js-elem-down',
            };
        }

        formCollection(this.element, options);
    }
}
