import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import SkillIcon from './SkillIcon';

test('SkillIcon renders correctly', () => {
    render(<SkillIcon id={'foo'} selected={true} disabled={false} onClick={() => {
    }}/>);
    const element = screen.getByLabelText("foo");
    expect(element).toBeInTheDocument();
});

test('SkillIcon is disabled', async () => {
    render(<SkillIcon id={'foo'} selected={false} disabled={true} onClick={() => {
    }}/>);
    const element = screen.getByRole('presentation');
    expect(element).toHaveClass('disabled');
});

test('SkillIcon is selected', async () => {
    render(<SkillIcon id={'foo'} selected={true} disabled={false} onClick={() => {
    }}/>);
    const element = screen.getByRole('presentation');
    expect(element).toHaveClass('selected');
});

test('SkillIcon on click callback', async () => {
    const onClick = jest.fn();
    render(<SkillIcon id={'foo'} selected={false} disabled={false} onClick={onClick}/>);
    const element = screen.getByRole('button');

    fireEvent.click(element, {
        buttonClicked: 0, skillId: 'sk1'
    });

    expect(onClick).toHaveBeenCalledTimes(1);
});

test('SkillIcon on click no callback', async () => {
    const onClick = jest.fn();
    render(<SkillIcon id={'foo'} selected={false} disabled={true} onClick={onClick}/>);
    const element = screen.getByRole('button');

    fireEvent.click(element, {
        buttonClicked: 0, skillId: 'sk1'
    });
    expect(onClick).toHaveBeenCalledTimes(0);
});
