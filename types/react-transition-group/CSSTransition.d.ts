import { Component } from "react";
import { TransitionProps } from "react-transition-group/Transition";

export interface CSSTransitionClassNames {
    appear?: string;
    appearActive?: string;
    enter?: string;
    enterActive?: string;
    exit?: string;
    exitActive?: string;
}

/**
 * The animation classNames applied to the component as it enters or exits.
 * A single name can be provided and it will be suffixed for each stage: e.g.
 *
 * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
 * `fade-exit`, `fade-exit-active`, `fade-appear`, and `fade-appear-active`.
 * Each individual classNames can also be specified independently like:
 *
 * ```js
 * classNames={{
 *  appear: 'my-appear',
 *  appearActive: 'my-active-appear',
 *  enter: 'my-enter',
 *  enterActive: 'my-active-enter',
 *  exit: 'my-exit',
 *  exitActive: 'my-active-exit',
 * }}
 * ```
 */
export interface CSSTransitionProps extends TransitionProps {
    classNames: string | CSSTransitionClassNames;
}

declare class CSSTransition extends Component<CSSTransitionProps> {}

export default CSSTransition;
