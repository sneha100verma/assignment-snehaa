import React from 'react'
import Navbar from './Navbar'
import "./Page.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import a from "./a.png"
import b from "./b.png"
import c from "./c.png"
import e from "./e.png"
import ec from "./ec.png"
import p from "./p.png"
import rr from "./rr.png"





const page = () => {
  return (
    <div className='main'>
   <Navbar/>
   <div className="content">

   <p className='g'>UI/UX  Refer & Earn  Friends Referred </p>

   
<div className='w'>
<div className='p'>
    
<Card className='b'><Card.Body>
<div class="container">


  <div class="row">
  <div className='n'>
    
    <div class="col-sm">
    <h2>
  Refferal Earnings
</h2>
<h3>₹ 2,500</h3>
    </div>
  
    <div class="col-sm">
    <h2>
  Total Refferals
</h2>
<h3>7</h3>
    </div>
    </div>


    < div className='n'>
    <div class="col-sm">
    <h2>
  Wallet Balance
</h2>
<h3>₹ 500</h3>
</div>

<div className='e'><Button >Withdraw Balance</Button>


    </div>
    
  </div>
  </div>



</div>


</Card.Body>

</Card>
</div>
  <div className='q'>

  <h4>Your Referral Code</h4>
    
    <Button className='btn' >EDCH54</Button>

</div>
</div>

<div className='base'>

  <h2>How does it work?</h2>

  <div className='com'>
   <div className='one'>
    
    <div className='co1'>
      <img src={a}/>

      <div className='xx'>
      <h3>Invite your Friends</h3>
      <p>Share the link Tutedude.com with your friends</p>

      </div>


      </div>    

    <div className='co1'>
     <img src={b}/>

      <div className='xx'>
      <h3>You get 200 as referral money</h3>
      <p>On total purchase the friend makes, into your wallet</p>

      </div>

    </div>
    <div className='co1'>
    <img src={rr}/>

<div className='xx'>
<h3>Transfer money from wallet</h3>
<p>When  the wallet balance reaches 200 or more , you can withdraw it</p>

</div>
    </div>


   </div>

<div className='two'>
<div className='co1'>
<img src={c}/>

<div className='xx'>
<h3>Friend purchasess any course</h3>
<p>Usimg your REFERRAL CODE in the payments page</p>

</div>

</div>
<div className='co1'>
<img src={e}/>

<div className='xx'>
<h3>Your friend gets 200 off</h3>
<p>On his overall fee on successful purchase using your referral code</p>

</div>

</div>



</div>



  </div>






  <h3 className='j'>Friends who enrolled</h3>

  <h3 className='j'>Terms and Conditions</h3>
</div>













   </div>
    

    </div>

  )
}

export default page