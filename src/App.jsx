import './App.css'
import Counter from './components/UseEffect/Counter'
import CounterTwo from './components/UseEffect/CounterTwo'
import ClassCounter from './components/UseState/ClassCounter'
import HookCounter from './components/UseState/HookCounter'
import HookCounterFour from './components/UseState/HookCounterFour'
import HookCounterThree from './components/UseState/HookCounterThree'
import HookCounterTwo from './components/UseState/HookCounterTwo'
import AllAboutUseState from './components/UseState/AllAboutUseState'
import UseMemoAll from './components/UseMemo/UseMemoAll'

import AllUseEffect from './components/UseEffect/AllUseEffect'
const App = () => {
    return (
        <div className='App'>
            {/* <AllAboutUseState/> */}
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            {/* <HookCounterTwo /> */}
            {/* <HookCounterThree /> */}
            {/* <HookCounterFour /> */}
            {/* <CounterTwo /> */}
            {/* <AllUseEffect/> */}
            <UseMemoAll />
        </div>
    )
}

export default App
