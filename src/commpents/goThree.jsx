import { useEffect, useState } from "react";

function GoThree(){
  const [count, setCount] = useState(0);


  function changeCount(e){
    console.log("点击我：", e) 
    setCount(count + 1);
  }

  return (
    <>
      <div>
        这是three页面
        <div onClick={(e)=>changeCount(e)}>点击我{count}</div>
      </div>
    </>
  );
}

export default GoThree;