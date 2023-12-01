import React from 'react';
import {render, screen} from '@testing-library/react';
import SkillTree from './SkillTree';

const skills = [
    {id: 'skill1', iconClass: 'skill1', name: 'skill1', selected: false, disabled: false},
    {id: 'skill2', iconClass: 'skill2', name: 'skill2', selected: false, disabled: false},
    {id: 'skill3', iconClass: 'skill3', name: 'skill3', selected: false, disabled: false}
];

test('SkillTree renders correctly', () => {
    render(<SkillTree
        onIconClick={jest.fn()}
        id={'sk1'}
        name={'skill Tree 1'}
        skills={skills}/>
    );
    const element = screen.getByText("skill Tree 1");
    expect(element).toBeInTheDocument();
});
test('SkillTree renders correctly with skill Icons', () => {
    render(<SkillTree
        onIconClick={jest.fn()}
        id={'sk1'}
        name={'skill Tree 1'}
        skills={skills}/>
    );
    const elements = screen.getAllByRole('button');
    expect(elements).toHaveLength(3);
});

