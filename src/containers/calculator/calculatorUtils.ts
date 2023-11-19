import {SkillTreeType, SkillType} from "components/skillTree/types";

const getSkills = (...skills: string[]): SkillType[] => {
    return skills.map((skill, index) => {
        return {id: skill, name: skill, selected: false, disabled: index !== 0}
    })
}

const initialSkillTreesState: SkillTreeType[] = [
    {id: 'skt1', name: 'TALENT PATH 1', skills: getSkills('skill1', 'skill2', 'skill3', 'skill4')},
    {id: 'skt2', name: 'TALENT PATH 1', skills: getSkills('skill5', 'skill6', 'skill7', 'skill8')}
];

export const getInitialSkillTreesState = () => initialSkillTreesState;

const canBeUnchecked = (skills: SkillType[], skillIndex: number) => {
    return !skills[skillIndex + 1]?.selected;
}

const getUpdatedSkills = (skills: SkillType[], skillIndex: number, isSelected: boolean) => {
    const result = [...skills]
    result[skillIndex].selected = isSelected;
    if (result[skillIndex + 1]) {
        result[skillIndex + 1].disabled = !isSelected;
    }
    return result;
}

export const canApplyChanges = (points: number, maxPoints: number, skillTrees: SkillTreeType[], isSelected: boolean, skillId: string, treeId: string) => {
    if (points === maxPoints && isSelected) return false;
    const {skillTreeIndex, skillIndex, skills} = getSkillsIdentifyData(skillTrees, treeId, skillId);
    if (!canBeUnchecked(skills, skillIndex)) return false;
    return skillTrees[skillTreeIndex].skills[skillIndex].selected !== isSelected;

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



