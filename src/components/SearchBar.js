import { useState } from "react";

function SearchBar(props) {
    const { products } = props;
    const [search, setSearch] = useState('')

    const searchText = e.target.value

    const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchText.toLowerCase())
  );

    return (
        <div>
        <p>Search</p>
        <input type="text" value={search} onChange={(e) => setSearch(e-target.value))}  placeholder="Search.."></input><br />
        <input type="checkbox" name="inStock"></input>
        <label for="products"> Only shows products in Stock </label>
        </div>
    )
}

export default SearchBar;