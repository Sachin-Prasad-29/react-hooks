import './App.css'
import Counter from './components/UseEffect/Counter'
import ClassCounter from './components/UseState/ClassCounter'
import HookCounter from './components/UseState/HookCounter'
import HookCounterFour from './components/UseState/HookCounterFour'
import HookCounterThree from './components/UseState/HookCounterThree'
import HookCounterTwo from './components/UseState/HookCounterTwo'

const App = () => {
    return (
        <div className='App'>
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            {/* <HookCounterTwo /> */}
            {/* <HookCounterThree /> */}
            {/* <HookCounterFour /> */}
            <Counter />
        </div>
    )
}

export default App
