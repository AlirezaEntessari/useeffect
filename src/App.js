import { useState, useEffect } from "react";

function App() {
  // const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([])
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // console.log('render')

  // useEffect(() => {
  //   console.log('resource type changed')
  // }, [resourceType])

  // useEffect(() => {
  //   console.log('onMount')
  // }, [])

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // }, [resourceType])

  return (
    // <>
    //   <div>
    //     <button onClick={() => setResourceType("posts")}>Posts</button>
    //     <button onClick={() => setResourceType("users")}>Users</button>
    //     <button onClick={() => setResourceType("comments")}>Comments</button>
    //   </div>

    //   <h1>{resourceType}</h1>
    //   {items.map(item => {
    //     return <pre>{JSON.stringify(item)}</pre>
    //   })}
    // </>
    <div>
      {windowWidth}
    </div>
  );
}

export default App;
