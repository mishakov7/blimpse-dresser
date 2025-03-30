import { useState } from 'react'
import Dresser from './components/Dresser';
import Example1 from './components/examples/Example1';
import Example2 from './components/examples/Example2';

function App() {
  const [drawerDirection, setDrawerDirection] = useState("");
  const [drawerContent, setDrawerContent] = useState(null);

  function toggleDrawer(dir, content) {

    if (drawerDirection === dir) {
      setDrawerDirection("");
    } else {
      setDrawerDirection(dir);
    }

    if (drawerContent === content) {
      setDrawerContent(null);
    } else {
      setDrawerContent(content);
    }

  }

  return (
    <main>
      <Dresser direction={drawerDirection} drawer={drawerContent}>
          <div className="dpad">
              <button onClick={() => toggleDrawer("top", Example1)} className="top">Toggle Top Drawer</button>
              <button onClick={() => toggleDrawer("left", Example1)} className="lft">Toggle Left Drawer</button>
              <button onClick={() => toggleDrawer("right", Example2)} className="rgt">Toggle Right Drawer</button>
              <button onClick={() => toggleDrawer("bottom", Example2)} className="btm">Toggle Bottom Drawer</button>
          </div>

          <div className="readme">
              <h1 style={{ textTransform: "lowercase" }}>Blimpse</h1>
              <span className='subtitle'>Dresser System</span>
              <p>Explore the most striking feature of the Blimpse design- the dresser/drawer system! This demo re-uses the same component to open drawers from the left, top, right, and bottom at different sizes. I will optimize this system in the future to make it easier for anyone to use!</p>
          </div>
      </Dresser>
    </main>
  )
}

export default App
