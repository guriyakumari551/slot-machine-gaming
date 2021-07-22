import React from 'react';

const SlotM =(props) =>
{
    // this is object dustructing of ecmascript
    let x= props.x;
    let y= props.y;
    let z= props.z;
   
    if(x===y&&y===z)
    {
        return(
            <>
            <div class="slot_inner">
            <h1>{x}{y}{z}</h1>
            <h1>This is matching</h1>
            <hr/>

            </div>


            </>

        );
    }
    else
    {
        return(
            <>
            <div class="slot_inner">
            <h1>{x}{y}{z}</h1>
            <h1>This is not matching</h1>
            <hr/>

            </div>


            </>

        );
    }
};

const Appli =() =>
{
    return(
        <>



        <h1 className="heading_style">🎰 Welcome to<span  style={{fontWeight:'bold'}}>Slot  machine game</span>🎰</h1>
     <div classname="slotmachine">
        <SlotM x='😄' y='😄' z='😄'/>
        <SlotM x='❤️' y='❤️' z='🍎'/>
        <SlotM x='🥪' y='🥪' z='🥪'/>
        <SlotM x='👧' y='👧' z='🥪'/>

        </div>
       

        </>



    );
};
export default Appli; 