import React from 'react';
import AddcartCard from './AddcartCard';
import EmptyCard from './EmptyCard';

const Addcart = ({ cart, setCart }) => {
    const handleRemove = (cartitem) => {
        const newcart = cart.filter( i => i.id!== cartitem )
        setCart(newcart)
        
       
    }

    return (
        <div>
            {
                cart.length > 0 ? <div className='w-11/12 mx-auto'>
                        {
                            cart.map( cartitem => <AddcartCard key={cartitem.id} cartitem={cartitem} handleRemove={handleRemove}></AddcartCard>)
                        }
                </div> : <EmptyCard />
            }
        </div>
    );
};

export default Addcart;