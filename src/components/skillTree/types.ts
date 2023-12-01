export interface SkillTreeComponentType {
    id: string;
    name: string;
    skills: SkillType[]
    onIconClick: (buttonClicked: number, skillId: string, treeId: string) => void;
}

export interface SkillLineComponentType {
    disabled: boolean;
}

export interface SkillIconComponentType {
    id: string;
    selected: boolean;
    disabled: boolean;
    iconClass: string;
    onClick: (buttonClicked: number, skillId: string) => void;
}

export interface SkillTreeType {
    id: string;
    name: string;
    skills: SkillType[]
}

export interface SkillType {
    id: string;
    selected: boolean;
    disabled: boolean;
    iconClass: string;
}


