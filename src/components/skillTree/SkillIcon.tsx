import React from "react";
import style from "./style.module.scss"
import {SkillIconComponentType} from "./types";
import cx from 'classnames';

const SkillIcon: React.FC<SkillIconComponentType> = ({id, selected, disabled, onClick}) => {
    const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const isCorrectButtonType = event.button === 0 || event.button === 2;
        !disabled && isCorrectButtonType && onClick(event.button, id);
    }

    const onTouchHandler = (event: React.TouchEvent<HTMLElement>) => {
        event.preventDefault();
        const buttonClicked = selected ? 2 : 0;
        !disabled && onClick(buttonClicked, id);
    }

    return (
        <div
            className={cx(
                style.skillIconContainer,
                style[selected ? 'selected' : ''],
                style[disabled ? 'disabled' : '']
            )}
            role="presentation"
        >
            <button
                onContextMenu={onClickHandler}
                onClick={onClickHandler}
                onTouchEnd={onTouchHandler}
                className={cx(
                    style.skillIcon,
                    style[id],
                    style[disabled ? 'disabled' : '']
                )}
                aria-label={id}
            >
            </button>
        </div>
    );

}

export default SkillIcon;
