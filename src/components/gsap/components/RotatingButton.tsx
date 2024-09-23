import { gsap } from "gsap";

export const RotatingButton = () => {

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.target, { rotation: '50', yoyo: true, repeat: 1 })
  }

  const onEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.target, { scale: 1.2 });
  };

  const onLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.target, { scale: 1 });
  };

  return (
    <>
      <div 
        onMouseEnter={onEnter} 
        onMouseLeave={onLeave} 
        onClick={handleClick}
        style={{
            border: "1px solid black",
            borderRadius: "2px",
            background: 'blue',
            color: '#FFF',
            width: '10rem',
            height: '45px',
            textAlign: "center"
        }}
      >
        Rotating Button
    </div>
    </>
  )
}