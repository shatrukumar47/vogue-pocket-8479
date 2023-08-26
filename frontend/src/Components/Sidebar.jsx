
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"


export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initalBrand=searchParams.getAll("brand");
  const initalOrder=searchParams.get("order")
  const [category, setCategory] = useState(initialCategory || []);
  const [brand, setBrand] = useState(initalBrand || []);
  const [order,setOrder]=useState(initalOrder || "")
  useEffect(() => {
    const params = {
      category,
      brand,
      order,
    };
    setSearchParams(params);
  }, [category,brand, order]);

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  // Filter By Brand

  const handleBrand = (e) => {
    const { value } = e.target;
    let newBrand = [...brand];
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };
   console.log("Brand"  , brand);
  // <----------------------------------Sorting----------------------------------------------------->

  const handleOrder=(e)=>{
    setOrder( e.target.value)
 }
//  < ----------------------------------------Reset------------------------------------------------------>
const handleReset=()=>{
  setCategory([])
  setBrand([])
  setOrder("")

}
  return (
    <div>
      <h3>Filters</h3>
      <hr/>
      <h3>Filter by Category</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value={"WheyProtein"}
            onChange={handleCategory}
            checked={category.includes("WheyProtein")}
          />
          <label>WHEYPROTEIN</label>
        </div>

        <div>
          <input
            type="checkbox"
            value={"Multivitamin"}
            onChange={handleCategory}
            checked={category.includes("Multivitamin")}
          />
          <label>MULTIVITAMINS</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Preworkout"}
            onChange={handleCategory}
            checked={category.includes("Preworkout")}
          />
          <label>PRE-WORKOUT</label>
        </div>
      </div>
      <hr/>
      <h3> Filter By Brand</h3>
      <div>
        <div>
          <input type="checkbox" value={"NEULIFE"}  onChange={handleBrand}  checked={brand.includes("W")}/>
          <label>NEULIFE</label>
        </div>

        <div>
          <input type="checkbox" value={"MUSCLEBLAZE"} onChange={handleBrand}   checked={brand.includes("Ethnic")}/>
          <label>MUSCLEBLAZE</label>
        </div>
        <div>
          <input type="checkbox" value={"MYPROTEIN"}  onChange={handleBrand}  checked={brand.includes("Aunok")}/>
          <label>MYPROTEIN</label>
        </div>
        <div>
          <input type="checkbox" value={"NUTRABAY"} onChange={handleBrand}  checked={brand.includes("Rangriti")}/>
          <label>NUTRABAY</label>
        </div>
      </div>

      <hr/>
      <h3>Sort By Price</h3>
      <div onChange={handleOrder}>
        <input data-testid="sort-asc" 
        type="radio" name="sort" 
        value={"asc"} 
        defaultChecked={order=="asc"}
        
        />
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          defaultChecked={order=="desc"}

        />
        <label>Descending</label>
      </div>
      <hr/>
      <button onClick={handleReset}>RESET FILTERS</button>
    </div>
  );
};


