import React from 'react';
import ReactTestUtils from './../node_modules/react-dom/test-utils.js';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
global.shallow = shallow;
global.render = render;
global.mount = mount;

import Banner from './../public/components/Banner.jsx';
import VideoTile from './../public/components/VideoTile.jsx';
import Sort from './../public/components/Sort.jsx'

describe('Banner', () => {
    it('should exist when mounted', () => {
        const wrapper = shallow(<Banner/>);
        assert.equal(wrapper.length, 1);
    });

});

describe('VideoTile', () => {
    it('should exist when mounted', () => {
        const wrapper = shallow(<Banner/>);
        assert.equal(wrapper.length, 1);
    });

});

describe('Sort', () => {
    it('should exist when mounted', () => {
        const wrapper = shallow(<Sort/>);
        assert.equal(wrapper.length, 1);
    });

});