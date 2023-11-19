import React from "react";
import style from "./style.module.scss"
import {SkillLineComponentType} from "./types";
import cx from 'classnames';

const SkillLine: React.FC<SkillLineComponentType> = ({disabled}) => {
    return (
        <div role="presentation" className={cx(style.skillLine, style[disabled ? 'disabled' : ''])}></div>
    );
}

export default SkillLine;
