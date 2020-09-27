import React from "react";
import ProfileStatus from "./ProfileStatus";
import renderer from 'react-test-renderer';

describe('ProfileStatus component', () => {
    test('after render, component has to have span', () => {
        const component = renderer.create(<ProfileStatus status={'I\'m a man'}/>);
        const instance = component.root;
        const span = instance.findByType('input');
        expect(span).toBeNull();
    });
});
