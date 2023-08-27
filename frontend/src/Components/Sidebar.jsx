
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,Box, Button, Heading, HStack, useDisclosure
} from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import './Sidebar.css'

export const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initalBrand=searchParams.getAll("brand");
  const initalRating=searchParams.getAll("rating");
  const initalsort=searchParams.get("sort")
  const [category, setCategory] = useState(initialCategory || []);
  const [brand, setBrand] = useState(initalBrand || []);
  const [rating, setRating] = useState(initalRating || []);
  const [sort,setsort]=useState(initalsort || "")
  useEffect(() => {
    const params = {
      category,
      brand,
      rating,
      sort,
    };
    setSearchParams(params);
  }, [category,brand,rating, sort]);

  // Filter By Brand

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

 // Filter By Rating

  const handleRating = (e) => {
    let { value } = e.target;
    value=+value
    let newRating = [...rating];
    if (newRating.includes(value)) {
      newRating = newRating.filter((el) => el !== value);
    } else {
      newRating.push(value);
    }
    setRating(newRating);
  };
  
  // <----------------------------------Sorting----------------------------------------------------->

  const handlesort=(e)=>{
    setsort( e.target.value)
 }
//  < ----------------------------------------Reset------------------------------------------------------>
const handleReset=()=>{
  setCategory([])
  setBrand([])
  setsort("")
  setRating([]);
}
  return (
    <>
    <div className={'filter'}>
    <HStack spacing={'30%'}marginTop={'10px'} marginBottom={'20px'}>
    <Heading as='h3' textAlign={'center'} marginLeft={'10px'} size='md'>Filters</Heading>
    <Button onClick={handleReset} marginTop={'5px'} height={'30px'} colorScheme="red" >Reset</Button>
    </HStack>
    <Accordion defaultIndex={[0]} allowMultiple='true'>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} color={'#00163A'}>
          Filter By Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div>
        <div>
          <input
            type="checkbox"
            value={"WheyProtein"}
            onChange={handleCategory}
            checked={category.includes("WheyProtein")}
          />
          <label style={{marginLeft:'10px',fontSize:"15px"}}>WHEYPROTEIN</label>
        </div>

        <div>
          <input
            type="checkbox"
            value={"Multivitamin"}
            onChange={handleCategory}
            checked={category.includes("Multivitamin")}
          />
          <label style={{marginLeft:'10px',fontSize:"15px"}}>MULTIVITAMINS</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Preworkout"}
            onChange={handleCategory}
            checked={category.includes("Preworkout")}
          />
          <label style={{marginLeft:'10px',fontSize:"15px"}}>PRE-WORKOUT</label>
        </div>
      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} color={'#00163A'}>
          Filter By Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div>
        <div>
          <input type="checkbox" value={"NEULIFE"}  onChange={handleBrand}  checked={brand.includes("NEULIFE")}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}} >NEULIFE</label>
        </div>

        <div>
          <input type="checkbox" value={"MUSCLEBLAZE"} onChange={handleBrand}   checked={brand.includes("MUSCLEBLAZE")}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}} >MUSCLEBLAZE</label>
        </div>
        <div>
          <input type="checkbox" value={"MYPROTEIN"}  onChange={handleBrand}  checked={brand.includes("MYPROTEIN")}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}} >MYPROTEIN</label>
        </div>
        <div>
          <input type="checkbox" value={"NUTRABAY"} onChange={handleBrand}  checked={brand.includes("NUTRABAY")}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}} >NUTRABAY</label>
        </div>
      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} color={'#00163A'}>
         Filter By Ratings
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div>
        <div>
          <input type="checkbox" value={4}    onChange={handleRating}  checked={rating[rating.length-1]==4}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}}>Ratings above 4</label>
        </div>

        <div>
          <input type="checkbox" value={3}  onChange={handleRating}   checked={rating[rating.length-1]==3}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}}>Ratings above 3</label>
        </div>
        <div>
          <input type="checkbox" value={2}   onChange={handleRating}  checked={rating[rating.length-1]==2}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}}>Ratings above 2</label>
        </div>
        <div>
          <input type="checkbox" value={1}  onChange={handleRating}  checked={rating[rating.length-1]==1}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}}>Ratings above 1</label>
        </div>
      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} color={'#00163A'}>
         Sort By Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div onChange={handlesort}>
        <input data-testid="sort-asc" 
        type="radio" name="sort" 
        value={"asc"} 
        defaultChecked={sort==="asc"}/>
        <label style={{marginLeft:'10px',fontSize:"15px"}}>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          defaultChecked={sort==="desc"}/>
        <label style={{marginLeft:'10px',fontSize:"15px"}}>Descending</label>
      </div>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>
    <div className={`burgermenu`}>
    <Button ref={btnRef} colorScheme='red' width={'100%'} onClick={onOpen}>
        Filters
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>

          <DrawerBody>
              <Accordion defaultIndex={[0]} allowMultiple='true'>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} color={'#00163A'}>
          Filter By Category
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div>
        <div>
          <input
            type="checkbox"
            value={"WheyProtein"}
            onChange={handleCategory}
            checked={category.includes("WheyProtein")}
          />
          <label style={{marginLeft:'10px',fontSize:"15px"}}>WHEYPROTEIN</label>
        </div>

        <div>
          <input
            type="checkbox"
            value={"Multivitamin"}
            onChange={handleCategory}
            checked={category.includes("Multivitamin")}
          />
          <label style={{marginLeft:'10px',fontSize:"15px"}}>MULTIVITAMINS</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"Preworkout"}
            onChange={handleCategory}
            checked={category.includes("Preworkout")}
          />
          <label style={{marginLeft:'10px',fontSize:"15px"}}>PRE-WORKOUT</label>
        </div>
      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} color={'#00163A'}>
          Filter By Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div>
        <div>
          <input type="checkbox" value={"NEULIFE"}  onChange={handleBrand}  checked={brand.includes("NEULIFE")}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}} >NEULIFE</label>
        </div>

        <div>
          <input type="checkbox" value={"MUSCLEBLAZE"} onChange={handleBrand}   checked={brand.includes("MUSCLEBLAZE")}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}} >MUSCLEBLAZE</label>
        </div>
        <div>
          <input type="checkbox" value={"MYPROTEIN"}  onChange={handleBrand}  checked={brand.includes("MYPROTEIN")}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}} >MYPROTEIN</label>
        </div>
        <div>
          <input type="checkbox" value={"NUTRABAY"} onChange={handleBrand}  checked={brand.includes("NUTRABAY")}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}} >NUTRABAY</label>
        </div>
      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} color={'#00163A'}>
         Filter By Ratings
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div>
        <div>
          <input type="checkbox" value={4}    onChange={handleRating}  checked={rating[rating.length-1]==4}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}}>Ratings above 4</label>
        </div>

        <div>
          <input type="checkbox" value={3}  onChange={handleRating}   checked={rating[rating.length-1]==3}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}}>Ratings above 3</label>
        </div>
        <div>
          <input type="checkbox" value={2}   onChange={handleRating}  checked={rating[rating.length-1]==2}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}}>Ratings above 2</label>
        </div>
        <div>
          <input type="checkbox" value={1}  onChange={handleRating}  checked={rating[rating.length-1]==1}/>
          <label style={{marginLeft:'10px',fontSize:"15px"}}>Ratings above 1</label>
        </div>
      </div>
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} color={'#00163A'}>
         Sort By Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div onChange={handlesort}>
        <input data-testid="sort-asc" 
        type="radio" name="sort" 
        value={"asc"} 
        defaultChecked={sort==="asc"}/>
        <label style={{marginLeft:'10px',fontSize:"15px"}}>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          defaultChecked={sort==="desc"}/>
        <label style={{marginLeft:'10px',fontSize:"15px"}}>Descending</label>
      </div>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme='red' onClick={handleReset}>Reset</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
    </>
  )
};


