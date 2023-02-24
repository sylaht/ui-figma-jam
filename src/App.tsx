import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
    <ReactFlow>
      <Background 
      gap={12}
      size={2}
      color='#ddd'
      />
    </ReactFlow>
    </div>
  )
}

export default App
