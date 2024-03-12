const Product = ({data}) => {

  const {category , description , id , image , price ,rating ,title} =data; 
  return (
    <div className="flex flex-wrap border-2 border-gray-500 justify-center items-center w-[20vw]">
          {title}
    </div>
  )
};

export default Product;
