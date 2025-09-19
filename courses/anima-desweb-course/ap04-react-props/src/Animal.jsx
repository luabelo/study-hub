const Animal = ({animal, tamanho, espelhamento}) => {
  return (
    <i
      className={`fa-${animal} fa-${tamanho}x fa-solid`}
      style={{ transform: `scaleX(${espelhamento})` }} // espelhamento 1 = normal, -1 espelhado
    ></i>
  );
};

export default Animal;