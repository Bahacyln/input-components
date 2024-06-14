import React from 'react'
import Header from '@/components/header';
import Header2 from '@/components/header2';
function MyApp({Component, LayoutName}) {
    console.log("MYAPP TETİKLENDİ")
    let layout;
    console.log(`Layout Name : ${LayoutName}`)
  
    if( LayoutName =="layout2")
        layout = <Header2/>
    else if(LayoutName=='layout3')
        layout = null;
    else if(LayoutName=="NotLayout")
        layout = null;
    else
        layout = <Header/>


  return (
    <div>
        {/* {layout} */}
        {Component}
    </div>
  )
}

export default MyApp;