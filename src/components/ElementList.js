import React, { useRef }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addElement, removeElement } from '../store';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './animations.css';

const ElementList = () => {
    const elements = useSelector(state => state.elements);
    const dispatch = useDispatch();
    const refs = useRef({});

    return (
        <div className="p-4">
            <div className="mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
                    onClick={() => dispatch(addElement())}
                >
                    Добавить
                </button>
                <button
                    className={`bg-red-500 text-white px-4 py-2 rounded ${elements.length === 0 && 'opacity-50 cursor-not-allowed'}`}
                    onClick={() => dispatch(removeElement())}
                >
                    Удалить
                </button>
            </div>
            <div className="overflow-hidden">
                <TransitionGroup className="flex space-x-2">
                    {elements.map((el) => {
                        if (!refs.current[el.id]) {
                            refs.current[el.id] = React.createRef();
                        }
                        return (
                            <CSSTransition
                                classNames="element"
                                key={el.id}
                                timeout={500}
                                nodeRef={refs.current[el.id]}
                            >
                                <div
                                    ref={refs.current[el.id]}
                                    className="element flex-shrink-0"
                                    style={{
                                        width: '20%',
                                        height: '200px',
                                        backgroundColor: el.color,
                                    }}
                                />
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default ElementList;
