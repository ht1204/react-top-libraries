import { useReducer } from "react";
import { Col, Row } from 'antd';

import { BasicAnimation } from "./BasicAnimation";
import { UseSpringDemoPage } from "./UseSpringDemo";
import { UseTrailDemoPage } from "./UseTrailDemo";
import { UseTransitionDemoPage } from "./UseTransitionDemo";

type StateType = {
    renderBasic: boolean,
    renderUseSpring: boolean,
    renderUseTrail: boolean,
    renderUseTransition: boolean,
}

type ActionType = {
    type: string;
    enable: boolean;
}

const initialState: StateType = {
    renderBasic: false,
    renderUseSpring: false,
    renderUseTrail: false,
    renderUseTransition: false,
}

function reducer(state = initialState, action: ActionType) {
    switch (action.type) {
        case 'reset': {
            return {
                ...initialState,
            };
        }
        case 'enable_basic': {
            return {
                ...state,
                renderBasic: action.enable,
            };
        }
        case 'enable_useSpring': {
            return {
                ...state,
                renderUseSpring: action.enable,
            };
        }
        case 'enable_useTrail': {
            return {
                ...state,
                renderUseTrail: action.enable,
            };
        }
        case 'enable_useTransition': {
            return {
                ...state,
                renderUseTransition: action.enable,
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

export const IndexDemos = () => {
    const [compState, dispatch] = useReducer(reducer, initialState);

    const handleAnimation = (_event: any, animationType: string) => {
        dispatch({
            type: 'reset',
            enable: false
        });
        dispatch({
            type: animationType,
            enable: true,
        });
    };
    return (
        <Row>
            <Col span={12}>
                <div className="buttonSet">
                    <button
                        onClick={(e) => handleAnimation(e, "enable_basic")}
                        className="navButton"
                        type="button"
                    >
                        Basic Animation
                    </button>
                    <button
                        onClick={(e) => handleAnimation(e, "enable_useSpring")}
                        className="navButton"
                        type="button"
                    >
                        useSpring demo
                    </button>
                    <button
                        onClick={(e) => handleAnimation(e, "enable_useTrail")}
                        className="navButton"
                        type="button"
                    >
                        useTrail demo
                    </button>
                    <button
                        onClick={(e) => handleAnimation(e, "enable_useTransition")}
                        className="navButton"
                        type="button"
                    >
                        useTransition demo
                    </button>
                </div>
            </Col>
            <Col span={12}>
                {compState.renderBasic && <BasicAnimation />}
                {compState.renderUseSpring && <UseSpringDemoPage />}
                {compState.renderUseTrail && <UseTrailDemoPage />}
                {compState.renderUseTransition && <UseTransitionDemoPage />}
            </Col>
        </Row>
    );
};
