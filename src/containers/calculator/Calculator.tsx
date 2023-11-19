import React, {useEffect, useState} from "react";
import style from "./style.module.scss"
import {SkillTree} from "components/skillTree";
import {canApplyChanges, getInitialSkillTreesState, getUpdatedSkillTrees} from "./calculatorUtils";
import {SkillTreeType} from "components/skillTree/types";
import {CalculatorComponentType} from "./types";
import {SkillPoints} from "components/skillPoints";

const Calculator: React.FC<CalculatorComponentType> = ({maxPoints}) => {
    const [points, setPoints] = useState<number>(0)
    const [skillTrees, setSkillTrees] = useState<SkillTreeType[]>([]);

    useEffect(() => {
        setSkillTrees(getInitialSkillTreesState())
    }, []);

    const onTreeIconClickHandler = (mouseButtonCode: number, skillId: string, treeId: string) => {
        let isSelected = mouseButtonCode === 0; // left click
        if (canApplyChanges(points, maxPoints, skillTrees, isSelected, skillId, treeId)) {
            setPoints(isSelected ? points + 1 : points - 1);
            setSkillTrees(getUpdatedSkillTrees(skillTrees, isSelected, skillId, treeId));
        }
    }

    return (
        <>
            <h1 className={style.header}>TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h1>
            <div className={style.calculatorSkillsContainer}>
                <div className={style.skillsTreesContainer}>
                    {skillTrees.map((skillTree) =>
                        <SkillTree
                            onIconClick={onTreeIconClickHandler}
                            id={skillTree.id}
                            name={skillTree.name}
                            skills={skillTree.skills}
                            key={skillTree.id}/>)}
                </div>
                <SkillPoints points={points} maxPoints={maxPoints}/>
            </div>
        </>
    );

}

export default Calculator;
