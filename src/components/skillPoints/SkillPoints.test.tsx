import React from 'react';
import {render, screen} from '@testing-library/react';
import SkillPoints from './SkillPoints';

test('renders points correctly', () => {
    render(<SkillPoints points={3} maxPoints={6}/>);
    const element = screen.getByText("3 / 6");
    expect(element).toBeInTheDocument();
});
