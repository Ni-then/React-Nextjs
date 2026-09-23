import React from 'react'

const App = () => {
  const data = [
    {
      name:"nithen",
      title:"how to grow on instagram"
    },{
      name:"harkirat",
      title:"how to make CEX"
    }
    ,{
      name:"harry",
      title:"how to make money from freelecning"
    }
  ]
  // setInterval(()=>{
  //   data.push({
  //     name:"random_name",
  //     title:"random_title"
  //   })
  //   console.log(data)
  // },1000)
  return (
    <div>
      {/* <Post name="instagram" title="how to grow on insta" />
      <Post name="instagram" title="how to grow on insta" />
      <Post name="instagram" title="how to grow on insta" /> */}
      {data.map((p) => <Post name={p.name} title={p.title} />)}
    </div>
  )
}
function Post(props:any) {
  return (
    <div className='text-xl border-2 border-solid border-red-700'>
      <p>{props.name}</p>
      <p>{props.title}</p>
    </div>
  )
}

export default App