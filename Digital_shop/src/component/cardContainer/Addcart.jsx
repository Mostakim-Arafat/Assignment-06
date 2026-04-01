import React from 'react';
import AddcartCard from './AddcartCard';
import EmptyCard from './EmptyCard';
import Button from '../../UI/button';
const Addcart = ({ cart, setCart }) => {
    const handleRemove = (cartitem) => {
        const newcart = cart.filter( i => i.id!== cartitem )
        setCart(newcart)
            
    }
    const handleempty = () => {
        const newCart = []
        setCart(newCart)
    }
    const totalmoneyarry = cart.map( i => i.price)
    const totalmoney = totalmoneyarry.reduce((sum,i) => sum + i,0)

    return (
        <div>
            {
                cart.length > 0 ? <div className='w-11/12 mx-auto flex flex-col rounded-2xl shadow p-5'>
                        <div>
                        {
                            cart.map( cartitem => <AddcartCard key={cartitem.id} cartitem={cartitem} handleRemove={handleRemove}></AddcartCard>)
                        }
                        </div>
                        <div className='flex justify-between items-center my-4'>
                            <p>Total:</p>
                            <p>$ {totalmoney }</p>
                        </div>
                        
                            <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl' onClick={handleempty}>Procced to pay</button>
                        
                </div> : <EmptyCard />
            }
        </div>
    );
};

export default Addcart;