import './index.css'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from 'react';
import ProductGrid from '../ProductGrid';


const Filter = () => {

    const [menu, setMenu] = useState(false)
    const [category, setCategory] = useState(false)
    const [filter,setFilter]=useState(true)

    const onClickFilter=()=>{
        setFilter(prevState=>!prevState)
    }

    const openMenu = () => {
        setMenu(prevState => !prevState)
    }

    const onClickCategory = () => {
        setCategory(prevState => !prevState)
    }

    return (
        <div className='filter-product-section'>
            <div className='filter-header'>
                <div className='filter-total-items'>
                    <h1 className='items-count'>3425 ITEMS</h1>
                    <div className='hide-filter' onClick={onClickFilter}> {filter?<p><FaChevronLeft style={{marginRight:'10px'}}/>HIDE FILTER</p>:<p><FaChevronRight style={{marginRight:'10px'}}/>Show FILTER</p>}</div>
                </div>
                <select className='select-group'>
                    <option>RECOMMENDED</option>
                    <option>Newest first</option>
                    <option>Popular</option>
                    <option>Price : High to Low</option>
                    <option>Price : Low to High</option>

                </select>
            </div>
            <div className='filter-products-list'>
            {filter && <div className='filter-gorups'>
                    <div className='input-checkbox'>
                        <input type='checkbox' id='customize' />
                        <label htmlFor='customize'>Customizable</label>
                    </div>
                    <div className='product-categories'>
                        <div className='ideal-head' onClick={openMenu}> <h1 className='items-count'>IDEAL FOR</h1>{menu ? <BsChevronDown /> : <BsChevronUp />}</div>
                        {menu &&
                            <ul>
                                <li className='check-box-category'>
                                    <input type='checkbox' id='men' />
                                    <label htmlFor='men'>MEN</label>

                                </li>
                                <li className='check-box-category'>
                                    <input type='checkbox' id='women' />
                                    <label htmlFor='women'>WOMEN</label>

                                </li>
                                <li className='check-box-category'>
                                    <input type='checkbox' id='kids' />
                                    <label htmlFor='kids'>BABY & KIDS</label>

                                </li>
                            </ul>
                        }
                        <div className='occasion'>
                            <h1 className='occasion-category'>Occasion</h1>
                            <BsChevronDown onClick={onClickCategory} />

                        </div>
                        {category&&<p style={{marginBottom:"0px",marginTop:'0px'}}>All</p>}
                        <div className='occasion'>
                            <h1 className='occasion-category'>Work</h1>
                            <BsChevronDown />

                        </div>
                        {category&&<p style={{marginBottom:"0px",marginTop:'0px'}}>All</p>}
                        <div className='occasion'>
                            <h1 className='occasion-category'>Fabric</h1>
                            <BsChevronDown />

                        </div>
                        {category&&<p style={{marginBottom:"0px",marginTop:'0px'}}>All</p>}
                        <div className='occasion'>
                            <h1 className='occasion-category'>SEGMENT</h1>
                            <BsChevronDown />

                        </div>
                        {category&&<p style={{marginBottom:"0px",marginTop:'0px'}}>All</p>}
                        <div className='occasion'>
                            <h1 className='occasion-category'>SUITABLE FOR</h1>
                            <BsChevronDown />

                        </div>
                        {category&&<p style={{marginBottom:"0px",marginTop:'0px'}}>All</p>}
                        <div className='occasion'>
                            <h1 className='occasion-category'>RAW MATERIAL</h1>
                            <BsChevronDown />

                        </div>
                        {category&&<p style={{marginBottom:"0px",marginTop:'0px'}}>All</p>}
                        <div className='occasion'>
                            <h1 className='occasion-category'>PATTERN</h1>
                            <BsChevronDown />

                        </div>
                        {category&&<p style={{marginBottom:"0px",marginTop:'0px'}}>All</p>}
                    </div>
                </div>}
              
                <ProductGrid/>
                
            </div>
        </div>
    )
}

export default Filter