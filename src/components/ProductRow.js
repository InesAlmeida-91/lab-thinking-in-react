import '../index.css';

function ProductRow(props) {
    const { product } = props;
  
    const textColorClass = product.inStock ? 'in-stock' : 'out-of-stock';
  
    return (
      <tr>
        <td className={textColorClass}>{product.name}</td>
        <td className={textColorClass}>{product.price}</td>
      </tr>
    );
  }

export default ProductRow;