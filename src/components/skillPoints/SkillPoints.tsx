import React from "react";
import style from "./style.module.scss"
import {SkillPointsComponentType} from "./types";

const SkillPoints: React.FC<SkillPointsComponentType> = ({points, maxPoints}) => {
    return (
        <div className={style.pointsContainer}>
            <div className={style.points}>{points} / {maxPoints}</div>
            <div className={style.info}>Points Spend</div>
        </div>
    );

}

export default SkillPoints;
