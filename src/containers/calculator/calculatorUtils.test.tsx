import {
    canApplyChanges,
    getUpdatedSkillTrees,
} from './calculatorUtils';

test('canApplyChanges should return true for valid changes', () => {
    const skillTrees = [
        {
            id: 'skt1', name: 'TALENT PATH 1', skills: [
                {id: 'skill1', name: 'skill1', selected: false, disabled: false},
                {id: 'skill3', name: 'skill3', selected: false, disabled: true},
            ]
        },
    ];
    const points = 1;
    const maxPoints = 5;
    const isSelected = true;
    const skillId = 'skill1';
    const treeId = 'skt1';

    const result = canApplyChanges(points, maxPoints, skillTrees, isSelected, skillId, treeId);
    expect(result).toBe(true);
});

test('canApplyChanges should return false for valid changes', () => {
    const skillTrees = [
        {
            id: 'skt1', name: 'TALENT PATH 1', skills: [
                {id: 'skill1', name: 'skill1', selected: false, disabled: false},
                {id: 'skill3', name: 'skill3', selected: false, disabled: true},
            ]
        },
    ];
    const points = 5;
    const maxPoints = 5;
    const isSelected = true;
    const skillId = 'skill1';
    const treeId = 'skt1';

    const result = canApplyChanges(points, maxPoints, skillTrees, isSelected, skillId, treeId);

    expect(result).toBe(false);
});

test('canApplyChanges should return false for no changes', () => {
    const skillTrees = [
        {
            id: 'skt1', name: 'TALENT PATH 1', skills: [
                {id: 'skill1', name: 'skill1', selected: true, disabled: false},
                {id: 'skill3', name: 'skill3', selected: false, disabled: false},
            ]
        },
    ];
    const points = 4;
    const maxPoints = 5;
    const isSelected = true;
    const skillId = 'skill1';
    const treeId = 'skt1';

    const result = canApplyChanges(points, maxPoints, skillTrees, isSelected, skillId, treeId);

    expect(result).toBe(false);
});

test('getUpdatedSkillTrees should update skill trees correctly (add)', () => {
    const skillTrees = [
        {
            id: 'skt1', name: 'TALENT PATH 1', skills: [
                {id: 'skill1', name: 'skill1', selected: true, disabled: false},
                {id: 'skill2', name: 'skill2', selected: false, disabled: false},
                {id: 'skill3', name: 'skill3', selected: false, disabled: true},
            ]
        },
    ];
    const isSelected = true;
    const skillId = 'skill2';
    const treeId = 'skt1';

    const updatedSkillTrees = getUpdatedSkillTrees(skillTrees, isSelected, skillId, treeId);
    expect(updatedSkillTrees[0].skills[1].selected).toBe(true);
    expect(updatedSkillTrees[0].skills[2].selected).toBe(false);
    expect(updatedSkillTrees[0].skills[2].disabled).toBe(false);
});

test('getUpdatedSkillTrees should update skill trees correctly (remove)', () => {
    const skillTrees = [
        {
            id: 'skt1', name: 'TALENT PATH 1', skills: [
                {id: 'skill1', name: 'skill1', selected: true, disabled: false},
                {id: 'skill2', name: 'skill2', selected: true, disabled: false},
                {id: 'skill3', name: 'skill3', selected: false, disabled: false},
            ]
        },
    ];
    const isSelected = false;
    const skillId = 'skill2';
    const treeId = 'skt1';

    const updatedSkillTrees = getUpdatedSkillTrees(skillTrees, isSelected, skillId, treeId);
    expect(updatedSkillTrees[0].skills[1].selected).toBe(false);
    expect(updatedSkillTrees[0].skills[2].selected).toBe(false);
    expect(updatedSkillTrees[0].skills[2].disabled).toBe(true);
});