import React from "react";
class Home extends React.Component{

    getdetails()
    {
        var name=document.getElementById("customertext");
        var mobile=document.getElementById("customermobile");
        var orderdate=document.getElementById("orderdate");
    
        var OptChickenRiceBowl=document.getElementById("OptChickenRiceBowl");
        var OptPopcornRiceDuo=document.getElementById("OptPopcornRiceDuo");
        var OptVegRiceBowl=document.getElementById("OptVegRiceBowl");
    
        var OptBurger=document.getElementById("OptBurger");
        var OptPizza=document.getElementById("OptPizza");
        var OptFries=document.getElementById("OptFries");
        var OptChickenPopcorn=document.getElementById("OptChickenPopcorn");
    
        var OptRedbull=document.getElementById("OptRedbull");
        var OptPepsi=document.getElementById("OptPepsi");
    
        var OptChocoKrusher=document.getElementById("OptChocoKrusher");
        var OptStrawberryKrusher=document.getElementById("OptStrawberryKrusher");
        var OptVanillaKrusher=document.getElementById("OptVanillaKrusher");
    
        var customername=name.value;
        var customermobile=mobile.value;
        var date=orderdate.value;
        
    
        var mealname="";
        var snacksname="";
        var Beveragename="";
        var krushername="";
        var mealcost=0;
        var snackscost=0;
        var beveragecost=0;
        var krushercost=0;
        var total=0;
    
        if(OptChickenRiceBowl.checked)
        {
            mealname=OptChickenRiceBowl.value;
            mealcost=210;
        }
        if(OptPopcornRiceDuo.checked)
        {
            mealname=OptPopcornRiceDuo.value;
            mealcost=240;
        }
        if(OptVegRiceBowl.checked)
        {
            mealname=OptVegRiceBowl.value;
            mealcost=170;
        }
        if(OptBurger.checked)
        {
            snacksname=OptBurger.value;
            snackscost=120;
        }
        if(OptPizza.checked)
        {
            snacksname=OptPizza.value;
            snackscost=145;
        }
        if(OptFries.checked)
        {
            snacksname=OptFries.value;
            snackscost=60;
        }
        if(OptChickenPopcorn.checked)
        {
            snacksname=OptChickenPopcorn.value;
            snackscost=115;
        }
        total=mealcost+snackscost;
        if(OptRedbull.checked)
        {
            Beveragename+=OptRedbull.value+"<br>";
            beveragecost=90;
            total+=beveragecost;
        }
        if(OptPepsi.checked)
        {
            Beveragename+=OptPepsi.value+"<br>";
            beveragecost=85;
            total+=beveragecost;
        }
        if(OptChocoKrusher.checked)
        {
            krushername=OptChocoKrusher.value;
            krushercost=40;
            total+=krushercost;
        }
        if(OptStrawberryKrusher.checked)
        {
            krushername=OptStrawberryKrusher.value;
            krushercost=45;
            total+=krushercost;
        }
        if(OptVanillaKrusher.checked)
        {
            krushername=OptVanillaKrusher.value;
            krushercost=55;
            total+=krushercost;
        }
        document.getElementById("nameinbill").innerHTML=customername;
        document.getElementById("mobileinbill").innerHTML=customermobile;
        document.getElementById("dateinbill").innerHTML=date;
        document.getElementById("mealinbill").innerHTML=mealname;
        document.getElementById("snacksinbill").innerHTML=snacksname;
        document.getElementById("beveragesinbill").innerHTML=Beveragename;
        document.getElementById("krushersinbill").innerHTML=krushername;
        document.getElementById("totalbill").innerHTML="&#8377;"+total+"/-";
        
    }
    constructor(props)
    {
        super(props);
        this.getdetails=this.getdetails.bind(this);
    }
    render(){
        return(
        <div>
            <body class="container-fluid">
    <div class="carousel slide" id="carouselDemo" data-ride="carousel">

            <ul class="carousel-indicators">
                <li data-target="#carouselDemo" data-slide-to="0"></li>
                <li data-target="#carouselDemo" data-slide-to="1"></li>
                <li data-target="#carouselDemo" data-slide-to="2"></li>
            </ul>
    
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/images/kfcbucketbanner.jpg" class="d-block w-100"/>
            </div>
            <div class="carousel-item">
                <img src="../assets/images/KFCDoubles2banner.jpg" class="d-block w-100"/>
            </div>
            <div class="carousel-item">
                <img src="../assets/images/kfcwednesdaybanner.jpg" class="d-block w-100"/>
            </div>
        </div>
        <a href="#carouselDemo" class="carousel-control-prev" data-slide="prev" role="button">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#carouselDemo" class="carousel-control-next" data-slide="next" role="button">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    <div class="accordion" id="kfcmenu">
        <div class="card">
            <div class="card-header">
                <button type="button" class="btn btn-danger btn-block"  data-toggle="collapse" data-target="#customercollapse">CustomerInfo</button>
            </div>
            <div class="collapse fade" id="customercollapse" data-parent="#kfcmenu">
                <div class="card-body">
                    <div class="row">
                    <div class="col-4">
                        <label style={{fontSize: '3vm'}}>Name</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="customertext" name="customertext" class="form-control"/>
                    </div>
                    </div>
                    <div class="row">
                      <div class="col-4">
                          <label style={{fontSize: '3vm'}}>Mobile</label>
                      </div>
                      <div class="col-4">
                          <input type="text" id="customermobile" name="customermobile" class="form-control"/>
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label>OrderDate</label>
                        </div>
                        <div class="col-4">
                            <input type="date" id="orderdate" name="orderdate" class="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <button class="btn btn-danger btn-block" data-toggle="collapse" data-target="#collapseMeal">Choose Meal</button>
            </div>
            <div class="collapse" id="collapseMeal" data-parent="#kfcmenu">
                <div class="card-body">
                    <div class="row">
                        <div class="col-4">
                            <div class="card">
                                <div class="card-header" style={{height: '250px'}}>
                                    <img src="../assets/images/kfcchickenricebowl.jpg" width="50%" height="100%"/>
                                </div>
                                <div class="card-body">
                                    <div style={{height:'80px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Chicken Rice Bowl</h3>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <input type="radio" value="Chicken Rice Bowl" id="OptChickenRiceBowl" name="rice"/>&#8377; 210/-
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                          <div class="card">
                              <div class="card-header" style={{height: '250px'}}>
                                  <img src="../assets/images/kfcpopcornriceduo.jpg" width="50%" height="100%"/>
                              </div>
                              <div class="card-body">
                                  <div style={{height:'80px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Popcorn Rice Bowl</h3>
                                  </div>
                              </div>
                              <div class="card-footer">
                                  <input type="radio" value="Popcorn Rice Duo" id="OptPopcornRiceDuo" name="rice"/>&#8377; 240/-
                              </div>
                          </div>
                      </div>
                      <div class="col-4">
                          <div class="card">
                              <div class="card-header" style={{height: '250px'}}>
                                  <img src="../assets/images/kfcveg-rice-bowl.jpg" width="50%" height="100%"/>
                              </div>
                              <div class="card-body">
                                  <div style={{height:'80px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Veg Rice Bowl</h3>
                                   </div>
                              </div>
                              <div class="card-footer">
                                  <input type="radio" value="veg Rice Bowl" id="OptVegRiceBowl" name="rice"/>&#8377; 170/-
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
           <div class="card-header">
              <button type="button" class="btn btn-danger btn-block" data-toggle="collapse" data-target="#collapsesnacks">Choose Snacks</button>
           </div>
           <div class="collapse" id="collapsesnacks" data-parent="#kfcmenu">
             <div class="card-body">
                 <div class="row">
                     <div class="col-3">
                         <div class="card">
                             <div class="card-header" style={{height: '200px'}}>
                                 <img src="../assets/images/kfcburger.jpg" width="100%" height="100%" />
                             </div>
                             <div class="card-body">
                                <div style={{height: '70px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Burger</h3>
                                </div> 
                             </div>
                             <div class="card-footer">
                                 <input type="radio" id="OptBurger" value="Chicken Burger" name="snacks"/>&nbsp;&#8377;120/-
                             </div>
                         </div>
                     </div>
                     <div class="col-3">
                       <div class="card">
                           <div class="card-header" style={{height: '200px'}}>
                               <img src="../assets/images/kfcpizza.jfif" width="100%" height="100%" />
                           </div>
                           <div class="card-body">
                               <div style={{height: '70px'}}>
                                <h3 style={{fontSize: '3vm'}}>Pizza</h3>
                                </div>
                           </div>
                           <div class="card-footer">
                               <input type="radio" id="OptPizza" value="Chicken Pizza" name="snacks"/>&nbsp;&#8377;145/-
                           </div>
                       </div>
                     </div>
                     <div class="col-3">
                      <div class="card">
                          <div class="card-header" style={{height: '200px'}}>
                              <img src="../assets/images/kfcfries.jpg" width="100%" height="100%" />
                          </div>
                          <div class="card-body">
                              <div style={{height: '70px'}}>
                               <h3 style={{fontSize: '3vm'}}>Fries</h3>
                              </div>
                          </div>
                          <div class="card-footer">
                              <input type="radio" id="OptFries" value="French Fries" name="snacks"/>&nbsp;&#8377; 60/-
                          </div>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="card">
                          <div class="card-header" style={{height: '200px'}}>
                              <img src="../assets/images/kfcpopcorn.jpg" width="100%" height="100%" />
                          </div>
                          <div class="card-body">
                              <div style={{height: '70px'}}>
                               <h3 style={{fontSize: '3vm'}}>Popcorn</h3>
                              </div>
                          </div>
                          <div class="card-footer">
                              <input type="radio" id="OptChickenPopcorn" value="Chicken Popcorn" name="snacks"/>&nbsp;&#8377;115/-
                          </div>
                      </div>
                    </div>
                 </div>
                 
             </div>
           </div>
        </div>
        <div class="card">
            <div class="card-header">
                <button class="btn btn-danger btn-block" data-toggle="collapse" data-target="#collapsebeverages">Beverage</button>
            </div>
            <div class="collapse" id="collapsebeverages" data-parent="#kfcmenu">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <div class="card">
                                <div class="card-header" style={{height: '200px'}}>
                                    <img src="assets/images/kfcredbullenergydrink.jpg" width="50%" height="100%"/>
                                </div>
                                <div class="card-body">
                                    <div style={{height: '40px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Redbull</h3>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <input id="OptRedbull" value="Redbull Energy Drink" type="checkbox"/>&#8377; 90/-
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="card">
                                <div class="card-header" style={{height: '200px'}}>
                                    <img src="../assets/images/kfcpepsi.jpg" width="50%" height="100%"/>
                                </div>
                                <div class="card-body">
                                    <div style={{height: '40px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Pepsi</h3>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <input  id="OptPepsi" value="Pepsi Can" type="checkbox"/>&nbsp;&#8377; 85/-
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <button class="btn btn-danger btn-block" data-toggle="collapse" data-target="#collapsekrusher">Krushers</button>
            </div>
            <div class="collapse" id="collapsekrusher" data-parent="#kfcmenu">
                <div class="card-body">
                    <div class="row">
                        <div class="col-4">
                            <div class="card">
                                <div class="card-header" style={{height: '200px'}}>
                                    <img src="../assets/images/kfcmintchockrushers.jfif" width="70%" height="100%"/>
                                </div>
                                <div class="card-body">
                                    <div style={{height: '70px'}}>
                                    <h3 style={{fontSize: '3vm'}}>Choco Mint</h3>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <input type="radio" id="OptChocoKrusher" value="Choco Mint Krusher" name="krushers"/>&#8377; 40/-
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                          <div class="card">
                              <div class="card-header" style={{height: '200px'}}>
                                  <img src="../assets/images/kfcstrawberrykrusher.jfif" height="100%" width="70%"/>
                              </div>
                              <div class="card-body">
                                  <div style={{height: '70px'}}>
                                  <h3 style={{fontSize: '3vm'}}>Strawberry</h3>
                                  </div>
                              </div>
                              <div class="card-footer">
                                  <input type="radio" id="OptStrawberryKrusher" value="Strawberry Krusher" name="krushers"/>&#8377; 45/-
                              </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="card">
                              <div class="card-header" style={{height: '200px'}}>
                                  <img src="../assets/images/kfcbluevanillakrusher.gif" height="100%" width="70%"/>
                              </div>
                              <div class="card-body">
                                  <div style={{height: '70px'}}>
                                  <h3 style={{fontSize: '3vm'}}>Vanilla Blue</h3>
                                  </div>
                              </div>
                              <div class="card-footer">
                                  <input type="radio" id="OptVanillaKrusher" value="Vanilla Krusher" name="krushers"/>&#8377; 55/-
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  <div align="center" style={{marginTop:'15px'}}>
      <button onClick={this.getdetails} class="btn btn-outline-danger btn-lg" data-toggle="modal" data-target="#summarymodal">Place order</button>
  </div>
  <div class="modal" id="summarymodal">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h3 class="modal-title">Bill Summary</h3>
              </div>
              <div class="modal-body">
                <table class="table table-success table-hover">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td id="nameinbill"></td>
                        </tr>
                        <tr>
                            <td>Mobile Number</td>
                            <td id="mobileinbill"></td>
                        </tr>
                        <tr>
                            <td>Date Of Order</td>
                            <td id="dateinbill"></td>
                        </tr>
                        <tr>
                            <td>Meal</td>
                            <td id="mealinbill"></td>
                        </tr>
                        <tr>
                            <td>Snacks</td>
                            <td id="snacksinbill"></td>
                        </tr>
                        <tr>
                            <td>Beverages</td>
                            <td id="beveragesinbill"></td>
                        </tr>
                        <tr>
                            <td>Krushers</td>
                            <td id="krushersinbill"></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td id="totalbill"></td>
                        </tr>
                    </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <button align-content="left" class="btn btn-success" onclick="window.print()">PrintBill</button>
                <button class="btn btn-primary" data-dismiss="modal">Back</button>
              </div>
          </div>
      </div>
  </div>
  
</body>
        </div>
        );
    }
}
export default Home;