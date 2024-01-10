import './App.css';
// import Parentsome from './components/Parentsome.jsx';
import Parent from './HOC/Parent.jsx';
import ParentRender from './RenderProps/ParentRender';



function App() {
  return (
    <div className='all'>
        {/* <Parentsome/> */}
        <Parent/> 
        <ParentRender/>
    </div>
  );
}

export default App;