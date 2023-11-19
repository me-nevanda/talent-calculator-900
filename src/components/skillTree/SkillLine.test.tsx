import React from 'react';
import {render, screen} from '@testing-library/react';
import SkillLine from './SkillLine';

test('SkillLine renders correctly', () => {
    render(<SkillLine disabled={false}/>);
    const element = screen.getByRole('presentation');
    expect(element).toBeInTheDocument();
});

test('SkillIcon is disabled', () => {
    render(<SkillLine disabled={true}/>);
    const element = screen.getByRole('presentation');
    expect(element).toHaveClass('disabled');
});


