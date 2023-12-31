import {SkillTreeType, SkillType} from "components/skillTree/types";

const getSkillObjects = (...skills: string[]): SkillType[] => {
    return skills.map((skill, index) => {
        return {id: skill + index, iconClass: skill, name: skill, selected: false, disabled: index !== 0}
    })
}

const initialSkillTreesState: SkillTreeType[] = [
    {id: 'skt1', name: 'TALENT PATH 1', skills: getSkillObjects('skill1', 'skill2', 'skill3', 'skill4')},
    {id: 'skt2', name: 'TALENT PATH 2', skills: getSkillObjects('skill5', 'skill6', 'skill7', 'skill8')}
];

export const getInitialSkillTreesState = () => initialSkillTreesState;

export const getMaxPoints = () => 6;

const getUpdatedSkills = (skills: SkillType[], skillIndex: number, isSelected: boolean) => {
    const result = [...skills]
    result[skillIndex].selected = isSelected;
    result[skillIndex + 1] && (result[skillIndex + 1].disabled = !isSelected);
    return result;
}

const getSkillsIdentifyData = (skillTrees: SkillTreeType[], treeId: string, skillId: string) => {
    const skillTreeIndex = skillTrees.findIndex((skillTree) => skillTree.id === treeId);
    const skillIndex = skillTrees[skillTreeIndex].skills.findIndex((skill) => skill.id === skillId);
    const skills = skillTrees[skillTreeIndex].skills;
    return {skillTreeIndex, skillIndex, skills};
}

export const getUpdatedSkillTrees = (skillTrees: SkillTreeType[], isSelected: boolean, skillId: string, treeId: string): SkillTreeType[] => {
    const {skillTreeIndex, skillIndex, skills} = getSkillsIdentifyData(skillTrees, treeId, skillId);
    const newTree = {...skillTrees[skillTreeIndex]};
    newTree.skills = getUpdatedSkills(skills, skillIndex, isSelected);
    const result = [...skillTrees];
    result[skillTreeIndex] = newTree;
    return result;
}

export const canApplyChanges = (points: number, maxPoints: number, skillTrees: SkillTreeType[], isSelected: boolean, skillId: string, treeId: string) => {
    if (points === maxPoints && isSelected) return false;
    const {skillTreeIndex, skillIndex, skills} = getSkillsIdentifyData(skillTrees, treeId, skillId);
    if (skills[skillIndex + 1]?.selected) return false;
    return skillTrees[skillTreeIndex].skills[skillIndex].selected !== isSelected;
}

export const countPoints = (skillTrees: SkillTreeType[]):number => {
    let result = 0;
    skillTrees.forEach((skillTree) => {
        const selectedSkillsCount = skillTree.skills.filter((skill) => skill.selected).length;
        result += selectedSkillsCount;
    })
    return result;
}



