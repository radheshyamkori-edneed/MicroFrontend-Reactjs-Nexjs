import { mount } from 'marketing/MarketingApp';
import React,{ useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
       const{ onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname: nextPathname}) => {
                const { pathname } = history.location;
                if(pathname != nextPathname){
                   // console.log(pathname);
                    history.push(nextPathname);
                }
                console.log(nextPathname);
                console.log('The container noticed Navigation in Marketing');              
            },
        });
        history.listen(onParentNavigate);

    }, []);

    return <div ref={ref} />;
};