'use strict';

import { Controller } from 'stimulus';
import formCollection from 'symfony-collection-js';

export default class extends Controller {
    static values = {
        allowAdd: Boolean,
        allowDelete: Boolean,
        allowMoveUp: Boolean,
        allowMoveDown: Boolean,
        prototypeName: String,
        callPostAddOnInit: Boolean,
    };

    connect() {
        const _self = this;
        let options = {
            call_post_add_on_init: this.callPostAddOnInitValue,
            post_add: function(new_elem, context, index) {
                _self.#dispatchCollectionJsEvent('post-add', {new_elem, context, index});
            },
            post_delete: function(delete_elem, context, index) {
                _self.#dispatchCollectionJsEvent('post-delete', {delete_elem, context, index});
            },
            post_up: function(elem, switched_elem, index) {
                _self.#dispatchCollectionJsEvent('post-up', {elem, switched_elem, index});
            },
            post_down: function(elem, switched_elem, index) {
                _self.#dispatchCollectionJsEvent('post-down', {elem, switched_elem, index});
            },
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
            options.btn_delete_selector ='.collection-js-elem-remove';
        }
        if (this.allowMoveUpValue) {
            options.btn_up_selector ='.collection-js-elem-up';
        }
        if (this.allowMoveDownValue) {
            options.btn_down_selector = '.collection-js-elem-down';
        }

        formCollection(this.element.querySelector('.collection-js-root'), options);
    }

    #dispatchCollectionJsEvent(event, detail) {
        const namespace = 'ux-collection-js';
        this.element.dispatchEvent(new CustomEvent(`${namespace}:${event}`, {
            bubbles: true,
            cancelable: true,
            detail
        }));
    }
}
