type PropsType = {
  heading: string;
  count: number;
  func1:()=>void
};

const Box = ({ heading, count,func1 }: PropsType) => {
  return (
    <>
      <div>
        Getting started with react and typescript along with 6 Pack Programmer
      </div>
      <div>{heading}</div>
      <div>{count}</div>
      <button onClick={()=>func1()} style={{"background":"red"}}>Click me to see magic</button>
    </>
  );
};

export default Box;
