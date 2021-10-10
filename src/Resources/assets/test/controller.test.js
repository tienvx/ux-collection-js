'use strict';

import { Application } from 'stimulus';
import { getByTestId, waitFor } from '@testing-library/dom';
import { clearDOM, mountDOM } from '@symfony/stimulus-testing';
import CollectionJsController from '../dist/controller';
import formCollection from 'symfony-collection-js';

let application;

const startStimulus = () => {
    application = Application.start();
    application.register('collection-js', CollectionJsController);
};

describe('CollectionJsController', () => {
    let container;

    beforeEach(() => {
        container = mountDOM(`
            <div
                data-testid="container"
                data-controller="collection-js"
                data-collection-js-allow-add-value="true"
                data-collection-js-allow-delete-value="true"
                data-collection-js-allow-move-up-value="true"
                data-collection-js-allow-move-down-value="true"
                data-collection-js-call-post-add-on-init-value="true"
            >
                <div
                    class="accordion collection-js-root"
                    data-prototype="<div class=&quot;accordion-item&quot;>
                        <h2 class=&quot;accordion-header&quot;>
                        <button class=&quot;accordion-button&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; aria-expanded=&quot;true&quot; data-bs-target=&quot;#tags___name__-contents&quot;>
                        <i class=&quot;fas fw fa-chevron-right form-collection-item-collapse-marker&quot;></i>
                        </button>
                        <div class=&quot;btn-group collection-js-actions&quot; role=&quot;group&quot; aria-label=&quot;Actions&quot;>
                        <button type=&quot;button&quot; class=&quot;btn btn-link btn-link-primary collection-js-elem-add&quot; title=&quot;Add a new item&quot;><i class=&quot;fa fa-plus&quot;></i></button>
                        <button type=&quot;button&quot; class=&quot;btn btn-link btn-link-secondary collection-js-elem-up&quot; title=&quot;Move item up&quot;><i class=&quot;fa fa-sort-up&quot;></i></button>
                        <button type=&quot;button&quot; class=&quot;btn btn-link btn-link-secondary collection-js-elem-down&quot; title=&quot;Move item down&quot;><i class=&quot;fa fa-sort-down&quot;></i></button>
                        <button type=&quot;button&quot; class=&quot;btn btn-link btn-link-danger collection-js-elem-remove&quot; title=&quot;Remove the item&quot;><i class=&quot;fa fa-trash-alt&quot;></i></button>
                        </div>
                        </h2>
                        <div class=&quot;accordion-collapse collapse show&quot; style=&quot;&quot; id=&quot;tags___name__-contents&quot;>
                        <div class=&quot;accordion-body&quot;><label>Tag:<input type=&quot;text&quot; name=&quot;tags[__name__]&quot;>
                        </label>
                        </div>
                        </div>
                        </div>"
                >
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#tags_0-contents">
                            <i class="fas fw fa-chevron-right form-collection-item-collapse-marker"></i>
                            </button>
                            <div class="btn-group collection-js-actions" role="group" aria-label="Actions">
                                <button type="button" class="btn btn-link btn-link-primary collection-js-elem-add" title="Add a new item"><i class="fa fa-plus"></i></button>
                                <button type="button" class="btn btn-link btn-link-secondary collection-js-elem-up" title="Move item up"><i class="fa fa-sort-up"></i></button>
                                <button type="button" class="btn btn-link btn-link-secondary collection-js-elem-down" title="Move item down"><i class="fa fa-sort-down"></i></button>
                                <button type="button" class="btn btn-link btn-link-danger collection-js-elem-remove" title="Remove the item"><i class="fa fa-trash-alt"></i></button>
                            </div>
                        </h2>
                        <div class="accordion-collapse collapse show" style="" id="tags_0-contents">
                            <div class="accordion-body"><label>Tag:<input type="text" name="tags[0]">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-link collection-js-add-btn">
                    <i class="fa fa-plus pr-1"></i>
                    Add a new item
                </button>
            </div>
        `);
    });

    afterEach(() => {
        application.stop();
        clearDOM();
    });

    it('init', async () => {
        let dispatched = null;
        getByTestId(container, 'container').addEventListener(
            'ux-collection-js:post-add',
            (event) => (dispatched = event)
        );

        await startStimulus();

        // The event should have been dispatched
        expect(dispatched).not.toBeNull();
        expect(dispatched.detail.new_elem).toStrictEqual(container.querySelector('.accordion-item'));
        expect(dispatched.detail.context).toBe(formCollection.POST_ADD_CONTEXT.INIT);
        expect(dispatched.detail.index).toBe(0);
    });

    it('add', async () => {
        let dispatched = null;
        getByTestId(container, 'container').addEventListener(
            'ux-collection-js:post-add',
            (event) => (dispatched = event)
        );

        await startStimulus();

        // Click the add button
        container.querySelector('.collection-js-add-btn').click();

        await waitFor(() => expect(container.querySelectorAll('.accordion-item').length).toBe(2));

        // The event should have been dispatched
        expect(dispatched).not.toBeNull();
        expect(dispatched.detail.new_elem).toStrictEqual(container.querySelectorAll('.accordion-item')[1]);
        expect(dispatched.detail.context).toBe(formCollection.POST_ADD_CONTEXT.OTHER_BTN_ADD);
        expect(dispatched.detail.index).toBe(1);
    });

    it('element add', async () => {
        let dispatched = null;
        getByTestId(container, 'container').addEventListener(
            'ux-collection-js:post-add',
            (event) => (dispatched = event)
        );

        await startStimulus();

        // Click the element add button
        container.querySelector('.collection-js-elem-add').click();

        await waitFor(() => expect(container.querySelectorAll('.accordion-item').length).toBe(2));

        // The event should have been dispatched
        expect(dispatched).not.toBeNull();
        expect(dispatched.detail.new_elem).toStrictEqual(container.querySelectorAll('.accordion-item')[1]);
        expect(dispatched.detail.context).toBe(formCollection.POST_ADD_CONTEXT.BTN_ADD);
        expect(dispatched.detail.index).toBe(1);
    });

    it('element delete', async () => {
        let dispatched = null;
        getByTestId(container, 'container').addEventListener(
            'ux-collection-js:post-delete',
            (event) => (dispatched = event)
        );

        await startStimulus();

        // Click the element remove button
        container.querySelector('.collection-js-elem-remove').click();

        await waitFor(() => expect(container.querySelectorAll('.accordion-item').length).toBe(0));

        // The event should have been dispatched
        expect(dispatched).not.toBeNull();
        expect(dispatched.detail.delete_elem).not.toBeNull();
        expect(container.contains(dispatched.detail.delete_elem)).toBeFalsy();
        expect(dispatched.detail.context).toBe(formCollection.POST_DELETE_CONTEXT.BTN_DELETE);
        expect(dispatched.detail.index).toBe(0);
    });

    it('element up', async () => {
        let dispatched = null;
        getByTestId(container, 'container').addEventListener(
            'ux-collection-js:post-up',
            (event) => (dispatched = event)
        );

        await startStimulus();

        // Click the add button, then element up button
        container.querySelector('.collection-js-add-btn').click();
        container.querySelectorAll('.collection-js-elem-up')[1].click();

        await waitFor(() => expect(container.querySelectorAll('.accordion-item').length).toBe(2));

        // The event should have been dispatched
        expect(dispatched).not.toBeNull();
        expect(dispatched.detail.elem).toStrictEqual(container.querySelectorAll('.accordion-item')[0]);
        expect(dispatched.detail.switched_elem).toStrictEqual(container.querySelectorAll('.accordion-item')[1]);
        expect(dispatched.detail.index).toBe(1);
    });

    it('element down', async () => {
        let dispatched = null;
        getByTestId(container, 'container').addEventListener(
            'ux-collection-js:post-down',
            (event) => (dispatched = event)
        );

        await startStimulus();

        // Click the add button, then element down button
        container.querySelector('.collection-js-add-btn').click();
        container.querySelectorAll('.collection-js-elem-down')[0].click();

        await waitFor(() => expect(container.querySelectorAll('.accordion-item').length).toBe(2));

        // The event should have been dispatched
        expect(dispatched).not.toBeNull();
        expect(dispatched.detail.elem).toStrictEqual(container.querySelectorAll('.accordion-item')[1]);
        expect(dispatched.detail.switched_elem).toStrictEqual(container.querySelectorAll('.accordion-item')[0]);
        expect(dispatched.detail.index).toBe(0);
    });
});
