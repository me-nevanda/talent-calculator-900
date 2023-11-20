import React from "react";
import style from "./style.module.scss"
import SkillIcon from "./SkillIcon";
import {SkillTreeComponentType} from "./types";
import SkillLine from "./SkillLine";

const SkillTree: React.FC<SkillTreeComponentType> = ({name, skills, id, onIconClick}) => {
    const onClickIconHandler = (buttonClicked: number, skillId: string) => {
        onIconClick(buttonClicked, skillId, id)
    }

    return (
        <div className={style.skillTree}>
            <div className={style.name}>{name}</div>
            <div className={style.skillIconsContainer}>
                {skills.map((skill) =>
                    <React.Fragment key={`${id}${skill.id}`}>
                        <SkillIcon
                            onClick={onClickIconHandler}
                            id={skill.id}
                            disabled={skill.disabled}
                            selected={skill.selected}
                        />
                        <SkillLine disabled={!skill.selected}/>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}

export default SkillTree;
